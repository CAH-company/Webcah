import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Cpu, Zap, Box, TrendingUp, Globe, Mail, 
  ChevronRight, Database, Code, Users, Linkedin, CheckCircle, Phone, Building2
} from 'lucide-react';

const CAHWebsite = () => {
  const [activePage, setActivePage] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Kolor akcentu z briefu
  const accentColor = "#4ed5cd"; 

  // Efekt scrolla tylko dla zmiany tła nawigacji
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  // --- KOMPONENTY WIDOKÓW ---

  const HomeView = () => (
    <>
      {/* Hero Section */}
      <header className="relative pt-32 pb-40 px-6 min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#4ed5cd] rounded-full filter blur-[150px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white rounded-full filter blur-[120px] opacity-5"></div>

        <div className="container mx-auto relative z-10 flex-grow flex flex-col justify-center">
          <div className="max-w-5xl">
            <p style={{ color: accentColor }} className="tracking-[0.3em] uppercase mb-6 animate-fade-in-up text-sm md:text-base font-bold brand-font">
              Automatyzacja procesów biznesowych
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8 brand-font">
              ZMIENIAMY <br />
              <span className="text-outline">CHAOS</span> W <br />
              PRECYZJĘ
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mt-12 mb-12">
              <button 
                onClick={() => navigateTo('contact')}
                style={{ backgroundColor: accentColor }}
                className="group flex items-center gap-4 text-black px-8 py-4 text-lg font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(78,213,205,0.3)] brand-font"
              >
                UMÓW KONSULTACJĘ
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="max-w-xs text-white/60 text-sm leading-relaxed border-l border-white/20 pl-4">
                Projektujemy dedykowane systemy automatyzacji. Zyskaj czas, zredukuj koszty, wyprzedź konkurencję.
              </p>
            </div>
          </div>
        </div>

        {/* Scrolling Marquee - WERSJA TŁA (Back to Background) */}
        {/* Zmieniono z-index na 0, zmniejszono opacity, usunięto tło, dodano pointer-events-none */}
        <div className="absolute bottom-10 left-0 w-full overflow-hidden whitespace-nowrap border-y border-white/5 py-4 z-0 pointer-events-none opacity-20">
          <div className="inline-block animate-[marquee_40s_linear_infinite] brand-font text-xl md:text-4xl text-transparent stroke-text font-bold">
            AUTOMATION • ARTIFICIAL INTELLIGENCE • DATA SCIENCE • CRACOW AUTOMATIONS HUB • INNOVATION • SPEED • 
            AUTOMATION • ARTIFICIAL INTELLIGENCE • DATA SCIENCE • CRACOW AUTOMATIONS HUB • INNOVATION • SPEED •
          </div>
        </div>
      </header>
    </>
  );

  const ServicesView = () => (
    <section className="pt-40 pb-24 px-6 bg-[#0a0a0a] min-h-screen animate-fade-in">
      <div className="container mx-auto">
        <div className="mb-16 border-b border-white/10 pb-8">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 brand-font">Nasze <span style={{ color: accentColor }}>Usługi</span></h2>
          <p className="text-xl text-white/60 max-w-2xl">
            Kompleksowe podejście do technologii. Od audytu, przez wdrożenie, aż po utrzymanie systemów.
          </p>
        </div>

        {/* Bento Grid 6 kafelek */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          
          {/* 1. RPA (Duża) */}
          <div className="md:col-span-2 bg-[#111] border border-white/10 p-8 rounded-3xl hover-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-500 text-[#4ed5cd]">
              <Cpu size={140} />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-4 brand-font">Automatyzacja RPA</h3>
                <p className="text-white/60 max-w-md">
                  Robotic Process Automation. Tworzymy cyfrowych pracowników, którzy przejmują powtarzalne zadania: fakturowanie, raportowanie, wprowadzanie danych.
                </p>
              </div>
              <div className="flex gap-2 mt-4">
                 <span className="text-xs border border-white/20 rounded-full px-3 py-1">UiPath</span>
                 <span className="text-xs border border-white/20 rounded-full px-3 py-1">Python</span>
              </div>
            </div>
          </div>

          {/* 2. AI & ML (Wysoka - akcent) */}
          <div style={{ backgroundColor: accentColor }} className="md:col-span-1 md:row-span-2 text-black p-8 rounded-3xl hover-card flex flex-col justify-between group">
            <div>
              <div className="w-full flex justify-between items-start mb-8">
                <h3 className="text-3xl font-bold brand-font">AI & <br/>Machine Learning</h3>
                <Zap className="opacity-50" size={32} />
              </div>
              <p className="opacity-80 font-medium leading-relaxed mb-6">
                Wdrażamy modele językowe (LLM) i systemy wizyjne do Twojej firmy. Automatyczna obsługa klienta, analiza dokumentów i predykcja sprzedaży.
              </p>
            </div>
            <ul className="space-y-4 font-mono text-sm opacity-80 border-t border-black/20 pt-6">
              <li className="flex items-center gap-2 font-bold"><CheckCircle size={16}/> NLP & Chatboty</li>
              <li className="flex items-center gap-2 font-bold"><CheckCircle size={16}/> Computer Vision</li>
              <li className="flex items-center gap-2 font-bold"><CheckCircle size={16}/> Systemy Rekomendacji</li>
            </ul>
          </div>

          {/* 3. Integracje API */}
          <div className="bg-[#111] border border-white/10 p-8 rounded-3xl hover-card group flex flex-col justify-between">
            <Box style={{ color: accentColor }} size={40} className="mb-4" />
            <div>
              <h3 className="text-2xl font-bold mb-2 brand-font">Integracje Systemowe</h3>
              <p className="text-white/60 text-sm">Łączymy CRM, ERP i E-commerce w jeden organizm. Koniec z ręcznym przepisywaniem danych między systemami.</p>
            </div>
          </div>

          {/* 4. Analityka */}
          <div className="bg-[#111] border border-white/10 p-8 rounded-3xl hover-card group flex flex-col justify-between">
            <TrendingUp style={{ color: accentColor }} size={40} className="mb-4" />
            <div>
              <h3 className="text-2xl font-bold mb-2 brand-font">Business Intelligence</h3>
              <p className="text-white/60 text-sm">Dashboardy w PowerBI i Tableau. Zamieniamy suche dane w decyzje biznesowe w czasie rzeczywistym.</p>
            </div>
          </div>

          {/* 5. Audyt Procesów (Szeroka na dole) */}
          <div className="md:col-span-2 bg-[#111] border border-white/10 p-8 rounded-3xl hover-card flex items-center justify-between group">
             <div className="max-w-lg">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-3 brand-font">
                  <Database style={{ color: accentColor }} size={24}/> Audyt & Konsulting
                </h3>
                <p className="text-white/60 text-sm">Nie wiesz co zautomatyzować? Przeprowadzimy pełny audyt procesów w Twojej firmie i wskażemy obszary o najwyższym zwrocie z inwestycji (ROI).</p>
             </div>
             <div className="hidden md:block bg-white/5 p-4 rounded-full">
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
             </div>
          </div>

          {/* 6. Low-Code / Web (Wypełniacz) */}
          <div className="bg-[#151515] border border-white/5 p-8 rounded-3xl hover-card flex flex-col justify-center items-center text-center group">
             <Code className="mb-4 opacity-50 group-hover:text-[#4ed5cd] group-hover:opacity-100 transition-all" size={48} />
             <h3 className="text-xl font-bold mb-1 brand-font">Low-Code Apps</h3>
             <p className="text-white/40 text-xs">Szybkie aplikacje wewnętrzne.</p>
          </div>

        </div>
      </div>
    </section>
  );

  const AboutView = () => (
    <section className="pt-40 pb-24 px-6 bg-[#0a0a0a] min-h-screen animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-16 items-center mb-24">
           <div>
             <h4 style={{ color: accentColor }} className="uppercase tracking-widest mb-4 font-bold brand-font">O nas</h4>
             <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight brand-font">
               Inżynierowie<br/>Twojego Spokoju.
             </h2>
             <p className="text-xl text-white/70 mb-8 font-light">
               CAH to hub technologiczny z Krakowa. Nie jesteśmy typowym software housem. Jesteśmy partnerem, który rozumie biznes. Wierzymy, że ludzki potencjał jest zbyt cenny, by marnować go na "kopiuj-wklej".
             </p>
             <div className="flex gap-8">
                <div>
                   <span style={{ color: accentColor }} className="text-5xl font-bold brand-font">50+</span>
                   <p className="text-sm uppercase tracking-wider opacity-60 mt-2">Zrealizowanych<br/>Projektów</p>
                </div>
                <div>
                   <span style={{ color: accentColor }} className="text-5xl font-bold brand-font">300%</span>
                   <p className="text-sm uppercase tracking-wider opacity-60 mt-2">Średnie<br/>ROI Klienta</p>
                </div>
             </div>
           </div>
           
           <div className="relative w-full aspect-square md:aspect-auto md:h-full min-h-[400px] border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center bg-[#111]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-overlay"></div>
              <div className="relative z-10 text-center p-8">
                 {/* Placeholder LOGO */}
                 <div className="w-48 h-48 mx-auto border-2 border-white/10 flex items-center justify-center rounded-lg bg-black/50 mb-4">
                     <span className="text-xs text-white/50">TU WSTAW LOGO</span>
                 </div>
                 <span className="tracking-[0.5em] text-sm uppercase opacity-70 brand-font">Cracow HQ</span>
              </div>
           </div>
        </div>

        {/* TEAM SECTION */}
        <h3 className="text-3xl font-bold mb-12 border-l-4 pl-6 brand-font" style={{ borderColor: accentColor }}>Zarząd CAH</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* CEO Card */}
            <div className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden group hover:border-[#4ed5cd] transition-colors">
               <div className="h-80 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" alt="CEO" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-32"></div>
               </div>
               <div className="p-8 relative">
                  <div className="absolute -top-8 right-8 bg-[#4ed5cd] p-3 rounded-full text-black">
                     <Linkedin size={20} />
                  </div>
                  <h4 className="text-2xl font-bold text-white brand-font">Jan Kowalski</h4>
                  <p style={{ color: accentColor }} className="font-mono text-sm uppercase tracking-widest mb-4">Chief Executive Officer</p>
                  <p className="text-white/50 text-sm leading-relaxed">
                     Wizjoner z 10-letnim doświadczeniem w branży automatyzacji. Wcześniej zarządzał procesami w korporacjach Fortune 500. W CAH odpowiada za strategię i rozwój partnerstw.
                  </p>
               </div>
            </div>

            {/* CTO Card */}
            <div className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden group hover:border-[#4ed5cd] transition-colors">
               <div className="h-80 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" alt="CTO" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-32"></div>
               </div>
               <div className="p-8 relative">
                  <div className="absolute -top-8 right-8 bg-[#4ed5cd] p-3 rounded-full text-black">
                     <Linkedin size={20} />
                  </div>
                  <h4 className="text-2xl font-bold text-white brand-font">Anna Nowak</h4>
                  <p style={{ color: accentColor }} className="font-mono text-sm uppercase tracking-widest mb-4">Chief Technology Officer</p>
                  <p className="text-white/50 text-sm leading-relaxed">
                     Architekt systemów AI. Specjalizuje się w Pythonie i architekturze chmurowej. Dba o to, by rozwiązania CAH były nie tylko skuteczne, ale i bezpieczne.
                  </p>
               </div>
            </div>

        </div>
      </div>
    </section>
  );

  const ContactView = () => (
     <section className="pt-40 pb-24 px-6 bg-[#0a0a0a] min-h-screen flex items-center animate-fade-in">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div>
              <p style={{ color: accentColor }} className="tracking-widest uppercase mb-4 font-bold brand-font">Kontakt</p>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 brand-font">Zacznijmy<br/>Współpracę</h2>
              <p className="text-white/60 text-lg mb-12 max-w-md">
                 Opisz swój proces lub problem. Oddzwonimy w ciągu 24h z wstępną analizą i wyceną.
              </p>
              
              <div className="space-y-6">
                 <div className="flex items-center gap-4 text-xl group">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#4ed5cd] group-hover:bg-[#4ed5cd] group-hover:text-black transition-all">
                       <Mail size={20} />
                    </div>
                    hello@cah.pl
                 </div>
                 <div className="flex items-center gap-4 text-xl group">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#4ed5cd] group-hover:bg-[#4ed5cd] group-hover:text-black transition-all">
                       <Globe size={20} />
                    </div>
                    Kraków, Polska
                 </div>
                 <div className="flex items-center gap-4 text-xl group">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#4ed5cd] group-hover:bg-[#4ed5cd] group-hover:text-black transition-all">
                       <Linkedin size={20} />
                    </div>
                    /cracow-automations-hub
                 </div>
              </div>
           </div>

           <form className="bg-[#111] p-8 md:p-12 rounded-3xl border border-white/10 space-y-6 shadow-2xl">
              <div>
                 <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-bold brand-font">Imię i Nazwisko</label>
                 <input type="text" className="w-full bg-black border-b border-white/20 p-4 text-white focus:border-[#4ed5cd] focus:outline-none transition-colors" placeholder="Jan Kowalski" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-bold flex items-center gap-2 brand-font"><Phone size={14}/> Telefon</label>
                    <input type="tel" className="w-full bg-black border-b border-white/20 p-4 text-white focus:border-[#4ed5cd] focus:outline-none transition-colors" placeholder="+48 000 000 000" />
                 </div>
                 <div>
                    <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-bold flex items-center gap-2 brand-font"><Mail size={14}/> Email</label>
                    <input type="email" className="w-full bg-black border-b border-white/20 p-4 text-white focus:border-[#4ed5cd] focus:outline-none transition-colors" placeholder="jan@firma.pl" />
                 </div>
              </div>

              <div>
                 <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-bold flex items-center gap-2 brand-font"><Building2 size={14}/> Nazwa Firmy</label>
                 <input type="text" className="w-full bg-black border-b border-white/20 p-4 text-white focus:border-[#4ed5cd] focus:outline-none transition-colors" placeholder="Twoja Firma Sp. z o.o." />
              </div>

              <div>
                 <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-bold brand-font">W czym możemy pomóc?</label>
                 <textarea rows="4" className="w-full bg-black border-b border-white/20 p-4 text-white focus:border-[#4ed5cd] focus:outline-none transition-colors resize-none" placeholder="Opisz krótko swój proces..."></textarea>
              </div>
              
              <button style={{ backgroundColor: accentColor }} className="w-full py-4 text-black font-bold uppercase tracking-widest hover:bg-white transition-colors mt-4 flex justify-center items-center gap-2 group brand-font">
                 Wyślij Zgłoszenie <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
              </button>
           </form>
        </div>
     </section>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#4ed5cd] selection:text-black overflow-x-hidden">
      {/* Style globalne */}
      <style>{`
        /* Importujemy Questrial jako fallback dla Avant Garde */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Questrial&display=swap');
        
        body { font-family: 'Inter', sans-serif; background-color: #0a0a0a; }
        
        /* TUTAJ ZMIANA CZCIONKI:
           Próbujemy użyć "ITC Avant Garde Gothic Pro" jeśli jest dostępna.
           Jeśli nie, system użyje darmowej "Questrial" (jest bardzo podobna).
           Żeby "ITC Avant Garde" działało, musisz mieć wykupioną licencję i podpięty plik @font-face.
        */
        h1, h2, h3, h4, .brand-font { 
           font-family: 'ITC Avant Garde Gothic Pro', 'Questrial', sans-serif; 
        }

        .noise-bg {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 50; opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .stroke-text {
            -webkit-text-stroke: 1px #4ed5cd;
            color: transparent;
        }

        .text-outline { -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2); color: transparent; }
        .hover-card { transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s ease; }
        .hover-card:hover { transform: translateY(-5px); border-color: #4ed5cd; }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeInUp 0.5s ease-out forwards; }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #4ed5cd; }
      `}</style>

      <div className="noise-bg"></div>

      {/* --- NAWIGACJA --- */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 border-b border-white/5 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md py-4' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="container mx-auto px-6 relative flex justify-between items-center">
          
          {/* LOGO AREA - Po lewej */}
          <div 
            onClick={() => navigateTo('home')} 
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

          {/* Menu - WYŚRODKOWANE ABSOLUTNIE */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8 text-xs md:text-sm tracking-widest uppercase font-medium brand-font">
            <button onClick={() => navigateTo('services')} className={`hover:text-[#4ed5cd] transition-colors ${activePage === 'services' ? 'text-[#4ed5cd]' : ''}`}>Usługi</button>
            <button onClick={() => navigateTo('about')} className={`hover:text-[#4ed5cd] transition-colors ${activePage === 'about' ? 'text-[#4ed5cd]' : ''}`}>O nas</button>
            <button onClick={() => navigateTo('contact')} className={`hover:text-[#4ed5cd] transition-colors ${activePage === 'contact' ? 'text-[#4ed5cd]' : ''}`}>Kontakt</button>
          </div>
          
          {/* Pusta przestrzeń po prawej dla balansu lub opcjonalne ikony w przyszłości */}
          <div className="hidden md:block w-20"></div>

          {/* Wersja mobilna - proste linki po prawej, jeśli ekran jest za mały na środek */}
          <div className="md:hidden flex gap-4 text-xs tracking-widest uppercase font-medium brand-font">
             <button onClick={() => navigateTo('contact')} style={{ color: accentColor }}>Menu</button>
          </div>

        </div>
      </nav>

      {/* --- RENDEROWANIE TREŚCI --- */}
      <main className="min-h-screen">
        {activePage === 'home' && <HomeView />}
        {activePage === 'services' && <ServicesView />}
        {activePage === 'about' && <AboutView />}
        {activePage === 'contact' && <ContactView />}
      </main>

      {/* --- FOOTER (Zawsze widoczny) --- */}
      <footer className="bg-[#050505] py-12 px-6 border-t border-white/10 text-white/60 text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex flex-col md:items-start items-center">
              {/* Footer Logo Placeholder */}
              <div className="h-8 w-20 bg-white/10 border border-white/20 flex items-center justify-center rounded text-[8px] text-white/50 tracking-widest mb-2">
                  [LOGO IMG]
               </div>
              <span>Cracow Automations Hub</span>
           </div>
           <div className="flex gap-8">
              <button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Home</button>
              <button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">Kontakt</button>
              <button onClick={() => navigateTo('privacy')} className="hover:text-white transition-colors">Prywatność</button>
           </div>
           <div className="opacity-40">
              © 2025 CAH.
           </div>
        </div>
      </footer>
    </div>
  );
};

export default CAHWebsite;s