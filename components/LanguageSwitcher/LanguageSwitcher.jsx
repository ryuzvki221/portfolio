"use client";

import { useLanguage } from "./LanguageContext";

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${language === "fr" ? "active" : ""}`}
        onClick={() => switchLanguage("fr")}
        aria-label="Français"
      >
        FR
      </button>
      <span className="lang-separator">/</span>
      <button
        className={`lang-btn ${language === "en" ? "active" : ""}`}
        onClick={() => switchLanguage("en")}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
