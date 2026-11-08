-- Benny's Motors: ejecutar una vez en Supabase > SQL Editor.
-- Se puede volver a ejecutar: conserva los empleados, precios y órdenes existentes.
-- La última consulta devuelve un código de activación para el primer administrador.

create table if not exists public.bennys_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null check (length(display_name) between 1 and 80),
  email text not null default '',
  role text not null default 'employee' check (role in ('admin','employee')),
  active boolean not null default false,
  commission numeric(5,2) not null default 0 check (commission between 0 and 100),
  created_at timestamptz not null default now()
);
create table if not exists public.bennys_services (
  id text primary key,
  name text not null,
  cost numeric(14,2) not null check (cost between 0 and 100000000),
  price numeric(14,2) not null check (price between 0 and 100000000),
  exclusive_group text check (exclusive_group in ('motor','traccion','neumaticos')),
  updated_at timestamptz not null default now()
);
create table if not exists public.bennys_orders (
  id uuid primary key,
  number bigint generated always as identity unique,
  employee_id uuid not null references public.bennys_profiles(id),
  payload jsonb not null,
  created_at timestamptz not null default now(),
  status text not null default 'active' check (status in ('active','cancelled'))
);
create index if not exists bennys_orders_employee_date on public.bennys_orders(employee_id,created_at desc);
create table if not exists public.bennys_admin_setup (
  singleton boolean primary key default true check(singleton),
  code_hash text not null,
  used_at timestamptz
);

alter table public.bennys_profiles enable row level security;
alter table public.bennys_services enable row level security;
alter table public.bennys_orders enable row level security;
alter table public.bennys_admin_setup enable row level security;
revoke all on public.bennys_profiles, public.bennys_services, public.bennys_orders, public.bennys_admin_setup from anon, authenticated;
grant select on public.bennys_profiles, public.bennys_services, public.bennys_orders to authenticated;

create or replace function public.bennys_is_admin() returns boolean
language sql stable security definer set search_path=public,pg_temp
as $$ select exists(select 1 from public.bennys_profiles where id=auth.uid() and active and role='admin') $$;
create or replace function public.bennys_is_active() returns boolean
language sql stable security definer set search_path=public,pg_temp
as $$ select exists(select 1 from public.bennys_profiles where id=auth.uid() and active) $$;

drop policy if exists bennys_profiles_read on public.bennys_profiles;
create policy bennys_profiles_read on public.bennys_profiles for select to authenticated
using(id=auth.uid() or public.bennys_is_admin());
drop policy if exists bennys_services_read on public.bennys_services;
create policy bennys_services_read on public.bennys_services for select to authenticated
using(public.bennys_is_active());
drop policy if exists bennys_orders_read on public.bennys_orders;
create policy bennys_orders_read on public.bennys_orders for select to authenticated
using(public.bennys_is_active() and (employee_id=auth.uid() or public.bennys_is_admin()));

insert into public.bennys_services(id,name,cost,price,exclusive_group) values
('rendimiento','Rendimiento',7000,10000,null),
('ruedas','Juego de ruedas',7000,10000,null),
('humo','Humo de neumáticos',2500,5000,null),
('cosmeticos','Cosméticos',2000,3000,null),
('pintura','Repintar',500,1500,null),
('limpieza','Limpieza',250,500,null),
('reparacion','Reparación',500,1000,null),
('v12','Motor V12',300000,500000,'motor'),
('v8','Motor V8',40000,50000,'motor'),
('awd','Tracción AWD',8000,12500,'traccion'),
('rwd','Tracción RWD',7000,11500,'traccion'),
('fdw','Tracción FDW',8500,10500,'traccion'),
('slick','Slick',4000,6000,'neumaticos'),
('semi','Semi-Slick',3500,6000,'neumaticos'),
('offroad','Offroad',4500,6500,'neumaticos'),
('frenos','Frenos cerámicos',8000,20000,null),
('turbo','Turbo charger',25000,35000,null),
('kit','Kit de extras',4000,5000,null)
on conflict(id) do nothing;

create or replace function public.bennys_ensure_profile(p_name text default null)
returns public.bennys_profiles language plpgsql security definer set search_path=public,pg_temp
as $$
declare v_user uuid:=auth.uid(); v_email text; v_name text; v_profile public.bennys_profiles;
begin
  if v_user is null then raise exception 'Inicia sesión para continuar.'; end if;
  select email,coalesce(nullif(trim(p_name),''),nullif(trim(raw_user_meta_data->>'display_name'),''),'Mecánico')
  into v_email,v_name from auth.users where id=v_user;
  insert into public.bennys_profiles(id,display_name,email) values(v_user,left(v_name,80),coalesce(v_email,''))
  on conflict(id) do nothing;
  select * into v_profile from public.bennys_profiles where id=v_user;
  return v_profile;
end $$;

create or replace function public.bennys_has_admin() returns boolean
language sql stable security definer set search_path=public,pg_temp
as $$ select exists(select 1 from public.bennys_profiles where role='admin' and active) $$;

