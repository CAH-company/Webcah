import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

type RealizacjeSectionProps = {
  accentColor: string;
};

export const RealizacjeSection = ({ accentColor }: RealizacjeSectionProps) => (
  <section className="pt-20 pb-16 md:pt-40 md:pb-24 px-6">
    <div className="container mx-auto">

      {/* Header */}
      <div className="mb-16">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-5 brand-font"
          style={{ color: accentColor }}
        >
          Case Studies
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-white/10 pb-10">
          <h2 className="text-5xl md:text-7xl font-bold brand-font">
            Nasze{" "}
            <span style={{ color: accentColor }}>Realizacje</span>
          </h2>
          <p className="text-white/35 max-w-xs text-sm leading-relaxed">
            Prawdziwe projekty, mierzalne efekty dla firm z różnych branż.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {caseStudies.map((c, i) => (
          <Link
            key={c.slug}
            href={`/realizacje/${c.slug}`}
            className="hover-card group relative overflow-hidden rounded-3xl flex flex-col min-h-[460px] p-8 border border-white/[0.07]"
            style={{ background: "#0c0c0c" }}
          >
            {/* Ambient corner glow on hover */}
            <div
              className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ background: accentColor }}
            />

            {/* Top row: industry + index */}
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: accentColor }}
                />
                <span
                  className="text-xs tracking-widest uppercase brand-font"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {c.industry}
                </span>
              </div>
              <span
                className="text-xs brand-font font-bold tabular-nums"
                style={{ color: "rgba(255,255,255,0.15)" }}
              >
                0{i + 1}
              </span>
            </div>

            {/* Client name */}
            <div className="mt-10 mb-6 relative z-10">
              <p
                className="text-xs uppercase tracking-[0.25em] mb-2 brand-font"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                Klient
              </p>
              <p
                className="text-2xl font-bold brand-font leading-snug"
                style={{ color: accentColor }}
              >
                {c.client}
              </p>
            </div>

            {/* Project name + teaser */}
            <h3 className="text-xl font-bold brand-font text-white mb-3 leading-snug relative z-10">
              {c.projectName}
            </h3>
            <p
              className="text-sm leading-relaxed relative z-10 flex-1"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              {c.teaser}
            </p>

            {/* Footer */}
            <div
              className="flex items-center justify-between mt-8 pt-5 relative z-10"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="text-[11px] uppercase tracking-widest font-bold brand-font"
                style={{ color: accentColor }}
              >
                Czytaj więcej
              </span>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  border: "1px solid rgba(78,213,205,0.35)",
                  color: accentColor,
                }}
              >
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
