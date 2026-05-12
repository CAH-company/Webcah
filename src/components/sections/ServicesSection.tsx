import { BarChart2, Shield, Zap } from "lucide-react";

type ServicesSectionProps = {
  accentColor: string;
};

export const ServicesSection = ({ accentColor }: ServicesSectionProps) => (
  <section className="pt-20 pb-16 md:pt-40 md:pb-24 px-6 bg-cah-bg animate-fade-in">
    <div className="container mx-auto">
      <div className="mb-16 border-b border-white/10 pb-8">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 brand-font">
          Nasze <span style={{ color: accentColor }}>Usługi</span>
        </h2>
        <p className="text-xl text-white/60 max-w-2xl">
          Robimy trzy rzeczy. Każda może być osobną usługą lub częścią większej współpracy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* A — Audyt */}
        <div className="bg-cah-bg-card border border-white/10 p-8 rounded-3xl hover-card flex flex-col group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-100 transition-opacity duration-500" style={{ color: accentColor }}>
            <BarChart2 size={120} />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <p className="text-xs uppercase tracking-[0.25em] font-bold mb-6 brand-font" style={{ color: accentColor }}>
              USŁUGA A
            </p>
            <h3 className="text-2xl font-bold mb-4 brand-font leading-tight">
              Audyt Technologiczny<br />i Mapa Drogowa
            </h3>
            <p className="text-white/55 text-sm leading-relaxed mb-6 flex-1">
              Wchodzimy do firmy i prześwietlamy ją od środka. Wywiady z zespołem, mapa
              procesów, audyt każdego narzędzia i analiza gotowości na AI. Dostajesz konkretny
              raport — ile tracisz i co zmienić w jakiej kolejności. Nie 200 stron, których nikt
              nie przeczyta.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Audyt narzędzi", "Mapa procesów", "AI Readiness", "Quick Wins"].map((tag) => (
                <span key={tag} className="text-xs border border-white/20 rounded-full px-3 py-1 text-white/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* B — Quick Wins */}
        <div
          className="p-8 rounded-3xl hover-card flex flex-col relative overflow-hidden"
          style={{ backgroundColor: accentColor }}
        >
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Zap size={120} className="text-black" />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <p className="text-xs uppercase tracking-[0.25em] font-bold mb-6 brand-font text-black/50">
              USŁUGA B
            </p>
            <h3 className="text-2xl font-bold mb-4 brand-font text-black leading-tight">
              Wdrożenie Quick Wins<br />+ Szkolenie z AI
            </h3>
            <p className="text-black/70 text-sm leading-relaxed mb-6 flex-1">
              Nie tylko mówimy co zmienić — robimy to. Konsolidujemy narzędzia, ustawiamy
              automatyzacje, budujemy proste rozwiązania wewnętrzne. Plus szkolimy zespół jak
              używać AI w codziennej pracy — konkretnie, pod Waszą branżę. Nie "AI for
              beginners".
            </p>
            <div className="flex flex-wrap gap-2">
              {["Automatyzacje", "Migracje", "Szkolenie AI", "Quick Wins"].map((tag) => (
                <span key={tag} className="text-xs border border-black/20 rounded-full px-3 py-1 text-black/60">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* C — Partner */}
        <div className="bg-cah-bg-card border border-white/10 p-8 rounded-3xl hover-card flex flex-col group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-100 transition-opacity duration-500" style={{ color: accentColor }}>
            <Shield size={120} />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <p className="text-xs uppercase tracking-[0.25em] font-bold mb-6 brand-font" style={{ color: accentColor }}>
              USŁUGA C
            </p>
            <h3 className="text-2xl font-bold mb-4 brand-font leading-tight">
              Partner Technologiczny<br />
              <span className="text-white/40 font-normal text-xl">(Fractional CTO)</span>
            </h3>
            <p className="text-white/55 text-sm leading-relaxed mb-6 flex-1">
              Twój dział IT, bez zatrudniania działu IT. Stały nadzór nad kosztami,
              wdrożenia z roadmapy, szkolenia i wsparcie na Slacku. Co miesiąc raport
              co zrobiliśmy i co planujemy — żebyś widział wartość w liczbach.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Stały nadzór", "Optymalizacja kosztów", "Slack/mail", "Raporty"].map((tag) => (
                <span key={tag} className="text-xs border border-white/20 rounded-full px-3 py-1 text-white/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);
