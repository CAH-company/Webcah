import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Regulamin',
  robots: { index: false, follow: false },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold brand-font text-white mb-4">{title}</h2>
    <div className="text-white/55 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function Regulamin() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-[#4ed5cd] text-xs uppercase tracking-widest brand-font hover:opacity-70 transition-opacity mb-12 inline-block">
          ← Powrót
        </Link>

        <p className="text-[#4ed5cd] text-xs uppercase tracking-[0.3em] brand-font mb-4">Poland Automations Hub</p>
        <h1 className="text-4xl md:text-5xl font-bold brand-font text-white mb-4">Regulamin</h1>
        <p className="text-white/30 text-sm mb-14">Ostatnia aktualizacja: czerwiec 2026</p>

        <Section title="1. Postanowienia ogólne">
          <p>
            Niniejszy Regulamin określa zasady korzystania ze strony internetowej
            dostępnej pod adresem <strong className="text-white/80">polandautomationhub.pl</strong> (dalej: „Strona"),
            prowadzonej przez Poland Automations Hub z siedzibą w Krakowie (dalej: „PAH").
          </p>
          <p>
            Korzystanie ze Strony oznacza akceptację niniejszego Regulaminu.
          </p>
        </Section>

        <Section title="2. Charakter strony">
          <p>
            Strona ma charakter informacyjny i służy prezentacji oferty PAH w zakresie
            doradztwa IT, automatyzacji procesów i wdrożeń AI dla małych i średnich
            przedsiębiorstw. Strona nie stanowi oferty w rozumieniu Kodeksu cywilnego.
          </p>
          <p>
            Za pośrednictwem formularzy kontaktowych można umówić się na bezpłatną konsultację.
            Skorzystanie z formularza nie jest równoznaczne z zawarciem umowy o świadczenie usług.
          </p>
        </Section>

        <Section title="3. Prawa autorskie">
          <p>
            Wszelkie treści zamieszczone na Stronie — teksty, grafiki, logotypy, układ strony —
            stanowią własność PAH lub podmiotów, które udzieliły licencji, i są chronione
            przepisami ustawy o prawie autorskim i prawach pokrewnych.
          </p>
          <p>
            Kopiowanie, modyfikowanie lub rozpowszechnianie treści bez uprzedniej pisemnej zgody
            PAH jest zabronione.
          </p>
        </Section>

        <Section title="4. Ograniczenie odpowiedzialności">
          <p>
            PAH dokłada starań, aby informacje na Stronie były rzetelne i aktualne,
            jednak nie gwarantuje ich kompletności ani braku błędów. PAH nie ponosi
            odpowiedzialności za decyzje podjęte na podstawie treści opublikowanych na Stronie.
          </p>
          <p>
            PAH nie ponosi odpowiedzialności za przerwy w dostępności Strony spowodowane
            pracami technicznymi, awarią łącza lub innymi okolicznościami niezależnymi od PAH.
          </p>
        </Section>

        <Section title="5. Linki zewnętrzne">
          <p>
            Strona może zawierać odnośniki do zewnętrznych serwisów internetowych.
            PAH nie ponosi odpowiedzialności za treści ani politykę prywatności
            serwisów zewnętrznych.
          </p>
        </Section>

        <Section title="6. Zmiany Regulaminu">
          <p>
            PAH zastrzega prawo do zmiany Regulaminu. Zmiany wchodzą w życie z dniem
            ich opublikowania na Stronie. Dalsze korzystanie ze Strony po wprowadzeniu
            zmian oznacza ich akceptację.
          </p>
        </Section>

        <Section title="7. Prawo właściwe">
          <p>
            W sprawach nieuregulowanych niniejszym Regulaminem stosuje się przepisy
            prawa polskiego. Wszelkie spory rozstrzyga sąd właściwy dla siedziby PAH.
          </p>
        </Section>

        <Section title="8. Kontakt">
          <p>
            W sprawach związanych z Regulaminem prosimy o kontakt pod adresem:{' '}
            <a href="mailto:kontakt@pahub.pl" className="text-[#4ed5cd] hover:opacity-70 transition-opacity">
              kontakt@pahub.pl
            </a>.
          </p>
        </Section>
      </div>
    </main>
  );
}
