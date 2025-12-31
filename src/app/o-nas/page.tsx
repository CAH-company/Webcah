import { AboutSection } from "@/components/sections/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nas - Cracow Automations Hub",
  description:
    "Poznaj zespół CAH. Eksperci w automatyzacji procesów, AI i integracji systemów. Technologia ma służyć ludziom, nie odwrotnie.",
  openGraph: {
    title: "O nas - Cracow Automations Hub",
    description:
      "Poznaj zespół CAH. Eksperci w automatyzacji procesów, AI i integracji systemów.",
    url: "https://www.cracovautomationhub.pl/o-nas",
    siteName: "Cracow Automations Hub",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "O nas - Cracow Automations Hub",
    description:
      "Poznaj zespół CAH. Eksperci w automatyzacji procesów, AI i integracji systemów.",
  },
};

const accentColor = "#4ed5cd";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cah-bg text-white font-sans selection:bg-cah-accent selection:text-black overflow-x-hidden">
      <div className="noise-bg" />
      <main className="min-h-screen">
        <AboutSection accentColor={accentColor} />
      </main>
    </div>
  );
}
