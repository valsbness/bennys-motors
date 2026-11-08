import {round} from './core.js';

export function inPeriod(date,period,now=new Date()){
  const value=new Date(date),start=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  if(!Number.isFinite(value.getTime())||value>now)return false;
  if(period==='all')return true;
  if(period==='week')start.setDate(start.getDate()-(start.getDay()+6)%7);
  if(period==='month')start.setDate(1);
  return value>=start;
}
export function salesMetrics(orders){
  const active=orders.filter(o=>o.status==='active'),sum=key=>round(active.reduce((n,o)=>n+(Number(o.totals[key])||0),0));
  return {count:active.length,total:sum('total'),cost:sum('cost'),commission:sum('commission'),net:sum('net'),gross:sum('gross'),discount:sum('discount'),average:active.length?round(sum('total')/active.length):0};
}
export function employeeMetrics(orders,team=[]){
  const groups=new Map();
  for(const order of orders.filter(o=>o.status==='active')){
    const id=order.employeeId||order.mechanic||'unknown';
    if(!groups.has(id))groups.set(id,{id,name:team.find(p=>p.id===id)?.display_name||order.mechanic||'Sin asignar',orders:[]});
    groups.get(id).orders.push(order);
  }
  return [...groups.values()].map(({orders,...person})=>({...person,...salesMetrics(orders)})).sort((a,b)=>b.total-a.total||a.name.localeCompare(b.name,'es'));
}
export function revenueSeries(orders,period,now=new Date()){
  const start=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  if(period==='week')start.setDate(start.getDate()-(start.getDay()+6)%7);
  if(period==='month')start.setDate(1);
  if(period==='all')start.setDate(start.getDate()-29);
  const points=[];
  if(period==='today')for(let hour=0;hour<24;hour++)points.push({label:String(hour).padStart(2,'0')+'h',total:0,hour});
  else for(let d=new Date(start);d<=now;d.setDate(d.getDate()+1))points.push({label:period==='week'?d.toLocaleDateString('es',{weekday:'short'}):d.toLocaleDateString('es',{day:'numeric',month:'short'}),total:0,date:new Date(d).toDateString()});
  for(const order of orders){
    const date=new Date(order.date);if(order.status!=='active'||!inPeriod(order.date,period,now)||date<start)continue;
    const point=points.find(p=>period==='today'?p.hour===date.getHours():p.date===date.toDateString());
    if(point)point.total=round(point.total+order.totals.total);
  }
  return points;
}
