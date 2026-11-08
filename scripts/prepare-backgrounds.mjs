// Deriva imágenes de fondo a partir de las dos originales de Halloween (generadas con ImageGen a partir de las
// fotografías del taller). Solo se recortan y recolocan fragmentos NÍTIDOS de las mismas fotos: no hay rellenos desenfocados.
//  - bennys-acceso-movil.webp   versión vertical para móvil: base = recorte real de la fachada; neón y telarañas arriba y
//                               calabazas abajo (recortes reales) para que se vean por encima y por debajo de la tarjeta.
//  - bennys-panel-fondo.webp    interior del taller con un desenfoque suave y algo más oscuro, para el fondo del panel.
// En escritorio y tablet el acceso usa la fachada original (bennys-acceso-fachada.webp) ampliada con CSS; no requiere derivados.
// Requiere Playwright y un Chromium (ver tests/cloud-browser.cjs). Uso: npm run backgrounds
import {readFileSync,writeFileSync,statSync} from 'node:fs';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/Mateo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const halloween=path.join(root,'dist/assets/halloween');
const facade=readFileSync(path.join(halloween,'bennys-acceso-fachada.webp')).toString('base64');
const interior=readFileSync(path.join(halloween,'bennys-panel-interior.webp')).toString('base64');

const browser=await chromium.launch({executablePath:process.env.EDGE_PATH||'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true});
const page=await browser.newPage();await page.setContent('<body></body>');
const results=await page.evaluate(async({facade,interior})=>{
  const load=async b64=>{const image=new Image();image.src='data:image/webp;base64,'+b64;await image.decode();return image;};
  const make=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return [c,c.getContext('2d')];};
  const facadeImage=await load(facade),interiorImage=await load(interior),out={};

  // Versión vertical para móvil (700×1515)
  {
    const W=700,H=1515,[canvas,g]=make(W,H);
    g.drawImage(facadeImage,600,0,433,941,0,0,W,H);                       // base: recorte real de la fachada (puerta, neón, calabazas)
    g.drawImage(facadeImage,590,205,420,200,0,0,W,333);                    // arriba: neón BENNY’S y telarañas
    g.drawImage(facadeImage,540,600,440,200,0,H-333,W,333);               // abajo: calabazas y suelo mojado
    out.movil=canvas.toDataURL('image/webp',0.86);
  }
  // Fondo del panel: interior del taller, desenfoque suave y algo más oscuro
  {
    const W=1600,H=900,[canvas,g]=make(W,H);
    g.filter='blur(5px) saturate(1.12) brightness(.82)';g.drawImage(interiorImage,-30,-30,W+60,H+60);
    out.fondo=canvas.toDataURL('image/webp',0.78);
  }
  return out;
},{facade,interior});

const save=(name,dataUrl)=>{const file=path.join(halloween,name);writeFileSync(file,Buffer.from(dataUrl.split(',')[1],'base64'));console.log(path.relative(root,file),Math.round(statSync(file).size/1024)+' KB');};
save('bennys-acceso-movil.webp',results.movil);
save('bennys-panel-fondo.webp',results.fondo);
await browser.close();
