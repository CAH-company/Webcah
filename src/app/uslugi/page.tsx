import { ServicesSection } from "@/components/sections/ServicesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatyzacja Procesów Biznesowych i AI | Poland Automations Hub",
  description:
    "Optymalizuj swój biznes z Poland Automations Hub. Oferujemy automatyzację procesów, wdrożenia AI oraz systemów CRM. Skontaktuj się z nami i zwiększ efektywność swojej firmy!",
  openGraph: {
    title: "Automatyzacja Procesów Biznesowych i AI | Poland Automations Hub",
    description:
      "Optymalizuj swój biznes z Poland Automations Hub. Oferujemy automatyzację procesów, wdrożenia AI oraz systemów CRM. Skontaktuj się z nami i zwiększ efektywność swojej firmy!",
    url: "https://polandautomationhub.pl/uslugi",
    siteName: "Poland Automations Hub",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatyzacja Procesów Biznesowych i AI | Poland Automations Hub",
    description:
      "Optymalizuj swój biznes z Poland Automations Hub. Oferujemy automatyzację procesów, wdrożenia AI oraz systemów CRM. Skontaktuj się z nami i zwiększ efektywność swojej firmy!",
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
