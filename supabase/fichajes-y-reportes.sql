-- Benny's Motors · Historial ampliado de cierres y fichaje del personal
-- Ejecutar UNA VEZ en Supabase SQL Editor después de cierres-caja.sql.
-- No elimina ventas, gastos, perfiles ni cierres existentes.
begin;

create table if not exists public.bennys_clock_sessions (
  id uuid primary key default gen_random_uuid(),
  employee_id uuid not null references public.bennys_profiles(id),
  started_at timestamptz not null default now(),
  last_activity_at timestamptz not null default now(),
  segment_started_at timestamptz,
  accumulated_seconds integer not null default 0 check(accumulated_seconds>=0),
  segments jsonb not null default '[]'::jsonb,
  status text not null default 'active' check(status in ('active','paused','closed')),
  paused_at timestamptz,
  ended_at timestamptz,
  pause_reason text not null default ''
);
alter table public.bennys_clock_sessions add column if not exists segments jsonb not null default '[]'::jsonb;
create index if not exists bennys_clock_employee_date on public.bennys_clock_sessions(employee_id,started_at desc);
create index if not exists bennys_clock_open on public.bennys_clock_sessions(employee_id,status) where status in ('active','paused');
alter table public.bennys_clock_sessions enable row level security;
revoke all on public.bennys_clock_sessions from anon,authenticated;
grant select on public.bennys_clock_sessions to authenticated;
drop policy if exists bennys_clock_sessions_read on public.bennys_clock_sessions;
create policy bennys_clock_sessions_read on public.bennys_clock_sessions for select to authenticated
using(employee_id=auth.uid() or public.bennys_is_admin());

create or replace function public.bennys_clock_start()
returns public.bennys_clock_sessions language plpgsql security definer set search_path=public,pg_temp as $$
declare v_row public.bennys_clock_sessions; v_now timestamptz:=clock_timestamp();
begin
  if not public.bennys_is_active() then raise exception 'Tu cuenta no tiene acceso activo.'; end if;
  perform pg_advisory_xact_lock(hashtextextended('bennys-clock:'||auth.uid()::text,0));
  select * into v_row from public.bennys_clock_sessions where employee_id=auth.uid() and status in ('active','paused') order by started_at desc limit 1 for update;
  if found then raise exception 'Ya tienes un fichaje abierto. Revisa su estado para continuarlo o finalizarlo.'; end if;
  insert into public.bennys_clock_sessions(employee_id,started_at,last_activity_at,segment_started_at,status)
  values(auth.uid(),v_now,v_now,v_now,'active') returning * into v_row;
  insert into public.bennys_audit(actor_id,action,entity_id,details) values(auth.uid(),'fichaje_inicio',v_row.id::text,jsonb_build_object('started_at',v_now));
  return v_row;
end $$;

create or replace function public.bennys_clock_status()
returns public.bennys_clock_sessions language plpgsql security definer set search_path=public,pg_temp as $$
declare v_row public.bennys_clock_sessions; v_pause timestamptz;
begin
  if not public.bennys_is_active() then raise exception 'Tu cuenta no tiene acceso activo.'; end if;
  select * into v_row from public.bennys_clock_sessions where employee_id=auth.uid() and status in ('active','paused') order by started_at desc limit 1 for update;
  if not found then return null; end if;
  if v_row.status='active' and v_row.last_activity_at<=clock_timestamp()-interval '1 hour' then
    v_pause:=v_row.last_activity_at+interval '1 hour';
    update public.bennys_clock_sessions set
      accumulated_seconds=accumulated_seconds+greatest(0,extract(epoch from (v_pause-segment_started_at))::integer),
      segments=segments||jsonb_build_array(jsonb_build_object('started_at',segment_started_at,'ended_at',v_pause)),
      status='paused',paused_at=v_pause,segment_started_at=null,pause_reason='inactivity'
    where id=v_row.id returning * into v_row;
    insert into public.bennys_audit(actor_id,action,entity_id,details) values(auth.uid(),'fichaje_pausa_inactividad',v_row.id::text,jsonb_build_object('paused_at',v_pause));
  end if;
  return v_row;
end $$;

create or replace function public.bennys_clock_resume()
returns public.bennys_clock_sessions language plpgsql security definer set search_path=public,pg_temp as $$
declare v_row public.bennys_clock_sessions; v_now timestamptz:=clock_timestamp();
begin
  if not public.bennys_is_active() then raise exception 'Tu cuenta no tiene acceso activo.'; end if;
  perform pg_advisory_xact_lock(hashtextextended('bennys-clock:'||auth.uid()::text,0));
  select * into v_row from public.bennys_clock_sessions where employee_id=auth.uid() and status in ('active','paused') order by started_at desc limit 1 for update;
  if not found then raise exception 'No tienes un fichaje para reanudar. Inicia uno nuevo.'; end if;
  if v_row.status='active' then return v_row; end if;
  update public.bennys_clock_sessions set status='active',segment_started_at=v_now,last_activity_at=v_now,paused_at=null,pause_reason='' where id=v_row.id returning * into v_row;
  insert into public.bennys_audit(actor_id,action,entity_id,details) values(auth.uid(),'fichaje_reanudado',v_row.id::text,jsonb_build_object('resumed_at',v_now));
  return v_row;
