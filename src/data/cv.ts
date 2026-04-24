export const cvData = {
  personalInfo: {
    name: "Edinson Santos Vilchez",
    role: "Desarrollador Full Stack",
    location: "Piura, Perú",
    email: "edinsonsanvil@gmail.com",
    profile: "Desarrollador Full Stack con experiencia en el desarrollo de aplicaciones web y móviles, utilizando Vue, Nuxt.js, Next.js, Astro y React entrada/salida Native, con TypeScript y Tailwind CSS en entornos frontend. Experiencia en backend con Laravel y .NET, así como en bases de datos MySQL, SQL Server y PostgreSQL. Trabajo en entornos Linux y Windows bajo metodologías ágiles como Scrum, con enfoque en la calidad del código y entrega de resultados."
  },
  experience: [
    {
      company: "Sunshine Export S.A.C.",
      startDate: "2024-12",
      endDate: null, // Actualidad
      role: "Programador Full Stack",
      description: [
        "Desarrollo de aplicaciones web orientadas a la optimización de procesos internos, mejorando la eficiencia operativa de las áreas administrativas y productivas.",
        "Gestión y optimización de bases de datos SQL Server, asegurando la integridad, seguridad y alto rendimiento de la información.",
        "Integración de módulos con el sistema SAP para garantizar la interoperabilidad entre plataformas internas.",
        "Diseño y optimización de procedimientos almacenados, reduciendo los tiempos de respuesta en consultas y operaciones críticas.",
        "Desarrollo de Web APIs en .NET para la integración con dispositivos biométricos, automatizando procesos de autenticación y control de acceso.",
        "Desarrollo de aplicaciones móviles con React Native para el soporte de operaciones internas."
      ]
    },
    {
      company: "Industrias Balinsa E.I.R.L.",
      startDate: "2023-01",
      endDate: "2024-11",
      role: "Jefe de Desarrollo de Proyecto",
      description: [
        "Liderazgo en el desarrollo de aplicaciones para uso interno y clientes externos, optimizando procesos y entregando soluciones personalizadas.",
        "Desarrollo de aplicaciones de escritorio enfocadas en la automatización de sistemas industriales, incrementando la eficiencia operativa.",
        "Gestión de proyectos tecnológicos, incluyendo planificación, asignación de tareas y cumplimiento de plazos bajo metodologías ágiles como Scrum.",
        "Supervisión y capacitación de un equipo técnico, promoviendo la mejora continua y el desarrollo profesional."
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
    frontend: ["Vue.js", "Nuxt.js", "Next.js", "Astro", "TypeScript", "Tailwind CSS"],
    mobile: ["React Native", "Expo Go", "Android", "iOS"],
    backend: ["Laravel", ".NET", "Node.js"],
    database: ["MySQL", "SQL Server", "PostgreSQL", "WatermelonDB"],
    tools: ["Linux", "Windows", "Git", "Scrum", "SAP Integration"]
  }
};
