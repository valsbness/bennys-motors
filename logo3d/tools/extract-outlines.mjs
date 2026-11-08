// Punto de partida del lettering: convierte tipografías con licencia abierta en contornos SVG editables.
// Yellowtail (Astigmatic, Apache 2.0) para “Benny’s”; Barlow Condensed (OFL 1.1) para “MOTORS”.
// El resultado se guarda en logo3d/source/*.svg. DESDE ENTONCES EL SVG ES LA FUENTE DE VERDAD:
// edita los trazados en Inkscape/Figma/Illustrator y ejecuta `npm run build:logo`.
// Este script solo sirve para regenerar el punto de partida (sobrescribe los SVG: usa --force).
import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import opentype from 'opentype.js';

const here=path.dirname(fileURLToPath(import.meta.url));
const source=path.resolve(here,'../source');
const force=process.argv.includes('--force');
const out=name=>path.join(source,name);
if(!force&&existsSync(out('wordmark.svg'))){console.error('source/wordmark.svg ya existe. Usa --force para regenerarlo desde la tipografía.');process.exit(1);}

const load=file=>{const buffer=readFileSync(path.resolve(here,'../node_modules/@fontsource',file));return opentype.parse(buffer.buffer.slice(buffer.byteOffset,buffer.byteOffset+buffer.byteLength));};
const script=load('yellowtail/files/yellowtail-latin-400-normal.woff');
const caps=load('barlow-condensed/files/barlow-condensed-latin-700-normal.woff');

const round=n=>Math.round(n*100)/100;
const SIZE=420;
const word='Benny’s';
const glyphs=script.getPaths(word,0,0,SIZE,{kerning:true});
// Cuadro del texto completo para componer el resto del emblema.
let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
const parts=glyphs.map((p,index)=>{
  const b=p.getBoundingBox();
  minX=Math.min(minX,b.x1);minY=Math.min(minY,b.y1);maxX=Math.max(maxX,b.x2);maxY=Math.max(maxY,b.y2);
  return {index,char:[...word][index],d:p.toPathData(2),box:b};
});
const width=maxX-minX,height=maxY-minY;
console.log('Benny’s:',{minX:round(minX),minY:round(minY),width:round(width),height:round(height)});

const names={B:'letra-B',e:'letra-e',n:'letra-n',y:'letra-y','’':'apostrofe',s:'letra-s'};
let seenN=0;
const glyphMarkup=parts.map(part=>{
  let id=names[part.char]||'glifo-'+part.index;
  if(part.char==='n'){seenN++;id='letra-n-'+seenN;}
  return `    <path id="${id}" data-capa="esmalte" d="${part.d}"/>`;
}).join('\n');

// Etiqueta “MOTORS”: capitales con tracking amplio, centrada bajo el lettering.
const tag='MOTORS',tagSize=62,tracking=0.52*tagSize;
let tx=0;const tagPaths=[];
for(const char of tag){
  const glyph=caps.charToGlyph(char);
  const p=glyph.getPath(tx,0,tagSize);
  tagPaths.push({char,d:p.toPathData(2)});
  tx+=glyph.advanceWidth*tagSize/caps.unitsPerEm+tracking;
}
const tagWidth=tx-tracking;
const centerX=(minX+maxX)/2;
const tagX=centerX-tagWidth/2;
const tagY=maxY+tagSize*1.55;
const tagMarkup=tagPaths.map((p,i)=>`    <path id="motors-${i+1}-${p.char}" data-capa="esmalte" transform="translate(${round(tagX)} ${round(tagY)})" d="${p.d}"/>`).join('\n');

// Filetes laterales de la etiqueta.
const ruleY=tagY-tagSize*0.36,ruleH=5,ruleLen=Math.min(150,width*0.2),gap=34;
const rules=`    <rect id="filete-izq" data-capa="acento" x="${round(tagX-gap-ruleLen)}" y="${round(ruleY)}" width="${round(ruleLen)}" height="${ruleH}" rx="2.5"/>\n    <rect id="filete-der" data-capa="acento" x="${round(tagX+tagWidth+gap)}" y="${round(ruleY)}" width="${round(ruleLen)}" height="${ruleH}" rx="2.5"/>`;

// Trazo de remate propio (no procede de ninguna tipografía): afilado en ambos extremos, nace bajo la B
// y se abre en curva hasta rematar bajo la s. Se puede mover punto a punto.
const sw0=minX+width*0.04,sw1=maxX-width*0.015,sy=maxY-height*0.015;
const swash=`M${round(sw0)} ${round(sy+6)} C${round(sw0+width*0.28)} ${round(sy+52)} ${round(sw0+width*0.62)} ${round(sy+46)} ${round(sw1)} ${round(sy-20)} C${round(sw0+width*0.66)} ${round(sy+12)} ${round(sw0+width*0.3)} ${round(sy+16)} ${round(sw0)} ${round(sy+6)}Z`;

const pad=40;
const vbX=round(Math.min(minX,tagX-gap-ruleLen)-pad),vbY=round(minY-pad);
const vbW=round(Math.max(maxX,tagX+tagWidth+gap+ruleLen)-Math.min(minX,tagX-gap-ruleLen)+pad*2);
const vbH=round(tagY-minY+pad*2);

const header=`<!-- Emblema Benny’s · fuente editable del logo 3D.
     Cada <path> es una pieza extruida en Three.js. data-capa: esmalte (esmalte vino con degradado), acento (esmalte brillante carmesí).
     Los contornos de “Benny’s” proceden de Yellowtail (Astigmatic, Apache 2.0); “MOTORS”, de Barlow Condensed (OFL 1.1).
     Orden de apilado y relleno no importan: la geometría se genera desde la forma. Edita, guarda y ejecuta: npm run build:logo -->`;

const wordmarkSvg=`<?xml version="1.0" encoding="UTF-8"?>
${header}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vbX} ${vbY} ${vbW} ${vbH}" width="${Math.round(vbW)}" height="${Math.round(vbH)}">
  <g id="lettering">
${glyphMarkup}
    <path id="remate" data-capa="esmalte" d="${swash}"/>
  </g>
  <g id="etiqueta">
${tagMarkup}
${rules}
  </g>
</svg>
`;
writeFileSync(out('wordmark.svg'),wordmarkSvg);

// Monograma: la B del lettering, con el mismo contorno, sobre un lienzo cuadrado.
const bPart=parts[0];
const bw=bPart.box.x2-bPart.box.x1,bh=bPart.box.y2-bPart.box.y1,side=Math.max(bw,bh)*1.18;
const mx=round(bPart.box.x1-(side-bw)/2),my=round(bPart.box.y1-(side-bh)/2);
const monogramSvg=`<?xml version="1.0" encoding="UTF-8"?>
<!-- Monograma Benny’s: misma geometría que la B del emblema (copiada de wordmark.svg > #letra-B). -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="${mx} ${my} ${round(side)} ${round(side)}" width="${Math.round(side)}" height="${Math.round(side)}">
  <g id="monograma">
    <path id="letra-B" data-capa="esmalte" d="${bPart.d}"/>
  </g>
</svg>
`;
writeFileSync(out('monogram.svg'),monogramSvg);
console.log('Generados source/wordmark.svg y source/monogram.svg');
