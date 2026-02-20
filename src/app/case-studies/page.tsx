import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-cah-bg text-white font-sans selection:bg-cah-accent selection:text-black overflow-x-hidden">
      <div className="noise-bg" />
      <main className="min-h-screen">
        <CaseStudiesSection />
      </main>
    </div>
  );
}
