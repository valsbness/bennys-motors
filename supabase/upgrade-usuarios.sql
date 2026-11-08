-- Acceso por usuario, sin solicitar correo. Ejecutar después de los SQL anteriores.
-- Conserva usuarios de Auth, contraseñas, roles, ventas, gastos y tarifas.
begin;
alter table public.bennys_profiles add column if not exists username text;
do $$
declare employee record; candidate text; base_name text;
begin
  for employee in select id,display_name from public.bennys_profiles where username is null order by created_at,id loop
    base_name:=left(lower(regexp_replace(employee.display_name,'[^a-zA-Z0-9]','','g')),16);
    if length(base_name)<3 then base_name:='mecanico'; end if;
    candidate:=base_name;
    if exists(select 1 from public.bennys_profiles where username=candidate) then candidate:=base_name||'_'||left(replace(employee.id::text,'-',''),7); end if;
    update public.bennys_profiles set username=candidate where id=employee.id;
  end loop;
end $$;
create unique index if not exists bennys_profiles_username on public.bennys_profiles(username);
do $$ begin
  if not exists(select 1 from pg_constraint where conname='bennys_username_format' and conrelid='public.bennys_profiles'::regclass) then
    alter table public.bennys_profiles add constraint bennys_username_format check(username is null or username ~ '^[a-z0-9][a-z0-9._-]{2,23}$');
  end if;
end $$;
-- Contadores del servidor; ningún navegador puede leerlos ni escribirlos.
create table if not exists public.bennys_access_limits (
  key text primary key,
  window_start timestamptz not null,
  attempts integer not null
);
alter table public.bennys_access_limits enable row level security;
revoke all on public.bennys_access_limits from public,anon,authenticated;
create or replace function public.bennys_access_limit(p_key text,p_seconds integer,p_max integer) returns boolean
language plpgsql security definer set search_path=public,pg_temp as $$
declare attempt_count integer;
begin
  if p_key is null or length(p_key)>200 or p_seconds not between 1 and 86400 or p_max not between 1 and 1000 then raise exception 'Límite no válido.'; end if;
  delete from public.bennys_access_limits where window_start<now()-interval '2 days';
  insert into public.bennys_access_limits(key,window_start,attempts) values(p_key,now(),1)
  on conflict(key) do update set
    attempts=case when bennys_access_limits.window_start<now()-make_interval(secs=>p_seconds) then 1 else bennys_access_limits.attempts+1 end,
    window_start=case when bennys_access_limits.window_start<now()-make_interval(secs=>p_seconds) then now() else bennys_access_limits.window_start end
  returning attempts into attempt_count;
  return attempt_count<=p_max;
end $$;
revoke all on function public.bennys_access_limit(text,integer,integer) from public,anon,authenticated;
grant execute on function public.bennys_access_limit(text,integer,integer) to service_role;
grant select,insert,update on public.bennys_profiles to service_role;
notify pgrst,'reload schema';
commit;
-- Estos son los usuarios de las cuentas que ya existían. Mantienen su contraseña.
select display_name as mecanico,username as usuario,role as rol from public.bennys_profiles order by created_at;
