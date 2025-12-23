"use client";

import React from "react";
import { useLanguage } from "../LanguageSwitcher/LanguageContext";

export default function Blog() {
  const { t } = useLanguage();
  
  return (
    <>
      <section id={"blog-section"} className="section blog-section ">
        <div className="container">
          <div className="row">
            <div className="col s12 section-title">
              <h2>{t('blog.title')}</h2>
            </div>
            <div className="col s12 masonry pd-50 al-center">
              {t('blog.comingSoon').toUpperCase()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
