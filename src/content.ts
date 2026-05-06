export const imageMap = {
  heroHistory: '/assets/site-copy/hero-history.jpg',
  heroHouse: '/assets/site-copy/hero-house.jpg',
  comfort: '/assets/site-copy/comfort.jpg',
  security: '/assets/site-copy/security.png',
  durability: '/assets/site-copy/durability.png',
  transparency: '/assets/site-copy/transparency.jpg',
  livingSpaces: '/assets/site-copy/living-spaces.jpg',
  foodPoints: '/assets/site-copy/food-points.jpg',
  comparison: '/assets/site-copy/comparison.jpg',
  process: '/assets/site-copy/process.jpg',
  gallery1: '/assets/site-copy/gallery-1.jpg',
  gallery2: '/assets/site-copy/gallery-2.jpeg',
  gallery3: '/assets/site-copy/gallery-3.jpg',
  gallery4: '/assets/site-copy/gallery-4.jpg',
  gallery5: '/assets/site-copy/gallery-5.jpg',
  businessMiniGym: '/assets/site-copy/business-mini-gym.jpg',
  businessStorage: '/assets/site-copy/business-storage.png',
} as const;

export const hero = {
  title: 'Reimagine los espacios con Box Construction',
  text:
    'Box Construction está transformando la forma en que se construyen los espacios. Ofrecemos soluciones sostenibles, asequibles y flexibles de contenedores para necesidades residenciales, comerciales e industriales.',
};

export const storySteps = [
  {
    number: '01',
    title: 'Fundada en 2016',
    text:
      'Fundada en 2016, Box Construction surgió de una pasión por la innovación y el deseo de crear soluciones de construcción sostenibles y rentables.',
  },
  {
    number: '02',
    title: 'Más de 60 proyectos',
    text:
      'Más de 60 proyectos entregados y mantenidos con éxito para clientes importantes como Rosneft y la Compañía Petrolera de Irkutsk, consolidando nuestra experiencia y reputación en la industria.',
  },
  {
    number: '03',
    title: 'Expansión a Argentina',
    text:
      'En 2023, Box Construction expandió su alcance a Argentina, llevando sus innovadoras soluciones de construcción con contenedores a nuevos mercados y ampliando su base de clientes.',
  },
];

export const priorities = [
  {
    title: 'Comodidad',
    text:
      'Nuestra innovadora tecnología basada en aislamiento de poliuretano está incluida en todos nuestros contenedores',
    image: imageMap.comfort,
    bullets: [
      'Mantiene los hogares frescos en verano y cálidos en invierno.',
      'Resistente a la humedad, previene el moho, los roedores y los insectos.',
      'Reduce los costos de calefacción/refrigeración hasta en un 80%.',
    ],
  },
  {
    title: 'Seguridad',
    text:
      'Con estándares de seguridad internacionales, garantizamos que su hogar sea un espacio seguro y saludable',
    image: imageMap.security,
    bullets: [
      'Cada contenedor se somete a un control de radiación',
      'Garantía de contenedores 100% libres de radiación',
    ],
  },
  {
    title: 'Durabilidad',
    text:
      'Elegimos y preparamos cuidadosamente cada contenedor de envío para que le sirva durante décadas',
    image: imageMap.durability,
    bullets: [
      'Solo contenedores de alta calidad',
      'Protección contra la corrosión: un revestimiento especializado protege contra el óxido, la humedad y el clima adverso',
    ],
  },
  {
    title: 'Transparencia',
    text:
      'Box Construction se adhiere a los principios de apertura y transparencia en todas las etapas de interacción',
    image: imageMap.transparency,
    bullets: [
      'Diseño de proyecto detallado único',
      'Certificación oficial: sin riesgos, sin problemas ocultos.',
    ],
  },
];

