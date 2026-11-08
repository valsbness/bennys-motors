# Product

<!-- impeccable:product-schema 1 -->

> Derivado del brief entregado (`CONTINUAR-EN-CLAUDE.md`, `ASSETS-Y-ANIMACIONES.md`). No hubo ronda de entrevista: el brief ya fija usuarios, funciones y restricciones. Lo que no figura en el brief se marca como no decidido.

## Platform

web

## Stack

Aplicación estática HTML/CSS/JavaScript compatible con GitHub Pages (decisión previa del repositorio; no migrar a un framework ni añadir servidor para la UI). Supabase (Auth, RLS, RPC y Edge Function `bennys-staff`) como backend ya instalado. `dist/bundle.js` se genera con `node build.mjs`.

## Users

Personal de Benny’s Motors, un taller de personalización de coches dentro de un servidor de rol (FiveM). Mecánicos que registran servicios cobrados durante su turno, y administración que crea o aprueba cuentas, fija tarifas, controla gastos y revisa la actividad. Usan el panel en escritorio y en móvil, a menudo con prisa y entre tareas.

## Product Purpose

Registrar ventas de servicios con precios y cálculos fiables, consultar clientes frecuentes por nombre y controlar comisiones, gastos y actividad del taller. Éxito: una venta se registra sin errores ni cobros duplicados y administración ve cifras reales por período.

## Positioning

Herramienta interna con identidad propia del taller (el local real: fachada de ladrillo con grafitis y persiana roja, entreplanta azul, lowrider verde), no una plantilla de gestión genérica.

## Operating Context

- Acceso solo por usuario y contraseña; no se pide correo. Administración crea mecánicos o aprueba sus solicitudes.
- El mecánico comprueba el pago dentro del juego; la app no verifica pagos de FiveM.
- Los importes están en euros. Comisión sobre el margen positivo tras el descuento.
- El administrador ve todo el taller; cada empleado ve los registros permitidos por su cuenta; cuentas pendientes o inactivas no tienen acceso operativo.

## Capabilities and Constraints

- 18 servicios con tarifas originales del taller (no inventar precios), tarifas editables solo por administración.
- Cálculos de descuento, costo de piezas, comisión sobre margen positivo y margen neto del taller. Borrador persistente, prevención de cobro duplicado, clientes frecuentes por nombre, exportaciones CSV, comisiones, gastos, anulaciones con motivo (el registro se conserva) y auditoría.
- Clientes solo por nombre: sin ID, vehículo ni matrícula.
- Las comisiones generadas no son pagos de nómina; el resultado operativo no es el saldo bancario del juego.
- Supabase: proyecto `ehckobsmodqjpfmnnver` ya inicializado (setup.sql, upgrade-profesional.sql, upgrade-usuarios.sql, función `bennys-staff`). No reinicializar. La `service_role` nunca aparece en la web, el repositorio ni el ZIP. No se piden ni inventan contraseñas, sesiones ni código inicial de administrador.
- La autenticación y el registro de ventas deben funcionar aunque falle el 3D o cualquier efecto.
- Pendiente de decidir: publicación en GitHub Pages (requiere acceso autorizado al repositorio ElCodexVEVO/bennysmotor).

## Brand Commitments

Decisiones del usuario que son obligatorias (se registran, no se amplían):

- Predominio de vino, negro y carmesí; el naranja se limita a la luz natural de algunas calabazas.
- Estética limpia y futurista; sin maquinaria pesada, acero, tornillos ni engranajes decorativos.
- Halloween tradicional (calabazas, luna, niebla, murciélagos, telarañas); sin Día de Muertos ni calaveras decorativas.
- Sin el pie “Los Santos / Motors & Customs” ni su línea decorativa, en ningún tamaño.
- Logo 3D real (geometría extruida con bisel), con fuente editable; emblema “Benny’s” y monograma B con la misma geometría.

## Evidence on Hand

- Cinco fotografías reales del local (`entrega/.../referencias/fotos-servidor/`) y dos fondos generados a partir de ellas (exterior para el acceso, interior para el panel).
- Dos conceptos estáticos de dirección visual (acceso y panel) cuyos nombres, cifras y actividades son ficticios y no deben copiarse a la app.
- No hay modelo 3D previo, ni logo vectorial: se construyen en este trabajo.

## Product Principles

1. Fiabilidad antes que espectáculo: el efecto nunca tapa precios, inputs ni controles, y el trabajo continúa si falla.
2. Los datos mandan: cifras tabulares, jerarquía clara, superficies de datos más opacas que las de ambiente.
3. Cada animación responde a un evento real; no hay esperas ni progresos inventados.
4. Un solo mundo visual (vino, carmesí, Halloween), propio del taller; el orden de una herramienta de trabajo sigue intacto.

## Accessibility & Inclusion

Contraste legible sobre cristal, teclado y foco visibles, errores de formulario con texto e icono (no solo color), `prefers-reduced-motion` respetado, pausa persistente del ambiente, versión estática coherente sin WebGL, uso cómodo en móvil de 360 px.
