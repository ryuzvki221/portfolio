"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import TagManager from "react-gtm-module";
import { LanguageProvider, useLanguage } from "../components/LanguageSwitcher/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";
import About from "../components/about/About";
import Blog from "../components/blog/Blog";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Portfolio from "../components/portfolio/Portfolio";
import Service from "../components/services/Service";
import Technology from "../components/technologies/Technology";
import Education from "../components/timeline/Education";
import LoadingScreen from "../components/loadingScreen/LoadingScreen";

function HomePageContent() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  const menuItem = [
    { icon: "fa fa-home", menuName: t("menu.home") },
    { id: "service-section", icon: "fa fa-coffee", menuName: t("menu.skills") },
    { id: "technologies-section", icon: "fa fa-gears", menuName: t("menu.technologies") },
    { id: "education-section", icon: "fa fa-graduation-cap", menuName: t("menu.education") },
    { id: "portfolio-section", icon: "fa fa-briefcase", menuName: t("menu.portfolio") },
    { id: "blog-section", icon: "fa fa-comments", menuName: t("menu.blog") },
  ];

  const scrollToComponent = (id) => {
    const element = id ? document.getElementById(id) : document.body;
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return false;
  };

  const menuActive = (id) => {
    const menuItems = document.querySelectorAll(".icon-box");
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });

    const menuItem = id ? document.getElementById(id) : null;
    if (menuItem) {
      menuItem.classList.add("active");
    }
    return false;
  };

  useEffect(() => {
    setMounted(true);
    
    TagManager.initialize({
      gtmId: "GTM-WCCFPZV",
    });

    AOS.init({
      once: true,
    });

    setTimeout(() => {
      setLoading(false);
      menuActive("menu-item-0");
    }, 3000);
  }, []);
  if (!mounted || loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <LanguageSwitcher />
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

export default function HomePage() {
  return (
    <LanguageProvider>
      <HomePageContent />
    </LanguageProvider>
  );
}
