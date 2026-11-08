# Dirección visual · cristal vino, Halloween y taller real

Sustituye a la dirección anterior (carbón y naranja). Las decisiones de diseño son del usuario y son obligatorias:

- Predominio de vino, negro y rojo carmesí. El naranja se limita a la luz natural de algunas calabazas (dentro de las fotografías).
- Estética limpia y futurista: sin maquinaria pesada, acero, tornillos ni engranajes decorativos.
- Halloween tradicional: calabazas, luna, niebla, murciélagos y telarañas. Sin Día de Muertos ni calaveras.
- Sin el pie «Los Santos / Motors & Customs» ni su línea decorativa en el acceso, el panel o el móvil.
- Acceso por usuario y contraseña (sin correo). Clientes solo por nombre.

## Paleta

| Uso | Valor |
|---|---|
| Obsidiana (base) | `#100B10` |
| Vino oscuro | `#35101E` |
| Vino | `#751C39` |
| Carmesí (acciones) | `#BE354E` |
| Hueso (texto) | `#F3ECEE` |
| Carmesí claro para texto/iconos sobre cristal | `#ff6d8a` |

Los errores se distinguen con texto e icono, no solo con color. Los estados cobrados usan un verde discreto.

## Cristal en dos niveles

- **Ambiente** (barra lateral, cabecera, banda de métricas): ≈ 64 % de opacidad con desenfoque real (`backdrop-filter`).
- **Datos** (tablas, resúmenes, formularios): ≈ 86 % de opacidad. El fondo del panel (`bennys-panel-fondo.webp`) ya llega desenfocado y oscurecido, de modo que no se recalcula un desenfoque por superficie.
- Glow carmesí solo en acciones, selección e iconos. Sin parpadeos ni destellos rápidos.

## Tipografía

DM Sans para la interfaz (cifras tabulares), Source Serif 4 600 para el titular del acceso. El lettering del emblema procede de Yellowtail (Apache 2.0) y Barlow Condensed (OFL 1.1); ver `logo3d/`.

## Movimiento

Transiciones de 180–280 ms, solo `transform` y `opacity` en lo posible; entrada escalonada de vistas únicamente al abrirlas (no en cada sincronización). El panel de acceso flota 6 px y se detiene al enfocar un campo. Pausa persistente (`bennys-ambient-paused`), `prefers-reduced-motion` respetado, render 3D detenido con la pestaña oculta o fuera de vista.

## Recursos

Ver `docs/procedencia-imagenes.md` (origen y prompts) y `logo3d/README.md` (emblema 3D editable).
