import {esc,icon} from './icons.js';

const duration=seconds=>{
  const total=Math.max(0,Math.floor(Number(seconds)||0)),hours=Math.floor(total/3600),minutes=Math.floor(total%3600/60),secs=total%60;
  return [hours,minutes,secs].map(v=>String(v).padStart(2,'0')).join(':');
};
const dateTime=value=>value?new Intl.DateTimeFormat('es-MX',{dateStyle:'medium',timeStyle:'short'}).format(new Date(value)):'—';
const statusLabel=value=>value==='active'?'En jornada':value==='paused'?'En pausa':'Finalizado';

export class ClockPanel{
  constructor(options){Object.assign(this,options);this.promptedFor=null;this.tick=setInterval(()=>{if(this.getCloud()?.isActive&&document.getElementById('view-clock')?.classList.contains('active'))this.renderTimer();},1000);}
  get cloud(){return this.getCloud();}
  el(id){return document.getElementById(id);}
  worked(session){
    const saved=Number(session?.accumulated_seconds)||0;
    return saved+(session?.status==='active'&&session.segment_started_at?Math.max(0,Math.floor((Date.now()-Date.parse(session.segment_started_at))/1000)):0);
  }
  notifyIdle(){
    const session=this.cloud?.clockStatus;
    if(session?.status==='active'){this.notifiedSession=null;return;}
    if(session?.status!=='paused'||session.pause_reason!=='inactivity'||this.notifiedSession===session.id)return;
    if(this.el('view-clock')?.classList.contains('active')||this.el('modal')?.open)return;
    this.notifiedSession=session.id;
    this.modal('Aviso de inactividad',`<div class="clock-idle-alert" role="alert"><strong>${icon('alert')} Tu fichaje se pausó automáticamente</strong><p>Pasó una hora sin registrar ventas ni compras. Si sigues esperando clientes, vuelve a ficharte. Si olvidaste desficharte, puedes finalizar tu jornada ahora.</p></div>`,`<button class="button secondary" data-close>Ahora no</button><button class="button secondary" id="clock-alert-finish">Desficharme ahora</button><button class="button primary" id="clock-alert-resume">Volver a ficharme</button>`);
    this.el('clock-alert-resume').onclick=()=>{this.el('modal').close();this.action('resume');};
    this.el('clock-alert-finish').onclick=()=>{this.el('modal').close();this.action('finish');};
  }
  recommend(){
    if(!this.cloud?.clockReady||this.cloud.clockStatus||this.promptedFor===this.cloud.user?.id||!this.modal)return;
    this.promptedFor=this.cloud.user?.id;
    this.modal('¿Vas a trabajar hoy?',`<div class="clock-recommend"><span class="clock-icon">${icon('clock')}</span><p>Hola, <strong>${esc(this.cloud.profile?.display_name||'mecánico')}</strong>. Si vas a comenzar tu jornada en Benny’s Motors, recuerda ficharte para registrar tu tiempo.</p><small>El fichaje solo cuenta mientras estés en jornada. Si no hay ventas o compras registradas durante una hora, se pausará y te avisará.</small></div>`,`<button class="button secondary" data-close>Ahora no</button><button class="button primary" id="clock-recommend-start">Ir a fichaje</button>`);
    this.el('clock-recommend-start').onclick=()=>{this.el('modal').close();this.navigate('clock');};
  }
  render(){
    const root=this.el('clock-content');if(!root)return;
    if(!this.cloud?.isActive){root.innerHTML='';return;}
    if(!this.cloud.clockReady){root.innerHTML=`<div class="empty-state"><span>${icon('lock')}</span><h2>Fichaje pendiente de configuración</h2><p>Administración debe instalar la actualización de fichajes en Supabase para activar el control de jornadas.</p></div>`;return;}
    const session=this.cloud.clockStatus,seconds=this.worked(session),paused=session?.status==='paused',active=session?.status==='active';
    const own=session?`<section class="clock-current panel"><div class="clock-current-head"><div><span class="clock-status-dot ${paused?'paused':active?'active':''}"></span><span class="eyebrow">${paused?'JORNADA EN PAUSA':active?'JORNADA ACTIVA':'ÚLTIMO FICHAJE'}</span><h2>${esc(this.cloud.profile?.display_name||'Mi jornada')}</h2></div><strong class="clock-timer" id="clock-timer">${duration(seconds)}</strong></div><div class="clock-meta"><span>Entrada<strong>${dateTime(session.started_at)}</strong></span><span>${paused?'Pausado desde':'Última actividad'}<strong>${dateTime(paused?session.paused_at:session.last_activity_at)}</strong></span>${session.ended_at?`<span>Salida<strong>${dateTime(session.ended_at)}</strong></span>`:''}</div>${paused?`<div class="clock-idle-alert" role="alert"><strong>${icon('alert')} Aviso de inactividad</strong><p>No se registraron ventas ni compras durante una hora, por eso el contador se pausó automáticamente. Si sigues esperando clientes, vuelve a ficharte. Si olvidaste desficharte, puedes finalizar ahora.</p><div class="clock-actions"><button class="button primary" id="clock-resume">Volver a ficharme</button><button class="button secondary" id="clock-finish">Desficharme ahora</button></div></div>`:active?`<div class="clock-active-note">El tiempo se cuenta automáticamente. Cada venta o compra registrada actualiza tu actividad.</div><div class="clock-actions"><button class="button secondary" id="clock-finish">Desficharme</button></div>`:`<div class="clock-active-note">Tu último turno quedó guardado. Puedes iniciar una nueva jornada cuando vuelvas a trabajar.</div><div class="clock-actions"><button class="button primary" id="clock-start">Ficharme</button></div>`}</section>`:`<section class="clock-current panel"><div class="clock-current-head"><div><span class="clock-status-dot"></span><span class="eyebrow">SIN FICHAJE ACTIVO</span><h2>¿Vas a comenzar tu jornada?</h2><p>Registra tu entrada antes de empezar a trabajar para llevar el control de tus horas.</p></div><span class="clock-icon">${icon('clock')}</span></div><div class="clock-actions"><button class="button primary" id="clock-start">Ficharme</button></div></section>`;
    const sessions=[...(this.cloud.clockSessions||[])].sort((a,b)=>Date.parse(b.started_at)-Date.parse(a.started_at));
    const history=sessions.length?`<section class="panel clock-history"><div class="panel-head"><div><h2>${this.cloud.isAdmin?'Registro de fichajes del equipo':'Mi historial de fichajes'}</h2><p>Entradas, pausas, salidas y tiempo trabajado</p></div><span>${sessions.length} registros</span></div><div class="table-panel"><table><thead><tr>${this.cloud.isAdmin?'<th>Personal</th>':''}<th>Entrada</th><th>Última actividad</th><th>Salida / pausa</th><th>Tiempo trabajado</th><th>Estado</th></tr></thead><tbody>${sessions.slice(0,100).map(row=>`<tr>${this.cloud.isAdmin?`<td><strong>${esc(this.cloud.team.find(p=>p.id===row.employee_id)?.display_name||'Personal')}</strong></td>`:''}<td>${dateTime(row.started_at)}</td><td>${dateTime(row.last_activity_at)}</td><td>${dateTime(row.ended_at||row.paused_at)}</td><td><strong>${duration(this.worked(row))}</strong></td><td><span class="status-pill ${row.status==='paused'?'cancelled':''}">${statusLabel(row.status)}</span></td></tr>`).join('')}</tbody></table></div></section>`:'<div class="cash-empty">Todavía no hay jornadas guardadas.</div>';
    root.innerHTML=own+history;
    this.el('clock-start')?.addEventListener('click',()=>this.action('start'));
    this.el('clock-resume')?.addEventListener('click',()=>this.action('resume'));
    this.el('clock-finish')?.addEventListener('click',()=>this.action('finish'));
    root.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));
  }
  renderTimer(){const node=this.el('clock-timer'),session=this.cloud?.clockStatus;if(node&&session?.status==='active')node.textContent=duration(this.worked(session));}
  async action(action){
    const buttons=['clock-start','clock-resume','clock-finish'].map(id=>this.el(id)).filter(Boolean);buttons.forEach(button=>button.disabled=true);
    try{await this.cloud.clockAction(action);await this.cloud.load();this.render();this.toast(action==='finish'?'Jornada finalizada y guardada.':action==='resume'?'Fichaje reanudado.':'Jornada iniciada.');}
    catch(error){buttons.forEach(button=>button.disabled=false);this.toast(this.errorText(error));}
  }
}
