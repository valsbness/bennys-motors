---
name: Benny's Motors
description: Cristal ahumado vino y carmesí delante del taller real, con un emblema 3D de esmalte y borde satinado como único gesto firma.
colors:
  obsidian: "#100B10"
  wine-dark: "#35101E"
  wine: "#751C39"
  crimson: "#BE354E"
  bone: "#F3ECEE"
  crimson-hi: "#ff6d8a"
  crimson-glow: "#ff4d74"
  ink: "#f7eef1"
  ink-2: "#dfcad3"
  ink-3: "#bfa6b2"
  green: "#9fdcbb"
  danger: "#ffb7c3"
  amber-status: "#f0c487"
  focus-ring: "#ff8da6"
  field-border-focus: "#ee587f"
typography:
  display-access:
    fontFamily: "'Source Serif 4', Georgia, 'Times New Roman', serif"
    fontSize: "clamp(32px, 8vw, 40px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  metric:
    fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  label:
    fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.2em"
rounded:
  sm: "6px"
  md: "9px"
  lg: "12px"
  xl: "16px"
  card-access: "22px"
  pill: "20px"
spacing:
  sidebar: "248px"
  topbar: "64px"
  main-x: "32px"
  gap-grid: "16px"
  panel-x: "20px"
  field-min: "44px"
components:
  button-primary:
    backgroundColor: "#d62d54"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    height: "42px"
    padding: "9px 16px"
  button-secondary:
    backgroundColor: "rgba(255,255,255,.05)"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    height: "42px"
  button-danger:
    backgroundColor: "rgba(120,20,40,.4)"
    textColor: "#ffc6d0"
    rounded: "{rounded.md}"
  input:
    backgroundColor: "rgba(14,5,11,.58)"
    textColor: "{colors.ink}"
    rounded: "8px"
    padding: "10px 12px"
  panel-data:
    backgroundColor: "rgba(25,8,18,.84)"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
  panel-ambient:
    backgroundColor: "rgba(31,10,21,.62)"
    textColor: "{colors.ink}"
  dialog:
    backgroundColor: "rgba(22,7,16,.95)"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    width: "590px"
  access-card:
    backgroundColor: "rgba(52,16,32,.7)"
    textColor: "#ffffff"
    rounded: "{rounded.card-access}"
    width: "440px"
  status-pill:
    backgroundColor: "rgba(46,128,100,.26)"
    textColor: "{colors.green}"
    rounded: "{rounded.sm}"
---

# Design System: Benny's Motors

## Overview

**Creative North Star: "El cristal ahumado frente al taller"**

Este es un mundo NUEVO que sustituye al tema anterior de carbón y naranja. El sistema es cristal oscuro vino y carmesí flotando delante de fotografías reales del local de Benny's (fachada en el acceso, interior desenfocado en el panel). El naranja ya no es color de interfaz: solo existe como luz de las calabazas dentro de las fotos. La referencia vino de capturas del usuario (`login-cristal-centrado`, `panel-cristal-glow`) y de un prototipo; no hubo tirada de direcciones.

Es una herramienta de trabajo (Operate): el cristal y el brillo carmesí dan ambiente, pero el dato manda. Por eso el cristal tiene dos niveles de opacidad y las superficies que llevan cifras son las más opacas. El brillo (glow) carmesí se reserva a acciones, selección e iconos de acento.

El gesto firma es el emblema 3D de "Benny's" (esmalte vino extruido con borde satinado) sobre el panel de acceso. Todo lo demás es sobrio.

**Key Characteristics:**
- Dos niveles de cristal: ambiente (~62 %) y datos (~84 %), más un sólido (95 %) para diálogos y avisos.
- Un solo acento (carmesí), con texto de acento aclarado a `--crimson-hi` por contraste.
- DM Sans para toda la interfaz con cifras tabulares; Source Serif 4 solo en el titular del acceso.
- Fondos fotográficos estáticos y ya desenfocados; movimiento solo con transform y opacity.

## Colors

Paleta vino-obsidiana con un carmesí vivo; neutros teñidos hacia el vino, nunca grises puros.

