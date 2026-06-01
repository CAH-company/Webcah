import Image from "next/image";
import { Linkedin } from "lucide-react";

type AboutSectionProps = {
  accentColor: string;
};

export const AboutSection = ({ accentColor }: AboutSectionProps) => (
  <section className="pt-20 pb-20 md:pt-40 md:pb-32 px-6">
    <div className="container mx-auto max-w-6xl">

      {/* ── INTRO ROW ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start mb-28">

        {/* Left — text */}
        <div>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6 brand-font font-bold"
            style={{ color: accentColor }}
          >
            O nas
          </p>
          <h2
            className="font-bold brand-font leading-[1.0] mb-10"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              letterSpacing: "-0.025em",
            }}
          >
            Biznes{" "}
            przed{" "}
            <span style={{ color: accentColor }}>technologią</span>
          </h2>
          <p className="text-white/55 text-lg leading-[1.85] max-w-lg">
            Poland Automations Hub to dwuosobowy team z Krakowa. Działamy na
            styku biznesu i technologii: wchodzimy do firm MŚP, mapujemy procesy
            i mówimy wprost, co z tym zrobić. Nie mamy umów z żadnym dostawcą
            narzędzi, więc rekomendujemy to, co realnie działa dla Twojego biznesu,
            nawet jeśli to darmowe rozwiązanie. Każdy projekt prowadzimy sami,
            od audytu po wdrożenie.
          </p>
        </div>

        {/* Right — visual panel */}
        <div className="relative min-h-[320px] md:min-h-[520px] rounded-3xl overflow-hidden border border-white/[0.07] transition-all duration-500 hover:border-cah-accent/30 hover:scale-[1.015] hover:shadow-[0_0_60px_rgba(78,213,205,0.08)] panel-reveal">
          {/* Background photo */}
          <div
            className="absolute inset-0 bg-cover bg-center grayscale"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')",
              opacity: 0.25,
            }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.85) 100%)",
            }}
          />
          {/* Decorative corner accent */}
          <div
            className="absolute top-0 left-0 w-32 h-32 rounded-full blur-[60px] pointer-events-none"
            style={{ background: accentColor, opacity: 0.08 }}
          />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
            <div
              className="w-28 h-28 flex items-center justify-center rounded-2xl mb-6 p-6"
              style={{
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Image
                src="/Pah 2.svg"
                alt="PAH Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className="text-xs tracking-[0.5em] uppercase brand-font"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Poland HQ
            </span>

            {/* Decorative bottom info strip */}
            <div
              className="absolute bottom-0 left-0 right-0 px-8 py-5"
              style={{
                background: "rgba(0,0,0,0.4)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest brand-font mb-1"
                style={{ color: accentColor }}
              >
                Poland Automations Hub
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Automatyzacja · AI · Integracje systemowe
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── TEAM SECTION ── */}
      <div
        className="pt-16"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-end justify-between mb-12">
          <h3
            className="text-3xl md:text-4xl font-bold brand-font"
            style={{ letterSpacing: "-0.02em" }}
          >
            Zespół{" "}
            <span style={{ color: accentColor }}>PAH</span>
          </h3>
          <p
            className="text-xs uppercase tracking-widest brand-font hidden md:block"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            2 osoby
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Marek */}
          <div
            className="group rounded-3xl overflow-hidden border border-white/[0.07] transition-all duration-500 hover:border-cah-accent/40 hover-card card-shimmer"
            style={{ background: "#0c0c0c" }}
          >
            <div className="relative h-56 md:h-80 overflow-hidden">
              <Image
                src="/img_maro.jpg"
                alt="Marek Łazarski"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
            </div>

            <div className="p-8 relative">
              <a
                href="https://www.linkedin.com/in/marek-lazarski"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-6 right-8 w-12 h-12 rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
                style={{ background: accentColor }}
                aria-label="LinkedIn — Marek Łazarski"
              >
                <Linkedin size={18} />
              </a>
              <h4 className="text-2xl font-bold brand-font text-white mb-1">
                Marek Łazarski
              </h4>
              <p
                className="text-xs uppercase tracking-widest brand-font mb-5"
                style={{ color: accentColor }}
              >
                Chief Executive Officer
              </p>
              <p className="text-white/45 text-sm leading-relaxed">
                Rozumie Twój biznes, procesy sprzedażowe i strategię.
                Mówi językiem właściciela firmy, nie językiem kodu.
                Na każdym etapie współpracy Marek jest pierwszym punktem kontaktu —
                i dba o to, żebyś widział wartość w konkretnych liczbach.
              </p>
            </div>
          </div>

          {/* Michał */}
          <div
            className="group rounded-3xl overflow-hidden border border-white/[0.07] transition-all duration-500 hover:border-cah-accent/40 hover-card card-shimmer"
            style={{ background: "#0c0c0c" }}
          >
            <div className="relative h-56 md:h-80 overflow-hidden">
              <Image
                src="/img_michal.jpg"
                alt="Michał Grabczyński"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
            </div>

            <div className="p-8 relative">
              <a
                href="https://www.linkedin.com/in/michal-grabczynski"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-6 right-8 w-12 h-12 rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
                style={{ background: accentColor }}
                aria-label="LinkedIn — Michał Grabczyński"
              >
                <Linkedin size={18} />
              </a>
              <h4 className="text-2xl font-bold brand-font text-white mb-1">
                Michał Grabczyński
              </h4>
              <p
                className="text-xs uppercase tracking-widest brand-font mb-5"
                style={{ color: accentColor }}
              >
                Chief Technology Officer
              </p>
              <p className="text-white/45 text-sm leading-relaxed">
                Zna technologię od podszewki — wie jak zbudować, skonfigurować
                i zintegrować systemy. Wie co jest hype'em, a co realnie działa.
                Michał przekuwa wymagania biznesowe w działające automatyzacje
                i dba o to, żeby wdrożenia były proste, bezpieczne i trwałe.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);
