import { HomeSection } from "@/components/sections/HomeSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { RealizacjeSection } from "@/components/sections/RealizacjeSection";
import { CTASection } from "@/components/sections/CTASection";

const ACCENT = "#4ed5cd";

export default function Home() {
  return (
    <div className="text-white font-sans selection:bg-cah-accent selection:text-black overflow-x-hidden">
      <div className="noise-bg" />
      <main>
        <div id="home">
          <HomeSection />
        </div>
        <div id="problemy">
          <ProblemsSection accentColor={ACCENT} />
        </div>
        <div id="uslugi">
          <ServicesSection accentColor={ACCENT} />
        </div>
        <div id="jak-pracujemy">
          <ProcessSection accentColor={ACCENT} />
        </div>
        <div id="o-nas">
          <AboutSection accentColor={ACCENT} />
        </div>
        <div id="realizacje">
          <RealizacjeSection accentColor={ACCENT} />
        </div>
        <div id="kontakt">
          <CTASection accentColor={ACCENT} />
        </div>
      </main>
    </div>
  );
}
