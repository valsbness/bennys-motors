-- Benny's Motors · actualización del panel de gestión.
-- Ejecutar DESPUÉS de setup.sql. Conserva usuarios, precios, ventas y código inicial.
-- Se puede repetir. Añade gastos, auditoría y motivo de anulación.
begin;

create table if not exists public.bennys_expenses (
  id uuid primary key,
  created_by uuid not null references public.bennys_profiles(id),
  description text not null check(length(trim(description)) between 1 and 240),
  category text not null check(category in ('Suministros','Herramientas','Alquiler','Otros')),
  amount numeric(14,2) not null check(amount>0 and amount<=100000000),
  created_at timestamptz not null default now(),
  status text not null default 'active' check(status in ('active','cancelled'))
);
create index if not exists bennys_expenses_date on public.bennys_expenses(created_at desc);
create table if not exists public.bennys_audit (
  id bigint generated always as identity primary key,
  actor_id uuid,
  action text not null,
  entity_id text not null,
  details jsonb not null default '{}',
  created_at timestamptz not null default now()
);
create index if not exists bennys_audit_date on public.bennys_audit(created_at desc);
alter table public.bennys_expenses enable row level security;
alter table public.bennys_audit enable row level security;
revoke all on public.bennys_expenses,public.bennys_audit from anon,authenticated;
grant select on public.bennys_expenses,public.bennys_audit to authenticated;
drop policy if exists bennys_expenses_read on public.bennys_expenses;
create policy bennys_expenses_read on public.bennys_expenses for select to authenticated using(public.bennys_is_admin());
drop policy if exists bennys_audit_read on public.bennys_audit;
create policy bennys_audit_read on public.bennys_audit for select to authenticated using(public.bennys_is_admin());

create or replace function public.bennys_pro_version() returns integer
language plpgsql stable security definer set search_path=public,pg_temp as $$
begin
  if not public.bennys_is_active() then raise exception 'Acceso no activo.'; end if;
  return 1;
end $$;

create or replace function public.bennys_create_expense(p_id uuid,p_description text,p_category text,p_amount numeric)
returns public.bennys_expenses language plpgsql security definer set search_path=public,pg_temp as $$
declare v_row public.bennys_expenses;
begin
  if not public.bennys_is_admin() then raise exception 'Solo administración puede registrar gastos.'; end if;
  if p_id is null then raise exception 'Falta el identificador del gasto.'; end if;
  perform pg_advisory_xact_lock(hashtextextended('expense:'||p_id::text,0));
  select * into v_row from public.bennys_expenses where id=p_id;
  if found then return v_row; end if;
  if p_description is null or length(trim(p_description)) not between 1 and 240 or p_category is null or p_category not in ('Suministros','Herramientas','Alquiler','Otros') or p_amount is null or p_amount<=0 or p_amount>100000000 or round(p_amount,2)<=0 then raise exception 'Revisa el concepto, categoría e importe.'; end if;
  insert into public.bennys_expenses(id,created_by,description,category,amount)
  values(p_id,auth.uid(),trim(p_description),p_category,round(p_amount,2)) returning * into v_row;
  return v_row;
end $$;

create or replace function public.bennys_cancel_expense(p_id uuid)
returns public.bennys_expenses language plpgsql security definer set search_path=public,pg_temp as $$
declare v_row public.bennys_expenses;
begin
  if not public.bennys_is_admin() then raise exception 'Solo administración puede anular gastos.'; end if;
  update public.bennys_expenses set status='cancelled' where id=p_id returning * into v_row;
  if not found then raise exception 'Gasto no encontrado.'; end if;
  return v_row;
end $$;

