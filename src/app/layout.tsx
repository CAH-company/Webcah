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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cracovautomationhub.pl/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cracow Automations Hub - Automatyzacja procesów biznesowych",
    template: "%s | Cracow Automations Hub",
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
    "Kraków",
    "CAH",
    "wdrożenia CRM",
    "Business Process Automation",
  ],
  authors: [{ name: "Cracow Automations Hub" }],
  creator: "Cracow Automations Hub",
  publisher: "Cracow Automations Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "Cracow Automations Hub",
    title: "Cracow Automations Hub - Automatyzacja procesów biznesowych",
    description:
      "Automatyzacja procesów biznesowych, AI, integracje systemowe i konsulting technologiczny. Zyskaj czas, zredukuj koszty, wyprzedź konkurencję z CAH.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Cracow Automations Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cracow Automations Hub - Automatyzacja procesów biznesowych",
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
    name: "Cracow Automations Hub",
    alternateName: "CAH",
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
      email: "hello@cah.pl",
      contactType: "Customer Service",
      areaServed: "PL",
      availableLanguage: ["Polish", "English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/cracow-automations-hub",
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
