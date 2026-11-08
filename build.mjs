import {readFileSync,writeFileSync} from 'node:fs';
const files=['config.js','catalog.js','core.js','icons.js','operations.js','cloud.js','layout.js','management.js','atmosphere.js','brand.js','app.js'];
const source=files.map(file=>readFileSync(new URL('dist/'+file,import.meta.url),'utf8').replace(/^import .*;\r?\n/gm,'').replace(/^export /gm,'')).join('\n');
writeFileSync(new URL('dist/bundle.js',import.meta.url),'/* Benny’s Motors · generado con node build.mjs */\n(()=>{\n'+source+'\n})();\n');
console.log('Bundle estático listo.');
