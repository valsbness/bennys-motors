-- Benny's Motors · Reconstrucción de informes históricos de caja
-- Ejecutar UNA VEZ en Supabase SQL Editor.
-- Reconstruye los resúmenes de cierres existentes usando las ventas y compras originales.
-- No elimina ni modifica ventas, gastos, usuarios, cierres ni sus importes contados.
begin;

do $$
declare
  v_close record;
  v_start timestamptz;
  v_snapshot jsonb;
begin
  for v_close in
    select id, closed_at, snapshot
    from public.bennys_cash_closings
    order by closed_at, id
  loop
    select max(closed_at) into v_start
    from public.bennys_cash_closings
    where closed_at < v_close.closed_at;

    select jsonb_build_object(
      'orders', coalesce((
        select jsonb_agg(jsonb_build_object(
          'id', o.id, 'number', o.number, 'created_at', o.created_at,
          'status', o.status, 'employee_id', o.employee_id,
          'employee_name', p.display_name, 'payload', o.payload
        ) order by o.created_at, o.number)
        from public.bennys_orders o
        left join public.bennys_profiles p on p.id = o.employee_id
        where (v_start is null or o.created_at > v_start)
          and o.created_at <= v_close.closed_at
      ), '[]'::jsonb),
      'purchases', coalesce((
        select jsonb_agg(jsonb_build_object(
          'id', e.id, 'created_at', e.created_at, 'status', e.status,
          'description', e.description, 'category', e.category,
          'amount', e.amount, 'created_by', e.created_by,
          'employee_name', p.display_name
        ) order by e.created_at, e.id)
        from public.bennys_expenses e
        left join public.bennys_profiles p on p.id = e.created_by
        where (v_start is null or e.created_at > v_start)
          and e.created_at <= v_close.closed_at
      ), '[]'::jsonb),
      'employee_summary', coalesce((
        select jsonb_agg(jsonb_build_object(
          'employee_id', x.employee_id, 'employee_name', x.employee_name,
          'services', x.services, 'sales', x.sales, 'cost', x.cost,
          'gross', x.gross, 'commission', x.commission,
          'workshop_net', x.workshop_net
        ) order by x.employee_name)
        from (
          select o.employee_id,
            coalesce(p.display_name, o.payload->>'mechanic', 'Personal') employee_name,
            count(*) filter (where o.status = 'active')::integer services,
            coalesce(sum(coalesce(nullif(o.payload #>> '{totals,total}', '')::numeric,
              (select coalesce(sum((i->>'price')::numeric * (i->>'qty')::numeric), 0)
               from jsonb_array_elements(coalesce(o.payload->'items','[]'::jsonb)) i)
              - coalesce(nullif(o.payload->>'discount','')::numeric,0)
            )) filter (where o.status='active'),0) sales,
            coalesce(sum(coalesce(nullif(o.payload #>> '{totals,cost}', '')::numeric,
              (select coalesce(sum((i->>'cost')::numeric * (i->>'qty')::numeric),0)
               from jsonb_array_elements(coalesce(o.payload->'items','[]'::jsonb)) i)
            )) filter (where o.status='active'),0) cost,
            coalesce(sum(coalesce(nullif(o.payload #>> '{totals,gross}', '')::numeric,
              coalesce(nullif(o.payload #>> '{totals,total}', '')::numeric,
                (select coalesce(sum((i->>'price')::numeric * (i->>'qty')::numeric),0)
                 from jsonb_array_elements(coalesce(o.payload->'items','[]'::jsonb)) i)
                - coalesce(nullif(o.payload->>'discount','')::numeric,0))
              - coalesce(nullif(o.payload #>> '{totals,cost}', '')::numeric,
                (select coalesce(sum((i->>'cost')::numeric * (i->>'qty')::numeric),0)
                 from jsonb_array_elements(coalesce(o.payload->'items','[]'::jsonb)) i))
            )) filter (where o.status='active'),0) gross,
            coalesce(sum(coalesce(nullif(o.payload #>> '{totals,commission}', '')::numeric,
              round(greatest(0,coalesce(nullif(o.payload #>> '{totals,gross}', '')::numeric,0))
                * coalesce(nullif(o.payload->>'commission','')::numeric,0)/100,2)
            )) filter (where o.status='active'),0) commission,
            coalesce(sum(coalesce(nullif(o.payload #>> '{totals,net}', '')::numeric,
              coalesce(nullif(o.payload #>> '{totals,gross}', '')::numeric,0)
              - coalesce(nullif(o.payload #>> '{totals,commission}', '')::numeric,0)
            )) filter (where o.status='active'),0) workshop_net
          from public.bennys_orders o
          left join public.bennys_profiles p on p.id=o.employee_id
          where (v_start is null or o.created_at > v_start)
            and o.created_at <= v_close.closed_at
          group by o.employee_id, p.display_name, o.payload->>'mechanic'
        ) x
      ), '[]'::jsonb),
      'team_summary', coalesce((
        select jsonb_build_object(
          'services', count(*) filter (where o.status='active'),
          'sales', coalesce(sum(coalesce(nullif(o.payload #>> '{totals,total}','')::numeric,
            (select coalesce(sum((i->>'price')::numeric*(i->>'qty')::numeric),0)
             from jsonb_array_elements(coalesce(o.payload->'items','[]'::jsonb)) i)
            - coalesce(nullif(o.payload->>'discount','')::numeric,0)
          )) filter (where o.status='active'),0),
          'cost', coalesce(sum(coalesce(nullif(o.payload #>> '{totals,cost}','')::numeric,
            (select coalesce(sum((i->>'cost')::numeric*(i->>'qty')::numeric),0)
             from jsonb_array_elements(coalesce(o.payload->'items','[]'::jsonb)) i)
          )) filter (where o.status='active'),0),
          'gross', coalesce(sum(coalesce(nullif(o.payload #>> '{totals,gross}','')::numeric,
            coalesce(nullif(o.payload #>> '{totals,total}','')::numeric,0)
            - coalesce(nullif(o.payload #>> '{totals,cost}','')::numeric,0)
          )) filter (where o.status='active'),0),
          'commission', coalesce(sum(coalesce(nullif(o.payload #>> '{totals,commission}','')::numeric,0)) filter (where o.status='active'),0),
          'workshop_net', coalesce(sum(coalesce(nullif(o.payload #>> '{totals,net}','')::numeric,0)) filter (where o.status='active'),0)
        )
        from public.bennys_orders o
        where (v_start is null or o.created_at > v_start)
          and o.created_at <= v_close.closed_at
      ), '{}'::jsonb),
      'clock_sessions', coalesce((
        select jsonb_agg(jsonb_build_object(
          'id', s.id, 'employee_id', s.employee_id, 'employee_name', p.display_name,
          'started_at', s.started_at, 'last_activity_at', s.last_activity_at,
          'status', s.status, 'paused_at', s.paused_at, 'ended_at', s.ended_at,
          'segments', s.segments,
          'worked_seconds', public.bennys_clock_period_seconds(
            s.segments, s.status, s.segment_started_at, s.last_activity_at,
            v_start, v_close.closed_at
          ),
          'pause_reason', s.pause_reason
        ) order by s.started_at)
        from public.bennys_clock_sessions s
        left join public.bennys_profiles p on p.id=s.employee_id
        where s.started_at <= v_close.closed_at
          and coalesce(s.ended_at,v_close.closed_at) > coalesce(v_start,'-infinity'::timestamptz)
      ), '[]'::jsonb)
    ) into v_snapshot;

    update public.bennys_cash_closings
    set period_start = v_start,
        snapshot = coalesce(v_close.snapshot,'{}'::jsonb) || v_snapshot
    where id = v_close.id;
  end loop;
end $$;

notify pgrst, 'reload schema';
commit;
