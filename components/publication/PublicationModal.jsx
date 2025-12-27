"use client";

import PropTypes from "prop-types";

export default function PublicationModal({ pub, onClose }) {
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
                <button className="modal-close-btn" onClick={onClose} aria-label="Close">x</button>
                <div className="modal-content">
                    <h2 className="modal-title ff-dosis">{pub.title}</h2>
                    <div className="modal-authors ff-poppins">{Array.isArray(pub.authors) ? pub.authors.join(", ") : pub.authors}</div>
                    <div className="modal-venue ff-poppins">{pub.venue} | {pub.publication_date}</div>
                    <p className="modal-abstract ff-archivo">{pub.abstract}</p>
                    {pub.keywords?.length > 0 && <p className="modal-keywords ff-archivo"><b>Mots-clés:</b> {pub.keywords.join(", ")}</p>}
                    {pub.link && pub.link !== "#" && (
                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="modal-link ff-poppins">
                            Voir la publication
                        </a>
                    )}
                </div>
            </dialog>
        </div>
    );
}

PublicationModal.propTypes = {
    pub: PropTypes.shape({
        title: PropTypes.string,
        authors: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.string
        ]),
        venue: PropTypes.string,
        publication_date: PropTypes.string,
        abstract: PropTypes.string,
        keywords: PropTypes.arrayOf(PropTypes.string),
        link: PropTypes.string,
    }),
    onClose: PropTypes.func.isRequired,
};
