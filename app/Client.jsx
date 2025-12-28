"use client";

import { useEffect, useState, useCallback } from "react";
import AOS from "aos";

import { LanguageProvider, useLanguage } from "@/hooks/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";

import About from "@/components/about/About";
import Blog from "@/components/publication/Publication";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/projects/Project";
import Service from "@/components/services/Service";
import Technology from "@/components/technologies/Technology";
import Education from "@/components/timeline/Education";
import LoadingScreen from "@/components/loadingScreen/LoadingScreen";
import DownloadButton from "@/components/DownloaButton";

function HomePageContent() {
  const { t } = useLanguage();

  const [mounted, setMounted] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);

  const menuItems = [
    { id: null, icon: "fa fa-home", label: t("menu.home") },
    { id: "service-section", icon: "fa fa-coffee", label: t("menu.skills") },
    { id: "technologies-section", icon: "fa fa-gears", label: t("menu.technologies") },
    { id: "education-section", icon: "fa fa-graduation-cap", label: t("menu.education") },
    { id: "portfolio-section", icon: "fa fa-briefcase", label: t("menu.projects") },
    { id: "blog-section", icon: "fa fa-comments", label: t("menu.publications") },
  ];

  useEffect(() => {
    setMounted(true);

    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  // Scroll Spy: update active menu based on visible section
  useEffect(() => {
    const ids = menuItems.map((m) => m.id).filter(Boolean);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el) => !!el);

    if (!sections.length) return;

    const updateActiveMenu = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;

      // Si on est en haut de la page (moins de 200px), toujours activer Home
      if (scrollY < 200) {
        setActiveMenu(0);
        return;
      }

      // Trouver la section la plus proche du haut de la page
      let closestSection = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        // Si la section est visible (pas complètement hors de vue)
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
        }
      });

      if (closestSection) {
        const idx = menuItems.findIndex((m) => m.id === closestSection.id);
        if (idx >= 0) setActiveMenu(idx);
      }
    };

    // Écouter le scroll
    window.addEventListener("scroll", updateActiveMenu, { passive: true });

    // Appel initial
    updateActiveMenu();

    return () => {
      window.removeEventListener("scroll", updateActiveMenu);
    };
  }, [menuItems]);

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
      <DownloadButton />
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
