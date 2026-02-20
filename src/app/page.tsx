import { HomeSection } from "@/components/sections/HomeSection";
import { LogoCarousels } from "@/components/sections/LogoCarousels";

export default function Home() {
  return (
    <div className="min-h-screen bg-cah-bg text-white font-sans selection:bg-cah-accent selection:text-black overflow-x-hidden">
      <div className="noise-bg" />
      <main>
        <HomeSection />
        <LogoCarousels />
      </main>
    </div>
  );
}
