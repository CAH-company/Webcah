import { BarChart2, Shield, Zap } from "lucide-react";

type ServicesSectionProps = {
  accentColor: string;
};

export const ServicesSection = ({ accentColor }: ServicesSectionProps) => (
  <section className="pt-20 pb-16 md:pt-40 md:pb-24 px-6">
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
        <div className="bg-cah-bg-card border border-white/10 p-8 rounded-3xl hover-card card-shimmer flex flex-col group relative overflow-hidden">
          <div
            className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              color: accentColor,
              maskImage: 'linear-gradient(225deg, black 35%, transparent 68%)',
              WebkitMaskImage: 'linear-gradient(225deg, black 35%, transparent 68%)',
            }}
          >
            <BarChart2 size={120} />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-4 brand-font leading-tight">
              Audyt Technologiczny<br />i Mapa Drogowa
            </h3>
            <p className="text-white/55 text-sm leading-relaxed mb-6 flex-1">
              Wchodzimy do firmy i mapujemy ją od podstaw. Wywiady z zespołem, przegląd każdego narzędzia i analiza gotowości na AI. Efekt: konkretny raport z liczbami i listą działań w kolejności priorytetów.
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
          className="p-8 rounded-3xl hover-card card-shimmer flex flex-col relative overflow-hidden"
          style={{ backgroundColor: accentColor }}
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <Zap size={120} className="text-black" />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-4 brand-font text-black leading-tight">
              Wdrożenie Quick Wins<br />+ Szkolenie z AI
            </h3>
            <p className="text-black/70 text-sm leading-relaxed mb-6 flex-1">
              Konsolidujemy narzędzia, wdrażamy automatyzacje i budujemy rozwiązania dopasowane do Waszego biznesu. Szkolimy też zespół z AI pod Waszą branżę, nie z teorii, a z praktycznego zastosowania w codziennej pracy.
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
        <div className="bg-cah-bg-card border border-white/10 p-8 rounded-3xl hover-card card-shimmer flex flex-col group relative overflow-hidden">
          <div
            className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              color: accentColor,
              maskImage: 'linear-gradient(225deg, black 35%, transparent 68%)',
              WebkitMaskImage: 'linear-gradient(225deg, black 35%, transparent 68%)',
            }}
          >
            <Shield size={120} />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-4 brand-font leading-tight">
              Partner Technologiczny
            </h3>
            <p className="text-white/55 text-sm leading-relaxed mb-6 flex-1">
              Twój dział IT, bez zatrudniania działu IT. Stały nadzór nad kosztami, wdrożenia z roadmapy i wsparcie na bieżąco. Co miesiąc raport z tym, co zrobiliśmy i co planujemy, żebyś zawsze wiedział, na co idą Twoje pieniądze.
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
