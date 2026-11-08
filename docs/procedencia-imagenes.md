# Procedencia de las imágenes

| Archivo | Origen |
|---|---|
| `dist/assets/halloween/bennys-acceso-fachada.webp` | Fondo del acceso (escritorio y tablet). Generado con ImageGen a partir de las fotografías del taller del usuario (prompt «exterior» en `docs/PROMPTS-IMAGENES.md`). Optimizado a WebP. Se muestra **sin retoques** y ampliada con CSS (`dist/access.css`) para que puerta, neón y calabazas queden junto al panel centrado; no hay rellenos ni desenfoques añadidos. |
| `dist/assets/halloween/bennys-panel-interior.webp` | Cabecera del panel. Generado con ImageGen a partir de las fotografías del taller (prompt «interior» en `docs/PROMPTS-IMAGENES.md`). Optimizado a WebP. |
| `dist/assets/halloween/bennys-acceso-movil.webp` | Versión vertical para móvil (700×1515): recortes nítidos de la propia fachada (neón y telarañas arriba, calabazas abajo). Generado con `npm run backgrounds`. |
| `dist/assets/halloween/bennys-panel-fondo.webp` | `bennys-panel-interior.webp` con desenfoque suave y más oscuro (1600×900) para el fondo del panel. Generado con `npm run backgrounds`. |
| `dist/assets/logo3d/bennys-wordmark.webp`, `bennys-monogram.webp`, `dist/assets/apple-touch-icon.png` | Render de la geometría 3D de `logo3d/` (no son ilustraciones independientes). Generados con `npm run logo:assets`. |
| `dist/assets/favicon.svg` | Contorno vectorial del monograma (`logo3d/source/monogram.svg`). |
| `dist/assets/garage.webp` | Ilustración de la versión anterior (tema naranja). Ya no se utiliza; se conserva por historial. |

Los fondos del acceso y del panel son reinterpretaciones del local, no capturas del servidor. Las referencias de diseño (conceptos estáticos) y las fotografías originales viajan en el ZIP de la entrega y no se publican en el sitio. Cada imagen de `dist/assets` lleva un archivo `.json` con su origen o prompt (metadatos de procedencia).
