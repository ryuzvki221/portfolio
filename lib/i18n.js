// Fonction utilitaire pour récupérer une traduction par clé (ex: 'menu.home')
export function getTranslation(lang, key) {
  const keys = key.split('.');
  let value = translations[lang];
  for (const k of keys) {
    if (!value) return key;
    value = value[k];
  }
  return value || key;
}
export const translations = {
  fr: {
    menu: {
      home: "Accueil",
      skills: "Compétences",
      technologies: "Technologies",
      education: "Formation",
      projects: "Projets",
      publications: "Publications"
    },

    about: {
      title: "À propos",
      age: "Âge",
      address: "Adresse",
      email: "Email",
      website: "Site web"
    },

    skills: {
      title: "Compétences"
    },

    technologies: {
      title: "Technologies"
    },

    education: {
      title: "Formation"
    },

    project: {
      title: "Projets",
      all: "Tous",
      viewDemo: "Voir la démo",
      viewCode: "Voir le code",
      details: "Détails"
    },

    publication: {
      title: "Publications",
      comingSoon: "Bientôt disponible"
    },

    footer: {
      backToTop: "Retour en haut"
    }
  },

  en: {
    menu: {
      home: "Home",
      skills: "Skills",
      technologies: "Technologies",
      education: "Education",
      projects: "Projects",
      publications: "Publications"
    },

    about: {
      title: "About Me",
      age: "Age",
      address: "Address",
      email: "Email",
      website: "Website"
    },

    skills: {
      title: "Skills"
    },

    technologies: {
      title: "Technologies"
    },

    education: {
      title: "Education"
    },

    project: {
      title: "Projects",
      all: "All",
      viewDemo: "View Demo",
      viewCode: "View Code",
      details: "Details"
    },

    publication: {
      title: "Publications",
      comingSoon: "Coming Soon"
    },

    footer: {
      backToTop: "Back to Top"
    }
  }
};
