import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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
  }, [request]);
  return (
    <>
      <section id={technologies.id} className="technologies-section">
        <div className="container">
          <div className="row">
            <div className="col s12 section-title">
              <h2>{technologies.title}</h2>
            </div>
            <div className="col s12 client-wrapper" data-aos="fade-in">
              <div className="col s12 client-carousel w-block shadow-bg pd-0">
                {technologies.items && (
                  <Slider {...settings}>
                    {technologies.items.map((tech, index) => (
                      <div className="item" key={index}>
                        <Image
                          src={tech.image}
                          alt={tech.title}
                          className="tooltipped"
                          data-position="top"
                          data-delay="50"
                          data-tooltip={tech.title}
                          width={159}
                          height={159}
                        />
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
