import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: study.projectName,
    description: study.teaser,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const accent = "#4ed5cd";
  const others = caseStudies.filter((c) => c.slug !== slug);

  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden" style={{ background: "#0a0a0a" }}>
      <div className="noise-bg" />

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-6 overflow-hidden">

        {/* Large ambient glow — stronger than before */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-10%",
            left: "-20%",
            width: "90vw",
            height: "90vw",
            maxWidth: 1000,
            maxHeight: 1000,
            borderRadius: "50%",
            background: accent,
            opacity: 0.09,
            filter: "blur(200px)",
          }}
        />
        {/* Secondary glow top-right */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "0%",
            right: "-10%",
            width: "40vw",
            height: "40vw",
            maxWidth: 500,
            maxHeight: 500,
            borderRadius: "50%",
            background: accent,
            opacity: 0.04,
            filter: "blur(140px)",
          }}
        />

        <div className="container mx-auto max-w-6xl relative z-10">

          {/* ← Realizacje — at very top */}
          <Link
            href="/#realizacje"
            className="group inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase brand-font hover:text-white transition-colors mb-16 block"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            Realizacje
          </Link>

          {/* Company name — gradient, reasonable size */}
          <h1
            className="font-bold brand-font leading-[1.0] mb-4"
            style={{
              fontSize: "clamp(2rem, 7vw, 6.5rem)",
              letterSpacing: "-0.03em",
              background: "linear-gradient(150deg, #ffffff 0%, #4ed5cd 55%, #1fa99f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {study.client}
          </h1>

          {/* Project name */}
          <p
            className="text-lg md:text-2xl font-medium brand-font"
            style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "-0.01em" }}
          >
            {study.projectName}
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section
        className="px-6 pt-12 pb-16 md:pt-20 md:pb-24"
        style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="container mx-auto max-w-6xl">

          {/* About the client */}
          <div className="mb-20 max-w-3xl">
            <p
              className="text-xs uppercase tracking-[0.3em] font-bold mb-6 brand-font"
              style={{ color: accent }}
            >
              O kliencie
            </p>
            <p className="text-white/60 text-lg leading-[1.85]">
              {study.about}
            </p>
          </div>

          <div className="h-px mb-20" style={{ background: "rgba(255,255,255,0.06)" }} />

          {/* Wyzwanie + Rozwiązanie */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mb-20">
            <div>
              <p
                className="text-xs uppercase tracking-[0.3em] font-bold mb-8 brand-font"
                style={{ color: accent }}
              >
                01 / Wyzwanie
              </p>
              <p className="text-white/60 text-lg leading-[1.85]">
                {study.challenge}
              </p>
            </div>
            <div>
              <p
                className="text-xs uppercase tracking-[0.3em] font-bold mb-8 brand-font"
                style={{ color: accent }}
              >
                02 / Rozwiązanie
              </p>
              <p className="text-white/60 text-lg leading-[1.85]">
                {study.solution}
              </p>
            </div>
          </div>

          <div className="h-px mb-20" style={{ background: "rgba(255,255,255,0.06)" }} />

          {/* Efekty */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.3em] font-bold mb-12 brand-font"
              style={{ color: accent }}
            >
              03 / Efekty
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.results.map((r, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-6 p-7 rounded-2xl"
                  style={{ background: "#0c0c0c", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span
                    className="text-3xl font-bold brand-font leading-none flex-shrink-0 tabular-nums mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{ color: accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white/65 leading-relaxed pt-1">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER PROJECTS — always both remaining ── */}
      <section
        className="px-6 pb-16 md:pb-24"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="container mx-auto max-w-6xl pt-12">
          <p
            className="text-xs uppercase tracking-[0.3em] brand-font mb-8"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Inne projekty
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/realizacje/${item.slug}`}
                className="hover-card group p-8 rounded-3xl border border-white/[0.07] flex flex-col gap-2"
                style={{ background: "#0c0c0c" }}
              >
                <p
                  className="text-xs uppercase tracking-widest brand-font mb-1 flex items-center gap-2"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  {item.industry}
                  <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                </p>
                <p className="font-bold text-xl brand-font text-white group-hover:text-cah-accent transition-colors leading-snug">
                  {item.projectName}
                </p>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {item.client}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
