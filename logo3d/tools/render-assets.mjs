// Regenera, desde la MISMA geometría 3D, los recursos derivados del emblema:
//  - dist/assets/logo3d/bennys-wordmark.webp  imagen estática (fallback sin WebGL, carga, barra lateral)
//  - dist/assets/logo3d/bennys-monogram.webp  monograma B
//  - dist/assets/favicon.svg y dist/assets/apple-touch-icon.png
//  - logo3d/export/bennys-logo.glb            modelo exportado (Blender, Spline, etc.)
// Requiere un Chromium con WebGL y Playwright: define PLAYWRIGHT_PATH y EDGE_PATH si no usas los valores de tests/.
import {build} from 'esbuild';
import {mkdirSync,writeFileSync,readFileSync,statSync} from 'node:fs';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const dist=path.resolve(root,'../dist/assets');
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/Mateo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const cache=path.join(root,'.cache');mkdirSync(cache,{recursive:true});mkdirSync(path.join(dist,'logo3d'),{recursive:true});mkdirSync(path.join(root,'export'),{recursive:true});

await build({entryPoints:[path.join(here,'render-entry.js')],outfile:path.join(cache,'tools.js'),bundle:true,format:'iife',minify:true,target:'es2020',loader:{'.svg':'text'},logLevel:'error'});

const browser=await chromium.launch({executablePath:process.env.EDGE_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
const page=await browser.newPage();
const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.setContent('<!doctype html><body></body>');
await page.addScriptTag({path:path.join(cache,'tools.js')});

const save=(file,dataUrl)=>{const buffer=Buffer.from(dataUrl.split(',')[1],'base64');writeFileSync(file,buffer);console.log('  ',path.relative(path.resolve(root,'..'),file),Math.round(buffer.length/1024)+' KB');};

// Emblema completo (webp con transparencia). 1000 px de ancho: se reduce en pantalla (x2 en 440 px y en pantallas densas).
save(path.join(dist,'logo3d/bennys-wordmark.webp'),await page.evaluate(()=>{const t=window.BennysLogoTools;const r=t.renderStill(t.SOURCES.wordmark,{width:1000});const url=r.canvas.toDataURL('image/webp',0.93);r.dispose();return url;}));
// Monograma
save(path.join(dist,'logo3d/bennys-monogram.webp'),await page.evaluate(()=>{const t=window.BennysLogoTools;const r=t.renderStill(t.SOURCES.monogram,{width:512,height:512,margin:1.12});const url=r.canvas.toDataURL('image/webp',0.93);r.dispose();return url;}));
// Icono de pantalla de inicio (iOS pide fondo opaco).
save(path.join(dist,'apple-touch-icon.png'),await page.evaluate(()=>{const t=window.BennysLogoTools;const r=t.renderStill(t.SOURCES.monogram,{width:512,height:512,margin:1.5});const out=document.createElement('canvas');out.width=out.height=180;const g=out.getContext('2d');const bg=g.createLinearGradient(0,0,180,180);bg.addColorStop(0,'#3a1022');bg.addColorStop(1,'#100b10');g.fillStyle=bg;g.fillRect(0,0,180,180);g.drawImage(r.canvas,0,0,180,180);r.dispose();return out.toDataURL('image/png');}));

// Favicon vectorial desde el contorno del monograma (misma geometría).
const monogram=readFileSync(path.join(root,'source/monogram.svg'),'utf8');
const viewBox=monogram.match(/viewBox="([^"]+)"/)[1],d=monogram.match(/id="letra-B"[^>]*d="([^"]+)"/)[1];
const [vx,vy,vw,vh]=viewBox.split(/\s+/).map(Number);
const favicon=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e0405f"/><stop offset="1" stop-color="#8a1a3d"/></linearGradient><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a1022"/><stop offset="1" stop-color="#100b10"/></linearGradient></defs><rect width="64" height="64" rx="14" fill="url(#g)"/><g transform="translate(32 32) scale(${(50/Math.max(vw,vh)).toFixed(5)}) translate(${(-(vx+vw/2)).toFixed(2)} ${(-(vy+vh/2)).toFixed(2)})"><path d="${d}" fill="url(#f)" stroke="#f6e6ea" stroke-width="${(1.6*Math.max(vw,vh)/50).toFixed(2)}" stroke-linejoin="round" paint-order="stroke"/></g></svg>\n`;
writeFileSync(path.join(dist,'favicon.svg'),favicon);console.log('   dist/assets/favicon.svg');

// GLB
const base64=await page.evaluate(async()=>{const t=window.BennysLogoTools;const model=t.buildLogoModel(t.SOURCES.wordmark,{});const exporter=new t.GLTFExporter();const buffer=await exporter.parseAsync(model.root,{binary:true,onlyVisible:true});let binary='';const bytes=new Uint8Array(buffer);for(let i=0;i<bytes.length;i+=0x8000)binary+=String.fromCharCode(...bytes.subarray(i,i+0x8000));return btoa(binary);});
const glbPath=path.join(root,'export/bennys-logo.glb');writeFileSync(glbPath,Buffer.from(base64,'base64'));console.log('   logo3d/export/bennys-logo.glb',Math.round(statSync(glbPath).size/1024)+' KB');
if(errors.length)console.warn('Errores de página:',errors);
await browser.close();
