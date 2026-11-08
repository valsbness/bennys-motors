from pathlib import Path
import urllib.request, re
target=Path(__file__).resolve().parent.parent/'dist'/'assets'/'fonts'
target.mkdir(exist_ok=True)
fonts=[('Barlow Condensed',[600,700,800],'barlow'),('DM Sans',[400,500,600,700],'dm-sans'),('Yellowtail',[400],'yellowtail')]
rules=[]
for name,weights,slug in fonts:
  for weight in weights:
    family=name.replace(' ','+')+':wght@'+str(weight)
    req=urllib.request.Request('https://fonts.googleapis.com/css2?family='+family+'&display=swap',headers={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'})
    css=urllib.request.urlopen(req,timeout=25).read().decode()
    url=re.findall(r'url\((https://[^)]+)\)',css)[-1]
    data=urllib.request.urlopen(url,timeout=25).read()
    ext='woff2' if data[:4]==b'wOF2' else 'ttf'
    filename=slug+'-'+str(weight)+'.'+ext
    (target/filename).write_bytes(data)
    rules.append("@font-face{font-family:'"+name+"';font-style:normal;font-weight:"+str(weight)+";font-display:swap;src:url('"+filename+"') format('"+('woff2' if ext=='woff2' else 'truetype')+"');}")
    print(filename,len(data))
(target/'fonts.css').write_text('\n'.join(rules),encoding='utf-8')
for family in ['barlowcondensed','dmsans','yellowtail']:
  folder='apache' if family=='yellowtail' else 'ofl'
  license='LICENSE.txt' if family=='yellowtail' else 'OFL.txt'
  url='https://raw.githubusercontent.com/google/fonts/main/'+folder+'/'+family+'/'+license
  (target/(family+'-LICENSE.txt')).write_bytes(urllib.request.urlopen(url,timeout=25).read())
