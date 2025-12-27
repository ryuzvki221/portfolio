"use client";

import { useState } from "react";
import { useLanguage } from "@/hooks/LanguageContext";
import publicationsData from "@/data/fr/publication.json";
import PublicationModal from "./PublicationModal";

export default function Publication() {
  const { t } = useLanguage();
  const [modal, setModal] = useState(null);
  const pubs = publicationsData.data || [];

  return (
    <section id="publication-section" className="section portfolio-section">
      <div className="container">
        <div className="row">
          <div className="col s12 section-title">
            <h2>{t ? t("publication.title") : publicationsData.title}</h2>
          </div>
          <div className="col s12 mgt-20 publication-grid" data-aos="fade-up">
            {pubs.map((pub, idx) => (
              <div
                key={idx}
                className="card pub-card"
                onClick={() => setModal(pub)}
                tabIndex={0}
                aria-label={pub.title}
              >
                <h3 className="pub-title ff-dosis">{pub.title}</h3>
                <div className="pub-authors ff-poppins">{Array.isArray(pub.authors) ? pub.authors.join(", ") : pub.authors}</div>
                <div className="pub-venue ff-poppins">{pub.venue}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modal && <PublicationModal pub={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
