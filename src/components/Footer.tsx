import type { PageKey } from "./Navigation";

type FooterProps = {
  onNavigate: (page: PageKey) => void;
};

export const Footer = ({ onNavigate }: FooterProps) => (
  <footer className="bg-[#050505] py-12 px-6 border-t border-white/10 text-white/60 text-sm">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col md:items-start items-center">
        <div className="h-8 w-20 bg-white/10 border border-white/20 flex items-center justify-center rounded text-[8px] text-white/50 tracking-widest mb-2">
          [LOGO IMG]
        </div>
        <span>Cracow Automations Hub</span>
      </div>
      <div className="flex gap-8">
        <button
          onClick={() => onNavigate("home")}
          className="hover:text-white transition-colors"
        >
          Home
        </button>
        <button
          onClick={() => onNavigate("contact")}
          className="hover:text-white transition-colors"
        >
          Kontakt
        </button>
        <button className="hover:text-white transition-colors">Prywatność</button>
      </div>
      <div className="opacity-40">© 2025 CAH.</div>
    </div>
  </footer>
);

