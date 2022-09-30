import React from "react";
import Social from "../Social";

// Author
const aboutAuthor = {
  profil: "/img/avatar.jpg",
  name: "Mamadou NIANG",
  job: "Full Stack Developer",
  bio: `I'm a Tunisian based web designer & front-end developer focused on
    crafting clean & user-friendly experiences, I am passionate about
    building excellent software that improves the lives of those
    around me.`,
  age: 26,
  email: "ryuzvki@outlook.com",
  address: "Dakar, Sénégal",
  website: "https://ryuzvki221.github.io",
};

export default function About() {
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
                      style={{ backgroundImage: `url(${aboutAuthor.profil})` }}
                    ></div>
                    <div className="about-name ff-poppins">
                      {aboutAuthor.name}
                    </div>
                    <div className="about-title ff-opensans">
                      {aboutAuthor.job}
                    </div>
                  </div>
                  <div className="col s12 l7 about-data-wrapper pd-50">
                    <div className="about-desc pd-0">
                      <div className="about-section-title">About Me</div>
                      <div className="about-data">
                        <p className="">{aboutAuthor.bio}</p>
                        <div>
                          <span>Age</span>
                          {aboutAuthor.age}
                        </div>
                        <div>
                          <span>Address</span>
                          {aboutAuthor.address}
                        </div>
                        <div>
                          <span>Email</span>
                          <a href={`mailto:${aboutAuthor.email}`}>
                            {aboutAuthor.email}
                          </a>
                        </div>
                        <div>
                          <span>Website</span>
                          <a href={`${aboutAuthor.website}`}>
                            {aboutAuthor.website}
                          </a>
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
