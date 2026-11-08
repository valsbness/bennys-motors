// El ambiente (niebla, brasas, murciélagos y el emblema 3D) se puede pausar sin afectar la sincronización ni las ventas.
// La preferencia se guarda en este navegador; prefers-reduced-motion también lo detiene.
export function initAtmosphere(){
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
