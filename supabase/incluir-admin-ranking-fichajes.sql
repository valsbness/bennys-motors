-- Benny's Motors · Incluir a administración en el TOP semanal de fichajes
-- Ejecutar UNA SOLA VEZ en Supabase SQL Editor.
-- No modifica ni elimina datos. Solo corrige el cálculo del ranking.

create or replace function public.bennys_clock_weekly_period(p_start timestamptz,p_end timestamptz)
returns table(employee_id uuid,employee_name text,worked_seconds bigint)
language sql stable security definer set search_path=public,pg_temp as $$
  with per_session as (
    select s.employee_id,
      coalesce(p.display_name,'Personal')::text as employee_name,
      coalesce((
        select sum(greatest(0,extract(epoch from (
          least((part->>'ended_at')::timestamptz,p_end)
          - greatest((part->>'started_at')::timestamptz,p_start)
        ))))::bigint
        from jsonb_array_elements(coalesce(s.segments,'[]'::jsonb)) part
        where (part->>'started_at') is not null
          and (part->>'ended_at') is not null
          and (part->>'ended_at')::timestamptz>p_start
          and (part->>'started_at')::timestamptz<p_end
      ),0)
      + case when s.status='active' and s.segment_started_at is not null then
          greatest(0,extract(epoch from (
            least(p_end,s.last_activity_at+interval '1 hour')
            - greatest(s.segment_started_at,p_start)
          )))::bigint
        else 0 end
      + case when coalesce(jsonb_array_length(s.segments),0)=0
          and s.accumulated_seconds>0
          and s.started_at>=p_start
          and coalesce(s.ended_at,p_end)<=p_end
        then s.accumulated_seconds::bigint else 0 end as seconds
    from public.bennys_clock_sessions s
    left join public.bennys_profiles p on p.id=s.employee_id
    where s.started_at<p_end
      and coalesce(s.ended_at,p_end)>p_start
  )
  select ps.employee_id,ps.employee_name,sum(ps.seconds)::bigint
  from per_session ps
  group by ps.employee_id,ps.employee_name
  having sum(ps.seconds)>0
  order by sum(ps.seconds) desc,ps.employee_name asc
$$;

notify pgrst,'reload schema';