### Primary
- **Carmesí** (`--crimson`, #BE354E): base de marca; selección, hover tintado (`rgba(190,53,78,.14-.3)`), botones por degradado `#d62d54 → #a41538`.
- **Carmesí claro** (`--crimson-hi`, #ff6d8a): texto e iconos de acento sobre cristal (contraste anotado ≥6:1). Brillo: `--crimson-glow` #ff4d74.

### Secondary
- **Vino** (`--wine` #751C39) y **Vino oscuro** (`--wine-dark` #35101E): profundidad del degradado del cristal del acceso y del avatar; no se usan como texto.

### Neutral
- **Obsidiana** (`--obsidian`, #100B10): fondo de `html`/`body` y último recurso tras las fotos.
- **Hueso** (`--bone`, #F3ECEE): declarado en `:root`; en la UI el texto usa los tonos `--ink` (#f7eef1), `--ink-2` (#dfcad3) y `--ink-3` (#bfa6b2, texto secundario).
- **Líneas**: `--line` rgba(249,109,139,.2), `--line-strong` rgba(255,100,130,.42), `--line-soft` rgba(249,150,175,.11).
- **Estado**: verde `--green` #9fdcbb (+ `--green-bg`, `--green-line`) para importes positivos y estado correcto; `--danger` #ffb7c3 para errores; ámbar #f0c487 solo en el rótulo de estado del ticket.

### Named Rules
**The Glow-Is-Earned Rule.** El resplandor carmesí (`drop-shadow` / `box-shadow` rosado) solo acompaña acciones, la selección activa e iconos de acento. Nunca a texto de cuerpo ni a cifras (la única excepción es el destello breve `value-flash` al cambiar un valor).

**The Orange-Is-Photo Rule.** No hay naranja en las hojas de estilo; vive solo en las fotografías.

## Typography

**Display Font:** Source Serif 4 600 (con Georgia, serif), solo `h1` del acceso.
**Body Font:** DM Sans 400/500/600/700 (con Segoe UI, system-ui), `body` 14px/1.5.
**Label/Mono Font:** DM Sans en mayúsculas con tracking; recibo en `ui-monospace, Consolas`.

**Character:** una sans de trabajo, ordenada, con números tabulares (`font-variant-numeric: tabular-nums` en tablas, métricas y totales), y un único titular serif de peso 600 que da calidez a la puerta de entrada. Las fuentes se sirven localmente (`assets/fonts`, `font-display: swap`).

### Hierarchy
- **Display acceso** (600, clamp(32px, 8vw, 40px), 1.08): "Inicia tu turno".
- **Headline** (700, 30px, 1.15, -.025em): `h1` de vista; hero del panel `clamp(32px, 3.4vw, 46px)` / 1.05.
- **Title** (600, 16px; 15-22px según panel/diálogo): cabeceras de panel, `modal-head h2` 22px/700.
- **Metric** (700, 28px, tabular): KPI; total de venta 32px; resumen de pago 27px.
- **Body** (400-500, 14px; 13px en tablas y filas, 12px secundario).
- **Label** (600, 11px, +.2em, mayúsculas): `nav-group-label`, etiquetas de campo del acceso; `th` 11px/+.09em; kicker del acceso 11px/+.3em.

### Named Rules
**The One Serif Rule.** El serif aparece una sola vez (titular del acceso). Dentro del panel todo es DM Sans.

## Layout

Shell de tres partes: barra lateral fija de `--sidebar` 248px (216 a ≤1220, 200 a ≤1000, oculta a ≤760), cabecera pegajosa de 64px y `main` con relleno 28/32px (34/40 a ≥1650) y ancho máximo 1700px. Rejillas con hueco de 16px (20px en la venta); `dashboard-grid` 1.8fr/1fr; venta en dos columnas con ticket de 360px (380 a ≥1650) y `position:sticky`. Las métricas son una banda de cuatro lecturas (dos columnas a ≤1000).

El acceso es un panel centrado de 440px en una `grid` de pantalla completa; baja el relleno y el logo a alturas ≤860 y ≤720.

Móvil (≤760): barra inferior de cristal (`mobile-nav`, 66px + safe-area), total flotante, sidebar como cajón de 272px, y las tablas se convierten en tarjetas con etiquetas `data-label`. Tamaño táctil mínimo en navegación y campos: 42-50px.

## Elevation & Depth

Híbrido: profundidad por cristal (opacidad + borde carmesí fino + brillo interior `inset 0 1px rgba(255,214,226,.06)`) y una sombra ambiental, nunca sombras duras.

### Glass Levels
- **Ambiente** (`--glass-ambient` rgba(31,10,21,.62), `.glass-ambient` con `blur(18px) saturate(1.1)`): barra lateral, cabecera, barras móviles. La banda de métricas (`.kpi-grid`) usa el mismo fondo con `blur(14px)`.
- **Datos** (`--glass-data` rgba(25,8,18,.84)): `.panel`, `.summary-panel`, `.table-panel`, `.filter-panel`, `.customer-panel`, `.order-panel`, `.empty-state`, `.home-toolbar`. **Sin `backdrop-filter`, por rendimiento**: la imagen de fondo ya se entrega desenfocada y oscurecida (`bennys-panel-fondo.webp`), así que el navegador no recalcula desenfoques bajo tablas grandes.
- **Sólido** (`--glass-solid` rgba(22,7,16,.95)): diálogos (`blur(20px)`, telón `blur(4px)`) y avisos `toast` (`blur(14px)`).
- **Acceso**: tarjeta con degradado rgba(52,16,32,.7) → rgba(27,8,18,.66) y `blur(22px)`.
- **Campo** (`--field` rgba(14,5,11,.58)): fondo de inputs, buscadores, selectores.
- Si no hay `backdrop-filter`, `@supports not` sube todo a ~.94-.95 de opacidad.

### Shadow Vocabulary
- **Panel** (`--shadow`: `0 12px 34px rgba(8,1,6,.34)`): paneles de datos.
- **Hero** (`0 18px 46px rgba(8,1,6,.4)`), **Tarjeta de servicio en hover** (`0 8px 22px rgba(8,1,6,.4)`), **Diálogo** (`0 30px 90px rgba(5,0,4,.7)` + halo carmesí `0 0 36px rgba(190,53,78,.12)`), **Acceso** (`0 34px 80px rgba(9,0,10,.62)`).
- **Foco de campo**: `0 0 0 3px rgba(238,88,127,.18)` + halo; **anillo de foco global**: `outline: 2px solid #ff8da6; offset 3px`.

### Named Rules
**The Blur-Only-Where-It-Floats Rule.** Desenfoque en vivo solo en lo que flota sobre el fondo (sidebar, topbar, KPI, diálogos, toast, tarjeta de acceso). Las superficies de datos se apoyan en opacidad, no en blur.

**The Data-Reads-First Rule.** Cuanto más numérico el contenido, más opaco el cristal (≥ .84).

## Shapes

Esquinas suaves, graduadas por tamaño: 6px (pills de estado, miniaturas), 7-9px (botones, campos, chips, iconos de acción), 10px (tarjetas de servicio, avisos), 12px (paneles), 14px (hero), 16px (diálogos), 22px (tarjeta de acceso, 18px en móvil). Círculos para avatar, iniciales y puntos de estado; píldora de 20px para la etiqueta de temporada y contadores. Bordes de 1px siempre; separadores `dashed` para el estado vacío y los controles del ticket.

## Components

### Buttons
- **Shape:** 9px, 42px de alto mínimo, 14px/600.
- **Primary:** degradado `110deg #d62d54 → #a41538`, texto blanco, borde rosado y brillo interior; hover `brightness(1.1)` y halo; sube 1px, activo `scale(.985)`.
- **Secondary:** cristal blanco al 5 %, borde rosado .32; hover tinta carmesí .2.
- **Danger:** fondo vino rgba(120,20,40,.4), texto #ffc6d0.
- **Text / Row:** `text-button` en `--crimson-hi`; `row-button` 12px con borde.
- **Icon:** 38px, 9px, hover carmesí .18.

### Inputs / Fields
- Fondo `--field`, borde rgba(255,120,150,.28), 8px, 14px. Foco: borde #ee587f + anillo de 3px y halo. En el acceso `.field` de 50px con icono a la izquierda y botón de revelar.
- Los placeholders usan #b49ba7 (legibles); los `select` llevan chevrón SVG rosado.

### Navigation
- `nav-item` de 44px, 14px, 9px; hover `rgba(190,53,78,.14)`; activo: degradado carmesí lateral, barra de 3px con halo e icono con `drop-shadow`. Etiquetas de grupo en mayúsculas con tracking. Móvil: barra inferior con icono sobre texto de 11px.

### Cards / Containers
- Paneles de datos (12px, borde `--line`), tarjeta de servicio (10px, seleccionada: borde #ee587f, fondo rgba(80,18,42,.7) y distintivo numérico), KPI en banda con separadores verticales, ticket pegajoso con panel de ganancia.

### Tables and status
- `th` 11px mayúsculas en tinta teñida (`rgba(255,120,150,.07)`); `td` con cebra inexistente, solo `border-top` suave y hover `rgba(190,53,78,.09)`. `status-pill` verde 6px; cancelado en carmesí.

### Dialogs
- 590px máx, 16px, borde `--line-strong`, cabecera / cuerpo / pie separados por `--line-soft`. Entrada `dialog-in .22s`.

### Pinned por el usuario
- **Kicker del acceso "ACCESO DEL PERSONAL"** (`.access-kicker`: 11px, +.3em, #ff7897) y **etiqueta "HALLOWEEN"** (`.hero-season` en el hero, `.season-mark` en la cabecera, pastilla de 20px con icono de calabaza) vienen fijados por las capturas de referencia del usuario. Se registran como decisiones del usuario sobre esas dos instancias, no como patrón general para nuevas superficies (véase Don't).

### Emblema 3D (componente firma)
- **Material:** `logo3d/src/config.js`: lettering extruido (profundidad 62, bisel 10/7.5) en esmalte vino con degradado por vértice `#b3213f → #6b1232 → #2c0716` y barniz (`clearcoat`); borde y laterales en metal satinado `#f6e6ea`; "MOTORS" en perla `#f3ecee`; filetes de acento `#e0405f`. Three.js r186 fijado; fuente de verdad `logo3d/source/wordmark.svg`.
- **Movimiento:** balanceo ±5,5° (11 s), cabeceo ±1,8°, flotación .03, reflejo carmesí cada 9 s, paralaje ±4° solo con puntero fino, nunca gira 360°; amplitud al 25 % mientras se escribe; máx 45 fps.
- **Imagen estática de reserva:** `bennys-wordmark.webp`, renderizada del mismo modelo, siempre presente en `.logo-still` (proporción 1000/472). El lienzo `.logo3d-canvas` aparece con `.is-live` (fundido .3 s); si falla, el acceso y las ventas siguen con la imagen.
- **Ciclo de vida:** carga diferida desde `brand.js` solo con WebGL sin degradación de rendimiento, ambiente no pausado y sin `prefers-reduced-motion`; render solo con emblema visible, pestaña visible y ambiente activo; se libera el contexto WebGL al entrar al panel; resolución con DPR ≤1,5 (móvil/gama baja) o ≤2, geometría simplificada en nivel bajo, y si no sostiene ~20 fps baja a DPR 1 y luego a la imagen. `?logo=static` y `?logo=3d` son parámetros de depuración.

### Ambiente
- Fondo fotográfico estático + niebla (30-40 s), 5 brasas carmesí de 2-3px y 2 murciélagos que no cruzan el formulario. Todo decorativo (`aria-hidden`), pausable con "Pausar ambiente" (preferencia persistente), con `prefers-reduced-motion`, pestaña oculta y desactivado en móvil (murciélagos).

### Motion
- Easing único `--ease: cubic-bezier(.2,.7,.2,1)`; solo `transform` y `opacity`. Entrada de vista `view-in .22s`, `rise .32-.4s` escalonado por .03-.06s al abrir (no en cada sincronización), barras `bar-in .55s`, diálogo `dialog-in .22s`, tarjeta de acceso `card-in .55s` + flotación 8 s. Transiciones de estado .15-.2s. `prefers-reduced-motion` anula animaciones y transiciones.

## Do's and Don'ts

### Do:
- **Do** usar `--glass-data` (.84) o más opaco para cualquier superficie con cifras, tablas o formularios, y `--glass-ambient` (.62) solo para estructura que flota.
- **Do** escribir los colores de acento sobre cristal con `--crimson-hi` (#ff6d8a) y el texto con `--ink` / `--ink-2` / `--ink-3`.
- **Do** usar `font-variant-numeric: tabular-nums` en importes, totales y tablas.
- **Do** mantener `--ease` y animar solo `transform` / `opacity`; respetar "Pausar ambiente" y `prefers-reduced-motion`.
- **Do** mantener un estado estático de reserva para todo efecto 3D o de ambiente.
- **Do** tamaños táctiles de 42-50px en acciones principales.

### Don't:
- **Don't** añadir `backdrop-filter` a paneles de datos, tablas o filtros; el rendimiento depende de la imagen de fondo ya desenfocada.
- **Don't** reintroducir naranja ni el tema de carbón del diseño anterior en la interfaz.
- **Don't** hacer girar el emblema 360° ni dejarlo renderizando fuera de pantalla, con la pestaña oculta o ya dentro del panel.
- **Don't** usar glow sobre texto de cuerpo o cifras.
- **Don't** copiar el kicker en mayúsculas con tracking a otras pantallas: está pinned por el usuario solo en el acceso, y la etiqueta HALLOWEEN solo en las tres posiciones existentes.
- **Don't** sustituir el serif ni introducir otra familia; el serif es solo del titular del acceso.
