# Bitácora de pruebas de usabilidad · EI Tracker

Herramienta para moderar y registrar las sesiones de usabilidad de EI Tracker (ServiceNow) siguiendo el guion por rol (Reviewer, KLD, Consultant). Los datos se guardan en una base de Airtable compartida por todo el equipo.

Hay **dos versiones**, según para quién:

| Versión | Enlace | Para quién | ¿Necesita token? |
| --- | --- | --- | --- |
| **Registro de sesiones** | https://bibianamorago.github.io/ei-tracker-pruebas-usabilidad/ | Equipo de investigación que modera y registra | Sí, el token personal de Airtable |
| **Resultados (solo lectura)** | https://bibianamorago.github.io/ei-tracker-pruebas-usabilidad/resultados.html | Negocio y producto | No |

No hay que instalar nada: se abren en el navegador desde el enlace.

La versión de **resultados** muestra un resumen **agregado** (métricas, tareas con más fricción, temas de insight) y el guion completo. **No** incluye el texto literal de los hallazgos ni las citas de las personas participantes — eso vive solo en Airtable. Ver [Cómo publicar los resultados](#cómo-publicar-los-resultados-para-negocio-y-producto) más abajo.

## Cómo empezar (una vez por persona)

1. Pide acceso a la base de Airtable **"EI Tracker · Pruebas de usabilidad"** a quien la administre.
2. Crea tu token personal en [airtable.com/create/tokens](https://airtable.com/create/tokens):
   - Nombre: el que quieras (ej. "EI Tracker bitácora").
   - Scopes: `data.records:read` y `data.records:write`.
   - Access: **selecciona únicamente la base "EI Tracker · Pruebas de usabilidad"**. No des acceso a "todas las bases" — así, si algún día tu token se filtra, solo alcanza a esta.
   - Crea el token y cópialo (empieza por `pat...`). Airtable solo lo muestra una vez.
3. Abre https://bibianamorago.github.io/ei-tracker-pruebas-usabilidad/
4. La primera vez te pedirá el token: pégalo y pulsa **Guardar y conectar**. Se queda guardado en ese navegador; no hace falta repetirlo cada vez.

Si algún día tu token deja de funcionar (por ejemplo si lo revocas), la app te avisará y te dejará pegar uno nuevo desde el botón **"Configurar token"** en la barra superior.

## Privacidad: qué protege qué

Este repositorio es **público**, así que conviene tener clara la frontera real.

**Lo que es público:** el código de la herramienta, el ID de la base de Airtable y los nombres de las tablas y campos. Esa información, por sí sola, no da acceso a nada: la API de Airtable rechaza cualquier petición que no traiga un token válido con permiso concedido sobre la base. También es público el archivo `datos.json` (si existe): un **resumen agregado** — recuentos, porcentajes y temas de insight — que alimenta la versión de resultados.

**Lo que nunca es público:** el texto literal de los hallazgos, las citas de las participantes, las notas por sesión y cualquier respuesta libre. Nada de eso entra en `datos.json`; vive solo en Airtable.

> **Lo que protege las respuestas de las personas participantes son los permisos de la base de Airtable, no la visibilidad de este repositorio.** Quien administre la base controla quién entra. Lo único que sale de ahí a la web es el resumen agregado que el equipo decide publicar.

**Tu token nunca se sube aquí.** Se guarda solo en el `localStorage` de tu navegador. No está en el código, no viaja a GitHub y no se comparte con el resto del equipo — cada persona usa el suyo.

### Regla obligatoria sobre datos personales

En el campo **"Participante"** usa siempre un código o alias (`R-01`, `KLD-03`…), **nunca el nombre completo** de la persona. Lo mismo con las citas literales: si alguien menciona su nombre, el de un cliente o cualquier dato identificable, anonimízalo al transcribirlo.

No es una recomendación de estilo. Es lo que permite que, si algún día hay que dar acceso a la base a alguien de fuera del equipo de investigación, se pueda hacer sin exponer a quienes participaron.

## Qué hace

- **Registrar sesión**: formulario guiado con el guion incrustado — qué leer en voz alta, checklist de qué observar, cronómetro por bloque y botones grandes para marcar el resultado. Cada sesión recorre Apertura, Orientación, Navegación común, **todas las tareas críticas del rol**, Cierre y Después de la sesión. El número de pasos depende del rol.
- **Añadir tareas sobre la marcha**: si en la sesión pruebas algo que no está en el guion, el botón **"+ Añadir tarea"** crea un bloque más con su nombre, prioridad y consigna. Se guarda en Airtable como "Tarea adicional".
- **Sesiones**: lista de todo lo registrado por el equipo, con detalle completo por sesión.
- **Síntesis**: métricas agregadas (tasa de éxito de tareas P0, tareas con más fricción, hallazgos filtrables, exportación a CSV).
- **Matriz de evidencia**: agrupa insights por tema para ver qué se repite entre roles y sesiones.
- **Guion completo**: referencia para consultar durante la moderación, **con una pestaña por perfil** (Reviewer, KLD, Consultant). Cada pestaña trae la estructura de la sesión con los tiempos sumados, las tareas y prioridades, los happy paths y el guion completo. Debajo están la matriz de permisos, los datos de prueba y los riesgos, comunes a los tres perfiles.

Un botón flotante **"Chuleta del facilitador"** resume las frases neutrales a usar/evitar y qué hacer si alguien se bloquea en una tarea.

## Cómo publicar los resultados para negocio y producto

La versión de resultados no se actualiza sola: lee un archivo `datos.json` que hay que regenerar cuando haya sesiones nuevas. El archivo lleva **solo agregados** (nunca el texto de hallazgos ni las citas), así que puede vivir en el repositorio público sin exponer a las participantes.

Para actualizarlo:

1. Abre la versión de **registro de sesiones** y conéctate con tu token.
2. Ve a la pestaña **Síntesis** y pulsa **"Exportar snapshot para negocio"**. Se descarga `datos.json`.
3. Sube ese `datos.json` a la raíz del repositorio (reemplazando el anterior). Puedes arrastrarlo en GitHub → *Add file* → *Upload files*, o pasárselo a quien administre el repo.
4. En un minuto, la versión de resultados muestra los datos nuevos.

Mientras no exista `datos.json`, la versión de resultados enseña el guion completo y avisa de que aún no hay datos publicados.

**Con quien no tiene acceso a Airtable y quiere el detalle**: usa **Exportar CSV** desde la pestaña Síntesis para sacar los hallazgos completos. Repasa el CSV antes de enviarlo, por si alguna cita se coló sin anonimizar.

## Dónde viven los datos

Base de Airtable: **EI Tracker · Pruebas de usabilidad**, con 4 tablas:

| Tabla | Contenido |
| --- | --- |
| Sesiones | Ficha, métricas y síntesis de cada sesión |
| Registro por tarea | Una fila por tarea observada dentro de cada sesión |
| Hallazgos | Hallazgos con severidad y recomendación |
| Insights | Insights con la plantilla necesidad/motivación/barrera/consecuencia |

Cualquier persona con acceso a la base puede ver y editar los datos desde Airtable directamente, además de desde esta herramienta.

## Estructura del repositorio

```
index.html       ← versión de registro de sesiones (equipo, con token)
resultados.html  ← versión de resultados para negocio y producto (sin token)
guion.js         ← el guion y las tablas de referencia, compartidos por las dos páginas
datos.json       ← snapshot agregado que alimenta resultados.html (se regenera; puede no existir aún)
README.md        ← este archivo
```

El guion vive **solo** en `guion.js`, así que las dos páginas siempre muestran lo mismo: si cambias una tarea, cámbiala ahí una vez. `datos.json` es lo único que contiene datos de sesiones, y solo en forma agregada.

## Soporte

Si algo no conecta o se comporta raro, revisa primero el mensaje bajo "Detalle:" en el aviso rojo de la parte superior — indica si es un problema de token, de permisos en Airtable, o de conexión.
