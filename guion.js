/* ===================== Contenido del guion (compartido) =====================
   Este archivo es la ÚNICA fuente del guion y las tablas de referencia.
   Lo usan las dos páginas: index.html (registro de sesiones) y
   resultados.html (vista de negocio/producto). Si cambias una tarea o un
   texto del guion, cámbialo aquí y las dos páginas quedan al día.
   ==========================================================================*/

const ROLES = ["Reviewer", "KLD", "Consultant"];
const SEVERIDADES = ["Alta", "Media", "Baja"];
const PERMISOS = [
  ["Ver estadísticas generales del banco", "Sí", "Sí, opcional", "Sí"],
  ["Ver estadísticas del sector", "Sí, mediante filtros", "Sí, vista principal", "Sí, mediante filtros"],
  ["Filtrar dashboard y Tracker EI", "Sí", "Sí", "Sí"],
  ["Consultar Tracker EI", "Sí", "Sí", "Sí"],
  ["Ver detalle e histórico", "Sí", "Sí", "Sí"],
  ["Enviar manualmente una solicitud de actualización", "No; el proceso es automático", "No", "No"],
  ["Ver EIs marcadas Pending update", "Sí, para seguimiento", "Sí, dentro de su ámbito", "No"],
  ["Completar una EI Pending update", "Seguimiento", "Sí", "No"],
  ["Actualizar una EI sin estado Pending update", "Sí", "Sí, dentro de su ámbito", "No"],
  ["Editar una EI existente", "Sí", "Sí, dentro de su ámbito", "No"],
  ["Crear una EI", "Sí", "No definido para este estudio", "No"],
  ["Reportar una nueva EI", "No es su flujo principal", "No definido para este estudio", "Sí"],
  ["Gestionar usuarios", "Sí", "No", "No"]
];
const PRIORIDADES = [
  ["P0 — Crítica", "Responsabilidad central del rol. Un fallo bloquea trabajo operativo.", "Debe probarse como tarea principal."],
  ["P1 — Frecuente", "Permite comprender, localizar o priorizar trabajo.", "Puede formar parte del inicio de una tarea P0."],
  ["P2 — Ocasional", "Es necesaria, pero sucede con menor frecuencia o necesita una sesión específica.", "Añadirla como tarea extra si sobra tiempo."],
  ["Informativa", "Ayuda a comprender el estado del sistema sin modificar datos.", "Observar comprensión; no tratar como tarea aislada."],
  ["Restringida", "No corresponde al rol.", "Verificar que no aparezca como acción disponible."]
];
const DATOS_PRUEBA = [
  "Una EI en progreso y asignada al sector del Reviewer.",
  "Una EI del sector marcada automáticamente como Pending update.",
  "Una EI del sector con información desactualizada, sin estado Pending update.",
  "Una EI completada con histórico y publicaciones.",
  "Datos suficientes para que los filtros de sector y país devuelvan resultados distintos.",
  "Datos válidos para reportar o crear una nueva EI.",
  "Una posible EI duplicada para comprobar prevención de errores."
];
const RIESGOS = [
  "El Consultant puede reportar una nueva EI, pero no puede editar una EI existente. La pantalla de edición ubicada en su sección de Figma no debe interpretarse como un permiso del rol.",
  "Debe definirse qué sucede después de que el Consultant reporta una EI: creación inmediata, revisión previa o asignación a un responsable.",
  "Debe confirmarse si el Reviewer puede crear o autoreportar nuevas EIs. Esta tarea no se incluye en su alcance actual hasta recibir definición.",
  "Debe confirmarse el permiso de exportación para Reviewer y Consultant.",
  "Las etiquetas deben diferenciar claramente “Crear EI”, “Reportar nueva EI”, “Editar EI” y “Pending update”.",
  "El diseño no debe mostrar a KLD controles para enviar o crear manualmente una solicitud de actualización.",
  "Debe definirse y comunicar qué regla automática cambia una EI a Pending update, a quién se asigna y cuándo deja de estar pendiente."
];
const SEVERIDAD_CRITERIO = [
  ["Alta", "Impide completar una tarea P0, provoca una modificación incorrecta o pone en riesgo la integridad de los datos."],
  ["Media", "Ralentiza la tarea, genera dudas importantes o requiere ayuda, pero existe recuperación."],
  ["Baja", "Produce una duda menor, una preferencia o una mejora de comprensión sin bloquear la tarea."]
];
const FIGMA = [
  ["Happy path KLD", "https://www.figma.com/design/2WDiu2LC0BnjjhoMPiwAiR/Impact-Evaluation?node-id=1090-11131"],
  ["Happy path Reviewer", "https://www.figma.com/design/2WDiu2LC0BnjjhoMPiwAiR/Impact-Evaluation?node-id=1090-14835"],
  ["Happy path Consultant", "https://www.figma.com/design/2WDiu2LC0BnjjhoMPiwAiR/Impact-Evaluation?node-id=1090-16719"]
];
const GUION = {
  Reviewer: {
    principal: true,
    objetivo: "Mantener actualizada la información de las Evaluaciones de Impacto de su sector, atender las EIs que el sistema marca como Pending update y detectar por iniciativa propia cuándo una EI necesita cambios.",
    tareas: [
      ["P0","Revisar cómo avanzan las EIs de su sector","Identifica volumen, estados, pendientes y evaluaciones que requieren atención."],
      ["P0","Actualizar una EI marcada Pending update","Identifica la EI pendiente, actualiza la información necesaria y completa la actualización."],
      ["P0","Realizar una actualización autónoma","Encuentra una EI de su sector, edita la información desactualizada y guarda los cambios con trazabilidad."],
      ["P1","Encontrar una EI de su sector","Usa filtros, búsqueda, ordenamiento o la tabla para localizarla."],
      ["P1","Revisar detalle e histórico","Comprende el estado actual, última actualización, datos existentes y cambios previos antes de editar."],
      ["P1","Ver estadísticas generales del banco","Cambia a la vista general cuando necesita comparar su sector con el contexto global."],
      ["P1","Aplicar y limpiar filtros","Ajusta el alcance de la información sin perder el contexto seleccionado."],
      ["Informativa","Interpretar estados y fechas límite","Distingue qué está pendiente, completado o vencido y qué requiere acción."],
      ["Restringida","Editar EIs fuera de su ámbito","La acción no está disponible o se explica la restricción sin exponer controles inválidos."],
      ["Restringida","Gestionar usuarios","La acción no está disponible."]
    ],
    happyPaths: [
      ["Actualización requerida automáticamente","Dashboard del sector → EI con estado Pending update → detalle de EI → editar información → guardar actualización → confirmación → EI deja de estar pendiente."],
      ["Actualización autónoma","Dashboard del sector o Tracker EI → localizar EI → revisar detalle e histórico → editar EI → guardar → confirmación → histórico actualizado."],
      ["Consulta general opcional","Dashboard del sector → vista general → aplicar filtros → comparar información → volver al contexto del sector."]
    ],
    orientacion: {
      nombre:"Orientación — Reviewer", duracion:"4 min", prioridad:"P0",
      contexto:"Acabas de entrar a EI Tracker y quieres saber cómo van las Evaluaciones de Impacto de tu sector.",
      tarea:"Revisa la pantalla y cuéntame qué requiere tu atención y cuál sería tu siguiente acción.",
      observar:["Si reconoce que la vista corresponde a su sector.","Si distingue EIs completadas, en progreso, identificadas y actualizaciones pendientes.","Si identifica EIs en estado Pending update que debe atender.","Si encuentra la opción para consultar estadísticas generales del banco."],
      sondeo:[]
    },
    navegacion: {
      nombre:"Navegación común — Reviewer", duracion:"5 min", prioridad:"P1",
      contexto:"Necesitas revisar una EI específica de tu sector porque su información puede haber cambiado.",
      tarea:"Encuentra la EI, abre su detalle y averigua su estado, última actualización y cambios anteriores.",
      observar:["Uso de filtros, búsqueda y tabla.","Comprensión de filtros activos.","Capacidad de distinguir detalle, histórico y acciones disponibles.","Conservación del contexto al volver."],
      sondeo:[]
    },
    criticas: [
      {
        nombre:"Atender una EI marcada Pending update", duracion:"10 min", prioridad:"P0",
        contexto:"El sistema ha marcado una EI de tu sector como Pending update.",
        tarea:"Encuentra la EI pendiente, revisa su información, actualízala y completa el proceso.",
        observar:["Descubrimiento de la EI marcada Pending update.","Comprensión de por qué requiere atención y de su fecha límite, si existe.","Diferenciación entre información editable y solo lectura.","Validaciones y conservación de datos.","Comprensión de la confirmación final.","Si entiende que la EI ya no debe aparecer como pendiente y que KLD podrá ver el estado actualizado.","Si asume que solo puede editar cuando el sistema se lo pide, o entiende que también puede hacerlo por iniciativa propia."],
        sondeo:["¿Cómo comprobarías que la actualización quedó guardada y que la EI ya no está pendiente?","Si te enteras de que otra EI tuya ha cambiado y el sistema no te ha avisado, ¿qué harías?"]
      },
      {
        nombre:"Comparación sector/global", duracion:"8 min", prioridad:"P0",
        contexto:"Quieres saber cómo va tu sector respecto al conjunto del banco.",
        tarea:"Cambia a la vista general, aplica los filtros que necesites para comparar tu sector con el total y vuelve al contexto de tu sector.",
        observar:["Si encuentra la vista general y entiende que sigue siendo consulta, no edición.","Qué compara y con qué referencia (sector vs. banco, periodo, estado).","Uso y limpieza de filtros sin perder el contexto del sector.","Si sabe volver a su ámbito después de comparar.","Si la comparación le sirve para decidir sobre qué EI actuar."],
        sondeo:["¿Qué te confirma que volviste al contexto de tu sector?","¿Qué harías con esta comparación en tu trabajo real?"]
      }
    ]
  },

  KLD: {
    objetivo: "Supervisar las Evaluaciones de Impacto de todo el banco, monitorear las actualizaciones generadas automáticamente y mantener los registros y usuarios del sistema.",
    tareas: [
      ["P0","Revisar las estadísticas generales del banco","Comprende el estado global de las EIs y detecta áreas que requieren seguimiento."],
      ["P0","Monitorear actualizaciones automáticas","Distingue EIs pendientes, completadas y vencidas y abre la evaluación relacionada.", true],
      ["P0","Editar una EI existente","Modifica información válida y confirma que el cambio quedó guardado y registrado."],
      ["P0","Crear una nueva EI","Registra una EI con los datos mínimos y evita duplicados."],
      ["P1","Filtrar estadísticas y Tracker EI","Reduce el alcance por sector, división, país, estado, año u otros filtros disponibles."],
      ["P1","Encontrar una EI","Usa el Tracker, búsqueda, filtros y ordenamiento para localizarla."],
      ["P1","Revisar detalle e histórico","Comprende estado, responsable, última actualización, fuente y cambios previos."],
      ["P2","Gestionar usuarios y roles","Crea o modifica usuarios y confirma sus permisos."],
      ["Informativa","Interpretar métricas, gráficos y estados","Utiliza la información para decidir dónde intervenir."]
    ],
    happyPaths: [
      ["Editar una EI","Tracker EI → localizar EI → detalle → editar → validar → guardar → confirmación → histórico actualizado."],
      ["Crear una EI","Dashboard o Tracker EI → nueva EI → completar datos mínimos → revisar posible duplicado → confirmar creación → detalle de la nueva EI."],
      ["Gestionar usuarios","Navegación → gestión de usuarios → buscar usuario → crear o editar → confirmar rol y permisos."]
    ],
    orientacion: {
      nombre:"Orientación — KLD", duracion:"4 min", prioridad:"P0",
      contexto:"Acabas de entrar a EI Tracker y necesitas identificar la situación general de las Evaluaciones de Impacto del banco.",
      tarea:"Revisa el dashboard y cuéntame qué áreas requieren atención.",
      observar:["Lectura de estadísticas globales.","Interpretación de estados de actualización.","Uso esperado de filtros.","Priorización de divisiones, sectores o EIs."],
      sondeo:[]
    },
    navegacion: {
      nombre:"Navegación común — KLD", duracion:"5 min", prioridad:"P1",
      contexto:"Necesitas revisar una EI específica antes de decidir si debes intervenir.",
      tarea:"Encuentra la EI, abre el detalle y revisa su estado, responsable, última actualización e histórico.",
      observar:["Uso de filtros y Tracker EI.","Comprensión del estado.","Acceso a detalle e histórico.","Claridad de acciones disponibles."],
      sondeo:[]
    },
    criticas: [
      {
        nombre:"Editar una EI existente", duracion:"10 min", prioridad:"P0",
        contexto:"Detectaste que el estado y la división responsable de una EI son incorrectos.",
        tarea:"Corrige la información y comprueba que el cambio quedó registrado.",
        observar:["Descubrimiento de edición.","Validación de datos.","Guardado y confirmación.","Descarte de cambios si intenta salir.","Histórico actualizado."],
        sondeo:[]
      },
      {
        nombre:"Crear una nueva EI", duracion:"10 min", prioridad:"P0",
        contexto:"Necesitas registrar una EI que todavía no aparece en la plataforma.",
        tarea:"Crea la evaluación con la información disponible y revisa qué ocurriría si existiera una posible duplicada.",
        observar:["Descubrimiento de “Nueva EI”.","Comprensión de campos obligatorios.","Carga cognitiva del formulario.","Prevención de duplicados.","Confirmación y acceso al nuevo detalle."],
        sondeo:[]
      }
    ],
    ocultas: [
      {
        nombre:"Monitorear actualizaciones automáticas", motivo:"Oculta por ahora a petición del equipo.",
        contexto:"Necesitas comprobar qué EIs han sido marcadas automáticamente para actualización y conocer su progreso.",
        tarea:"Localiza las actualizaciones, distingue cuáles están pendientes y cuáles se han completado, y abre una EI pendiente para revisar su situación."
      }
    ]
  },

  Consultant: {
    objetivo: "Consultar las Evaluaciones de Impacto, explorar información mediante filtros y reportar una nueva evaluación cuando no existe en el sistema.",
    tareas: [
      ["P0","Encontrar y consultar una EI","Localiza una evaluación, abre el detalle y obtiene la información necesaria."],
      ["P0","Reportar una nueva EI","Registra una nueva evaluación mediante el flujo de reporte y recibe confirmación."],
      ["P1","Explorar estadísticas generales","Comprende volumen, estados, sectores, divisiones y evolución de las EIs."],
      ["P1","Aplicar y limpiar filtros","Ajusta el alcance del dashboard y Tracker sin perder orientación."],
      ["P1","Revisar detalle e histórico","Consulta estado, división, país, última actualización, metodología, publicaciones y cambios previos."],
      ["P2","Exportar información","Descarga información cuando su permiso y el alcance del producto lo permitan."],
      ["Informativa","Interpretar estados e indicadores","Comprende la situación de las EIs sin asumir responsabilidades de actualización."],
      ["Restringida","Editar una EI existente","La acción no está disponible."],
      ["Restringida","Completar actualizaciones pendientes","La acción no está disponible."],
      ["Restringida","Gestionar usuarios","La acción no está disponible."]
    ],
    happyPaths: [
      ["Consultar una EI","Dashboard → aplicar filtros → Tracker EI → localizar EI → abrir detalle → revisar histórico → volver al listado conservando el contexto."],
      ["Reportar una nueva EI","Dashboard o Tracker EI → reportar nueva EI → completar datos requeridos → revisar posible duplicado → enviar reporte → confirmación."]
    ],
    orientacion: {
      nombre:"Orientación — Consultant", duracion:"4 min", prioridad:"P1",
      contexto:"Acabas de entrar a EI Tracker y quieres entender la situación general de las Evaluaciones de Impacto.",
      tarea:"Revisa la pantalla y cuéntame qué información te resulta más útil.",
      observar:["Comprensión de indicadores y estados.","Identificación de filtros.","Expectativas sobre las acciones disponibles.","Comprensión del alcance de consulta."],
      sondeo:[]
    },
    navegacion: {
      nombre:"Navegación común — Consultant", duracion:"5 min", prioridad:"P0",
      contexto:"Necesitas consultar una EI de un sector y país específicos.",
      tarea:"Aplica los filtros que consideres necesarios, encuentra la EI y revisa su detalle e histórico.",
      observar:["Uso de filtros y Tracker EI.","Comprensión del detalle.","Ausencia de expectativas de edición.","Capacidad de volver sin perder filtros."],
      sondeo:[]
    },
    criticas: [
      {
        nombre:"Reportar una nueva EI", duracion:"10 min", prioridad:"P0",
        contexto:"Conoces una Evaluación de Impacto que no aparece en la plataforma y necesitas reportarla.",
        tarea:"Inicia el reporte, completa la información disponible y envíalo.",
        observar:["Descubrimiento de la acción “Reportar nueva EI”.","Diferencia entre reportar una nueva EI y editar una existente.","Comprensión de campos obligatorios.","Manejo de una posible duplicada.","Confirmación y expectativas sobre el siguiente paso."],
        sondeo:["¿Qué esperas que ocurra con la evaluación después de reportarla?"]
      },
      {
        nombre:"Filtrar y valorar si los filtros le bastan", duracion:"8 min", prioridad:"P1",
        contexto:"Quieres revisar las EIs que te interesan de un sector y país concretos.",
        tarea:"Filtra hasta dejar en pantalla solo las EIs que te interesan y cuéntame si los filtros disponibles te sirven o se te quedan cortos.",
        observar:["Si encuentra los filtros y sabe combinarlos sin ayuda.","Comprensión de qué filtros están activos en cada momento.","Capacidad de ajustar o limpiar filtros sin perder orientación.","Qué criterio querría filtrar y no puede — el hueco es el dato.","Si echa en falta guardar, reutilizar o compartir una combinación de filtros."],
        sondeo:["¿Con qué criterio te habría gustado filtrar y no has encontrado?","¿Estos filtros te bastan para tu trabajo real o se te quedan cortos?"]
      }
    ]
  }
};
