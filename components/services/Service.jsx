"use client";

import React from "react";
import serviceData from "@/data/fr/service.json";

export default function Service() {
  const { title, data } = serviceData;

  return (
    <section id="service-section" className="section service-section">
      <div className="container">
        <div className="row">
          {title && (
            <div className="col s12 section-title">
              <h2>{title}</h2>
            </div>
          )}

          <div className="col s12 masonry pd-0 mgt-20">
            {Array.isArray(data) &&
              data.map((item) => (
                <div
                  key={item.title}
                  className="col s12 m6 l4 service-wrapper"
                  data-aos="zoom-in"
                >
                  <div className="s12 w-block shadow-bg">
                    <div className="service-center">
                      <div className="service-icon">
                        <span className={item.icon} aria-hidden="true" />
                      </div>
                      <div className="service-title">{item.title}</div>
                    </div>

                    <div className="service-desc ff-archivo">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
