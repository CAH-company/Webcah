'use client';

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const uslugiItems = [
  { label: "Aplikacje i systemy", href: "/uslugi/aplikacje-systemy" },
  { label: "Automatyzacja procesów", href: "/uslugi/automatyzacja-procesow" },
  { label: "AI tam, gdzie ma sens", href: "/uslugi/sztuczna-inteligencja" },
  { label: "Integracje i rozbudowa", href: "/uslugi/integracje" },
  { label: "Doradztwo", href: "/uslugi/doradztwo" },
  { label: "Szkolenia", href: "/uslugi/szkolenia" },
];

const obszaryItems = [
  { label: "Sprzedaż i marketing", href: "/obszary/sprzedaz-i-marketing" },
  { label: "Obsługa klienta", href: "/obszary/obsluga-klienta" },
  { label: "Administracja", href: "/obszary/administracja" },
  { label: "Rekrutacja i HR", href: "/obszary/rekrutacja-hr" },
  { label: "Dashboardy i dane", href: "/obszary/dashboardy-dane" },
  { label: "Nietypowe procesy", href: "/obszary/nietypowe-procesy" },
];

export const Navigation = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const openPopup = () => {
    setMobileMenuOpen(false);
    window.dispatchEvent(new CustomEvent('cah:open-popup'));
  };

  const handleDropdownEnter = (key: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenDropdown(key);
  };

  const handleDropdownLeave = () => {
    closeTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const isUslugiActive = pathname.startsWith('/uslugi');
  const isObszaryActive = pathname.startsWith('/obszary');

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 border-b border-white/5 ${
        scrolled ? 'bg-cah-bg/90 backdrop-blur-md py-3' : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="container mx-auto px-6 relative flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity z-50">
          <Image src="/Pah 2.svg" alt="PAH Logo" width={96} height={40} className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7 text-sm tracking-widest uppercase font-medium brand-font">

          {/* Usługi dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter('uslugi')}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className={`flex items-center gap-1.5 hover:text-cah-accent transition-colors cursor-pointer ${
                isUslugiActive ? 'text-cah-accent' : 'text-white'
              }`}
            >
              Usługi
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${openDropdown === 'uslugi' ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`absolute top-full left-0 mt-3 w-64 rounded-xl border border-white/10 py-2 transition-all duration-200 ${
                openDropdown === 'uslugi'
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
              style={{ background: '#0c0c0c', boxShadow: '0 20px 60px rgba(0,0,0,0.8)' }}
            >
              {uslugiItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-5 py-2.5 text-xs tracking-wider normal-case hover:text-cah-accent hover:bg-white/[0.03] transition-colors ${
                    pathname === item.href ? 'text-cah-accent' : 'text-white/60'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Obszary dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter('obszary')}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className={`flex items-center gap-1.5 hover:text-cah-accent transition-colors cursor-pointer ${
                isObszaryActive ? 'text-cah-accent' : 'text-white'
              }`}
            >
              Obszary
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${openDropdown === 'obszary' ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`absolute top-full left-0 mt-3 w-64 rounded-xl border border-white/10 py-2 transition-all duration-200 ${
                openDropdown === 'obszary'
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
              style={{ background: '#0c0c0c', boxShadow: '0 20px 60px rgba(0,0,0,0.8)' }}
            >
              {obszaryItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-5 py-2.5 text-xs tracking-wider normal-case hover:text-cah-accent hover:bg-white/[0.03] transition-colors ${
                    pathname === item.href ? 'text-cah-accent' : 'text-white/60'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <a href="/#o-nas" className="hover:text-cah-accent transition-colors text-white">
            O nas
          </a>

          <a href="/#realizacje" className="hover:text-cah-accent transition-colors text-white">
            Realizacje
          </a>

          <button
            onClick={openPopup}
            className="ml-2 bg-cah-accent text-black px-5 py-2.5 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors brand-font cursor-pointer"
          >
            Bezpłatna konsultacja
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-cah-bg/95 backdrop-blur-lg transition-all duration-300 flex flex-col items-center justify-center gap-4 overflow-y-auto py-20 ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Usługi accordion */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'uslugi' ? null : 'uslugi')}
              className={`text-xl tracking-widest uppercase font-medium brand-font flex items-center gap-2 transition-colors ${
                isUslugiActive ? 'text-cah-accent' : 'text-white hover:text-cah-accent'
              }`}
            >
              Usługi
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileExpanded === 'uslugi' ? 'rotate-180' : ''}`}
              />
            </button>
            <div className={`flex flex-col items-center gap-2 overflow-hidden transition-all duration-300 ${
              mobileExpanded === 'uslugi' ? 'max-h-96 mt-3 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              {uslugiItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm normal-case tracking-wider hover:text-cah-accent transition-colors ${
                    pathname === item.href ? 'text-cah-accent' : 'text-white/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Obszary accordion */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setMobileExpanded(mobileExpanded === 'obszary' ? null : 'obszary')}
              className={`text-xl tracking-widest uppercase font-medium brand-font flex items-center gap-2 transition-colors ${
                isObszaryActive ? 'text-cah-accent' : 'text-white hover:text-cah-accent'
              }`}
            >
              Obszary
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileExpanded === 'obszary' ? 'rotate-180' : ''}`}
              />
            </button>
            <div className={`flex flex-col items-center gap-2 overflow-hidden transition-all duration-300 ${
              mobileExpanded === 'obszary' ? 'max-h-96 mt-3 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              {obszaryItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm normal-case tracking-wider hover:text-cah-accent transition-colors ${
                    pathname === item.href ? 'text-cah-accent' : 'text-white/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <a
            href="/#o-nas"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl tracking-widest uppercase font-medium brand-font text-white hover:text-cah-accent transition-colors"
          >
            O nas
          </a>

          <a
            href="/#realizacje"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl tracking-widest uppercase font-medium brand-font text-white hover:text-cah-accent transition-colors"
          >
            Realizacje
          </a>

          <button
            onClick={openPopup}
            className="mt-4 bg-cah-accent text-black px-7 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors brand-font cursor-pointer"
          >
            Bezpłatna konsultacja
          </button>
        </div>
      </div>
    </nav>
  );
};
