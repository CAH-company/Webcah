import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export const CaseStudiesSection = () => (
  <section className="pt-40 pb-24 px-6 bg-cah-bg min-h-screen animate-fade-in">
    <div className="container mx-auto">
      <div className="mb-16 border-b border-white/10 pb-8">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 brand-font">
          Case <span className="text-cah-accent">Studies</span>
        </h2>
        <p className="text-xl text-white/60 max-w-2xl">
          Poznaj nasze realizacje. Każde wdrożenie to unikalne podejście
          dopasowane do potrzeb klienta.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((cs) => (
          <Link
            key={cs.slug}
            href={`/case-studies/${cs.slug}`}
            className="group relative bg-cah-bg-card border border-white/10 rounded-3xl overflow-hidden hover-card"
          >
            <div
              className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              style={{ background: `linear-gradient(135deg, ${cs.bgColor} 0%, transparent 60%)` }}
            />
            <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between min-h-[320px]">
              <div>
                <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">
                  {cs.industry}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 brand-font group-hover:text-cah-accent transition-colors">
                  {cs.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {cs.summary}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6 text-cah-accent text-sm font-bold uppercase tracking-widest">
                Zobacz więcej
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
