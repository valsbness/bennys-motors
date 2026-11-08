// Pruebas de navegador: SDK real de Supabase con respuestas HTTP simuladas (tests/mock-backend.cjs).
// No crea usuarios ni ventas en producción. Variables: PLAYWRIGHT_PATH, EDGE_PATH, CAPTURES_DIR.
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/Mateo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {createMock,ORIGIN}=require('./mock-backend.cjs');
const root=path.resolve(__dirname,'../dist'),preview=process.env.CAPTURES_DIR?path.resolve(process.env.CAPTURES_DIR):path.resolve(__dirname,'../preview');
fs.mkdirSync(preview,{recursive:true});
const checks=[],errors=[],pass=name=>{checks.push(name);console.log('PASS '+name);};
const money=s=>Number(s.replace(/[^\d,-]/g,'').replace(',','.'));
const shot=(page,name,options={})=>page.screenshot({path:path.join(preview,name+'.png'),animations:'disabled',...options});

(async()=>{
  const mock=await createMock();
  const {profiles,services,orders,requests,expenses,audit,flags}=mock;
  const executablePath=process.env.EDGE_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
  const browser=await chromium.launch({executablePath,headless:true});
  // Navegador aparte con WebGL por software, solo para el emblema 3D (el compositado completo por SwiftShader haría lenta toda la página).
  const glBrowser=await chromium.launch({executablePath,headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const staticRequests=[];
  const context=await browser.newContext({viewport:{width:1440,height:1100},locale:'es-MX'});
  await mock.install(context,{onStatic:p=>staticRequests.push(p)});
  await context.addInitScript(()=>{window.__log=[];document.addEventListener('DOMContentLoaded',()=>new MutationObserver(()=>window.__log.push((performance.now()|0)+':'+document.body.className)).observe(document.body,{attributes:true,attributeFilter:['class']}));});
const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error'&&!/Failed to load resource/.test(m.text()))errors.push('consola: '+m.text());});
  const click=async selector=>{if(selector.startsWith('[data-view=')&&await page.locator('#menu-toggle').isVisible())await page.waitForTimeout(280);if(selector.startsWith('[data-view=')&&await page.locator('#menu-toggle').isVisible()&&!await page.locator('.sidebar').evaluate(el=>el.getBoundingClientRect().x>=0))await page.locator('#menu-toggle').click();const target=page.locator(selector).first();const floating=await target.evaluate(el=>Boolean(el.closest('.access-card'))).catch(()=>false);await target.click({force:floating});};
  async function signIn(email){if(!await page.locator('#auth-form').count())await click('#account-button');await page.locator('[name=username]').fill(profiles.find(p=>p.email===email).username);await page.locator('[name=password]').fill('fixture-password');await click('[form="auth-form"]');const p=profiles.find(p=>p.email===email);await page.waitForFunction(active=>active?!document.body.classList.contains('locked'):!!document.querySelector('#pending-account'),p.active);}
  async function signOut(){if(!await page.locator('#account-signout').isVisible())await click('#account-button');await click('#account-signout');await page.locator('#auth-form').waitFor();assert.equal(await page.locator('.app-shell').isVisible(),false);}

  // ─── Utilidades de medición ───
    const ratio=async locator=>{
    const info=await locator.evaluate(el=>{const cs=getComputedStyle(el);return {color:cs.color,size:parseFloat(cs.fontSize),weight:parseInt(cs.fontWeight,10)};});
    await locator.evaluate(el=>el.scrollIntoView({block:'center',inline:'nearest'}));
    const b64=(await page.screenshot({clip:await locator.boundingBox(),animations:'disabled'})).toString('base64');
    return page.evaluate(async({b64,info})=>{
      const image=new Image();image.src='data:image/png;base64,'+b64;await image.decode();
      const canvas=document.createElement('canvas');canvas.width=image.width;canvas.height=image.height;const g=canvas.getContext('2d');g.drawImage(image,0,0);
      const data=g.getImageData(0,0,canvas.width,canvas.height).data,buckets=new Map();
      for(let i=0;i<data.length;i+=4){const key=(data[i]>>3)+','+(data[i+1]>>3)+','+(data[i+2]>>3),entry=buckets.get(key)||{n:0,r:0,g:0,b:0};entry.n++;entry.r+=data[i];entry.g+=data[i+1];entry.b+=data[i+2];buckets.set(key,entry);}
      const top=[...buckets.values()].sort((a,b)=>b.n-a.n)[0],bg=[top.r/top.n,top.g/top.n,top.b/top.n];
      const m=info.color.match(/[\d.]+/g).map(Number),alpha=m[3]??1,fg=[0,1,2].map(i=>m[i]*alpha+bg[i]*(1-alpha));
      const lum=c=>{const [r,g2,b]=c.map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4);});return .2126*r+.7152*g2+.0722*b;};
      const a=lum(fg),b=lum(bg);return {ratio:(Math.max(a,b)+.05)/(Math.min(a,b)+.05),size:info.size,weight:info.weight};
    },{b64,info});
  };
  const expectContrast=async(label,locator,min=4.5)=>{const result=await ratio(locator);assert.ok(result.ratio>=min,`Contraste de «${label}»: ${result.ratio.toFixed(2)} < ${min}`);return result.ratio;};
  const rafCount=ms=>page.evaluate(async ms=>{const start=window.__raf;await new Promise(r=>setTimeout(r,ms));return window.__raf-start;},ms);
  const forbidden=/Los Santos|Customs|MOTOR & CUSTOM/i;

  // ─── Acceso ───
  await page.goto(ORIGIN);await page.locator('#auth-form').waitFor();assert.equal(await page.locator('#loading-screen').isVisible(),false);await page.evaluate(()=>document.fonts.ready);
  assert.equal(await page.locator('.app-shell').isVisible(),false);assert.equal(await page.locator('#auth-form [name=email],#auth-form input[type=email]').count(),0);assert.doesNotMatch(await page.locator('#access-screen').innerText(),/Cotizar sin entrar/);
  await shot(page,'acceso-1440',{fullPage:true});pass('Acceso obligatorio del personal; sin modo público');
  assert.doesNotMatch(await page.locator('body').innerText(),forbidden);assert.doesNotMatch(await page.content(),forbidden);
  for(const file of fs.readdirSync(root).filter(f=>/\.(html|css|js)$/.test(f)&&f!=='bundle.js'))assert.doesNotMatch(fs.readFileSync(path.join(root,file),'utf8'),forbidden,'Texto retirado en '+file);
  pass('Sin el pie “Los Santos / Motors & Customs” en el acceso ni en el código');
  for(const [width,height] of [[1440,900],[1920,1080],[1280,720],[1024,768]]){
    await page.setViewportSize({width,height});await page.waitForTimeout(250);
    const box=await page.locator('.access-card').boundingBox();
    // El panel flota unos píxeles: tolerancia de 8 px respecto del centro.
    assert.ok(Math.abs(box.x+box.width/2-width/2)<=2,`Panel descentrado en horizontal a ${width}`);
    if(box.height+60<height)assert.ok(Math.abs(box.y+box.height/2-height/2)<=12,`Panel descentrado en vertical a ${width}×${height}`);
  }
  await page.setViewportSize({width:1440,height:1100});pass('Panel de acceso centrado en horizontal y vertical');
  assert.match(await page.locator('.access-photo').evaluate(el=>getComputedStyle(el).backgroundImage),/bennys-acceso-fachada/);
  await page.evaluate(async()=>{for(const url of ['assets/halloween/bennys-acceso-fachada.webp','assets/halloween/bennys-panel-interior.webp']){const image=new Image();image.src=url;await image.decode();if(image.naturalWidth<1200)throw Error('Fondo incompleto');}});
  assert.ok((await page.locator('.access-card').evaluate(el=>getComputedStyle(el).backdropFilter||getComputedStyle(el).webkitBackdropFilter)).includes('blur'));
  await click('#access-screen [data-ambient-toggle]');assert.equal(await page.locator('body').evaluate(el=>el.classList.contains('effects-paused')),true);assert.equal(await page.locator('.access-backdrop .ambient-fog').first().evaluate(el=>getComputedStyle(el).animationPlayState),'paused');
  await page.reload();await page.locator('#auth-form').waitFor();assert.equal(await page.locator('#access-screen [data-ambient-toggle]').getAttribute('aria-pressed'),'false');await click('#access-screen [data-ambient-toggle]');assert.equal(await page.locator('body').evaluate(el=>el.classList.contains('effects-paused')),false);
  await page.setViewportSize({width:390,height:844});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);await shot(page,'acceso-390',{fullPage:true});
  const mobileBox=await page.locator('.access-card').boundingBox();assert.ok(mobileBox.width>=340&&mobileBox.x>=8,'Panel móvil con márgenes');
  await page.setViewportSize({width:1440,height:1100});
  pass('Fondos de Halloween optimizados, cristal y ambiente pausable persistente');

  // ─── Teclado, foco y errores del formulario ───
  await page.locator('#auth-login-tab').focus();
  const order=[];for(let i=0;i<5;i++){await page.keyboard.press('Tab');order.push(await page.evaluate(()=>{const e=document.activeElement;return e.id||(e.classList.contains('access-submit')?'access-submit':e.classList.contains('ambient-control')?'ambient-control':e.tagName);}));}
  assert.deepEqual(order,['auth-username','auth-password','auth-reveal','access-submit','ambient-control'],'Orden de tabulación del acceso');
  await page.locator('#auth-username').focus();await page.waitForTimeout(350);
  const fieldFocus=await page.locator('#auth-username').evaluate(el=>{const field=el.closest('.field'),cs=getComputedStyle(field);return {border:cs.borderColor,shadow:cs.boxShadow};});
  assert.notEqual(fieldFocus.shadow,'none');
  await page.locator('#auth-reveal').focus();await page.keyboard.press('Tab');
  await page.locator('#auth-reveal').focus();assert.notEqual(await page.locator('#auth-reveal').evaluate(el=>getComputedStyle(el).outlineStyle),'none','El control del ojo muestra el foco');
  await page.locator('.access-submit').focus();assert.ok(parseFloat(await page.locator('.access-submit').evaluate(el=>getComputedStyle(el).outlineWidth))>0,'El botón principal muestra el foco');
  await page.locator('#auth-login-tab').focus();await page.keyboard.press('ArrowRight');assert.equal(await page.locator('#auth-signup-tab').getAttribute('aria-selected'),'true');assert.equal(await page.evaluate(()=>document.activeElement.id),'auth-signup-tab');assert.ok(await page.locator('#auth-form [name=name]').count());await page.keyboard.press('Home');assert.equal(await page.locator('#auth-login-tab').getAttribute('aria-selected'),'true');
  await page.locator('#auth-username').fill('persistente');await click('#auth-signup-tab');assert.equal(await page.locator('#auth-username').inputValue(),'persistente','El usuario escrito se conserva al cambiar de pestaña');await click('#auth-login-tab');await page.locator('#auth-username').fill('');
  pass('Teclado: orden de tabulación, foco visible, pestañas con flechas y usuario conservado');
  // El panel no se mueve mientras se escribe
  await page.locator('#auth-username').focus();await page.waitForTimeout(500);
  const before=await page.locator('.access-card').boundingBox();await page.locator('#auth-username').pressSequentially('teclado',{delay:30});await page.waitForTimeout(450);const after=await page.locator('.access-card').boundingBox();
  assert.ok(Math.abs(before.y-after.y)<=0.5&&Math.abs(before.x-after.x)<=0.5,'El panel se queda quieto al escribir');
  assert.match(await page.locator('.access-card').evaluate(el=>getComputedStyle(el).animationPlayState),/paused/);
  await page.locator('#auth-username').fill('');
  pass('El panel flotante se detiene al enfocar un campo');
  // Error con texto e icono
  await page.locator('[name=username]').fill('desconocido');await page.locator('[name=password]').fill('fixture-password');await click('[form="auth-form"]');
  await page.locator('#auth-message.error').waitFor();assert.match(await page.locator('#auth-message').innerText(),/Usuario o contraseña incorrectos/);assert.equal(await page.locator('#auth-message svg').count(),1);assert.equal(await page.locator('.access-submit').isEnabled(),true);
  await page.locator('[name=password]').fill('');await page.locator('[name=username]').fill('');
  pass('Los errores de acceso se indican con texto e icono, no solo con color');

  // ─── Contraste sobre el cristal ───
  await expectContrast('titular del acceso',page.locator('#access-title'),3);
  await expectContrast('intro del acceso',page.locator('.access-lead'));
  await expectContrast('rótulo ACCESO DEL PERSONAL',page.locator('.access-kicker'));
  await expectContrast('pestaña activa',page.locator('.auth-tabs button.active'));
  await expectContrast('pestaña inactiva',page.locator('.auth-tabs button:not(.active)'));
  await expectContrast('etiqueta USUARIO',page.locator('.field-group label').first());
  await expectContrast('botón Entrar al taller',page.locator('.access-submit span'));
  await expectContrast('Solo personal autorizado',page.locator('.access-authorized'));
  await expectContrast('Pausar ambiente',page.locator('.ambient-control span'));
  const placeholder=await page.locator('#auth-username').evaluate(el=>getComputedStyle(el,'::placeholder').color);
  assert.ok(placeholder&&placeholder!=='rgba(0, 0, 0, 0)');
  pass('Contraste del acceso (texto sobre cristal) ≥ 4,5:1');

  // ─── Emblema 3D: carga diferida, ciclo de vida y alternativas ───
  async function logoPage(options={}){
    const ctx=await glBrowser.newContext({viewport:{width:1440,height:900},locale:'es-MX',reducedMotion:options.reduced?'reduce':'no-preference'});
    const requests=[];await mock.install(ctx,{onStatic:p=>requests.push(p)});
    const p=await ctx.newPage();p.on('pageerror',e=>errors.push('3D: '+e.message));
    await p.addInitScript(()=>{window.__raf=0;const original=window.requestAnimationFrame.bind(window);window.requestAnimationFrame=cb=>{window.__raf++;return original(cb);};});
    if(options.noWebGL)await p.addInitScript(()=>{const original=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...rest){if(/webgl/i.test(type))return null;return original.call(this,type,...rest);};});
    if(options.blockModule)await ctx.route('**/assets/logo3d/logo3d.js',route=>route.abort());
    await p.goto(ORIGIN+(options.query||''));await p.locator('#auth-form').waitFor();
    return {ctx,p,requests};
  }
  const count=(p,ms)=>p.evaluate(async ms=>{const start=window.__raf;await new Promise(r=>setTimeout(r,ms));return window.__raf-start;},ms);
  {
    const {ctx,p,requests}=await logoPage({query:'/?logo=3d'});
    await p.locator('#logo-stage.is-live').waitFor({timeout:20000});
    assert.ok(requests.includes('/assets/logo3d/logo3d.js'),'El módulo 3D se carga de forma diferida');
    assert.equal(await p.locator('#logo-stage canvas').count(),1);
    assert.ok(await count(p,1600)>=3,'El emblema anima mientras está visible');
    await p.screenshot({path:path.join(preview,'acceso-3d-1440.png')});
    await p.screenshot({path:path.join(preview,'emblema-3d.png'),clip:await p.locator('#logo-stage').boundingBox()});
    await p.locator('#access-screen [data-ambient-toggle]').click({force:true});await p.waitForTimeout(300);
    assert.ok(await count(p,1000)<=1,'Pausar el ambiente detiene el render continuo');
    await p.locator('#access-screen [data-ambient-toggle]').click({force:true});await p.waitForTimeout(300);
    assert.ok(await count(p,1600)>=3,'Reanudar el ambiente reactiva el render');
    await p.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,get:()=>true});document.dispatchEvent(new Event('visibilitychange'));});await p.waitForTimeout(300);
    assert.ok(await count(p,1000)<=1,'Con la pestaña oculta no hay render continuo');
    await p.evaluate(()=>{delete document.hidden;document.dispatchEvent(new Event('visibilitychange'));});await p.waitForTimeout(300);
    assert.ok(await count(p,1600)>=3,'Al volver a la pestaña se reanuda');
    await p.evaluate(()=>{document.getElementById('access-screen').style.display='none';});await p.waitForTimeout(400);
    assert.ok(await count(p,1000)<=1,'Fuera de vista no hay render continuo');
    await p.evaluate(()=>{document.getElementById('access-screen').style.display='';});await p.waitForTimeout(400);
    assert.ok(await count(p,1600)>=3,'De nuevo visible se reanuda');
    // El acceso real funciona con el 3D activo y el contexto WebGL se libera al entrar
    await p.locator('[name=username]').fill('mateo');await p.locator('[name=password]').fill('fixture-password');await p.locator('[form="auth-form"]').click({force:true});
    await p.waitForFunction(()=>!document.body.classList.contains('locked'));await p.waitForTimeout(400);
    assert.equal(await p.locator('#logo-stage canvas').count(),0,'El lienzo WebGL se libera al entrar al panel');
    assert.ok(await count(p,1000)<=1,'Dentro del panel no queda render 3D en marcha');
    await ctx.close();
  }
  pass('Emblema 3D real: carga diferida, pausa persistente, pestaña oculta, fuera de vista y liberación al entrar');
  for(const [label,options] of [['sin WebGL',{query:'/?logo=3d',noWebGL:true}],['carga del módulo fallida',{query:'/?logo=3d',blockModule:true}],['movimiento reducido',{query:'/?logo=3d',reduced:true}],['imagen estática forzada',{query:'/?logo=static'}]]){
    const {ctx,p,requests}=await logoPage(options);
    assert.equal(await p.locator('#logo-stage .logo-still').isVisible(),true,'Imagen estática visible: '+label);
    assert.equal(await p.locator('#logo-stage canvas').count(),0);
    if(label!=='carga del módulo fallida')assert.equal(requests.includes('/assets/logo3d/logo3d.js'),false,'No se descarga Three.js: '+label);
    await p.waitForTimeout(500);assert.equal(await p.locator('#logo-stage.is-live').count(),0);
    await p.locator('[name=username]').fill('alex');await p.locator('[name=password]').fill('fixture-password');await p.locator('[form="auth-form"]').click({force:true});
    await p.waitForFunction(()=>!document.body.classList.contains('locked'),null,{timeout:15000});
    assert.equal(await p.locator('.app-shell').isVisible(),true,'El acceso funciona: '+label);
    await ctx.close();
  }
  pass('Alternativa estática coherente (sin WebGL, módulo bloqueado, movimiento reducido) y acceso operativo sin el 3D');

  // ─── Carga y panel ───
  await context.route('**/rest/v1/rpc/bennys_ensure_profile',async route=>{await new Promise(resolve=>setTimeout(resolve,350));await route.fallback();});const signing=signIn('admin@example.invalid');await page.locator('#loading-screen').waitFor();assert.match(await page.locator('#loading-message').innerText(),/Consultando tu perfil/);assert.equal(await page.locator('.loading-logo').isVisible(),true);assert.doesNotMatch(await page.locator('#loading-screen').innerText(),/\d+\s?%/);await shot(page,'carga');await signing;await click('[data-view="calculator"]');pass('Pantalla de carga con el emblema durante la consulta real de sesión y datos (sin porcentajes inventados)');
  assert.equal(await page.locator('.service-card').count(),18);assert.equal(await page.locator('#vehicle,#plate,#player-id,[name=playerId],.rp-badge').count(),0);pass('18 tarifas; solo nombre del cliente');
  await click('#presets-button');await click('[data-preset="reference"]');
  assert.equal(money(await page.locator('#total').innerText()),88500);assert.equal(money(await page.locator('#cost').innerText()),60000);
  await page.locator('#discount').fill('10');await page.locator('#commission').fill('20');await page.locator('#client').fill('Cliente de prueba');await page.reload();await page.locator('[data-remove="v8"]').waitFor();
  assert.equal(await page.locator('#client').inputValue(),'Cliente de prueba');assert.equal(money(await page.locator('#profit').innerText()),15720);pass('Cálculos y borrador persistente');
  await page.waitForFunction(()=>!document.body.classList.contains('locked'));
  assert.equal(await page.locator('#team-nav').isVisible(),true);assert.equal(await page.locator('#admin-nav-label').isVisible(),true);assert.equal(await page.locator('#commission').getAttribute('readonly'),null);pass('Acceso con SDK oficial y rol administrador');
  await click('#checkout');await click('[form="checkout-form"]');await page.locator('#checkout-message').filter({hasText:'No se pudo conectar'}).waitFor();await click('[form="checkout-form"]');await page.locator('.receipt-text').waitFor();
  assert.equal(await page.locator('[name=playerId]').count(),0);assert.equal(requests[0].p_player_id,'');assert.equal(orders.length,1);assert.equal(requests[0].p_id,requests[1].p_id);assert.equal(orders[0].payload.totals.total,79650);assert.equal('p_vehicle' in requests[0],false);assert.equal('p_plate' in requests[0],false);assert.match(await page.locator('.receipt-text').innerText(),/#BNY-001/);pass('Registro remoto y reintento sin cobro duplicado');
  await click('.modal-head [data-close]');await click('[data-view="clients"]');assert.equal(await page.locator('#clients-list [data-client]').count(),1);assert.match(await page.locator('#clients-list').innerText(),/Cliente de prueba/);await click('#clients-list [data-client]');assert.equal(await page.locator('#client').inputValue(),'Cliente de prueba');await page.reload();await page.locator('#frequent-client-picker [data-client]').waitFor();assert.equal(await page.locator('#client').inputValue(),'Cliente de prueba');pass('Clientes frecuentes persisten y se reutilizan por nombre');
  await click('[data-view="team"]');await click('[data-employee="33333333-3333-4333-8333-333333333333"]');await page.locator('[name=active]').selectOption('true');await page.locator('[name=commission]').fill('25');await click('[form="employee-form"]');await page.waitForFunction(()=>!document.querySelector('#modal').open);assert.equal(profiles[2].active,true);assert.equal(profiles[2].commission,25);pass('Activación de empleados y comisión asignada');await click('#create-mechanic');await page.locator('#create-employee-form [name=name]').fill('Mecánico creado');await page.locator('#create-employee-form [name=username]').fill('creado');await page.locator('#create-employee-form [name=password]').fill('fixture-password');await page.locator('#create-employee-form [name=commission]').fill('35');await click('[form="create-employee-form"]');await page.waitForFunction(()=>!document.querySelector('#modal').open);assert.equal(profiles[3].active,true);assert.equal(profiles[3].commission,35);assert.equal(profiles[3].role,'employee');assert.match(await page.locator('#team-list').innerText(),/creado/);assert.doesNotMatch(await page.locator('#team-list').innerText(),/@/);pass('Administración crea mecánicos activos sin correo');
  await click('[data-view="catalog"]');await page.locator('#price-kit').fill('5500');await page.locator('#price-kit').blur();await page.waitForFunction(()=>document.querySelector('#toast').textContent.includes('Tarifa guardada'));assert.equal(services.find(s=>s.id==='kit').price,5500);pass('Tarifas compartidas editables por administrador');
  await signOut();await signIn('employee@example.invalid');await click('[data-view="clients"]');assert.equal(await page.locator('#clients-list [data-client]').count(),0);await click('[data-view="orders"]');assert.equal(await page.locator('#orders-list [data-detail]').count(),0);assert.equal(await page.locator('#team-nav').isVisible(),false);assert.equal(await page.locator('#admin-nav-label').isVisible(),false);await click('[data-view="catalog"]');assert.equal(await page.locator('#price-kit').inputValue(),'5500');assert.equal(await page.locator('#price-kit').getAttribute('readonly'),'');assert.equal(await page.locator('#restore-prices').isDisabled(),true);pass('Empleado: historial propio, administración oculta y tarifas de solo lectura');
  await click('[data-view="calculator"]');assert.equal(await page.locator('#commission').getAttribute('readonly'),'');await click('#new-order');if(await page.locator('#modal[open] #confirm-action').count())await click('#modal[open] #confirm-action');await click('[data-add="reparacion"]');await page.locator('#client').fill('Otro cliente');await click('#checkout');await click('[form="checkout-form"]');await page.locator('.receipt-text').waitFor();assert.equal(orders.length,2);assert.equal(orders[1].payload.totals.commission,100);await click('.modal-head [data-close]');await click('[data-view="orders"]');assert.equal(await page.locator('#orders-list [data-detail]').count(),1);pass('Ventas del empleado con su comisión');await click('[data-view="clients"]');assert.equal(await page.locator('#clients-list [data-client]').count(),1);assert.match(await page.locator('#clients-list').innerText(),/Otro cliente/);assert.doesNotMatch(await page.locator('#clients-list').innerText(),/Cliente de prueba/);await page.locator('#client-search').fill('NADIE');assert.equal(await page.locator('#clients-list [data-client]').count(),0);await page.locator('#client-search').fill('OTRO');await click('#clients-list [data-client]');assert.equal(await page.locator('#client').inputValue(),'Otro cliente');await click('[data-view="orders"]');pass('Clientes respetan permisos y permiten buscar por nombre');
  // Panel del empleado: no muestra cifras de otros ni actividad de administración
  await click('[data-view="dashboard"]');assert.doesNotMatch(await page.locator('#dashboard-content').innerText(),/Actividad reciente/);assert.doesNotMatch(await page.locator('#dashboard-content').innerText(),/Cliente de prueba/);assert.match(await page.locator('#dashboard-content').innerText(),/Mi rendimiento/);pass('El panel del empleado no expone la actividad ni los clientes de otros');
  await click('[data-view="orders"]');await click('#orders-list [data-detail]');await click('#cancel-order');await page.locator('[name=reason]').fill('Servicio registrado por error');await click('[form="void-form"]');await page.waitForFunction(()=>!document.querySelector('#modal').open);assert.equal(orders[1].status,'cancelled');await click('[data-view="summary"]');assert.match(await page.locator('#summary-content').innerText(),/Ventas cobradas\s*0/);pass('Anulación conservada y excluida del resumen');await click('[data-view="clients"]');await page.locator('#client-search').fill('');assert.equal(await page.locator('#clients-list [data-client]').count(),0);pass('Anular una orden actualiza la lista de clientes');
  await signOut();await signIn('admin@example.invalid');await click('[data-view="orders"]');assert.equal(await page.locator('#orders-list [data-detail]').count(),2);const csvDownload=page.waitForEvent('download');await click('#export-orders');const csv=await csvDownload;const csvText=fs.readFileSync(await csv.path(),'utf8');assert.doesNotMatch(csvText,/"ID"/);await click('[data-view="clients"]');await page.locator('#client-search').fill('');assert.equal(await page.locator('#clients-list [data-client]').count(),1);
  await click('[data-client-history]');assert.match(await page.locator('#modal-content').innerText(),/Visitas cobradas/);await click('.modal-head [data-close]');
  await click('[data-view="dashboard"]');assert.match(await page.locator('#dashboard-content').innerText(),/79.650/);assert.equal(await page.locator('.chart-bar').count(),24);assert.match(await page.locator('#dashboard-content').innerText(),/Clientes frecuentes/);assert.equal(await page.locator('#dashboard-content .client-row').count(),1);await page.waitForTimeout(700);await shot(page,'panel-1440',{fullPage:true});pass('Panel de control con ventas, gráfico, clientes frecuentes y rendimiento real');
  await click('[data-view="summary"]');assert.match(await page.locator('#summary-content').innerText(),/3.930/);const commissionDownload=page.waitForEvent('download');await click('#export-commissions');assert.match(fs.readFileSync(await (await commissionDownload).path(),'utf8'),/Mateo/);pass('Comisiones agrupadas por mecánico y exportación CSV');
  await click('[data-view="orders"]');await page.locator('#order-status-filter').selectOption('cancelled');assert.equal(await page.locator('#orders-list [data-detail]').count(),1);await page.locator('#order-status-filter').selectOption('active');await page.locator('#order-employee').selectOption(profiles[1].id);assert.equal(await page.locator('#orders-list [data-detail]').count(),0);await page.locator('#order-employee').selectOption('all');await page.locator('#order-payment').selectOption('Tarjeta');assert.equal(await page.locator('#orders-list [data-detail]').count(),0);await page.locator('#order-payment').selectOption('all');await page.locator('#order-status-filter').selectOption('all');pass('Filtros de ventas por estado, empleado y método de pago');
  await click('[data-view="finance"]');await click('#new-expense');await page.locator('#expense-form [name=description]').fill('Herramientas del taller');await page.locator('[name=category]').selectOption('Herramientas');await page.locator('[name=amount]').fill('125.50');await click('[form="expense-form"]');await page.waitForFunction(()=>!document.querySelector('#modal').open);assert.equal(expenses.length,1);assert.match(await page.locator('#finance-content').innerText(),/15.594,50/);await shot(page,'gastos-1440',{fullPage:true});await click('[data-cancel-expense]');await click('#confirm-action');await page.waitForFunction(()=>!document.querySelector('#modal').open);assert.equal(expenses[0].status,'cancelled');assert.match(await page.locator('#finance-content').innerText(),/15.720/);pass('Gastos administrativos y resultado; anulación sin borrar historial');
  await click('[data-view="audit"]');assert.match(await page.locator('#audit-content').innerText(),/Gasto registrado/);await page.locator('#audit-search').fill('Servicio registrado por error');assert.match(await page.locator('#audit-content').innerText(),/Venta anulada/);assert.doesNotMatch(await page.locator('#audit-content').innerText(),/Gasto registrado/);pass('Actividad administrativa con búsqueda y motivo de anulación');
  // El panel del administrador muestra actividad real y solo registros autorizados
  await click('[data-view="dashboard"]');assert.match(await page.locator('#dashboard-content').innerText(),/Actividad reciente/);assert.match(await page.locator('#dashboard-content .timeline').innerText(),/Venta anulada|Gasto/);pass('Actividad reciente del panel procede de registros reales de auditoría');

  // ─── Personalizar el inicio: mover módulos y guardar el orden por cuenta ───
  {
    await click('[data-view="dashboard"]');await page.waitForTimeout(500);
    const order=()=>page.evaluate(()=>[...document.querySelectorAll('#module-grid>.module')].map(m=>m.dataset.module));
    const layoutKeys=()=>page.evaluate(()=>Object.keys(localStorage).filter(k=>k.startsWith('bennys-home-layout')));
    const adminDefault=['kpis','chart','clients','recent','activity','payments','team'];
    assert.deepEqual(await order(),adminDefault,'Orden original del administrador');
    assert.equal(await page.locator('.module-grip').first().isVisible(),false,'Las asas solo aparecen al personalizar');
    await page.locator('#layout-edit').click();assert.equal(await page.locator('#layout-bar').isVisible(),true);assert.equal(await page.locator('#layout-edit').getAttribute('aria-pressed'),'true');
    // Teclado: flecha sobre el asa
    await page.locator('[data-module="clients"] .module-grip').focus();await page.keyboard.press('ArrowUp');
    assert.deepEqual((await order()).slice(0,3),['kpis','clients','chart']);assert.equal(await page.evaluate(()=>document.activeElement.classList.contains('module-grip')),true,'El foco se conserva en el asa');
    assert.match(await page.locator('#layout-live').innerText(),/posición 2 de 7/);
    // Botones Mover antes / después
    await page.locator('[data-module="team"] .module-up').click();assert.deepEqual((await order()).slice(-2),['team','payments']);
    await page.locator('[data-module="team"] .module-down').click();assert.deepEqual((await order()).slice(-2),['payments','team']);
    // Arrastrar con el ratón por el asa
    {
      const grip=await page.locator('[data-module="recent"] .module-grip').boundingBox(),target=await page.locator('[data-module="kpis"]').boundingBox();
      await page.mouse.move(grip.x+grip.width/2,grip.y+grip.height/2);await page.mouse.down();await page.mouse.move(target.x+target.width/2,target.y+12,{steps:10});
      assert.equal(await page.locator('.drag-chip').count(),1,'Se muestra la etiqueta de arrastre');assert.ok(await page.locator('.module.drop-before').count()===1,'Se marca dónde caerá el módulo');
      await page.mouse.up();assert.equal(await page.locator('.drag-chip').count(),0);
      assert.equal((await order())[0],'recent','El módulo arrastrado queda antes del destino');
    }
    // Cancelar descarta; nada se guarda
    await page.locator('#layout-cancel').click();assert.deepEqual(await order(),adminDefault);assert.equal(await page.locator('#layout-bar').isVisible(),false);assert.equal((await layoutKeys()).length,0);assert.equal(profiles[0].metadata?.bennys_home_layout,undefined);
    // Una sincronización durante la edición no deshace los cambios
    await page.locator('#layout-edit').click();await page.locator('[data-module="payments"] .module-up').click();
    await page.locator('#sync-button').click();await page.waitForTimeout(900);
    assert.deepEqual((await order()).slice(3,6),['recent','payments','activity']);assert.ok(await page.locator('.module-tools').count()>=7,'Las asas siguen tras sincronizar');
    // Guardar: cuenta + este equipo
    await page.locator('#layout-save').click();await page.waitForFunction(()=>/guardado/.test(document.querySelector('#toast').textContent));
    assert.match(await page.locator('#toast').innerText(),/guardado en tu cuenta/);
    const saved=['kpis','chart','clients','recent','payments','activity','team'];
    assert.deepEqual(await order(),saved);assert.equal(await page.locator('#layout-bar').isVisible(),false);assert.equal(await page.locator('.module-grip').first().isVisible(),false);
    assert.deepEqual(profiles[0].metadata.bennys_home_layout.order,saved,'El orden queda en los metadatos de la cuenta');assert.equal((await layoutKeys()).length,1);
    // Persistencia: recarga, y desde otro equipo (almacenamiento limpio) con la misma cuenta
    await page.reload();await page.waitForFunction(()=>!document.body.classList.contains('locked'));await page.waitForSelector('#module-grid');assert.deepEqual(await order(),saved,'El orden sobrevive a la recarga');
    {
      const other=await browser.newContext({viewport:{width:1440,height:900},locale:'es-MX'});await mock.install(other);const p2=await other.newPage();
      const login=async(user)=>{await p2.goto(ORIGIN);await p2.locator('#auth-form').waitFor();await p2.locator('[name=username]').fill(user);await p2.locator('[name=password]').fill('fixture-password');await p2.locator('[form="auth-form"]').click({force:true});await p2.waitForFunction(()=>!document.body.classList.contains('locked'));await p2.waitForSelector('#module-grid');return p2.evaluate(()=>[...document.querySelectorAll('#module-grid>.module')].map(m=>m.dataset.module));};
      assert.deepEqual(await login('mateo'),saved,'El orden acompaña a la cuenta en otro equipo');
      // Otra persona no se ve afectada y conserva el orden original de su rol
      await p2.locator('#account-button').click();await p2.locator('#account-signout').click();await p2.locator('#auth-form').waitFor();
      assert.deepEqual(await login('alex'),['kpis','chart','clients','recent','mine','payments'],'Otra cuenta mantiene el orden original');
      assert.equal(await p2.locator('#layout-edit').isVisible(),true);assert.equal(await p2.locator('[data-module="activity"],[data-module="team"]').count(),0,'El empleado no recibe módulos de administración');
      await other.close();
    }
    // Restaurar el orden original elimina la preferencia
    await page.locator('#layout-edit').click();await page.locator('#layout-reset').click();assert.deepEqual(await order(),adminDefault);await page.locator('#layout-save').click();await page.waitForFunction(()=>/Orden original/.test(document.querySelector('#toast').textContent));
    assert.equal(profiles[0].metadata?.bennys_home_layout,undefined);assert.equal((await layoutKeys()).length,0);assert.deepEqual(await order(),adminDefault);
    // Accesible: sin salir del módulo no se pierde el trabajo; cambiar de vista cancela la edición
    await page.locator('#layout-edit').click();await page.locator('[data-module="chart"] .module-down').click();await click('[data-view="orders"]');await click('[data-view="dashboard"]');assert.deepEqual(await order(),adminDefault,'Salir de la vista descarta los cambios sin guardar');assert.equal(await page.locator('#layout-bar').isVisible(),false);
  }
  pass('Personalizar el inicio: teclado, botones y arrastre; cancelar, guardar por cuenta, recarga, otro equipo, otra persona y restaurar');

  // ─── Contraste y cristal en el panel ───
  await page.setViewportSize({width:1440,height:900});await click('[data-view="dashboard"]');await page.waitForTimeout(900);
  assert.doesNotMatch(await page.locator('body').innerText(),forbidden);
  await expectContrast('navegación inactiva',page.locator('.sidebar nav .nav-item:not(.active)').first());
  await expectContrast('navegación activa',page.locator('.sidebar .nav-item.active'));
  await expectContrast('etiqueta de métrica',page.locator('.stat-label').first());
  await expectContrast('cifra de métrica',page.locator('.stat strong').first(),3);
  await expectContrast('nota de métrica',page.locator('.stat small').first());
  await expectContrast('encabezado de tabla',page.locator('.compact-table th').first());
  await expectContrast('celda de tabla',page.locator('.compact-table td').nth(1));
  await expectContrast('enlace de panel',page.locator('.panel-head .text-button').first());
  await expectContrast('estado Cobrado',page.locator('.status-pill').first());
  await expectContrast('subtítulo de panel',page.locator('.panel-head p').first());
  await expectContrast('subtítulo de cabecera',page.locator('#dashboard-greeting'));
  const glass=await page.evaluate(()=>({side:getComputedStyle(document.querySelector('.sidebar')).backgroundColor,panel:getComputedStyle(document.querySelector('.panel')).backgroundColor,filter:getComputedStyle(document.querySelector('.sidebar')).backdropFilter}));
  const alpha=c=>Number(c.match(/[\d.]+/g)[3]??1);
  assert.ok(alpha(glass.side)>=0.55&&alpha(glass.side)<=0.75,'Barra lateral: cristal ambiental');assert.ok(alpha(glass.panel)>alpha(glass.side),'Las superficies de datos son más opacas que el ambiente');assert.ok(glass.filter.includes('blur'));
  pass('Contraste del panel ≥ 4,5:1 y cristal con más opacidad en datos que en ambiente');
  assert.equal(await page.locator('.sidebar .nav-item.active').getAttribute('aria-current'),'page');
  await click('#signout-button');await page.locator('#auth-form').waitFor();await signIn('admin@example.invalid');pass('Cierre de sesión desde la barra lateral y navegación con aria-current');

  // ─── Tamaños: sin desbordes y objetivos táctiles cómodos ───
  await click('[data-view="calculator"]');await click('#new-order');if(await page.locator('#modal[open] #confirm-action').count())await click('#modal[open] #confirm-action');
  for(const width of [1920,1440,1024,768,760,390,360]){
    await page.setViewportSize({width,height:width<760?844:1100});await page.waitForTimeout(300);
    for(const view of ['dashboard','calculator','orders','clients','catalog','summary','finance','team','audit']){
      const t0=Date.now();try{await click(`[data-view="${view}"]`);}catch(error){const state=await page.evaluate(()=>({clase:document.body.className,x:document.querySelector('.sidebar').getBoundingClientRect().x,vw:innerWidth,sw:document.documentElement.scrollWidth,activa:document.querySelector('.view.active')?.id,log:window.__log.slice(-6)}));await shot(page,'FALLO-'+view+'-'+width);throw new Error(`No se pudo abrir ${view} a ${width}px: ${JSON.stringify(state)} ${error.message.split('\n').filter(l=>/intercepts|outside|not visible|not stable/.test(l)).slice(-4).join(' | ')}`);}if(process.env.DEBUG_TIMING)console.log('  vista',view,width,Date.now()-t0,'ms');await page.evaluate(()=>window.scrollTo(0,0));await page.waitForTimeout(80);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`Desborde en ${view} a ${width}`);
    }
    await click('[data-view="calculator"]');await page.evaluate(()=>window.scrollTo(0,0));
    if([1440,390].includes(width))await shot(page,'venta-'+width,{fullPage:true});
  }
  pass('Diseño sin desbordamientos de 360 a 1920 px en todas las vistas');
  await page.setViewportSize({width:390,height:844});await click('[data-view="dashboard"]');await page.waitForTimeout(700);await shot(page,'panel-390',{fullPage:true});
  // Personalizar en móvil: botones táctiles, sin desbordes
  await page.locator('#layout-edit').click();await page.waitForTimeout(300);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'Sin desborde al personalizar en móvil');
  {const grip=await page.locator('[data-module="chart"] .module-grip').boundingBox(),down=await page.locator('[data-module="chart"] .module-down').boundingBox();assert.ok(grip.width>=36&&grip.height>=36&&down.width>=36&&down.height>=36,'Asa y botones táctiles de al menos 36 px');}
  await page.locator('[data-module="chart"] .module-down').click();assert.equal((await page.evaluate(()=>[...document.querySelectorAll('#module-grid>.module')].map(m=>m.dataset.module)))[1],'clients','Mover con botones en móvil');
  await shot(page,'inicio-personalizar-390',{fullPage:false});
  await page.locator('#layout-cancel').click();
  for(const [label,selector,min] of [['navegación inferior','.mobile-nav button',44],['botón principal de la cabecera','.garage-hero .primary',40],['menú','#menu-toggle',36],['cuenta','#account-button',36]]){
    const box=await page.locator(selector).first().boundingBox();assert.ok(box.height>=min-0.5&&box.width>=36,`Objetivo táctil pequeño: ${label} (${Math.round(box.width)}×${Math.round(box.height)})`);
  }
  await click('[data-view="calculator"]');await click('#new-order');if(await page.locator('#modal[open] #confirm-action').count())await click('#modal[open] #confirm-action');
  const addBox=await page.locator('.add-service').first().boundingBox();assert.ok(addBox.width>=36&&addBox.height>=36,'Botón agregar táctil');
  await click('[data-view="orders"]');
  assert.equal(await page.locator('#filters-toggle').isVisible(),true,'Botón Filtros en móvil');assert.equal(await page.locator('#order-status-filter').isVisible(),false,'Los filtros comienzan plegados en móvil');
  await shot(page,'ventas-390',{fullPage:true});
  await page.locator('#filters-toggle').click();assert.equal(await page.locator('#order-status-filter').isVisible(),true);assert.equal(await page.locator('#filters-toggle').getAttribute('aria-expanded'),'true');
  await page.locator('#order-status-filter').selectOption('cancelled');assert.equal(await page.locator('#filters-count').innerText(),'1','El botón Filtros indica cuántos filtros hay activos');
  await page.locator('#order-status-filter').selectOption('all');assert.equal(await page.locator('#filters-count').isVisible(),false);await page.locator('#filters-toggle').click();
  await click('[data-view="clients"]');await page.evaluate(()=>document.querySelector('#toast').classList.remove('visible'));await shot(page,'clientes-movil',{fullPage:true});
  await page.locator('#menu-toggle').click();await page.waitForTimeout(350);await shot(page,'menu-390');assert.equal(await page.locator('.mobile-nav').evaluate(el=>el.getBoundingClientRect().top>=innerHeight-1),true,'La barra inferior se oculta con el menú abierto');await page.locator('#nav-backdrop').click({position:{x:370,y:400}});
  pass('Móvil: tablas como tarjetas, objetivos táctiles y menú lateral sin solapes');
  await page.setViewportSize({width:1440,height:1100});await click('[data-view="clients"]');await page.locator('#client-search').fill('');await shot(page,'clientes-escritorio',{fullPage:true});

  // ─── Movimiento reducido en el panel ───
  await click('[data-view="calculator"]');await click('#new-order');if(await page.locator('#modal[open] #confirm-action').count())await click('#modal[open] #confirm-action');
  await page.emulateMedia({reducedMotion:'reduce'});await click('[data-view="dashboard"]');assert.equal(await page.locator('.stat').first().evaluate(el=>getComputedStyle(el).animationName),'none');assert.equal(await page.locator('.ambient-icon').isDisabled(),true);assert.equal(await page.locator('.ambient-fog').first().evaluate(el=>getComputedStyle(el).animationName),'none');assert.equal(await page.locator('.chart-bar').first().evaluate(el=>getComputedStyle(el).animationName),'none');pass('Animaciones respetan la preferencia de movimiento reducido');
  await page.emulateMedia({reducedMotion:'no-preference'});

  // ─── Solicitud pendiente y activación ───
  await signOut();await click('#auth-signup-tab');await page.locator('#auth-form [name=name]').fill('Solicitante');await page.locator('#auth-form [name=username]').fill('solicitante');await page.locator('#auth-form [name=password]').fill('fixture-password');await click('[form="auth-form"]');await page.locator('#auth-message').filter({hasText:'Solicitud enviada'}).waitFor();assert.equal(profiles[4].active,false);await click('#auth-login-tab');await signIn('solicitante@fixture.invalid');assert.equal(await page.locator('.app-shell').isVisible(),false);assert.match(await page.locator('#pending-account').innerText(),/pendiente/);await signOut();await signIn('admin@example.invalid');await click('[data-view="team"]');await click('[data-employee="55555555-5555-4555-8555-555555555555"]');await page.locator('[name=active]').selectOption('true');await click('[form="employee-form"]');await page.waitForFunction(()=>!document.querySelector('#modal').open);assert.equal(profiles[4].active,true);pass('Solicitud por usuario pendiente hasta aprobación de administración');
  await signOut();
  profiles[2].active=false;flags.hasAdmin=false;await signIn('pending@example.invalid');await page.locator('#claim-form').waitFor();await page.locator('[name=code]').fill('incorrect-code');await click('[form="claim-form"]');await page.locator('#claim-message').filter({hasText:'Código inicial no válido'}).waitFor();await page.locator('[name=code]').fill('fixture-initial-admin-code');await click('[form="claim-form"]');await page.waitForFunction(()=>!document.querySelector('#modal').open);assert.equal(profiles[2].role,'admin');pass('Activación inicial protegida por código');
  assert.deepEqual(errors,[]);pass('Sin errores JavaScript ni de consola');
  fs.writeFileSync(path.join(__dirname,'browser-results.json'),JSON.stringify({checks,errors},null,2));await browser.close();await glBrowser.close();
})().catch(e=>{console.error(e);process.exit(1);});
