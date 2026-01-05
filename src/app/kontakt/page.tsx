'use client';

import { ContactSection } from "@/components/sections/ContactSection";

// Note: metadata export doesn't work with 'use client', but it's defined in kontakt/layout.tsx
// Contact page needs 'use client' for form interactivity

const accentColor = "#4ed5cd";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cah-bg text-white font-sans selection:bg-cah-accent selection:text-black overflow-x-hidden">
      <div className="noise-bg" />
      <main className="min-h-screen">
        <ContactSection accentColor={accentColor} />
      </main>
    </div>
  );
}
