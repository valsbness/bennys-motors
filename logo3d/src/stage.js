// Escena, iluminación y ciclo de vida del emblema 3D de Benny’s.
// Reglas de rendimiento: el render continuo solo corre si el emblema está en pantalla, la pestaña está
// visible y el usuario no pausó el ambiente; resolución limitada en móviles y equipos lentos.
import * as THREE from 'three';
import {LOGO_CONFIG} from './config.js';
import {buildLogoModel} from './logo-model.js';

const rad=d=>d*Math.PI/180;
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const ease=t=>1-Math.pow(1-clamp(t,0,1),3);

export function detectTier(){
  try{
    const coarse=matchMedia('(pointer: coarse)').matches;
    const memory=navigator.deviceMemory||8,cores=navigator.hardwareConcurrency||8;
    return coarse||memory<=4||cores<=4?'low':'high';
  }catch{return 'high';}
}

// Entorno propio: una sala oscura vino con paneles de luz. Es lo que refleja el esmalte y el borde satinado.
function buildEnvironment(renderer,config){
  const pmrem=new THREE.PMREMGenerator(renderer);
  const scene=new THREE.Scene();
  const color=(r,g,b)=>new THREE.Color().setRGB(r,g,b,THREE.LinearSRGBColorSpace);
  const hex=(value,gain)=>new THREE.Color(value).multiplyScalar(gain);
  const room=new THREE.Mesh(new THREE.BoxGeometry(24,14,24),new THREE.MeshBasicMaterial({color:color(0.018,0.004,0.01),side:THREE.BackSide}));
  scene.add(room);
  const panel=(w,h,col,position,lookAt=new THREE.Vector3())=>{
    const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));
    mesh.position.copy(position);mesh.lookAt(lookAt);scene.add(mesh);return mesh;
  };
  panel(10,2.4,hex(config.colors.keyLight,6.5),new THREE.Vector3(-3,6.2,7));        // caja de luz superior
  panel(1.6,8,hex(config.colors.keyLight,5),new THREE.Vector3(-8,1,5));              // tira blanca izquierda: da el filo claro al bisel
  panel(9,1.2,hex(config.colors.keyLight,4),new THREE.Vector3(2,-4.2,6));            // tira blanca inferior
  panel(2.2,9,hex(config.colors.redLight,6),new THREE.Vector3(8.5,0.5,3));          // tira carmesí a la derecha
  panel(2.2,7,hex(config.colors.rimLight,2.6),new THREE.Vector3(-9,-1,2));          // contraluz vino a la izquierda
  panel(14,1.4,hex('#b01846',2.4),new THREE.Vector3(0,-5.6,5));                     // rebote carmesí inferior
  // Cinta de reflejo: las tapas planas reflejan lo que hay tras la cámara; con el balanceo la cinta cruza el esmalte.
  const ribbon=panel(1.8,13,hex('#ff6a8d',2.3),new THREE.Vector3(-0.6,0.4,9.5));ribbon.rotation.z=rad(-24);
  const ribbonSoft=panel(4.2,13,hex('#d62d54',0.9),new THREE.Vector3(-0.2,0.4,9.2));ribbonSoft.rotation.z=rad(-24);
  const texture=pmrem.fromScene(scene,0.035).texture;
  pmrem.dispose();
  scene.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material)o.material.dispose();});
  return texture;
}

function createScene(renderer,model,config){
  const scene=new THREE.Scene();
  scene.environment=buildEnvironment(renderer,config);
  scene.add(model.root);
  const key=new THREE.DirectionalLight(config.colors.keyLight,0.5);key.position.set(-3,4,6);scene.add(key);
  const rim=new THREE.DirectionalLight(config.colors.rimLight,0.7);rim.position.set(5,-1.5,-3);scene.add(rim);
  // Reflejo rojo que cruza el esmalte con lentitud.
  const sweep=new THREE.DirectionalLight(config.colors.redLight,1.2);sweep.position.set(-4,0.8,6);scene.add(sweep);
  return {scene,sweep,key,rim};
}

/**
 * Monta el emblema en `container` (un elemento con la imagen estática dentro).
 * Devuelve el controlador, o `null` si WebGL no está disponible: el llamante conserva la imagen estática.
 */
