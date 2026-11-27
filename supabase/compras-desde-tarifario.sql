-- Benny's Motors · compras de productos desde el tarifario.
-- Ejecutar una sola vez en Supabase > SQL Editor después de setup.sql,
-- upgrade-profesional.sql y cierres-caja.sql. No modifica compras ni ventas anteriores.

begin;

alter table public.bennys_expenses
  add column if not exists items jsonb not null default '[]'::jsonb;

alter table public.bennys_expenses
  drop constraint if exists bennys_expenses_items_array_check;
alter table public.bennys_expenses
  add constraint bennys_expenses_items_array_check
  check (jsonb_typeof(items) = 'array');

create or replace function public.bennys_create_catalog_purchase(p_id uuid, p_items jsonb)
returns public.bennys_expenses
language plpgsql security definer set search_path=public,pg_temp
as $$
declare
  v_row public.bennys_expenses;
  v_input jsonb;
  v_service public.bennys_services;
  v_items jsonb := '[]'::jsonb;
  v_seen text[] := '{}';
  v_qty integer;
  v_total numeric := 0;
  v_units integer := 0;
  v_description text;
begin
  if not public.bennys_is_admin() then
    raise exception 'Solo administración puede registrar compras.';
  end if;
  if p_id is null then raise exception 'Falta el identificador de la compra.'; end if;
  perform pg_advisory_xact_lock(hashtextextended('catalog-purchase:'||p_id::text,0));
  select * into v_row from public.bennys_expenses where id=p_id;
  if found then return v_row; end if;

  if p_items is null or jsonb_typeof(p_items)<>'array'
     or jsonb_array_length(p_items)<1 or jsonb_array_length(p_items)>23 then
    raise exception 'Selecciona al menos un producto del tarifario.';
  end if;

  for v_input in select value from jsonb_array_elements(p_items) loop
    if coalesce(v_input->>'id','')='' or coalesce(v_input->>'qty','') !~ '^[0-9]{1,3}$' then
      raise exception 'Producto o cantidad no válida.';
    end if;
    v_qty := (v_input->>'qty')::integer;
    if v_qty<1 or v_qty>999 then raise exception 'La cantidad debe estar entre 1 y 999.'; end if;
    if (v_input->>'id')=any(v_seen) then raise exception 'No repitas productos en la misma compra.'; end if;

    select * into v_service from public.bennys_services
      where id=v_input->>'id' for share;
    if not found then raise exception 'Uno de los productos ya no existe en el tarifario.'; end if;

    v_seen := array_append(v_seen,v_service.id);
    v_units := v_units+v_qty;
    v_total := v_total+(v_service.cost*v_qty);
    v_items := v_items || jsonb_build_array(jsonb_build_object(
      'id',v_service.id,'name',v_service.name,'cost',v_service.cost,
      'qty',v_qty,'line_total',round(v_service.cost*v_qty,2)
    ));
  end loop;

  if v_total<=0 or v_total>100000000 then
    raise exception 'El total de la compra debe ser mayor que cero y no superar $100,000,000.';
  end if;

  select left('Compra de '||v_units||' unidades: '||
    string_agg((item->>'name')||' × '||(item->>'qty'),', '),240)
  into v_description from jsonb_array_elements(v_items) item;

  insert into public.bennys_expenses(id,created_by,description,category,amount,items)
  values(p_id,auth.uid(),v_description,'Compras',round(v_total,2),v_items)
  returning * into v_row;
  return v_row;
end;
$$;

revoke all on function public.bennys_create_catalog_purchase(uuid,jsonb) from public,anon;
grant execute on function public.bennys_create_catalog_purchase(uuid,jsonb) to authenticated;

-- Incluye el detalle de productos y cantidades en la copia histórica de cada cierre.
create or replace function public.bennys_close_cash(p_id uuid,p_cash_amount numeric,p_notes text default '')
returns public.bennys_cash_closings
language plpgsql security definer set search_path=public,pg_temp
as $$
declare
  v_row public.bennys_cash_closings;
  v_start timestamptz;
  v_end timestamptz:=clock_timestamp();
  v_snapshot jsonb;
begin
  if not public.bennys_is_admin() then raise exception 'Solo administración puede cerrar la caja.'; end if;
  if p_id is null then raise exception 'Falta el identificador del cierre.'; end if;
  if p_cash_amount is null or p_cash_amount<0 or p_cash_amount>100000000 then raise exception 'El monto real de caja no es válido.'; end if;
  if length(coalesce(p_notes,''))>500 then raise exception 'La nota no puede superar 500 caracteres.'; end if;

  perform pg_advisory_xact_lock(hashtextextended('bennys-cash-close',0));
  select * into v_row from public.bennys_cash_closings where id=p_id;
  if found then return v_row; end if;
  select max(closed_at) into v_start from public.bennys_cash_closings;

  select jsonb_build_object(
    'orders',coalesce((
      select jsonb_agg(jsonb_build_object(
        'id',o.id,'number',o.number,'created_at',o.created_at,'status',o.status,
        'employee_id',o.employee_id,'employee_name',p.display_name,'payload',o.payload
      ) order by o.created_at)
      from public.bennys_orders o
      left join public.bennys_profiles p on p.id=o.employee_id
      where (v_start is null or o.created_at>v_start) and o.created_at<=v_end
    ),'[]'::jsonb),
    'purchases',coalesce((
      select jsonb_agg(jsonb_build_object(
        'id',e.id,'created_at',e.created_at,'status',e.status,'description',e.description,
        'category',e.category,'amount',e.amount,'items',e.items,
        'created_by',e.created_by,'employee_name',p.display_name
      ) order by e.created_at)
      from public.bennys_expenses e
      left join public.bennys_profiles p on p.id=e.created_by
      where (v_start is null or e.created_at>v_start) and e.created_at<=v_end
    ),'[]'::jsonb)
  ) into v_snapshot;

  insert into public.bennys_cash_closings(id,closed_by,cash_amount,notes,period_start,closed_at,snapshot)
  values(p_id,auth.uid(),round(p_cash_amount,2),trim(coalesce(p_notes,'')),v_start,v_end,v_snapshot)
  returning * into v_row;

  insert into public.bennys_audit(actor_id,action,entity_id,details)
  values(auth.uid(),'cierre_caja',p_id::text,jsonb_build_object(
    'cash_amount',round(p_cash_amount,2),
    'orders',jsonb_array_length(v_snapshot->'orders'),
    'purchases',jsonb_array_length(v_snapshot->'purchases'),
    'period_start',v_start,'closed_at',v_end
  ));
  return v_row;
end;
$$;

revoke all on function public.bennys_close_cash(uuid,numeric,text) from public,anon;
grant execute on function public.bennys_close_cash(uuid,numeric,text) to authenticated;

notify pgrst,'reload schema';
commit;

select 'Compras del tarifario instaladas. Ya puedes registrar productos y cantidades desde Finanzas.' as resultado;
