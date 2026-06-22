import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Polityka Prywatności',
  robots: { index: false, follow: false },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold brand-font text-white mb-4">{title}</h2>
    <div className="text-white/55 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function PolitykaPrywatnosci() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-[#4ed5cd] text-xs uppercase tracking-widest brand-font hover:opacity-70 transition-opacity mb-12 inline-block">
          ← Powrót
        </Link>

        <p className="text-[#4ed5cd] text-xs uppercase tracking-[0.3em] brand-font mb-4">Poland Automations Hub</p>
        <h1 className="text-4xl md:text-5xl font-bold brand-font text-white mb-4">Polityka Prywatności</h1>
        <p className="text-white/30 text-sm mb-14">Ostatnia aktualizacja: czerwiec 2026</p>

        <Section title="1. Administrator danych">
          <p>
            Administratorem Twoich danych osobowych jest Poland Automations Hub z siedzibą w Krakowie
            (dalej: „PAH", „my"). Kontakt w sprawach ochrony danych: <a href="mailto:kontakt@pahub.pl" className="text-[#4ed5cd] hover:opacity-70 transition-opacity">kontakt@pahub.pl</a>.
          </p>
        </Section>

        <Section title="2. Jakie dane zbieramy">
          <p>Przetwarzamy dane, które podajesz dobrowolnie za pośrednictwem formularzy na stronie:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Imię i nazwisko</li>
            <li>Numer telefonu</li>
            <li>Nazwa firmy</li>
            <li>Odpowiedzi w ankiecie satysfakcji</li>
          </ul>
          <p>
            Strona może automatycznie zbierać dane analityczne (adres IP, typ przeglądarki,
            czas wizyty) za pomocą narzędzi opisanych w Polityce Cookies.
          </p>
        </Section>

        <Section title="3. Cel i podstawa prawna przetwarzania">
          <ul className="list-disc pl-5 space-y-1">
            <li>Kontakt handlowy i udzielenie odpowiedzi na zapytanie — art. 6 ust. 1 lit. a RODO (zgoda)</li>
            <li>Ocena jakości świadczonych usług (ankieta) — art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes)</li>
            <li>Analiza ruchu na stronie — art. 6 ust. 1 lit. a RODO (zgoda na cookies)</li>
          </ul>
        </Section>

        <Section title="4. Okres przechowywania danych">
          <p>
            Dane z formularzy kontaktowych przechowujemy przez czas niezbędny do obsługi zapytania,
            nie dłużej niż 3 lata od ostatniego kontaktu. Dane z ankiet przechowujemy bezterminowo
            w formie zanonimizowanej do celów statystycznych.
          </p>
        </Section>

        <Section title="5. Twoje prawa">
          <p>Przysługuje Ci prawo do:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>dostępu do swoich danych</li>
            <li>sprostowania nieprawidłowych danych</li>
            <li>usunięcia danych („prawo do bycia zapomnianym")</li>
            <li>ograniczenia przetwarzania</li>
            <li>przenoszenia danych</li>
            <li>sprzeciwu wobec przetwarzania</li>
            <li>cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania dokonanego przed cofnięciem)</li>
          </ul>
          <p>
            Aby skorzystać z powyższych praw, skontaktuj się z nami pod adresem:{' '}
            <a href="mailto:kontakt@pahub.pl" className="text-[#4ed5cd] hover:opacity-70 transition-opacity">kontakt@pahub.pl</a>.
            Przysługuje Ci również prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).
          </p>
        </Section>

        <Section title="6. Przekazywanie danych">
          <p>
            Twoje dane mogą być przekazywane dostawcom narzędzi technicznych niezbędnych do działania
            strony (hosting, narzędzia analityczne). Nie sprzedajemy danych osobowych podmiotom trzecim.
            Dane mogą być przekazywane poza EOG wyłącznie do podmiotów zapewniających odpowiedni
            poziom ochrony danych (np. na podstawie standardowych klauzul umownych).
          </p>
        </Section>

        <Section title="7. Bezpieczeństwo">
          <p>
            Stosujemy techniczne i organizacyjne środki ochrony danych, w tym szyfrowanie połączeń
            (HTTPS) oraz ograniczony dostęp do danych.
          </p>
        </Section>
      </div>
    </main>
  );
}
