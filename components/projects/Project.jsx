"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import { initTooltip } from "@/lib/tooltips";
import projectsData from "@/data/fr/project.json";
import PropTypes from "prop-types";

// Message quand aucun projet (moved outside Portfolio)
const EmptyState = ({ category }) => (
  <div className="col s12 al-center" style={{ padding: "40px 20px" }}>
    <p style={{ fontSize: "18px", color: "#666" }}>
      No {category} projects yet. Check back soon!
    </p>
  </div>
);

EmptyState.propTypes = {
  category: PropTypes.string.isRequired,
};

export default function Portfolio() {
  const [projects] = useState(projectsData);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    initTooltip();
  }, []);

  // Calculer les projets par catégorie (avec useMemo pour optimisation)
  // Définition des catégories de tabs (extensible)
  const tabCategories = [
    { key: 'webApps', label: 'Web Apps', group: 'Web Apps' },
    { key: 'mobileApps', label: 'Mobile Apps', group: 'Mobile Apps' },
    // Pour ajouter d'autres tabs, ajouter ici { key, label, group }
  ];

  // Génère les projets par catégorie dynamiquement
  const projectsByCategory = useMemo(() => {
    const data = projects.data || [];
    const byCat = { all: data };
    tabCategories.forEach(tab => {
      byCat[tab.key] = data.filter(p => p.group === tab.group);
    });
    return byCat;
  }, [projects.data]);

  // Total de projets pour le bouton "Load More"
  const totalProjects = projectsByCategory.all.length;
  const hasMoreProjects = visibleCount < totalProjects;
  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, totalProjects));
  };

  // Composant ProjectItem pour éviter la répétition (DRY principle)
  function ProjectItem({ project }) {
    return (
      <li className="portfolio-content">
        <figure
          className="portfolio-content__inner shadow-bg"
          data-aos="pulse"
          data-aos-duration="1200"
          data-aos-delay="0"
        >
          <div className="aspect aspect--4x3">
            <div className="aspect__inner">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <figcaption>
            <div className="portfolio-intro">
              <div className="portfolio-intro-category">
                {project.category?.map((categorie, index) => (
                  <p key={index}>{categorie}</p>
                ))}
              </div>
              <div className="portfolio-intro-title">
                <a href={project.link}>{project.name}</a>
              </div>
              <div className="portfolio-intro-image">
                <a
                  href={project.link}
                  className="btn-circle waves-effect portfolio-mfp tooltipped"
                  data-position="top"
                  data-delay="50"
                  data-tooltip="Preview"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="fa fa-external-link"></span>
                </a>
              </div>
              {project.code && project.code !== "#" && (
                <div className="portfolio-intro-detail">
                  <a
                    href={project.code}
                    className="btn-circle waves-effect tooltipped"
                    data-position="top"
                    data-delay="50"
                    data-tooltip="View Code"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="fa fa-code"></span>
                  </a>
                </div>
              )}
            </div>
          </figcaption>
        </figure>
      </li>
    );
  }

  // Message quand aucun projet
  return (
    <section id="portfolio-section" className="section portfolio-section">
      <div className="container">
        <div className="row">
          <div className="col s12 section-title">
            <h2>{projects.title || "Featured Work"}</h2>
          </div>
          <div className="col s12" >
            <Tabs className="col s12 section-content pd-0">
              <TabList className="portfolio-tab-list ">
                <Tab>All</Tab>
                {tabCategories.map(tab =>
                  projectsByCategory[tab.key]?.length > 0 ? (
                    <Tab key={tab.key}>{tab.label}</Tab>
                  ) : null
                )}
              </TabList>
              <div className="portfolio-tab-content" data-aos="fade-up">
                {/* Tab: All Projects */}
                <TabPanel>
                  <ul className="portfolio-items">
                    {projectsByCategory.all.slice(0, visibleCount).map((project, index) => (
                      <ProjectItem key={project.id || index} project={project} />
                    ))}
                  </ul>
                </TabPanel>
                {tabCategories.map(tab => (
                  projectsByCategory[tab.key]?.length > 0 ? (
                    <TabPanel key={tab.key}>
                      <ul className="portfolio-items">
                        {projectsByCategory[tab.key].map((project, index) => (
                          <ProjectItem key={project.id || index} project={project} />
                        ))}
                      </ul>
                    </TabPanel>
                  ) : null
                ))}
              </div>
            </Tabs>

            {/* Bouton "Load More" - Conditionnel (seulement si > 6 projets) */}
            {hasMoreProjects && (
              <div className="col s12 portfolio-all al-center">
                <button
                  onClick={loadMore}
                  className="btn-circle waves-effect tooltipped"
                  data-position="top"
                  data-delay="50"
                  data-tooltip={`Load More (${totalProjects - visibleCount} remaining)`}
                  aria-label="Load more projects"
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
