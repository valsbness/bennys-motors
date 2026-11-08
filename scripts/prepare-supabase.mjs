import {mkdir,writeFile} from 'node:fs/promises';
import {CLOUD_CONFIG} from '../dist/config.js';
const headers={apikey:CLOUD_CONFIG.publishableKey};
for(const endpoint of ['/auth/v1/settings','/rest/v1/bennys_profiles?select=id&limit=0']){
  const res=await fetch(CLOUD_CONFIG.url+endpoint,{headers});const data=await res.json();
  console.log(JSON.stringify({endpoint,status:res.status,...(endpoint.includes('settings')?{emailEnabled:data.external?.email,signupDisabled:data.disable_signup}:{code:data.code,message:data.message})}));
}
const packageInfo=await fetch('https://registry.npmjs.org/@supabase/supabase-js/latest').then(r=>r.json());
const base=`https://cdn.jsdelivr.net/npm/@supabase/supabase-js@${packageInfo.version}/`;
const vendor=new URL('../dist/assets/vendor/',import.meta.url);await mkdir(vendor,{recursive:true});
for(const [source,target] of [['dist/umd/supabase.js','supabase.js'],['LICENSE','SUPABASE-LICENSE.txt']]){
  const res=await fetch(base+source);if(!res.ok)throw Error('No se pudo descargar '+source);
  await writeFile(new URL(target,vendor),Buffer.from(await res.arrayBuffer()));
}
await writeFile(new URL('SUPABASE-VERSION.txt',vendor),packageInfo.version+'\n');console.log('Supabase JS '+packageInfo.version+' guardado localmente.');
