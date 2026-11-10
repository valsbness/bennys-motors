-- Benny's Motors · Ranking semanal en vivo y archivo automático de TOP 3
-- Ejecutar UNA SOLA VEZ en Supabase SQL Editor.
-- Conserva todas las jornadas; guarda el TOP 3 de cada semana cerrada.
begin;

create table if not exists public.bennys_clock_weekly_archive (
  week_start date not null,
  week_end date not null,
  employee_id uuid not null references public.bennys_profiles(id),
  employee_name text not null,
  worked_seconds bigint not null check(worked_seconds>0),
  position integer not null check(position between 1 and 3),
  archived_at timestamptz not null default clock_timestamp(),
  primary key(week_start,employee_id),
  unique(week_start,position)
);
alter table public.bennys_clock_weekly_archive enable row level security;
revoke all on public.bennys_clock_weekly_archive from public,anon,authenticated;
drop policy if exists bennys_clock_weekly_archive_read on public.bennys_clock_weekly_archive;
create policy bennys_clock_weekly_archive_read on public.bennys_clock_weekly_archive
  for select to authenticated using(public.bennys_is_active());
grant select on public.bennys_clock_weekly_archive to authenticated;

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
      and coalesce(p.role,'employee')<>'admin'
  )
  select ps.employee_id,ps.employee_name,sum(ps.seconds)::bigint
  from per_session ps
  group by ps.employee_id,ps.employee_name
  having sum(ps.seconds)>0
  order by sum(ps.seconds) desc,ps.employee_name asc
$$;

create or replace function public.bennys_clock_weekly_top()
returns table(employee_id uuid,employee_name text,worked_seconds bigint)
language plpgsql security definer set search_path=public,pg_temp as $$
declare
  v_now timestamptz:=clock_timestamp();
  v_week_start date;
  v_first_week date;
  v_archive_week date;
  v_start timestamptz;
  v_end timestamptz;
begin
  if not public.bennys_is_active() then
    raise exception 'Tu cuenta no tiene acceso activo.';
  end if;

  v_week_start:=date_trunc('week',timezone('America/Panama',v_now))::date;
  select min(date_trunc('week',s.started_at at time zone 'America/Panama')::date)
    into v_first_week
  from public.bennys_clock_sessions s
  where s.started_at < (v_week_start::timestamp at time zone 'America/Panama');

  -- Al entrar en una semana nueva, archiva todos los TOP 3 que aún falten.
  -- Así también recupera semanas anteriores si nadie abrió la página el lunes.
  if v_first_week is not null then
    v_archive_week:=v_first_week;
    while v_archive_week < v_week_start loop
      v_start:=v_archive_week::timestamp at time zone 'America/Panama';
      v_end:=(v_archive_week+7)::timestamp at time zone 'America/Panama';
      insert into public.bennys_clock_weekly_archive
        (week_start,week_end,employee_id,employee_name,worked_seconds,position)
      select v_archive_week,(v_archive_week+6),ranked.employee_id,ranked.employee_name,ranked.worked_seconds,ranked.position
      from (
        select period.employee_id,period.employee_name,period.worked_seconds,
          row_number() over(order by period.worked_seconds desc,period.employee_name asc)::integer as position
        from public.bennys_clock_weekly_period(v_start,v_end) period
      ) ranked
      where ranked.position<=3
      on conflict do nothing;
      v_archive_week:=v_archive_week+7;
    end loop;
  end if;

  v_start:=v_week_start::timestamp at time zone 'America/Panama';
  return query
    select current_week.employee_id,current_week.employee_name,current_week.worked_seconds
    from public.bennys_clock_weekly_period(v_start,v_now) current_week
    order by current_week.worked_seconds desc,current_week.employee_name asc
    limit 3;
end $$;

create or replace function public.bennys_clock_weekly_history()
returns table(week_start date,week_end date,employee_id uuid,employee_name text,worked_seconds bigint,rank_position integer)
language plpgsql stable security definer set search_path=public,pg_temp as $$
begin
  if not public.bennys_is_active() then
    raise exception 'Tu cuenta no tiene acceso activo.';
  end if;
  return query
    select a.week_start,a.week_end,a.employee_id,a.employee_name,a.worked_seconds,a.position as rank_position
    from public.bennys_clock_weekly_archive a
    order by a.week_start desc,a.position asc;
end $$;

revoke all on function public.bennys_clock_weekly_period(timestamptz,timestamptz) from public,anon,authenticated;
revoke all on function public.bennys_clock_weekly_top(),public.bennys_clock_weekly_history() from public,anon;
grant execute on function public.bennys_clock_weekly_top(),public.bennys_clock_weekly_history() to authenticated;

notify pgrst,'reload schema';
commit;
