'use client';

import { ArrowRight } from "lucide-react";

export function ServiceCTAButtonClient() {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent('cah:open-popup'))}
      className="group inline-flex items-center gap-4 bg-cah-accent text-black px-8 py-4 text-base font-bold hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(78,213,205,0.35)] brand-font cursor-pointer"
    >
      Umów bezpłatną konsultację
      <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
    </button>
  );
}
