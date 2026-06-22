'use client';

import { ArrowRight } from "lucide-react";

type CTASectionProps = {
  accentColor: string;
};

export const CTASection = ({ accentColor }: CTASectionProps) => {
  const openPopup = () => {
    window.dispatchEvent(new CustomEvent('cah:open-popup'));
  };

  return (
    <section className="pt-20 pb-20 md:pt-40 md:pb-32 px-6">
      <div className="container mx-auto max-w-4xl text-center relative">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: accentColor, opacity: 0.04, filter: 'blur(150px)' }}
        />

        <div className="relative z-10">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6 brand-font font-bold"
            style={{ color: accentColor }}
          >
            Kontakt
          </p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 brand-font">
            Porozmawiajmy o{" "}
            <span style={{ color: accentColor }}>Twojej firmie</span>
          </h2>
          <p className="text-xl text-white/60 max-w-xl mx-auto mb-10">
            Bezpłatna konsultacja, zero zobowiązań. Sprawdzimy, czy i jak możemy pomóc.
          </p>
          <button
            onClick={openPopup}
            className="group inline-flex items-center gap-4 text-black px-8 py-4 text-base font-bold hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(78,213,205,0.35)] hover:shadow-[0_0_60px_rgba(78,213,205,0.5)] brand-font cursor-pointer"
            style={{ backgroundColor: accentColor }}
          >
            Umów bezpłatną konsultację
            <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
          <p className="text-white/25 text-sm mt-6">
            Odpowiadamy w ciągu 24h.
          </p>
        </div>
      </div>
    </section>
  );
};
