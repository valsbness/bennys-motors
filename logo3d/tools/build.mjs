// Empaqueta el emblema 3D (Three.js incluido, solo lo usado) en un único módulo estático para GitHub Pages.
import {build} from 'esbuild';
import {fileURLToPath} from 'node:url';
import {statSync,mkdirSync} from 'node:fs';
import path from 'node:path';
const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const out=path.resolve(root,'../dist/assets/logo3d/logo3d.js');
mkdirSync(path.dirname(out),{recursive:true});
const three=JSON.parse((await import('node:fs')).readFileSync(path.join(root,'node_modules/three/package.json'),'utf8')).version;
await build({
  entryPoints:[path.join(root,'src/index.js')],
  outfile:out,bundle:true,format:'esm',minify:true,target:'es2020',legalComments:'none',
  loader:{'.svg':'text'},
  banner:{js:`/* Benny’s Motors · emblema 3D. Generado con npm run build:logo. Three.js r${three.split('.')[1]} (MIT). Fuente: logo3d/ */`}
});
console.log('Emblema 3D listo:',path.relative(process.cwd(),out),Math.round(statSync(out).size/1024)+' KB (Three.js r'+three.split('.')[1]+')');