export async function mountLogo(container,{svg,shouldAnimate=()=>true,allowSoftware=false,config=LOGO_CONFIG,onFallback}={}){
  const tier=detectTier();
  let renderer;
  try{
    renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'default',failIfMajorPerformanceCaveat:!allowSoftware});
  }catch{return null;}
  if(!renderer.getContext()){renderer.dispose();return null;}

  renderer.setClearColor(0x000000,0);
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.NeutralToneMapping;
  renderer.toneMappingExposure=0.9;
  let dprCap=tier==='low'?1.5:2;
  const model=buildLogoModel(svg,{tier,config});
  const {scene,sweep}=createScene(renderer,model,config);

  const camera=new THREE.PerspectiveCamera(24,1,0.1,60);
  const canvas=renderer.domElement;
  canvas.className='logo3d-canvas';canvas.setAttribute('aria-hidden','true');
  container.appendChild(canvas);

  const motion=config.motion;
  const state={running:false,frame:0,last:0,start:performance.now(),amp:1,calm:false,disposed:false,inView:true,px:0,py:0,tx:0,ty:0,visible:true,frames:0,slow:0,lastRender:0};
  const finePointer=(()=>{try{return matchMedia('(pointer: fine)').matches&&matchMedia('(hover: hover)').matches;}catch{return false;}})();

  function fit(){
    const width=container.clientWidth,height=container.clientHeight||width/model.aspect;
    if(!width||!height)return false;
    const dpr=Math.min(window.devicePixelRatio||1,dprCap);
    renderer.setPixelRatio(dpr);renderer.setSize(width,height,false);
    camera.aspect=width/height;
    const half=rad(camera.fov/2),margin=1.08;
    const byHeight=(model.size.y/2)*margin/Math.tan(half);
    const byWidth=(model.size.x/2)*margin/(Math.tan(half)*camera.aspect);
    camera.position.set(0,0,Math.max(byHeight,byWidth)+model.size.z/2);
    camera.lookAt(0,0,0);camera.updateProjectionMatrix();
    return true;
  }

  function pose(t){
    const intro=ease(t/motion.introSeconds);
    const period=Math.PI*2/motion.swaySeconds;
    const sway=Math.sin(t*period)*rad(motion.swayDegrees)*state.amp;
    const tilt=Math.sin(t*period*0.77+1.2)*rad(motion.tiltDegrees)*state.amp;
    model.root.rotation.y=sway+state.px*rad(motion.parallaxDegrees)+(1-intro)*rad(-16);
    model.root.rotation.x=tilt-state.py*rad(motion.parallaxDegrees)*0.6;
    model.root.position.y=Math.sin(t*period*0.8)*motion.floatAmount*model.size.y*state.amp;
    const base=model.root.userData.base,s=base*(0.96+0.04*intro);
    model.root.scale.set(s,-s,s);
    const sweepPhase=(Math.sin(t*Math.PI*2/motion.lightSweepSeconds)+1)/2;
    sweep.position.x=THREE.MathUtils.lerp(-5,5,sweepPhase);
    sweep.intensity=0.9*(0.4+0.6*Math.sin(sweepPhase*Math.PI));
  }
  model.root.userData.base=Math.abs(model.root.scale.x);

  function render(now=performance.now()){
    const t=(now-state.start)/1000;
    state.amp+=((state.calm?motion.calmFactor:1)-state.amp)*0.06;
    state.px+=(state.tx-state.px)*0.08;state.py+=(state.ty-state.py)*0.08;
    pose(t);
    renderer.render(scene,camera);
  }

  function loop(now){
    state.frame=0;
    if(!state.running)return;
    state.frame=requestAnimationFrame(loop);
    if(now-state.lastRender<1000/config.maxFps-1)return;
    const delta=now-state.lastRender;state.lastRender=now;
    render(now);
    // Calidad adaptativa: si el equipo no sigue el ritmo, bajar resolución y, en último caso, volver a la imagen estática.
    state.frames++;
    if(!allowSoftware&&state.frames>20&&delta>(1000/20)){state.slow++;}else if(state.frames>20&&state.slow>0&&delta<1000/40){state.slow--;}
    if(state.slow>=30){
      if(dprCap>1){dprCap=1;state.slow=0;fit();}
      else{controller.stop();onFallback?.('lento');}
    }
  }

  function wanted(){return !state.disposed&&state.inView&&!document.hidden&&shouldAnimate();}
  function update(){
    const should=wanted();
    if(should&&!state.running){state.running=true;state.lastRender=0;if(!state.frame)state.frame=requestAnimationFrame(loop);}
    else if(!should&&state.running){state.running=false;if(state.frame){cancelAnimationFrame(state.frame);state.frame=0;}}
    // Detenido pero visible: dejar el emblema en su pose actual (un solo cuadro).
    if(!should&&!state.disposed&&state.inView&&!document.hidden)render();
  }

  const onVisibility=()=>update();
  const onAmbient=()=>update();
  const onPointer=event=>{
    if(!finePointer||!state.running)return;
    state.tx=clamp((event.clientX/innerWidth)*2-1,-1,1);state.ty=clamp((event.clientY/innerHeight)*2-1,-1,1);
  };
  const resizer=new ResizeObserver(()=>{if(state.disposed)return;if(fit()&&!state.running)render();});
  const observer=new IntersectionObserver(entries=>{state.inView=entries.some(e=>e.isIntersecting);update();},{threshold:0.01});
  const onLost=event=>{event.preventDefault();controller.stop();onFallback?.('contexto');};
  document.addEventListener('visibilitychange',onVisibility);
  document.addEventListener('bennys:ambient',onAmbient);
  window.addEventListener('pointermove',onPointer,{passive:true});
  canvas.addEventListener('webglcontextlost',onLost);
  resizer.observe(container);observer.observe(container);

  const controller={
    tier,
    get running(){return state.running;},
    get canvas(){return canvas;},
    aspect:model.aspect,
    setCalm(value){state.calm=Boolean(value);if(!state.running)update();},
    refresh:update,
    stop(){state.running=false;if(state.frame){cancelAnimationFrame(state.frame);state.frame=0;}},
    dispose(){
      if(state.disposed)return;state.disposed=true;controller.stop();
      document.removeEventListener('visibilitychange',onVisibility);document.removeEventListener('bennys:ambient',onAmbient);
      window.removeEventListener('pointermove',onPointer);canvas.removeEventListener('webglcontextlost',onLost);
      resizer.disconnect();observer.disconnect();
      model.dispose();if(scene.environment)scene.environment.dispose();
      renderer.dispose();renderer.forceContextLoss?.();canvas.remove();
    }
  };

  if(!fit()){requestAnimationFrame(()=>{fit();});}
  render();
  update();
  return controller;
}

