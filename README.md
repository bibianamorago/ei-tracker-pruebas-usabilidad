# Bitácora de pruebas de usabilidad · EI Tracker

**👉 Abre la herramienta aquí: https://bibianamorago.github.io/ei-tracker-pruebas-usabilidad/**

Herramienta para moderar y registrar las sesiones de usabilidad de EI Tracker (ServiceNow) siguiendo el guion de 30 minutos por rol (Reviewer, KLD, Consultant). Los datos se guardan en una base de Airtable compartida por todo el equipo.

No hay que instalar nada: se abre en el navegador desde el enlace de arriba. Cada persona conecta con su propio token de Airtable la primera vez.

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

**Lo que es público:** el código de la herramienta, el ID de la base de Airtable y los nombres de las tablas y campos. Esa información, por sí sola, no da acceso a nada: la API de Airtable rechaza cualquier petición que no traiga un token válido con permiso concedido sobre la base.

**Lo que no es público:** ninguna sesión, nota, cita ni hallazgo. Todo eso vive en Airtable.

> **Lo que protege las respuestas de las personas participantes son los permisos de la base de Airtable, no la visibilidad de este repositorio.** Quien administre la base controla quién entra; nadie más puede leer nada.

**Tu token nunca se sube aquí.** Se guarda solo en el `localStorage` de tu navegador. No está en el código, no viaja a GitHub y no se comparte con el resto del equipo — cada persona usa el suyo.

### Regla obligatoria sobre datos personales

En el campo **"Participante"** usa siempre un código o alias (`R-01`, `KLD-03`…), **nunca el nombre completo** de la persona. Lo mismo con las citas literales: si alguien menciona su nombre, el de un cliente o cualquier dato identificable, anonimízalo al transcribirlo.

No es una recomendación de estilo. Es lo que permite que, si algún día hay que dar acceso a la base a alguien de fuera del equipo de investigación, se pueda hacer sin exponer a quienes participaron.

## Qué hace

- **Registrar sesión**: formulario guiado en 6 pasos (Apertura, Orientación, Navegación común, Tarea crítica, Cierre, Después de la sesión) con el guion incrustado — qué leer en voz alta, checklist de qué observar, cronómetro por bloque y botones grandes para marcar el resultado.
- **Sesiones**: lista de todo lo registrado por el equipo, con detalle completo por sesión.
- **Síntesis**: métricas agregadas (tasa de éxito de tareas P0, tareas con más fricción, hallazgos filtrables, exportación a CSV).
- **Matriz de evidencia**: agrupa insights por tema para ver qué se repite entre roles y sesiones.
- **Guion completo**: referencia de todas las tareas, happy paths, matriz de permisos y datos de prueba necesarios, para consultar durante la moderación.

Un botón flotante **"Chuleta del facilitador"** resume las frases neutrales a usar/evitar y qué hacer si alguien se bloquea en una tarea.

## Cómo compartir los resultados

- **Con el equipo de investigación**: manda el enlace de arriba. Quien lo abra con su propio token ve las sesiones, la síntesis y la matriz de evidencia de todo el mundo, en tiempo real.
- **Con quien no tiene acceso a Airtable**: usa **Exportar CSV** desde la pestaña Síntesis para sacar los hallazgos. Repasa el CSV antes de enviarlo, por si alguna cita se coló sin anonimizar.

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
index.html   ← la herramienta, un único archivo
README.md    ← este archivo
```

`index.html` es lo que sirve GitHub Pages. También funciona si lo descargas y lo abres con doble clic.

## Soporte

Si algo no conecta o se comporta raro, revisa primero el mensaje bajo "Detalle:" en el aviso rojo de la parte superior — indica si es un problema de token, de permisos en Airtable, o de conexión.
