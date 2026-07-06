export type Locale = "es" | "en";

export type FaqEntry = { q: string; a: string };

export type Dictionary = {
  langSwitchLabel: string;
  navCta: string;
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaPrimary: string;
  heroRating: string;
  heroStats: { value: string; label: string }[];
  mockupTabTitle: string;
  howKicker: string;
  howTitle: string;
  steps: { n: string; title: string; desc: string }[];
  shotsKicker: string;
  shotsTitle: string;
  shotsSubtitle: string;
  shots: { src: string; label: string }[];
  modesKicker: string;
  modesTitle: string;
  modesSubtitle: string;
  recommendedTag: string;
  modes: { name: string; tag: string; desc: string; recommended: boolean }[];
  privacyKicker: string;
  privacyTitle: string;
  privacySubtitle: string;
  privacyPoints: string[];
  reviewsScore: string;
  reviewsSubtitle: string;
  reviewsCta: string;
  faqKicker: string;
  faqTitle: string;
  faq: FaqEntry[];
  footerPrivacy: string;
  footerContact: string;
  footerNote: string;
  finalTitle: string;
};

const STEP_N = ["01", "02", "03", "04"];

const SHOT_SRC = [
  "/screenshots/panel-light-ready.png",
  "/screenshots/panel-light-listening.png",
  "/screenshots/panel-dark-ready.png",
  "/screenshots/panel-dark-listening.png",
];

export const STORE_URL =
  "https://chromewebstore.google.com/detail/auralang/pakdegbkjgibdjkpdniabdocffiejolo";
export const REPO_URL = "https://github.com/CristinaFores/auralang";
export const PRIVACY_URL =
  "https://github.com/CristinaFores/auralang/blob/main/PRIVACY.md";
export const CONTACT_EMAIL = "cristinaforescampos1992@gmail.com";

