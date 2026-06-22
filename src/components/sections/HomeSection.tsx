'use client';

import { ArrowRight, ChevronDown } from "lucide-react";

export const HomeSection = () => {
  const openPopup = () => {
    window.dispatchEvent(new CustomEvent('cah:open-popup'));
  };

  const scrollToProcess = () => {
    document.getElementById('jak-pracujemy')?.scrollIntoView({ behavior: 'smooth' });
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
            AUTOMATYZACJA I AI DLA MŚP
          </p>

          <h1
            className="text-[2.2rem] sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] font-bold leading-[1.05] tracking-tight mb-8 brand-font animate-fade-in-up"
            style={{ animationDelay: '120ms', animationFillMode: 'both' }}
          >
            Automatyzujemy<br />
            <span className="text-outline">firmy, które</span><br />
            chcą rosnąć.
          </h1>

          <p
            className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 animate-fade-in-up"
            style={{ animationDelay: '180ms', animationFillMode: 'both' }}
          >
            Budujemy systemy i rozwiązania AI dla firm. Sprawdzamy gdzie tracisz czas i pieniądze, a potem wdrażamy konkretne rozwiązania.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2 mb-14 animate-fade-in-up"
            style={{ animationDelay: '240ms', animationFillMode: 'both' }}
          >
            <button
              onClick={openPopup}
              className="group flex items-center gap-4 bg-cah-accent text-black px-7 py-4 text-base font-bold hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(78,213,205,0.35)] hover:shadow-[0_0_50px_rgba(78,213,205,0.5)] brand-font shrink-0 cursor-pointer"
            >
              Umów bezpłatną konsultację
              <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            <button
              onClick={scrollToProcess}
              className="group flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium brand-font transition-colors cursor-pointer"
            >
              Jak pracujemy
              <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div
            className="flex flex-wrap gap-8 md:gap-12 animate-fade-in-up"
            style={{ animationDelay: '360ms', animationFillMode: 'both' }}
          >
            <div>
              <p className="text-2xl md:text-3xl font-bold brand-font text-white">100%</p>
              <p className="text-white/30 text-xs uppercase tracking-widest brand-font">zadowolonych klientów</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold brand-font text-cah-accent">Cała Polska</p>
              <p className="text-white/30 text-xs uppercase tracking-widest brand-font">zasięg działania</p>
            </div>
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
