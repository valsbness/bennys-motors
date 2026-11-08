import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const source=await readFile(new URL('../supabase/functions/bennys-staff/index.ts',import.meta.url),'utf8');
const {createStaffHandler}=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
function fixture({caller='admin',limited=false,saveFailure=false}={}){
  const rows=[{id:'admin-id',username:'mateo',role:'admin',active:true},{id:'employee-id',username:'alex',role:'employee',active:true}],created=[],deleted=[],limits=[];
  const makeClient=(url,key)=>({
    rpc:async(name,args)=>{limits.push(args);return {data:!limited,error:null};},
    from:()=>({select(){return this;},eq(field,value){this.field=field;this.value=value;return this;},async maybeSingle(){return {data:rows.find(row=>row[this.field]===this.value)||null,error:null};},async upsert(row){if(saveFailure)return {error:Error('unique')};rows.push(row);return {error:null};}}),
    auth:{getUser:async token=>({data:{user:token==='valid'?{id:caller==='admin'?'admin-id':'employee-id'}:null},error:null}),admin:{getUserById:async id=>({data:{user:{id,email:'legacy@example.invalid'}},error:null}),createUser:async args=>{created.push(args);return {data:{user:{id:'new-id'}},error:null};},deleteUser:async id=>{deleted.push(id);return {error:null};}},signInWithPassword:async args=>({data:{session:args.password==='valid-password'?{access_token:'session-token',refresh_token:'refresh-token'}:null},error:null})}
  });
  const handle=createStaffHandler(makeClient,{SUPABASE_URL:'https://fixture.invalid',SUPABASE_SERVICE_ROLE_KEY:'server-only',SUPABASE_ANON_KEY:'public'});
  const call=async(body,token)=>{const response=await handle(new Request('https://fixture.invalid',{method:'POST',headers:{'Content-Type':'application/json','x-forwarded-for':'192.0.2.1',...(token?{Authorization:'Bearer '+token}:{})},body:JSON.stringify(body)}));return {status:response.status,body:await response.json()};};
  return {call,rows,created,deleted,limits};
}
test('Login por usuario conserva cuentas anteriores y devuelve credenciales genéricas incorrectas',async()=>{
  const f=fixture(),good=await f.call({action:'login',username:' MATEO ',password:'valid-password'});assert.equal(good.status,200);assert.equal(good.body.session.access_token,'session-token');
  for(const username of ['mateo','desconocido'])assert.deepEqual((await f.call({action:'login',username,password:'wrong-password'})).body,{error:'Usuario o contraseña incorrectos.'});
  assert.equal(f.created.length,0);assert.equal(f.limits.length,6);
});
test('Solicitar acceso crea solo un empleado pendiente, aunque se envíe un rol de administrador',async()=>{
  const f=fixture(),result=await f.call({action:'request_access',username:'nuevo',name:'Nuevo mecánico',password:'valid-password',role:'admin',active:true,commission:99});
  assert.equal(result.status,201);assert.deepEqual(result.body,{username:'nuevo',requested:true});assert.equal(f.rows.at(-1).role,'employee');assert.equal(f.rows.at(-1).active,false);assert.equal(f.rows.at(-1).commission,0);assert.equal(f.created[0].email_confirm,true);assert.equal(f.created[0].email,'nuevo@staff.bennys.invalid');
});
test('Crear mecánicos requiere sesión validada y administrador activo',async()=>{
  const body={action:'create_employee',username:'nuevo',name:'Nuevo',password:'valid-password',commission:25};
  const anon=fixture();assert.equal((await anon.call(body)).status,401);assert.equal(anon.created.length,0);
  const employee=fixture({caller:'employee'});assert.equal((await employee.call(body,'valid')).status,403);assert.equal(employee.created.length,0);
  const admin=fixture();assert.equal((await admin.call(body,'valid')).status,201);assert.equal(admin.rows.at(-1).active,true);assert.equal(admin.rows.at(-1).commission,25);
  admin.rows[0].active=false;assert.equal((await admin.call({...body,username:'otro'},'valid')).status,403);
});
test('Límites, usuarios duplicados y fallos al guardar no dejan cuentas incompletas',async()=>{
  const body={action:'request_access',username:'nuevo',name:'Nuevo',password:'valid-password'};
  const limited=fixture({limited:true});assert.equal((await limited.call(body)).status,429);assert.equal(limited.created.length,0);
  const duplicate=fixture();assert.equal((await duplicate.call({...body,username:'mateo'})).status,409);assert.equal(duplicate.created.length,0);
  const failed=fixture({saveFailure:true});assert.equal((await failed.call(body)).status,409);assert.deepEqual(failed.deleted,['new-id']);
  assert.equal((await fixture().call({...body,username:'ab'})).status,400);assert.equal((await fixture().call({...body,password:'short'})).status,400);
});
