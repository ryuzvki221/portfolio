"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations, getTranslation } from "@/lib/i18n";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Initialiser avec null pour éviter le mismatch SSR/client
  const [language, setLanguage] = useState("fr");
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    // Marquer comme client-side
    setIsClient(true);
    
    // Charger la langue depuis localStorage côté client uniquement
    const savedLang = localStorage.getItem("language");
    if (savedLang && savedLang !== "fr") {
      setLanguage(savedLang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  const t = (key) => getTranslation(language, key);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
