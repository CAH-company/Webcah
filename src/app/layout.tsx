import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const brandFont = localFont({
  src: "./fonts/DejaVuSans.ttf",
  variable: "--font-brand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cracow Automations Hub",
  description:
    "Automatyzacja procesów biznesowych, AI, integracje i konsulting - CAH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${brandFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
