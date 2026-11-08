/* Activa la capa navideña solo cuando se solicita explícitamente en la URL.
   Quitar ?season=christmas devuelve el diseño normal sin tocar preferencias ni datos. */
(()=> {
  const params=new URLSearchParams(window.location.search);
  if(params.get('season')==='christmas'){
    document.body.classList.add('christmas-season');
    document.documentElement.dataset.season='christmas';
  }
})();