create or replace function public.bennys_void_order(p_id uuid,p_reason text)
returns public.bennys_orders language plpgsql security definer set search_path=public,pg_temp as $$
declare v_row public.bennys_orders;
begin
  if not public.bennys_is_active() then raise exception 'Acceso no activo.'; end if;
  if p_reason is null or length(trim(p_reason)) not between 3 and 240 then raise exception 'Indica un motivo de 3 a 240 caracteres.'; end if;
  select * into v_row from public.bennys_orders where id=p_id for update;
  if not found or (v_row.employee_id<>auth.uid() and not public.bennys_is_admin()) then raise exception 'No puedes anular esta venta.'; end if;
  if v_row.status='cancelled' then return v_row; end if;
  update public.bennys_orders set payload=payload||jsonb_build_object('cancellationReason',trim(p_reason)) where id=p_id;
  return public.bennys_cancel_order(p_id);
end $$;

create or replace function public.bennys_track_change() returns trigger
language plpgsql security definer set search_path=public,pg_temp as $$
declare v_action text; v_details jsonb;
begin
  if tg_table_name='bennys_orders' then
    if not (new.payload ? 'folio') then return new; end if;
    if tg_op='INSERT' or not(old.payload ? 'folio') then v_action:='venta_registrada';
    elsif new.status is distinct from old.status then v_action:='venta_anulada';
    else return new; end if;
    v_details:=jsonb_build_object('label',new.payload->>'folio','client',new.payload->>'client','amount',new.payload->'totals'->'total','reason',new.payload->>'cancellationReason');
  elsif tg_table_name='bennys_expenses' then
    if tg_op='INSERT' then v_action:='gasto_registrado';
    elsif new.status is distinct from old.status then v_action:='gasto_anulado';
    else return new; end if;
    v_details:=jsonb_build_object('label',new.description,'amount',new.amount,'category',new.category);
  elsif tg_table_name='bennys_profiles' then
    if tg_op='INSERT' then v_action:='cuenta_solicitada';
    elsif (new.display_name,new.role,new.active,new.commission) is distinct from (old.display_name,old.role,old.active,old.commission) then v_action:='empleado_actualizado';
    else return new; end if;
    v_details:=jsonb_build_object('label',new.display_name,'role',new.role,'active',new.active,'commission',new.commission);
  elsif tg_table_name='bennys_services' then
    if (new.cost,new.price) is not distinct from (old.cost,old.price) then return new; end if;
    v_action:='tarifa_actualizada';v_details:=jsonb_build_object('label',new.name,'oldPrice',old.price,'price',new.price,'oldCost',old.cost,'cost',new.cost);
  end if;
  insert into public.bennys_audit(actor_id,action,entity_id,details) values(auth.uid(),v_action,new.id::text,v_details);
  return new;
end $$;

drop trigger if exists bennys_orders_audit on public.bennys_orders;
create trigger bennys_orders_audit after insert or update on public.bennys_orders for each row execute function public.bennys_track_change();
drop trigger if exists bennys_expenses_audit on public.bennys_expenses;
create trigger bennys_expenses_audit after insert or update on public.bennys_expenses for each row execute function public.bennys_track_change();
drop trigger if exists bennys_profiles_audit on public.bennys_profiles;
create trigger bennys_profiles_audit after insert or update on public.bennys_profiles for each row execute function public.bennys_track_change();
drop trigger if exists bennys_services_audit on public.bennys_services;
create trigger bennys_services_audit after update on public.bennys_services for each row execute function public.bennys_track_change();

revoke all on function public.bennys_pro_version(),public.bennys_create_expense(uuid,text,text,numeric),public.bennys_cancel_expense(uuid),public.bennys_void_order(uuid,text),public.bennys_track_change() from public,anon,authenticated;
grant execute on function public.bennys_pro_version(),public.bennys_create_expense(uuid,text,text,numeric),public.bennys_cancel_expense(uuid),public.bennys_void_order(uuid,text) to authenticated;
notify pgrst,'reload schema';
commit;
select 'Panel profesional instalado. Vuelve a la aplicación y pulsa Actualizar.' as resultado;
