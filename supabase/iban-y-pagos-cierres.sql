-- Benny's Motors · IBAN de empleados y pagos de comisiones por cierre
-- Ejecutar UNA SOLA VEZ en Supabase SQL Editor. No elimina ni modifica ventas ni cierres existentes.
begin;
alter table public.bennys_profiles add column if not exists iban text not null default '';
alter table public.bennys_profiles drop constraint if exists bennys_profiles_iban_check;
alter table public.bennys_profiles add constraint bennys_profiles_iban_check check(iban='' or iban ~ '^ES[0-9]+$');

create or replace function public.bennys_manage_employee(p_id uuid,p_name text,p_role text,p_active boolean,p_commission numeric,p_iban text)
returns public.bennys_profiles language plpgsql security definer set search_path=public,pg_temp as $$
declare v_profile public.bennys_profiles; v_iban text:=upper(regexp_replace(coalesce(p_iban,''),'[[:space:]-]','','g'));
begin
 if not public.bennys_is_admin() then raise exception 'Solo administración puede gestionar empleados.'; end if;
 if p_role not in ('admin','employee') or p_commission is null or p_commission<0 or p_commission>100 or length(trim(p_name)) not between 1 and 80 or p_active is null then raise exception 'Revisa el nombre, rol y comisión.'; end if;
 if v_iban<>'' and v_iban !~ '^ES[0-9]+$' then raise exception 'El IBAN debe comenzar por ES y continuar con dígitos.'; end if;
 if p_id=auth.uid() and (p_role<>'admin' or not p_active) then raise exception 'No puedes quitar tu propio acceso de administrador.'; end if;
 update public.bennys_profiles set display_name=trim(p_name),role=p_role,active=p_active,commission=round(p_commission,2),iban=v_iban where id=p_id returning * into v_profile;
 if not found then raise exception 'Empleado no encontrado.'; end if; return v_profile;
end $$;
revoke all on function public.bennys_manage_employee(uuid,text,text,boolean,numeric,text) from public,anon;
grant execute on function public.bennys_manage_employee(uuid,text,text,boolean,numeric,text) to authenticated;

create or replace function public.bennys_update_own_iban(p_iban text)
returns public.bennys_profiles language plpgsql security definer set search_path=public,pg_temp as $$
declare v_profile public.bennys_profiles; v_iban text:=upper(regexp_replace(coalesce(p_iban,''),'[[:space:]-]','','g'));
begin
 if auth.uid() is null or not public.bennys_is_active() then raise exception 'Tu cuenta no tiene acceso activo.'; end if;
 if v_iban<>'' and v_iban !~ '^ES[0-9]+$' then raise exception 'El IBAN debe comenzar por ES y continuar con dígitos.'; end if;
 update public.bennys_profiles set iban=v_iban where id=auth.uid() returning * into v_profile; return v_profile;
end $$;
revoke all on function public.bennys_update_own_iban(text) from public,anon;
grant execute on function public.bennys_update_own_iban(text) to authenticated;

create table if not exists public.bennys_cash_closing_payments(
 closing_id uuid not null references public.bennys_cash_closings(id) on delete cascade,
 employee_id uuid not null references public.bennys_profiles(id),
 paid boolean not null default true,
 paid_by uuid references public.bennys_profiles(id),
 paid_at timestamptz not null default now(),
 primary key(closing_id,employee_id)
);
alter table public.bennys_cash_closing_payments enable row level security;
revoke all on public.bennys_cash_closing_payments from anon,authenticated;
grant select on public.bennys_cash_closing_payments to authenticated;
drop policy if exists bennys_cash_closing_payments_admin_read on public.bennys_cash_closing_payments;
create policy bennys_cash_closing_payments_admin_read on public.bennys_cash_closing_payments for select to authenticated using(public.bennys_is_admin());

create or replace function public.bennys_set_closing_payment(p_closing_id uuid,p_employee_id uuid,p_paid boolean)
returns void language plpgsql security definer set search_path=public,pg_temp as $$
begin
 if not public.bennys_is_admin() then raise exception 'Solo administración puede actualizar los pagos.'; end if;
 if p_closing_id is null or p_employee_id is null or p_paid is null then raise exception 'Datos de pago incompletos.'; end if;
 if not exists(select 1 from public.bennys_cash_closings where id=p_closing_id) then raise exception 'Cierre no encontrado.'; end if;
 if p_paid then
  insert into public.bennys_cash_closing_payments(closing_id,employee_id,paid,paid_by,paid_at) values(p_closing_id,p_employee_id,true,auth.uid(),now())
  on conflict(closing_id,employee_id) do update set paid=true,paid_by=auth.uid(),paid_at=now();
 else delete from public.bennys_cash_closing_payments where closing_id=p_closing_id and employee_id=p_employee_id;
 end if;
end $$;
revoke all on function public.bennys_set_closing_payment(uuid,uuid,boolean) from public,anon;
grant execute on function public.bennys_set_closing_payment(uuid,uuid,boolean) to authenticated;
notify pgrst,'reload schema';
commit;