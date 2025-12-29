'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export const Navigation = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 border-b border-white/5 ${
        scrolled
          ? "bg-cah-bg/90 backdrop-blur-md py-4"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="container mx-auto px-6 relative flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-4 md:gap-6 cursor-pointer hover:opacity-80 transition-opacity z-10"
        >
          <div className="h-8 md:h-10 w-auto flex items-center justify-center">
            <div className="h-full w-20 md:w-24 bg-white/10 border border-white/20 flex items-center justify-center rounded text-[8px] md:text-[10px] text-white/50 tracking-widest">
            <Image 
              src="/logo2.png" 
              alt="CAH Logo" 
              width={96} 
              height={40} 
              className="h-full w-auto"
            />
            </div>
          </div>
          <span className="hidden lg:block text-sm font-normal tracking-widest opacity-60 border-l border-white/20 pl-6 brand-font">
            CRACOW AUTOMATIONS HUB
          </span>
        </Link>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8 text-xs md:text-sm tracking-widest uppercase font-medium brand-font">
          <Link
            href="/uslugi"
            className={`hover:text-cah-accent transition-colors ${
              pathname === "/uslugi" ? "text-cah-accent" : ""
            }`}
          >
            Usługi
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

        <div className="hidden md:block w-20" />

        <div className="md:hidden flex gap-4 text-xs tracking-widest uppercase font-medium brand-font">
          <Link href="/kontakt" className="text-cah-accent">
            Menu
          </Link>
        </div>
      </div>
    </nav>
  );
};
