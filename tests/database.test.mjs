import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {PGlite} from '@electric-sql/pglite';
const sql=readFileSync(new URL('../supabase/setup.sql',import.meta.url),'utf8');

async function execSqlStatements(db,source,label){
  let start=0,dollar=false,single=false,lineComment=false,block=0,index=0;
  for(let i=0;i<source.length;i++){
    if(lineComment){if(source[i]==='\\n')lineComment=false;continue;}
    if(block){if(source.slice(i,i+2)==='*/'){block--;i++;}else if(source.slice(i,i+2)==='/*'){block++;i++;}continue;}
    if(!single&&!dollar&&source.slice(i,i+2)==='--'){lineComment=true;i++;continue;}
    if(!single&&!dollar&&source.slice(i,i+2)==='/*'){block++;i++;continue;}
    if(!single&&source.slice(i,i+2)==='$'){dollar=!dollar;i++;continue;}
    if(!dollar&&source[i]==="'"){if(single&&source[i+1]==="'"){i++;continue;}single=!single;continue;}
    if(source[i]===';'&&!dollar&&!single){
      const statement=source.slice(start,i+1);start=i+1;if(!statement.trim())continue;index++;
      try{await db.exec(statement);}catch(error){throw Error(label+' statement '+index+': '+error.message+' | '+statement.trim().slice(0,220));}
    }
  }
  if(source.slice(start).trim())await db.exec(source.slice(start));
}
const admin='11111111-1111-4111-8111-111111111111',employee='22222222-2222-4222-8222-222222222222',other='33333333-3333-4333-8333-333333333333';
test('Supabase: instalación, permisos, cálculos y aislamiento de empleados',async()=>{
  const db=new PGlite();await db.exec(`create role anon;create role authenticated;create role service_role bypassrls;create schema auth;create table auth.users(id uuid primary key,email text,raw_user_meta_data jsonb default '{}');create function auth.uid() returns uuid language sql stable as $$select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid$$;grant usage on schema auth,public to authenticated,anon;grant execute on function auth.uid() to authenticated,anon;insert into auth.users values('${admin}','admin@example.invalid','{"display_name":"Admin"}'),('${employee}','empleado@example.invalid','{"display_name":"Mecánico"}'),('${other}','otro@example.invalid','{"display_name":"Otro"}');`);
  const results=await db.exec(sql),code=results.at(-1).rows[0].codigo_inicial_admin;
  assert.equal(code.length,64);assert.equal((await db.query('select * from bennys_services')).rows.length,23);
  const as=async(id)=>db.exec(`reset role;set role authenticated;set request.jwt.claim.sub='${id}';`);
  await as(admin);await db.query('select bennys_ensure_profile()');
  await assert.rejects(db.query('select bennys_claim_admin(null)'));await assert.rejects(db.query("select bennys_claim_admin('incorrecto-incorrecto')"));
  await db.query('select bennys_claim_admin($1)',[code]);assert.equal((await db.query('select bennys_is_admin() as value')).rows[0].value,true);
  await as(employee);await db.query('select bennys_ensure_profile()');assert.equal((await db.query('select * from bennys_services')).rows.length,0);await assert.rejects(db.query('select bennys_claim_admin($1)',[code]));
  await as(admin);await db.query("select bennys_manage_employee($1,'Mecánico','employee',true,20)",[employee]);
  await as(employee);await assert.rejects(db.query("select bennys_update_service('v8',1,1)"));await assert.rejects(db.query("update bennys_profiles set role='admin'"));await assert.rejects(db.query('select * from bennys_admin_setup'));
  const items=[{id:'v8',qty:1,price:50000,cost:40000},{id:'awd',qty:1,price:12500,cost:8000},{id:'slick',qty:1,price:6000,cost:4000},{id:'frenos',qty:1,price:20000,cost:8000}];
  const orderId='aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
  const create=async(values=items,id=orderId)=>db.query("select (bennys_create_order($1,'Alex','124',$2::jsonb,10,99,'Efectivo','')).*",[id,JSON.stringify(values)]);
  const result=(await create()).rows[0];assert.equal(result.payload.totals.total,79650);assert.equal(result.payload.totals.cost,60000);assert.equal(result.payload.totals.commission,3930);assert.equal(result.payload.commission,20);assert.equal(result.payload.mechanic,'Mecánico');assert.equal('vehicle' in result.payload,false);assert.equal('plate' in result.payload,false);
  await create();assert.equal((await db.query('select * from bennys_orders')).rows.length,1);
  await assert.rejects(create([{...items[0],price:1}],'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb'));
  await assert.rejects(create([{...items[0],qty:2}],'cccccccc-cccc-4ccc-8ccc-cccccccccccc'));
  await as(other);await db.query('select bennys_ensure_profile()');await as(admin);await db.query("select bennys_manage_employee($1,'Otro','employee',true,10)",[other]);await as(other);
  assert.equal((await db.query('select * from bennys_orders')).rows.length,0);await assert.rejects(db.query('select bennys_cancel_order($1)',[orderId]));
  await as(admin);assert.equal((await db.query('select * from bennys_orders')).rows.length,1);await assert.rejects(db.query("select bennys_manage_employee($1,'Admin','employee',false,0)",[admin]));
  await as(employee);await db.query('select bennys_cancel_order($1)',[orderId]);assert.equal((await db.query('select * from bennys_orders')).rows[0].payload.status,'cancelled');
  await db.exec('reset role;set role anon;');await assert.rejects(db.query('select * from bennys_orders'));await assert.rejects(db.query('select bennys_prepare_admin_setup()'));
  await db.exec('reset role;');await db.exec(sql);assert.equal((await db.query('select * from bennys_orders')).rows.length,1);
  await db.exec(readFileSync(new URL('../supabase/upgrade-profesional.sql',import.meta.url),'utf8'));
  await as(employee);assert.equal((await db.query('select bennys_pro_version() as version')).rows[0].version,1);
  await assert.rejects(db.query("select bennys_create_expense(gen_random_uuid(),'Prueba','Otros',50)"));
  assert.equal((await db.query('select * from bennys_audit')).rows.length,0);
  const newId='dddddddd-dddd-4ddd-8ddd-dddddddddddd';await create(items,newId);
  await assert.rejects(db.query('select bennys_void_order($1,$2)',[newId,'']));
  await as(other);await assert.rejects(db.query('select bennys_void_order($1,$2)',[newId,'No es mi venta']));
  await as(employee);await db.query('select bennys_void_order($1,$2)',[newId,'Pago duplicado']);
  assert.equal((await db.query('select payload from bennys_orders where id=$1',[newId])).rows[0].payload.cancellationReason,'Pago duplicado');
  await as(admin);const expenseId='eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee';
  await assert.rejects(db.query("select bennys_create_expense($1,'Prueba','Otros',0)",[expenseId]));
  await db.query("select bennys_create_expense($1,'Herramientas nuevas','Herramientas',125.555)",[expenseId]);
  await db.query("select bennys_create_expense($1,'Reintento','Otros',100)",[expenseId]);
  assert.equal((await db.query('select * from bennys_expenses')).rows.length,1);
  assert.equal(Number((await db.query('select amount from bennys_expenses')).rows[0].amount),125.56);
  await assert.rejects(db.query("update bennys_expenses set amount=1"));
  await db.query('select bennys_cancel_expense($1)',[expenseId]);
  const audit=(await db.query('select * from bennys_audit')).rows;
  assert.equal(audit.filter(a=>a.action==='venta_registrada').length,1);
  assert.equal(audit.filter(a=>a.action==='venta_anulada').length,1);
  assert.equal(audit.find(a=>a.action==='venta_anulada').details.reason,'Pago duplicado');
  assert.equal(audit.filter(a=>a.action==='gasto_registrado').length,1);
  await as(employee);assert.equal((await db.query('select * from bennys_expenses')).rows.length,0);
  await db.exec('reset role;set role anon;');await assert.rejects(db.query('select * from bennys_audit'));
  await db.exec('reset role;');await db.exec(readFileSync(new URL('../supabase/upgrade-profesional.sql',import.meta.url),'utf8'));
  assert.equal((await db.query('select * from bennys_expenses')).rows.length,1);
  assert.equal((await db.query('select * from bennys_audit')).rows.length,audit.length);
  const usernameSql=readFileSync(new URL('../supabase/upgrade-usuarios.sql',import.meta.url),'utf8');
  await db.exec(usernameSql);const mapped=(await db.query('select id,username from bennys_profiles order by id')).rows;
  assert.equal(mapped.length,3);assert.equal(mapped.find(p=>p.id===admin).username,'admin');assert.equal(new Set(mapped.map(p=>p.username)).size,3);
  await db.exec(usernameSql);assert.deepEqual((await db.query('select id,username from bennys_profiles order by id')).rows,mapped);
  assert.equal((await db.query('select * from bennys_orders')).rows.length,2);
  await db.exec('set role anon;');await assert.rejects(db.query('select * from bennys_access_limits'));await assert.rejects(db.query("select bennys_access_limit('fixture',60,2)"));
  await db.exec('reset role;set role service_role;');
  for(const expected of [true,true,false])assert.equal((await db.query("select bennys_access_limit('fixture',60,2) as allowed")).rows[0].allowed,expected);
  await db.exec('reset role;');await db.query("update bennys_access_limits set window_start=now()-interval '2 minutes'");
  await db.exec('set role service_role;');assert.equal((await db.query("select bennys_access_limit('fixture',60,2) as allowed")).rows[0].allowed,true);

  await db.exec('reset role;');
  await execSqlStatements(db,readFileSync(new URL('../supabase/cierres-caja.sql',import.meta.url),'utf8'),'cierres-caja.sql');
  await execSqlStatements(db,readFileSync(new URL('../supabase/fichajes-y-reportes.sql',import.meta.url),'utf8'),'fichajes-y-reportes.sql');
  await as(employee);
  const started=(await db.query('select * from bennys_clock_start()')).rows[0];
  assert.equal(started.status,'active');assert.equal(started.employee_id,employee);
  await assert.rejects(db.query('select bennys_clock_start()'));
  const activityBefore=started.last_activity_at;
  await create(items,'ffffffff-ffff-4fff-8fff-ffffffffffff');
  const afterSale=(await db.query('select last_activity_at from bennys_clock_sessions where id=$1',[started.id])).rows[0];
  assert.ok(Date.parse(afterSale.last_activity_at)>=Date.parse(activityBefore));
  await db.exec('reset role;');
  await db.query("update bennys_clock_sessions set last_activity_at=clock_timestamp()-interval '61 minutes' where id=$1",[started.id]);
  await as(employee);
  const paused=(await db.query('select * from bennys_clock_status()')).rows[0];
  assert.equal(paused.status,'paused');assert.equal(paused.pause_reason,'inactivity');
  const resumed=(await db.query('select * from bennys_clock_resume()')).rows[0];
  assert.equal(resumed.status,'active');assert.equal(resumed.pause_reason,'');
  const finished=(await db.query('select * from bennys_clock_finish()')).rows[0];
  assert.equal(finished.status,'closed');assert.ok(finished.ended_at);assert.ok(finished.accumulated_seconds>=0);
  assert.equal((await db.query('select count(*)::int as n from bennys_clock_sessions where employee_id=$1',[employee])).rows[0].n,1);
  await as(other);assert.equal((await db.query('select * from bennys_clock_sessions')).rows.length,0);
  await as(admin);
  const closing=(await db.query("select * from bennys_close_cash($1,1000,'Cierre de prueba')",['99999999-9999-4999-8999-999999999999'])).rows[0];
  assert.equal(Number(closing.cash_amount),1000);
  assert.equal(closing.snapshot.team_summary.services,1);
  assert.equal(Number(closing.snapshot.team_summary.sales),79650);
  assert.equal(closing.snapshot.employee_summary.find(p=>p.employee_id===employee).services,1);
  assert.equal(closing.snapshot.clock_sessions.length,1);
  assert.equal(closing.snapshot.clock_sessions[0].employee_id,employee);assert.equal(closing.snapshot.clock_sessions[0].segments.length,2);
  assert.ok(closing.period_start===null);
  assert.equal((await db.query('select count(*)::int as n from bennys_orders')).rows[0].n,3);
  await db.close();
});
