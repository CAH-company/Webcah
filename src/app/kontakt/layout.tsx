import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - Cracow Automations Hub",
  description:
    "Skontaktuj się z CAH. Opisz swój proces lub problem. Oddzwonimy w ciągu 24h z wstępną analizą i wyceną.",
  openGraph: {
    title: "Kontakt - Cracow Automations Hub",
    description:
      "Skontaktuj się z CAH. Opisz swój proces lub problem. Oddzwonimy w ciągu 24h z wstępną analizą i wyceną.",
    url: "https://cah.pl/kontakt",
    siteName: "Cracow Automations Hub",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt - Cracow Automations Hub",
    description:
      "Skontaktuj się z CAH. Opisz swój proces lub problem. Oddzwonimy w ciągu 24h z wstępną analizą i wyceną.",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
