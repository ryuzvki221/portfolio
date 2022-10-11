import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { initTooltip } from "../../lib/tooltips";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

export default function Technology() {
  const request = "/api/v1/tech/";
  const [technologies, fetchTechnologies] = useState({});

  useEffect(() => {
    const getTechnologies = async () => {
      await fetch(request)
        .then((response) => response.json())
        .then((tech) => {
          fetchTechnologies(tech);
        });
    };
    getTechnologies();
    initTooltip();
  }, [request]);
  return (
    <>
      <section id={technologies.id} className="technologies-section">
        <div className="container">
          <div className="row">
            <div className="col s12 section-title">
              <h2>{technologies.title}</h2>
            </div>
            <div
              className="col s12 client-wrapper"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="col s12 client-carousel w-block shadow-bg pd-0">
                {technologies.items && (
                  <Slider {...settings}>
                    {technologies.items.map((tech, index) => (
                      <div className="item" key={index}>
                        <a href="#">
                          <Image
                            className="tooltipped"
                            src={tech.image}
                            alt={tech.name}
                            data-position="top"
                            data-delay="50"
                            data-tooltip={tech.name}
                            width={159}
                            height={159}
                          />
                        </a>
                      </div>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
