import Link from "next/link";
import { ArrowRight, Monitor, Cog, Brain, Link2, Compass, GraduationCap } from "lucide-react";

type ServicesSectionProps = {
  accentColor: string;
};

const services = [
  {
    slug: "aplikacje-systemy",
    title: "Aplikacje i systemy",
    description: "Zamieniamy Excele i maile na dedykowane systemy, które działają za Ciebie.",
    Icon: Monitor,
  },
  {
    slug: "automatyzacja-procesow",
    title: "Automatyzacja procesów",
    description: "Identyfikujemy powtarzalne zadania i automatyzujemy je. Szybko i z mierzalnym efektem.",
    Icon: Cog,
  },
  {
    slug: "sztuczna-inteligencja",
    title: "AI tam, gdzie ma sens",
    description: "Szukamy miejsc, gdzie AI realnie oszczędza czas i pieniądze. Bez buzzwordów.",
    Icon: Brain,
  },
  {
    slug: "integracje",
    title: "Integracje i rozbudowa",
    description: "Łączymy systemy, które nie gadają ze sobą. CRM, ERP, faktury, wszystko w jednym przepływie.",
    Icon: Link2,
  },
  {
    slug: "doradztwo",
    title: "Doradztwo",
    description: "Audyt, mapa drogowa, kosztorys. Mówimy od czego zacząć i ile to będzie kosztować.",
    Icon: Compass,
  },
  {
    slug: "szkolenia",
    title: "Szkolenia",
    description: "Praktyczne warsztaty z AI i automatyzacji dopasowane do Twojej branży i zespołu.",
    Icon: GraduationCap,
  },
];

export const ServicesSection = ({ accentColor }: ServicesSectionProps) => (
  <section className="pt-20 pb-16 md:pt-40 md:pb-24 px-6">
    <div className="container mx-auto">
      <div className="mb-16 border-b border-white/10 pb-8">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-6 brand-font font-bold"
          style={{ color: accentColor }}
        >
          Co robimy
        </p>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 brand-font">
          Nasze <span style={{ color: accentColor }}>Usługi</span>
        </h2>
        <p className="text-xl text-white/60 max-w-2xl">
          Robimy sześć rzeczy. Każda może być osobną usługą lub częścią większej współpracy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/uslugi/${service.slug}`}
            className="group bg-cah-bg-card border border-white/[0.07] p-8 rounded-3xl hover-card card-shimmer flex flex-col relative overflow-hidden"
          >
            <div
              className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                color: accentColor,
                maskImage: 'linear-gradient(225deg, black 35%, transparent 68%)',
                WebkitMaskImage: 'linear-gradient(225deg, black 35%, transparent 68%)',
              }}
            >
              <service.Icon size={100} />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}25` }}
              >
                <service.Icon size={22} style={{ color: accentColor }} />
              </div>
              <h3 className="text-xl font-bold mb-3 brand-font leading-tight group-hover:text-cah-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <div className="flex items-center gap-2" style={{ color: accentColor }}>
                <span className="text-xs uppercase tracking-widest font-bold brand-font">
                  Dowiedz się więcej
                </span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
