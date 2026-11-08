// Genera capturas reales de la interfaz implementada (no son conceptos) en docs/capturas/.
// Usa el SDK real con respuestas simuladas y datos de ejemplo EN MEMORIA (nombres y cifras ficticios, nada se escribe en Supabase).
// El acceso se captura con el emblema 3D vivo (WebGL por software con ?logo=3d).
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/Mateo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('node:fs'),path=require('node:path');
const {createMock,ORIGIN}=require('./mock-backend.cjs');
const out=process.env.CAPTURES_DIR?path.resolve(process.env.CAPTURES_DIR):path.resolve(__dirname,'../docs/capturas');
fs.mkdirSync(out,{recursive:true});
const executablePath=process.env.EDGE_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';

(async()=>{
  const {calculate}=await import('../dist/core.js');
  const mock=await createMock();
  const seed=(client,ids,minutes,payment,mechanic)=>{
    const items=ids.map(id=>({...mock.services.find(s=>s.id===id),qty:1})),id=crypto.randomUUID(),date=new Date(Date.now()-minutes*60000).toISOString(),p=mock.profiles.find(p=>p.display_name===mechanic);
    mock.orders.push({id,employee_id:p.id,status:'active',created_at:date,payload:{id,folio:'#BNY-'+String(mock.orders.length+1).padStart(3,'0'),date,client,mechanic,employeeId:p.id,payment,notes:'',items,discount:0,commission:20,totals:calculate(items,0,20),status:'active'}});
  };
  // Datos ficticios para la demostración
  seed('Cliente de ejemplo A',['v8'],12,'Efectivo','Mateo');seed('Cliente de ejemplo B',['frenos'],70,'Tarjeta','Alex');seed('Cliente de ejemplo A',['awd'],130,'Transferencia','Mateo');seed('Cliente de ejemplo C',['slick'],200,'Efectivo','Alex');seed('Cliente de ejemplo A',['reparacion'],300,'Efectivo','Mateo');seed('Cliente de ejemplo B',['limpieza'],400,'Tarjeta','Mateo');
  mock.expenses.push({id:crypto.randomUUID(),description:'Herramientas del taller (ejemplo)',category:'Herramientas',amount:1250,created_by:mock.profiles[0].id,created_at:new Date(Date.now()-3*3600000).toISOString(),status:'active'});
  mock.audit.unshift({id:2,actor_id:mock.profiles[0].id,action:'gasto_registrado',created_at:new Date(Date.now()-3*3600000).toISOString(),details:{label:'Herramientas del taller (ejemplo)',amount:1250}});
  mock.audit.unshift({id:3,actor_id:mock.profiles[0].id,action:'venta_registrada',created_at:new Date(Date.now()-12*60000).toISOString(),details:{label:'#BNY-001',client:'Cliente de ejemplo A',amount:50000}});

  const normal=await chromium.launch({executablePath,headless:true});
  const gl=await chromium.launch({executablePath,headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const log=[];
  const save=async(page,name,options={})=>{await page.screenshot({path:path.join(out,name+'.png'),...options});log.push(name);console.log('  ',name);};
  async function open(browser,{w,h,dsf=1,query='',reduced=false}){
    const ctx=await browser.newContext({viewport:{width:w,height:h},deviceScaleFactor:dsf,locale:'es-MX',reducedMotion:reduced?'reduce':'no-preference'});
    await mock.install(ctx);const page=await ctx.newPage();
    await page.goto(ORIGIN+'/'+query);await page.locator('#auth-form').waitFor();return {ctx,page};
  }
  const login=async(page,user='mateo')=>{await page.locator('[name=username]').fill(user);await page.locator('[name=password]').fill('fixture-password');await page.locator('[form="auth-form"]').click({force:true});await page.waitForFunction(()=>!document.body.classList.contains('locked'));await page.waitForTimeout(900);};
  const go=async(page,view,mobile)=>{if(mobile){const bottom=page.locator(`.mobile-nav [data-view="${view}"]`);if(await bottom.count())await bottom.click();else{await page.locator('#menu-toggle').click();await page.waitForTimeout(350);await page.locator(`.sidebar [data-view="${view}"]`).click();}}else await page.locator(`.sidebar [data-view="${view}"]`).click();await page.waitForTimeout(1100);};

  // Acceso con emblema 3D vivo
  for(const [w,h,dsf,name] of [[1440,900,1,'acceso-1440'],[1920,1080,1,'acceso-1920'],[390,844,2,'acceso-390'],[768,1024,1,'acceso-768']]){
    const {ctx,page}=await open(gl,{w,h,dsf,query:'?logo=3d'});await page.locator('#logo-stage.is-live').waitFor({timeout:30000});await page.waitForTimeout(1800);await save(page,name);
    if(name==='acceso-1440'){await page.screenshot({path:path.join(out,'emblema-3d-detalle.png'),clip:await page.locator('#logo-stage').boundingBox()});log.push('emblema-3d-detalle');}
    await ctx.close();
  }
  {const {ctx,page}=await open(normal,{w:1440,h:900,query:'?logo=static'});await page.locator('#auth-signup-tab').click({force:true});await page.waitForTimeout(500);await save(page,'acceso-solicitud-1440');await ctx.close();}
  {const {ctx,page}=await open(normal,{w:1440,h:900,query:'?logo=static'});await page.locator('[name=username]').fill('desconocido');await page.locator('[name=password]').fill('fixture-password');await page.locator('[form="auth-form"]').click({force:true});await page.locator('#auth-message.error').waitFor();await page.waitForTimeout(400);await save(page,'acceso-error-1440');await ctx.close();}
  // Carga real (la consulta del perfil se retrasa para poder verla)
  {const {ctx,page}=await open(normal,{w:1440,h:900});await ctx.route('**/rest/v1/rpc/bennys_ensure_profile',async route=>{await new Promise(r=>setTimeout(r,2500));await route.fallback();});await page.locator('[name=username]').fill('mateo');await page.locator('[name=password]').fill('fixture-password');await page.locator('[form="auth-form"]').click({force:true});await page.locator('#loading-screen').waitFor();await page.waitForTimeout(900);await save(page,'carga-1440');await ctx.close();}

  // Panel de administración
  {
    const {ctx,page}=await open(normal,{w:1440,h:900});await login(page);
    await save(page,'panel-1440');
    await page.setViewportSize({width:1440,height:1900});await page.waitForTimeout(500);await save(page,'panel-1440-completo');await page.setViewportSize({width:1440,height:900});
    // Personalizar el inicio: modo de edición y orden guardado
    await page.locator('#layout-edit').click();await page.waitForTimeout(500);await save(page,'inicio-personalizar-1440');
    await page.locator('[data-module="payments"] .module-up').click();await page.locator('[data-module="clients"] .module-up').click();await page.waitForTimeout(400);
    await page.locator('#layout-save').click();await page.waitForTimeout(900);await save(page,'inicio-orden-guardado-1440');
    await page.locator('#layout-edit').click();await page.locator('#layout-reset').click();await page.locator('#layout-save').click();await page.waitForTimeout(500);
    await go(page,'calculator');await page.evaluate(()=>{for(const id of ['v8','frenos','awd'])document.querySelector(`[data-add="${id}"]`).click();const c=document.getElementById('client');c.value='Cliente de ejemplo A';c.dispatchEvent(new Event('input'));});await page.waitForTimeout(600);await save(page,'venta-1440');
    await page.locator('#checkout').click();await page.waitForTimeout(600);await save(page,'confirmar-venta-1440');await page.keyboard.press('Escape');await page.waitForTimeout(300);
    await go(page,'orders');await save(page,'ventas-1440');
    await go(page,'summary');await save(page,'comisiones-1440');
    await go(page,'finance');await save(page,'finanzas-1440');
    await go(page,'team');await save(page,'equipo-1440');
    await go(page,'audit');await save(page,'actividad-1440');
    await go(page,'catalog');await save(page,'tarifario-1440');
    await ctx.close();
  }
  {const {ctx,page}=await open(normal,{w:768,h:1024});await login(page);await save(page,'panel-768');await ctx.close();}
  {const {ctx,page}=await open(normal,{w:1024,h:768});await login(page);await save(page,'panel-1024');await ctx.close();}
  // Móvil
  {
    const {ctx,page}=await open(normal,{w:390,h:844,dsf:2});await login(page);
    await save(page,'panel-390');
    await page.evaluate(()=>window.scrollTo(0,430));await page.waitForTimeout(500);await save(page,'panel-390-desplazado');await page.evaluate(()=>window.scrollTo(0,0));
    await page.locator('#layout-edit').click();await page.waitForTimeout(400);await save(page,'inicio-personalizar-390');await page.locator('#layout-cancel').click();await page.waitForTimeout(300);
    await page.locator('#menu-toggle').click();await page.waitForTimeout(450);await save(page,'menu-390');await page.locator('#nav-backdrop').click({position:{x:370,y:400}});await page.waitForTimeout(400);
    await go(page,'calculator',true);await page.evaluate(()=>{for(const id of ['v8','frenos'])document.querySelector(`[data-add="${id}"]`).click();});await page.waitForTimeout(500);await save(page,'venta-390');
    await go(page,'orders',true);await save(page,'ventas-390');
    await go(page,'clients',true);await save(page,'clientes-390');
    await ctx.close();
  }
  // Sin WebGL: versión estática coherente
  {const ctx=await normal.newContext({viewport:{width:1440,height:900},locale:'es-MX'});await mock.install(ctx);const page=await ctx.newPage();await page.addInitScript(()=>{const original=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...rest){if(/webgl/i.test(type))return null;return original.call(this,type,...rest);};});await page.goto(ORIGIN+'/?logo=3d');await page.locator('#auth-form').waitFor();await page.waitForTimeout(800);await save(page,'acceso-sin-webgl-1440');await ctx.close();}

  await normal.close();await gl.close();
  fs.writeFileSync(path.join(out,'INDICE.md'),`# Capturas reales de la interfaz\n\nGeneradas con \`node tests/capturas.cjs\` desde el código implementado (SDK real de Supabase con respuestas simuladas; cifras y nombres de ejemplo en memoria).\n\n${log.map(n=>`- \`${n}.png\``).join('\n')}\n`);
  console.log(log.length+' capturas en '+out);
})().catch(e=>{console.error(e);process.exit(1);});
