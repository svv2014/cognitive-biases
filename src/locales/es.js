export default {
  meta: { code: 'es', name: 'Español', dir: 'ltr' },

  ui: {
    title: 'Sesgos cognitivos',
    tagline: 'Cincuenta formas en que la mente se engaña a sí misma sin que lo notemos.',
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
  },

  categories: {
    memory: 'Memoria',
    social: 'Social',
    learning: 'Aprendizaje',
    belief: 'Creencias',
    money: 'Dinero',
    politics: 'Política',
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
  },
};
