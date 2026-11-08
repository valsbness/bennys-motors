export const euro = value => new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR',useGrouping:'always',maximumFractionDigits:2,minimumFractionDigits:Math.abs(value-Math.round(value))>0.001?2:0}).format(value);
export const round = n => Math.round((n + Number.EPSILON) * 100) / 100;
export function calculate(items, discountPercent=0, commissionPercent=0) {
  const subtotal=round(items.reduce((n,i)=>n+i.price*i.qty,0));
  const cost=round(items.reduce((n,i)=>n+i.cost*i.qty,0));
  const discount=round(subtotal*Math.max(0,Math.min(100,discountPercent))/100);
  const total=round(subtotal-discount);
  const gross=round(total-cost);
  // La comisión se calcula sobre la ganancia positiva, tras el descuento.
  const commission=round(Math.max(0,gross)*Math.max(0,Math.min(100,commissionPercent))/100);
  return {subtotal,cost,discount,total,gross,commission,net:round(gross-commission),units:items.reduce((n,i)=>n+i.qty,0)};
}
export function addToOrder(items,service,qty=1) {
  if(!Number.isInteger(qty)||qty<1||qty>999) throw new Error('Usa una cantidad entre 1 y 999.');
  const replaced=service.exclusive ? items.filter(i=>i.id!==service.id && i.exclusive===service.exclusive) : [];
  const next=items.filter(i=>!replaced.includes(i)).map(i=>({...i}));
  const existing=next.find(i=>i.id===service.id);
  if(existing) existing.qty=service.exclusive ? 1 : Math.min(999,existing.qty+qty);
  else next.push({...service,qty:service.exclusive?1:qty});
  return {items:next,replaced};
}
export function receipt(order) {
  const t=order.totals;
  return ["BENNY'S MOTORS · ORDEN DE TALLER",order.folio||'COTIZACIÓN',
    `Cliente: ${order.client||'Sin indicar'}`,
    `Mecánico: ${order.mechanic||'Sin indicar'}`,'',
    ...order.items.map(i=>`${i.qty} × ${i.name} — ${euro(i.price*i.qty)}`),
    '',`Subtotal: ${euro(t.subtotal)}`,
    ...(t.discount?[`Descuento (${order.discount}%): −${euro(t.discount)}`]:[]),
    `TOTAL: ${euro(t.total)}`,...(order.payment?[`Pago: ${order.payment}`]:[]),
    ...(order.notes?[`Nota: ${order.notes}`]:[]),"Gracias por rodar con Benny's."
  ].join('\n');
}

export const clientKey = name => String(name??'').trim().replace(/\s+/g,' ').normalize('NFD').replace(/\p{M}/gu,'').toLocaleLowerCase('es');
export function frequentClients(orders) {
  const clients=new Map();
  for(const order of orders){
    const name=String(order.client??'').trim().replace(/\s+/g,' '),date=Date.parse(order.date);
    if(order.status!=='active'||!name||!Number.isFinite(date))continue;
    const key=clientKey(name),client=clients.get(key)||{key,name,visits:0,total:0,lastVisit:order.date};
    client.visits++;
    client.total=round(client.total+(Number.isFinite(order.totals?.total)?order.totals.total:0));
    if(date>=Date.parse(client.lastVisit)){client.name=name;client.lastVisit=order.date;}
    clients.set(key,client);
  }
  return [...clients.values()].sort((a,b)=>b.visits-a.visits||Date.parse(b.lastVisit)-Date.parse(a.lastVisit)||a.name.localeCompare(b.name,'es'));
}
