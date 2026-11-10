import {euro} from './core.js';
import {esc,icon} from './icons.js';

const dayKey=value=>{const d=new Date(value);return Number.isNaN(d.getTime())?'':[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');};
const money=value=>euro(Number(value)||0);
const dateText=value=>new Intl.DateTimeFormat('es-MX',{dateStyle:'medium',timeStyle:'short'}).format(new Date(value));
const dayText=value=>new Intl.DateTimeFormat('es-MX',{dateStyle:'full'}).format(new Date(value+'T12:00:00'));
const monthText=value=>new Intl.DateTimeFormat('es-MX',{month:'long',year:'numeric'}).format(value);

export class CashPanel{
  constructor(options){Object.assign(this,options);const now=new Date();this.month=new Date(now.getFullYear(),now.getMonth(),1);this.selected=dayKey(now);}
  get cloud(){return this.getCloud();}
  get orders(){return this.getState().orders||[];}
  get expenses(){return this.cloud?.expenses||[];}
  get closings(){return this.cloud?.cashClosings||[];}
  actor(id){return this.cloud?.team?.find(p=>p.id===id)?.display_name||'Administración';}
  events(){return [
    ...this.orders.map(o=>({kind:'sale',date:o.date,actor:o.mechanic||this.actor(o.employeeId),client:o.client,label:o.folio||'Venta',amount:Number(o.totals?.total)||0,status:o.status,detail:['Cliente: '+(o.client||'Sin nombre'),(o.items||[]).map(i=>i.name+' × '+i.qty).join(', ')].filter(Boolean).join(' · ')})),
    ...this.expenses.map(e=>({kind:'purchase',date:e.created_at,actor:this.actor(e.created_by),label:e.description,amount:Number(e.amount)||0,status:e.status,detail:e.category})),
    ...this.closings.map(c=>({kind:'closing',date:c.closed_at,actor:this.actor(c.closed_by),label:'Cierre de caja',amount:Number(c.cash_amount)||0,status:'closed',detail:c.notes||'Cierre administrativo'}))
  ].sort((a,b)=>Date.parse(b.date)-Date.parse(a.date));}
  render(){
    const root=this.el('cash-content');if(!root)return;
    if(!this.cloud?.isAdmin){root.innerHTML='';return;}
    if(!this.cloud.proReady){root.innerHTML='<div class="empty-state"><span>'+icon('lock')+'</span><h2>Configuración pendiente</h2><p>El administrador debe aplicar la actualización de cierres de caja en Supabase.</p></div>';return;}
    const last=[...this.closings].sort((a,b)=>Date.parse(b.closed_at)-Date.parse(a.closed_at))[0];
    const start=last?.closed_at?Date.parse(last.closed_at):0;
    const activeOrders=this.orders.filter(o=>o.status==='active'&&Date.parse(o.date)>start);
    const activeExpenses=this.expenses.filter(e=>e.status==='active'&&Date.parse(e.created_at)>start);
    const sales=activeOrders.reduce((n,o)=>n+(Number(o.totals?.total)||0),0);
    const purchases=activeExpenses.reduce((n,e)=>n+(Number(e.amount)||0),0);
    const first=new Date(this.month.getFullYear(),this.month.getMonth(),1),offset=(first.getDay()+6)%7,days=new Date(this.month.getFullYear(),this.month.getMonth()+1,0).getDate();
    const cells=Array.from({length:offset},()=>'<span class="cash-day blank"></span>');
    for(let day=1;day<=days;day++){
      const key=dayKey(new Date(this.month.getFullYear(),this.month.getMonth(),day,12)),items=this.events().filter(e=>dayKey(e.date)===key);
      cells.push('<button type="button" class="cash-day '+(key===this.selected?'selected':'')+(items.length?' has-events':'')+'" data-cash-day="'+key+'"><span>'+day+'</span>'+(items.length?'<i>'+items.length+'</i>':'')+'</button>');
    }
    const selected=this.events().filter(e=>dayKey(e.date)===this.selected);
    root.innerHTML=`<div class="cash-summary-grid">
      <article class="cash-metric"><span>Período actual</span><strong>${last?'Desde '+dateText(last.closed_at):'Desde el inicio del historial'}</strong><small>Se reinicia únicamente al cerrar manualmente</small></article>
      <article class="cash-metric"><span>Ventas del período</span><strong>${money(sales)}</strong><small>${activeOrders.length} ventas cobradas</small></article>
      <article class="cash-metric"><span>Compras y gastos</span><strong>${money(purchases)}</strong><small>${activeExpenses.length} movimientos registrados</small></article>
      <article class="cash-metric"><span>Movimientos netos</span><strong>${money(sales-purchases)}</strong><small>No sustituye el conteo real de caja</small></article>
    </div>
    <section class="cash-period-bar"><div><span class="cash-live-dot"></span><div><strong>Caja abierta</strong><small>El monto real lo deciden ustedes al cerrar</small></div></div><button class="button primary" id="cash-close-button"><span data-icon="lock"></span>Cerrar caja</button></section>
    <div class="cash-layout"><section class="cash-calendar panel"><div class="panel-head"><button class="icon-button" id="cash-prev" aria-label="Mes anterior">${icon('chevron-left')}</button><h2>${monthText(this.month)}</h2><button class="icon-button" id="cash-next" aria-label="Mes siguiente">${icon('chevron-right')}</button></div><div class="cash-weekdays">${['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'].map(d=>'<span>'+d+'</span>').join('')}</div><div class="cash-days">${cells.join('')}</div><p class="panel-note">Selecciona un día para consultar ventas, compras y cierres registrados.</p></section>
    <section class="cash-day-detail panel"><div class="panel-head"><div><h2>${dayText(this.selected)}</h2><p>${selected.length} movimientos registrados</p></div></div><div class="cash-events">${selected.length?selected.map(e=>'<article class="cash-event '+e.kind+'"><span class="cash-event-icon">'+icon(e.kind==='sale'?'receipt':e.kind==='purchase'?'shopping-bag':'lock')+'</span><div><strong>'+esc(e.label)+'</strong><p>'+esc(e.detail||'')+'</p><small>'+esc(e.actor)+' · '+dateText(e.date)+'</small></div><b>'+money(e.amount)+'</b></article>').join(''):'<div class="cash-empty">No hay movimientos registrados para este día.</div>'}</div></section></div>`;
    this.el('cash-prev').onclick=()=>{this.month=new Date(this.month.getFullYear(),this.month.getMonth()-1,1);this.render();};
    this.el('cash-next').onclick=()=>{this.month=new Date(this.month.getFullYear(),this.month.getMonth()+1,1);this.render();};
    root.querySelectorAll('[data-cash-day]').forEach(b=>b.onclick=()=>{this.selected=b.dataset.cashDay;this.render();});
    this.el('cash-close-button').onclick=()=>this.close();
    root.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));
  }
  el(id){return document.getElementById(id);}
  close(){
    if(!this.cloud?.isAdmin||!this.cloud.proReady)return;
    this.modal('Cerrar caja',`<form id="cash-close-form"><div class="cash-close-explain"><strong>El cierre es manual.</strong><p>El sistema guardará las ventas, compras y personas del período actual. Después de confirmar, el siguiente período comenzará desde $0.</p></div><label>Monto real que hay en caja ($)<input name="cash_amount" type="number" min="0" max="100000000" step="0.01" required placeholder="Escribe el monto contado"></label><label>Nota del cierre (opcional)<textarea name="notes" maxlength="500" rows="3" placeholder="Observaciones o reparto realizado…"></textarea></label><div class="form-message" id="cash-close-message" role="alert"></div></form>`,`<button class="button secondary" data-close>Cancelar</button><button class="button primary" type="submit" form="cash-close-form">Confirmar cierre</button>`);
    this.el('cash-close-form').onsubmit=async e=>{e.preventDefault();const form=e.currentTarget,button=document.querySelector('[form="cash-close-form"]');if(button.disabled)return;const data=new FormData(form),amount=Number(data.get('cash_amount')),notes=String(data.get('notes')||'').trim();if(!Number.isFinite(amount)||amount<0||amount>100000000){this.el('cash-close-message').textContent='Escribe un monto válido.';return;}button.disabled=true;try{await this.cloud.closeCash({id:crypto.randomUUID(),cashAmount:amount,notes});await this.cloud.load();this.el('modal').close();this.toast('Cierre guardado. La nueva caja comienza desde $0.');this.render();}catch(error){this.el('cash-close-message').textContent=this.errorText(error);button.disabled=false;}};
  }
}
