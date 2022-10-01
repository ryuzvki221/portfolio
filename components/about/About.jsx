import React, { useState, useEffect } from "react";
import Social from "../Social";

export default function About() {
  const request = "/api/v1/author/";
  const [author, fetchAuthor] = useState({});

  useEffect(() => {
    const getAuthor = async () => {
      await fetch(request)
        .then((response) => response.json())
        .then((author) => {
          fetchAuthor(author);
          // console.log(author);
        });
    };
    getAuthor();
  }, [request]);

  return (
    <>
      <section id="about-section" className="about-section">
        <div className="section-content">
          <div className="container">
            <div className="row">
              <div
                className={"col s12"}
                data-aos={"fade-up"}
                data-aos-delay={"500"}
              >
                <div className="col s12 w-block shadow-bg pd-0 ">
                  <div className="col s12 l5 about-img al-center pd-50 ">
                    <div
                      className="about-img-content shadow-bg layer"
                      data-depth="0.1"
                      style={{ backgroundImage: `url(${author.profil})` }}
                    ></div>
                    <div className="about-name ff-poppins">{author.name}</div>
                    <div className="about-title ff-opensans">{author.job}</div>
                  </div>
                  <div className="col s12 l7 about-data-wrapper pd-50">
                    <div className="about-desc pd-0">
                      <div className="about-section-title">About Me</div>
                      <div className="about-data">
                        <p className="">{author.bio}</p>
                        <div>
                          <span>Age</span>
                          {author.age}
                        </div>
                        <div>
                          <span>Address</span>
                          {author.address}
                        </div>
                        <div>
                          <span>Email</span>
                          <a href={`mailto:${author.email}`}>{author.email}</a>
                        </div>
                        <div>
                          <span>Website</span>
                          <a href={`${author.website}`}>{author.website}</a>
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
    </>
  );
}
