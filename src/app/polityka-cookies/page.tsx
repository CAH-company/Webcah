import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Polityka Cookies',
  robots: { index: false, follow: false },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold brand-font text-white mb-4">{title}</h2>
    <div className="text-white/55 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function PolitykaCookies() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-[#4ed5cd] text-xs uppercase tracking-widest brand-font hover:opacity-70 transition-opacity mb-12 inline-block">
          ← Powrót
        </Link>

        <p className="text-[#4ed5cd] text-xs uppercase tracking-[0.3em] brand-font mb-4">Poland Automations Hub</p>
        <h1 className="text-4xl md:text-5xl font-bold brand-font text-white mb-4">Polityka Cookies</h1>
        <p className="text-white/30 text-sm mb-14">Ostatnia aktualizacja: czerwiec 2026</p>

        <Section title="1. Czym są pliki cookies?">
          <p>
            Pliki cookies (ciasteczka) to małe pliki tekstowe zapisywane na Twoim urządzeniu
            podczas odwiedzania stron internetowych. Służą do prawidłowego działania strony,
            zapamiętywania Twoich preferencji oraz analizy ruchu.
          </p>
        </Section>

        <Section title="2. Jakie cookies używamy">
          <p>Na naszej stronie stosujemy następujące rodzaje plików cookies:</p>

          <div className="mt-4 space-y-4">
            <div className="border border-white/10 rounded-xl p-5">
              <p className="text-white/80 font-bold text-sm mb-1">Niezbędne (sesyjne)</p>
              <p className="text-white/40 text-xs mb-2">Zawsze aktywne</p>
              <p>
                Zapewniają prawidłowe działanie strony. Obejmują m.in. zapamiętanie zamknięcia
                formularza kontaktowego (klucz <code className="text-[#4ed5cd] text-[11px]">cah_lead_dismissed</code>
                {' '}zapisany w localStorage). Bez tych plików strona nie działa poprawnie.
              </p>
            </div>

            <div className="border border-white/10 rounded-xl p-5">
              <p className="text-white/80 font-bold text-sm mb-1">Analityczne — Microsoft Clarity</p>
              <p className="text-white/40 text-xs mb-2">Wymaga zgody</p>
              <p>
                Jeżeli skonfigurowano zmienną środowiskową <code className="text-[#4ed5cd] text-[11px]">NEXT_PUBLIC_CLARITY_ID</code>,
                na stronie działa Microsoft Clarity — narzędzie do analizy zachowań użytkowników
                (mapy ciepła, nagrania sesji, statystyki ruchu). Microsoft może przetwarzać dane
                poza EOG. Więcej informacji:{' '}
                <a
                  href="https://privacy.microsoft.com/pl-pl/privacystatement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4ed5cd] hover:opacity-70 transition-opacity"
                >
                  Polityka Prywatności Microsoft
                </a>.
              </p>
            </div>
          </div>
        </Section>

        <Section title="3. Jak zarządzać cookies">
          <p>
            Możesz kontrolować i usuwać pliki cookies poprzez ustawienia swojej przeglądarki.
            Poniżej znajdziesz linki do instrukcji dla najpopularniejszych przeglądarek:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Google Chrome: Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie</li>
            <li>Mozilla Firefox: Ustawienia → Prywatność i bezpieczeństwo</li>
            <li>Microsoft Edge: Ustawienia → Pliki cookie i uprawnienia witryn</li>
            <li>Safari: Preferencje → Prywatność</li>
          </ul>
          <p>
            Wyłączenie cookies analitycznych nie wpłynie na funkcjonalność strony,
            jednak uniemożliwi nam analizę ruchu i poprawianie jej jakości.
          </p>
        </Section>

        <Section title="4. Zmiany Polityki Cookies">
          <p>
            Zastrzegamy prawo do zmiany niniejszej Polityki Cookies w dowolnym momencie.
            Zmiany wchodzą w życie z dniem ich opublikowania na stronie.
          </p>
        </Section>

        <Section title="5. Kontakt">
          <p>
            Pytania dotyczące cookies kieruj na:{' '}
            <a href="mailto:kontakt@pahub.pl" className="text-[#4ed5cd] hover:opacity-70 transition-opacity">
              kontakt@pahub.pl
            </a>.
          </p>
        </Section>
      </div>
    </main>
  );
}
