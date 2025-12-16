import { ServicesSection } from "@/components/sections/ServicesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usługi - Cracow Automations Hub",
  description:
    "Automatyzacja procesów biznesowych, AI, integracje systemowe, consulting technologiczny i wdrożenia CRM. Kompleksowe usługi CAH.",
  openGraph: {
    title: "Usługi - Cracow Automations Hub",
    description:
      "Automatyzacja procesów biznesowych, AI, integracje systemowe, consulting technologiczny i wdrożenia CRM.",
    url: "https://cah.pl/uslugi",
    siteName: "Cracow Automations Hub",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usługi - Cracow Automations Hub",
    description:
      "Automatyzacja procesów biznesowych, AI, integracje systemowe, consulting technologiczny i wdrożenia CRM.",
  },
};

const accentColor = "#4ed5cd";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cah-bg text-white font-sans selection:bg-cah-accent selection:text-black overflow-x-hidden">
      <div className="noise-bg" />
      <main className="min-h-screen">
        <ServicesSection accentColor={accentColor} />
      </main>
    </div>
  );
}
