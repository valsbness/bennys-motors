# Emblema 3D de Benny’s · fuente editable

Geometría real del lettering y del monograma, construida con [Three.js](https://threejs.org) (versión fijada: **r186**, `three@0.186.1`) a partir de contornos SVG extruidos con bisel ([`Shape`](https://threejs.org/docs/pages/Shape.html) + [`ExtrudeGeometry`](https://threejs.org/docs/pages/ExtrudeGeometry.html)). No es una imagen inclinada con CSS ni un modelo privado: todo lo que se publica sale de los archivos de esta carpeta.

```
logo3d/
  source/wordmark.svg     Contornos del emblema (Benny’s + remate + MOTORS + filetes). FUENTE DE VERDAD
  source/monogram.svg     Monograma B (copia del contorno de la B del emblema)
  src/config.js           Extrusión, bisel, colores, luces, movimiento (parámetros editables)
  src/logo-model.js       SVG → geometría, materiales (esmalte vino, borde satinado, perla, acento)
  src/stage.js            Escena, entorno de luz, animación, ciclo de vida (pausa, pestaña oculta, fuera de vista)
  src/index.js            Entrada del módulo que se publica
  tools/                  build.mjs, render-assets.mjs, preview.mjs, extract-outlines.mjs
  export/bennys-logo.glb  Modelo exportado (glTF binario) para Blender, Spline, etc.
  licencias/              Licencias de las tipografías de las que proceden los contornos
  preview/index.html      Página de ajuste local
```

## Flujo de trabajo

La web publicada **no necesita instalar nada**: usa el resultado ya compilado en `dist/assets/logo3d/`. Para modificar el emblema:

```bash
npm ci --prefix logo3d        # una sola vez (Three.js, esbuild, opentype.js, polygon-clipping)
npm run logo:preview          # http://127.0.0.1:8093/logo3d/preview/  (ajuste en vivo tras compilar)
# 1. Edita source/wordmark.svg (Inkscape, Figma, Illustrator) o src/config.js
npm run build:logo            # genera dist/assets/logo3d/logo3d.js
npm run logo:assets           # regenera imágenes estáticas, favicon, icono y export/bennys-logo.glb
```

`logo:assets` necesita Playwright y un Chromium con WebGL (por software basta). Define `PLAYWRIGHT_PATH` y `EDGE_PATH` si no usas los valores de `tests/cloud-browser.cjs`.

### Reglas del SVG

- Cada `<path>` o `<rect>` es una pieza. Mantén los contornos **cerrados**; los huecos (por ejemplo, el de la B) se detectan solos.
- `data-capa="esmalte"`: letras principales. Todas las de esta capa se **fusionan** (unión booleana) en una sola silueta antes de extruir, de modo que las letras conectadas del script no dejan costuras de bisel.
- `data-capa="acento"`: filetes de carmesí brillante.
- Los trazados cuyo `id` empieza por `motors-` se extruyen más finos (etiqueta de MOTORS) y usan material perla.
- `y` crece hacia abajo (convención SVG). El modelo se centra y se escala solo.

## Cómo se ve

- **Esmalte vino**: `MeshPhysicalMaterial` con degradado de color por vértice (carmesí arriba → vino abajo) y barniz (`clearcoat`).
- **Borde satinado claro**: el bisel y los laterales usan un metal satinado pálido (grupo de material 1 de `ExtrudeGeometry`).
- **Luz**: entorno propio (sala vino con cajas de luz blancas y carmesí, horneado con `PMREMGenerator`) más un reflejo carmesí que cruza el esmalte cada 9 s. Tonemapping neutro para no desplazar el tono de la marca.
- **Movimiento**: balanceo de ±5,5° (periodo 11 s), cabeceo de ±1,8°, flotación mínima, paralaje de ±4° solo con puntero fino. Nunca gira 360°. Mientras se escribe en el formulario, la amplitud baja al 25 %.

## Rendimiento y fallos

- Carga **diferida**: `dist/brand.js` importa `logo3d.js` solo si hay WebGL (`failIfMajorPerformanceCaveat`), el ambiente no está pausado y `prefers-reduced-motion` no está activo. Antes se muestra la imagen estática `bennys-wordmark.webp`, renderizada desde este mismo modelo.
- El render continuo solo corre si el emblema está en pantalla, la pestaña está visible y el ambiente no está pausado. Al entrar al panel se libera el contexto WebGL.
- Resolución del lienzo limitada (DPR ≤ 1,5 en móviles y equipos de gama baja, ≤ 2 en el resto) y geometría simplificada en el nivel bajo. Si el equipo no sostiene ~20 fps, baja a DPR 1 y, en último caso, vuelve a la imagen.
- Si falla la descarga o el contexto, el acceso y el registro de ventas siguen funcionando con la imagen.
- Parámetros de depuración en la URL: `?logo=static` (solo imagen) y `?logo=3d` (permite render por software; útil en pruebas).

## Licencias

Three.js y polygon-clipping: MIT (ver `dist/assets/logo3d/LICENCIAS.txt`). Los contornos de «Benny’s» proceden de **Yellowtail** (Astigmatic, Apache 2.0) y los de «MOTORS» de **Barlow Condensed** (SIL OFL 1.1); el remate bajo el lettering y los filetes son trazados propios. Los textos completos están en `licencias/`.

`tools/extract-outlines.mjs` documenta cómo se obtuvo el punto de partida de los SVG. **No lo ejecutes sobre un SVG ya editado**: sobrescribe `source/` (pide `--force`).