create or replace function public.bennys_claim_admin(p_code text)
returns public.bennys_profiles language plpgsql security definer set search_path=public,pg_temp
as $$
declare v_profile public.bennys_profiles; v_setup public.bennys_admin_setup;
begin
  if auth.uid() is null then raise exception 'Inicia sesión para continuar.'; end if;
  perform pg_advisory_xact_lock(74052026);
  select * into v_setup from public.bennys_admin_setup where singleton for update;
  if not found or p_code is null or length(trim(p_code))<16 or public.bennys_has_admin() or v_setup.used_at is not null or v_setup.code_hash is distinct from md5(trim(p_code)) then
    raise exception 'El código inicial no es válido o ya se utilizó.';
  end if;
  perform public.bennys_ensure_profile();
  update public.bennys_profiles set role='admin',active=true where id=auth.uid() returning * into v_profile;
  update public.bennys_admin_setup set used_at=now() where singleton;
  return v_profile;
end $$;

create or replace function public.bennys_manage_employee(p_id uuid,p_name text,p_role text,p_active boolean,p_commission numeric)
returns public.bennys_profiles language plpgsql security definer set search_path=public,pg_temp
as $$
declare v_profile public.bennys_profiles;
begin
  perform pg_advisory_xact_lock(74052026);
  if not public.bennys_is_admin() then raise exception 'Solo el administrador puede gestionar empleados.'; end if;
  if p_role not in ('admin','employee') or p_commission is null or p_commission<0 or p_commission>100 or length(trim(p_name)) not between 1 and 80 or p_active is null then
    raise exception 'Revisa el nombre, rol y comisión.';
  end if;
  if p_id=auth.uid() and (p_role<>'admin' or not p_active) then raise exception 'No puedes quitar tu propio acceso de administrador.'; end if;
  update public.bennys_profiles set display_name=trim(p_name),role=p_role,active=p_active,commission=round(p_commission,2)
  where id=p_id returning * into v_profile;
  if not found then raise exception 'Empleado no encontrado.'; end if;
  return v_profile;
end $$;

create or replace function public.bennys_update_service(p_id text,p_cost numeric,p_price numeric)
returns public.bennys_services language plpgsql security definer set search_path=public,pg_temp
as $$
declare v_service public.bennys_services;
begin
  if not public.bennys_is_admin() then raise exception 'Solo el administrador puede cambiar tarifas.'; end if;
  if p_cost is null or p_price is null or p_cost<0 or p_price<0 or p_cost>100000000 or p_price>100000000 then raise exception 'Importes no válidos.'; end if;
  update public.bennys_services set cost=round(p_cost,2),price=round(p_price,2),updated_at=now()
  where id=p_id returning * into v_service;
  if not found then raise exception 'Servicio no encontrado.'; end if;
  return v_service;
end $$;

create or replace function public.bennys_create_order(p_id uuid,p_client text,p_player_id text,p_items jsonb,p_discount numeric,p_commission numeric,p_payment text,p_notes text)
returns public.bennys_orders language plpgsql security definer set search_path=public,pg_temp
as $$
declare
  v_profile public.bennys_profiles; v_order public.bennys_orders; v_service public.bennys_services;
  v_item jsonb; v_items jsonb:='[]'; v_seen text[]:='{}'; v_groups text[]:='{}'; v_qty integer;
  v_subtotal numeric:=0; v_cost numeric:=0; v_discount numeric; v_total numeric; v_gross numeric;
  v_rate numeric; v_commission numeric; v_units integer:=0; v_folio text;
