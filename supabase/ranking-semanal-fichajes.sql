-- Benny's Motors · Ranking semanal de fichajes
-- Ejecutar UNA VEZ después de fichajes-y-reportes.sql.
-- No modifica ni elimina jornadas: el ranking se calcula desde el historial guardado.
begin;

create or replace function public.bennys_clock_weekly_top()
returns table(employee_id uuid,employee_name text,worked_seconds bigint)
language plpgsql security definer set search_path=public,pg_temp as $$
declare
  v_start timestamptz;
  v_end timestamptz:=clock_timestamp();
begin
  if not public.bennys_is_active() then
    raise exception 'Tu cuenta no tiene acceso activo.';
  end if;

  -- La semana laboral se calcula con el horario de Panamá y comienza el lunes.
  v_start:=date_trunc('week',timezone('America/Panama',v_end)) at time zone 'America/Panama';

  return query
  select s.employee_id,
    coalesce(p.display_name,'Personal')::text,
    sum(public.bennys_clock_period_seconds(s.segments,s.status,s.segment_started_at,s.last_activity_at,v_start,v_end))::bigint
  from public.bennys_clock_sessions s
  join public.bennys_profiles p on p.id=s.employee_id
  where p.active=true
    and p.role='employee'
    and s.started_at<v_end
    and coalesce(s.ended_at,v_end)>v_start
  group by s.employee_id,p.display_name
  having sum(public.bennys_clock_period_seconds(s.segments,s.status,s.segment_started_at,s.last_activity_at,v_start,v_end))>0
  order by sum(public.bennys_clock_period_seconds(s.segments,s.status,s.segment_started_at,s.last_activity_at,v_start,v_end)) desc,p.display_name asc
  limit 3;
end $$;

revoke all on function public.bennys_clock_weekly_top() from public,anon;
grant execute on function public.bennys_clock_weekly_top() to authenticated;

notify pgrst,'reload schema';
commit;
