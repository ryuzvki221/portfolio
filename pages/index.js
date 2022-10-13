import Head from "next/head";
import { useEffect } from "react";
import About from "../components/about/About";
import Blog from "../components/blog/Blog";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Portfolio from "../components/portfolio/Portfolio";
import Service from "../components/services/Service";
import Technology from "../components/technologies/Technology";
import Education from "../components/timeline/Education";

const menuItem = [
  { icon: "fa fa-home", menuName: "Home" },
  { id: "service-section", icon: "fa fa-coffee", menuName: "Skills" },
  { id: "technologies-section", icon: "fa fa-gears", menuName: "Technologies" },
  {
    id: "education-section",
    icon: "fa fa-graduation-cap",
    menuName: "Education",
  },
  { id: "portfolio-section", icon: "fa fa-briefcase", menuName: "Portfolio" },
  { id: "blog-section", icon: "fa fa-comments", menuName: "Blog" },
];

export default function Home() {
  const scrollToComponent = (id) => {
    const element = id ? document.getElementById(id) : document.body;
    element.scrollIntoView({ behavior: "smooth", block: "start" });

    return false; // used to prevent default
  };

  // menu active on click
  const menuActive = (id) => {
    const menuItems = document.querySelectorAll(".icon-box");
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });

    const menuItem = id ? document.getElementById(id) : document.body;
    menuItem.classList.add("active");
    return false; // used to prevent default
  };

  useEffect(() => {
    //select first element by default
    menuActive("menu-item-0");
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="header">
        <ul id="menu" className=" icon-menu">
          {menuItem.map((item, i) => (
            <li
              id={"menu-item-" + i}
              className="icon-box"
              key={i}
              onClick={() => {
                scrollToComponent(item.id);
                menuActive("menu-item-" + i);
              }}
            >
              <i className={`${item.icon}`}></i>
              <h2>{item.menuName}</h2>
            </li>
          ))}
        </ul>
      </div>
      {/* End Menu Content */}
      <Hero />
      <About />
      <Service />
      <Technology />
      <Education />
      <Portfolio />
      <Blog />
      <Footer />
    </>
  );
}
