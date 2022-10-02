import React, { useState, useEffect } from "react";

export default function Experience() {
  const request = "/api/v1/timeline/";
  const [timeline, fetchTimeline] = useState({});

  useEffect(() => {
    const getTechnologies = async () => {
      await fetch(request)
        .then((response) => response.json())
        .then((job) => {
          fetchTimeline(job);
        });
    };
    getTechnologies();
  }, [request]);

  const isMobile = () => window.innerWidth <= 600;
  return (
    <>
      <section id={"experience-section"} className={timeline.id}>
        <div className="container">
          <div className="row">
            <div className="col s12 section-title">
              <h2>experience</h2>
            </div>
            <div className="col s12">
              <div className="col s12  masonry pd-0 mgt-20">
                <div className="timeline experience-box ">
                  <ul>
                    {timeline.experience &&
                      timeline.experience.map((item, index) => (
                        <div
                          className="col s12 l6 experience-wrapper"
                          key={index}
                          data-aos={
                            !isMobile()
                              ? "zoom-in"
                              : "fade-in"
                          }
                          data-aos-duration="1200"
                          data-aos-delay="100"
                        >
                          <div className="s12 w-block shadow-bg pd-30">
                            <li>
                              <div className="experience-icon">
                                <i className="fa fa-briefcase"></i>
                              </div>
                              <span className={"experience-time ff-opensans"}>
                                {item.period.toUpperCase()}
                              </span>
                              <h5
                                className={"timeline-title timeline-title-alt "}
                              >
                                {item.title.toUpperCase()}
                                <span className="timeline-tag place ">
                                  {item.tag}
                                </span>
                              </h5>
                              {item.description &&
                                item.description.map((desc, i) => (
                                  <p key={i} className=" timeline-desc">
                                    {desc}
                                  </p>
                                ))}
                            </li>
                          </div>
                        </div>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
