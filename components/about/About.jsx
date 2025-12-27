"use client";

import React, { useState, useEffect } from "react";
import Social from "../Social";
import authorData from "@/data/fr/author.json";
import { useLanguage } from "@/hooks/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const [author, setAuthor] = useState({});

  useEffect(() => {
    setAuthor(authorData);
  }, []);

  //calcul birth date
  const birthDate = (dateString) => {
    const birthday = new Date(dateString);
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getFullYear() - 1970);
  };

  const age = birthDate(author.birth);

  return (
    <section id="about-section" className="about-section">
      <div className="section-content">
        <div className="container">
          <div className="row">
            <div
              className={"col s12"}
              data-aos={"fade-up"}
              data-aos-duration={"1200"}
              data-aos-delay={"100"}
            >
              <div className="col s12 w-block shadow-bg pd-0 ">
                <div className="col s12 l5 about-img al-center pd-50 ">
                  <div
                    className="about-img-content shadow-bg layer"
                    data-depth="0.1"
                    style={author.profil ? { backgroundImage: `url(${author.profil})` } : {}}
                  ></div>
                  <div className="about-name ff-poppins">
                    {author.name}
                    {author.degree && (
                      <span className="about-degree">, {author.degree}</span>
                    )}
                  </div>
                  <div className="about-title ff-opensans">{author.job}</div>
                </div>                  <div className="col s12 l7 about-data-wrapper pd-50">
                  <div className="about-desc pd-0">
                    <div className="about-section-title">{t('about.title')}</div>
                    <div className="about-data">
                      <p className="">{author.bio}</p>
                      <div>
                        <span>{t('about.age')}</span>
                        {age}
                      </div>
                      <div>
                        <span>{t('about.address')}</span>
                        {author.address}
                      </div>
                      <div>
                        <span>{t('about.email')}</span>
                        <a href={`mailto:${author.email}`}>{author.email}</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" col s12 pd-0 about-social">
                  {/* <Social /> */}
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