export const homeBenefits = [
  {
    title: 'Estética moderna',
    text:
      'Nuestras casas de contenedores combinan sin problemas elementos de diseño modernos con funcionalidad, creando espacios de vida cómodos y visualmente atractivos.',
  },
  {
    title: 'Asequibilidad y valor',
    text:
      'Las casas de contenedores ofrecen un ahorro de costos significativo en comparación con la construcción tradicional, lo que hace que la propiedad de una vivienda sea más accesible.',
  },
  {
    title: 'Movilidad y flexibilidad',
    text:
      'Nuestras casas de contenedores están diseñadas para un transporte fácil, lo que le permite reubicar su hogar o crear extensiones modulares a medida que evolucionen sus necesidades.',
  },
];

export const faqGroups = [
  {
    title: 'Sobre Box Construction',
    items: [
      {
        question: '¿A qué se dedica su empresa?',
        answer:
          'Construimos viviendas modernas con contenedores marítimos, usando tecnologías probadas en Rusia (hoteles y campamentos para petroleros).',
      },
      {
        question: '¿Por qué eligieron Argentina?',
        answer:
          'El mercado local demanda soluciones innovadoras y rápidas. Nuestra experiencia en climas extremos nos permite ofrecer calidad superior.',
      },
      {
        question: '¿Cómo ayuda su experiencia en Siberia?',
        answer:
          'Aprendimos a manejar temperaturas extremas, humedad y viento. Adaptamos estas técnicas al clima argentino, incluyendo protección contra calor y tormentas costeras.',
      },
      {
        question: '¿Qué los diferencia de la competencia?',
        answer:
          '- Experiencia en condiciones extremas.\n- Controles rigurosos (sin corrosión, radiación o químicos).\n- Acabados con estándares alemanes y materiales ecológicos.',
      },
      {
        question: '¿Trabajan con contratistas locales?',
        answer:
          'Sí. Involucramos profesionales argentinos para agilizar trámites y reducir costos.',
      },
      {
        question: '¿Tienen proyectos realizados?',
        answer:
          'En nuestro sitio hay casos de Rusia. En Argentina, los primeros proyectos estarán disponibles para visitar en 2025.',
      },
    ],
  },
  {
    title: 'Preguntas técnicas',
    items: [
      {
        question: '¿Por qué los contenedores marítimos son adecuados para construir viviendas?',
        answer:
          'Trabajamos con contenedores marítimos estándar, diseñados para soportar cargas extremas y condiciones exigentes, lo que los convierte en una base resistente para proyectos habitacionales y comerciales.',
      },
      {
        question: '¿Qué dimensiones tienen los contenedores que utilizan?',
        answer:
          'Trabajamos con contenedores marítimos estándar:\n- 20 pies: 6,1 m (largo) × 2,44 m (ancho) × 2,59 m (alto).\n- 40 pies: 12,2 m (largo) × 2,44 m (ancho) × 2,59 m (alto).\nLa altura puede ampliarse a High Cube (2,89 m) para mayor espacio.',
      },
      {
        question: '¿Cuántos años tienen los contenedores que usan?',
        answer:
          'Utilizamos contenedores marítimos de hasta 10 años de uso. Esta elección se debe a su equilibrio óptimo entre costo y resistencia: mantienen su integridad estructural sin sufrir desgaste crítico.\nAntes de usarlos, cada contenedor pasa por:\n- Inspección de corrosión y deformaciones.\n- Tratamiento con revestimiento anticorrosivo.\n- Refuerzo de soldaduras y reemplazo de piezas dañadas.\nNuestra tecnología de revisión, probada en Siberia (con estándares más exigentes), garantiza su durabilidad.',
      },
      {
        question: '¿Qué tecnología de aislamiento utilizan?',
        answer:
          'Aplicamos poliuretano proyectado de 5 cm (2 pulgadas) sobre un entramado de madera. Esta técnica elimina el riesgo de condensación, reduce el consumo energético y es resistente a insectos.',
      },
      {
        question: '¿Es segura la espuma de poliuretano?',
        answer:
          'Sí. Tras el curado (24-72 horas), el poliuretano se vuelve químicamente inerte y no emite sustancias tóxicas.',
      },
      {
        question: '¿Verifican los contenedores antes de usarlos?',
        answer:
          '¡Sí! Cada contenedor se somete a:\n- Control de radiación.\n- Análisis de sustancias nocivas (ej: residuos químicos).\n- Revisión estructural. Esto nos diferencia: muchos competidores omiten estos pasos.',
      },
      {
        question: '¿Qué tecnologías de acabado aplican?',
        answer:
          'La terminación interior sigue estándares alemanes: paneles antihumedad, materiales ecológicos, ventanas energéticamente eficientes y sistemas de ventilación. Además, usamos materiales locales argentinos.',
      },
      {
        question: '¿Qué materiales se usan en la decoración interior?',
        answer:
          '- Paredes/techo: placas de yeso (durlock) con masillado, revoque y pintura en dos capas.\n- Piso: placas OSB o vinílicas impermeables.\n- Baño: porcelanato gris moderno.',
      },
      {
        question: '¿Cómo se instalan las redes eléctricas, plomería y climatización?',
        answer:
          'Integramos estos sistemas con énfasis en eficiencia energética y durabilidad, cumpliendo normas de construcción actuales.',
      },
      {
        question: '¿Se pueden combinar contenedores para proyectos grandes?',
        answer:
          'Sí. Creamos estructuras modulares para casas, hoteles u oficinas, manteniendo la calidad.',
      },
      {
        question: '¿Cuánto dura una casa de contenedores?',
        answer:
          'Con mantenimiento adecuado: 30–50 años. La protección anticorrosión y materiales de calidad prolongan su vida útil.',
      },
      {
        question: '¿Qué tipo de cimentación se necesita?',
        answer:
          'Basta con 4–8 soportes puntuales (pilotes o bases de hormigón), adaptados al suelo. Proporcionamos recomendaciones y planos personalizados.',
      },
      {
        question: '¿Resisten terremotos?',
        answer:
          'Sí. Reforzamos las estructuras con marcos de acero y diseñamos cimientos según la actividad sísmica de la zona.',
      },
      {
        question: '¿Hay requisitos para el terreno?',
        answer:
          'El terreno debe ser plano, con acceso para maquinaria, conexiones básicas (agua, luz, cloacas) y permiso para construcciones modulares. Los detalles se coordinan individualmente.',
      },
      {
        question: '¿Se puede instalar en terrenos inclinados?',
        answer:
          'Sí. Usamos pilotes para nivelar el contenedor, adaptándonos al relieve.',
      },
    ],
  },
  {
    title: 'Preguntas financieras y organizativas',
    items: [
      {
        question: '¿Cómo comenzar el proyecto?',
        answer:
          'Complete el formulario en línea → 2. Coordinamos presupuesto y diseño → 3. Firma de contrato → 4. Inicio de producción.',
      },
      {
        question: '¿Cómo se formaliza el contrato?',
        answer:
          'Etapa 1: Consulta inicial y evaluación de necesidades.\nEtapa 2: Elaboración y aprobación del proyecto. Nuestros asesores financieros ayudan a elegir condiciones de pago óptimas.',
      },
      {
        question: '¿Cómo se divide el pago?',
        answer:
          '50% al firmar el contrato.\n30% en los 30 días siguientes.\n20% restante 48 horas antes de la entrega.\n¿Métodos de pago aceptados? Aceptamos pesos argentinos, dólares estadounidenses, efectivo, cheques o transferencias.',
      },
      {
        question: '¿Qué incluye el precio base?',
        answer:
          'Planos + cimentación (según terreno).\nContenedor terminado "llave en mano" (acabados interiores/exteriores).\nBaño completo + cocina básica (mueble de 1,2 m, pileta, mesada).\nAire acondicionado inverter y calefactores.\nCalefón eléctrico para agua caliente.\nTodo con garantía y manual de uso.\n¿Hay opciones de financiación? Actualmente no, pero trabajamos en alianzas con entidades financieras para ofrecerlas pronto.',
      },
      {
        question: '¿Cuánto tarda la construcción?',
        answer:
          'Plazo estándar: 45 días.\nProyectos complejos pueden extenderse según necesidades.',
      },
      {
        question: '¿Qué garantías ofrecen?',
        answer:
          '10 años en estructura y aislamiento.\n2 años en acabados y sistemas.',
      },
      {
        question: '¿Puedo cancelar el pedido?',
        answer:
          'Es posible durante la fase de diseño. Tras iniciar la producción, se retiene un porcentaje por costos incurridos.',
      },
      {
        question: '¿Hay costos ocultos?',
        answer:
          'No. Detallamos todo en el presupuesto. Posibles gastos extras: conexión a redes públicas, diseños personalizados o costo del terreno.',
      },
      {
        question: '¿Es más económico que una casa tradicional?',
        answer:
          'Sí. Ahorra hasta 50% en tiempo y costos de construcción, con menor consumo energético.',
      },
      {
        question: '¿Incluyen transporte e instalación?',
        answer:
          'No. El flete y la grúa se cotizan según ubicación y complejidad.',
      },
      {
        question: '¿Organizan la logística?',
        answer:
          'Sí. Trabajamos con empresas de transporte en toda Argentina para entrega "llave en mano".',
      },
      {
        question: '¿Instalan casa en mi terreno?',
        answer:
          'Opción 1: Servicio completo sin costos adicionales.\nOpción 2: Si usted transporta el contenedor, el costo de instalación se calcula aparte.\nOpción 3: Instalación por su cuenta: le entregamos instrucciones detalladas.',
      },
      {
        question: '¿Puedo transportar el contenedor por mi cuenta?',
        answer:
          'Sí. Lo preparamos para traslado seguro, con puntos de elevación y carga en su vehículo.',
      },
      {
        question: '¿Los contenedores están nacionalizados?',
        answer:
          'Sí. Todos incluyen factura con sello de nacionalización e importación legal.',
      },
      {
        question: '¿Qué impuestos aplican?',
        answer:
          'Al comprar: IVA del 10,5%.\nPosteriormente: No hay impuestos adicionales en Argentina.',
      },
    ],
  },
];

