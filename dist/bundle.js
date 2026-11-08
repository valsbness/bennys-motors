/* Benny’s Motors · generado con node build.mjs */
(()=>{
// Clave publicable para el navegador. Los permisos se aplican mediante Auth y RLS.
const CLOUD_CONFIG = Object.freeze({
  url: 'https://ehckobsmodqjpfmnnver.supabase.co',
  publishableKey: 'sb_publishable_Rh-mkG-r08P4MGyBUGSTfA_kokbJKYL'
});

const CATEGORIES = [
  {id:'all', label:'Todos los servicios', icon:'grid'},
  {id:'taller', label:'Taller', icon:'wrench'},
  {id:'motor', label:'Motor', icon:'engine'},
  {id:'traccion', label:'Tracción', icon:'drive'},
  {id:'neumaticos', label:'Neumáticos', icon:'wheel'},
  {id:'extras', label:'Extras', icon:'bolt'}
];
// Importes transcritos del tarifario del servidor proporcionado por el usuario.
const CATALOG = [
  {id:'rendimiento', name:'Rendimiento', shop:'Piezas de Rendimiento', category:'taller', cost:7000, price:10000, icon:'gauge', detail:'Piezas para llevarlo al siguiente nivel.'},
  {id:'ruedas', name:'Juego de ruedas', shop:'Set de Rines', category:'taller', cost:7000, price:10000, icon:'wheel', detail:'El estilo empieza desde el asfalto.'},
  {id:'humo', name:'Humo de neumáticos', shop:'Kit de humo para neumáticos', category:'taller', cost:2500, price:5000, icon:'smoke', detail:'Deja tu firma en cada derrape.'},
  {id:'cosmeticos', name:'Cosméticos', shop:'Piezas Cosméticas', category:'taller', cost:2000, price:3000, icon:'car', detail:'Detalles que hacen único tu vehículo.'},
  {id:'pintura', name:'Repintar', shop:'Kit de pintura', category:'taller', cost:500, price:1500, icon:'paint', detail:'Un color nuevo. Una nueva identidad.'},
  {id:'limpieza', name:'Limpieza', shop:'Kit de limpieza', category:'taller', cost:250, price:500, icon:'sparkles', detail:'De vuelta a su mejor versión.'},
  {id:'reparacion', name:'Reparación', shop:'Kit de reparación', category:'taller', cost:500, price:1000, icon:'wrench', detail:'Listo para volver a las calles.'},
  {id:'v12', name:'Motor V12', shop:'Motor V12', category:'motor', cost:300000, price:500000, icon:'engine', detail:'Doce cilindros. Cero compromisos.', exclusive:'motor'},
  {id:'v8', name:'Motor V8', shop:'Motor V8', category:'motor', cost:40000, price:50000, icon:'engine', detail:'La esencia del músculo americano.', exclusive:'motor'},
  {id:'awd', name:'Tracción AWD', shop:'Tracción AWD', category:'traccion', cost:8000, price:12500, icon:'drive', detail:'Potencia en las cuatro ruedas.', exclusive:'traccion'},
  {id:'rwd', name:'Tracción RWD', shop:'Tracción RWD', category:'traccion', cost:7000, price:11500, icon:'drive', detail:'Toda la fuerza al eje trasero.', exclusive:'traccion'},
  {id:'fdw', name:'Tracción FDW', shop:'Tracción FDW', category:'traccion', cost:8500, price:10500, icon:'drive', detail:'Configuración del eje delantero.', exclusive:'traccion'},
  {id:'slick', name:'Slick', shop:'Slick', category:'neumaticos', cost:4000, price:6000, icon:'wheel', detail:'Máximo contacto con el asfalto.', exclusive:'neumaticos'},
  {id:'semi', name:'Semi-Slick', shop:'Semi-Slick', category:'neumaticos', cost:3500, price:6000, icon:'wheel', detail:'Equilibrio entre calle y circuito.', exclusive:'neumaticos'},
  {id:'offroad', name:'Offroad', shop:'Offroad', category:'neumaticos', cost:4500, price:6500, icon:'wheel', detail:'Prepáralo para salir del asfalto.', exclusive:'neumaticos'},
  {id:'frenos', name:'Frenos cerámicos', shop:'Frenos Ceramicos', category:'extras', cost:8000, price:20000, icon:'brake', detail:'Control a la altura de la potencia.'},
  {id:'turbo', name:'Turbo charger', shop:'Turbo charger', category:'extras', cost:25000, price:35000, icon:'turbo', detail:'Ese empuje extra que se siente.'},
  {id:'kit', name:'Kit de extras', shop:'Kit de extras', category:'extras', cost:4000, price:5000, icon:'kit', detail:'El último toque de tu preparación.'}
];
const PRESETS = [
  {id:'reference', name:'Selección de tu tabla', detail:'V8 · AWD · Slick · Frenos cerámicos', items:['v8','awd','slick','frenos'], icon:'engine'},
  {id:'maintenance', name:'Puesta a punto', detail:'Reparación · Limpieza · Repintar', items:['reparacion','limpieza','pintura'], icon:'wrench'},
  {id:'performance', name:'Street performance', detail:'Rendimiento · Rines · Turbo', items:['rendimiento','ruedas','turbo'], icon:'gauge'}
];

const euro = value => new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR',useGrouping:'always',maximumFractionDigits:2,minimumFractionDigits:Math.abs(value-Math.round(value))>0.001?2:0}).format(value);
const round = n => Math.round((n + Number.EPSILON) * 100) / 100;
function calculate(items, discountPercent=0, commissionPercent=0) {
  const subtotal=round(items.reduce((n,i)=>n+i.price*i.qty,0));
  const cost=round(items.reduce((n,i)=>n+i.cost*i.qty,0));
  const discount=round(subtotal*Math.max(0,Math.min(100,discountPercent))/100);
  const total=round(subtotal-discount);
  const gross=round(total-cost);
  // La comisión se calcula sobre la ganancia positiva, tras el descuento.
  const commission=round(Math.max(0,gross)*Math.max(0,Math.min(100,commissionPercent))/100);
  return {subtotal,cost,discount,total,gross,commission,net:round(gross-commission),units:items.reduce((n,i)=>n+i.qty,0)};
}
function addToOrder(items,service,qty=1) {
  if(!Number.isInteger(qty)||qty<1||qty>999) throw new Error('Usa una cantidad entre 1 y 999.');
  const replaced=service.exclusive ? items.filter(i=>i.id!==service.id && i.exclusive===service.exclusive) : [];
  const next=items.filter(i=>!replaced.includes(i)).map(i=>({...i}));
  const existing=next.find(i=>i.id===service.id);
  if(existing) existing.qty=service.exclusive ? 1 : Math.min(999,existing.qty+qty);
  else next.push({...service,qty:service.exclusive?1:qty});
  return {items:next,replaced};
}
function receipt(order) {
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

const clientKey = name => String(name??'').trim().replace(/\s+/g,' ').normalize('NFD').replace(/\p{M}/gu,'').toLocaleLowerCase('es');
function frequentClients(orders) {
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


const ICONS={
  arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
  chevron:'<path d="m9 5 7 7-7 7"/>',
  refresh:'<path d="M3 10a9 9 0 1 1 1 8M3 4v6h6"/>',
  wallet:'<rect x="3" y="5" width="18" height="15" rx="3"/><path d="M3 8V5a2 2 0 0 1 2-2h12v2m0 8h4m-5 0h.01"/>',
  team:'<circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 5a5 5 0 0 1 3 5"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  calculator:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8v3H8zM8 13h1m6 0h1m-8 4h1m6 0h1"/>',
  clipboard:'<rect x="5" y="4" width="14" height="18" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 11h6m-6 4h6m-6 3h4"/>',
  tag:'<path d="M3 3h8l10 10-8 8L3 11z"/><circle cx="7.5" cy="7.5" r="1"/>',
  chart:'<path d="M4 3v18h17M8 17v-5m5 5V7m5 10V4"/>',
  settings:'<path d="m9 3 1-1h4l1 3 3 1 3-1 2 4-2 2v3l1 2-2 4-3-1-3 2-1 2H9l-1-3-3-1-2 1-2-4 2-2v-3L1 9l2-4 3 1z" transform="translate(1 0) scale(.92)"/><circle cx="12" cy="12" r="3"/>',
  wrench:'<path d="M21 3a6 6 0 0 1-8 8L5 20a2.1 2.1 0 0 1-3-3l9-8a6 6 0 0 1 8-8l-4 4 4 2z"/><path d="m4 18 1-1"/>',
  car:'<path d="m5 8 2-5h10l2 5M3 17v3h3v-3m12 0v3h3v-3M2 10l2-2h16l2 2v7H2zM7 13H4m16 0h-3M8 8h8"/>',
  engine:'<path d="M6 7h11l3 4h2v7h-4l-2 3H6l-3-4v-7h3zM9 3h5m-3 0v4M1 12v5m2-3H1m7-3h6l3 4H8z"/>',
  wheel:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6.5"/><circle cx="12" cy="12" r="1.5"/><path d="m12 10.5-2-5m3 5 4-3m-4 5.5 5 2m-6 0-1 4m-1-6-5 1"/>',
  drive:'<path d="M8 5h8M8 19h8M12 5v14"/><rect x="4" y="2" width="4" height="6" rx="1"/><rect x="16" y="2" width="4" height="6" rx="1"/><rect x="4" y="16" width="4" height="6" rx="1"/><rect x="16" y="16" width="4" height="6" rx="1"/><path d="m9 12 3-3 3 3-3 3z"/>',
  gauge:'<path d="M4 19a10 10 0 1 1 16 0zM12 4v2M5 8l2 1m12-1-2 1M3 14h2m14 0h2m-9 2 5-7"/><circle cx="12" cy="16" r="1.5"/>',
  smoke:'<path d="M3 19h18M5 15c-4-5 5-3 2-8M12 16c-5-5 6-5 2-12M18 16c-3-3 4-4 3-8"/>',
  paint:'<path d="M7 7h9v14H7zM9 3h5v4m-5-4V1h7m0 4h4m-1 3h2M7 12h9m-9 5h9"/>',
  sparkles:'<path d="m10 3 2 6 6 2-6 2-2 6-2-6-6-2 6-2zM19 2v4m-2-2h4M20 16v6m-3-3h6"/>',
  brake:'<circle cx="11" cy="12" r="9"/><circle cx="11" cy="12" r="3"/><path d="M17 5h4v9l-4 2zM7 7h.01m-2 5h.01m2 5h.01m6 2h.01M11 5h.01"/>',
  turbo:'<path d="M20 12a8 8 0 1 1-8-8h8V1h3v6H12a5 5 0 1 0 5 5z"/><circle cx="12" cy="12" r="2"/><path d="m10 10-2-2m6 2 2-2m-2 6 2 2m-6-2-2 2"/>',
  kit:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V3h8v4M2 12h20m-12-2v5h4v-5"/>',
  bolt:'<path d="m13 2-9 12h7l-1 8 10-13h-7z"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/>',
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M5 16H3V3h13v2"/>',
  shield:'<path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6zM8 12l3 3 5-6"/>',
  lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 4v3"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4 2c-1.5 1-1.5 1-1.5 3m0 3h.01"/>',
  download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  reset:'<path d="M3 10a9 9 0 1 1 1 8M3 4v6h6"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/>',
  close:'<path d="m6 6 12 12M18 6 6 18"/>',
  eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  eyeoff:'<path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4M6.6 6.7A17 17 0 0 0 2 12s3.6 7 10 7a9.700 9.700 0 0 0 4-.9M9.900 9.900a3 3 0 0 0 4.200 4.200"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  alert:'<path d="M12 3 2 20h20L12 3ZM12 10v4.500M12 17.500h.01"/>',
  moon:'<path d="M19 15.500A8 8 0 0 1 8.500 5a8 8 0 1 0 10.500 10.500Z"/><path d="M17 3v4m-2-2h4m1 4v2m-1-1h2"/>',
  pumpkin:'<path d="M12 8c-5 0-9 2.600-9 6.200S7 20.500 12 20.500s9-2.700 9-6.300S17 8 12 8Z"/><path d="M12 8c-2.600 1.400-3.800 3.900-3.800 6.200s1.200 4.700 3.800 6.300M12 8c2.600 1.400 3.800 3.900 3.800 6.200s-1.200 4.700-3.800 6.300"/><path d="M12 8V4.500M12 4.500c1 0 2.100-.6 2.700-1.600"/>',
  filter:'<path d="M3 5h18l-7 8v6l-4 2v-8L3 5Z"/>',
  grip:'<g fill="currentColor" stroke="none"><circle cx="9" cy="6" r="1.5"/><circle cx="15" cy="6" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="18" r="1.5"/></g>',
  chevronup:'<path d="m6 15 6-6 6 6"/>',
  chevrondown:'<path d="m6 9 6 6 6-6"/>',
  layout:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
  receipt:'<path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3ZM9 8h6M9 12h6"/>'
};
const icon=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]||ICONS.wrench}</svg>`;
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// En móvil las tablas se apilan como tarjetas: cada celda lleva como etiqueta el encabezado de su columna.
const labelTables=root=>{
  for(const table of root.querySelectorAll('table')){
    const heads=[...table.querySelectorAll('thead th')].map(th=>th.textContent.trim());
    if(!heads.length)continue;
    for(const row of table.querySelectorAll('tbody tr')){
      [...row.children].forEach((cell,i)=>{if(i>0&&!cell.dataset.label&&heads[i]&&cell.colSpan===1)cell.dataset.label=heads[i];});
    }
  }
};


function inPeriod(date,period,now=new Date()){
  const value=new Date(date),start=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  if(!Number.isFinite(value.getTime())||value>now)return false;
  if(period==='all')return true;
  if(period==='week')start.setDate(start.getDate()-(start.getDay()+6)%7);
  if(period==='month')start.setDate(1);
  return value>=start;
}
function salesMetrics(orders){
  const active=orders.filter(o=>o.status==='active'),sum=key=>round(active.reduce((n,o)=>n+(Number(o.totals[key])||0),0));
  return {count:active.length,total:sum('total'),cost:sum('cost'),commission:sum('commission'),net:sum('net'),gross:sum('gross'),discount:sum('discount'),average:active.length?round(sum('total')/active.length):0};
}
function employeeMetrics(orders,team=[]){
  const groups=new Map();
  for(const order of orders.filter(o=>o.status==='active')){
    const id=order.employeeId||order.mechanic||'unknown';
    if(!groups.has(id))groups.set(id,{id,name:team.find(p=>p.id===id)?.display_name||order.mechanic||'Sin asignar',orders:[]});
    groups.get(id).orders.push(order);
  }
  return [...groups.values()].map(({orders,...person})=>({...person,...salesMetrics(orders)})).sort((a,b)=>b.total-a.total||a.name.localeCompare(b.name,'es'));
}
function revenueSeries(orders,period,now=new Date()){
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


const orderPayload = row => {
  const {playerId,vehicle,plate,...order}=row.payload;
  return {...order,status:row.status};
};

class BennysCloud {
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


// Módulos del panel de inicio. `span` es el ancho en una cuadrícula de 12 columnas (en pantallas estrechas todos ocupan el ancho completo).
// El orden de esta lista es el orden original; cada persona puede reordenarlos y su orden se guarda en su cuenta.
const HOME_MODULES=Object.freeze([
  {id:'kpis',title:'Métricas',span:12},
  {id:'chart',title:'Evolución de las ventas',span:8},
  {id:'clients',title:'Clientes frecuentes',span:4},
  {id:'recent',title:'Ventas recientes',span:8},
  {id:'activity',title:'Actividad reciente',span:4},
  {id:'mine',title:'Mi rendimiento',span:4},
  {id:'payments',title:'Métodos de pago',span:8},
  {id:'team',title:'Rendimiento del equipo',span:4}
]);
const HOME_META=Object.fromEntries(HOME_MODULES.map(m=>[m.id,m]));
const LAYOUT_VERSION=1;
const homeModuleMeta=id=>HOME_META[id];

/**
 * Orden personal de los módulos del inicio.
 *  - Se guarda por usuario: en los metadatos de su cuenta de Supabase Auth (acompaña a la persona en cualquier equipo; no requiere SQL)
 *    y en este navegador como respaldo. Si ambos existen, gana el más reciente.
 *  - Solo se guarda cuando la persona pulsa «Guardar mi orden». Quien no personaliza ve siempre el orden original.
 *  - El modo de edición admite arrastrar por el asa (ratón y táctil) y también flechas del teclado y botones Mover antes / después.
 */
class HomeLayout{
  constructor({getCloud,toast,rerender}){
    Object.assign(this,{getCloud,toast,rerender});
    this.editing=false;this.dragging=false;this.available=[];this.drag=null;this.snapshot=[];
  }
  get cloud(){return this.getCloud();}
  el(id){return document.getElementById(id);}
  grid(){return this.el('module-grid');}
  storageKey(){const id=this.cloud?.user?.id;return id?'bennys-home-layout:'+id:null;}

  /** Diseño guardado y válido más reciente (local o de la cuenta), o null. */
  stored(){
    const valid=value=>value&&value.v===LAYOUT_VERSION&&Array.isArray(value.order)&&value.order.every(id=>typeof id==='string')?value:null;
    let local=null;
    try{const key=this.storageKey();if(key)local=JSON.parse(localStorage.getItem(key));}catch{}
    const a=valid(local),b=valid(this.cloud?.homeLayout);
    if(a&&b)return Date.parse(a.at)>=Date.parse(b.at)?a:b;
    return a||b;
  }
  /** Ordena los módulos disponibles según el diseño guardado; los que no figuran en él (por ejemplo, módulos nuevos) van al final. */
  order(available){
    const saved=(this.stored()?.order||[]).filter((id,i,all)=>available.includes(id)&&all.indexOf(id)===i);
    return [...saved,...available.filter(id=>!saved.includes(id))];
  }
  currentOrder(grid=this.grid()){return grid?[...grid.children].map(m=>m.dataset.module):[];}

  // ─── Edición ───
  init(){
    this.button=this.el('layout-edit');this.bar=this.el('layout-bar');
    this.button.onclick=()=>this.editing?this.cancel():this.start();
    this.el('layout-save').onclick=()=>this.save();
    this.el('layout-cancel').onclick=()=>this.cancel();
    this.el('layout-reset').onclick=()=>this.reset();
    document.addEventListener('pointerdown',event=>this.onPointerDown(event));
    document.addEventListener('click',event=>{
      const move=event.target.closest?.('.module-up,.module-down');
      if(move&&this.editing&&this.grid()?.contains(move)){event.preventDefault();this.move(move.closest('.module'),move.classList.contains('module-up')?-1:1,move.classList.contains('module-up')?'.module-up':'.module-down');}
    });
    document.addEventListener('keydown',event=>this.onKeyDown(event));
  }
  /** Llamado tras dibujar el inicio: conserva el modo de edición si estaba activo. */
  mount(available){
    this.available=available;
    if(!this.editing)return;
    const grid=this.grid();if(grid)this.decorate(grid);
  }
  start(){
    const grid=this.grid();if(!grid||!this.cloud?.isActive)return;
    this.editing=true;this.snapshot=this.currentOrder(grid);
    this.el('view-dashboard').classList.add('home-editing');this.bar.hidden=false;
    this.button.setAttribute('aria-pressed','true');
    this.decorate(grid);
    this.announce('Modo personalizar activado. Arrastra los módulos por su asa o usa las flechas del teclado sobre el asa.');
    grid.querySelector('.module-grip')?.focus({preventScroll:true});
  }
  stop(){
    this.editing=false;this.dragging=false;this.cleanupDrag();
    this.el('view-dashboard').classList.remove('home-editing');this.bar.hidden=true;
    this.button.setAttribute('aria-pressed','false');
  }
  /** Descarta los cambios no guardados. */
  cancel(){
    if(!this.editing)return;
    this.stop();this.rerender();
  }
  /** Vuelve al orden original (queda sin guardar hasta pulsar «Guardar mi orden»). */
  reset(){
    const grid=this.grid();if(!grid)return;
    const first=this.rects(grid);
    for(const id of this.available){const module=grid.querySelector(`[data-module="${id}"]`);if(module)grid.append(module);}
    this.flip(grid,first);
    this.announce('Orden original restaurado. Pulsa Guardar mi orden para conservarlo.');
  }
  async save(){
    const grid=this.grid();if(!grid)return;
    const order=this.currentOrder(grid),original=this.available.join(),isOriginal=order.join()===original;
    const value=isOriginal?null:{v:LAYOUT_VERSION,order,at:new Date().toISOString()};
    try{const key=this.storageKey();if(key){if(value)localStorage.setItem(key,JSON.stringify(value));else localStorage.removeItem(key);}}catch{}
    let remote=true;
    try{await this.cloud.saveHomeLayout(value);}catch{remote=false;}
    this.stop();this.rerender();
    this.toast(isOriginal?'Orden original restaurado.':remote?'Orden guardado en tu cuenta. Lo verás igual en cualquier equipo.':'Orden guardado en este equipo. No se pudo guardar en tu cuenta; vuelve a intentarlo más tarde.');
  }

  // ─── Asas, botones y teclado ───
  decorate(grid){
    for(const module of grid.children){
      if(module.querySelector(':scope>.module-tools'))continue;
      const title=esc(module.dataset.title||'módulo');
      module.insertAdjacentHTML('afterbegin',`<div class="module-tools" role="group" aria-label="${title}"><button type="button" class="module-grip" aria-label="Mover ${title}: arrastra o usa las flechas del teclado">${icon('grip')}</button><span class="module-title">${title}</span><button type="button" class="module-up" aria-label="Mover ${title} antes">${icon('chevronup')}</button><button type="button" class="module-down" aria-label="Mover ${title} después">${icon('chevrondown')}</button></div>`);
    }
  }
  announce(text){const live=this.el('layout-live');if(live)live.textContent=text;}
  rects(grid){return new Map([...grid.children].map(m=>[m,m.getBoundingClientRect()]));}
  /** Anima el cambio de posición de los módulos (FLIP). Con movimiento reducido no anima. */
  flip(grid,before){
    if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    for(const module of grid.children){
      const from=before.get(module);if(!from)continue;const to=module.getBoundingClientRect(),dx=from.left-to.left,dy=from.top-to.top;
      if(Math.abs(dx)>1||Math.abs(dy)>1)module.animate([{transform:`translate(${dx}px,${dy}px)`},{transform:'none'}],{duration:240,easing:'cubic-bezier(.2,.7,.2,1)'});
    }
  }
  move(module,delta,focusSelector='.module-grip'){
    const grid=module?.parentElement;if(!grid)return false;
    const items=[...grid.children],from=items.indexOf(module),to=Math.max(0,Math.min(items.length-1,from+delta));
    if(from===to){this.announce(`${module.dataset.title}: ya está ${delta<0?'el primero':'el último'}.`);return false;}
    const first=this.rects(grid);
    grid.insertBefore(module,delta<0?items[to]:items[to].nextElementSibling);
    this.flip(grid,first);
    module.querySelector(focusSelector)?.focus({preventScroll:true});
    this.announce(`${module.dataset.title}: posición ${to+1} de ${items.length}.`);
    return true;
  }
  onKeyDown(event){
    const grip=event.target.closest?.('.module-grip');
    if(!grip||!this.editing)return;
    const module=grip.closest('.module'),keys={ArrowUp:-1,ArrowLeft:-1,ArrowDown:1,ArrowRight:1};
    if(event.key in keys){event.preventDefault();this.move(module,keys[event.key]);}
    else if(event.key==='Home'){event.preventDefault();this.move(module,-this.currentOrder().indexOf(module.dataset.module));}
    else if(event.key==='End'){event.preventDefault();this.move(module,this.currentOrder().length);}
  }

  // ─── Arrastrar (ratón y táctil) ───
  onPointerDown(event){
    const grip=event.target.closest?.('.module-grip');
    if(!grip||!this.editing||(event.pointerType==='mouse'&&event.button!==0))return;
    const module=grip.closest('.module');if(!module||!this.grid()?.contains(module))return;
    event.preventDefault();
    const chip=document.createElement('div');chip.className='drag-chip';chip.textContent=module.dataset.title;chip.setAttribute('aria-hidden','true');document.body.append(chip);
    this.drag={module,grip,chip,pointerId:event.pointerId,target:null,before:true,x:event.clientX,y:event.clientY};
    this.dragging=true;module.classList.add('dragging');
    try{grip.setPointerCapture(event.pointerId);}catch{}
    this.moveChip();
    this.dragMove=e=>this.onPointerMove(e);this.dragEnd=e=>this.onPointerUp(e);this.dragCancel=()=>this.cleanupDrag();
    grip.addEventListener('pointermove',this.dragMove);grip.addEventListener('pointerup',this.dragEnd);grip.addEventListener('pointercancel',this.dragCancel);
    this.scrollLoop();
  }
  moveChip(){const {chip,x,y}=this.drag;chip.style.left=x+'px';chip.style.top=y+'px';}
  onPointerMove(event){
    const drag=this.drag;if(!drag)return;
    drag.x=event.clientX;drag.y=event.clientY;this.moveChip();
    const grid=this.grid(),found=document.elementsFromPoint(drag.x,drag.y).map(el=>el.closest?.('.module')).find(m=>m&&m!==drag.module&&grid.contains(m));
    if(!found)return;
    const rect=found.getBoundingClientRect(),horizontal=rect.width<grid.getBoundingClientRect().width*0.7;
    drag.before=horizontal?drag.x<rect.left+rect.width/2:drag.y<rect.top+rect.height/2;
    if(drag.target!==found)drag.target?.classList.remove('drop-before','drop-after');
    drag.target=found;found.dataset.axis=horizontal?'x':'y';
    found.classList.toggle('drop-before',drag.before);found.classList.toggle('drop-after',!drag.before);
  }
  onPointerUp(){
    const drag=this.drag;if(!drag)return;
    const {module,target,before,grip}=drag,grid=this.grid();
    this.cleanupDrag();
    if(target&&grid&&target!==module){
      const first=this.rects(grid);
      grid.insertBefore(module,before?target:target.nextElementSibling);
      this.flip(grid,first);
      this.announce(`${module.dataset.title}: posición ${this.currentOrder().indexOf(module.dataset.module)+1} de ${this.currentOrder().length}.`);
    }
    (module.querySelector('.module-grip')||grip)?.focus({preventScroll:true});
  }
  cleanupDrag(){
    const drag=this.drag;this.dragging=false;
    if(!drag)return;
    drag.chip.remove();drag.module.classList.remove('dragging');
    for(const m of this.grid()?.children||[])m.classList.remove('drop-before','drop-after');
    drag.grip.removeEventListener('pointermove',this.dragMove);drag.grip.removeEventListener('pointerup',this.dragEnd);drag.grip.removeEventListener('pointercancel',this.dragCancel);
    try{drag.grip.releasePointerCapture(drag.pointerId);}catch{}
    this.drag=null;
  }
  /** Desplaza la página cuando se arrastra cerca del borde superior o inferior. */
  scrollLoop(){
    const tick=()=>{
      const drag=this.drag;if(!drag)return;
      const edge=90,y=drag.y;
      if(y<edge)window.scrollBy(0,-Math.ceil((edge-y)/5));else if(y>innerHeight-edge)window.scrollBy(0,Math.ceil((y-(innerHeight-edge))/5));
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}


const stat=(label,value,note,glyph='chart',accent=false)=>`<article class="stat ${accent?'accent':''}"><span class="stat-icon">${icon(glyph)}</span><div class="stat-body"><span class="stat-label">${label}</span><strong>${value}</strong><small>${note}</small></div></article>`;
const person=name=>`<div class="person-cell"><span class="person-initial">${esc(name.slice(0,1).toUpperCase())}</span><strong>${esc(name)}</strong></div>`;
const empty=(text,glyph='clipboard')=>`<div class="empty-state"><span>${icon(glyph)}</span><h2>${text}</h2><p>Los datos aparecerán al registrar actividad en el taller.</p></div>`;
const dateLabel=value=>new Intl.DateTimeFormat('es-MX',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}).format(new Date(value));
const hydrate=root=>root.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=icon(el.dataset.icon);});
const since=value=>{const seconds=Math.round((Date.parse(value)-Date.now())/1000),abs=Math.abs(seconds),rtf=new Intl.RelativeTimeFormat('es',{numeric:'auto'});if(abs<45)return 'justo ahora';if(abs<3600)return rtf.format(Math.round(seconds/60),'minute');if(abs<86400)return rtf.format(Math.round(seconds/3600),'hour');return rtf.format(Math.round(seconds/86400),'day');};
const initials=name=>String(name||'?').trim().split(/\s+/).slice(0,2).map(p=>p[0]||'').join('').toUpperCase()||'?';
const ACTIONS={venta_registrada:'Venta registrada',venta_anulada:'Venta anulada',gasto_registrado:'Gasto registrado',gasto_anulado:'Gasto anulado',empleado_actualizado:'Empleado actualizado',cuenta_solicitada:'Solicitud de acceso',tarifa_actualizada:'Tarifa actualizada'};

class ManagementPanel{
  constructor(options){Object.assign(this,options);}
  get orders(){return this.getState().orders;}
  get cloud(){return this.getCloud();}
  el(id){return document.getElementById(id);}
  period(id){return this.orders.filter(o=>inPeriod(o.date,this.el(id).value));}
  render(view){if(view==='dashboard')this.dashboard();if(view==='summary')this.commissions();if(view==='finance')this.finance();if(view==='audit')this.audit();}
  dashboard(){
    if(this.layout?.dragging)return;
    const orders=this.period('dashboard-period'),m=salesMetrics(orders),admin=this.cloud?.isAdmin,staff=employeeMetrics(orders,this.cloud?.team);
    const periodValue=this.el('dashboard-period').value;
    this.el('dashboard-greeting').textContent=`${admin?'Resumen del taller':'Tus ventas y comisiones'} · ${this.getState().settings.mechanic||'Personal'}`;
    const series=revenueSeries(orders,periodValue),max=Math.max(...series.map(p=>p.total),1),width=680,height=205,left=64,bottom=171,plot=width-left-12,step=plot/series.length;
    const chart=`<svg class="revenue-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Ventas por ${periodValue==='today'?'hora':'día'}"><title>Ventas cobradas. ${series.map(p=>`${p.label}: ${euro(p.total)}`).join(', ')}</title><defs><linearGradient id="bar-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8506f"/><stop offset="1" stop-color="#7b1a3b"/></linearGradient></defs>${[0,.5,1].map(n=>`<line class="chart-grid" x1="${left}" x2="${width}" y1="${bottom-n*140}" y2="${bottom-n*140}"/><text class="chart-label" x="0" y="${bottom-n*140+4}">${euro(max===1?0:Math.round(max*n))}</text>`).join('')}${series.map((p,i)=>`<rect class="chart-bar" x="${left+i*step+step*.2}" y="${bottom-p.total/max*140}" width="${step*.6}" height="${p.total/max*140}" rx="2"><title>${esc(p.label)}: ${euro(p.total)}</title></rect>${i%Math.ceil(series.length/8)===0||i===series.length-1?`<text class="chart-label" text-anchor="middle" x="${left+i*step+step/2}" y="194">${esc(p.label)}</text>`:''}`).join('')}</svg>`;
    const payments=['Efectivo','Transferencia','Tarjeta'].map(name=>({name,total:round(orders.filter(o=>o.status==='active'&&o.payment===name).reduce((n,o)=>n+o.totals.total,0))}));
    const recent=[...orders].sort((a,b)=>Date.parse(b.date)-Date.parse(a.date)).slice(0,6);
    const clients=frequentClients(this.orders).slice(0,4);
    const activity=admin&&this.cloud.proReady?(this.cloud.audit||[]).slice(0,6):[];
    const clientsPanel=`<section class="panel"><div class="panel-head"><div><h2>Clientes frecuentes</h2><p>Visitas cobradas</p></div><button class="text-button" data-open-view="clients">Ver clientes <span data-icon="arrow"></span></button></div><div class="panel-body">${clients.length?`<ol class="client-rank">${clients.map(c=>`<li><button class="client-row" data-client="${esc(c.key)}" aria-label="Nueva venta para ${esc(c.name)}"><span class="person-initial">${esc(initials(c.name))}</span><strong>${esc(c.name)}</strong><small>${c.visits} ${c.visits===1?'visita':'visitas'}</small></button></li>`).join('')}</ol>`:'<p class="muted">Los clientes aparecerán al cobrar servicios.</p>'}</div></section>`;
    const performancePanel=`<section class="panel"><div class="panel-head"><h2>${admin?'Rendimiento del equipo':'Mi rendimiento'}</h2><span>Ventas cobradas</span></div><div class="panel-body">${staff.length?staff.slice(0,5).map(p=>`<div class="summary-row"><div>${person(p.name)}<small class="muted">${p.count} ${p.count===1?'venta':'ventas'}</small></div><strong>${euro(p.total)}</strong></div>`).join(''):'<p class="muted">Registra una venta para comenzar.</p>'}<p class="panel-note">${admin?'Consulta el desglose por empleado en Comisiones.':'Tu administrador gestiona el porcentaje de tu cuenta.'}</p></div></section>`;
    const activityPanel=`<section class="panel"><div class="panel-head"><h2>Actividad reciente</h2><button class="text-button" data-open-view="audit">Ver actividad <span data-icon="arrow"></span></button></div><div class="panel-body">${activity.length?`<ol class="timeline">${activity.map(row=>{const d=row.details||{},amount=d.amount!=null&&Number.isFinite(Number(d.amount))?(row.action.includes('gasto')?'−':'')+euro(Number(d.amount)):'';return `<li><span class="timeline-dot" aria-hidden="true"></span><div><strong>${esc(ACTIONS[row.action]||row.action)}</strong><small>${esc([d.client,d.label].filter(Boolean).join(' · ')||this.actor(row))}</small></div><span class="timeline-meta"><b>${amount}</b><small>${since(row.created_at)}</small></span></li>`;}).join('')}</ol>`:'<p class="muted">Aún no hay actividad registrada.</p>'}</div></section>`;
    const paymentsPanel=`<section class="panel"><div class="panel-head"><h2>Métodos de pago</h2><span>${m.count} ${m.count===1?'venta':'ventas'}</span></div><div class="panel-body">${payments.map(p=>`<div class="payment-row"><div><span>${p.name}</span><strong>${euro(p.total)}</strong></div><div class="bar-track"><div class="bar-fill" style="width:${m.total?p.total/m.total*100:0}%"></div></div></div>`).join('')}<p class="panel-note">Solo ventas cobradas. Las anuladas conservan su historial y se excluyen de los totales.</p></div></section>`;
    const chartPanel=`<section class="panel"><div class="panel-head"><div><h2>Evolución de las ventas</h2><p>${periodValue==='all'?'Gráfico de los últimos 30 días':'Distribución del período seleccionado'}</p></div><span>EUR</span></div><div class="panel-body">${chart}</div></section>`;
    const recentPanel=`<section class="panel"><div class="panel-head"><div><h2>Ventas recientes</h2><p>Últimos movimientos del período</p></div><button class="text-button" data-open-view="orders">Ver todas <span data-icon="arrow"></span></button></div>${recent.length?`<div class="table-flush"><table class="compact-table"><thead><tr><th>Venta / Cliente</th><th>Mecánico</th><th class="num">Importe</th><th>Estado</th></tr></thead><tbody>${recent.map(o=>`<tr><td><button class="text-button" data-detail="${esc(o.id)}">${esc(o.folio)}</button><small>${esc(o.client)}</small></td><td>${esc(o.mechanic)}</td><td class="num">${euro(o.totals.total)}</td><td><span class="status-pill ${o.status==='cancelled'?'cancelled':''}">${o.status==='active'?'Cobrado':'Anulado'}</span></td></tr>`).join('')}</tbody></table></div>`:'<div class="chart-empty">Aún no hay ventas en este período.</div>'}</section>`;
    const kpiStrip=`<div class="kpi-grid">${stat(admin?'Ventas del taller':'Mis ventas',euro(m.total),'Cobros después de descuentos','wallet',true)}${stat('Ventas cobradas',m.count,`Ticket promedio: ${euro(m.average)}`,'clipboard')}${stat('Comisiones generadas',euro(m.commission),'Sobre el margen positivo de cada venta','user')}${stat('Margen del taller',euro(m.net),'Después de piezas y comisiones; antes de gastos','chart')}</div>`;
    // Cada bloque es un módulo que la persona puede mover (ver layout.js). El orden guardado de cada cuenta decide cómo se muestran.
    const mod=(id,html)=>{const meta=homeModuleMeta(id);return html.replace(/^<(\w+) class="([^"]*)"/,(match,tag,cls)=>`<${tag} class="${cls} module" data-module="${id}" data-title="${esc(meta.title)}" style="--span:${meta.span}"`);};
    const modules={kpis:mod('kpis',kpiStrip),chart:mod('chart',chartPanel),clients:mod('clients',clientsPanel),recent:mod('recent',recentPanel),payments:mod('payments',paymentsPanel)};
    if(admin){modules.activity=mod('activity',activityPanel);modules.team=mod('team',performancePanel);}else modules.mine=mod('mine',performancePanel);
    const available=HOME_MODULES.map(m=>m.id).filter(id=>modules[id]);
    // Mientras se personaliza, una sincronización conserva el orden que se está editando.
    const live=this.layout.editing&&this.el('module-grid')?this.layout.currentOrder().filter(id=>available.includes(id)):null;
    const order=live?[...live,...available.filter(id=>!live.includes(id))]:this.layout.order(available);
    this.el('dashboard-content').innerHTML=`<div class="module-grid" id="module-grid">${order.map(id=>modules[id]).join('')}</div>`;
    this.layout.mount(available);
    hydrate(this.el('dashboard-content'));
    // Las cifras que cambian por una sincronización o una venta nueva se resaltan un instante; el resto permanece quieto.
    const values=[...this.el('dashboard-content').querySelectorAll('.stat strong')],texts=values.map(n=>n.textContent),previous=this.lastKpi;
    if(previous&&previous.period===periodValue&&previous.user===this.cloud?.user?.id)values.forEach((n,i)=>{if(previous.texts[i]!==texts[i])n.classList.add('value-changed');});
    this.lastKpi={texts,period:periodValue,user:this.cloud?.user?.id};
  }
  commissions(){
    const orders=this.period('summary-period'),m=salesMetrics(orders),staff=employeeMetrics(orders,this.cloud?.team);
    this.el('export-commissions').disabled=!staff.length;
    this.el('summary-content').innerHTML=`<div class="kpi-grid">${stat('Comisiones generadas',euro(m.commission),'Total del período seleccionado','user',true)}${stat('Ventas cobradas',m.count,'Las anuladas se excluyen','clipboard')}${stat('Ventas netas de descuento',euro(m.total),'Importe cobrado a clientes','wallet')}${stat('Margen del taller',euro(m.net),'Después de piezas y comisiones','chart')}</div><div class="notice">La comisión se calcula en cada venta sobre su margen positivo después del descuento. Este informe muestra lo generado; no registra pagos de nómina.</div>${staff.length?`<div class="table-panel"><table><thead><tr><th>Mecánico</th><th>Ventas</th><th>Importe vendido</th><th>Margen antes de comisión</th><th>Comisión generada</th><th>Margen del taller</th></tr></thead><tbody>${staff.map(p=>`<tr><td>${person(p.name)}</td><td>${p.count}</td><td>${euro(p.total)}</td><td>${euro(p.gross)}</td><td class="margin-price"><strong>${euro(p.commission)}</strong></td><td>${euro(p.net)}</td></tr>`).join('')}</tbody></table></div>`:empty('Sin comisiones en este período.','user')}`;
  }
  exportCommissions(){const rows=[['Mecánico','Ventas cobradas','Ventas EUR','Margen antes de comisión EUR','Comisión generada EUR','Margen del taller EUR'],...employeeMetrics(this.period('summary-period'),this.cloud?.team).map(p=>[p.name,p.count,p.total,p.gross,p.commission,p.net])];this.exportRows('bennys-comisiones.csv',rows);}
  unavailable(){return '<div class="notice">La actualización de gestión no está disponible. El administrador debe ejecutar supabase/upgrade-profesional.sql y sincronizar el taller.</div>';}
  finance(){
    if(!this.cloud?.isAdmin){this.el('finance-content').innerHTML='';return;}
    this.el('new-expense').disabled=!this.cloud.proReady;
    if(!this.cloud.proReady){this.el('finance-content').innerHTML=this.unavailable();return;}
    const period=this.el('finance-period').value,expenses=(this.cloud.expenses||[]).filter(e=>inPeriod(e.created_at,period)),total=round(expenses.filter(e=>e.status==='active').reduce((n,e)=>n+Number(e.amount),0)),m=salesMetrics(this.orders.filter(o=>inPeriod(o.date,period)));
    this.el('finance-content').innerHTML=`<div class="kpi-grid">${stat('Ventas cobradas',euro(m.total),'Ingresos del período','wallet')}${stat('Piezas y comisiones',euro(round(m.cost+m.commission)),'Costos asociados a las ventas','wrench')}${stat('Gastos operativos',euro(total),'Gastos activos del período','clipboard')}${stat('Resultado del taller',euro(round(m.net-total)),'Ventas − piezas − comisiones − gastos','chart',true)}</div><section class="summary-panel" style="margin-bottom:22px"><h2>Desglose del resultado</h2><div class="summary-row"><span>Costo de piezas</span><strong>${euro(m.cost)}</strong></div><div class="summary-row"><span>Comisiones generadas</span><strong>${euro(m.commission)}</strong></div><p class="panel-note">Resultado estimado según las ventas y gastos registrados. No representa el saldo bancario del juego.</p></section>${expenses.length?`<div class="table-panel"><table><thead><tr><th>Fecha</th><th>Descripción</th><th>Categoría</th><th>Registrado por</th><th>Importe</th><th>Estado</th><th></th></tr></thead><tbody>${expenses.map(e=>`<tr><td>${dateLabel(e.created_at)}</td><td><strong>${esc(e.description)}</strong></td><td>${esc(e.category)}</td><td>${esc(this.cloud.team.find(p=>p.id===e.created_by)?.display_name||'Administración')}</td><td>${euro(Number(e.amount))}</td><td><span class="status-pill ${e.status==='cancelled'?'cancelled':''}">${e.status==='active'?'Activo':'Anulado'}</span></td><td>${e.status==='active'?`<button class="row-button" data-cancel-expense="${esc(e.id)}">Anular</button>`:''}</td></tr>`).join('')}</tbody></table></div>`:empty('Sin gastos en este período.','wallet')}`;
  }
  newExpense(){
    if(!this.cloud?.isAdmin||!this.cloud.proReady)return;
    this.modal('Registrar gasto',`<form id="expense-form"><label>Descripción<input name="description" maxlength="240" required placeholder="Ej. reposición de herramientas"></label><div class="form-grid"><label>Categoría<select name="category"><option>Suministros</option><option>Herramientas</option><option>Alquiler</option><option>Otros</option></select></label><label>Importe (€)<input name="amount" type="number" min="0.01" max="100000000" step="0.01" required></label></div><p class="modal-hint">Se registra a la fecha actual. Puedes anularlo conservando el historial.</p><div id="expense-message" class="form-message" role="alert"></div></form>`,`<button class="button secondary" data-close>Cancelar</button><button class="button primary" type="submit" form="expense-form">Guardar gasto</button>`);
    const id=crypto.randomUUID();this.el('expense-form').onsubmit=async event=>{event.preventDefault();const form=event.currentTarget,button=document.querySelector('[form="expense-form"]');if(button.disabled)return;button.disabled=true;const values=new FormData(form);try{await this.cloud.createExpense({id,description:String(values.get('description')).trim(),category:String(values.get('category')),amount:Number(values.get('amount'))});await this.cloud.load();if(form.isConnected)this.el('modal').close();this.toast('Gasto registrado.');}catch(error){if(form.isConnected){this.el('expense-message').textContent=this.errorText(error);button.disabled=false;}}};
  }
  cancelExpense(id){if(!this.cloud?.isAdmin)return;const expense=this.cloud.expenses.find(e=>e.id===id);if(!expense)return;this.confirmAction('Anular gasto',`El gasto <strong>${esc(expense.description)}</strong> dejará de sumar en el resultado y se conservará en el historial.`,async()=>{await this.cloud.cancelExpense(id);await this.cloud.load();this.toast('Gasto anulado.');},'Anular gasto');}
  audit(){
    if(!this.cloud?.isAdmin){this.el('audit-content').innerHTML='';return;}
    if(!this.cloud.proReady){this.el('audit-content').innerHTML=this.unavailable();return;}
    const query=this.el('audit-search').value.trim().toLocaleLowerCase('es'),rows=(this.cloud.audit||[]).filter(row=>inPeriod(row.created_at,this.el('audit-period').value)&&[ACTIONS[row.action]||row.action,this.actor(row),JSON.stringify(row.details)].join(' ').toLocaleLowerCase('es').includes(query));
    this.el('audit-content').innerHTML=rows.length?`<div class="panel"><div class="panel-head"><h2>Registro de actividad</h2><span>${rows.length} movimientos${rows.length>100?' · últimos 100 visibles':''}</span></div><div class="activity-list">${rows.slice(0,100).map(row=>`<article class="activity-row"><span class="activity-icon">${icon(row.action.includes('anulad')?'close':row.action.includes('gasto')?'wallet':'clipboard')}</span><div class="activity-main"><strong>${esc(ACTIONS[row.action]||row.action)}</strong><p>${esc(this.actor(row))} · ${esc(this.auditDetail(row))}</p><small>${dateLabel(row.created_at)}</small></div></article>`).join('')}</div></div>`:empty('Sin actividad para este filtro.','clock');
  }
  actor(row){return this.cloud.team.find(p=>p.id===row.actor_id)?.display_name||'Sistema';}
  auditDetail(row){const d=row.details||{};return [d.label,d.client,Number.isFinite(Number(d.amount))&&d.amount!=null?euro(Number(d.amount)):null,d.reason?`Motivo: ${d.reason}`:null,d.oldPrice!=null?`Precio: ${euro(Number(d.oldPrice))} → ${euro(Number(d.price))} · Costo: ${euro(Number(d.oldCost))} → ${euro(Number(d.cost))}`:null,d.role?`Rol: ${d.role==='admin'?'Administrador':'Mecánico'} · ${d.active?'Activo':'Inactivo'} · Comisión: ${Number(d.commission)}%`:null].filter(Boolean).join(' · ')||'Cambio registrado';}
}

// El ambiente (niebla, brasas, murciélagos y el emblema 3D) se puede pausar sin afectar la sincronización ni las ventas.
// La preferencia se guarda en este navegador; prefers-reduced-motion también lo detiene.
function initAtmosphere(){
  const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
  const buttons=[...document.querySelectorAll('[data-ambient-toggle]')];
  let paused=false;
  try{paused=localStorage.getItem('bennys-ambient-paused')==='true';}catch{}
  const render=()=>{
    const stopped=paused||preference.matches;
    document.body.classList.toggle('effects-paused',stopped);
    for(const button of buttons){
      button.setAttribute('aria-pressed',String(!stopped));
      button.setAttribute('aria-label',preference.matches?'Movimiento reducido del dispositivo':stopped?'Activar efectos de ambiente':'Pausar efectos de ambiente');
      button.title=button.getAttribute('aria-label');
      button.disabled=preference.matches;
      const text=button.querySelector('[data-ambient-label]');
      if(text)text.textContent=preference.matches?'Movimiento reducido':stopped?'Activar ambiente':'Pausar ambiente';
    }
    // Avisa al emblema 3D (carga diferida) y a cualquier otro efecto.
    document.dispatchEvent(new CustomEvent('bennys:ambient',{detail:{paused:stopped}}));
  };
  for(const button of buttons)button.addEventListener('click',()=>{
    paused=!paused;
    try{localStorage.setItem('bennys-ambient-paused',String(paused));}catch{}
    render();
  });
  preference.addEventListener('change',render);
  render();
}

// Emblema 3D del acceso. Es siempre opcional: la imagen estática (renderizada desde el mismo modelo) es la
// versión base, y el acceso y el registro de ventas funcionan igual si WebGL no existe, el ambiente está
// pausado, la carga falla o el equipo es lento. Parámetros de depuración: ?logo=static (solo imagen) y
// ?logo=3d (permite render por software, útil en pruebas).
const MODULE_URL='./assets/logo3d/logo3d.js';
const MODE=new URLSearchParams(location.search).get('logo');
let controller=null,loading=null,wanted=false,calm=false;
const host=()=>document.getElementById('logo-stage');
const effectsOn=()=>!document.body.classList.contains('effects-paused');

function webglAvailable(){
  try{
    const canvas=document.createElement('canvas'),options={failIfMajorPerformanceCaveat:MODE!=='3d'};
    const gl=canvas.getContext('webgl2',options)||canvas.getContext('webgl',options);
    gl?.getExtension('WEBGL_lose_context')?.loseContext();
    return Boolean(gl);
  }catch{return false;}
}

function release(){
  if(!controller)return;
  controller.dispose();controller=null;
  host()?.classList.remove('is-live');
}

async function mount(){
  if(controller||loading||MODE==='static'||!effectsOn()||!webglAvailable())return;
  const stage=host();if(!stage)return;
  loading=(async()=>{
    try{
      const module=await import(MODULE_URL);
      // Mientras se descargaba, el usuario pudo entrar, pausar el ambiente o cambiar de vista.
      if(!wanted||!effectsOn()||!host())return;
      const next=await module.mountLogo(stage,{
        allowSoftware:MODE==='3d',
        shouldAnimate:effectsOn,
        onFallback:()=>release()
      });
      if(!next)return;
      if(!wanted){next.dispose();return;}
      controller=next;controller.setCalm(calm);
      // Dos cuadros bastan para que el lienzo ya tenga el emblema pintado antes del fundido.
      requestAnimationFrame(()=>requestAnimationFrame(()=>stage.classList.add('is-live')));
    }catch{/* se conserva la imagen estática */}
    finally{loading=null;}
  })();
}

function sync(){
  if(wanted)mount();else release();
}

function initBrand(){
  document.addEventListener('bennys:ambient',sync);
}
/** El acceso es visible: monta el emblema 3D. Al entrar al panel se libera el contexto WebGL. */
function setAccessVisible(visible){
  wanted=Boolean(visible);sync();
}
/** Mientras se escribe en el formulario, el balanceo del emblema casi se detiene. */
function setAccessCalm(value){
  calm=Boolean(value);controller?.setCalm(calm);
}


const $=id=>document.getElementById(id);
initAtmosphere();initBrand();
const GUEST_KEY='bennys-motors-v1';
const defaultState=()=>({version:1,catalog:CATALOG.map(i=>({...i})),orders:[],next:1,settings:{mechanic:'',commission:0},draft:{items:[],client:'',discount:0,commission:0}});
const percent=n=>Number.isFinite(n)&&n>=0&&n<=100;
const amount=n=>Number.isFinite(n)&&n>=0&&n<=100000000;
const validItem=i=>i&&CATALOG.some(s=>s.id===i.id)&&typeof i.name==='string'&&amount(i.price)&&amount(i.cost)&&Number.isInteger(i.qty)&&i.qty>=1&&i.qty<=999;
const validDraft=d=>d&&Array.isArray(d.items)&&d.items.every(validItem)&&typeof d.client==='string'&&percent(d.discount)&&percent(d.commission);
function validState(s){return s?.version===1&&Array.isArray(s.catalog)&&s.catalog.length===18&&CATALOG.every(original=>s.catalog.some(i=>i.id===original.id&&amount(i.price)&&amount(i.cost)))&&Array.isArray(s.orders)&&Number.isSafeInteger(s.next)&&s.next>0&&typeof s.settings?.mechanic==='string'&&percent(s.settings.commission)&&validDraft(s.draft)&&s.orders.every(o=>validDraft(o)&&typeof o.id==='string'&&typeof o.folio==='string'&&Number.isFinite(Date.parse(o.date))&&['subtotal','cost','discount','total','gross','commission','net','units'].every(k=>Number.isFinite(o.totals?.[k]))&&['active','cancelled'].includes(o.status));}
function sanitizeState(s){const clean={...s,catalog:s.catalog.map(i=>({...CATALOG.find(o=>o.id===i.id),price:i.price,cost:i.cost})),draft:{...s.draft},orders:s.orders.map(o=>({...o}))};for(const row of [clean.draft,...clean.orders]){delete row.vehicle;delete row.plate;delete row.playerId;}return clean;}
function readState(key){try{const parsed=JSON.parse(localStorage.getItem(key));return validState(parsed)?sanitizeState(parsed):defaultState();}catch{return defaultState();}}
let state=readState(GUEST_KEY),activeKey=GUEST_KEY,cloud=null,category='all',currentView='dashboard',toastTimer,accountUser=null,management=null,gatePhase='',connectionFailed=false,pendingPresentedUser=null;
function toast(message){$('toast').textContent=message;$('toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),4500);}
function errorText(error){
  const message=error?.message||String(error);
  if(/Invalid login credentials/i.test(message))return 'El usuario o la contraseña no son correctos.';
  if(/Email not confirmed/i.test(message))return 'Confirma el correo de tu cuenta antes de entrar.';
  if(/rate limit|too many requests/i.test(message))return 'Hay demasiados intentos. Espera un momento y vuelve a probar.';
  if(/PGRST202|PGRST205|schema cache|Could not find the function/i.test(message)||['PGRST202','PGRST205'].includes(error?.code))return 'El taller aún no está configurado en Supabase. Contacta al administrador.';
  if(/fetch|network|Failed to/i.test(message))return 'No se pudo conectar. Conservamos tu cotización para volver a intentar.';
  return message;
}
function persist(){try{localStorage.setItem(activeKey,JSON.stringify(state));return true;}catch{toast('No se pudo guardar el borrador local. Exporta un respaldo antes de cerrar.');return false;}}
function hydrateIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));}
function folio(){return cloud?.isActive?'POR ASIGNAR':'COTIZACIÓN';}
function snapshot(){return {...state.draft,items:state.draft.items.map(i=>({...i})),mechanic:state.settings.mechanic,totals:calculate(state.draft.items,state.draft.discount,state.draft.commission)};}
function renderServices(){
  const query=$('service-search').value.trim().toLocaleLowerCase('es');
  const list=state.catalog.filter(i=>(category==='all'||i.category===category)&&[i.name,i.shop,i.detail].join(' ').toLocaleLowerCase('es').includes(query));
  $('service-count').textContent=list.length;
  $('services-grid').innerHTML=list.length?list.map(i=>{
    const selected=state.draft.items.find(x=>x.id===i.id);
    return `<article class="service-card ${selected?'selected':''}"><div class="service-card-top"><span class="service-icon">${icon(i.icon)}</span><span class="service-category">${esc(CATEGORIES.find(c=>c.id===i.category).label)}</span></div>${selected?`<span class="selected-badge" aria-label="${selected.qty} seleccionados">${selected.qty}</span>`:''}<h3>${esc(i.name)}</h3><p class="service-description">${esc(i.detail)}</p><div class="service-card-bottom"><div class="service-price">${euro(i.price)}<small>Fábrica: ${euro(i.cost)}</small></div><button class="add-service" data-add="${i.id}" aria-label="Agregar ${esc(i.name)}">${icon('plus')}</button></div></article>`;
  }).join(''):'<div class="empty-search">No encontramos ese servicio. Prueba con otro nombre.</div>';
}
function renderOrder(){
  const t=calculate(state.draft.items,state.draft.discount,state.draft.commission);
  $('draft-folio').textContent=folio();$('order-units').textContent=t.units+' '+(t.units===1?'servicio':'servicios');
  $('order-items').innerHTML=state.draft.items.length?state.draft.items.map(i=>`<div class="order-line"><div class="line-top"><h3>${esc(i.name)}</h3><strong>${euro(i.price*i.qty)}</strong><button class="remove-line" data-remove="${i.id}" aria-label="Quitar ${esc(i.name)}">${icon('close')}</button></div><div class="line-bottom"><span>${euro(i.price)} / unidad</span><div class="qty-control"><button data-qty="${i.id}" data-delta="-1" aria-label="Reducir ${esc(i.name)}">−</button><input type="number" min="1" max="${i.exclusive?1:999}" value="${i.qty}" data-quantity="${i.id}" aria-label="Cantidad de ${esc(i.name)}" ${i.exclusive?'readonly':''}><button data-qty="${i.id}" data-delta="1" aria-label="Aumentar ${esc(i.name)}" ${i.exclusive?'disabled':''}>+</button></div></div></div>`).join(''):`<div class="empty-ticket"><span data-icon="clipboard"></span><strong>Aún no hay servicios.</strong><p>Selecciona los servicios para registrar una venta.</p></div>`;
  hydrateIcons($('order-items'));
  for(const [id,value] of Object.entries({subtotal:t.subtotal,total:t.total,cost:t.cost,'commission-amount':t.commission,profit:t.net,'mobile-total-value':t.total})){const el=$(id),next=euro(value),changed=el.textContent!==next;el.textContent=next;if(changed&&cloud?.isActive&&!matchMedia('(prefers-reduced-motion:reduce)').matches)el.animate([{opacity:.4,transform:'translateY(3px)'},{opacity:1,transform:'none'}],{duration:220,easing:'ease-out'});}
  $('discount-row').hidden=!t.discount;$('discount-amount').textContent='−'+euro(t.discount);$('profit').parentElement.classList.toggle('negative',t.net<0);
  $('checkout').disabled=!state.draft.items.length;$('copy-ticket').disabled=!state.draft.items.length;
  $('commission').readOnly=Boolean(cloud?.user&&!cloud.isAdmin);
  $('commission').title=cloud?.user&&!cloud.isAdmin?'Comisión asignada por el administrador':'';
}
function renderDraftFields(){for(const [id,key] of Object.entries({'client':'client','discount':'discount','commission':'commission'}))$(id).value=state.draft[key]||(['discount','commission'].includes(key)?0:'');}
function refresh(){renderServices();renderOrder();renderClientPicker();if(currentView==='clients')renderClients();$('mechanic-label').textContent=state.settings.mechanic||'Mi taller';$('orders-count').textContent=state.orders.filter(o=>o.status==='active').length;renderCloudStatus();management?.render(currentView);}
function renderClientPicker(){
  const clients=frequentClients(state.orders),query=clientKey(state.draft.client);
  $('client-names').innerHTML=clients.map(c=>`<option value="${esc(c.name)}">${c.visits} ${c.visits===1?'visita':'visitas'}</option>`).join('');
  const matches=clients.filter(c=>!query||c.key.includes(query)).slice(0,5);
  $('frequent-client-picker').innerHTML=matches.length?matches.map(c=>`<button type="button" class="client-chip" data-client="${esc(c.key)}" aria-label="Seleccionar a ${esc(c.name)}"><span>${esc(c.name)}</span><small>${c.visits} ${c.visits===1?'visita':'visitas'}</small></button>`).join(''):`<p class="clients-hint">${clients.length?'No hay coincidencias. Puedes registrar un nombre nuevo.':'Los clientes aparecerán aquí al registrar servicios.'}</p>`;
}
function renderClients(){
  const all=frequentClients(state.orders),query=clientKey($('client-search').value),clients=all.filter(c=>c.key.includes(query));
  $('clients-description').textContent=cloud?.isAdmin?'Clientes del taller, ordenados por visitas.':'Tus clientes, ordenados por visitas.';
  $('clients-total').textContent=all.length+' '+(all.length===1?'cliente':'clientes');
  $('clients-list').innerHTML=clients.length?`<div class="table-panel"><table><thead><tr><th>Cliente</th><th>Visitas</th><th>Última visita</th><th>Total en servicios</th><th></th></tr></thead><tbody>${clients.map(c=>`<tr><td><strong>${esc(c.name)}</strong></td><td data-label="Visitas">${c.visits}</td><td data-label="Última visita">${shortDate(c.lastVisit)}</td><td data-label="Total en servicios">${euro(c.total)}</td><td><button class="row-button" data-client-history="${esc(c.key)}">Historial</button> <button class="row-button" data-client="${esc(c.key)}">Nueva venta ↗</button></td></tr>`).join('')}</tbody></table></div>`:`<div class="empty-state"><span>${icon('user')}</span><h2>${all.length?'No encontramos ese cliente.':'Cada visita cuenta.'}</h2><p>${all.length?'Prueba con otro nombre.':'La lista se crea automáticamente con tus servicios cobrados. Las órdenes anuladas no cuentan.'}</p><button class="button primary" data-go-calculator>Preparar una orden ↗</button></div>`;
}
function openClientHistory(key){const client=frequentClients(state.orders).find(c=>c.key===key);if(!client)return;const orders=state.orders.filter(o=>clientKey(o.client)===key).sort((a,b)=>Date.parse(b.date)-Date.parse(a.date));modal(esc(client.name),`<div class="summary-row"><span>Visitas cobradas</span><strong>${client.visits}</strong></div><div class="summary-row"><span>Total en servicios</span><strong>${euro(client.total)}</strong></div><div class="table-panel" style="margin-top:18px"><table><thead><tr><th>Venta / Fecha</th><th>Servicios</th><th>Total</th><th>Estado</th></tr></thead><tbody>${orders.map(o=>`<tr><td>${esc(o.folio)}<small>${shortDate(o.date)}</small></td><td>${esc(o.items.map(i=>`${i.qty} × ${i.name}`).join(', '))}</td><td>${euro(o.totals.total)}</td><td>${o.status==='active'?'Cobrado':'Anulado'}</td></tr>`).join('')}</tbody></table></div>`,`<button class="button secondary" data-close>Cerrar</button>`);}
function selectClient(key){
  const client=frequentClients(state.orders).find(c=>c.key===key);if(!client)return;
  state.draft.client=client.name;persist();renderDraftFields();renderClientPicker();
  if(currentView!=='calculator')setView('calculator');$('client').focus({preventScroll:true});
}
function add(id){const service=state.catalog.find(i=>i.id===id);if(!service)return;const old=state.draft.items.find(i=>i.id===id),result=addToOrder(state.draft.items,service);state.draft.items=result.items;persist();refresh();if(result.replaced.length)toast(`${service.name} reemplazó ${result.replaced.map(i=>i.name).join(', ')}.`);else if(service.exclusive&&old)toast('Esta configuración ya está en la orden.');}
function setView(view){
  if(view!=='dashboard')homeLayout.cancel();
  if(['team','finance','audit'].includes(view)&&!cloud?.isAdmin)view='dashboard';
  currentView=view;document.querySelectorAll('.view').forEach(el=>el.classList.toggle('active',el.id==='view-'+view));document.querySelectorAll('[data-view]').forEach(el=>{const on=el.dataset.view===view;el.classList.toggle('active',on);if(on)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');});enterView(view);
  $('breadcrumb-current').textContent=({dashboard:'Inicio',calculator:'Nueva venta',orders:cloud?.isAdmin?'Ventas del taller':'Mis ventas',catalog:'Tarifario',clients:'Clientes frecuentes',summary:'Comisiones',finance:'Gastos y resultado',team:'Equipo',audit:'Actividad'})[view];$('mobile-total').classList.toggle('no-mobile-total',view!=='calculator');
  if(view==='clients')renderClients();if(view==='orders')renderOrders();if(view==='catalog')renderPrices();if(view==='team')renderTeam();management?.render(view);history.replaceState(null,'','#'+view);closeMenu();window.scrollTo({top:0,behavior:'instant'});
}
// Entrada breve: solo mientras se abre la vista. Las actualizaciones posteriores de datos no vuelven a animar el contenido.
let enterTimer;
function enterView(view){const section=document.getElementById('view-'+view);if(!section)return;section.classList.remove('view-entering');void section.offsetWidth;section.classList.add('view-entering');clearTimeout(enterTimer);enterTimer=setTimeout(()=>section.classList.remove('view-entering'),900);}
function closeMenu(){document.body.classList.remove('menu-open');$('menu-toggle').setAttribute('aria-expanded','false');}
function modal(title,body,footer=''){if($('modal').open)$('modal').close();$('modal-content').innerHTML=`<div class="modal-head"><h2>${title}</h2><button class="icon-button" data-close aria-label="Cerrar">${icon('close')}</button></div><div class="modal-body">${body}</div>${footer?`<div class="modal-footer">${footer}</div>`:''}`;$('modal').showModal();}
function confirmAction(title,description,action,label='Continuar'){
  modal(title,`<p>${description}</p>`,`<button class="button secondary" data-close>Cancelar</button><button class="button primary" id="confirm-action">${label}</button>`);
  $('confirm-action').onclick=async e=>{const button=e.currentTarget;button.disabled=true;try{await action();if($('modal').open)$('modal').close();}catch(error){toast(errorText(error));button.disabled=false;}};
}
function clearDraft(){state.draft={items:[],client:'',discount:0,commission:Number(state.settings.commission)||0};persist();renderDraftFields();refresh();}
async function copyText(text){try{await navigator.clipboard.writeText(text);toast('Ticket copiado. Listo para pegar en FiveM.');}catch{modal('Tu ticket de servicio',`<p>Copia el texto para pegarlo en el chat.</p><textarea class="receipt-text" id="manual-copy" style="width:100%;height:310px" readonly>${esc(text)}</textarea>`,`<button class="button secondary" data-close>Cerrar</button>`);$('manual-copy').select();}}
function openCheckout(){
  if(!state.draft.items.length)return;
  if(!cloud?.isActive){openAccount();return;}
  const t=snapshot().totals;
  modal('Confirmar venta',`<div class="checkout-summary"><span>${t.units} servicios · Total a cobrar</span><strong>${euro(t.total)}</strong></div>${t.net<0?'<div class="notice">El descuento deja esta orden con pérdida. Revisa el importe antes de registrar.</div>':''}<form id="checkout-form"><label>Cliente *<input name="client" maxlength="80" value="${esc(state.draft.client)}" required list="client-names" autocomplete="off" placeholder="Nombre del cliente"></label><label>Método de pago<select name="payment"><option>Efectivo</option><option>Transferencia</option><option>Tarjeta</option></select></label><label>Notas del trabajo<textarea name="notes" maxlength="500" rows="2" placeholder="Piezas instaladas, observaciones…"></textarea></label><p class="modal-hint">El servicio quedará guardado en el taller. Verifica el pago dentro del juego antes de confirmar.</p><div class="form-message" id="checkout-message" role="alert"></div></form>`,`<button class="button secondary" data-close>Volver</button><button class="button primary" type="submit" form="checkout-form">${icon('check')}Confirmar y registrar</button>`);
  const requestId=crypto.randomUUID();
  $('checkout-form').onsubmit=async e=>{
    e.preventDefault();const form=e.currentTarget;if(form.dataset.saving)return;const data=new FormData(form),client=String(data.get('client')).trim();if(!client){toast('Indica el nombre del cliente.');return;}
    form.dataset.saving='true';const button=document.querySelector('[form="checkout-form"]');button.disabled=true;$('checkout-message').textContent='Guardando servicio…';
    try{
      const order=await cloud.createOrder({...snapshot(),id:requestId,client,payment:String(data.get('payment')),notes:String(data.get('notes')).trim()});
      state.orders=state.orders.filter(o=>o.id!==order.id);state.orders.unshift(order);clearDraft();$('modal').close();toast(`Servicio ${order.folio} registrado. ${euro(order.totals.total)}.`);openDetail(order.id);cloud.load();
    }catch(error){
      if(/TARIFA_CAMBIADA/.test(error?.message||'')){await cloud.load();state.draft.items=state.draft.items.map(i=>({...state.catalog.find(s=>s.id===i.id),qty:i.qty}));persist();renderOrder();$('modal').close();toast('Las tarifas cambiaron. Revisa el total actualizado antes de cobrar.');}
      else if(form.isConnected){$('checkout-message').textContent=errorText(error);delete form.dataset.saving;button.disabled=false;}
    }
  };
}
function periodMatches(order,period){return inPeriod(order.date,period);}
function filteredOrders(){const query=clientKey($('order-search').value),status=$('order-status-filter').value,payment=$('order-payment').value,employee=$('order-employee').value;return state.orders.filter(o=>periodMatches(o,$('order-period').value)&&clientKey([o.folio,o.client,o.mechanic].join(' ')).includes(query)&&(status==='all'||o.status===status)&&(payment==='all'||o.payment===payment)&&(!cloud?.isAdmin||employee==='all'||o.employeeId===employee));}
function shortDate(date){return new Intl.DateTimeFormat('es-MX',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}).format(new Date(date));}
function updateFilterCount(){const active=['order-period','order-status-filter','order-payment','order-employee'].filter(id=>$(id).value!=='all'&&!$(id).closest('label')?.hidden).length;$('filters-count').textContent=active;$('filters-count').hidden=!active;}
function renderOrders(){updateFilterCount();
  const previous=$('order-employee').value;$('order-employee-label').hidden=!cloud?.isAdmin;$('order-employee').innerHTML='<option value="all">Todo el equipo</option>'+(cloud?.team||[]).map(p=>`<option value="${esc(p.id)}">${esc(p.display_name)}</option>`).join('');if([...$('order-employee').options].some(o=>o.value===previous))$('order-employee').value=previous;const orders=filteredOrders(),m=salesMetrics(orders);$('export-orders').disabled=!orders.length;$('orders-description').textContent=cloud?.isAdmin?'Consulta y exporta las ventas de todo el equipo.':'Consulta y exporta tus ventas registradas.';$('orders-totals').innerHTML=`<span>Resultados <strong>${orders.length}</strong></span><span>Ventas cobradas <strong>${m.count}</strong></span><span>Importe cobrado <strong>${euro(m.total)}</strong></span><span>Comisiones <strong>${euro(m.commission)}</strong></span>`;
  $('orders-list').innerHTML=orders.length?`<div class="table-panel"><table><thead><tr><th>Folio / Fecha</th><th>Cliente</th><th>Mecánico</th><th>Pago</th><th>Total</th><th>Ganancia</th><th>Estado</th><th></th></tr></thead><tbody>${orders.map(o=>`<tr><td><strong>${esc(o.folio)}</strong><small>${shortDate(o.date)}</small></td><td>${esc(o.client)}</td><td>${esc(o.mechanic||'Sin indicar')}</td><td>${esc(o.payment||'—')}</td><td>${euro(o.totals.total)}</td><td class="margin-price">${euro(o.totals.net)}</td><td><span class="status-pill ${o.status==='cancelled'?'cancelled':''}">${o.status==='active'?'Cobrado':'Anulado'}</span></td><td><button class="row-button" data-detail="${esc(o.id)}">Ver venta ↗</button></td></tr>`).join('')}</tbody></table></div>`:`<div class="empty-state"><span>${icon('clipboard')}</span><h2>${state.orders.length?'Sin resultados para este filtro.':'Aún no hay ventas registradas.'}</h2><p>${state.orders.length?'Prueba otro nombre o período.':cloud?.isActive?'Registra tu primer servicio desde la calculadora.':'Accede con tu cuenta para consultar tus órdenes del taller.'}</p><button class="button primary" ${cloud?.isActive?'data-go-calculator':'data-open-account'}>${cloud?.isActive?'Abrir calculadora':'Acceder al taller'} ↗</button></div>`;
}
function openDetail(id){
  const order=state.orders.find(o=>o.id===id);if(!order)return;
  modal(`Orden ${esc(order.folio)}`,`<div class="detail-data"><span>${shortDate(order.date)} · ${esc(order.mechanic||'Sin mecánico asignado')}</span><strong>${order.status==='active'?'COBRADO':'ANULADO'}</strong></div><pre class="receipt-text">${esc(receipt(order))}</pre>${order.cancellationReason?`<div class="notice">Motivo de anulación: ${esc(order.cancellationReason)}</div>`:''}<div class="summary-row"><span>Costo de fábrica</span><strong>${euro(order.totals.cost)}</strong></div><div class="summary-row"><span>Comisión (${order.commission}%)</span><strong>${euro(order.totals.commission)}</strong></div><div class="summary-row"><span>Ganancia del taller</span><strong>${euro(order.totals.net)}</strong></div>`,`<button class="button secondary" id="detail-copy">${icon('copy')}Copiar ticket</button>${order.status==='active'&&cloud?.isActive?'<button class="button danger" id="cancel-order">Anular orden</button>':''}`);
  $('detail-copy').onclick=()=>copyText(receipt(order));
  if($('cancel-order'))$('cancel-order').onclick=()=>{
    modal('Anular venta',`<p>La venta <strong>${esc(order.folio)}</strong> se conservará y dejará de sumar en los informes.</p><form id="void-form"><label>Motivo de anulación<textarea name="reason" minlength="3" maxlength="240" required placeholder="Explica por qué se anula esta venta"></textarea></label><div id="void-message" class="form-message" role="alert"></div></form>`,`<button class="button secondary" data-close>Volver</button><button class="button danger" form="void-form" type="submit">Anular venta</button>`);
    $('void-form').onsubmit=async e=>{e.preventDefault();const form=e.currentTarget,button=document.querySelector('[form="void-form"]'),reason=String(new FormData(form).get('reason')).trim();if(reason.length<3){$('void-message').textContent='Indica un motivo de al menos 3 caracteres.';return;}button.disabled=true;try{const saved=await cloud.cancelOrder(id,reason);state.orders=state.orders.map(o=>o.id===id?saved:o);persist();refresh();if(currentView==='orders')renderOrders();$('modal').close();toast('Venta anulada.');cloud.load();}catch(error){if(form.isConnected){$('void-message').textContent=errorText(error);button.disabled=false;}}};
  };
}
function renderPrices(){
  const writable=Boolean(cloud?.isAdmin);$('restore-prices').disabled=!writable;
  $('price-table').innerHTML=`<table><thead><tr><th>Servicio en tablet / Tienda</th><th>Costo fábrica (€)</th><th>Precio venta (€)</th><th>Ganancia base</th></tr></thead><tbody>${CATEGORIES.filter(c=>c.id!=='all').map(c=>`<tr class="table-category"><td colspan="4">${esc(c.label)}</td></tr>${state.catalog.filter(i=>i.category===c.id).map(i=>`<tr><td><strong>${esc(i.name)}</strong><small>${esc(i.shop)}</small></td><td><label class="sr-only" for="cost-${i.id}">Costo de ${esc(i.name)}</label><input class="price-input" id="cost-${i.id}" type="number" min="0" max="100000000" step="0.01" value="${i.cost}" data-price="${i.id}" data-field="cost" ${writable?'':'readonly'}></td><td><label class="sr-only" for="price-${i.id}">Precio de ${esc(i.name)}</label><input class="price-input" id="price-${i.id}" type="number" min="0" max="100000000" step="0.01" value="${i.price}" data-price="${i.id}" data-field="price" ${writable?'':'readonly'}></td><td class="margin-price" id="margin-${i.id}">${euro(i.price-i.cost)}</td></tr>`).join('')}`).join('')}</tbody></table>`;
}
function renderSummary(){management?.commissions();}
function download(name,body,type){const blob=new Blob([body],{type}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=name;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function csvCell(value){const text=String(value??'');return '"'+(/^[\s]*[=+@-]/.test(text)?"'"+text:text).replace(/"/g,'""')+'"';}
function exportCsv(){const rows=[['Folio','Fecha UTC','Cliente','Mecánico','Pago','Subtotal EUR','Descuento EUR','Total EUR','Costo EUR','Comisión EUR','Ganancia EUR','Estado','Motivo de anulación'],...filteredOrders().map(o=>[o.folio,o.date,o.client,o.mechanic,o.payment,o.totals.subtotal,o.totals.discount,o.totals.total,o.totals.cost,o.totals.commission,o.totals.net,o.status==='active'?'Cobrado':'Anulado',o.cancellationReason||''])];download('bennys-ordenes.csv','\uFEFF'+rows.map(row=>row.map(csvCell).join(';')).join('\r\n'),'text/csv;charset=utf-8');toast('Historial exportado con los filtros actuales.');}
function openSettings(){
  const locked=Boolean(cloud?.user&&!cloud.isAdmin);
  modal('Configuración de la cuenta',`<form id="settings-form"><label>Nombre del mecánico<input name="mechanic" maxlength="80" value="${esc(state.settings.mechanic)}" placeholder="Tu nombre dentro del taller" ${locked?'readonly':''}></label><label>Comisión predeterminada (%)<input name="commission" type="number" min="0" max="100" step="0.1" value="${state.settings.commission||0}" required ${locked?'readonly':''}></label><p class="modal-hint">La comisión se calcula sobre la ganancia positiva después del descuento.${locked?' Tu administrador gestiona el nombre y el porcentaje de tu cuenta.':''}</p><div class="form-message" id="settings-message" role="alert"></div></form><div class="sidebar-rule" style="margin:20px 0"></div><p><strong>Respaldo de tu taller</strong><br>${cloud?.isActive?'Las ventas y tarifas están en Supabase. Puedes exportar un respaldo de los datos a los que tienes acceso.':'La cotización se conserva en este navegador. Accede al taller para guardar tus servicios en Supabase.'}</p><div class="backup-buttons"><button class="button secondary" id="backup-export">${icon('download')}Exportar respaldo</button><button class="button secondary" id="backup-import" hidden>Importar respaldo local</button><input id="backup-file" type="file" accept=".json,application/json" hidden></div>${cloud?.user?'<p class="modal-hint" style="margin-top:15px">El respaldo descargado contiene los datos accesibles a tu cuenta. Supabase sigue siendo el registro compartido del taller.</p>':''}`,`<button class="button secondary" data-close>Cerrar</button><button type="submit" form="settings-form" class="button primary">Guardar configuración</button>`);
  $('settings-form').onsubmit=async e=>{
    e.preventDefault();const form=e.currentTarget,button=document.querySelector('[form="settings-form"]'),data=new FormData(form);button.disabled=true;
    try{
      if(cloud?.user){if(!cloud.isAdmin){$('modal').close();return;}await cloud.saveEmployee({...cloud.profile,display_name:String(data.get('mechanic')).trim(),commission:Number(data.get('commission'))});await cloud.load();}
      else{state.settings.mechanic=String(data.get('mechanic')).trim();state.settings.commission=Number(data.get('commission'));}
      if(!state.draft.items.length){state.draft.commission=state.settings.commission;renderDraftFields();}persist();refresh();$('modal').close();toast('Configuración guardada.');
    }catch(error){if(form.isConnected){$('settings-message').textContent=errorText(error);button.disabled=false;}}
  };
  $('backup-export').onclick=()=>download('bennys-respaldo-'+new Date().toISOString().slice(0,10)+'.json',JSON.stringify(state,null,2),'application/json');
  $('backup-import').onclick=()=>$('backup-file').click();
  $('backup-file').onchange=async e=>{const file=e.target.files?.[0];if(!file||cloud?.user)return;try{if(file.size>10000000)throw Error();const parsed=JSON.parse(await file.text());if(!validState(parsed))throw Error();confirmAction('Importar respaldo local',`Este respaldo contiene <strong>${parsed.orders.length} órdenes locales</strong>. Reemplazará el guardado local de este navegador.`,()=>{const old=state;state=sanitizeState(parsed);if(!persist()){state=old;throw Error('No se pudo guardar el respaldo.');}renderDraftFields();refresh();setView(currentView);toast('Respaldo local importado.');},'Importar y reemplazar');}catch{toast('El archivo no es un respaldo válido de Benny’s.');}};
}
function showHelp(){modal('Cómo trabajar en el taller',`<ol class="help-list"><li>En Nueva venta, escribe el nombre del cliente y selecciona los servicios.</li><li>Revisa descuentos, piezas y comisión. Verifica el pago en el juego antes de confirmar.</li><li>Consulta Ventas para filtrar, exportar o anular una venta con su motivo.</li><li>En Clientes frecuentes puedes reutilizar nombres y revisar su historial.</li><li>Comisiones muestra lo generado. Administración también controla equipo, tarifas, gastos y actividad.</li></ol><p class="modal-hint">Cada mecánico consulta sus propias ventas. Administración ve el taller completo. Pulsa / para buscar servicios.</p>`,`<button class="button secondary" data-close>Cerrar</button>`);}
function accessHeading(title,lead){$('access-title').textContent=title;$('access-lead').textContent=lead;}
function authMessage(text,kind='error'){
  const box=$('auth-message');if(!box)return;
  box.className='form-message'+(text?' '+kind:'');
  box.innerHTML=text?`<span class="message-icon">${icon(kind==='error'?'alert':kind==='ok'?'check':'refresh')}</span><span>${esc(text)}</span>`:'';
}
function setAuthBusy(busy){const button=document.querySelector('[form="auth-form"]'),form=$('auth-form');if(button){button.disabled=busy;button.setAttribute('aria-busy',String(busy));}form?.classList.toggle('is-busy',busy);}
function renderAccess(){
  const waiting=(!cloud?.initialized&&!connectionFailed)||(cloud?.loading&&!cloud?.ready&&!cloud?.error);
  const phase=waiting?'loading':cloud?.isActive?'active':cloud?.user?(cloud.error?'error':'pending'):'login';
  document.body.classList.toggle('booting',phase==='loading');document.body.classList.toggle('locked',phase!=='active');
  $('loading-title').textContent=cloud?.user?'Cargando el taller':'Abriendo el taller';$('loading-message').textContent=cloud?.user?'Consultando tu perfil y los registros de trabajo…':'Comprobando tu sesión…';
  setAccessVisible(phase!=='active'&&phase!=='loading');
  if(phase===gatePhase)return;gatePhase=phase;
  if(phase==='loading')return;
  if(phase==='active'){$('access-content').innerHTML='';if($('modal').open&&($('pending-account')||$('claim-form')))$('modal').close();return;}
  closeMenu();if(phase==='login'){if($('modal').open)$('modal').close();openAuth();return;}
  accessHeading(phase==='error'?'No pudimos cargar el taller':'Tu cuenta necesita activación',phase==='error'?'La conexión con el taller falló.':'Un administrador debe activar tu acceso.');
  $('access-content').innerHTML=`<div class="gate-status"><span class="gate-icon">${icon(phase==='error'?'refresh':'shield')}</span><p>${phase==='error'?esc(errorText(cloud.error)):'El administrador debe activar tu cuenta. Si instalaste el taller, utiliza el código inicial de administración.'}</p><button id="gate-account" class="button primary">${phase==='error'?'Volver a comprobar':'Revisar mi acceso'}</button><button id="gate-signout" class="text-button">Cerrar sesión</button></div>`;
  $('gate-account').onclick=async()=>{if(phase==='error'){await cloud.load();}else openAccount();};$('gate-signout').onclick=async()=>{try{await cloud.signOut();}catch(error){toast(errorText(error));}};
}
function renderCloudStatus(){
  const status=cloud?.loading?'Sincronizando…':cloud?.error?'Conexión pendiente':cloud?.isActive?'Sincronizado con el taller':cloud?.user?'Cuenta pendiente de activación':'Acceso del personal';
  $('cloud-status-text').textContent=status;$('cloud-indicator').classList.toggle('offline',!cloud?.isActive);
  $('account-label').textContent=cloud?.user?(cloud.profile?.display_name||'Mi cuenta'):'Acceder';
  for(const id of ['team-nav','finance-nav','audit-nav','admin-nav-label'])$(id).hidden=!cloud?.isAdmin;$('sync-button').hidden=!cloud?.user;$('signout-button').hidden=!cloud?.user;$('layout-edit').hidden=!cloud?.isActive;
  $('account-role').textContent=cloud?.isActive?(cloud.isAdmin?'Administrador':'Mecánico'):'Perfil del mecánico';
  $('ticket-storage-text').textContent='Ventas en Supabase · Borrador local';$('sync-button').classList.toggle('syncing',Boolean(cloud?.loading));$('sync-button').setAttribute('aria-busy',String(Boolean(cloud?.loading)));$('home-workspace').textContent=cloud?.isAdmin?'Taller · Administración':'Mi actividad · Mecánico';$('last-sync').textContent=cloud?.lastSynced?'Actualizado a las '+cloud.lastSynced.toLocaleTimeString('es-MX',{hour:'2-digit',minute:'2-digit'}):'Sincronizando registros…';renderAccess();
}
function cloudChanged(event){
  if(event.kind==='data'){
    pendingPresentedUser=null;if(!cloud.isAdmin&&['finance','team','audit'].includes(currentView))setView('dashboard');
    if(accountUser!==event.userId){const guestDraft={...state.draft,items:state.draft.items.map(i=>({...i}))};accountUser=event.userId;activeKey='bennys-motors-v2:'+event.userId;state=readState(activeKey);if(!state.draft.items.length&&!state.draft.client)state.draft=guestDraft;}
    state.catalog=CATALOG.map(original=>{const service=event.services.find(i=>i.id===original.id);return {...original,price:Number(service.price),cost:Number(service.cost)};});
    state.orders=event.orders;state.settings={mechanic:event.profile.display_name,commission:Number(event.profile.commission)};
    if(!cloud.isAdmin||!state.draft.items.length)state.draft.commission=Number(event.profile.commission);
    persist();renderDraftFields();refresh();
    if(currentView==='orders')renderOrders();if(currentView==='catalog')renderPrices();if(currentView==='summary')renderSummary();if(currentView==='team')renderTeam();
    if($('auth-form')||$('claim-form')||$('pending-account')){$('modal').close();toast('Ya estás dentro del taller.');}
  }else if(event.kind==='signedout'){homeLayout.cancel();
    pendingPresentedUser=null;
    if(accountUser){localStorage.removeItem(activeKey);accountUser=null;activeKey=GUEST_KEY;state=readState(GUEST_KEY);renderDraftFields();refresh();if(['team','finance','audit'].includes(currentView))setView('dashboard');if(currentView==='orders')renderOrders();if(currentView==='summary')renderSummary();if(currentView==='catalog')renderPrices();}
  }else if(event.kind==='pending'){
    if(accountUser){state.orders=[];state.settings={mechanic:cloud.profile?.display_name||'',commission:0};persist();refresh();if(currentView==='orders')renderOrders();if(currentView==='summary')renderSummary();if(currentView==='catalog')renderPrices();if(['team','finance','audit'].includes(currentView))setView('dashboard');}
    if(!cloud.error&&!$('modal').open&&pendingPresentedUser!==cloud.user.id){pendingPresentedUser=cloud.user.id;openAccount();}
  }else if(event.kind==='error'){
    if($('auth-form')){authMessage(errorText(event.error),'error');setAuthBusy(false);}
    if(currentView==='catalog')renderPrices();if(['team','finance','audit'].includes(currentView))setView('dashboard');
  }
  renderCloudStatus();
}
function openAuth(mode='login',{animate=false,focus=''}={}){
  const signup=mode==='signup';
  document.body.classList.add('locked');
  const keep=$('auth-form')?.elements?.username?.value||'';
  accessHeading(signup?'Solicita tu acceso':'Inicia tu turno',signup?'El administrador revisará tu solicitud.':'Ingresa con tu usuario del taller.');
  const field=(id,label,glyph,input)=>`<div class="field-group"><label for="${id}">${label}</label><div class="field"><span class="field-icon" aria-hidden="true">${icon(glyph)}</span>${input}</div></div>`;
  $('access-content').innerHTML=`<div class="auth-tabs" role="tablist" aria-label="Tipo de acceso"><button type="button" id="auth-login-tab" role="tab" aria-selected="${!signup}" aria-controls="auth-form" tabindex="${signup?-1:0}" class="${signup?'':'active'}">Iniciar sesión</button><button type="button" id="auth-signup-tab" role="tab" aria-selected="${signup}" aria-controls="auth-form" tabindex="${signup?0:-1}" class="${signup?'active':''}">Solicitar acceso</button></div><form id="auth-form" role="tabpanel" aria-labelledby="auth-${signup?'signup':'login'}-tab">${signup?field('auth-name','NOMBRE DEL MECÁNICO','team','<input id="auth-name" name="name" maxlength="80" autocomplete="name" required placeholder="Tu nombre en el taller">'):''}${field('auth-username','USUARIO','user',`<input id="auth-username" name="username" type="text" minlength="3" maxlength="24" pattern="[a-zA-Z0-9][a-zA-Z0-9._\\-]{2,23}" autocomplete="username" autocapitalize="none" spellcheck="false" required placeholder="${signup?'Ej. mateo':'Tu nombre de usuario'}">`)}${field('auth-password','CONTRASEÑA','lock',`<input id="auth-password" name="password" type="password" minlength="8" maxlength="128" autocomplete="${signup?'new-password':'current-password'}" required placeholder="${signup?'Al menos 8 caracteres':'Tu contraseña'}"><button type="button" class="reveal" id="auth-reveal" aria-label="Mostrar contraseña" aria-pressed="false">${icon('eye')}</button>`)}<div class="form-message" id="auth-message" role="alert"></div><button class="button primary access-submit" form="auth-form" type="submit"><span>${signup?'Solicitar acceso':'Entrar al taller'}</span>${icon('arrow')}</button></form>`;
  if(keep)$('auth-username').value=keep;
  const content=$('access-content');
  if(animate&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&!document.body.classList.contains('effects-paused'))content.animate([{opacity:0,transform:'translateY(6px)'},{opacity:1,transform:'none'}],{duration:220,easing:'cubic-bezier(.2,.7,.2,1)'});
  if(focus==='tab')$('auth-'+mode+'-tab').focus();
  $('auth-login-tab').onclick=()=>openAuth('login',{animate:true,focus:'tab'});$('auth-signup-tab').onclick=()=>openAuth('signup',{animate:true,focus:'tab'});
  for(const tab of document.querySelectorAll('.auth-tabs [role=tab]'))tab.onkeydown=e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const next=e.key==='Home'?'login':e.key==='End'?'signup':signup?'login':'signup';openAuth(next,{animate:true,focus:'tab'});};
  $('auth-reveal').onclick=()=>{const input=$('auth-password'),showing=input.type==='password';input.type=showing?'text':'password';$('auth-reveal').setAttribute('aria-pressed',String(showing));$('auth-reveal').setAttribute('aria-label',showing?'Ocultar contraseña':'Mostrar contraseña');$('auth-reveal').innerHTML=icon(showing?'eyeoff':'eye');};
  $('auth-form').onsubmit=async e=>{e.preventDefault();const form=e.currentTarget,button=document.querySelector('[form="auth-form"]');if(button.disabled)return;setAuthBusy(true);const data=new FormData(form);authMessage(signup?'Creando tu cuenta…':'Comprobando acceso…','busy');try{if(!cloud)throw Error('La conexión no está disponible. Vuelve a cargar la página.');if(signup){const result=await cloud.signUp(String(data.get('name')).trim(),String(data.get('username')).trim().toLowerCase(),String(data.get('password')));if(!result.session&&form.isConnected){authMessage('Solicitud enviada. Ya puedes iniciar sesión; administración debe aprobar tu acceso al taller.','ok');form.querySelector('[name="password"]').value='';setAuthBusy(false);return;}}else await cloud.signIn(String(data.get('username')).trim().toLowerCase(),String(data.get('password')));if(form.isConnected){authMessage('Cargando tu taller…','busy');setTimeout(()=>{if(form.isConnected&&cloud?.error){authMessage(errorText(cloud.error),'error');setAuthBusy(false);}},1500);}}catch(error){if(form.isConnected){authMessage(errorText(error),'error');setAuthBusy(false);}}};
}
function openAccount(){
  if(!cloud?.user){openAuth();return;}
  if(!cloud.isActive){
    const setup=!cloud.hasAdmin&&!cloud.error&&!cloud.loading;
    modal(setup?'Activa la administración.':'Tu acceso al taller.',`<div id="pending-account"><p><strong>${esc(cloud.profile?.display_name||'Tu cuenta')}</strong></p><p>${cloud.error?esc(errorText(cloud.error)):cloud.loading?'Estamos comprobando tu acceso…':setup?'Introduce el código inicial que obtuviste al instalar el taller en Supabase. Se utiliza una sola vez.':'Tu cuenta está pendiente. El administrador debe activarla desde Equipo.'}</p>${setup?'<form id="claim-form"><label>Código inicial de administrador<input name="code" type="password" maxlength="128" autocomplete="off" required placeholder="Código de activación"></label><div class="form-message" id="claim-message" role="alert"></div></form>':''}</div>`,`<button class="button secondary" id="account-signout">Cerrar sesión</button>${setup?'<button class="button primary" form="claim-form" type="submit">Activar administrador</button>':'<button class="button primary" id="account-retry">Volver a comprobar</button>'}`);
    if($('claim-form'))$('claim-form').onsubmit=async e=>{e.preventDefault();const form=e.currentTarget,button=document.querySelector('[form="claim-form"]');button.disabled=true;try{await cloud.claimAdmin(String(new FormData(form).get('code')).trim());}catch(error){if(form.isConnected){$('claim-message').textContent=errorText(error);button.disabled=false;}}};
    if($('account-retry'))$('account-retry').onclick=async()=>{await cloud.load();if(!cloud.isActive)openAccount();};
  }else modal('Tu cuenta del taller.',`<p><strong>${esc(cloud.profile.display_name)}</strong><br>Usuario: ${esc(cloud.profile.username||'Pendiente de configurar')}</p><div class="summary-row"><span>Acceso</span><strong>${cloud.isAdmin?'Administrador':'Mecánico'}</strong></div><div class="summary-row"><span>Comisión asignada</span><strong>${Number(cloud.profile.commission)} %</strong></div><p class="modal-hint" style="margin-top:18px">Las órdenes y tarifas se guardan en Supabase. Tu cotización actual se conserva en este navegador.</p>`,`<button class="button secondary" id="account-signout">Cerrar sesión</button><button class="button primary" id="account-settings">Configuración</button>`);
  if($('account-settings'))$('account-settings').onclick=openSettings;
  $('account-signout').onclick=async()=>{try{await cloud.signOut();$('modal').close();toast('Sesión cerrada.');}catch(error){toast(errorText(error));}};
}
function renderTeam(){
  if(!cloud?.isAdmin){$('team-list').innerHTML='';return;}
  const team=cloud.team||[];$('team-list').innerHTML=`<div class="notice">Puedes crear un mecánico o aprobar las solicitudes recibidas desde la pantalla de acceso.</div><div class="table-panel"><table><thead><tr><th>Mecánico / Usuario</th><th>Rol</th><th>Comisión</th><th>Acceso</th><th></th></tr></thead><tbody>${team.map(profile=>`<tr><td><strong>${esc(profile.display_name)}</strong><small>${esc(profile.username||'Sin usuario asignado')}</small></td><td>${profile.role==='admin'?'Administrador':'Mecánico'}</td><td>${Number(profile.commission)} %</td><td><span class="status-pill ${profile.active?'':'cancelled'}">${profile.active?'Activo':'Pendiente / Inactivo'}</span></td><td><button class="row-button" data-employee="${esc(profile.id)}">Gestionar ↗</button></td></tr>`).join('')}</tbody></table></div>`;
}
function createMechanic(){
  if(!cloud?.isAdmin)return;
  modal('Crear mecánico',`<form id="create-employee-form"><label>Nombre del mecánico<input name="name" maxlength="80" autocomplete="off" required placeholder="Nombre dentro del taller"></label><label>Nombre de usuario<input name="username" minlength="3" maxlength="24" pattern="[a-zA-Z0-9][a-zA-Z0-9._\\-]{2,23}" autocomplete="off" autocapitalize="none" spellcheck="false" required placeholder="Ej. alex.motors"></label><div class="form-grid"><label>Contraseña inicial<input name="password" type="password" minlength="8" maxlength="128" autocomplete="new-password" required></label><label>Comisión (%)<input name="commission" type="number" min="0" max="100" step="0.01" value="0" required></label></div><p class="modal-hint">Se creará una cuenta de mecánico activa. Entrará con este usuario y contraseña.</p><div id="create-employee-message" class="form-message" role="alert"></div></form>`,`<button class="button secondary" data-close>Cancelar</button><button class="button primary" type="submit" form="create-employee-form">Crear mecánico</button>`);
  $('create-employee-form').onsubmit=async event=>{event.preventDefault();const form=event.currentTarget,button=document.querySelector('[form="create-employee-form"]'),values=new FormData(form);if(button.disabled)return;button.disabled=true;try{await cloud.createEmployee({name:String(values.get('name')).trim(),username:String(values.get('username')).trim().toLowerCase(),password:String(values.get('password')),commission:Number(values.get('commission'))});await cloud.load();if(form.isConnected)$('modal').close();toast('Mecánico creado y activado.');}catch(error){if(form.isConnected){$('create-employee-message').textContent=errorText(error);button.disabled=false;}}};
}
function editEmployee(id){
  const profile=cloud?.team?.find(p=>p.id===id);if(!profile||!cloud.isAdmin)return;const self=id===cloud.user.id;
  modal('Gestionar empleado',`<form id="employee-form"><label>Nombre del mecánico<input name="name" maxlength="80" required value="${esc(profile.display_name)}"></label><div class="form-grid"><label>Rol<select name="role" ${self?'disabled':''}><option value="employee" ${profile.role==='employee'?'selected':''}>Mecánico</option><option value="admin" ${profile.role==='admin'?'selected':''}>Administrador</option></select></label><label>Comisión (%)<input name="commission" type="number" min="0" max="100" step="0.01" required value="${Number(profile.commission)}"></label></div><label>Acceso<select name="active" ${self?'disabled':''}><option value="true" ${profile.active?'selected':''}>Activo</option><option value="false" ${profile.active?'':'selected'}>Inactivo / Pendiente</option></select></label><p class="modal-hint">${self?'Tu propia cuenta conserva el acceso de administrador.':'Una cuenta inactiva no puede consultar ni registrar servicios.'}</p><div class="form-message" id="employee-message" role="alert"></div></form>`,`<button class="button secondary" data-close>Cancelar</button><button class="button primary" type="submit" form="employee-form">Guardar empleado</button>`);
  $('employee-form').onsubmit=async e=>{e.preventDefault();const form=e.currentTarget,button=document.querySelector('[form="employee-form"]'),data=new FormData(form);button.disabled=true;try{await cloud.saveEmployee({...profile,display_name:String(data.get('name')).trim(),commission:Number(data.get('commission')),role:self?'admin':String(data.get('role')),active:self?true:data.get('active')==='true'});await cloud.load();if(form.isConnected)$('modal').close();toast('Empleado actualizado.');}catch(error){if(form.isConnected){$('employee-message').textContent=errorText(error);button.disabled=false;}}};
}

const homeLayout=new HomeLayout({getCloud:()=>cloud,toast,rerender:()=>management.dashboard()});
management=new ManagementPanel({layout:homeLayout,getState:()=>state,getCloud:()=>cloud,modal,toast,errorText,confirmAction,exportRows:(name,rows)=>{download(name,'\uFEFF'+rows.map(row=>row.map(csvCell).join(';')).join('\r\n'),'text/csv;charset=utf-8');toast('Informe exportado.');}});
for(const id of ['orders-list','price-table','summary-content','finance-content','team-list','clients-list']){const target=$(id);if(target)new MutationObserver(()=>labelTables(target)).observe(target,{childList:true});}
hydrateIcons();homeLayout.init();$('top-date').textContent=new Intl.DateTimeFormat('es-MX',{day:'numeric',month:'long',year:'numeric'}).format(new Date());
$('categories').innerHTML=CATEGORIES.map(c=>`<button class="category-button ${c.id==='all'?'active':''}" data-category="${c.id}" aria-pressed="${c.id==='all'}">${icon(c.icon)}${esc(c.label)}</button>`).join('');
renderDraftFields();refresh();
document.querySelectorAll('[data-view]').forEach(button=>button.onclick=()=>setView(button.dataset.view));
$('services-grid').onclick=e=>{const button=e.target.closest('[data-add]');if(button)add(button.dataset.add);};
$('categories').onclick=e=>{const button=e.target.closest('[data-category]');if(!button)return;category=button.dataset.category;document.querySelectorAll('[data-category]').forEach(c=>{c.classList.toggle('active',c===button);c.setAttribute('aria-pressed',String(c===button));});renderServices();$('services-grid').classList.remove('stagger');void $('services-grid').offsetWidth;$('services-grid').classList.add('stagger');};
$('service-search').oninput=renderServices;
for(const [id,key] of Object.entries({'client':'client'}))$(id).oninput=e=>{state.draft[key]=e.target.value;persist();renderClientPicker();};
for(const key of ['discount','commission']){$(key).oninput=e=>{if(key==='commission'&&cloud?.user&&!cloud.isAdmin){e.target.value=state.draft.commission;return;}const value=Number(e.target.value);state.draft[key]=Math.max(0,Math.min(100,Number.isFinite(value)?value:0));persist();renderOrder();};$(key).onblur=()=>$(key).value=state.draft[key];}
$('order-items').onclick=e=>{const remove=e.target.closest('[data-remove]'),quantity=e.target.closest('[data-qty]');if(remove)state.draft.items=state.draft.items.filter(i=>i.id!==remove.dataset.remove);else if(quantity){const item=state.draft.items.find(i=>i.id===quantity.dataset.qty);if(!item)return;const value=item.qty+Number(quantity.dataset.delta);if(value<1)state.draft.items=state.draft.items.filter(i=>i.id!==item.id);else item.qty=Math.min(item.exclusive?1:999,value);}else return;persist();refresh();};
$('order-items').onchange=e=>{const input=e.target.closest('[data-quantity]');if(!input)return;const item=state.draft.items.find(i=>i.id===input.dataset.quantity),value=Number(input.value);if(!item)return;if(!Number.isInteger(value)||value<1||value>999){toast('La cantidad debe ser un entero entre 1 y 999.');renderOrder();return;}item.qty=item.exclusive?1:value;persist();refresh();};
$('new-order').onclick=()=>{if(state.draft.items.length||state.draft.client)confirmAction('Empezar una nueva orden','Se vaciará la cotización actual. Las órdenes registradas seguirán en el historial.',clearDraft,'Nueva orden');else{clearDraft();$('client').focus();}};
$('copy-ticket').onclick=()=>copyText(receipt(snapshot()));$('checkout').onclick=openCheckout;
$('presets-button').onclick=()=>{modal('Selecciones de servicios',`<p>Agrega una selección de servicios con las tarifas actuales. Puedes personalizarla después.</p>${PRESETS.map(p=>`<button class="preset" data-preset="${p.id}"><span>${icon(p.icon)}</span><span><strong>${esc(p.name)}</strong><small>${esc(p.detail)}</small></span><b>${euro(p.items.reduce((n,id)=>n+state.catalog.find(i=>i.id===id).price,0))}</b></button>`).join('')}<p class="modal-hint">Las selecciones suman los precios individuales, sin descuentos de paquete.</p>`);document.querySelectorAll('[data-preset]').forEach(button=>button.onclick=()=>{const preset=PRESETS.find(p=>p.id===button.dataset.preset);for(const id of preset.items)state.draft.items=addToOrder(state.draft.items,state.catalog.find(i=>i.id===id)).items;persist();refresh();$('modal').close();toast('Selección agregada a la orden.');});};
$('signout-button').onclick=async()=>{try{await cloud.signOut();toast('Sesión cerrada.');}catch(error){toast(errorText(error));}};
$('access-screen').addEventListener('focusin',e=>{if(e.target.closest('#auth-form'))setAccessCalm(true);});
$('access-screen').addEventListener('focusout',e=>{if(!e.relatedTarget?.closest?.('#auth-form'))setAccessCalm(false);});
$('settings-button').onclick=openSettings;$('profile-button').onclick=openAccount;$('top-settings').onclick=openSettings;$('help-button').onclick=showHelp;$('account-button').onclick=openAccount;
$('sync-button').onclick=async()=>{if(cloud){await cloud.load();toast(cloud.error?errorText(cloud.error):'Datos del taller actualizados.');}};
$('team-refresh').onclick=()=>cloud?.load();$('create-mechanic').onclick=createMechanic;
$('modal').onclick=e=>{if(e.target.closest('[data-close]'))$('modal').close();else if(e.target===$('modal')){const rect=$('modal').getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)$('modal').close();}};
document.addEventListener('click',e=>{const detail=e.target.closest('[data-detail]'),employee=e.target.closest('[data-employee]');if(detail)openDetail(detail.dataset.detail);if(employee)editEmployee(employee.dataset.employee);const client=e.target.closest('[data-client]');if(client)selectClient(client.dataset.client);if(e.target.closest('[data-go-calculator]'))setView('calculator');if(e.target.closest('[data-open-account]'))openAccount();const view=e.target.closest('[data-open-view]');if(view)setView(view.dataset.openView);const expense=e.target.closest('[data-cancel-expense]');if(expense)management.cancelExpense(expense.dataset.cancelExpense);const clientHistory=e.target.closest('[data-client-history]');if(clientHistory)openClientHistory(clientHistory.dataset.clientHistory);});
$('client-search').oninput=renderClients;$('show-clients').onclick=()=>setView('clients');
$('filters-toggle').onclick=()=>{const open=$('orders-filters').classList.toggle('filters-open');$('filters-toggle').setAttribute('aria-expanded',String(open));};
$('order-search').oninput=renderOrders;for(const id of ['order-period','order-status-filter','order-payment','order-employee'])$(id).onchange=renderOrders;$('summary-period').onchange=renderSummary;$('dashboard-period').onchange=()=>management.dashboard();$('finance-period').onchange=()=>management.finance();$('audit-period').onchange=()=>management.audit();$('audit-search').oninput=()=>management.audit();$('new-expense').onclick=()=>management.newExpense();$('export-commissions').onclick=()=>management.exportCommissions();$('menu-toggle').onclick=()=>{document.body.classList.add('menu-animated');const open=document.body.classList.toggle('menu-open');$('menu-toggle').setAttribute('aria-expanded',String(open));};$('nav-backdrop').onclick=closeMenu;$('export-orders').onclick=exportCsv;
$('price-table').onchange=async e=>{const input=e.target.closest('[data-price]');if(!input)return;const item=state.catalog.find(i=>i.id===input.dataset.price),value=Number(input.value);if(!cloud?.isAdmin||!input.value.trim()||!Number.isFinite(value)||value<0||value>100000000){input.value=item[input.dataset.field];toast('Solo el administrador puede guardar tarifas válidas.');return;}input.disabled=true;try{const saved=await cloud.saveService({...item,[input.dataset.field]:Math.round(value*100)/100});item.cost=Number(saved.cost);item.price=Number(saved.price);persist();$('margin-'+item.id).textContent=euro(item.price-item.cost);renderServices();toast('Tarifa guardada para todo el taller.');}catch(error){input.value=item[input.dataset.field];toast(errorText(error));}finally{if(input.isConnected)input.disabled=false;}};
$('restore-prices').onclick=()=>{if(!cloud?.isAdmin)return;confirmAction('Restaurar el tarifario original','Se recuperarán los 18 precios de tu tabla. Las órdenes registradas conservarán sus importes.',async()=>{let saved=0;try{for(const service of CATALOG){await cloud.saveService(service);saved++;}await cloud.load();renderPrices();toast('Tarifario original restaurado.');}catch(error){await cloud.load();renderPrices();throw Error(`${saved} tarifas restauradas. ${errorText(error)}`);}},'Restaurar tarifas');};
$('mobile-ticket').onclick=()=>document.querySelector('.order-panel').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'});
document.addEventListener('keydown',e=>{if(cloud?.isActive&&e.key==='/'&&!$('modal').open&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)){e.preventDefault();setView('calculator');$('service-search').focus();}});
const hash=location.hash.slice(1);setView(['dashboard','calculator','orders','clients','catalog','summary'].includes(hash)?hash:'dashboard');
try{cloud=new BennysCloud(cloudChanged);renderCloudStatus();}catch(error){connectionFailed=true;renderCloudStatus();authMessage(errorText(error),'error');}

})();
