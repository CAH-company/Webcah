import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { services } from "@/data/services";
import { ServiceCTAButtonClient } from "./cta-button";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Poland Automations Hub`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const accent = "#4ed5cd";

  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden" style={{ background: "#0a0a0a" }}>
      <div className="noise-bg" />

      {/* Hero */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden">
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-10%", left: "-20%", width: "70vw", height: "70vw",
            maxWidth: 800, maxHeight: 800, borderRadius: "50%",
            background: accent, opacity: 0.07, filter: "blur(200px)",
          }}
        />

        <div className="container mx-auto max-w-5xl relative z-10">
          <Link
            href="/#uslugi"
            className="group inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase brand-font hover:text-white transition-colors mb-12 block"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            Usługi
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold brand-font leading-[1.05] mb-6">
            {service.headline}
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Dla kogo */}
      <section className="px-6 py-16 md:py-24" style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] font-bold mb-8 brand-font" style={{ color: accent }}>
            Dla kogo to jest
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.forWhom.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <CheckCircle size={18} style={{ color: accent }} className="shrink-0 mt-0.5" />
                <p className="text-white/60 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proces */}
      <section className="px-6 py-16 md:py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] font-bold mb-12 brand-font" style={{ color: accent }}>
            Jak to wygląda w praktyce
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl group hover-card"
                style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span
                  className="text-3xl font-bold brand-font block mb-4 opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ color: accent }}
                >
                  {step.step}
                </span>
                <h3 className="text-lg font-bold brand-font text-white mb-2">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      {service.caseStudyTitle && (
        <section className="px-6 py-16 md:py-24" style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="container mx-auto max-w-5xl">
            <p className="text-xs uppercase tracking-[0.3em] font-bold mb-8 brand-font" style={{ color: accent }}>
              Realizacja
            </p>

            <div
              className="rounded-3xl p-8 md:p-10"
              style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <h3 className="text-xl md:text-2xl font-bold brand-font text-white mb-6">
                {service.caseStudyTitle}
              </h3>

              {service.caseStudyMetrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.caseStudyMetrics.map((metric) => (
                    <div
                      key={metric}
                      className="px-5 py-4 rounded-xl text-center"
                      style={{ background: `${accent}08`, border: `1px solid ${accent}20` }}
                    >
                      <p className="text-sm font-bold brand-font" style={{ color: accent }}>
                        {metric}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {service.caseStudySlug && (
                <Link
                  href={`/realizacje/${service.caseStudySlug}`}
                  className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-widest font-bold brand-font hover:text-white transition-colors"
                  style={{ color: accent }}
                >
                  Czytaj case study
                  <ArrowRight size={12} />
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 py-16 md:py-24 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold brand-font mb-6">
            Chcesz porozmawiać o{" "}
            <span style={{ color: accent }}>tym rozwiązaniu</span>?
          </h2>
          <p className="text-white/60 text-xl mb-8">
            Bezpłatna konsultacja, zero zobowiązań.
          </p>
          <ServiceCTAButton />
          <p className="text-white/20 text-sm mt-6">
            Odpowiadamy w ciągu 24h.
          </p>
        </div>
      </section>
    </div>
  );
}

function ServiceCTAButton() {
  return <ServiceCTAButtonClient />;
}