export const businessSolutions = [
  {
    title: 'Puntos de comida',
    text:
      'Crea un espacio único y eficiente para un food truck o cafetería con nuestras soluciones de contenedores. Ofrecen un espacio duradero, móvil y visualmente atractivo para atraer a los clientes',
    image: imageMap.foodPoints,
  },
  {
    title: 'Oficinas y tiendas',
    text:
      'Transforma un contenedor en una oficina o espacio comercial moderno. Nuestros diseños son personalizables y adaptables a tus necesidades y marca específicas',
    image: imageMap.gallery5,
  },
  {
    title: 'Mini gimnasios & recreación',
    text:
      'Transforma un contenedor en un gimnasio o espacio de recreación compacto y funcional, perfecto para entusiastas del fitness de pequeñas empresas',
    image: imageMap.businessMiniGym,
  },
  {
    title: 'Servicios de alojamiento',
    text:
      'Construye tu negocio soñado en solo unos meses con nuestras soluciones de contenedores renovados rentables',
    image: imageMap.heroHouse,
  },
  {
    title: 'Soluciones de almacenamiento',
    text:
      'Utiliza contenedores para soluciones de almacenamiento eficientes y seguras. Nuestros contenedores son a prueba de intemperie y ofrecen una manera segura y rentable de organizar tus pertenencias',
    image: imageMap.businessStorage,
  },
];

