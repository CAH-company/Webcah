'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const sections = ['home', 'uslugi', 'o-nas', 'realizacje', 'kontakt'] as const;
type SectionId = typeof sections[number];

const navLabels: Record<SectionId, string> = {
  home: 'Home',
  uslugi: 'Usługi',
  'o-nas': 'O nas',
  realizacje: 'Realizacje',
  kontakt: 'Kontakt',
};

export const Navigation = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 140;
      let current: SectionId = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const scrollTo = (id: SectionId) => {
    setMobileMenuOpen(false);
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const isHome = pathname === '/';

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 border-b border-white/5 ${
        scrolled ? 'bg-cah-bg/90 backdrop-blur-md py-4' : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="container mx-auto px-6 relative flex justify-between items-center">

        <a
          href="/#home"
          onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
          className="flex items-center hover:opacity-80 transition-opacity z-50"
          aria-label="Wróć na górę"
        >
          <Image src="/Pah 2.svg" alt="PAH Logo" width={96} height={40} className="h-8 md:h-10 w-auto" />
        </a>

        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-sm tracking-widest uppercase font-medium brand-font">
          {sections.map((id) => (
            <a
              key={id}
              href={`/#${id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(id); }}
              className={`hover:text-cah-accent transition-colors ${isHome && activeSection === id ? 'text-cah-accent' : 'text-white'}`}
            >
              {navLabels[id]}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        <div
          className={`md:hidden fixed inset-0 bg-cah-bg/95 backdrop-blur-lg transition-all duration-300 flex flex-col items-center justify-center gap-8 ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {sections.map((id) => (
            <a
              key={id}
              href={`/#${id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(id); }}
              className={`text-2xl tracking-widest uppercase font-medium brand-font hover:text-cah-accent transition-colors ${isHome && activeSection === id ? 'text-cah-accent' : 'text-white'}`}
            >
              {navLabels[id]}
            </a>
          ))}
        </div>

        <div className="hidden md:block w-24" />
      </div>
    </nav>
  );
};