export const CONTENT: Record<Locale, Dictionary> = {
  es: {
    langSwitchLabel: "EN",
    navCta: "Añadir a Chrome",
    heroKicker: "Extensión de Chrome · Manifest V3",
    heroTitle: "Escucha cualquier pestaña en tu idioma.",
    heroSubtitle:
      "Traducción de audio en tiempo real. Transcripción local con Whisper — sin cuenta, sin API key.",
    heroCtaPrimary: "Añadir a Chrome — Gratis",
    heroRating: "5,0 · 1 valoración",
    heroStats: [
      { value: "0€", label: "Gratis, sin cuenta" },
      { value: "Local", label: "Transcripción on-device" },
      { value: "MV3", label: "Manifest V3" },
    ],
    mockupTabTitle: "Panel lateral de AuraLang traduciendo audio en tiempo real",
    howKicker: "Cómo funciona",
    howTitle: "De la pestaña a tu idioma en cuatro pasos.",
    steps: [
      ["Abre el panel lateral", "Abre AuraLang en la pestaña que quieras traducir."],
      ["Elige tus idiomas", "Selecciona el idioma de origen y el de destino."],
      [
        "Pulsa Iniciar traducción",
        "El audio original se silencia y escuchas la traducción hablada al instante.",
      ],
      [
        "Sigue el texto en vivo",
        "Transcripción original y traducción, con la frase resaltada tipo karaoke.",
      ],
    ].map(([title, desc], i) => ({ n: STEP_N[i], title, desc })),
    shotsKicker: "Vista previa",
    shotsTitle: "Así se ve mientras traduce.",
    shotsSubtitle:
      "El panel lateral muestra el estado, la transcripción en vivo y la traducción hablada — sin salir de la pestaña que estás viendo.",
    shots: [
      "Tema claro · listo para traducir",
      "Tema claro · transcripción en vivo",
      "Tema oscuro · elige tus idiomas",
      "Tema oscuro · traducción resaltada",
    ].map((label, i) => ({ src: SHOT_SRC[i], label })),
    modesKicker: "Modos de modelo",
    modesTitle: "Elige la velocidad que necesita tu equipo.",
    modesSubtitle:
      "El modelo se descarga una sola vez y queda guardado para uso sin conexión.",
    recommendedTag: "Recomendado",
    modes: [
      ["Auto", "auto-detect", "Elige el mejor modelo según tu equipo.", true],
      ["Ligero", "whisper-tiny", "Más rápido, ideal para equipos justos.", false],
      ["Equilibrado", "whisper-base", "Más preciso, para equipos modernos.", false],
    ].map(([name, tag, desc, recommended]) => ({
      name: name as string,
      tag: tag as string,
      desc: desc as string,
      recommended: recommended as boolean,
    })),
    privacyKicker: "Privacidad primero",
    privacyTitle: "Tu audio nunca sale de tu ordenador.",
    privacySubtitle:
      "AuraLang está pensado para funcionar sin depender de servidores propios ni recopilar tus datos.",
    privacyPoints: [
      "La transcripción ocurre en tu dispositivo con Whisper local — el audio nunca sale de tu máquina.",
      "Sin cuenta, sin inicio de sesión, sin telemetría, sin backend propio.",
      "Tus ajustes (idiomas, tema, modelo) se guardan solo en tu navegador.",
      "Solo el texto ya transcrito se envía a Google Translate para traducirlo — nada más.",
    ],
    reviewsScore: "5,0",
    reviewsSubtitle: "Puntuación media en la Chrome Web Store.",
    reviewsCta: "Ver en la Chrome Web Store",
    faqKicker: "Preguntas frecuentes",
    faqTitle: "Lo que la gente pregunta antes de instalar.",
    faq: [
      [
        "¿Necesito una cuenta o una API key?",
        "No. AuraLang funciona sin registro, sin inicio de sesión y sin claves de API. Instalas la extensión y empiezas a traducir.",
      ],
      [
        "¿Mi audio se sube a algún servidor?",
        "No. La transcripción se hace en tu propio dispositivo con un modelo Whisper local. Solo el texto ya transcrito se envía al servicio de traducción de Google; el audio nunca sale de tu equipo.",
      ],
      [
        "¿Cuánto pesa la descarga del modelo?",
        "Depende del modo: Ligero pesa unos 150 MB y Equilibrado unos 290 MB. Se descarga una sola vez y se guarda para uso sin conexión.",
      ],
      [
        "¿Qué permisos pide y por qué?",
        "Pide permiso de captura de pestaña para poder escuchar y traducir el audio. Chrome lo muestra con un aviso genérico, pero AuraLang solo captura el audio de la pestaña elegida y no accede al contenido de las páginas.",
      ],
      [
        "¿En qué idiomas funciona?",
        "La interfaz está disponible en español e inglés, y la traducción funciona entre decenas de idiomas.",
      ],
      [
        "¿Qué necesito para usarlo?",
        "Google Chrome 116 o superior. No hace falta instalar nada más ni configurar servidores.",
      ],
    ].map(([q, a]) => ({ q, a })),
    footerPrivacy: "Política de privacidad",
    footerContact: "Contacto",
    footerNote:
      "© 2026 AuraLang. Proyecto independiente, sin afiliación con los servicios de terceros que usa.",
    finalTitle: "Entiende cualquier vídeo, en tu idioma, en segundos.",
  },
  en: {
    langSwitchLabel: "ES",
    navCta: "Add to Chrome",
    heroKicker: "Chrome Extension · Manifest V3",
    heroTitle: "Hear any tab in your language.",
    heroSubtitle:
      "Real-time audio translation. Local Whisper transcription — no account, no API key.",
    heroCtaPrimary: "Add to Chrome — Free",
    heroRating: "5.0 · 1 rating",
    heroStats: [
      { value: "$0", label: "Free, no account" },
      { value: "Local", label: "On-device transcription" },
      { value: "MV3", label: "Manifest V3" },
    ],
    mockupTabTitle: "AuraLang side panel translating tab audio in real time",
    howKicker: "How it works",
    howTitle: "From the tab to your language in four steps.",
    steps: [
      ["Open the side panel", "Open AuraLang on the tab you want to translate."],
      ["Pick your languages", "Choose the source and target language."],
      [
        "Hit Start translation",
        "The original audio is muted and you hear the spoken translation instantly.",
      ],
      [
        "Follow the live text",
        "Original + translated transcript, with the spoken line highlighted karaoke-style.",
      ],
    ].map(([title, desc], i) => ({ n: STEP_N[i], title, desc })),
    shotsKicker: "Preview",
    shotsTitle: "Here's what it looks like while translating.",
    shotsSubtitle:
      "The side panel shows live status, the running transcript, and the spoken translation — without leaving the tab you're watching.",
    shots: [
      "Light theme · ready to translate",
      "Light theme · live transcript",
      "Dark theme · pick your languages",
      "Dark theme · highlighted translation",
    ].map((label, i) => ({ src: SHOT_SRC[i], label })),
    modesKicker: "Model modes",
    modesTitle: "Pick the speed your machine needs.",
    modesSubtitle: "The model downloads once and stays cached for offline use.",
    recommendedTag: "Recommended",
    modes: [
      ["Auto", "auto-detect", "Picks the best model for your machine.", true],
      ["Light", "whisper-tiny", "Faster, ideal for modest hardware.", false],
      ["Balanced", "whisper-base", "More accurate, for modern machines.", false],
    ].map(([name, tag, desc, recommended]) => ({
      name: name as string,
      tag: tag as string,
      desc: desc as string,
      recommended: recommended as boolean,
    })),
    privacyKicker: "Privacy first",
    privacyTitle: "Your audio never leaves your computer.",
    privacySubtitle:
      "AuraLang is built to run without its own servers or collecting your data.",
    privacyPoints: [
      "Transcription happens on your device with local Whisper — audio never leaves your machine.",
      "No account, no login, no telemetry, no backend of its own.",
      "Your settings (languages, theme, model) are stored only in your browser.",
      "Only the already-transcribed text is sent to Google Translate — nothing else.",
    ],
    reviewsScore: "5.0",
    reviewsSubtitle: "Average rating on the Chrome Web Store.",
    reviewsCta: "View on Chrome Web Store",
    faqKicker: "FAQ",
    faqTitle: "What people ask before installing.",
    faq: [
      [
        "Do I need an account or an API key?",
        "No. AuraLang works with no sign-up, no login, and no API keys. Install the extension and start translating.",
      ],
      [
        "Does my audio get uploaded anywhere?",
        "No. Transcription happens on your own device with a local Whisper model. Only the already-transcribed text is sent to Google Translate — your audio never leaves your machine.",
      ],
      [
        "How big is the model download?",
        "It depends on the mode: Light is about 150 MB and Balanced about 290 MB. It downloads once and is cached for offline use.",
      ],
      [
        "What permissions does it ask for, and why?",
        "It asks for tab-capture permission so it can hear and translate audio. Chrome shows a generic warning, but AuraLang only captures the audio of the tab you choose and never reads page content.",
      ],
      [
        "What languages does it support?",
        "The interface is available in Spanish and English, and translation works across dozens of languages.",
      ],
      [
        "What do I need to use it?",
        "Google Chrome 116 or newer. No extra setup or servers required.",
      ],
    ].map(([q, a]) => ({ q, a })),
    footerPrivacy: "Privacy Policy",
    footerContact: "Contact",
    footerNote:
      "© 2026 AuraLang. Independent project, not affiliated with the third-party services it uses.",
    finalTitle: "Understand any video, in your language, in seconds.",
  },
};
