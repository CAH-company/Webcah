import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - Poland Automation Hub",
  description:
    "Skontaktuj się z PAH. Opisz swój proces lub problem. Oddzwonimy w ciągu 24h z wstępną analizą i wyceną.",
  openGraph: {
    title: "Kontakt - Poland Automation Hub",
    description:
      "Skontaktuj się z PAH. Opisz swój proces lub problem. Oddzwonimy w ciągu 24h z wstępną analizą i wyceną.",
    url: "https://www.polandautomationhub.pl/kontakt",
    siteName: "Poland Automation Hub",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt - Poland Automation Hub",
    description:
      "Skontaktuj się z PAH. Opisz swój proces lub problem. Oddzwonimy w ciągu 24h z wstępną analizą i wyceną.",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
