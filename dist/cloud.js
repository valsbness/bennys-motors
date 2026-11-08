import {CLOUD_CONFIG} from './config.js';

const orderPayload = row => {
  const {playerId,vehicle,plate,...order}=row.payload;
  return {...order,status:row.status};
};

export class BennysCloud {
  constructor(onChange){
    if(!globalThis.supabase?.createClient)throw Error('No se pudo cargar el cliente de Supabase.');
    this.client=globalThis.supabase.createClient(CLOUD_CONFIG.url,CLOUD_CONFIG.publishableKey,{auth:{storageKey:'bennys-auth-v1',persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
    this.initialized=false;this.lastSynced=null;this.onChange=onChange;this.user=null;this.profile=null;this.ready=false;this.loading=false;this.error=null;this.version=0;this.proReady=false;this.expenses=[];this.audit=[];
    this.client.auth.onAuthStateChange((event,session)=>{
      if(event==='INITIAL_SESSION'||event==='SIGNED_IN'||event==='SIGNED_OUT'||event==='TOKEN_REFRESHED')setTimeout(()=>this.restore(session),0);
    });
    this.timer=setInterval(()=>{if(this.user&&document.visibilityState==='visible')this.load();},30000);
    document.addEventListener('visibilitychange',()=>{if(this.user&&document.visibilityState==='visible')this.load();});
    globalThis.addEventListener('focus',()=>{if(this.user)this.load();});
  }
  get isAdmin(){return this.ready&&this.profile?.active&&this.profile.role==='admin';}
  get isActive(){return this.ready&&this.profile?.active;}
  // Orden personal de los módulos del inicio: vive en los metadatos de la propia cuenta (Supabase Auth), sin tablas ni SQL nuevos.
  get homeLayout(){return this.user?.user_metadata?.bennys_home_layout||null;}
  async saveHomeLayout(value){
    const {data,error}=await this.client.auth.updateUser({data:{bennys_home_layout:value}});
    if(error)throw error;
    if(data?.user)this.user=data.user;
    return value;
  }
  async rpc(name,args={}){const {data,error}=await this.client.rpc(name,args);if(error)throw error;return Array.isArray(data)&&data.length===1?data[0]:data;}
  async restore(session){
    const user=session?.user||null;this.initialized=true;
    if(this.user?.id!==user?.id){this.version++;this.profile=null;this.ready=false;this.expenses=[];this.audit=[];this.team=[];this.proReady=false;}
    this.user=user;
    if(!user){this.error=null;this.loading=false;this.onChange({kind:'signedout'});return;}
    await this.load();
  }
  async pages(table,order){const rows=[];for(let start=0;;start+=1000){const {data,error}=await this.client.from(table).select('*').order(order,{ascending:false}).range(start,start+999);if(error)throw error;rows.push(...data);if(data.length<1000)break;}return rows;}
  async load(){
    if(!this.user)return;
    const version=++this.version,userId=this.user.id;this.loading=true;this.onChange({kind:'status'});
    try{
      const profile=await this.rpc('bennys_ensure_profile');
      if(version!==this.version||userId!==this.user?.id)return;
      this.profile=profile;this.error=null;
      if(!profile.active){this.ready=false;this.hasAdmin=await this.rpc('bennys_has_admin');if(version!==this.version||userId!==this.user?.id)return;this.loading=false;this.onChange({kind:'pending'});return;}
      const [services,orders,team,pro]=await Promise.all([this.pages('bennys_services','id'),this.pages('bennys_orders','created_at'),profile.role==='admin'?this.pages('bennys_profiles','created_at'):Promise.resolve([]),this.loadPro(profile)]);
      if(version!==this.version||userId!==this.user?.id)return;
      if(services.length!==18)throw Error('El tarifario del taller está incompleto.');
      this.ready=true;this.loading=false;this.lastSynced=new Date();this.team=team;Object.assign(this,pro);this.onChange({kind:'data',profile,services,orders:orders.map(orderPayload),team,userId});
    }catch(error){
      if(version!==this.version||userId!==this.user?.id)return;
      this.ready=false;this.loading=false;this.error=error;this.onChange({kind:'error',error});
    }
  }
  async loadPro(profile){
    try{await this.rpc('bennys_pro_version');}catch(error){if(error.code==='PGRST202')return {proReady:false,expenses:[],audit:[]};throw error;}
    const [expenses,audit]=profile.role==='admin'?await Promise.all([this.pages('bennys_expenses','created_at'),this.pages('bennys_audit','id')]):[[],[]];
    return {proReady:true,expenses,audit};
  }
  async staff(action,values){
    const {data,error}=await this.client.functions.invoke('bennys-staff',{body:{action,...values}});
    if(error){let message='El acceso por usuario no está disponible. Contacta a administración.';if(error.context?.json){try{message=(await error.context.json()).error||message;}catch{}}throw Error(message);}
    if(data?.error)throw Error(data.error);return data;
  }
  async signIn(username,password){const data=await this.staff('login',{username,password});if(!data?.session?.access_token||!data?.session?.refresh_token)throw Error('No se pudo iniciar la sesión.');const {error}=await this.client.auth.setSession({access_token:data.session.access_token,refresh_token:data.session.refresh_token});if(error)throw error;}
  async signUp(name,username,password){return this.staff('request_access',{name,username,password});}
  async createEmployee(values){if(!this.isAdmin)throw Error('Solo administración puede crear mecánicos.');return this.staff('create_employee',values);}
  async signOut(){const {error}=await this.client.auth.signOut({scope:'local'});if(error)throw error;}
  async claimAdmin(code){await this.rpc('bennys_claim_admin',{p_code:code});await this.load();}
  async createOrder(order){
    if(!this.isActive)throw Error('Inicia sesión con una cuenta activa para registrar el servicio.');
    // Parámetro vacío para mantener compatibilidad con el SQL ya instalado.
    const row=await this.rpc('bennys_create_order',{p_id:order.id,p_client:order.client,p_player_id:'',p_items:order.items.map(i=>({id:i.id,qty:i.qty,price:i.price,cost:i.cost})),p_discount:order.discount,p_commission:order.commission,p_payment:order.payment,p_notes:order.notes});
    return orderPayload(row);
  }
  async cancelOrder(id,reason){return orderPayload(await this.rpc(this.proReady?'bennys_void_order':'bennys_cancel_order',this.proReady?{p_id:id,p_reason:reason}:{p_id:id}));}
  async createExpense(expense){return this.rpc('bennys_create_expense',{p_id:expense.id,p_description:expense.description,p_category:expense.category,p_amount:expense.amount});}
  async cancelExpense(id){return this.rpc('bennys_cancel_expense',{p_id:id});}
  async saveService(service){return this.rpc('bennys_update_service',{p_id:service.id,p_cost:service.cost,p_price:service.price});}
  async saveEmployee(profile){return this.rpc('bennys_manage_employee',{p_id:profile.id,p_name:profile.display_name,p_role:profile.role,p_active:profile.active,p_commission:profile.commission});}
}
