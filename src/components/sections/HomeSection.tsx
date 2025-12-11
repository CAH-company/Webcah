import { ArrowRight } from "lucide-react";
import type { PageKey } from "../Navigation";

type HomeSectionProps = {
  accentColor: string;
  onNavigate: (page: PageKey) => void;
};

export const HomeSection = ({ accentColor, onNavigate }: HomeSectionProps) => (
  <header className="relative pt-32 pb-40 px-6 min-h-screen flex flex-col justify-center overflow-hidden">
    <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#4ed5cd] rounded-full filter blur-[150px] opacity-10 animate-pulse" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white rounded-full filter blur-[120px] opacity-5" />

    <div className="container mx-auto relative z-10 flex-grow flex flex-col justify-center">
      <div className="max-w-5xl">
        <p
          style={{ color: accentColor }}
          className="tracking-[0.3em] uppercase mb-6 animate-fade-in-up text-sm md:text-base font-bold brand-font"
        >
          Automatyzacja procesów biznesowych
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8 brand-font">
          ZMIENIAMY <br />
          <span className="text-outline">CHAOS</span> W <br />
          PRECYZJĘ
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mt-12 mb-12">
          <button
            onClick={() => onNavigate("contact")}
            style={{ backgroundColor: accentColor }}
            className="group flex items-center gap-4 text-black px-8 py-4 text-lg font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(78,213,205,0.3)] brand-font"
          >
            UMÓW KONSULTACJĘ
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
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

