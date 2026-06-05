"use client";

import { useLanguage } from "@/hooks/LanguageContext";

export default function PublicationModal({ pub, onClose }) {
    const { t } = useLanguage();

    if (!pub) return null;

    return (
        <div
            className="publication-modal-bg"
            onClick={onClose}
            tabIndex={-1}
            onKeyDown={e => {
                if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
                    onClose();
                }
            }}
        >
            <dialog
                className="publication-modal"
                open
                aria-modal="true"
                onClick={e => e.stopPropagation()}
            >
                <button className="modal-close-btn" onClick={onClose} aria-label="Close modal" type="button">
                    <svg className="modal-close-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M6 6L18 18M18 6L6 18" />
                    </svg>
                </button>
                <div className="modal-content">
                    <h2 className="modal-title ff-dosis">{pub.title}</h2>
                    <div className="modal-authors ff-poppins">
                        <strong>{t("publication.authors")}:</strong> {Array.isArray(pub.authors) ? pub.authors.join(", ") : pub.authors}
                    </div>
                    <div className="modal-venue ff-poppins">
                        <strong>{t("publication.venue")}:</strong> {pub.venue} | {pub.publication_date}
                    </div>
                    <p className="modal-abstract ff-archivo">{pub.abstract}</p>
                    {pub.keywords?.length > 0 && (
                        <p className="modal-keywords ff-archivo">
                            <b>{t("publication.keywords")}:</b> {pub.keywords.join(", ")}
                        </p>
                    )}
                    {pub.link && pub.link !== "#" && (
                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="modal-link ff-poppins">
                            {t("publication.viewPublication")}
                        </a>
                    )}
                </div>
            </dialog>
        </div>
    );
}
