'use client';

import { ArrowRight } from "lucide-react";

export const HomeSection = () => {
  const openPopup = () => {
    window.dispatchEvent(new CustomEvent('cah:open-popup'));
  };

  return (
    <header className="relative pt-32 pb-40 px-6 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cah-accent rounded-full filter blur-[180px] opacity-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-[-100px] w-[500px] h-[500px] bg-white rounded-full filter blur-[160px] opacity-[0.03] animate-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-cah-accent rounded-full filter blur-[220px] opacity-[0.03]" />

      <div className="container mx-auto relative z-10 flex-grow flex flex-col justify-center">
        <div className="max-w-5xl">

          <p
            className="text-cah-accent tracking-[0.3em] uppercase mb-6 text-sm md:text-base font-bold brand-font animate-fade-in-up"
            style={{ animationDelay: '0ms', animationFillMode: 'both' }}
          >
            CONSULTING IT DLA POLSKICH MŚP
          </p>

          <h1
            className="text-[2.2rem] sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] font-bold leading-[1.05] tracking-tight mb-8 brand-font animate-fade-in-up"
            style={{ animationDelay: '120ms', animationFillMode: 'both' }}
          >
            Automatyzacja<br />
            <span className="text-outline">i AI dla firm,</span><br />
            które chcą rosnąć.
          </h1>

          <div
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mt-10 mb-10 animate-fade-in-up"
            style={{ animationDelay: '240ms', animationFillMode: 'both' }}
          >
            <button
              onClick={openPopup}
              className="group flex items-center gap-4 bg-cah-accent text-black px-7 py-4 text-base font-bold hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(78,213,205,0.35)] hover:shadow-[0_0_50px_rgba(78,213,205,0.5)] brand-font shrink-0 cursor-pointer"
            >
              UMÓW SIĘ NA ROZMOWĘ
              <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            <p className="max-w-xs text-white/50 text-sm leading-relaxed border-l border-white/15 pl-4">
              Wchodzimy do firm z sektora MŚP, mapujemy procesy i narzędzia, liczymy ile tracisz i mówimy wprost, co z tym zrobić.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full overflow-hidden whitespace-nowrap border-y border-white/5 py-4 z-0 pointer-events-none opacity-20">
        <div className="inline-block animate-[marquee_40s_linear_infinite] brand-font text-xl md:text-4xl text-transparent stroke-text font-bold">
          AUTOMATION • ARTIFICIAL INTELLIGENCE • DATA SCIENCE • POLAND AUTOMATIONS
          HUB • INNOVATION • SPEED • AUTOMATION • ARTIFICIAL INTELLIGENCE • DATA
          SCIENCE • POLAND AUTOMATIONS HUB • INNOVATION • SPEED •
        </div>
      </div>
    </header>
  );
};
