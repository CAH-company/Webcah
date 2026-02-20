'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export const Navigation = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Zamknij mobile menu przy zmianie ścieżki
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Blokuj scroll gdy menu jest otwarte
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 border-b border-white/5 ${
        scrolled
          ? "bg-cah-bg/90 backdrop-blur-md py-4"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="container mx-auto px-6 relative flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity z-50"
        >
          <div className="h-8 md:h-10 w-auto flex items-center justify-center">
            <div className="h-full w-20 md:w-24 flex items-center justify-center text-[8px] md:text-[10px] text-white/50 tracking-widest">
              <Image 
                src="/Pah 2.svg" 
                alt="CAH Logo" 
                width={96} 
                height={40} 
                style={{ color: 'transparent' }}
                className="block h-full w-auto"
              />
            </div>
          </div>
        </Link>

        {/* Desktop Menu - ukryte na mobilkach */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-sm tracking-widest uppercase font-medium brand-font">
          <Link
            href="/"
            className={`hover:text-cah-accent transition-colors ${
              pathname === "/" ? "text-cah-accent" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/uslugi"
            className={`hover:text-cah-accent transition-colors ${
              pathname === "/uslugi" ? "text-cah-accent" : ""
            }`}
          >
            Usługi
          </Link>
          <Link
            href="/case-studies"
            className={`hover:text-cah-accent transition-colors ${
              pathname.startsWith("/case-studies") ? "text-cah-accent" : ""
            }`}
          >
            Case Studies
          </Link>
          <Link
            href="/o-nas"
            className={`hover:text-cah-accent transition-colors ${
              pathname === "/o-nas" ? "text-cah-accent" : ""
            }`}
          >
            O nas
          </Link>
          <Link
            href="/kontakt"
            className={`hover:text-cah-accent transition-colors ${
              pathname === "/kontakt" ? "text-cah-accent" : ""
            }`}
          >
            Kontakt
          </Link>
        </div>

        {/* Hamburger Button - tylko na mobilkach */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-1.5" : "mb-1"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : "mb-1"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Mobile Menu - fullscreen overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-cah-bg/95 backdrop-blur-lg transition-all duration-300 ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl tracking-widest uppercase font-medium brand-font">
            <Link
              href="/"
              className={`hover:text-cah-accent transition-colors ${
                pathname === "/" ? "text-cah-accent" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/uslugi"
              className={`hover:text-cah-accent transition-colors ${
                pathname === "/uslugi" ? "text-cah-accent" : ""
              }`}
            >
              Usługi
            </Link>
            <Link
              href="/case-studies"
              className={`hover:text-cah-accent transition-colors ${
                pathname.startsWith("/case-studies") ? "text-cah-accent" : ""
              }`}
            >
              Case Studies
            </Link>
            <Link
              href="/o-nas"
              className={`hover:text-cah-accent transition-colors ${
                pathname === "/o-nas" ? "text-cah-accent" : ""
              }`}
            >
              O nas
            </Link>
            <Link
              href="/kontakt"
              className={`hover:text-cah-accent transition-colors ${
                pathname === "/kontakt" ? "text-cah-accent" : ""
              }`}
            >
              Kontakt
            </Link>
          </div>
        </div>

        {/* Spacer dla Desktop */}
        <div className="hidden md:block w-20" />
      </div>
    </nav>
  );
};