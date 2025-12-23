"use client";

import { useEffect, useState, useCallback } from "react";
import AOS from "aos";

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

  const [mounted, setMounted] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);

  const menuItems = [
    { id: null, icon: "fa fa-home", label: t("menu.home") },
    { id: "service-section", icon: "fa fa-coffee", label: t("menu.skills") },
    { id: "technologies-section", icon: "fa fa-gears", label: t("menu.technologies") },
    { id: "education-section", icon: "fa fa-graduation-cap", label: t("menu.education") },
    { id: "portfolio-section", icon: "fa fa-briefcase", label: t("menu.portfolio") },
    { id: "blog-section", icon: "fa fa-comments", label: t("menu.blog") },
  ];

  useEffect(() => {
    setMounted(true);

    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  const scrollToSection = useCallback((id) => {
    const target = id ? document.getElementById(id) : document.body;
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  if (!mounted) {
    return <LoadingScreen />;
  }

  return (
    <>
      <LanguageSwitcher />

      <header className="header">
        <ul id="menu" className="icon-menu">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`icon-box ${activeMenu === index ? "active" : ""}`}
              onClick={() => {
                setActiveMenu(index);
                scrollToSection(item.id);
              }}
            >
              <i className={item.icon} />
              <h2>{item.label}</h2>
            </li>
          ))}
        </ul>
      </header>

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