/**
 * Render de un solo cuadro a un lienzo transparente (imágenes estáticas, favicon). Solo para herramientas.
 */
export function renderStill(svg,{width=1200,height,pose={y:LOGO_CONFIG.stillPose.y,x:LOGO_CONFIG.stillPose.x},sweepPhase=0.34,config=LOGO_CONFIG,tier='high',margin=1.08,canvas}={}){
  const model=buildLogoModel(svg,{tier,config});
  const h=height||Math.round(width/model.aspect);
  const target=canvas||document.createElement('canvas');
  const renderer=new THREE.WebGLRenderer({canvas:target,antialias:true,alpha:true,preserveDrawingBuffer:true,failIfMajorPerformanceCaveat:false});
  renderer.setPixelRatio(1);renderer.setSize(width,h,false);
  renderer.setClearColor(0x000000,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.NeutralToneMapping;renderer.toneMappingExposure=1.05;
  const {scene,sweep}=createScene(renderer,model,config);
  const camera=new THREE.PerspectiveCamera(24,width/h,0.1,60);
  const half=rad(camera.fov/2);
  camera.position.set(0,0,Math.max((model.size.y/2)*margin/Math.tan(half),(model.size.x/2)*margin/(Math.tan(half)*camera.aspect))+model.size.z/2);
  camera.lookAt(0,0,0);
  model.root.rotation.y=rad(pose.y);model.root.rotation.x=rad(pose.x);
  sweep.position.x=THREE.MathUtils.lerp(-5,5,sweepPhase);sweep.intensity=0.9*(0.4+0.6*Math.sin(sweepPhase*Math.PI));
  renderer.render(scene,camera);
  return {canvas:target,model,scene,renderer,camera,dispose(){model.dispose();renderer.dispose();}};
}

export {buildLogoModel,createScene};
