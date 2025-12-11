export type PageKey = "home" | "services" | "about" | "contact";

type NavigationProps = {
  activePage: PageKey;
  scrolled: boolean;
  accentColor: string;
  onNavigate: (page: PageKey) => void;
};

export const Navigation = ({
  activePage,
  scrolled,
  accentColor,
  onNavigate,
}: NavigationProps) => (
  <nav
    className={`fixed top-0 w-full z-40 transition-all duration-300 border-b border-white/5 ${
      scrolled
        ? "bg-[#0a0a0a]/90 backdrop-blur-md py-4"
        : "bg-transparent py-6 md:py-8"
    }`}
  >
    <div className="container mx-auto px-6 relative flex justify-between items-center">
      <div
        onClick={() => onNavigate("home")}
        className="flex items-center gap-4 md:gap-6 cursor-pointer hover:opacity-80 transition-opacity z-10"
      >
        <div className="h-8 md:h-10 w-auto flex items-center justify-center">
          <div className="h-full w-20 md:w-24 bg-white/10 border border-white/20 flex items-center justify-center rounded text-[8px] md:text-[10px] text-white/50 tracking-widest">
            [LOGO IMG]
          </div>
        </div>
        <span className="hidden lg:block text-sm font-normal tracking-widest opacity-60 border-l border-white/20 pl-6 brand-font">
          CRACOW AUTOMATIONS HUB
        </span>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8 text-xs md:text-sm tracking-widest uppercase font-medium brand-font">
        <button
          onClick={() => onNavigate("services")}
          className={`hover:text-[#4ed5cd] transition-colors ${
            activePage === "services" ? "text-[#4ed5cd]" : ""
          }`}
        >
          Usługi
        </button>
        <button
          onClick={() => onNavigate("about")}
          className={`hover:text-[#4ed5cd] transition-colors ${
            activePage === "about" ? "text-[#4ed5cd]" : ""
          }`}
        >
          O nas
        </button>
        <button
          onClick={() => onNavigate("contact")}
          className={`hover:text-[#4ed5cd] transition-colors ${
            activePage === "contact" ? "text-[#4ed5cd]" : ""
          }`}
        >
          Kontakt
        </button>
      </div>

      <div className="hidden md:block w-20" />

      <div className="md:hidden flex gap-4 text-xs tracking-widest uppercase font-medium brand-font">
        <button onClick={() => onNavigate("contact")} style={{ color: accentColor }}>
          Menu
        </button>
      </div>
    </div>
  </nav>
);
