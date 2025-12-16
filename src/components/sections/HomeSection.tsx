import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HomeSection = () => (
  <header className="relative pt-32 pb-40 px-6 min-h-screen flex flex-col justify-center overflow-hidden">
    <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cah-accent rounded-full filter blur-[150px] opacity-10 animate-pulse" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white rounded-full filter blur-[120px] opacity-5" />

    <div className="container mx-auto relative z-10 flex-grow flex flex-col justify-center">
      <div className="max-w-5xl">
        <p className="text-cah-accent tracking-[0.3em] uppercase mb-6 animate-fade-in-up text-sm md:text-base font-bold brand-font">
          Automatyzacja procesów biznesowych
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8 brand-font">
          ZMIENIAMY <br />
          <span className="text-outline">CHAOS</span> W <br />
          PRECYZJĘ
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mt-12 mb-12">
          <Link
            href="/kontakt"
            className="group flex items-center gap-4 bg-cah-accent text-black px-8 py-4 text-lg font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(78,213,205,0.3)] brand-font"
          >
            UMÓW KONSULTACJĘ
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="max-w-xs text-white/60 text-sm leading-relaxed border-l border-white/20 pl-4">
            Projektujemy dedykowane systemy automatyzacji. Zyskaj czas, zredukuj
            koszty, wyprzedź konkurencję.
          </p>
        </div>
      </div>
    </div>

    <div className="absolute bottom-10 left-0 w-full overflow-hidden whitespace-nowrap border-y border-white/5 py-4 z-0 pointer-events-none opacity-20">
      <div className="inline-block animate-[marquee_40s_linear_infinite] brand-font text-xl md:text-4xl text-transparent stroke-text font-bold">
        AUTOMATION • ARTIFICIAL INTELLIGENCE • DATA SCIENCE • CRACOW AUTOMATIONS
        HUB • INNOVATION • SPEED • AUTOMATION • ARTIFICIAL INTELLIGENCE • DATA
        SCIENCE • CRACOW AUTOMATIONS HUB • INNOVATION • SPEED •
      </div>
    </div>
  </header>
);