export const comparisonRows = [
  {
    metric: 'Precio de construcción',
    container:
      '30-100% menos costo por metro cuadrado en comparación con la construcción tradicional',
    traditional:
      'Típicamente $1,500-2,500 por metro cuadrado, más costos de terreno',
    modular:
      '10-20% menos que la tradicional, pero aún más alta que las soluciones de contenedores',
  },
  {
    metric: 'Plazos',
    container: '1-3 meses desde la aprobación hasta estar listo para mudarse',
    traditional:
      '12+ meses con posibles retrasos debido al clima y la programación de los contratistas',
    modular: '6-12 meses con algunas eficiencias de fábrica',
  },
  {
    metric: 'Conveniencia de construcción',
    container: '90% de los trabajos se realizan en nuestro sitio de producción',
    traditional: 'Construcción in situ',
    modular: 'Ensamblaje in situ',
  },
  {
    metric: 'Gastos de calefacción/refrigeración',
    container:
      'Altamente eficiente energéticamente con nuestro sistema de aislamiento especializado que proporciona hasta un 40% de ahorro en las facturas de servicios públicos',
    traditional:
      'Eficiencia variable dependiendo de la calidad de la construcción; típicamente mayores costos recurrentes',
    modular: 'Igual que la tradicional',
  },
  {
    metric: 'Movilidad',
    container:
      'Totalmente reubicable con una preparación mínima; se puede mover en 1 día',
    traditional:
      'Estructura permanente que no se puede reubicar sin demolición',
    modular:
      'Técnicamente se puede mover en secciones, pero es prohibitivamente caro e impracticable',
  },
  {
    metric: 'Durabilidad',
    container:
      'Diseñado para resistir las condiciones de envío; el revestimiento resistente a la corrosión extiende la vida útil a más de 30 años',
    traditional:
      'La estructura suele durar más de 50 años, pero requiere mantenimiento regular',
    modular: 'Vida útil de 20-30 años con calidad que varía ampliamente entre los fabricantes',
  },
];

