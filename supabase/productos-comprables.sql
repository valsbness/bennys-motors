-- Benny's Motors · selección de productos habilitados para compras desde Finanzas.
-- Ejecutar una sola vez en Supabase > SQL Editor.

begin;

alter table public.bennys_services add column if not exists purchase_enabled boolean not null default false;

-- Selección inicial sugerida: V8, V12, packs completos, nitroso y drift.
update public.bennys_services set purchase_enabled=true
where id in ('v8','v12','full-v8','full-v12','nitro-bottle','nitro-install','drift-kit');

create or replace function public.bennys_set_service_purchase_enabled(p_id text,p_enabled boolean)
returns public.bennys_services language plpgsql security definer set search_path=public,pg_temp
as $$
declare v_service public.bennys_services;
begin
  if not public.bennys_is_admin() then raise exception 'Solo administración puede configurar los productos de compra.'; end if;
  if p_id is null or p_enabled is null then raise exception 'Producto o selección no válida.'; end if;
  update public.bennys_services set purchase_enabled=p_enabled,updated_at=now() where id=p_id returning * into v_service;
  if not found then raise exception 'Producto no encontrado en el tarifario.'; end if;
  return v_service;
end;
$$;
revoke all on function public.bennys_set_service_purchase_enabled(text,boolean) from public,anon;
grant execute on function public.bennys_set_service_purchase_enabled(text,boolean) to authenticated;

create or replace function public.bennys_create_catalog_purchase(p_id uuid,p_items jsonb)
returns public.bennys_expenses language plpgsql security definer set search_path=public,pg_temp
as $$
declare
  v_row public.bennys_expenses; v_input jsonb; v_service public.bennys_services;
  v_items jsonb:='[]'::jsonb; v_seen text[]:='{}'; v_qty integer;
  v_total numeric:=0; v_units integer:=0; v_description text;
begin
  if not public.bennys_is_admin() then raise exception 'Solo administración puede registrar compras.'; end if;
  if p_id is null then raise exception 'Falta el identificador de la compra.'; end if;
  perform pg_advisory_xact_lock(hashtextextended('catalog-purchase:'||p_id::text,0));
  select * into v_row from public.bennys_expenses where id=p_id;
  if found then return v_row; end if;
  if p_items is null or jsonb_typeof(p_items)<>'array' or jsonb_array_length(p_items)<1 or jsonb_array_length(p_items)>23 then raise exception 'Selecciona al menos un producto del tarifario.'; end if;
  for v_input in select value from jsonb_array_elements(p_items) loop
    if coalesce(v_input->>'id','')='' or coalesce(v_input->>'qty','') !~ '^[0-9]{1,3}$' then raise exception 'Producto o cantidad no válida.'; end if;
    v_qty:=(v_input->>'qty')::integer;
    if v_qty<1 or v_qty>999 then raise exception 'La cantidad debe estar entre 1 y 999.'; end if;
    if (v_input->>'id')=any(v_seen) then raise exception 'No repitas productos en la misma compra.'; end if;
    select * into v_service from public.bennys_services where id=v_input->>'id' for share;
    if not found then raise exception 'Uno de los productos ya no existe en el tarifario.'; end if;
    if not v_service.purchase_enabled then raise exception 'Este producto no está habilitado para registrarse como compra.'; end if;
    v_seen:=array_append(v_seen,v_service.id); v_units:=v_units+v_qty; v_total:=v_total+(v_service.cost*v_qty);
    v_items:=v_items||jsonb_build_array(jsonb_build_object('id',v_service.id,'name',v_service.name,'cost',v_service.cost,'qty',v_qty,'line_total',round(v_service.cost*v_qty,2)));
  end loop;
  if v_total<=0 or v_total>100000000 then raise exception 'El total de la compra debe ser mayor que cero y no superar $100,000,000.'; end if;
  select left('Compra de '||v_units||' unidades: '||string_agg((item->>'name')||' × '||(item->>'qty'),', '),240) into v_description from jsonb_array_elements(v_items) as x(item);
  insert into public.bennys_expenses(id,created_by,description,category,amount,items) values(p_id,auth.uid(),v_description,'Compras',round(v_total,2),v_items) returning * into v_row;
  return v_row;
end;
$$;
revoke all on function public.bennys_create_catalog_purchase(uuid,jsonb) from public,anon;
grant execute on function public.bennys_create_catalog_purchase(uuid,jsonb) to authenticated;

notify pgrst,'reload schema';
commit;
