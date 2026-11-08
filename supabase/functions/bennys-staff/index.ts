// Función de servidor. Ninguna clave de administración se envía al navegador.
const cors={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type','Access-Control-Allow-Methods':'POST, OPTIONS','Cache-Control':'no-store'};
const reply=(status,data)=>new Response(JSON.stringify(data),{status,headers:{...cors,'Content-Type':'application/json'}});
const usernamePattern=/^[a-z0-9][a-z0-9._-]{2,23}$/;

export function createStaffHandler(createClient,env){
  return async request=>{
    if(request.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
    if(request.method!=='POST')return reply(405,{error:'Método no permitido.'});
    const url=env.SUPABASE_URL,secret=env.SUPABASE_SERVICE_ROLE_KEY,publishable=env.SUPABASE_ANON_KEY;
    if(!url||!secret||!publishable)return reply(503,{error:'El acceso del taller no está configurado. Contacta a administración.'});
    try{
      if(Number(request.headers.get('content-length')||0)>4096)return reply(413,{error:'Solicitud demasiado grande.'});
      const raw=await request.text();if(raw.length>4096)return reply(413,{error:'Solicitud demasiado grande.'});
      let body;try{body=JSON.parse(raw);}catch{return reply(400,{error:'Solicitud no válida.'});}
      if(!body||typeof body!=='object')return reply(400,{error:'Solicitud no válida.'});
      const action=body.action,username=String(body.username||'').trim().toLowerCase(),password=String(body.password||'');
      if(!['login','request_access','create_employee'].includes(action))return reply(400,{error:'Acción no válida.'});
      if(!usernamePattern.test(username))return reply(400,{error:'Usa de 3 a 24 caracteres: letras sin tildes, números, punto, guion o guion bajo.'});
      if(password.length<8||password.length>128)return reply(400,{error:'La contraseña debe tener entre 8 y 128 caracteres.'});
      const admin=createClient(url,secret,{auth:{persistSession:false,autoRefreshToken:false}});
      if(action==='create_employee'){
        const token=request.headers.get('Authorization')?.replace(/^Bearer\s+/i,'');
        if(!token)return reply(401,{error:'Inicia sesión como administrador.'});
        const {data:caller,error:callerError}=await admin.auth.getUser(token);
        if(callerError||!caller.user)return reply(401,{error:'Sesión no válida.'});
        const {data:profile,error:profileError}=await admin.from('bennys_profiles').select('role,active').eq('id',caller.user.id).maybeSingle();
        if(profileError||!profile?.active||profile.role!=='admin')return reply(403,{error:'Solo administración puede crear mecánicos.'});
      }else{
        const ip=request.headers.get('x-forwarded-for')?.split(',')[0].trim()||'unknown';
        const hash=async value=>[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value)))].map(n=>n.toString(16).padStart(2,'0')).join('');
        const limits=action==='login'?[[`login-ip:${await hash(ip)}`,60,20],[`login-user:${await hash(username)}`,60,10]]:[[`request:${await hash(ip)}`,3600,5]];
        for(const [key,seconds,max] of limits){const {data:allowed,error}=await admin.rpc('bennys_access_limit',{p_key:key,p_seconds:seconds,p_max:max});if(error)return reply(503,{error:'El acceso por usuario todavía no está disponible.'});if(!allowed)return reply(429,{error:'Demasiados intentos. Espera un momento y vuelve a probar.'});}
      }
      const {data:existing,error:lookupError}=await admin.from('bennys_profiles').select('id,username').eq('username',username).maybeSingle();
      if(lookupError)return reply(503,{error:'El acceso por usuario todavía no está disponible.'});
      if(action==='login'){
        // Las cuentas anteriores conservan su correo interno y su contraseña.
        // El navegador solo necesita el usuario elegido en el taller.
        let email=`${username}@staff.bennys.invalid`;
        if(existing){const {data,error}=await admin.auth.admin.getUserById(existing.id);if(error||!data.user?.email)return reply(401,{error:'Usuario o contraseña incorrectos.'});email=data.user.email;}
        const auth=createClient(url,publishable,{auth:{persistSession:false,autoRefreshToken:false}});
        const {data,error}=await auth.auth.signInWithPassword({email,password});
        if(error||!existing||!data.session)return reply(401,{error:'Usuario o contraseña incorrectos.'});
        return reply(200,{session:data.session});
      }
      if(existing)return reply(409,{error:'Ese nombre de usuario ya está en uso.'});
      const name=String(body.name||'').trim(),commission=action==='create_employee'?Number(body.commission??0):0;
      if(!name||name.length>80||!Number.isFinite(commission)||commission<0||commission>100)return reply(400,{error:'Revisa el nombre y la comisión del mecánico.'});
      const {data,error}=await admin.auth.admin.createUser({email:`${username}@staff.bennys.invalid`,password,email_confirm:true,user_metadata:{display_name:name,username}});
      if(error||!data.user)return reply(409,{error:'No se pudo crear la cuenta. Revisa si el usuario ya existe.'});
      const id=data.user.id;
      const {error:saveError}=await admin.from('bennys_profiles').upsert({id,display_name:name,email:'',username,role:'employee',active:action==='create_employee',commission},{onConflict:'id'});
      if(saveError){await admin.auth.admin.deleteUser(id);return reply(409,{error:'No se pudo guardar el usuario. Vuelve a intentarlo.'});}
      return reply(201,{username,requested:action==='request_access'});
    }catch{return reply(500,{error:'No se pudo completar la operación. Vuelve a intentarlo.'});}
  };
}

if(typeof Deno!=='undefined'){
  const {createClient}=await import('npm:@supabase/supabase-js@2.117.3');
  Deno.serve(createStaffHandler(createClient,Deno.env.toObject()));
}
