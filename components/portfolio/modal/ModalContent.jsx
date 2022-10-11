import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function ModalContent() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      await fetch("/api/v1/projects/")
        .then((response) => response.json())
        .then((projects) => {
          setProjects(projects);
        });
    };
    getProjects();
  }, []);
  return (
    <>
      {projects.title && (
        <div className="slideshow">
          <figure>
            {/* Project Details Starts */}
            <figcaption>
              <div className="row ff-openSans">
                <div className="col s12 m2">
                  <i className="fa fa-file-text-o pr-2"></i>
                  <span className="project-label">Project </span>:{" "}
                  <span className="ft-wt-600 uppercase">Website</span>
                </div>
                {/* End .col */}

                <div className="col-12 col-sm-6 mb-2">
                  <i className="fa fa-user-o pr-2"></i>
                  <span className="project-label">Client </span>:{" "}
                  <span className="ft-wt-600 uppercase">Envato</span>
                </div>
                {/* End .col */}

                <div className="col-12 col-sm-6 mb-2">
                  <i className="fa fa-code pr-2"></i>
                  <span className="project-label">Langages </span>:{" "}
                  <span className="ft-wt-600 uppercase">
                    HTML, CSS, Javascript
                  </span>
                </div>
                {/* End .col */}

                <div className="col-12 col-sm-6 mb-2">
                  <i className="fa fa-external-link pr-2"></i>
                  <span className="project-label">Preview </span>:{" "}
                  <span className="ft-wt-600 uppercase">
                    <a
                      href="https://themeforest.net/item/edina-personal-portfolio-react-template/34082686"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.envato.com
                    </a>
                  </span>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}
            </figcaption>
            {/* Project Details Ends */}

            {/*  Main Project Content Starts */}
            <Image
              src="https://via.placeholder.com/800x600"
              alt="placeholder"
              layout="fill"
              width={800}
              height={600}
            />
            {/* Main Project Content Ends */}
          </figure>
        </div>
      )}
    </>
  );
}
