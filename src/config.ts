export interface LocalizedText {
  en: string;
  es: string;
}

export interface Stat {
  value: string;
  label: LocalizedText;
}

export interface Service {
  icon: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface JourneyPhase {
  flag: string;
  location: LocalizedText;
  period: string;
  phase: LocalizedText;
  highlights: LocalizedText[];
}

export interface Credential {
  title: LocalizedText;
  institution: string;
  detail: string;
  hours?: string;
}

export interface ExperienceItem {
  company: string;
  title: LocalizedText;
  dateRange: string;
  bullets: LocalizedText[];
}

export const siteConfig = {
  name: "Melissa Gallegos Aliaga",
  title: {
    en: "Leadership Coach & Development Consultant",
    es: "Coach de Liderazgo & Consultora de Desarrollo",
  },
  description: {
    en: "Melissa Gallegos Aliaga — Leadership Development Consultant & Well-being Coach helping leaders lead from presence, not reaction.",
    es: "Melissa Gallegos Aliaga — Consultora de Desarrollo de Liderazgo & Coach de Bienestar ayudando a líderes a liderar desde la presencia.",
  },
  defaultLang: "en" as "en" | "es",

  colors: {
    primaryDark: "#0F2340",
    primary: "#1F3A5F",
    primaryLight: "#3D5A80",
    accent: "#FF7F6A",
    surface: "#F4F1EA",
    surfaceLight: "#FDFBF7",
    sage: "#8FAF9B",
  },

  tagline: {
    en: "Helping leaders lead from presence, not reaction.",
    es: "Ayudando a líderes a liderar desde la presencia, no desde la reacción.",
  },

  stats: [
    { value: "1,000+", label: { en: "People Coached", es: "Personas Coached" } },
    { value: "300+", label: { en: "Hours Facilitating", es: "Horas Facilitando" } },
    { value: "12+", label: { en: "Years Experience", es: "Años de Experiencia" } },
    { value: "4", label: { en: "Countries", es: "Países" } },
  ] as Stat[],

  approach: {
    intro: {
      en: "I integrate attention regulation, emotional management, and resilience practices to strengthen leadership effectiveness, well-being, and sustainable work-life balance.",
      es: "Integro regulación atencional, manejo emocional y prácticas de resiliencia para fortalecer la efectividad del liderazgo, el bienestar y un balance vida-trabajo sostenible.",
    },
    pillars: [
      {
        title: { en: "Presence", es: "Presencia" },
        description: {
          en: "Cultivating awareness and attention regulation as the foundation of authentic leadership.",
          es: "Cultivar la consciencia y regulación atencional como base del liderazgo auténtico.",
        },
        icon: "eye",
      },
      {
        title: { en: "Resilience", es: "Resiliencia" },
        description: {
          en: "Building capacity to navigate challenges with clarity, adaptability, and inner strength.",
          es: "Construir la capacidad de navegar desafíos con claridad, adaptabilidad y fortaleza interior.",
        },
        icon: "shield",
      },
      {
        title: { en: "Values", es: "Valores" },
        description: {
          en: "Aligning actions with core values for purposeful, integrity-driven leadership.",
          es: "Alinear acciones con valores fundamentales para un liderazgo con propósito e integridad.",
        },
        icon: "compass",
      },
      {
        title: { en: "Well-being", es: "Bienestar" },
        description: {
          en: "Sustaining high performance through emotional balance and self-management practices.",
          es: "Sostener alto rendimiento a través del balance emocional y prácticas de autogestión.",
        },
        icon: "heart",
      },
    ],
  },

  services: [
    {
      icon: "user",
      title: { en: "Executive Coaching", es: "Coaching Ejecutivo" },
      description: {
        en: "1:1 development sessions for leaders seeking to strengthen self-awareness, communication, and leadership presence.",
        es: "Sesiones de desarrollo 1:1 para líderes que buscan fortalecer su autoconciencia, comunicación y presencia de liderazgo.",
      },
    },
    {
      icon: "users",
      title: { en: "Leadership Workshops", es: "Talleres de Liderazgo" },
      description: {
        en: "Group facilitation on emotional management, resilience, effective communication, and team development.",
        es: "Facilitación grupal en manejo emocional, resiliencia, comunicación efectiva y desarrollo de equipos.",
      },
    },
    {
      icon: "building",
      title: { en: "Organizational Consulting", es: "Consultoría Organizacional" },
      description: {
        en: "Custom learning & development programs designed for organizations seeking sustainable leadership culture.",
        es: "Programas de aprendizaje y desarrollo a medida para organizaciones que buscan una cultura de liderazgo sostenible.",
      },
    },
  ] as Service[],

  impact: {
    numbers: [
      { value: "1,000", suffix: "+", label: { en: "People Coached", es: "Personas Coached" } },
      { value: "300", suffix: "+", label: { en: "Hours Facilitating", es: "Horas Facilitando" } },
      { value: "100", suffix: "", label: { en: "Managers Coached", es: "Gerentes Coached" } },
      { value: "1,000", suffix: "", label: { en: "Employees Impacted", es: "Empleados Impactados" } },
    ],
    clients: [
      "BBVA",
      "Faber-Castell",
      "CONCAR",
      "Cencosud / PARIS",
      "Electrocom",
      "Centro Community Partners",
      "Lyra Health",
    ],
  },

  journey: [
    {
      flag: "\u{1F1F5}\u{1F1EA}",
      location: { en: "Lima, Peru", es: "Lima, Perú" },
      period: "2005 — 2017",
      phase: { en: "The Foundation", es: "Los Cimientos" },
      highlights: [
        { en: "B.S. Business Administration — Universidad Ricardo Palma", es: "Lic. Administración de Empresas — Universidad Ricardo Palma" },
        { en: "12 years in corporate leadership at Electrocom", es: "12 años en liderazgo corporativo en Electrocom" },
        { en: "Created Marketing department from scratch", es: "Creó departamento de Marketing desde cero" },
        { en: "Leadership School for 1,000 employees at PARIS/Cencosud", es: "Escuela de Liderazgo para 1,000 empleados en PARIS/Cencosud" },
      ],
    },
    {
      flag: "\u{1F1E6}\u{1F1FA}",
      location: { en: "Brisbane, Australia", es: "Brisbane, Australia" },
      period: "2007 — 2008",
      phase: { en: "The Pivot", es: "El Giro" },
      highlights: [
        { en: "Masters in Marketing — Griffith University", es: "Maestría en Marketing — Griffith University" },
        { en: "International perspective that transformed her worldview", es: "Perspectiva internacional que transformó su visión" },
      ],
    },
    {
      flag: "\u{1F1FA}\u{1F1F8}",
      location: { en: "Florida, USA", es: "Florida, EE.UU." },
      period: "2020 — Present",
      phase: { en: "The Mission", es: "La Misión" },
      highlights: [
        { en: "Well-being Coach at Lyra Health", es: "Coach de Bienestar en Lyra Health" },
        { en: "ICF Coaching Certification (300+ hours)", es: "Certificación ICF en Coaching (300+ horas)" },
        { en: "Board President — Electrocom Ingenieros", es: "Presidenta del Directorio — Electrocom Ingenieros" },
        { en: "1,000+ people coached across 4 countries", es: "1,000+ personas coached en 4 países" },
      ],
    },
  ] as JourneyPhase[],

  credentials: [
    {
      title: { en: "Mastering Coaching Skills", es: "Mastering Coaching Skills" },
      institution: "Team Power Coaching School",
      detail: "ACSTH — ICF",
      hours: "300 hrs",
    },
    {
      title: { en: "Ontological Coaching PCCO", es: "Coaching Ontológico PCCO" },
      institution: "Escuela Asersentido",
      detail: "Chile — Peru",
      hours: "280 hrs",
    },
    {
      title: { en: "Executive Coaching CICE", es: "Coaching Ejecutivo CICE" },
      institution: "CEGO",
      detail: "CCE — ICF",
      hours: "90 hrs",
    },
    {
      title: { en: "Masters in Marketing", es: "Maestría en Marketing" },
      institution: "Griffith University",
      detail: "Brisbane, Australia",
    },
    {
      title: { en: "B.S. Business Administration", es: "Lic. Administración de Empresas" },
      institution: "Universidad Ricardo Palma",
      detail: "Lima, Peru",
    },
    {
      title: { en: "Certified Facilitator PFFC", es: "Facilitadora Certificada PFFC" },
      institution: "Escuela DH Facilitadores",
      detail: "Peru",
    },
  ] as Credential[],

  cta: {
    quote: {
      en: "Every great transformation starts with a conversation.",
      es: "Toda gran transformación empieza con una conversación.",
    },
    buttonText: { en: "Let's Talk", es: "Conversemos" },
  },

  social: {
    email: "mgallegos.coach@gmail.com",
    linkedin: "https://www.linkedin.com/in/melissa-gallegos-aliaga/",
  },
};
