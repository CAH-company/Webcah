'use client';

import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Navigation, type PageKey } from "@/components/Navigation";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HomeSection } from "@/components/sections/HomeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

const accentColor = "#4ed5cd";

export default function Home() {
  const [activePage, setActivePage] = useState<PageKey>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (page: PageKey) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#4ed5cd] selection:text-black overflow-x-hidden">
      <div className="noise-bg" />
      <Navigation
        accentColor={accentColor}
        activePage={activePage}
        scrolled={scrolled}
        onNavigate={navigateTo}
      />

      <main className="min-h-screen">
        {activePage === "home" && (
          <HomeSection accentColor={accentColor} onNavigate={navigateTo} />
        )}
        {activePage === "services" && (
          <ServicesSection accentColor={accentColor} />
        )}
        {activePage === "about" && <AboutSection accentColor={accentColor} />}
        {activePage === "contact" && (
          <ContactSection accentColor={accentColor} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
