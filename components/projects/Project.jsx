"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import { initTooltip } from "@/lib/tooltips";
import projectsFr from "@/data/fr/project.json";
import projectsEn from "@/data/en/project.json";
import { useLanguage } from "@/hooks/LanguageContext";

const GROUP_LABEL_KEYS = {
  "Web Apps": "project.groups.webApps",
  "Mobile Apps": "project.groups.mobileApps",
};

const VISIBLE_GROUPS = ["Web Apps", "Mobile Apps"];

export default function Portfolio() {
  const { t, language } = useLanguage();
  const projects = language === "en" ? projectsEn : projectsFr;
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    initTooltip();
  }, []);

  useEffect(() => {
    setVisibleCount(6);
  }, [language]);

  const data = projects.data || [];

  const tabCategories = useMemo(() => {
    const groups = [...new Set(data.map((project) => project.group).filter(Boolean))]
      .filter((group) => VISIBLE_GROUPS.includes(group));

    return groups.map((group) => ({
      key: group,
      label: t(GROUP_LABEL_KEYS[group] || group),
    }));
  }, [data, t]);

  const projectsByCategory = useMemo(() => {
    const byCategory = { all: data };

    tabCategories.forEach((tab) => {
      byCategory[tab.key] = data.filter((project) => project.group === tab.key);
    });

    return byCategory;
  }, [data, tabCategories]);

  const totalProjects = projectsByCategory.all.length;
  const hasMoreProjects = visibleCount < totalProjects;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, totalProjects));
  };

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
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              </div>
              <div className="portfolio-intro-image">
                <a
                  href={project.link}
                  className="btn-circle waves-effect portfolio-mfp tooltipped"
                  data-position="top"
                  data-delay="50"
                  data-tooltip={t("project.viewDemo")}
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
                    data-tooltip={t("project.viewCode")}
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

  return (
    <section id="portfolio-section" className="section portfolio-section">
      <div className="container">
        <div className="row">
          <div className="col s12 section-title">
            <h2>{projects.title || t("project.title")}</h2>
          </div>
          <div className="col s12">
            <Tabs className="col s12 section-content pd-0">
              <TabList className="portfolio-tab-list">
                <Tab>{t("project.all")}</Tab>
                {tabCategories.map((tab) => (
                  <Tab key={tab.key}>{tab.label}</Tab>
                ))}
              </TabList>
              <div className="portfolio-tab-content" data-aos="fade-up">
                <TabPanel>
                  <ul className="portfolio-items">
                    {projectsByCategory.all.slice(0, visibleCount).map((project, index) => (
                      <ProjectItem key={project.id || index} project={project} />
                    ))}
                  </ul>
                </TabPanel>
                {tabCategories.map((tab) => (
                  <TabPanel key={tab.key}>
                    <ul className="portfolio-items">
                      {projectsByCategory[tab.key].map((project, index) => (
                        <ProjectItem key={project.id || index} project={project} />
                      ))}
                    </ul>
                  </TabPanel>
                ))}
              </div>
            </Tabs>

            {hasMoreProjects && (
              <div className="col s12 portfolio-all al-center">
                <button
                  onClick={loadMore}
                  className="btn-circle waves-effect tooltipped"
                  data-position="top"
                  data-delay="50"
                  data-tooltip={`${t("project.loadMore")} (${totalProjects - visibleCount} ${t("project.remaining")})`}
                  aria-label={t("project.loadMore")}
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