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
                Architektura Procesów Biznesowych
              </h3>
              <p className="text-white/60 max-w-md">
                Projektujemy i wdrażamy ekosystemy automatyzacji. 
                Integrujemy rozproszone środowiska IT, eliminując manualną obsługę danych i optymalizując przepływy pracy wewnątrz organizacji.
                Zapewniamy pełną spójność danych między systemami bez ingerencji użytkownika.
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <span className="text-xs border border-white/20 rounded-full px-3 py-1">
                n8n
              </span>
              <span className="text-xs border border-white/20 rounded-full px-3 py-1">
                Google AppScripts
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
                Systemy CRM i Ekosystemy IT
              </h3>
              <Zap className="opacity-50" size={32} />
            </div>
            <p className="opacity-80 font-medium leading-relaxed mb-6">
              Specjalizujemy się w pełnym wdrożeniu i konfiguracji systemów CRM oraz ich integracji z dotychczasową infrastrukturą IT. 
              Projektujemy cyfrowe centra obiegu informacji w oparciu o Google Drive, Slack i inne narzędzia do zarządzania zadaniami. 
              Zapewniamy płynną wymianę dokumentacji oraz prowadzimy kompleksowe szkolenia pracowników z obsługi wdrożonych rozwiązań.
            </p>
          </div>
          <ul className="space-y-4 font-mono text-sm opacity-80 border-t border-black/20 pt-6">
            <li className="flex items-center gap-2 font-bold">
              <CheckCircle size={16} /> Google Drive
            </li>
            <li className="flex items-center gap-2 font-bold">
              <CheckCircle size={16} /> Pipedrive
            </li>
            <li className="flex items-center gap-2 font-bold">
              <CheckCircle size={16} /> i wiele innych
            </li>
          </ul>
        </div>

        <div className="bg-cah-bg-card border border-white/10 p-8 rounded-3xl hover-card group flex flex-col justify-between">
          <Box style={{ color: accentColor }} size={40} className="mb-4" />
          <div>
            <h3 className="text-2xl font-bold mb-2 brand-font">
              Systemy AI i Analityka Operacyjna
            </h3>
            <p className="text-white/60 text-sm">
             Wdrażamy zaawansowane systemy AI do automatycznego podsumowywania spotkań biznesowych oraz głębokiej analityki kampanii reklamowych i działań cold mailingowych. 
             Budujemy narzędzia analizujące dane bezpośrednio z CRM, które dostarczają precyzyjnych informacji o efektywności sprzedaży i rentowności procesów. 
             Dzięki integracji AI z danymi operacyjnymi, zamieniamy chaotyczne informacje w czytelne dashboardy wspierające trafne decyzje biznesowe.
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
              Wdrażamy systemy, które automatycznie generują i przesyłają oferty do klientów, wyjaśniając im proces ich powstawania i budując ekspercki wizerunek Twojej firmy.
              Wykorzystujemy AI do inteligentnego odpowiadania na wiadomości oraz projektujemy bezobsługowe sekwencje follow-up, które dbają o ciągłość kontaktu. 
              Rozwiązania te zapewniają pełną szczelność lejka sprzedażowego w CRM, eliminując błędy i znacząco przyspieszając finalizację transakcji.
            </p>
          </div>
        </div>

        <div className="md:col-span-2 bg-cah-bg-card border border-white/10 p-8 rounded-3xl hover-card flex items-center justify-between group">
          <div className="max-w-lg">
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-3 brand-font">
              <Database style={{ color: accentColor }} size={24} /> Doradztwo i Audyt Technologiczny
            </h3>
            <p className="text-white/60 text-sm">
              Przeprowadzamy kompleksowy audyt procesów biznesowych, precyzyjnie identyfikując „wąskie gardła” operacyjne oraz obszary o najwyższym potencjale zwrotu z inwestycji. 
              Na tej podstawie dostarczamy mapę drogową wdrożeń z priorytetami dopasowanymi do budżetu i skali Twojego przedsiębiorstwa.
              Doradzamy w doborze optymalnych narzędzi oraz prowadzimy warsztaty dla zespołów, przygotowując kadrę do efektywnej pracy w zautomatyzowanym środowisku wspieranym przez AI.
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
          <h3 className="text-xl font-bold mb-1 brand-font">Automatyzacje Operacyjne</h3>
          <p className="text-white/40 text-xs">Projektujemy dedykowane formularze i inteligentne arkusze, które automatyzują obieg informacji i znacząco usprawniają codzienne operacje w Twojej firmie.</p>
        </div>
      </div>
    </div>
  </section>
);

