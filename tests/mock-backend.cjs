// Backend simulado de Supabase para las pruebas de navegador. No crea usuarios ni ventas reales:
// intercepta las peticiones HTTP del SDK oficial y responde con datos de ejemplo en memoria.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');

const ORIGIN='http://127.0.0.1:8092';
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.woff2':'font/woff2','.ttf':'font/ttf','.glb':'model/gltf-binary'};

async function createMock(){
  const {CATALOG}=await import('../dist/catalog.js'),{calculate}=await import('../dist/core.js');
  const root=path.resolve(__dirname,'../dist');
  const profiles=[
    {id:'11111111-1111-4111-8111-111111111111',username:'mateo',email:'admin@example.invalid',display_name:'Mateo',role:'admin',active:true,commission:20},
    {id:'22222222-2222-4222-8222-222222222222',username:'alex',email:'employee@example.invalid',display_name:'Alex',role:'employee',active:true,commission:20},
    {id:'33333333-3333-4333-8333-333333333333',username:'nuevo',email:'pending@example.invalid',display_name:'Nuevo',role:'employee',active:false,commission:0}
  ];
  const services=CATALOG.map(s=>({id:s.id,name:s.name,cost:s.cost,price:s.price,exclusive_group:s.exclusive||null}));
  const orders=[],requests=[],expenses=[],audit=[];
  const flags={loseResponse:true,hasAdmin:true};
  const session=p=>{const expires_at=Math.floor(Date.now()/1000)+3600;return {access_token:[{alg:'HS256',typ:'JWT'},{sub:p.id,role:'authenticated',aud:'authenticated',exp:expires_at},'fixture'].map((v,i)=>i<2?Buffer.from(JSON.stringify(v)).toString('base64url'):v).join('.'),token_type:'bearer',expires_in:3600,expires_at,refresh_token:'fixture-'+p.id,user:{id:p.id,email:p.email,aud:'authenticated',role:'authenticated',app_metadata:{provider:'email'},user_metadata:{display_name:p.display_name,...(p.metadata||{})},created_at:new Date().toISOString()}};};

  /** Registra las rutas en un contexto de Playwright. `onStatic` permite observar archivos servidos. */
  async function install(context,{onStatic}={}){
    await context.route('**/*',async route=>{
      const req=route.request(),url=new URL(req.url());
      if(url.origin===ORIGIN){
        const file=path.resolve(root,'.'+(url.pathname==='/'?'/index.html':decodeURIComponent(url.pathname)));
        if(!file.startsWith(root+path.sep)||!fs.existsSync(file))return route.fulfill({status:404,body:'Not found'});
        onStatic?.(url.pathname);
        return route.fulfill({status:200,body:fs.readFileSync(file),contentType:types[path.extname(file)]||'application/octet-stream'});
      }
      if(url.hostname!=='ehckobsmodqjpfmnnver.supabase.co')return route.abort();
      const headers={'access-control-allow-origin':'*','access-control-allow-headers':'*','access-control-allow-methods':'GET,POST,PUT,PATCH,DELETE,OPTIONS','content-type':'application/json'};
      const send=(body,status=200)=>route.fulfill({status,headers,body:JSON.stringify(body)});
      if(req.method()==='OPTIONS')return route.fulfill({status:204,headers});
      const args=req.postDataJSON()||{},token=req.headers().authorization?.split(' ')[1];let profile;
      try{profile=profiles.find(p=>p.id===JSON.parse(Buffer.from(token.split('.')[1],'base64url')).sub);}catch{}
      if(url.pathname==='/auth/v1/token'){const p=profiles.find(p=>p.email===args.email||args.refresh_token==='fixture-'+p.id);return p?send(session(p)):send({message:'Invalid login credentials'},400);}
      if(url.pathname==='/auth/v1/logout')return send({});
      if(url.pathname==='/auth/v1/user'){
        // PUT: la persona actualiza los metadatos de su propia cuenta (p. ej., el orden del inicio); null elimina la clave.
        if(req.method()==='PUT'&&profile){profile.metadata=profile.metadata||{};for(const [k,v] of Object.entries(args.data||{})){if(v===null)delete profile.metadata[k];else profile.metadata[k]=v;}requests.userUpdates=(requests.userUpdates||0)+1;}
        return send(profile?session(profile).user:{},profile?200:401);
      }
      if(url.pathname==='/auth/v1/signup')return send({user:{id:profiles[2].id,email:args.email},session:null});
      if(url.pathname==='/functions/v1/bennys-staff'){
        if(args.action==='login'){const p=profiles.find(p=>p.username===args.username);return p?send({session:session(p)}):send({error:'Usuario o contraseña incorrectos.'},401);}
        if(args.action==='create_employee'||args.action==='request_access'){
          if(args.action==='create_employee'&&profile?.role!=='admin')return send({error:'Solo administración'},403);
          if(profiles.some(p=>p.username===args.username))return send({error:'Ese nombre de usuario ya está en uso.'},409);
          const id=args.action==='create_employee'?'44444444-4444-4444-8444-444444444444':'55555555-5555-4555-8555-555555555555';profiles.push({id,username:args.username,email:args.username+'@fixture.invalid',display_name:args.name,role:'employee',active:args.action==='create_employee',commission:args.commission||0});return send({username:args.username,requested:args.action==='request_access'},201);
        }
      }
      if(!profile)return send({message:'No auth'},401);
      const rpc=url.pathname.split('/rpc/')[1];
      if(rpc==='bennys_pro_version')return send(1);
      if(rpc==='bennys_create_expense'){assert.equal(profile.role,'admin');let row=expenses.find(e=>e.id===args.p_id);if(!row){row={id:args.p_id,description:args.p_description,category:args.p_category,amount:args.p_amount,created_by:profile.id,created_at:new Date().toISOString(),status:'active'};expenses.unshift(row);audit.unshift({id:audit.length+1,actor_id:profile.id,action:'gasto_registrado',created_at:row.created_at,details:{label:row.description,amount:row.amount}});}return send(row);}
      if(rpc==='bennys_cancel_expense'){assert.equal(profile.role,'admin');const row=expenses.find(e=>e.id===args.p_id);row.status='cancelled';return send(row);}
      if(rpc==='bennys_ensure_profile')return send(profile);
      if(rpc==='bennys_has_admin')return send(flags.hasAdmin);
      if(rpc==='bennys_claim_admin'){if(args.p_code!=='fixture-initial-admin-code')return send({message:'Código inicial no válido.'},400);profile.active=true;profile.role='admin';flags.hasAdmin=true;return send(profile);}
      if(rpc==='bennys_update_service'){assert.equal(profile.role,'admin');const s=services.find(s=>s.id===args.p_id);s.cost=args.p_cost;s.price=args.p_price;return send(s);}
      if(rpc==='bennys_manage_employee'){assert.equal(profile.role,'admin');const p=profiles.find(p=>p.id===args.p_id);Object.assign(p,{display_name:args.p_name,role:args.p_role,active:args.p_active,commission:args.p_commission});return send(p);}
      if(rpc==='bennys_create_order'){
        requests.push(args);assert.equal(profile.active,true);
        let row=orders.find(o=>o.id===args.p_id);if(row)return send(row);
        const items=args.p_items.map(i=>({...services.find(s=>s.id===i.id),qty:i.qty})),commission=profile.role==='admin'?args.p_commission:profile.commission;
        row={id:args.p_id,employee_id:profile.id,status:'active',created_at:new Date().toISOString(),payload:{id:args.p_id,folio:'#BNY-'+String(orders.length+1).padStart(3,'0'),date:new Date().toISOString(),client:args.p_client,playerId:args.p_player_id,mechanic:profile.display_name,employeeId:profile.id,payment:args.p_payment,notes:args.p_notes,items,discount:args.p_discount,commission,totals:calculate(items,args.p_discount,commission),status:'active'}};orders.push(row);
        if(flags.loseResponse){flags.loseResponse=false;return send({message:'Failed to fetch: simulated response lost after commit'},400);}return send(row);
      }
      if(rpc==='bennys_void_order'||rpc==='bennys_cancel_order'){const row=orders.find(o=>o.id===args.p_id);row.status=row.payload.status='cancelled';row.payload.cancellationReason=args.p_reason;audit.unshift({id:audit.length+1,actor_id:profile.id,action:'venta_anulada',created_at:new Date().toISOString(),details:{label:row.payload.folio,client:row.payload.client,amount:row.payload.totals.total,reason:args.p_reason}});return send(row);}
      if(url.pathname.endsWith('/bennys_expenses'))return send(profile.role==='admin'?expenses:[]);
      if(url.pathname.endsWith('/bennys_audit'))return send(profile.role==='admin'?audit:[]);
      if(url.pathname.endsWith('/bennys_services'))return send(profile.active?services:[]);
      if(url.pathname.endsWith('/bennys_profiles'))return send(profile.role==='admin'?profiles:[profile]);
      if(url.pathname.endsWith('/bennys_orders'))return send(profile.active?orders.filter(o=>profile.role==='admin'||o.employee_id===profile.id):[]);
      return send({message:'Unmocked endpoint '+url.pathname},404);
    });
  }
  return {profiles,services,orders,requests,expenses,audit,flags,install};
}
module.exports={createMock,ORIGIN};
