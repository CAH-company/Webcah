import { HomeSection } from "@/components/sections/HomeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { RealizacjeSection } from "@/components/sections/RealizacjeSection";
import { ContactSection } from "@/components/sections/ContactSection";

const ACCENT = "#4ed5cd";

export default function Home() {
  return (
    <div className="text-white font-sans selection:bg-cah-accent selection:text-black overflow-x-hidden">
      <div className="noise-bg" />
      <main>
        <div id="home">
          <HomeSection />
        </div>
        <div id="uslugi">
          <ServicesSection accentColor={ACCENT} />
        </div>
        <div id="o-nas">
          <AboutSection accentColor={ACCENT} />
        </div>
        <div id="realizacje">
          <RealizacjeSection accentColor={ACCENT} />
        </div>
        <div id="kontakt">
          <ContactSection accentColor={ACCENT} />
        </div>
      </main>
    </div>
  );
}
