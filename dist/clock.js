import {esc,icon} from './icons.js';

const duration=seconds=>{
  const total=Math.max(0,Math.floor(Number(seconds)||0)),hours=Math.floor(total/3600),minutes=Math.floor(total%3600/60),secs=total%60;
  return [hours,minutes,secs].map(v=>String(v).padStart(2,'0')).join(':');
};
const dateTime=value=>value?new Intl.DateTimeFormat('es-PA',{dateStyle:'medium',timeStyle:'short',timeZone:'America/Panama'}).format(new Date(value)):'—';
const statusLabel=value=>value==='active'?'En jornada':value==='paused'?'En pausa':'Finalizado';

export class ClockPanel{
  constructor(options){Object.assign(this,options);this.promptedFor=null;this.tick=setInterval(()=>{if(this.getCloud()?.isActive){this.renderTimer();this.renderQuickTimer();}},1000);}
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
    if(!this.cloud?.isActive){root.innerHTML='';this.syncQuick();return;}
    if(!this.cloud.clockReady){root.innerHTML=`<div class="empty-state"><span>${icon('lock')}</span><h2>Fichaje pendiente de configuración</h2><p>Administración debe instalar la actualización de fichajes en Supabase para activar el control de jornadas.</p></div>`;this.syncQuick();return;}
    const session=this.cloud.clockStatus,seconds=this.worked(session),paused=session?.status==='paused',active=session?.status==='active';
    const own=session?`<section class="clock-current clock-hero panel"><div class="clock-current-head"><div><span class="clock-status-dot ${paused?'paused':active?'active':''}"></span><span class="eyebrow">${paused?'JORNADA EN PAUSA':active?'JORNADA ACTIVA':'ÚLTIMO FICHAJE'}</span><h2>${esc(this.cloud.profile?.display_name||'Mi jornada')}</h2><p>${paused?'Tu tiempo está detenido hasta que reanudes.':active?'Tu jornada está en marcha.':'Tu último turno quedó guardado.'}</p></div><div class="clock-timer-wrap"><small>TIEMPO TRABAJADO</small><strong class="clock-timer" id="clock-timer">${duration(seconds)}</strong></div></div><div class="clock-meta"><span>Entrada<strong>${dateTime(session.started_at)}</strong></span><span>${paused?'Pausado desde':'Última actividad'}<strong>${dateTime(paused?session.paused_at:session.last_activity_at)}</strong></span>${session.ended_at?`<span>Salida<strong>${dateTime(session.ended_at)}</strong></span>`:''}</div>${paused?`<div class="clock-idle-alert" role="alert"><strong>${icon('alert')} Aviso de inactividad</strong><p>No se registraron ventas ni compras durante una hora. Si sigues esperando clientes, vuelve a ficharte. Si olvidaste desficharte, finaliza tu jornada.</p><div class="clock-actions"><button class="button primary" id="clock-resume">Volver a ficharme</button><button class="button secondary" id="clock-finish">Desficharme ahora</button></div></div>`:active?`<div class="clock-active-note">El contador se actualiza con las ventas y compras registradas. Si pasa una hora sin actividad, se pausará automáticamente.</div><div class="clock-actions"><button class="button secondary" id="clock-finish">Desficharme</button></div>`:`<div class="clock-active-note">Tu último turno está guardado. Puedes iniciar una nueva jornada cuando vuelvas a trabajar.</div><div class="clock-actions"><button class="button primary" id="clock-start">Ficharme</button></div>`}</section>`:`<section class="clock-current clock-hero panel"><div class="clock-current-head"><div><span class="clock-status-dot"></span><span class="eyebrow">SIN FICHAJE ACTIVO</span><h2>¿Vas a comenzar tu jornada?</h2><p>Registra tu entrada antes de empezar para llevar el control de tus horas.</p></div><span class="clock-icon">${icon('clock')}</span></div><div class="clock-actions"><button class="button primary" id="clock-start">Ficharme</button></div></section>`;
    const ranking=this.cloud.weeklyClockTop||[];
    const rankingMarkup=this.cloud.weeklyClockReady?(ranking.length?`<div class="clock-podium">${ranking.map((row,index)=>`<article class="clock-podium-row rank-${index+1}"><span class="clock-rank-number">${index+1}</span><span class="clock-rank-medal">${index===0?'★':index===1?'◆':'✦'}</span><div><strong>${esc(row.employee_name||'Trabajador')}</strong><small>${index===0?'Líder de la semana':index===1?'Segundo lugar':'Tercer lugar'}</small></div><b>${duration(Number(row.worked_seconds)||0)}</b></article>`).join('')}</div>`:'<div class="cash-empty">Aún no hay horas fichadas esta semana. ¡El ranking comienza cuando el equipo fiche!</div>'):'<div class="cash-empty">El ranking semanal estará disponible al instalar la actualización pendiente.</div>';
    const rankingPanel=`<section class="panel clock-ranking"><div class="panel-head"><div><span class="eyebrow">RECONOCIMIENTO DEL EQUIPO</span><h2>Los más fichados de la semana</h2><p>Se actualiza mientras el equipo ficha. El domingo se guarda el resultado y cada lunes comienza una nueva semana.</p></div><span class="clock-ranking-badge">${icon('trophy')} TOP 3</span></div>${rankingMarkup}</section>`;
    const savedWeeks=this.cloud.weeklyClockHistory||[];
    const weekKeys=[...new Set(savedWeeks.map(row=>row.week_start))];
    const rankingHistory=weekKeys.length?`<section class="panel clock-history"><div class="panel-head"><div><h2>Resultados de semanas anteriores</h2><p>Los tres primeros lugares quedan guardados al comenzar una nueva semana.</p></div></div>${weekKeys.slice(0,8).map(week=>{const rows=savedWeeks.filter(row=>row.week_start===week);return `<div class="clock-week-archive"><h3>Semana del ${dateTime(week+'T12:00:00-05:00')}</h3><div class="clock-podium">${rows.map(row=>`<article class="clock-podium-row rank-${row.rank_position}"><span class="clock-rank-number">${row.rank_position}</span><span class="clock-rank-medal">${row.rank_position===1?'★':row.rank_position===2?'◆':'✦'}</span><div><strong>${esc(row.employee_name||'Trabajador')}</strong><small>${row.rank_position===1?'Primer lugar':row.rank_position===2?'Segundo lugar':'Tercer lugar'}</small></div><b>${duration(Number(row.worked_seconds)||0)}</b></article>`).join('')}</div></div>`}).join('')}</section>`:'';
    const rankingArchive=rankingHistory;
    const sessions=[...(this.cloud.clockSessions||[])].sort((a,b)=>Date.parse(b.started_at)-Date.parse(a.started_at));
    const history=sessions.length?`<section class="panel clock-history"><div class="panel-head"><div><h2>${this.cloud.isAdmin?'Registro de fichajes del equipo':'Mi historial de fichajes'}</h2><p>Entradas, pausas, salidas y tiempo trabajado</p></div><span>${sessions.length} registros</span></div><div class="table-panel"><table><thead><tr>${this.cloud.isAdmin?'<th>Personal</th>':''}<th>Entrada</th><th>Última actividad</th><th>Salida / pausa</th><th>Tiempo trabajado</th><th>Estado</th></tr></thead><tbody>${sessions.slice(0,100).map(row=>`<tr>${this.cloud.isAdmin?`<td><strong>${esc(this.cloud.team.find(p=>p.id===row.employee_id)?.display_name||'Personal')}</strong></td>`:''}<td>${dateTime(row.started_at)}</td><td>${dateTime(row.last_activity_at)}</td><td>${dateTime(row.ended_at||row.paused_at)}</td><td><strong>${duration(this.worked(row))}</strong></td><td><span class="status-pill ${row.status==='paused'?'cancelled':''}">${statusLabel(row.status)}</span></td></tr>`).join('')}</tbody></table></div></section>`:'<div class="cash-empty">Todavía no hay jornadas guardadas.</div>';
    root.innerHTML=own+rankingPanel+rankingArchive+history;
    this.el('clock-start')?.addEventListener('click',()=>this.action('start'));
    this.el('clock-resume')?.addEventListener('click',()=>this.action('resume'));
    this.el('clock-finish')?.addEventListener('click',()=>this.action('finish'));
    root.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));
    this.syncQuick();
  }
  syncQuick(){
    let node=this.el('clock-quick-action');
    if(!this.cloud?.isActive||!this.cloud.clockReady){node?.remove();return;}
    if(!node){node=document.createElement('aside');node.id='clock-quick-action';node.className='clock-quick glass-ambient';node.setAttribute('aria-label','Acceso rápido al fichaje');document.body.append(node);}
    const session=this.cloud.clockStatus,active=session?.status==='active',paused=session?.status==='paused';
    const seconds=this.worked(session);
    node.innerHTML=active?`<div class="clock-quick-info"><i class="clock-status-dot active"></i><span>FICHAJE ACTIVO</span><strong id="clock-quick-timer">${duration(seconds)}</strong></div><button type="button" class="button secondary" id="clock-quick-finish">Desficharme</button>`:paused?`<div class="clock-quick-info"><i class="clock-status-dot paused"></i><span>FICHAJE EN PAUSA</span><strong id="clock-quick-timer">${duration(seconds)}</strong></div><div class="clock-quick-actions"><button type="button" class="button primary" id="clock-quick-resume">Reanudar</button><button type="button" class="button secondary" id="clock-quick-finish">Finalizar</button></div>`:`<div class="clock-quick-info"><i class="clock-status-dot"></i><span>¿VAS A TRABAJAR?</span><strong>Fichaje</strong></div><button type="button" class="button primary" id="clock-quick-start">Ficharme</button>`;
    this.el('clock-quick-start')?.addEventListener('click',()=>this.action('start'));
    this.el('clock-quick-resume')?.addEventListener('click',()=>this.action('resume'));
    this.el('clock-quick-finish')?.addEventListener('click',()=>this.action('finish'));
  }
  renderQuickTimer(){
    const node=this.el('clock-quick-timer'),session=this.cloud?.clockStatus;
    if(node&&session?.status==='active')node.textContent=duration(this.worked(session));
  }
  renderTimer(){const node=this.el('clock-timer'),session=this.cloud?.clockStatus;if(node&&session?.status==='active')node.textContent=duration(this.worked(session));}
  async action(action){
    const buttons=['clock-start','clock-resume','clock-finish','clock-quick-start','clock-quick-resume','clock-quick-finish'].map(id=>this.el(id)).filter(Boolean);buttons.forEach(button=>button.disabled=true);
    try{await this.cloud.clockAction(action);await this.cloud.load();this.render();this.syncQuick();this.toast(action==='finish'?'Jornada finalizada y guardada.':action==='resume'?'Fichaje reanudado.':'Jornada iniciada.');}
    catch(error){buttons.forEach(button=>button.disabled=false);this.toast(this.errorText(error));}
  }
}
