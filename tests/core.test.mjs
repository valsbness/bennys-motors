import test from 'node:test';
import assert from 'node:assert/strict';
import {CATALOG} from '../dist/catalog.js';
import {calculate,addToOrder,receipt,frequentClients} from '../dist/core.js';
const service=id=>CATALOG.find(i=>i.id===id);
const selected=ids=>ids.map(id=>({...service(id),qty:1}));
test('Los 18 costos y precios coinciden con la imagen del servidor',()=>{
  assert.deepEqual(CATALOG.map(i=>[i.cost,i.price]),[[7000,10000],[7000,10000],[2500,5000],[2000,3000],[500,1500],[250,500],[500,1000],[300000,500000],[40000,50000],[8000,12500],[7000,11500],[8500,10500],[4000,6000],[3500,6000],[4500,6500],[8000,20000],[25000,35000],[4000,5000]]);
});
test('La selección marcada en la tabla suma 60.000 de costo y 88.500 de venta',()=>{
  const t=calculate(selected(['v8','awd','slick','frenos']));
  assert.equal(t.cost,60000);assert.equal(t.total,88500);assert.equal(t.net,28500);
});
test('Descuento y comisión sobre la ganancia producen importes exactos',()=>{
  assert.deepEqual(calculate(selected(['v8','awd','slick','frenos']),10,20),{subtotal:88500,cost:60000,discount:8850,total:79650,gross:19650,commission:3930,net:15720,units:4});
});
test('Las órdenes con pérdida no generan comisión',()=>{const t=calculate(selected(['v8']),50,20);assert.equal(t.gross,-15000);assert.equal(t.commission,0);assert.equal(t.net,-15000);});
test('Un nuevo motor sustituye al anterior sin mutar la orden original',()=>{
  const old=selected(['v8','reparacion']);const next=addToOrder(old,service('v12'));
  assert.deepEqual(next.items.map(i=>i.id),['reparacion','v12']);assert.equal(next.replaced[0].id,'v8');assert.equal(old[0].id,'v8');
});
test('Las opciones únicas no se duplican; los kits sí admiten cantidades',()=>{
  assert.equal(addToOrder(selected(['v8']),service('v8'),5).items[0].qty,1);
  assert.equal(addToOrder(selected(['reparacion']),service('reparacion'),4).items[0].qty,5);
  assert.throws(()=>addToOrder([],service('reparacion'),1.5));
});
test('No se acumulan opciones de tracción ni de neumáticos',()=>{
  const next=addToOrder(selected(['awd','slick']),service('rwd')).items;
  assert.deepEqual(next.map(i=>i.id),['slick','rwd']);
  assert.deepEqual(addToOrder(next,service('offroad')).items.map(i=>i.id),['rwd','offroad']);
});
test('Precios con decimales redondean descuentos y comisiones a céntimos',()=>{
  const t=calculate([{price:10.01,cost:3.33,qty:3}],7.5,12.5);
  assert.equal(t.total,27.78);assert.equal(t.cost,9.99);assert.equal(t.commission,2.22);assert.equal(t.net,15.57);
});
test('El ticket para el cliente excluye costo, ganancia y comisión',()=>{
  const items=selected(['v8']);const text=receipt({items,totals:calculate(items),client:'Alex',playerId:'ID-ANTIGUO',vehicle:'Sultan',plate:'ABC123',mechanic:'Mateo',discount:0});
  assert.match(text,/Alex/);assert.match(text,/TOTAL/);assert.doesNotMatch(text,/fábrica|Ganancia|Comisión|ABC123|Sultan|Vehículo|Matrícula|ID-ANTIGUO/);
});

test('Clientes frecuentes agrupa nombres, suma visitas y excluye anulaciones',()=>{
  const order=(client,date,total,status='active')=>({client,date,totals:{total},status});
  const orders=[order('José  Ruiz','2026-10-01',100.1),order(' JOSE RUIZ ','2026-10-02',200.2),order('José Ruiz','2026-10-03',300.3),order('Ana','2026-10-04',700),order('Ana','2026-10-05',900,'cancelled'),order('Bruno','2026-10-01',50),order('  ','2026-10-06',10),order('Sin fecha','incorrecta',10)];
  const original=structuredClone(orders),clients=frequentClients(orders);
  assert.deepEqual(clients.map(c=>c.name),['José Ruiz','Ana','Bruno']);
  assert.equal(clients[0].visits,3);assert.equal(clients[0].total,600.6);assert.equal(clients[0].lastVisit,'2026-10-03');
  assert.equal(clients[1].visits,1);assert.equal(clients[1].total,700);assert.deepEqual(orders,original);
  assert.deepEqual(frequentClients([]),[]);
});

import {inPeriod,salesMetrics,employeeMetrics,revenueSeries} from '../dist/operations.js';
test('Los períodos usan el día local, semana desde lunes y excluyen fechas futuras',()=>{
  const now=new Date(2026,9,11,12),d=(day,hour=0)=>new Date(2026,9,day,hour).toISOString();
  assert.equal(inPeriod(d(11),'today',now),true);assert.equal(inPeriod(d(10,23),'today',now),false);
  assert.equal(inPeriod(d(5),'week',now),true);assert.equal(inPeriod(d(4,23),'week',now),false);
  assert.equal(inPeriod(d(1),'month',now),true);assert.equal(inPeriod(d(12),'all',now),false);
  assert.equal(inPeriod('invalid','all',now),false);
});
test('Informes y gráfico excluyen anuladas; agrupación usa el empleado y conserva importes históricos',()=>{
  const now=new Date(2026,9,11,12),date=new Date(2026,9,11,10).toISOString(),totals=calculate(selected(['reparacion']),0,20);
  const orders=[{employeeId:'a',mechanic:'Nombre anterior',status:'active',date,totals},{employeeId:'b',mechanic:'Alex',status:'active',date,totals},{employeeId:'a',mechanic:'Nombre anterior',status:'cancelled',date,totals}];
  assert.deepEqual(salesMetrics(orders),{count:2,total:2000,cost:1000,commission:200,net:800,gross:1000,discount:0,average:1000});
  const team=employeeMetrics(orders,[{id:'a',display_name:'Mateo'}]);assert.equal(team.length,2);assert.equal(team.find(p=>p.id==='a').name,'Mateo');assert.equal(team.find(p=>p.id==='a').commission,100);
  const points=revenueSeries(orders,'today',now);assert.equal(points.length,24);assert.equal(points[10].total,2000);assert.equal(points.reduce((n,p)=>n+p.total,0),2000);
  assert.equal(revenueSeries([], 'week',now).length,7);assert.equal(revenueSeries([], 'month',now).length,11);assert.equal(revenueSeries([], 'all',now).length,30);
});
