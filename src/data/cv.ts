export const cvData = {
  personalInfo: {
    name: "Edinson Santos Vilchez",
    role: "Ingeniero de Software",
    location: "Piura, Perú",
    email: "edinsonsanvil@gmail.com",
    profile: "Ingeniero de Software con experiencia en el desarrollo de soluciones tecnológicas orientadas a mejorar y automatizar procesos dentro de entornos empresariales e industriales. Experto en la implementación de sistemas internos, integración de plataformas y automatización mediante aplicaciones web, móviles y servicios backend. Cuento con sólida experiencia coordinando proyectos de desarrollo, organizando tareas técnicas y liderando equipos bajo metodologías ágiles."
  },
  experience: [
    {
      company: "Sunshine Export S.A.C.",
      startDate: "2024-12",
      endDate: null, // Actualidad
      role: "Programador Full Stack",
      description: [
        "Desarrollo de aplicaciones web orientadas a la optimización de procesos internos dentro de áreas administrativas y operativas.",
        "Integración de módulos internos con el sistema SAP mediante el desarrollo de Web APIs en .NET.",
        "Automatización de procesos mediante la integración de dispositivos biométricos para autenticación y control de acceso.",
        "Gestión y optimización de bases de datos SQL Server, mejorando el rendimiento de consultas y procedimientos almacenados.",
        "Desarrollo de aplicaciones móviles con React Native para soporte a operaciones internas."
      ]
    },
    {
      company: "Industrias Balinsa E.I.R.L.",
      startDate: "2023-01",
      endDate: "2024-11",
      role: "Jefe de Desarrollo de Proyecto",
      description: [
        "Responsable de la planificación y ejecución de proyectos de desarrollo de software orientados a la automatización de procesos industriales.",
        "Coordinación del trabajo del equipo técnico, definiendo tareas, prioridades y seguimiento del avance de los proyectos.",
        "Diseño y desarrollo de aplicaciones de escritorio utilizadas para automatizar procesos en entornos industriales.",
        "Participación en la definición de requerimientos técnicos junto con clientes y usuarios finales para adaptar las soluciones a sus procesos operativos.",
        "Supervisión del desarrollo, pruebas e implementación de las soluciones tecnológicas desarrolladas por el equipo.",
        "Capacitación y soporte técnico a usuarios durante la puesta en marcha de los sistemas implementados."
      ]
    }
  ],
  education: [
    {
      institution: "Universidad Tecnológica del Perú (UTP)",
      startDate: "2025-01",
      endDate: null, // Actualidad
      degree: "Ingeniería de Software",
      location: "Piura, Perú"
    },
    {
      institution: "SENATI",
      startDate: "2023-01",
      endDate: "2023-12",
      degree: "Egresado de Ingeniería de Software con Inteligencia Artificial",
      location: "Piura, Perú"
    },
    {
      institution: "SENATI",
      startDate: "2021-01",
      endDate: "2021-12",
      degree: "Inicio de Carrera Técnica Profesional",
      location: "Piura, Perú"
    }
  ],
  projects: {
    "Sunshine Export S.A.C.": [
      {
        id: "ari_sunshine",
        name: "ARI Sunshine.apk",
        type: "apk",
        description: "Aplicación móvil oficial de Sunshine para el acceso a recursos internos, gestión de información y asistencia. Publicada en Google Play Store.",
        stack: ["React Native", "Expo", ".NET", "SQL Server"],
        image: "/projects/ari_sunshine.png",
        link: "https://play.google.com/store/apps/details?id=com.arisunshine.app&hl=es_PE"
      }
    ],
    "Industrias Balinsa E.I.R.L.": [
      {
        id: "saucedo_desktop",
        name: "Saucedo_ERP.exe",
        type: "exe",
        description: "Sistema de escritorio para el registro preciso de ventas en camal, optimizando la captura de datos en tiempo real.",
        stack: ["Python", "QtDesigner", "MySQL"],
        image: "/projects/saucedo_desktop.png",
        link: null
      },
      {
        id: "saucedo_web",
        name: "Saucedo_Web_Panel.html",
        type: "html",
        description: "Panel web administrativo para la gestión de cuentas, análisis de merma y eficiencia en el despacho de productos avícolas.",
        stack: ["Vue.js", "Laravel", "MySQL"],
        image: "/projects/saucedo_web.png",
        link: 'https://avicolasaucedo.com/'
      },
      {
        id: "brialemagi_desktop",
        name: "Brialemagi_Sistema.exe",
        type: "exe",
        description: "Sistema avanzado de gestión para registro de ventas, cuentas de proveedores, planilla de trabajadores y control de caja chica.",
        stack: ["Python", "QtDesigner", "MySQL"],
        image: "/projects/brialemagi_desktop.png",
        link: null
      },
      {
        id: "brialemagi_web",
        name: "Brialemagi_Dashboard.html",
        type: "html",
        description: "Dashboard web para el análisis de rentabilidad, seguimiento de auditoría de pedidos y supervisión financiera de la empresa.",
        stack: ["Vue.js", "Laravel", "MySQL"],
        image: "/projects/brialemagi_web.png",
        link: 'https://avicolabrialemagi.com/login'
      },
      {
        id: "united_desktop",
        name: "UnitedOcean_Produccion.exe",
        type: "exe",
        description: "Aplicación de escritorio para la industria pesquera que registra detalladamente el producto procesado por cada trabajador.",
        stack: ["Python", "QtDesigner", "MySQL"],
        image: "/projects/united_desktop.png",
        link: null
      },
      {
        id: "seacorp_web",
        name: "UnitedOcean_Admin.html",
        type: "html",
        description: "Portal administrativo para el cálculo automático de pagos por productividad y generación de reportes diarios de eficiencia pesquera.",
        stack: ["Vue.js", "Laravel", "MySQL"],
        image: "/projects/united_web.png",
        link: 'https://sistemabalanza.unioceans.com.pe/login'
      }
    ]
  },
  skills: {
    frontend: ["Vue", "Nuxt.js", "Next.js", "Astro", "TypeScript", "Tailwind CSS"],
    mobile: ["React Native", "Expo"],
    backend: ["Laravel", ".NET"],
    database: ["MySQL", "PostgreSQL", "SQL Server", "WatermelonDB"],
    tools: ["Linux", "Windows", "Git", "Scrum", "SAP Integration", "Automatización de procesos", "Gestión de proyectos"]
  }
};
