import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import { initTooltip } from "../../lib/tooltips";

export default function Portfolio() {
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
    initTooltip();
  }, []);

  return (
    <>
      <section id={projects.id} className="section portfolio-section ">
        <div className="container">
          <div className="row">
            <div className="col s12 section-title">
              <h2>featured work</h2>
            </div>
            <div className="col s12">
              <Tabs className="col s12 section-content pd-0">
                <TabList className="portfolio-tab-list ">
                  <Tab>All</Tab>
                  <Tab>Web Apps</Tab>
                  <Tab>Desktop apps</Tab>
                  <Tab>Mobile Apps</Tab>
                </TabList>
                <div className="portfolio-tab-content">
                  <TabPanel>
                    <ul className="portfolio-items">
                      {projects.data &&
                        projects.data.map((project, index) => (
                          <li className="portfolio-content" key={index}>
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
                                    layout="fill"
                                    objectFit="cover"
                                  />
                                </div>
                              </div>
                              <figcaption>
                                <div className="portfolio-intro">
                                  <div className="portfolio-intro-category">
                                    {project.category &&
                                      project.category.map(
                                        (categorie, index) => (
                                          <p key={index}>{categorie}</p>
                                        )
                                      )}
                                  </div>
                                  <div className="portfolio-intro-title">
                                    <a href={project.link}>{project.name}</a>
                                  </div>
                                  <div className="portfolio-intro-image">
                                    <a
                                      href={project.link}
                                      className="btn-circle waves-effect portfolio-mfp tooltipped"
                                      data-position={"top"}
                                      data-delay={"50"}
                                      data-tooltip={"Preview"}
                                      rel="noopener noreferrer"
                                      target={"_blank"}
                                    >
                                      {" "}
                                      <span className="fa fa-external-link"></span>
                                    </a>
                                  </div>
                                  {project.code && project.code !== "#" && (
                                    <div className="portfolio-intro-detail">
                                      <a
                                        href={project.code}
                                        className="btn-circle waves-effect tooltipped"
                                        data-position={"top"}
                                        data-delay={"50"}
                                        data-tooltip={"View Project"}
                                        rel="noopener noreferrer"
                                        target={"_blank"}
                                      >
                                        <span className="fa fa-code"></span>
                                      </a>
                                    </div>
                                  )}
                                </div>
                              </figcaption>
                            </figure>
                          </li>
                        ))}
                    </ul>
                  </TabPanel>
                  {/* End All Project */}
                  <TabPanel>
                    <ul className="portfolio-items">
                      {projects.data &&
                        projects.data.map((project, index) => (
                           project.group === "Web Apps" &&
                           <li className="portfolio-content" key={index}>
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
                                   layout="fill"
                                   objectFit="cover"
                                 />
                               </div>
                             </div>
                             <figcaption>
                               <div className="portfolio-intro">
                                 <div className="portfolio-intro-category">
                                   {project.category &&
                                     project.category.map(
                                       (categorie, index) => (
                                         <p key={index}>{categorie}</p>
                                       )
                                     )}
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
                                     target={"_blank"}
                                   >
                                     {" "}
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
                                       data-tooltip="View Project"
                                       rel="noopener noreferrer"
                                       target={"_blank"}
                                     >
                                       <span className="fa fa-code"></span>
                                     </a>
                                   </div>
                                 )}
                               </div>
                             </figcaption>
                           </figure>
                         </li>
                        ))}
                    </ul>
                  </TabPanel>
                  {/* End Web Apps Project */}
                  <TabPanel>
                  <ul className="portfolio-items">
                      {projects.data &&
                        projects.data.map((project, index) => (
                           project.group === "Desktop Apps" &&
                           <li className="portfolio-content" key={index}>
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
                                   layout="fill"
                                   objectFit="cover"
                                 />
                               </div>
                             </div>
                             <figcaption>
                               <div className="portfolio-intro">
                                 <div className="portfolio-intro-category">
                                   {project.category &&
                                     project.category.map(
                                       (categorie, index) => (
                                         <p key={index}>{categorie}</p>
                                       )
                                     )}
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
                                     target={"_blank"}
                                   >
                                     {" "}
                                     <span className="fa fa-external-link"></span>
                                   </a>
                                 </div>
                                 {project.code && project.code !== "#" && (
                                   <div className="portfolio-intro-detail">
                                     <a
                                       href={project.link}
                                       className="btn-circle waves-effect tooltipped"
                                       data-position="top"
                                       data-delay="50"
                                       data-tooltip="View Project"
                                       rel="noopener noreferrer"
                                       target={"_blank"}
                                     >
                                       <span className="fa fa-code"></span>
                                     </a>
                                   </div>
                                 )}
                               </div>
                             </figcaption>
                           </figure>
                         </li>
                        ))}
                    </ul>
                  </TabPanel>
                  {/* End Desktop Apps Project */}
                  <TabPanel>
                  <ul className="portfolio-items">
                      {projects.data &&
                        projects.data.map((project, index) => (
                           project.group === "Mobile Apps" &&
                           <li className="portfolio-content" key={index}>
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
                                   layout="fill"
                                   objectFit="cover"
                                 />
                               </div>
                             </div>
                             <figcaption>
                               <div className="portfolio-intro">
                                 <div className="portfolio-intro-category">
                                   {project.category &&
                                     project.category.map(
                                       (categorie, index) => (
                                         <p key={index}>{categorie}</p>
                                       )
                                     )}
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
                                     target={"_blank"}
                                   >
                                     {" "}
                                     <span className="fa fa-picture-o"></span>
                                   </a>
                                 </div>
                                 {project.code && project.code !== "#" && (
                                   <div className="portfolio-intro-detail">
                                     <a
                                       href={project.code}
                                       className="btn-circle waves-effect tooltipped"
                                       data-position="top"
                                       data-delay="50"
                                       data-tooltip="View Project"
                                       rel="noopener noreferrer"
                                       target={"_blank"}
                                     >
                                       <span className="fa fa-code"></span>
                                     </a>
                                   </div>
                                 )}
                               </div>
                             </figcaption>
                           </figure>
                         </li>
                        ))}
                    </ul>
                  </TabPanel>
                  {/* End Mobile Apps Project */}
                </div>
              </Tabs>
              <div className="col s12 portfolio-all al-center">
                <a
                  href="#"
                  className="btn-circle waves-effect tooltipped"
                  data-position="top"
                  data-delay="50"
                  data-tooltip="More Featured"
                >
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
