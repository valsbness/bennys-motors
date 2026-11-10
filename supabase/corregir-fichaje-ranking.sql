-- Benny's Motors · Corrección de actividad y ranking semanal de fichajes
-- Ejecutar UNA VEZ después de las migraciones de fichajes y ranking.
-- No modifica ni elimina jornadas existentes.

begin;

-- La hora de inicio de semana se calcula en Panamá. El tiempo se obtiene
-- de los segmentos guardados y del segmento activo, limitado a 1 hora
-- después de la última actividad registrada.
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

  v_start:=date_trunc('week',timezone('America/Panama',v_end)) at time zone 'America/Panama';

  return query
  with session_time as (
    select s.employee_id,
      coalesce(p.display_name,'Personal')::text as employee_name,
      coalesce((
        select sum(greatest(0,extract(epoch from (
          least((part->>'ended_at')::timestamptz,v_end)
          - greatest((part->>'started_at')::timestamptz,v_start)
        ))))::bigint
        from jsonb_array_elements(coalesce(s.segments,'[]'::jsonb)) part
        where (part->>'started_at') is not null
          and (part->>'ended_at') is not null
          and (part->>'ended_at')::timestamptz>v_start
          and (part->>'started_at')::timestamptz<v_end
      ),0)
      + case when s.status='active' and s.segment_started_at is not null then
          greatest(0,extract(epoch from (
            least(v_end,s.last_activity_at+interval '1 hour')
            - greatest(s.segment_started_at,v_start)
          )))::bigint
        else 0 end
      + case when coalesce(jsonb_array_length(s.segments),0)=0
          and s.accumulated_seconds>0
          and s.started_at>=v_start
          and coalesce(s.ended_at,v_end)<=v_end
        then s.accumulated_seconds::bigint else 0 end as seconds
    from public.bennys_clock_sessions s
    left join public.bennys_profiles p on p.id=s.employee_id
    where s.started_at<v_end
      and coalesce(s.ended_at,v_end)>v_start
      and coalesce(p.role,'employee')<>'admin'
  )
  select st.employee_id,st.employee_name,sum(st.seconds)::bigint
  from session_time st
  group by st.employee_id,st.employee_name
  having sum(st.seconds)>0
  order by sum(st.seconds) desc,st.employee_name asc
  limit 3;
end $$;

revoke all on function public.bennys_clock_weekly_top() from public,anon;
grant execute on function public.bennys_clock_weekly_top() to authenticated;

notify pgrst,'reload schema';
commit;
