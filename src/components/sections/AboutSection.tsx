import Image from "next/image";
import { Linkedin } from "lucide-react";

type AboutSectionProps = {
  accentColor: string;
};

export const AboutSection = ({ accentColor }: AboutSectionProps) => (
  <section className="pt-40 pb-24 px-6 bg-[#0a0a0a] min-h-screen animate-fade-in">
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
            Inżynierowie
            <br />
            Twojego Spokoju.
          </h2>
          <p className="text-xl text-white/70 mb-8 font-light">
            CAH to hub technologiczny z Krakowa. Nie jesteśmy typowym software
            housem. Jesteśmy partnerem, który rozumie biznes. Wierzymy, że ludzki
            potencjał jest zbyt cenny, by marnować go na &quot;kopiuj-wklej&quot;.
          </p>
          <div className="flex gap-8">
            <div>
              <span
                style={{ color: accentColor }}
                className="text-5xl font-bold brand-font"
              >
                50+
              </span>
              <p className="text-sm uppercase tracking-wider opacity-60 mt-2">
                Zrealizowanych
                <br />
                Projektów
              </p>
            </div>
            <div>
              <span
                style={{ color: accentColor }}
                className="text-5xl font-bold brand-font"
              >
                300%
              </span>
              <p className="text-sm uppercase tracking-wider opacity-60 mt-2">
                Średnie
                <br />
                ROI Klienta
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-square md:aspect-auto md:h-full min-h-[400px] border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center bg-[#111]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-overlay" />
          <div className="relative z-10 text-center p-8">
            <div className="w-48 h-48 mx-auto border-2 border-white/10 flex items-center justify-center rounded-lg bg-black/50 mb-4">
              <span className="text-xs text-white/50">TU WSTAW LOGO</span>
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
        Zarząd CAH
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden group hover:border-[#4ed5cd] transition-colors">
          <div className="h-80 overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
              alt="CEO"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-32" />
          </div>
          <div className="p-8 relative">
            <div className="absolute -top-8 right-8 bg-[#4ed5cd] p-3 rounded-full text-black">
              <Linkedin size={20} />
            </div>
            <h4 className="text-2xl font-bold text-white brand-font">
              Jan Kowalski
            </h4>
            <p
              style={{ color: accentColor }}
              className="font-mono text-sm uppercase tracking-widest mb-4"
            >
              Chief Executive Officer
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Wizjoner z 10-letnim doświadczeniem w branży automatyzacji.
              Wcześniej zarządzał procesami w korporacjach Fortune 500. W CAH
              odpowiada za strategię i rozwój partnerstw.
            </p>
          </div>
        </div>

        <div className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden group hover:border-[#4ed5cd] transition-colors">
          <div className="h-80 overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
              alt="CTO"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-32" />
          </div>
          <div className="p-8 relative">
            <div className="absolute -top-8 right-8 bg-[#4ed5cd] p-3 rounded-full text-black">
              <Linkedin size={20} />
            </div>
            <h4 className="text-2xl font-bold text-white brand-font">
              Anna Nowak
            </h4>
            <p
              style={{ color: accentColor }}
              className="font-mono text-sm uppercase tracking-widest mb-4"
            >
              Chief Technology Officer
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Architekt systemów AI. Specjalizuje się w Pythonie i architekturze
              chmurowej. Dba o to, by rozwiązania CAH były nie tylko skuteczne,
              ale i bezpieczne.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
