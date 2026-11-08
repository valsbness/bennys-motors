// Geometría real del emblema: contornos SVG → ExtrudeGeometry con bisel.
// https://threejs.org/docs/pages/Shape.html · https://threejs.org/docs/pages/ExtrudeGeometry.html
import * as THREE from 'three';
import {SVGLoader} from 'three/addons/loaders/SVGLoader.js';
import {toCreasedNormals,mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js';
import polygonClipping from 'polygon-clipping';
import {LOGO_CONFIG} from './config.js';

const deg=Math.PI/180;

export function createMaterials(config=LOGO_CONFIG){
  const c=config.colors;
  // Esmalte vino: el color llega por vértice (degradado) y el barniz da el reflejo.
  const enamel=new THREE.MeshPhysicalMaterial({name:'esmalte-vino',color:0xffffff,vertexColors:true,metalness:0,roughness:0.42,clearcoat:1,clearcoatRoughness:0.1,envMapIntensity:0.85});
  // Borde satinado claro: bisel y laterales.
  const satin=new THREE.MeshPhysicalMaterial({name:'borde-satinado',color:new THREE.Color(c.satin),metalness:1,roughness:0.34,clearcoat:0.25,clearcoatRoughness:0.4,envMapIntensity:1.35});
  // Acento carmesí con un punto de luz propia (filetes de MOTORS).
  const accent=new THREE.MeshPhysicalMaterial({name:'acento-carmesi',color:new THREE.Color(c.accent),emissive:new THREE.Color(c.accentEmissive),emissiveIntensity:0.9,metalness:0.1,roughness:0.35,clearcoat:0.6,clearcoatRoughness:0.15,envMapIntensity:1});
  // Letras pequeñas (MOTORS): perla satinada, legible sobre el cristal oscuro.
  const pearl=new THREE.MeshPhysicalMaterial({name:'perla-satinada',color:new THREE.Color(c.pearl),metalness:0.1,roughness:0.42,clearcoat:0.5,clearcoatRoughness:0.2,envMapIntensity:0.9});
  return {enamel,satin,accent,pearl};
}

function extrudeOptions(layer,tier,config){
  const base=layer==='acento'||layer==='pequena'?config.small:config.letters;
  const options={...base,bevelEnabled:true};
  if(tier==='low'){
    options.bevelSegments=Math.min(options.bevelSegments,config.lowTier.bevelSegments);
    options.curveSegments=Math.min(options.curveSegments,config.lowTier.curveSegments);
  }
  return options;
}

// Las letras de un script están conectadas y sus contornos se solapan: se fusionan en una sola silueta
// para que no aparezcan costuras de bisel dentro de las letras.
function unionShapes(shapes,divisions){
  const ring=points=>{const r=points.map(p=>[p.x,p.y]),a=r[0],z=r[r.length-1];if(a[0]!==z[0]||a[1]!==z[1])r.push([a[0],a[1]]);return r;};
  const polygons=shapes.map(shape=>{const {shape:outer,holes}=shape.extractPoints(divisions);return [ring(outer),...holes.map(ring)];});
  const merged=polygonClipping.union(polygons[0],...polygons.slice(1));
  const points=r=>r.slice(0,-1).map(([x,y])=>new THREE.Vector2(x,y));
  return merged.map(([outer,...holes])=>{const shape=new THREE.Shape(points(outer));shape.holes=holes.map(h=>new THREE.Path(points(h)));return shape;});
}

/**
 * Construye el modelo desde el texto de un SVG.
 * Cada <path>/<rect> es una pieza; `data-capa` decide su material y espesor:
 *  - esmalte: letras principales (esmalte vino + borde satinado)
 *  - acento: filetes (carmesí brillante)
 * Los trazados cuyo id empieza por “motors-” se tratan como letras pequeñas (extrusión fina).
 */
export function buildLogoModel(svgText,{tier='high',config=LOGO_CONFIG,materials=createMaterials(config)}={}){
  const data=new SVGLoader().parse(svgText);
  const pieces=[],sources=[];
  for(const path of data.paths){
    const node=path.userData?.node;
    const id=node?.getAttribute?.('id')||'pieza';
    const style=path.userData?.style;
    if(style?.fill==='none')continue;
    let layer=node?.getAttribute?.('data-capa')||'esmalte';
    if(layer==='esmalte'&&id.startsWith('motors-'))layer='pequena';
    const shapes=path.toShapes();
    if(!shapes.length)continue;
    sources.push({id,layer,shapes});
  }
  const options=layer=>extrudeOptions(layer,tier,config);
  const letters=sources.filter(s=>s.layer==='esmalte');
  for(const source of sources){
    if(source.layer==='esmalte')continue;
    pieces.push({id:source.id,layer:source.layer,geometry:new THREE.ExtrudeGeometry(source.shapes,options(source.layer))});
  }
  if(letters.length){
    let merged;
    try{merged=unionShapes(letters.flatMap(s=>s.shapes),options('esmalte').curveSegments);}catch{merged=null;}
    if(merged?.length)pieces.push({id:'lettering',layer:'esmalte',geometry:new THREE.ExtrudeGeometry(merged,options('esmalte'))});
    else for(const s of letters)pieces.push({id:s.id,layer:'esmalte',geometry:new THREE.ExtrudeGeometry(s.shapes,options('esmalte'))});
  }
  if(!pieces.length)throw new Error('El SVG del emblema no contiene formas con relleno.');

  // Caja de las letras principales: referencia del degradado y del encuadre.
  const box=new THREE.Box3();
  for(const piece of pieces){piece.geometry.computeBoundingBox();box.union(piece.geometry.boundingBox);}
  const size=box.getSize(new THREE.Vector3());

  const top=new THREE.Color(config.colors.enamelTop),mid=new THREE.Color(config.colors.enamelMid),bottom=new THREE.Color(config.colors.enamelBottom);
  const tmp=new THREE.Color();
  const group=new THREE.Group();group.name='emblema-bennys';
  for(const piece of pieces){
    const {geometry,layer}=piece;
    // Normales suavizadas en el bisel y aristas vivas donde el contorno tiene esquina.
    const smooth=toCreasedNormals(geometry,config.creaseAngleDegrees*deg);
    const position=smooth.attributes.position,count=position.count,colors=new Float32Array(count*3);
    // Las tapas son planas: el suavizado solo debe afectar al bisel y a los laterales.
    const normal=smooth.attributes.normal,midZ=(smooth.boundingBox.min.z+smooth.boundingBox.max.z)/2;
    for(const group of smooth.groups){
      if(group.materialIndex!==0)continue;
      for(let i=group.start;i<group.start+group.count;i++)normal.setXYZ(i,0,0,position.getZ(i)>midZ?1:-1);
    }
    for(let i=0;i<count;i++){
      // SVG: y crece hacia abajo. 0 = parte superior del emblema.
      const ty=THREE.MathUtils.clamp((position.getY(i)-box.min.y)/size.y,0,1);
      const tx=THREE.MathUtils.clamp((position.getX(i)-box.min.x)/size.x,0,1);
      const t=THREE.MathUtils.clamp(ty*0.8+tx*0.2,0,1);
      if(t<0.5)tmp.copy(top).lerp(mid,t/0.5);else tmp.copy(mid).lerp(bottom,(t-0.5)/0.5);
      colors[i*3]=tmp.r;colors[i*3+1]=tmp.g;colors[i*3+2]=tmp.b;
    }
    smooth.setAttribute('color',new THREE.BufferAttribute(colors,3));
    // Soldar vértices idénticos (posición, normal y color): menos memoria y menos trabajo de GPU; los grupos de material se conservan.
    const indexed=mergeVertices(smooth,1e-3);
    // Grupo 0 = tapas (esmalte o acento), grupo 1 = laterales y bisel (satinado).
    const faceMaterial=layer==='acento'?materials.accent:layer==='pequena'?materials.pearl:materials.enamel;
    const mesh=new THREE.Mesh(indexed,[faceMaterial,materials.satin]);
    mesh.name=piece.id;
    group.add(mesh);
  }

  // Centrar y escalar a 6 unidades de ancho; y de SVG hacia abajo → invertir.
  const holder=new THREE.Group();holder.name='emblema-bennys-centro';
  const center=box.getCenter(new THREE.Vector3());
  group.position.set(-center.x,-center.y,-center.z);
  holder.add(group);
  const scale=6/size.x;
  holder.scale.set(scale,-scale,scale);
  const world=new THREE.Vector3(size.x*scale,size.y*scale,size.z*scale);
  return {root:holder,size:world,aspect:size.x/size.y,materials,dispose(){for(const piece of pieces)piece.geometry.dispose();for(const m of Object.values(materials))m.dispose();}};
}
