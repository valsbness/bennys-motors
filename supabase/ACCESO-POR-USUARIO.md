# Activar usuario y contraseña

La función `bennys-staff` permite entrar por usuario, solicitar acceso y crear mecánicos desde Equipo. Mantiene Supabase Auth y las reglas de acceso de las ventas. Las operaciones administrativas se ejecutan en el servidor, como requiere [Supabase Auth](https://supabase.com/docs/reference/javascript/auth-admin-createuser).

1. En **SQL Editor**, ejecuta `upgrade-usuarios.sql`. Conserva los datos y las contraseñas. El resultado muestra el usuario asignado a cada cuenta anterior; se usa con su contraseña actual.
2. En **Edge Functions → Deploy a new function → Via Editor**, crea una función llamada **bennys-staff**.
3. Reemplaza el contenido de `index.ts` por el archivo `functions/bennys-staff/index.ts` de este proyecto y pulsa **Deploy function**.
4. En la configuración de esa función, desactiva **Verify JWT with legacy secret / Enforce JWT verification**. El inicio de sesión y la solicitud son públicos; la función valida el token y el rol de administrador antes de crear un empleado. Esta configuración también está en `config.toml`.
5. No pegues claves en el código. Supabase proporciona `SUPABASE_URL`, `SUPABASE_ANON_KEY` y `SUPABASE_SERVICE_ROLE_KEY` dentro del servidor. La clave de administración nunca se incluye en la web. [Variables disponibles](https://supabase.com/docs/guides/functions/secrets), [autenticación de funciones](https://supabase.com/docs/guides/functions/auth).

Los nuevos usuarios utilizan una dirección interna automática de Auth; ninguna pantalla solicita un correo ni necesita confirmación por correo. Los usuarios anteriores conservan su cuenta y contraseña. El usuario admite de 3 a 24 caracteres: letras sin tildes, números, punto, guion o guion bajo.

## Uso

- **Administración:** Equipo → Crear mecánico. Indica nombre, usuario, contraseña inicial y comisión. La cuenta queda activa.
- **Mecánico:** Solicitar acceso. Indica nombre, usuario y contraseña. Administración lo activa desde Equipo.
- **Primer administrador:** solicita acceso, inicia sesión y utiliza el código inicial que devolvió `setup.sql`.

La función limita intentos de acceso y solicitudes en el servidor. No cambies roles ni claves dentro del código del navegador.
