"use client";

import React, { useState } from "react";
import serviceData from "../../data/fr/service.json";

export default function Service() {
  const [service] = useState(serviceData); // Directement initialisé

  return (
    <>
      <section id="service-section" className="section service-section">
        <div className="container">
          <div className="row">
            {service.title && (
              <div className="col s12 section-title">
                <h2>{service.title}</h2>
              </div>
            )}
            <div className="col s12 masonry pd-0 mgt-20">
              {service.data &&
                service.data.map((item, index) => (
                  <div
                    className="col s12 m6 l4 service-wrapper"
                    data-aos="zoom-in"
                    key={index}
                  >
                    <div className="s12 w-block shadow-bg">
                      <div className="service-center">
                        <div className="service-icon">
                          <span className={item.icon}></span>
                        </div>
                        <div className="service-title">{item.title}</div>
                      </div>
                      <div className="service-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