begin
  select * into v_profile from public.bennys_profiles where id=auth.uid() and active for share;
  if not found then raise exception 'Tu cuenta no tiene acceso activo al taller.'; end if;
  if p_id is null then raise exception 'Falta el identificador de la orden.'; end if;
  perform pg_advisory_xact_lock(hashtextextended(p_id::text,0));
  select * into v_order from public.bennys_orders where id=p_id;
  if found then
    if v_order.employee_id<>auth.uid() then raise exception 'Identificador no disponible.'; end if;
    return v_order;
  end if;
  if p_client is null or length(trim(p_client)) not between 1 and 80 or length(coalesce(p_player_id,''))>20 or length(coalesce(p_notes,''))>500 then raise exception 'Revisa los datos del cliente.'; end if;
  if p_payment not in ('Efectivo','Transferencia','Tarjeta') or p_payment is null then raise exception 'Método de pago no válido.'; end if;
  if p_discount is null or p_discount<0 or p_discount>100 or p_items is null or jsonb_typeof(p_items)<>'array' or jsonb_array_length(p_items) not between 1 and 18 then raise exception 'Orden o descuento no válido.'; end if;
  v_rate:=case when v_profile.role='admin' then coalesce(p_commission,v_profile.commission) else v_profile.commission end;
  if v_rate<0 or v_rate>100 then raise exception 'Comisión no válida.'; end if;
  for v_item in select value from jsonb_array_elements(p_items) loop
    select * into v_service from public.bennys_services where id=v_item->>'id' for share;
    if not found or v_service.id=any(v_seen) then raise exception 'Servicio no válido o repetido.'; end if;
    if coalesce(v_item->>'qty','')!~'^[0-9]{1,3}$' then raise exception 'Cantidad no válida.'; end if;
    v_qty:=(v_item->>'qty')::integer;
    if v_qty<1 or v_qty>999 then raise exception 'Cantidad fuera de rango.'; end if;
    if v_service.exclusive_group is not null then
      if v_qty<>1 or v_service.exclusive_group=any(v_groups) then raise exception 'Elige una sola opción de motor, tracción y neumáticos.'; end if;
      v_groups:=array_append(v_groups,v_service.exclusive_group);
    end if;
    if (v_item->>'price')::numeric is distinct from v_service.price or (v_item->>'cost')::numeric is distinct from v_service.cost then
      raise exception 'TARIFA_CAMBIADA: Las tarifas cambiaron. Actualiza la cotización y revisa el total.';
    end if;
    v_seen:=array_append(v_seen,v_service.id);v_units:=v_units+v_qty;
    v_subtotal:=v_subtotal+v_service.price*v_qty;v_cost:=v_cost+v_service.cost*v_qty;
    v_items:=v_items||jsonb_build_array(jsonb_build_object('id',v_service.id,'name',v_service.name,'cost',v_service.cost,'price',v_service.price,'qty',v_qty,'exclusive',v_service.exclusive_group));
  end loop;
  v_discount:=round(v_subtotal*p_discount/100,2);v_total:=v_subtotal-v_discount;v_gross:=v_total-v_cost;
  v_commission:=round(greatest(0,v_gross)*v_rate/100,2);
  insert into public.bennys_orders(id,employee_id,payload) values(p_id,auth.uid(),'{}') returning * into v_order;
  v_folio:='#BNY-'||case when v_order.number<1000 then lpad(v_order.number::text,3,'0') else v_order.number::text end;
  update public.bennys_orders set payload=jsonb_build_object(
    'id',p_id,'folio',v_folio,'date',v_order.created_at,'status','active','client',trim(p_client),'playerId',coalesce(p_player_id,''),
    'mechanic',v_profile.display_name,'employeeId',auth.uid(),'payment',p_payment,'notes',coalesce(p_notes,''),'items',v_items,'discount',p_discount,'commission',v_rate,
    'totals',jsonb_build_object('subtotal',v_subtotal,'cost',v_cost,'discount',v_discount,'total',v_total,'gross',v_gross,'commission',v_commission,'net',v_gross-v_commission,'units',v_units)
  ) where id=p_id returning * into v_order;
  return v_order;
end $$;

create or replace function public.bennys_cancel_order(p_id uuid)
returns public.bennys_orders language plpgsql security definer set search_path=public,pg_temp
as $$
declare v_order public.bennys_orders;
begin
  if not public.bennys_is_active() then raise exception 'Tu cuenta no tiene acceso activo.'; end if;
  update public.bennys_orders set status='cancelled',payload=jsonb_set(payload,'{status}','"cancelled"')
  where id=p_id and (employee_id=auth.uid() or public.bennys_is_admin()) returning * into v_order;
  if not found then raise exception 'No tienes permiso para anular esta orden.'; end if;
  return v_order;
end $$;

-- Esta función solo puede ejecutarla el propietario de la base desde SQL Editor.
create or replace function public.bennys_prepare_admin_setup() returns text
language plpgsql security definer set search_path=public,pg_temp
as $$
declare v_code text;
begin
  perform pg_advisory_xact_lock(74052026);
  if public.bennys_has_admin() then return 'El administrador ya está configurado.'; end if;
  v_code:=replace(gen_random_uuid()::text,'-','')||replace(gen_random_uuid()::text,'-','');
  insert into public.bennys_admin_setup(singleton,code_hash,used_at) values(true,md5(v_code),null)
  on conflict(singleton) do update set code_hash=excluded.code_hash,used_at=null;
  return v_code;
end $$;

revoke all on function public.bennys_is_admin(),public.bennys_is_active(),public.bennys_ensure_profile(text),public.bennys_has_admin(),public.bennys_claim_admin(text),public.bennys_manage_employee(uuid,text,text,boolean,numeric),public.bennys_update_service(text,numeric,numeric),public.bennys_create_order(uuid,text,text,jsonb,numeric,numeric,text,text),public.bennys_cancel_order(uuid),public.bennys_prepare_admin_setup() from public,anon,authenticated;
grant execute on function public.bennys_is_admin(),public.bennys_is_active(),public.bennys_ensure_profile(text),public.bennys_has_admin(),public.bennys_claim_admin(text),public.bennys_manage_employee(uuid,text,text,boolean,numeric),public.bennys_update_service(text,numeric,numeric),public.bennys_create_order(uuid,text,text,jsonb,numeric,numeric,text,text),public.bennys_cancel_order(uuid) to authenticated;

notify pgrst,'reload schema';
select public.bennys_prepare_admin_setup() as codigo_inicial_admin;
