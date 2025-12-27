"use client";

import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { getTranslation } from "@/lib/i18n";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Marquer comme client-side
    setIsClient(true);

    // Charger la langue depuis localStorage
    try {
      const savedLang = localStorage.getItem("language");
      if (savedLang && savedLang !== language) {
        setLanguage(savedLang);
      }
    } catch (err) {
      console.warn("LocalStorage non disponible", err);
    }
  }, []);

  const switchLanguage = useCallback((lang) => {
    setLanguage(lang);
    if (globalThis.window !== undefined) {
      try {
        localStorage.setItem("language", lang);
      } catch (err) {
        console.warn("Impossible de sauvegarder la langue", err);
      }
    }
  }, []);

  const t = useCallback(
    (key) => getTranslation(language, key),
    [language]
  );

  const contextValue = useMemo(
    () => ({ language, switchLanguage, t, isClient }),
    [language, switchLanguage, t, isClient]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook pratique pour récupérer le contexte
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
