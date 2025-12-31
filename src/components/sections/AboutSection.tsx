import Image from "next/image";
import { Linkedin } from "lucide-react";

type AboutSectionProps = {
  accentColor: string;
};

export const AboutSection = ({ accentColor }: AboutSectionProps) => (
  <section className="pt-40 pb-24 px-6 bg-cah-bg min-h-screen animate-fade-in">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h4
            style={{ color: accentColor }}
            className="uppercase tracking-widest mb-4 font-bold brand-font"
          >
            O nas
          </h4>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight brand-font">
            Technologia w służbie strategii,
            <br />
            nie odwrotnie
          </h2>
          <p className="text-xl text-white/70 mb-8 font-light">
            W Cracow Automations Hub wierzymy, że czas to najcenniejszy zasób nowoczesnego przedsiębiorstwa. 
            Naszą misją jest uwolnienie Twojego zespołu od czsaochłonnych, powtarzalnych i zbędnych zadań. Dzięki n8n budujemy elastyczne, skalowalne i bezpieczne integracje, 
            które pozwalają liderom skupić się na tym, co kluczowe: kreatywności i wzroście.
          </p>
          <div className="flex gap-8">
            <div>
              <span
                style={{ color: accentColor }}
                className="text-5xl font-bold brand-font"
              >
                3000+
              </span>
              <p className="text-sm uppercase tracking-wider opacity-60 mt-2">
                Zaoszczędzonych godzin 
                <br />
                rocznie u naszych klientów
              </p>
            </div>
            <div>
              <span
                style={{ color: accentColor }}
                className="text-5xl font-bold brand-font"
              >
                100%
              </span>
              <p className="text-sm uppercase tracking-wider opacity-60 mt-2">
                Skalowalności wdrożonych
                <br />
                rozwiązań
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-square md:aspect-auto md:h-full min-h-[400px] border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center bg-cah-bg-card">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-overlay" />
          <div className="relative z-10 text-center p-8">
          <div className="w-48 h-48 mx-auto border-2 border-white/10 flex items-center justify-center rounded-lg bg-black/50 mb-4 p-8">
              <Image 
                src="/logo1.svg" 
                alt="CAH Logo" 
                width={192} 
                height={192} 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="tracking-[0.5em] text-sm uppercase opacity-70 brand-font">
              Cracow HQ
            </span>
          </div>
        </div>
      </div>

      <h3
        className="text-3xl font-bold mb-12 border-l-4 pl-6 brand-font"
        style={{ borderColor: accentColor }}
      >
        Zespoł CAH
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-cah-bg-card border border-white/10 rounded-3xl overflow-hidden group hover:border-cah-accent transition-colors">
          <div className="h-80 overflow-hidden relative">
            <Image
              src="/img_maro.jpg"
              alt="Marek Łazarski-CEO"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-32" />
          </div>
          <div className="p-8 relative">
            <a
              href="https://www.linkedin.com/in/marek-lazarski"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -top-8 right-8 bg-cah-accent p-3 rounded-full text-black hover:bg-white transition-colors cursor-pointer group/icon"
              aria-label="LinkedIn profil Marek Łazarski"
            >
              <Linkedin size={20} className="group-hover/icon:scale-110 transition-transform" />
            </a>
            <h4 className="text-2xl font-bold text-white brand-font">
              Marek Łazarski
            </h4>
            <p
              style={{ color: accentColor }}
              className="font-mono text-sm uppercase tracking-widest mb-4"
            >
              Chief Executive Officer
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Wizjoner automatyzacji, który widzi potencjał tam, gdzie inni widzą tylko nudne procesy. 
              Marek to siła napędowa CAH – odpowiada za strategię, marketing i sprzedaż. 
              Jego rolą jest zrozumienie Twojego biznesu i pokazanie Ci, jak technologia może realnie zwiększyć Twoje zyski. 
              To on projektuje "duży obraz" zmian, które uwalniają Twój czas i skalują firmę.
            </p>
          </div>
        </div>

        <div className="bg-cah-bg-card border border-white/10 rounded-3xl overflow-hidden group hover:border-cah-accent transition-colors">
          <div className="h-80 overflow-hidden relative">
            <Image
              src="/img_michal.jpg"
              alt="Michał Grabczyński-CTO"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-32" />
          </div>
          <div className="p-8 relative">
            <a
              href="https://www.linkedin.com/in/Michal Grabczyński"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -top-8 right-8 bg-cah-accent p-3 rounded-full text-black hover:bg-white transition-colors cursor-pointer group/icon"
              aria-label="LinkedIn profil Michał Grabczyńśki"
            >
              <Linkedin size={20} className="group-hover/icon:scale-110 transition-transform" />
            </a>
            <h4 className="text-2xl font-bold text-white brand-font">
              Michał Grabczyński
            </h4>
            <p
              style={{ color: accentColor }}
              className="font-mono text-sm uppercase tracking-widest mb-4"
            >
              Chief Technology Officer
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Inżynierskie serce firmy. Pasjonat informatyki i elektroniki od najmłodszych lat, dla którego "nie da się" to tylko zaproszenie do znalezienia rozwiązania. 
              Michał bierze wizje na warsztat i przekuwa je w niezawodny kod oraz workflowy n8n. 
              To on dba o to, żeby pod maską wszystko grało, dane płynęły bez błędów, a AI faktycznie myślało za człowieka.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
