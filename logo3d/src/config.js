// Parámetros editables del emblema 3D de Benny’s.
// Unidades de geometría: las del viewBox de source/wordmark.svg (≈1190 de ancho).
// Tras cambiar algo: `npm run build:logo` (y `npm run logo:assets` para regenerar imágenes y GLB).

export const LOGO_CONFIG = Object.freeze({
  // Extrusión y bisel de las letras (capa “esmalte”).
  letters: Object.freeze({depth:62,bevelThickness:10,bevelSize:7.5,bevelSegments:4,curveSegments:12}),
  // Etiqueta MOTORS y filetes (capa “acento” y letras pequeñas): más finos para que no se empasten.
  small: Object.freeze({depth:30,bevelThickness:4,bevelSize:3,bevelSegments:3,curveSegments:10}),
  // Variante de bajo coste para móviles y equipos lentos.
  lowTier: Object.freeze({bevelSegments:3,curveSegments:8}),

  // Ángulo de agudeza a partir del cual se conserva la arista (suaviza el bisel sin redondear esquinas vivas).
  creaseAngleDegrees:34,

  // Colores (sRGB). El degradado del esmalte va de arriba (carmesí) a abajo (vino profundo).
  colors:Object.freeze({
    enamelTop:'#a21d3b',
    enamelMid:'#5c0f2b',
    enamelBottom:'#26050f',
    satin:'#f6e6ea',
    pearl:'#f3ecee',
    accent:'#e0405f',
    accentEmissive:'#7a0f2a',
    redLight:'#ff2f5c',
    keyLight:'#ffe9ee',
    rimLight:'#ff5d86'
  }),

  // Movimiento: pocos grados, lento, sin giros continuos.
  motion:Object.freeze({
    swayDegrees:5.5,      // balanceo horizontal máximo
    tiltDegrees:1.8,      // cabeceo máximo
    swaySeconds:11,       // periodo del balanceo
    floatAmount:0.03,     // subida y bajada (fracción de la altura)
    lightSweepSeconds:9,  // un paso del reflejo carmesí
    parallaxDegrees:4,    // seguimiento del puntero (solo puntero fino)
    introSeconds:0.9,     // entrada suave
    calmFactor:0.25       // amplitud mientras se escribe en el formulario
  }),

  // Pose de las imágenes estáticas (grados).
  stillPose:Object.freeze({y:-7,x:2}),

  // Cuadros máximos por segundo del render en vivo.
  maxFps:45
});
