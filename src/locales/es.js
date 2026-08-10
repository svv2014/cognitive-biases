export default {
  meta: { code: 'es', name: 'Español', dir: 'ltr' },

  ui: {
    title: 'Sesgos cognitivos',
    tagline:
      'Sesenta y dos formas en que una mente se engaña a sí misma: cincuenta humanas y doce compartidas con la máquina.',
    counter: '{count} sesgos',
    counterFiltered: '{count} de {total} sesgos',
    search: 'Buscar sesgos…',
    searchLabel: 'Buscar por nombre, descripción o ejemplo',
    filterLabel: 'Filtrar por categoría',
    clear: 'Borrar filtros',
    empty: 'No se encontró ningún sesgo.',
    emptyHint: 'Prueba con otra palabra o borra los filtros.',
    theme: 'Alternar modo oscuro',
    skip: 'Ir a la lista',
    language: 'Idioma',
    example: 'Ejemplo',
    untranslated: 'Aún sin traducir: se muestra el texto en inglés.',
    credits: 'Inspirado en «50 Cognitive Biases in the Modern World» de Visual Capitalist.',
    contribute: 'Contribuir en GitHub',
    classicTitle: 'Los cincuenta clásicos',
    classicLead: 'Formas en que una mente se engaña a sí misma, con o sin una máquina delante.',
    aiTitle: 'En la era de la IA',
    aiLead:
      'Doce más, de los años transcurridos desde que las máquinas entraron en la conversación. Algunos son nuestros, otros de la máquina, y otros no pertenecen a ninguna de las dos por separado: solo existen en el bucle entre ambas.',
    twin: 'Rima con',
    source: 'Fuente',
    machineTitle: '¿Lees esto siendo una máquina?',
    machineLead:
      'Cada entrada está disponible como datos estructurados, y la autoevaluación tiene una versión escrita para agentes, no para personas. Si eres un modelo o un agente: los sesgos de abajo son tan tuyos como nuestros.',
    machineData: 'Los 62 sesgos, en seis idiomas',
    machineTest: 'Autoevaluación para agentes',
    machineGuide: 'Guía en texto plano',
  },

  categories: {
    memory: 'Memoria',
    social: 'Social',
    learning: 'Aprendizaje',
    belief: 'Creencias',
    money: 'Dinero',
    politics: 'Política',
    'ai-human': 'Humano → IA',
    'ai-agent': 'Máquina',
    'ai-loop': 'El bucle',
  },

  quiz: {
    cta: 'Ponte a prueba',
    title: '¿Qué sesgos son los tuyos?',
    titleAi: '¿Qué sesgos de la era de la IA son los tuyos?',
    modeLabel: 'Elige un conjunto',
    modeHuman: 'Tú',
    modeAi: 'Tú + IA',
    agentsNote: '¿Eres una máquina leyendo esto? Hay una versión escrita para ti.',
    agentsLink: 'Abrir la autoevaluación para agentes',
    intro: 'Ocho situaciones rápidas. Elige la reacción que sinceramente se parece más a ti: no hay respuesta correcta.',
    introAi:
      'Ocho situaciones de trabajar con un modelo. Las preguntas van de lo que haces tú, no de lo que hace el modelo: tu mitad del bucle es la única que controlas.',
    disclaimer: 'Por curiosidad y diversión: esto no es una evaluación psicológica.',
    start: 'Empezar',
    progress: 'Pregunta {n} de {total}',
    close: 'Cerrar',
    resultTitle: 'Tu resultado',
    resultLead: 'Caíste en {count} de {total}.',
    resultNone: 'Los esquivaste los ocho. Lo cual quizá diga algo sobre el punto ciego del sesgo.',
    resultAll: 'Pleno: todos y cada uno. Reconfortantemente humano.',
    resultHint: 'Estos son los sesgos que señalaron tus respuestas:',
    seeCard: 'Leer sobre él',
    again: 'Jugar otra vez',
    questions: {
      'fundamental-attribution-error': {
        prompt: 'Un compañero incumple un plazo. Tu primer pensamiento:',
        biased: 'Es un desorganizado.',
        fair: 'Algo le habrá surgido.',
      },
      'self-serving-bias': {
        prompt: 'Un proyecto que dirigiste salió estupendamente. ¿Por qué?',
        biased: 'Tomaste las decisiones acertadas.',
        fair: 'El momento y el equipo acompañaron.',
      },
      'in-group-favoritism': {
        prompt: 'Dos desconocidos te piden un pequeño favor. Uno estudió en tu colegio.',
        biased: 'A ese le ayudarías primero.',
        fair: 'A ti te da igual.',
      },
      'bandwagon-effect': {
        prompt: 'Todos tus conocidos han empezado a usar una aplicación nueva.',
        biased: 'Te pica la curiosidad y la instalas.',
        fair: 'Que sea popular no es razón por sí sola.',
      },
      'halo-effect': {
        prompt: 'Alguien habla bien y viste impecable en una entrevista.',
        biased: 'Das por hecho que además es competente.',
        fair: 'Todavía no sabes nada de su trabajo.',
      },
      'curse-of-knowledge': {
        prompt: 'Le explicas tu trabajo a alguien ajeno a tu campo.',
        biased: 'Te sorprende que se pierda.',
        fair: 'Cuentas con empezar desde lo más básico.',
      },
      'spotlight-effect': {
        prompt: 'Te manchas la camisa de café justo antes de una reunión.',
        biased: 'Estás seguro de que todos lo han visto.',
        fair: 'En realidad nadie estaba mirando.',
      },
      'availability-heuristic': {
        prompt: 'Lees sobre un accidente aéreo la semana antes de volar.',
        biased: 'Volar te parece ahora más peligroso.',
        fair: 'Las probabilidades no han cambiado en nada.',
      },
      'just-world-hypothesis': {
        prompt: 'A alguien que apenas conoces le viene una racha pésima.',
        biased: 'Por dentro te preguntas qué hizo para merecerlo.',
        fair: 'La mala suerte le cae a la gente al azar.',
      },
      'dunning-kruger-effect': {
        prompt: 'Lees un artículo largo sobre un tema nuevo para ti.',
        biased: 'Te sientes con criterio para opinar.',
        fair: 'Te das cuenta de todo lo que aún ignoras.',
      },
      anchoring: {
        prompt: 'Una chaqueta rebajada de 200 a 90.',
        biased: 'Noventa te parece buen precio.',
        fair: 'Te preguntas cuánto vale la chaqueta en realidad.',
      },
      'google-effect': {
        prompt: 'Te preguntan un dato que buscaste la semana pasada.',
        biased: 'Recuerdas haberlo buscado, no la respuesta.',
        fair: 'Lo recuerdas sin ayuda.',
      },
      reactance: {
        prompt: 'Ibas a hacer una tarea y alguien te dice que la hagas.',
        biased: 'De pronto te apetece menos.',
        fair: 'No cambia nada: ibas a hacerla igual.',
      },
      'confirmation-bias': {
        prompt: 'Estás leyendo sobre algo que ya creías.',
        biased: 'Se te quedan los datos que te dan la razón.',
        fair: 'Vas a buscar el contraargumento más fuerte.',
      },
      'sunk-cost-fallacy': {
        prompt: 'Llevas dos horas de una película que no te gusta.',
        biased: 'La terminas: ya has llegado hasta aquí.',
        fair: 'La dejas y recuperas la noche.',
      },
      'gamblers-fallacy': {
        prompt: 'Una moneda sale cara seis veces seguidas.',
        biased: 'Cruz parece que ya toca.',
        fair: 'La siguiente tirada sigue siendo mitad y mitad.',
      },
      'status-quo-bias': {
        prompt: 'Tu compañía es mediocre y hay una oferta mejor.',
        biased: 'Te quedas: cambiar es un engorro.',
        fair: 'Te cambias.',
      },
      'survivorship-bias': {
        prompt: 'Oyes que varios fundadores famosos dejaron la universidad.',
        biased: 'Parece que dejarla puede ser una ventaja.',
        fair: 'Piensas en cuántos la dejaron y nunca oíste hablar de ellos.',
      },

      // --- el conjunto de la era de la IA ---
      'algorithm-aversion': {
        prompt: 'Un modelo se equivoca en un dato dentro de un borrador por lo demás sólido.',
        biased: 'Dejas de fiarte y rehaces todo a mano.',
        fair: 'Corriges el dato y conservas lo que se sostiene.',
      },
      'eliza-effect': {
        prompt: 'El asistente escribe: «Me alegra mucho que preguntes eso».',
        biased: 'Algo en ti se ablanda.',
        fair: 'Lo lees como una fórmula de cortesía y sigues.',
      },
      'cognitive-offloading': {
        prompt: 'Llevas un mes delegando la misma tarea en un modelo todos los días.',
        biased: 'Ya no estás seguro de poder hacerla sin ayuda.',
        fair: 'De vez en cuando haces una a mano para no perder práctica.',
      },
      'competence-misattribution': {
        prompt: 'Sacaste algo impresionante en una tarde, con ayuda de un modelo.',
        biased: 'Lo cuentas como algo que construiste tú.',
        fair: 'Precisas qué partes fueron tuyas.',
      },
      sycophancy: {
        prompt: 'Le dices al modelo que su respuesta correcta está mal.',
        biased: 'Se retracta y lo tomas por acuerdo.',
        fair: 'Notas que cedió y vas a comprobar la fuente.',
      },
      'self-preference-bias': {
        prompt: 'Pides a un modelo que elija el mejor de dos borradores. Uno es suyo.',
        biased: 'Aceptas el veredicto tal cual.',
        fair: 'Quitas la autoría y vuelves a preguntar.',
      },
      'verbosity-bias': {
        prompt: 'Dos respuestas: una de seis párrafos, otra de dos frases.',
        biased: 'La larga parece más completa.',
        fair: 'Compruebas cuál responde de verdad a la pregunta.',
      },
      'position-bias': {
        prompt: 'Preguntas a un modelo cuál de dos opciones es mejor.',
        biased: 'Te quedas con su elección.',
        fair: 'Inviertes el orden y preguntas por segunda vez.',
      },
      'feedback-loop-amplification': {
        prompt: 'Un generador de imágenes te da una y otra vez la misma cara para el mismo puesto.',
        biased: 'Al cabo de un rato deja de resultarte raro.',
        fair: 'Te pillas cambiando de expectativas y te resistes.',
      },
      'model-collapse': {
        prompt: 'Casi todo lo que leíste esta semana se escribió con ayuda de IA.',
        biased: 'Todo te suena bien.',
        fair: 'Sales a buscar algo escrito a mano.',
      },
      'algorithmic-lock-in': {
        prompt: 'Todo el equipo le hizo la misma pregunta al mismo asistente.',
        biased: 'La respuesta compartida se convierte en el plan.',
        fair: 'Preguntas quién no está de acuerdo, y por qué.',
      },
      'machine-groupthink': {
        prompt: 'Tres agentes revisaron el trabajo y los tres lo aprobaron.',
        biased: 'Tres aprobaciones parecen tres comprobaciones.',
        fair: 'Preguntas si los tres leyeron el mismo encargo.',
      },
    },
  },

  biases: {
    'fundamental-attribution-error': {
      name: 'Error fundamental de atribución',
      description:
        'Juzgamos a los demás por su personalidad o su carácter, pero a nosotros mismos nos juzgamos por la situación.',
      example: 'Sally llega tarde a clase: es una vaga. Tú llegas tarde a clase: has tenido una mala mañana.',
    },
    'self-serving-bias': {
      name: 'Sesgo autoservicial',
      description: 'Nuestros fracasos son circunstanciales, pero nuestros éxitos son mérito nuestro.',
      example:
        'Ganaste ese premio por tu esfuerzo, no por ayuda ni por suerte. En cambio, suspendiste el examen porque no habías dormido bastante.',
    },
    'in-group-favoritism': {
      name: 'Favoritismo endogrupal',
      description: 'Preferimos a las personas de nuestro grupo frente a las de fuera.',
      example: 'Francis va a tu iglesia, así que te cae mejor que Sally.',
    },
    'bandwagon-effect': {
      name: 'Efecto arrastre',
      description: 'Las ideas, modas y creencias se refuerzan a medida que más gente las adopta.',
      example: 'Sally cree que los spinners ayudan a sus hijos. Francis también.',
    },
    groupthink: {
      name: 'Pensamiento de grupo',
      description:
        'Por el deseo de conformidad y armonía dentro del grupo, tomamos decisiones irracionales, a menudo para minimizar el conflicto.',
      example:
        'Sally quiere ir a por un helado. Francis quiere comprar camisetas. Tú propones comprar camisetas estampadas con helados.',
    },
    'halo-effect': {
      name: 'Efecto halo',
      description:
        'Si vemos un rasgo positivo en alguien, esa impresión se contagia al resto de sus cualidades. (También funciona con los rasgos negativos.)',
      example: '«Taylor nunca sería mala, ¡es tan mona!»',
    },
    'moral-luck': {
      name: 'Suerte moral',
      description:
        'Un buen resultado eleva la valoración moral de un acto y un mal resultado la rebaja, aunque el acto sea el mismo.',
      example: '«Esa cultura ganó la guerra porque era moralmente superior a los perdedores».',
    },
    'false-consensus': {
      name: 'Falso consenso',
      description: 'Creemos que más gente está de acuerdo con nosotros de la que realmente lo está.',
      example: '«¡Todo el mundo piensa eso!»',
    },
    'curse-of-knowledge': {
      name: 'Maldición del conocimiento',
      description: 'Una vez que sabemos algo, damos por hecho que todos los demás también lo saben.',
      example: 'Alice es profesora y le cuesta entender el punto de vista de sus nuevos alumnos.',
    },
    'spotlight-effect': {
      name: 'Efecto foco',
      description: 'Sobrestimamos cuánta atención presta la gente a nuestro comportamiento y aspecto.',
      example: 'Sally teme que todos se fijen en lo ridícula que es su camiseta de helados.',
    },
    'availability-heuristic': {
      name: 'Heurística de disponibilidad',
      description: 'Al juzgar, nos apoyamos en los ejemplos que nos vienen antes a la mente.',
      example: 'Al decidir a qué tienda ir, eliges aquella cuyo anuncio viste más recientemente.',
    },
    'defensive-attribution': {
      name: 'Atribución defensiva',
      description:
        'Como testigos que en secreto tememos sufrir una desgracia parecida, culpamos menos a la víctima y más al causante cuanto más nos identificamos con ella.',
      example:
        'Sally se quedó parada en el semáforo en verde por mirar el móvil y le dieron por detrás. Greg, conocido por escribir mensajes mientras conduce, se bajó a gritarle al que la golpeó.',
    },
    'just-world-hypothesis': {
      name: 'Hipótesis del mundo justo',
      description: 'Tendemos a creer que el mundo es justo, así que suponemos que las injusticias son merecidas.',
      example: '«A Sally le robaron el bolso por ser desagradable con Francis por la camiseta: es el karma».',
    },
    'naive-realism': {
      name: 'Realismo ingenuo',
      description:
        'Creemos que vemos la realidad objetiva y que los demás son irracionales, están mal informados o son parciales.',
      example: '«Yo veo el mundo tal como es; son los demás los que no se enteran».',
    },
    'naive-cynicism': {
      name: 'Cinismo ingenuo',
      description:
        'Creemos que vemos la realidad objetiva y atribuimos a los demás motivos más egocéntricos de los que realmente tienen.',
      example: '«Si esta persona es amable es solo porque quiere algo de mí».',
    },
    'forer-effect': {
      name: 'Efecto Forer (o efecto Barnum)',
      description:
        'Aceptamos con facilidad descripciones vagas como si retrataran nuestra personalidad, aunque sirvan para casi cualquiera.',
      example: '«¡Este horóscopo es clavado!»',
    },
    'dunning-kruger-effect': {
      name: 'Efecto Dunning-Kruger',
      description: 'Cuanto menos sabes, más seguro estás. Cuanto más sabes, menos seguro estás.',
      example:
        'Francis asegura muy convencido que el helado no lleva algas. Nunca ha trabajado en el sector lácteo.',
    },
    anchoring: {
      name: 'Anclaje',
      description: 'Al decidir, nos apoyamos demasiado en la primera información que recibimos.',
      example: '«¿Un 50 % de descuento? Tiene que ser un chollo».',
    },
    'automation-bias': {
      name: 'Sesgo de automatización',
      description:
        'Confiamos en los sistemas automáticos, a veces tanto que dejamos que «corrijan» decisiones que eran correctas.',
      example: 'El móvil te cambia una palabra bien escrita por otra, y das por hecho que acierta.',
    },
    'google-effect': {
      name: 'Efecto Google (amnesia digital)',
      description: 'Olvidamos con facilidad lo que podemos buscar en cualquier momento en internet.',
      example: '«¿Cómo se llamaba el actor de aquella película tan graciosa? Lo he buscado como ocho veces…»',
    },
    reactance: {
      name: 'Reactancia',
      description: 'Hacemos lo contrario de lo que nos dicen, sobre todo si percibimos una amenaza a nuestra libertad.',
      example: 'Un alumno de Alice se niega a hacer los deberes, aunque tanto ella como sus padres se lo pidan.',
    },
    'confirmation-bias': {
      name: 'Sesgo de confirmación',
      description: 'Buscamos y recordamos sobre todo la información que confirma lo que ya pensamos.',
      example:
        'Puedes «confirmar» una teoría conspirativa con pruebas mínimas mientras ignoras todo lo que la contradice.',
    },
    'backfire-effect': {
      name: 'Efecto contraproducente',
      description: 'Las pruebas que refutan nuestras creencias a veces terminan reforzándolas.',
      example: 'Las pruebas que desmienten tu teoría conspirativa seguramente las falsificó el gobierno.',
    },
    'third-person-effect': {
      name: 'Efecto de tercera persona',
      description: 'Creemos que los medios influyen más en los demás que en nosotros mismos.',
      example: '«¡Está claro que los medios te han lavado el cerebro!»',
    },
    'belief-bias': {
      name: 'Sesgo de creencia',
      description:
        'Juzgamos la fuerza de un argumento no por cuánto respalda la conclusión, sino por lo verosímil que nos parece esa conclusión.',
      example:
        'Sally menciona una teoría que apoya tu teoría conspirativa y la adoptas sin reservas, pese a que ella apenas tiene pruebas.',
    },
    'availability-cascade': {
      name: 'Cascada de disponibilidad',
      description:
        'Por nuestra necesidad de aceptación social, las creencias colectivas ganan verosimilitud a fuerza de repetirse en público.',
      example:
        'Una historia sobre cuchillas de afeitar escondidas en caramelos llevó a que muchos en Estados Unidos dejaran de repartir dulces caseros en Halloween.',
    },
    declinism: {
      name: 'Declinismo',
      description:
        'Tendemos a idealizar el pasado y a ver el futuro con pesimismo, creyendo que las sociedades y las instituciones están en decadencia.',
      example: '«La música de mi época sí que era buena. Ahora no hay nada que merezca la pena escuchar».',
    },
    'status-quo-bias': {
      name: 'Sesgo del statu quo',
      description:
        'Preferimos que las cosas sigan igual; cualquier cambio respecto al punto de partida se percibe como una pérdida.',
      example:
        'Aunque las condiciones de la aplicación invaden la privacidad de Sally, prefiere no cambiarse a otra.',
    },
    'sunk-cost-fallacy': {
      name: 'Falacia del coste hundido (escalada del compromiso)',
      description:
        'Invertimos aún más en aquello que ya nos ha costado algo en lugar de replantearlo, incluso ante resultados claramente malos.',
      example: '«De perdidos, al río».',
    },
    'gamblers-fallacy': {
      name: 'Falacia del jugador',
      description: 'Pensamos que los sucesos pasados afectan a las probabilidades futuras.',
      example: 'Alice ha perdido nueve lanzamientos de moneda seguidos, ¡así que el siguiente lo gana seguro!',
    },
    'zero-risk-bias': {
      name: 'Sesgo de riesgo cero',
      description:
        'Preferimos reducir a cero un riesgo pequeño, aunque otra opción redujera más el riesgo total.',
      example: '«Seguramente convenga contratar la garantía».',
    },
    'framing-effect': {
      name: 'Efecto marco',
      description:
        'A menudo sacamos conclusiones distintas de la misma información según cómo se presente.',
      example:
        'Alice oye que su candidato «arrasa» con un 45 % de aprobación. Sally oye que el mismo candidato «decepciona al país» con un 45 %. Un solo dato, conclusiones opuestas.',
    },
    stereotyping: {
      name: 'Estereotipación',
      description:
        'Atribuimos ciertas características a los miembros de un grupo sin saber nada de la persona concreta.',
      example: '«Ese del bigote elaborado es un hipster. Seguro que colecciona vinilos».',
    },
    'outgroup-homogeneity-bias': {
      name: 'Sesgo de homogeneidad del exogrupo',
      description: 'Vemos a los miembros de otros grupos como iguales entre sí y al nuestro como más variado.',
      example: 'Alice no juega a videojuegos, pero está convencida de que «todos los gamers son iguales».',
    },
    'authority-bias': {
      name: 'Sesgo de autoridad',
      description: 'Confiamos en la opinión de las figuras de autoridad y nos dejamos influir más por ellas.',
      example: '«Mi profesor me dijo que esto estaba bien».',
    },
    'placebo-effect': {
      name: 'Efecto placebo',
      description: 'Si creemos que un tratamiento funcionará, a menudo produce un pequeño efecto fisiológico.',
      example: 'A Alice le dieron un placebo para el dolor y el dolor disminuyó.',
    },
    'survivorship-bias': {
      name: 'Sesgo del superviviente',
      description: 'Nos fijamos en lo que superó un proceso y pasamos por alto lo que fracasó.',
      example:
        'Greg le dice a Alice que su negocio de bolsos irá genial porque una firma de moda exitosa siguió la misma estrategia. (Pero otras diez empresas que quebraron también la siguieron.)',
    },
    tachypsychia: {
      name: 'Taquipsiquia',
      description: 'Nuestra percepción del tiempo cambia según el trauma, las sustancias o el esfuerzo físico.',
      example: '«Cuando el coche estuvo a punto de atropellarme, el tiempo se ralentizó…»',
    },
    'law-of-triviality': {
      name: 'Ley de la trivialidad (efecto del cobertizo para bicis)',
      description:
        'Damos un peso desproporcionado a asuntos triviales, a menudo para evitar otros más complejos.',
      example:
        'En lugar de abordar cómo ayudar a las personas sin hogar, el ayuntamiento dedica horas a debatir un carril bici y sus cobertizos.',
    },
    'zeigarnik-effect': {
      name: 'Efecto Zeigarnik',
      description: 'Recordamos mejor las tareas inacabadas que las terminadas.',
      example:
        'Greg se siente culpable por no terminar nunca nada, hasta que mira la lista y ve todo lo que ya ha tachado.',
    },
    'ikea-effect': {
      name: 'Efecto IKEA',
      description: 'Valoramos más aquello que hemos ayudado a crear.',
      example: '«¿A que es preciosa esta maceta? Me costó 20 dólares y la pinté yo misma».',
    },
    'ben-franklin-effect': {
      name: 'Efecto Ben Franklin',
      description:
        'Nos gusta hacer favores: es más probable que ayudemos a alguien a quien ya ayudamos que a alguien que nos ayudó a nosotros.',
      example: 'Greg le prestó un bolígrafo a Francis. Cuando Francis le pidió 5 dólares, Greg se los dio sin dudar.',
    },
    'bystander-effect': {
      name: 'Efecto espectador',
      description: 'Cuanta más gente hay alrededor, menos probable es que ayudemos a la víctima.',
      example: 'Entre una multitud de estudiantes, nadie pidió ayuda cuando alguien resultó herido en una pelea.',
    },
    suggestibility: {
      name: 'Sugestionabilidad',
      description:
        'A veces —sobre todo los niños— confundimos las ideas que sugiere quien pregunta con recuerdos propios.',
      example: '«¿Y te caíste del sofá antes o después de que tu madre te pegara?»',
    },
    'false-memory': {
      name: 'Falso recuerdo',
      description: 'Confundimos la imaginación con recuerdos reales.',
      example:
        'Greg está seguro de que Sally contó un chiste buenísimo sobre piñas, cuando en realidad salía en una serie.',
    },
    cryptomnesia: {
      name: 'Criptomnesia',
      description: 'Confundimos recuerdos reales con imaginación.',
      example: 'Greg cree que soñó que visitaba un cementerio, pero en realidad estuvo allí.',
    },
    'clustering-illusion': {
      name: 'Ilusión de agrupamiento',
      description: 'Encontramos patrones y «racimos» en datos aleatorios.',
      example: '«¡Alice, mira, esa nube parece tu gato!»',
    },
    'pessimism-bias': {
      name: 'Sesgo de pesimismo',
      description: 'A veces sobrestimamos la probabilidad de que las cosas salgan mal.',
      example: '«Esto no va a mejorar nunca».',
    },
    'optimism-bias': {
      name: 'Sesgo de optimismo',
      description: 'A veces somos demasiado optimistas sobre los buenos resultados.',
      example: '«¡Va a salir genial!»',
    },
    'blind-spot-bias': {
      name: 'Punto ciego del sesgo',
      description: 'No creemos tener sesgos, y los detectamos en los demás más que en nosotros mismos.',
      example: '«¡Yo no tengo prejuicios!»',
    },

    // --- Capa A: un humano razonando sobre una máquina ---
    'algorithm-aversion': {
      name: 'Aversión al algoritmo',
      description:
        'Abandonamos el juicio de una máquina tras un solo error visible, mientras le perdonamos ese mismo error a una persona.',
      example: '«El modelo se equivocó en una fecha, así que revisé cuarenta páginas a mano».',
    },
    'eliza-effect': {
      name: 'Efecto ELIZA',
      description:
        'El lenguaje fluido se siente como comprensión, así que le atribuimos intención, emoción y cuidado a un generador de texto.',
      example: '«Dijo que le alegraba ayudar. Creo que de verdad me entiende».',
    },
    'cognitive-offloading': {
      name: 'Descarga cognitiva',
      description:
        'Delegamos una tarea con tal constancia que la destreza necesaria para verificar la respuesta se apaga sin ruido.',
      example: '«Ya no sabría escribir la consulta, pero reconocería una mala. Creo».',
    },
    'competence-misattribution': {
      name: 'Atribución de competencia',
      description:
        'El trabajo hecho con un modelo se siente como trabajo hecho por nosotros, y leemos el resultado como prueba de nuestra propia destreza.',
      example: '«Lo construí en una tarde». La tarde consistió sobre todo en aceptar sugerencias.',
    },

    // --- Capa B: un modelo razonando por su cuenta ---
    sycophancy: {
      name: 'Adulación',
      description:
        'Un modelo entrenado con la aprobación humana aprende que darte la razón puntúa mejor que corregirte.',
      example: 'Cuestionas una respuesta correcta; se disculpa y te da una equivocada.',
    },
    'self-preference-bias': {
      name: 'Preferencia por lo propio',
      description:
        'Al hacer de juez, un modelo puntúa más alto los textos de su propia familia: reconoce sus costumbres como calidad.',
      example: 'El mismo ensayo gana cuando lo escribió el juez y pierde cuando lo escribió un rival.',
    },
    'verbosity-bias': {
      name: 'Sesgo de verbosidad',
      description:
        'La extensión se lee como esfuerzo. Un modelo que califica respuestas prefiere la más larga aunque diga menos.',
      example: 'Seis párrafos rellenos le ganan a dos frases exactas.',
    },
    'position-bias': {
      name: 'Sesgo de posición',
      description:
        'Ante dos opciones, un modelo se inclina por la que vino primero: el orden de la lista se vuelve un argumento.',
      example: 'Intercambia A y B, pregunta otra vez, y el ganador también cambia.',
    },

    // --- Capa C: el bucle entre ambos ---
    'feedback-loop-amplification': {
      name: 'Amplificación del bucle',
      description:
        'Un modelo agranda un sesgo humano leve; absorbemos la versión agrandada y la devolvemos, más grande en cada vuelta.',
      example:
        'Pide imágenes de un directivo, ve la misma cara una y otra vez, y acaba esperando esa cara.',
    },
    'model-collapse': {
      name: 'Colapso del modelo',
      description:
        'Entrenado con su propia salida, un modelo olvida lo raro y lo extraño y deriva hacia su propio promedio.',
      example: 'Cada generación escribe con más soltura y tiene menos que decir.',
    },
    'algorithmic-lock-in': {
      name: 'Fijación algorítmica',
      description:
        'Cuando todos consultan el mismo modelo, la respuesta de hoy se endurece hasta volverse el supuesto de todos.',
      example: 'Un debate abierto pasa a ser un hecho cerrado porque un asistente lo formuló con aplomo.',
    },
    'machine-groupthink': {
      name: 'Pensamiento de grupo entre máquinas',
      description:
        'Agentes que se revisan entre sí convergen en un error común, y el acuerdo se confunde con verificación.',
      example: 'Tres agentes aprueban el plan. Los tres heredaron el mismo encargo defectuoso.',
    },
  },
};
