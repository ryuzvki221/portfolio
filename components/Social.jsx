"use client";

import  { useState, useEffect } from "react";
import socialFr from "@/data/fr/social.json";
import socialEn from "@/data/en/social.json";
import { useLanguage } from "@/hooks/LanguageContext";

const Social = () => {
  const [social, fetchSocial] = useState([]);
  const { language } = useLanguage();

  useEffect(() => {
    fetchSocial(language === "en" ? socialEn : socialFr);
  }, [language]);
  return (
    <>
      {social.map((val, i) => {
        return (
          <a key={i} href={`${val.link}`} className="waves-effect  waves-light">
            <span className={`${val.iconName}`}></span>
          </a>
        );
      })}
    </>
  );
};

export default Social;
