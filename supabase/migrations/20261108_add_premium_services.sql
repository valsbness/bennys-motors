-- Benny's Motors · Agregar servicios PREMIUM al catálogo compartido.
-- Ejecutar una sola vez en Supabase > SQL Editor. Conserva precios existentes.
insert into public.bennys_services(id,name,cost,price,exclusive_group) values
('full-v8','Full Tuning V8',59500,110000,null),
('full-v12','Full Tuning V12',319500,570000,null),
('nitro-bottle','Botella de óxido nitroso',20000,50000,null),
('nitro-install','Kit de instalación de nitroso',300000,500000,null),
('drift-kit','Kit de tuning para drift',800000,1000000,null)
on conflict(id) do nothing;

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
  if p_discount is null or p_discount<0 or p_discount>100 or p_items is null or jsonb_typeof(p_items)<>'array' or jsonb_array_length(p_items) not between 1 and 23 then raise exception 'Orden o descuento no válido.'; end if;
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
notify pgrst,'reload schema';