end $$;

create or replace function public.bennys_clock_finish()
returns public.bennys_clock_sessions language plpgsql security definer set search_path=public,pg_temp as $$
declare v_row public.bennys_clock_sessions; v_now timestamptz:=clock_timestamp(); v_pause timestamptz;
begin
  if not public.bennys_is_active() then raise exception 'Tu cuenta no tiene acceso activo.'; end if;
  perform pg_advisory_xact_lock(hashtextextended('bennys-clock:'||auth.uid()::text,0));
  select * into v_row from public.bennys_clock_sessions where employee_id=auth.uid() and status in ('active','paused') order by started_at desc limit 1 for update;
  if not found then raise exception 'No tienes un fichaje abierto.'; end if;
  if v_row.status='active' and v_row.last_activity_at<=v_now-interval '1 hour' then
    v_pause:=v_row.last_activity_at+interval '1 hour';
    update public.bennys_clock_sessions set accumulated_seconds=accumulated_seconds+greatest(0,extract(epoch from (v_pause-segment_started_at))::integer),segments=segments||jsonb_build_array(jsonb_build_object('started_at',segment_started_at,'ended_at',v_pause)),status='paused',paused_at=v_pause,segment_started_at=null,pause_reason='inactivity' where id=v_row.id returning * into v_row;
  end if;
  if v_row.status='active' then
    update public.bennys_clock_sessions set accumulated_seconds=accumulated_seconds+greatest(0,extract(epoch from (v_now-segment_started_at))::integer),segments=segments||jsonb_build_array(jsonb_build_object('started_at',segment_started_at,'ended_at',v_now)),status='closed',ended_at=v_now,segment_started_at=null,pause_reason='' where id=v_row.id returning * into v_row;
  else
    update public.bennys_clock_sessions set status='closed',ended_at=v_now where id=v_row.id returning * into v_row;
  end if;
  insert into public.bennys_audit(actor_id,action,entity_id,details) values(auth.uid(),'fichaje_fin',v_row.id::text,jsonb_build_object('ended_at',v_now,'worked_seconds',v_row.accumulated_seconds));
  return v_row;
end $$;

create or replace function public.bennys_clock_activity() returns trigger
language plpgsql security definer set search_path=public,pg_temp as $$
declare v_employee uuid; v_valid boolean:=true;
begin
  if tg_table_name='bennys_orders' then
    v_employee:=new.employee_id;
    v_valid:=coalesce(new.status,'active')='active' and coalesce(new.payload,'{}'::jsonb) ? 'folio';
  else
    v_employee:=new.created_by;
    v_valid:=coalesce(new.status,'active')='active';
  end if;
  if v_valid then
    update public.bennys_clock_sessions set last_activity_at=greatest(last_activity_at,clock_timestamp())
    where employee_id=v_employee and status='active';
  end if;
  return new;
end $$;

drop trigger if exists bennys_orders_clock_activity on public.bennys_orders;
create trigger bennys_orders_clock_activity after insert or update of payload,status on public.bennys_orders for each row execute function public.bennys_clock_activity();
drop trigger if exists bennys_expenses_clock_activity on public.bennys_expenses;
create trigger bennys_expenses_clock_activity after insert on public.bennys_expenses for each row execute function public.bennys_clock_activity();

revoke all on function public.bennys_clock_start(),public.bennys_clock_status(),public.bennys_clock_resume(),public.bennys_clock_finish(),public.bennys_clock_activity() from public,anon;
grant execute on function public.bennys_clock_start(),public.bennys_clock_status(),public.bennys_clock_resume(),public.bennys_clock_finish() to authenticated;

