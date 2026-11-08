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

export function initBrand(){
  document.addEventListener('bennys:ambient',sync);
}
/** El acceso es visible: monta el emblema 3D. Al entrar al panel se libera el contexto WebGL. */
export function setAccessVisible(visible){
  wanted=Boolean(visible);sync();
}
/** Mientras se escribe en el formulario, el balanceo del emblema casi se detiene. */
export function setAccessCalm(value){
  calm=Boolean(value);controller?.setCalm(calm);
}
