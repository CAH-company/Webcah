import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { areas } from "@/data/areas";
import { AreaCTAButtonClient } from "./cta-button";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `${area.title} | Poland Automations Hub`,
    description: area.subtitle,
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) notFound();

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
            href="/"
            className="group inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase brand-font hover:text-white transition-colors mb-12 block"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            Strona główna
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold brand-font leading-[1.05] mb-6">
            {area.headline}
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            {area.subtitle}
          </p>
        </div>
      </section>

      {/* Problemy */}
      <section className="px-6 py-16 md:py-24" style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] font-bold mb-10 brand-font" style={{ color: accent }}>
            Jakie problemy rozwiązujemy
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {area.problems.map((problem) => (
              <div
                key={problem.title}
                className="p-6 rounded-2xl hover-card"
                style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <h3 className="text-lg font-bold brand-font text-white mb-2">{problem.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co robimy */}
      <section className="px-6 py-16 md:py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] font-bold mb-10 brand-font" style={{ color: accent }}>
            Co konkretnie robimy
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {area.offerings.map((offering) => (
              <div
                key={offering}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <CheckCircle size={18} style={{ color: accent }} className="shrink-0 mt-0.5" />
                <p className="text-white/60 text-sm leading-relaxed">{offering}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      {area.caseStudyTitle && (
        <section className="px-6 py-16 md:py-24" style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="container mx-auto max-w-5xl">
            <p className="text-xs uppercase tracking-[0.3em] font-bold mb-8 brand-font" style={{ color: accent }}>
              Przykładowe wdrożenie
            </p>

            <div
              className="rounded-3xl p-8 md:p-10"
              style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <h3 className="text-xl md:text-2xl font-bold brand-font text-white mb-4">
                {area.caseStudyTitle}
              </h3>
              {area.caseStudyDescription && (
                <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-2xl">
                  {area.caseStudyDescription}
                </p>
              )}

              {area.caseStudyMetrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {area.caseStudyMetrics.map((metric) => (
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
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 py-16 md:py-24 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold brand-font mb-6">
            Chcesz to{" "}
            <span style={{ color: accent }}>zautomatyzować</span>?
          </h2>
          <p className="text-white/60 text-xl mb-8">
            Umów bezpłatną konsultację. Zero zobowiązań.
          </p>
          <AreaCTAButton />
          <p className="text-white/20 text-sm mt-6">
            Bezpłatna konsultacja nie jest ofertą sprzedażową. Odpowiadamy w ciągu 24h.
          </p>
        </div>
      </section>
    </div>
  );
}

function AreaCTAButton() {
  return <AreaCTAButtonClient />;
}