export const uniquePoints = [
  {
    title: 'Equipo experimentado',
    text:
      'Nuestro equipo cuenta con una amplia experiencia en climas rigurosos de Rusia, lo que garantiza soluciones de construcción robustas y confiables.',
  },
  {
    title: 'Tecnologías europeas',
    text:
      'Aplicamos los más altos estándares de tecnología de construcción europea y calidad de servicio, brindando resultados duraderos y estéticamente agradables.',
  },
  {
    title: 'Precios competitivos',
    text:
      'Ofrecemos estructuras de precios competitivas, lo que convierte a la construcción de contenedores en una opción asequible y accesible.',
  },
  {
    title: 'Transparente y puntual',
    text:
      'Mantenemos la transparencia durante todo el proceso de construcción, adhiriéndonos a plazos claros y cumpliendo con nuestros compromisos.',
  },
];

export const productionSteps = [
  {
    title: 'Diseño del proyecto',
    text:
      'Nuestro equipo colabora con usted para crear un diseño personalizado que cumpla con sus requisitos y preferencias únicos.',
  },
  {
    title: 'Preparación del contenedor',
    text:
      'Utilizamos nuestras propias tecnologías para verificar, procesar y aislar todos nuestros contenedores y prepararlos para las obras de infraestructura.',
  },
  {
    title: 'Trabajos interiores',
    text:
      'Nuestros hábiles artesanos ejecutan trabajos interiores, incluidos el aislamiento, la plomería, la electricidad y los toques finales, de acuerdo con sus especificaciones.',
  },
  {
    title: 'Entrega e instalación',
    text:
      'Transportamos e instalamos eficientemente su Caja en su sitio, asegurando una entrega sin problemas y profesional.',
  },
];

export const bookingSteps = [
  {
    title: 'Breve',
    text:
      'Comenzamos con una breve discusión para comprender sus necesidades y objetivos del proyecto.',
  },
  {
    title: 'Diseñar proyecto',
    text:
      'Creamos una solución de diseño personalizada adaptada a sus especificaciones y preferencias.',
  },
  {
    title: 'Contrato y pago',
    text:
      'Establecemos términos y plazos claros para el proyecto, asegurando la transparencia y el entendimiento mutuo.',
  },
  {
    title: 'Producción, entrega y traspaso',
    text:
      'Ejecutamos el proyecto de manera eficiente y sin problemas, entregando su estructura de contenedor lista para usar.',
  },
];

export const team = [
  {
    name: 'Vladimir',
    role: 'Director de desarrollo',
    image: imageMap.gallery1,
  },
  {
    name: 'Maxim',
    role: 'Director técnico',
    image: imageMap.gallery2,
  },
  {
    name: 'Alex',
    role: 'Supervisor de construcción',
    image: imageMap.gallery3,
  },
  {
    name: 'Roman',
    role: 'Marketing y comunicación',
    image: imageMap.gallery4,
  },
];

export const contacts = {
  whatsapp: 'https://wa.me/message/3BBSOI4M4N42G1',
  instagram: 'https://www.instagram.com/boxconstruction.ar/',
};
