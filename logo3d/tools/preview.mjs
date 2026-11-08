// Servidor mínimo para ajustar el emblema: abre http://127.0.0.1:8093/logo3d/preview/
import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.webp':'image/webp','.svg':'image/svg+xml','.png':'image/png','.woff2':'font/woff2'};
http.createServer(async(req,res)=>{try{const name=decodeURIComponent(new URL(req.url,'http://x').pathname);const file=path.resolve(root,'.'+name);if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache'}).end(await readFile(file));}catch{res.writeHead(404).end('No encontrado');}}).listen(8093,'127.0.0.1',()=>console.log('Vista previa del emblema: http://127.0.0.1:8093/logo3d/preview/'));
