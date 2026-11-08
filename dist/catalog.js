export const CATEGORIES = [
  {id:'all', label:'Todos los servicios', icon:'grid'},
  {id:'taller', label:'Taller', icon:'wrench'},
  {id:'motor', label:'Motor', icon:'engine'},
  {id:'traccion', label:'Tracción', icon:'drive'},
  {id:'neumaticos', label:'Neumáticos', icon:'wheel'},
  {id:'extras', label:'Extras', icon:'bolt'}
];
// Importes transcritos del tarifario del servidor proporcionado por el usuario.
export const CATALOG = [
  {id:'rendimiento', name:'Rendimiento', shop:'Piezas de Rendimiento', category:'taller', cost:7000, price:10000, icon:'gauge', detail:'Piezas para llevarlo al siguiente nivel.'},
  {id:'ruedas', name:'Juego de ruedas', shop:'Set de Rines', category:'taller', cost:7000, price:10000, icon:'wheel', detail:'El estilo empieza desde el asfalto.'},
  {id:'humo', name:'Humo de neumáticos', shop:'Kit de humo para neumáticos', category:'taller', cost:2500, price:5000, icon:'smoke', detail:'Deja tu firma en cada derrape.'},
  {id:'cosmeticos', name:'Cosméticos', shop:'Piezas Cosméticas', category:'taller', cost:2000, price:3000, icon:'car', detail:'Detalles que hacen único tu vehículo.'},
  {id:'pintura', name:'Repintar', shop:'Kit de pintura', category:'taller', cost:500, price:1500, icon:'paint', detail:'Un color nuevo. Una nueva identidad.'},
  {id:'limpieza', name:'Limpieza', shop:'Kit de limpieza', category:'taller', cost:250, price:500, icon:'sparkles', detail:'De vuelta a su mejor versión.'},
  {id:'reparacion', name:'Reparación', shop:'Kit de reparación', category:'taller', cost:500, price:1000, icon:'wrench', detail:'Listo para volver a las calles.'},
  {id:'v12', name:'Motor V12', shop:'Motor V12', category:'motor', cost:300000, price:500000, icon:'engine', detail:'Doce cilindros. Cero compromisos.', exclusive:'motor'},
  {id:'v8', name:'Motor V8', shop:'Motor V8', category:'motor', cost:40000, price:50000, icon:'engine', detail:'La esencia del músculo americano.', exclusive:'motor'},
  {id:'awd', name:'Tracción AWD', shop:'Tracción AWD', category:'traccion', cost:8000, price:12500, icon:'drive', detail:'Potencia en las cuatro ruedas.', exclusive:'traccion'},
  {id:'rwd', name:'Tracción RWD', shop:'Tracción RWD', category:'traccion', cost:7000, price:11500, icon:'drive', detail:'Toda la fuerza al eje trasero.', exclusive:'traccion'},
  {id:'fdw', name:'Tracción FDW', shop:'Tracción FDW', category:'traccion', cost:8500, price:10500, icon:'drive', detail:'Configuración del eje delantero.', exclusive:'traccion'},
  {id:'slick', name:'Slick', shop:'Slick', category:'neumaticos', cost:4000, price:6000, icon:'wheel', detail:'Máximo contacto con el asfalto.', exclusive:'neumaticos'},
  {id:'semi', name:'Semi-Slick', shop:'Semi-Slick', category:'neumaticos', cost:3500, price:6000, icon:'wheel', detail:'Equilibrio entre calle y circuito.', exclusive:'neumaticos'},
  {id:'offroad', name:'Offroad', shop:'Offroad', category:'neumaticos', cost:4500, price:6500, icon:'wheel', detail:'Prepáralo para salir del asfalto.', exclusive:'neumaticos'},
  {id:'frenos', name:'Frenos cerámicos', shop:'Frenos Ceramicos', category:'extras', cost:8000, price:20000, icon:'brake', detail:'Control a la altura de la potencia.'},
  {id:'turbo', name:'Turbo charger', shop:'Turbo charger', category:'extras', cost:25000, price:35000, icon:'turbo', detail:'Ese empuje extra que se siente.'},
  {id:'kit', name:'Kit de extras', shop:'Kit de extras', category:'extras', cost:4000, price:5000, icon:'kit', detail:'El último toque de tu preparación.'}
];
export const PRESETS = [
  {id:'reference', name:'Selección de tu tabla', detail:'V8 · AWD · Slick · Frenos cerámicos', items:['v8','awd','slick','frenos'], icon:'engine'},
  {id:'maintenance', name:'Puesta a punto', detail:'Reparación · Limpieza · Repintar', items:['reparacion','limpieza','pintura'], icon:'wrench'},
  {id:'performance', name:'Street performance', detail:'Rendimiento · Rines · Turbo', items:['rendimiento','ruedas','turbo'], icon:'gauge'}
];
