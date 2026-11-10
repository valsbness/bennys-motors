-- Benny's Motors · Cierres de caja y calendario de movimientos
-- Ejecutar una sola vez en Supabase SQL Editor. No borra ni modifica ventas, gastos ni usuarios.
begin;

create table if not exists public.bennys_cash_closings (
  id uuid primary key,
  closed_by uuid not null references public.bennys_profiles(id),
  cash_amount numeric(14,2) not null check(cash_amount between 0 and 100000000),
  notes text not null default '' check(length(notes)<=500),
  period_start timestamptz,
  closed_at timestamptz not null default now(),
  snapshot jsonb not null default '{}'::jsonb
);
create index if not exists bennys_cash_closings_date on public.bennys_cash_closings(closed_at desc);
alter table public.bennys_cash_closings enable row level security;
revoke all on public.bennys_cash_closings from anon,authenticated;
grant select on public.bennys_cash_closings to authenticated;
drop policy if exists bennys_cash_closings_admin_read on public.bennys_cash_closings;
create policy bennys_cash_closings_admin_read on public.bennys_cash_closings for select to authenticated
using(public.bennys_is_admin());

-- "Compras" pasa a ser una categoría disponible en el registro de gastos existente.
alter table public.bennys_expenses drop constraint if exists bennys_expenses_category_check;
alter table public.bennys_expenses add constraint bennys_expenses_category_check
  check(category in ('Compras','Suministros','Herramientas','Alquiler','Otros'));

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
        'category',e.category,'amount',e.amount,'created_by',e.created_by,'employee_name',p.display_name
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
end $$;

revoke all on function public.bennys_close_cash(uuid,numeric,text) from public,anon;
grant execute on function public.bennys_close_cash(uuid,numeric,text) to authenticated;

-- Actualizar la validación del registro de gastos para aceptar la categoría Compras.
create or replace function public.bennys_create_expense(p_id uuid,p_description text,p_category text,p_amount numeric)
returns public.bennys_expenses language plpgsql security definer set search_path=public,pg_temp as $
declare v_row public.bennys_expenses;
begin
  if not public.bennys_is_admin() then raise exception 'Solo administración puede registrar compras y gastos.'; end if;
  if p_id is null then raise exception 'Falta el identificador del movimiento.'; end if;
  perform pg_advisory_xact_lock(hashtextextended('expense:'||p_id::text,0));
  select * into v_row from public.bennys_expenses where id=p_id;
  if found then return v_row; end if;
  if p_description is null or length(trim(p_description)) not between 1 and 240
    or p_category is null or p_category not in ('Compras','Suministros','Herramientas','Alquiler','Otros')
    or p_amount is null or p_amount<=0 or p_amount>100000000 or round(p_amount,2)<=0
  then raise exception 'Revisa el concepto, categoría e importe.'; end if;
  insert into public.bennys_expenses(id,created_by,description,category,amount)
  values(p_id,auth.uid(),trim(p_description),p_category,round(p_amount,2)) returning * into v_row;
  return v_row;
end $;
revoke all on function public.bennys_create_expense(uuid,text,text,numeric) from public,anon;
grant execute on function public.bennys_create_expense(uuid,text,text,numeric) to authenticated;

commit;
