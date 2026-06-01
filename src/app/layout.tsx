import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LeadPopup } from "@/components/LeadPopup";
import { LoadingScreen } from "@/components/LoadingScreen";
import { AnimatedCanvas } from "@/components/AnimatedCanvas";

const brandFont = localFont({
  src: "./fonts/DejaVuSans.ttf",
  variable: "--font-brand",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.polandautomationhub.pl/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Poland Automation Hub – Consulting IT i automatyzacja dla MŚP",
    template: "%s | Poland Automation Hub",
  },
  description:
    "Audyt technologiczny, automatyzacja procesów i wdrożenia AI dla polskich MŚP. Sprawdzamy gdzie tracisz czas i pieniądze — i wdrażamy konkretne rozwiązania. Poland Automation Hub, Kraków.",
  keywords: [
    "automatyzacja procesów biznesowych",
    "consulting IT dla MŚP",
    "audyt technologiczny",
    "wdrożenie AI",
    "integracje systemowe",
    "Fractional CTO",
    "automatyzacja n8n",
    "wdrożenia CRM",
    "szkolenie AI dla firm",
    "quick wins automatyzacja",
    "Poland Automation Hub",
    "PAH",
    "consulting IT Kraków",
    "Business Process Automation",
  ],
  authors: [{ name: "Poland Automations Hub" }],
  creator: "Poland Automations Hub",
  publisher: "Poland Automations Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "Poland Automation Hub",
    title: "Poland Automation Hub – Consulting IT i automatyzacja dla MŚP",
    description:
      "Audyt technologiczny, automatyzacja procesów i wdrożenia AI dla polskich MŚP. Sprawdzamy gdzie tracisz czas i pieniądze — i wdrażamy konkretne rozwiązania.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Poland Automations Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poland Automation Hub – Consulting IT i automatyzacja dla MŚP",
    description:
      "Audyt technologiczny, automatyzacja procesów i wdrożenia AI dla polskich MŚP. Konkretne rozwiązania, konkretne liczby.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Poland Automation Hub",
    alternateName: "PAH",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Audyt technologiczny, automatyzacja procesów i wdrożenia AI dla polskich MŚP.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kraków",
      addressCountry: "PL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "kontakt@pahub.pl",
      contactType: "Customer Service",
      areaServed: "PL",
      availableLanguage: ["Polish", "English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/poland-automation-hub/",
    ],
  };

  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${brandFont.variable} antialiased`}>
        {/* Canvas particle system — fixed, covers full viewport */}
        <AnimatedCanvas />
        <div className="dot-grid" aria-hidden="true" />

        {/* Content above canvas */}
        <div className="relative" style={{ zIndex: 1 }}>
          <LoadingScreen />
          <Navigation />
          {children}
          <Footer />
        </div>

        <LeadPopup />

        {/* Microsoft Clarity — ustaw NEXT_PUBLIC_CLARITY_ID w .env.local */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="clarity-init" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");`}
          </Script>
        )}
      </body>
    </html>
  );
}
