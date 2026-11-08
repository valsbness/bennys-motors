import {icon,esc} from './icons.js';

// Módulos del panel de inicio. `span` es el ancho en una cuadrícula de 12 columnas (en pantallas estrechas todos ocupan el ancho completo).
// El orden de esta lista es el orden original; cada persona puede reordenarlos y su orden se guarda en su cuenta.
export const HOME_MODULES=Object.freeze([
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
export const homeModuleMeta=id=>HOME_META[id];

/**
 * Orden personal de los módulos del inicio.
 *  - Se guarda por usuario: en los metadatos de su cuenta de Supabase Auth (acompaña a la persona en cualquier equipo; no requiere SQL)
 *    y en este navegador como respaldo. Si ambos existen, gana el más reciente.
 *  - Solo se guarda cuando la persona pulsa «Guardar mi orden». Quien no personaliza ve siempre el orden original.
 *  - El modo de edición admite arrastrar por el asa (ratón y táctil) y también flechas del teclado y botones Mover antes / después.
 */
export class HomeLayout{
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
