import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-cah-bg text-white font-sans selection:bg-cah-accent selection:text-black overflow-x-hidden">
      <div className="noise-bg" />
      <main className="min-h-screen">
        {/* Hero */}
        <div className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              background: `linear-gradient(135deg, ${cs.bgColor} 0%, transparent 50%)`,
            }}
          />
          <div className="container mx-auto relative z-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-white/60 hover:text-cah-accent transition-colors mb-8 text-sm uppercase tracking-widest"
            >
              <ArrowLeft size={16} />
              Wszystkie Case Studies
            </Link>
            <span className="block text-xs uppercase tracking-widest text-white/40 mb-4">
              {cs.industry}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 brand-font">
              {cs.title}
            </h1>
            <p className="text-xl text-white/60 max-w-3xl">
              {cs.summary}
            </p>
          </div>
        </div>

        {/* Content */}
        <section className="px-6 pb-24">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main description */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6 brand-font">
                  O projekcie
                </h2>
                <p className="text-white/70 leading-relaxed text-lg mb-8">
                  {cs.description}
                </p>

                <h2 className="text-2xl font-bold mb-6 brand-font">
                  Rezultaty
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cs.results.map((result, i) => (
                    <div
                      key={i}
                      className="bg-cah-bg-card border border-white/10 rounded-2xl p-6"
                    >
                      <CheckCircle
                        size={20}
                        style={{ color: cs.bgColor }}
                        className="mb-3"
                      />
                      <p className="text-white/80 text-sm">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-cah-bg-card border border-white/10 rounded-3xl p-8 sticky top-28">
                  <h3 className="text-lg font-bold mb-4 brand-font">Klient</h3>
                  <p className="text-white/60 mb-6">{cs.client}</p>

                  <h3 className="text-lg font-bold mb-4 brand-font">Branża</h3>
                  <p className="text-white/60 mb-6">{cs.industry}</p>

                  <h3 className="text-lg font-bold mb-4 brand-font">
                    Zrealizowane usługi
                  </h3>
                  <ul className="space-y-2">
                    {cs.services.map((service, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-white/60 text-sm"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: cs.bgColor }}
                        />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
