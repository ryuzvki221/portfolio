export const translations = {
  fr: {
    // Menu
    menu: {
      home: "Accueil",
      skills: "Compétences",
      technologies: "Technologies",
      education: "Formation",
      portfolio: "Portfolio",
      blog: "Blog"
    },
    // About Section
    about: {
      title: "À propos",
      age: "Âge",
      address: "Adresse",
      email: "Email",
      website: "Site web"
    },
    // Skills Section
    skills: {
      title: "Compétences"
    },
    // Technologies Section
    technologies: {
      title: "Technologies"
    },
    // Education Section
    education: {
      title: "Formation"
    },
    // Portfolio Section
    portfolio: {
      title: "Portfolio",
      all: "Tous",
      viewDemo: "Voir le démo",
      viewCode: "Voir le code",
      details: "Détails"
    },
    // Blog Section
    blog: {
      title: "Blog",
      comingSoon: "Bientôt disponible"
    },
    // Footer
    footer: {
      backToTop: "Retour en haut"
    }
  },
  en: {
    // Menu
    menu: {
      home: "Home",
      skills: "Skills",
      technologies: "Technologies",
      education: "Education",
      portfolio: "Portfolio",
      blog: "Blog"
    },
    // About Section
    about: {
      title: "About Me",
      age: "Age",
      address: "Address",
      email: "Email",
      website: "Website"
    },
    // Skills Section
    skills: {
      title: "Skills"
    },
    // Technologies Section
    technologies: {
      title: "Technologies"
    },
    // Education Section
    education: {
      title: "Education"
    },
    // Portfolio Section
    portfolio: {
      title: "Portfolio",
      all: "All",
      viewDemo: "View Demo",
      viewCode: "View Code",
      details: "Details"
    },
    // Blog Section
    blog: {
      title: "Blog",
      comingSoon: "Coming Soon"
    },
    // Footer
    footer: {
      backToTop: "Back to Top"
    }
  }
};

export const getTranslation = (lang, key) => {
  const keys = key.split('.');
  let value = translations[lang] || translations.en;
  
  for (const k of keys) {
    value = value[k];
    if (!value) return key;
  }
  
  return value;
};
