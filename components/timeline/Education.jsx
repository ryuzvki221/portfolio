"use client";

import React, { useState, useEffect } from "react";
import timelineData from "@/data/fr/timeline.json";

export default function Education() {
  const [timeline, fetchTimeline] = useState({});

  useEffect(() => {
    fetchTimeline(timelineData);
  }, []);

  // is mobile

  const isMobile = () => window.innerWidth <= 600;
  return (
    <>
      <section id={"education-section"} className={timeline.id}>
        <div className="container">
          <div className="row">
            <div className="col s12 section-title">
              <h2>education</h2>
            </div>
            <div className="col s12">
              <div className="col s12 section-content pd-0">
                <ul className="timeline">
                  {timeline.education &&
                    timeline.education.map((item, index) => (
                      <li
                        key={index}
                        className={
                          item.position === "right" && !isMobile()
                            ? "timeline-inverted"
                            : ""
                        }
                        data-aos={
                          item.position === "right" ? "fade-left" : "fade-right"
                        }
                      >
                        <div className="timeline-badge">
                          <a>
                            <i className="fa fa-circle"></i>
                          </a>
                        </div>
                        <div className="timeline-panel w-block shadow-bg pd-30">
                          <div className="timeline-tag">{item.tag}</div>
                          <div className="timeline-title timeline-title-alt">
                            {item.title}
                          </div>
                          <div className="timeline-time">{item.period}</div>
                        </div>
                      </li>
                    ))}
                  <li className="clearfix no-float"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
