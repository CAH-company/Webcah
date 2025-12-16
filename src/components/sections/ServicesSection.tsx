import {
  ArrowRight,
  Box,
  CheckCircle,
  Code,
  Cpu,
  Database,
  TrendingUp,
  Zap,
} from "lucide-react";

type ServicesSectionProps = {
  accentColor: string;
};

export const ServicesSection = ({ accentColor }: ServicesSectionProps) => (
  <section className="pt-40 pb-24 px-6 bg-cah-bg min-h-screen animate-fade-in">
    <div className="container mx-auto">
      <div className="mb-16 border-b border-white/10 pb-8">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 brand-font">
          Nasze <span style={{ color: accentColor }}>Usługi</span>
        </h2>
        <p className="text-xl text-white/60 max-w-2xl">
          Kompleksowe podejście do technologii. Od audytu, przez wdrożenie, aż po
          utrzymanie systemów.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
        <div className="md:col-span-2 bg-cah-bg-card border border-white/10 p-8 rounded-3xl hover-card relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-500 text-cah-accent">
            <Cpu size={140} />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-4 brand-font">
                Automatyzacje
              </h3>
              <p className="text-white/60 max-w-md">
                Robotic Process Automation. Tworzymy cyfrowych pracowników, którzy
                przejmują powtarzalne zadania: fakturowanie, raportowanie,
                wprowadzanie danych.
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <span className="text-xs border border-white/20 rounded-full px-3 py-1">
                UiPath
              </span>
              <span className="text-xs border border-white/20 rounded-full px-3 py-1">
                Python
              </span>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundColor: accentColor }}
          className="md:col-span-1 md:row-span-2 text-black p-8 rounded-3xl hover-card flex flex-col justify-between group"
        >
          <div>
            <div className="w-full flex justify-between items-start mb-8">
              <h3 className="text-3xl font-bold brand-font">
                AI & <br />
                Wdrożenia CRM
              </h3>
              <Zap className="opacity-50" size={32} />
            </div>
            <p className="opacity-80 font-medium leading-relaxed mb-6">
              Wdrażamy, optymalizujemy i automatyzujemy systemy CRM.
              Sprawiamy, że Twój zespół sprzedaży może wreszcie skupić się
              na zamykaniu transakcji, a nie na wprowadzaniu danych
            </p>
          </div>
          <ul className="space-y-4 font-mono text-sm opacity-80 border-t border-black/20 pt-6">
            <li className="flex items-center gap-2 font-bold">
              <CheckCircle size={16} /> NLP & Chatboty
            </li>
            <li className="flex items-center gap-2 font-bold">
              <CheckCircle size={16} /> Computer Vision
            </li>
            <li className="flex items-center gap-2 font-bold">
              <CheckCircle size={16} /> Systemy Rekomendacji
            </li>
          </ul>
        </div>

        <div className="bg-cah-bg-card border border-white/10 p-8 rounded-3xl hover-card group flex flex-col justify-between">
          <Box style={{ color: accentColor }} size={40} className="mb-4" />
          <div>
            <h3 className="text-2xl font-bold mb-2 brand-font">
              Integracje Systemowe
            </h3>
            <p className="text-white/60 text-sm">
              Łączymy CRM, ERP i E-commerce w jeden organizm. Koniec z ręcznym
              przepisywaniem danych między systemami.
            </p>
          </div>
        </div>

        <div className="bg-cah-bg-card border border-white/10 p-8 rounded-3xl hover-card group flex flex-col justify-between">
          <TrendingUp style={{ color: accentColor }} size={40} className="mb-4" />
          <div>
            <h3 className="text-2xl font-bold mb-2 brand-font">
              Consulting Technologiczny
            </h3>
            <p className="text-white/60 text-sm">
              Dashboardy w PowerBI i Tableau. Zamieniamy suche dane w decyzje
              biznesowe w czasie rzeczywistym.
            </p>
          </div>
        </div>

        <div className="md:col-span-2 bg-cah-bg-card border border-white/10 p-8 rounded-3xl hover-card flex items-center justify-between group">
          <div className="max-w-lg">
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-3 brand-font">
              <Database style={{ color: accentColor }} size={24} /> Audyt & Konsulting
            </h3>
            <p className="text-white/60 text-sm">
              Nie wiesz co zautomatyzować? Przeprowadzimy pełny audyt procesów w
              Twojej firmie i wskażemy obszary o najwyższym zwrocie z inwestycji
              (ROI).
            </p>
          </div>
          <div className="hidden md:block bg-white/5 p-4 rounded-full">
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div className="bg-[#151515] border border-white/5 p-8 rounded-3xl hover-card flex flex-col justify-center items-center text-center group">
          <Code
            className="mb-4 opacity-50 group-hover:text-cah-accent group-hover:opacity-100 transition-all"
            size={48}
          />
          <h3 className="text-xl font-bold mb-1 brand-font">Low-Code Apps</h3>
          <p className="text-white/40 text-xs">Szybkie aplikacje wewnętrzne.</p>
        </div>
      </div>
    </div>
  </section>
);

