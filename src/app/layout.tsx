import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const brandFont = localFont({
  src: "./fonts/DejaVuSans.ttf",
  variable: "--font-brand",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.polandautomationhub.pl/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Poland Automations Hub - Automatyzacja procesów biznesowych",
    template: "%s | Poland Automations Hub",
  },
  description:
    "Automatyzacja procesów biznesowych, AI, integracje systemowe i konsulting technologiczny. Zyskaj czas, zredukuj koszty, wyprzedź konkurencję z CAH.",
  keywords: [
    "automatyzacja procesów",
    "RPA",
    "sztuczna inteligencja",
    "AI",
    "integracje systemowe",
    "consulting technologiczny",
    "Poalnd",
    "PAH",
    "PAHub",
    "wdrożenia CRM",
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
    siteName: "Poland Automations Hub",
    title: "Poland Automations Hub - Automatyzacja procesów biznesowych",
    description:
      "Automatyzacja procesów biznesowych, AI, integracje systemowe i konsulting technologiczny. Zyskaj czas, zredukuj koszty, wyprzedź konkurencję z CAH.",
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
    title: "Poland Automations Hub - Automatyzacja procesów biznesowych",
    description:
      "Automatyzacja procesów biznesowych, AI, integracje systemowe i konsulting technologiczny.",
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
    name: "Poland Automations Hub",
    alternateName: "PAH",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Automatyzacja procesów biznesowych, AI, integracje systemowe i konsulting technologiczny.",
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
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
