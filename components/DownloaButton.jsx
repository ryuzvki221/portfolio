export default function DownloadButton() {

  const overleafUrl = "https://www.overleaf.com/read/qdxxvhtrfvnq#14fc71";
  return (
    <>
      <a
        href={overleafUrl || "/cv.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        className="download-button"
        title="Télécharger mon CV"
        aria-label="Télécharger mon CV"
      >
        <i className="fa fa-download download-icon" />
        <span className="download-text">CV</span>
      </a>

      <style>{`
        .download-button {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 9999;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #d5d4d4;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          animation: pulse 2s infinite;
          transition: background 0.25s ease, transform 0.25s ease;
        }

        .download-icon {
          font-size: 18px;
          color: #666;
          transition: color 0.25s ease;
        }

        .download-text {
          font-size: 11px;
          font-weight: 600;
          color: #666;
          margin-top: 2px;
          transition: color 0.25s ease;
        }

        .download-button:hover {
          background:  #ffb400;
          transform: translateY(-2px);
        }

        .download-button:hover .download-icon,
        .download-button:hover .download-text {
          color: #ffffff;
        }

         @media (max-width: 991px) {
          .download-button {
            width: 48px;
            height: 48px;
            top: 10px;
            left: 24px;
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4);
          }
          70% {
            box-shadow: 0 0 0 14px rgba(79, 70, 229, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);
          }
        }
      `}</style>
    </>
  );
}
