import React, { useState, useEffect } from "react";

export default function Service() {
  const request = "/api/v1/services/";
  const [service, fetchService] = useState({});

  useEffect(() => {
    const getService = async () => {
      await fetch(request)
        .then((response) => response.json())
        .then((service) => {
          fetchService(service);
          // console.log(service.data);
        });
    };
    getService();
  }, [request]);

  return (
    <>
      <section id={service.id} className="service-section">
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