-- Cada cierre conserva un informe congelado: totales del equipo, desglose por mecánico y fichajes.
create or replace function public.bennys_close_cash(p_id uuid,p_cash_amount numeric,p_notes text default '')
returns public.bennys_cash_closings
language plpgsql security definer set search_path=public,pg_temp as $$
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

  v_snapshot:=jsonb_build_object(
    'orders',coalesce((select jsonb_agg(jsonb_build_object('id',o.id,'number',o.number,'created_at',o.created_at,'status',o.status,'employee_id',o.employee_id,'employee_name',p.display_name,'payload',o.payload) order by o.created_at) from public.bennys_orders o left join public.bennys_profiles p on p.id=o.employee_id where (v_start is null or o.created_at>v_start) and o.created_at<=v_end),'[]'::jsonb),
    'purchases',coalesce((select jsonb_agg(jsonb_build_object('id',e.id,'created_at',e.created_at,'status',e.status,'description',e.description,'category',e.category,'amount',e.amount,'created_by',e.created_by,'employee_name',p.display_name) order by e.created_at) from public.bennys_expenses e left join public.bennys_profiles p on p.id=e.created_by where (v_start is null or e.created_at>v_start) and e.created_at<=v_end),'[]'::jsonb),
    'employee_summary',coalesce((
      select jsonb_agg(jsonb_build_object('employee_id',x.employee_id,'employee_name',x.employee_name,'services',x.services,'sales',x.sales,'cost',x.cost,'gross',x.gross,'commission',x.commission,'workshop_net',x.workshop_net) order by x.employee_name)
      from (select o.employee_id,coalesce(p.display_name,o.payload->>'mechanic','Personal') employee_name,count(*) filter(where o.status='active') services,
        coalesce(sum((o.payload->'totals'->>'total')::numeric) filter(where o.status='active'),0) sales,
        coalesce(sum((o.payload->'totals'->>'cost')::numeric) filter(where o.status='active'),0) cost,
        coalesce(sum((o.payload->'totals'->>'gross')::numeric) filter(where o.status='active'),0) gross,
        coalesce(sum((o.payload->'totals'->>'commission')::numeric) filter(where o.status='active'),0) commission,
        coalesce(sum((o.payload->'totals'->>'net')::numeric) filter(where o.status='active'),0) workshop_net
        from public.bennys_orders o left join public.bennys_profiles p on p.id=o.employee_id
        where (v_start is null or o.created_at>v_start) and o.created_at<=v_end group by o.employee_id,p.display_name,o.payload->>'mechanic') x
    ),'[]'::jsonb),
    'team_summary',coalesce((
      select jsonb_build_object('services',count(*) filter(where o.status='active'),
        'sales',coalesce(sum((o.payload->'totals'->>'total')::numeric) filter(where o.status='active'),0),
        'cost',coalesce(sum((o.payload->'totals'->>'cost')::numeric) filter(where o.status='active'),0),
        'gross',coalesce(sum((o.payload->'totals'->>'gross')::numeric) filter(where o.status='active'),0),
        'commission',coalesce(sum((o.payload->'totals'->>'commission')::numeric) filter(where o.status='active'),0),
        'workshop_net',coalesce(sum((o.payload->'totals'->>'net')::numeric) filter(where o.status='active'),0))
      from public.bennys_orders o where (v_start is null or o.created_at>v_start) and o.created_at<=v_end
    ),'{}'::jsonb),
    'clock_sessions',coalesce((
      select jsonb_agg(jsonb_build_object('id',s.id,'employee_id',s.employee_id,'employee_name',p.display_name,'started_at',s.started_at,'last_activity_at',s.last_activity_at,'status',s.status,'paused_at',s.paused_at,'ended_at',s.ended_at,'segments',s.segments,'worked_seconds',coalesce((select sum(greatest(0,extract(epoch from (least((seg->>'ended_at')::timestamptz,v_end)-greatest((seg->>'started_at')::timestamptz,coalesce(v_start,(seg->>'started_at')::timestamptz))))::integer) from jsonb_array_elements(s.segments) seg),0)+case when s.status='active' and s.segment_started_at is not null then greatest(0,extract(epoch from (least(v_end,s.last_activity_at+interval '1 hour')-greatest(s.segment_started_at,coalesce(v_start,s.segment_started_at))))::integer) else 0 end,'pause_reason',s.pause_reason) order by s.started_at)
      from public.bennys_clock_sessions s left join public.bennys_profiles p on p.id=s.employee_id
      where s.started_at<=v_end and coalesce(s.ended_at,v_end)>coalesce(v_start,'-infinity'::timestamptz)
    ),'[]'::jsonb)
  );

  insert into public.bennys_cash_closings(id,closed_by,cash_amount,notes,period_start,closed_at,snapshot)
  values(p_id,auth.uid(),round(p_cash_amount,2),trim(coalesce(p_notes,'')),v_start,v_end,v_snapshot) returning * into v_row;
  insert into public.bennys_audit(actor_id,action,entity_id,details)
  values(auth.uid(),'cierre_caja',p_id::text,jsonb_build_object('cash_amount',round(p_cash_amount,2),'orders',jsonb_array_length(v_snapshot->'orders'),'purchases',jsonb_array_length(v_snapshot->'purchases'),'period_start',v_start,'closed_at',v_end));
  return v_row;
end $$;
revoke all on function public.bennys_close_cash(uuid,numeric,text) from public,anon;
grant execute on function public.bennys_close_cash(uuid,numeric,text) to authenticated;

notify pgrst,'reload schema';
commit;
