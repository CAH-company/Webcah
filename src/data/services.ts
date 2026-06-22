export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  headline: string;
  description: string;
  forWhom: string[];
  process: { step: string; title: string; description: string }[];
  caseStudySlug?: string;
  caseStudyTitle?: string;
  caseStudyMetrics?: string[];
};

export const services: Service[] = [
  {
    slug: "aplikacje-systemy",
    title: "Aplikacje i systemy",
    shortTitle: "Aplikacje i systemy",
    headline: "Zamień Excele i maile na system, który działa za Ciebie",
    description:
      "Budujemy systemy dostosowane do Twoich potrzeb, które zastępują arkusze kalkulacyjne i gotowe narzędzia ograniczające możliwości.",
    forWhom: [
      "Procesy działają na Excelach",
      "Narzędzia SaaS nie pasują do Twoich operacji",
      "Brakuje centralnego źródła danych",
      "Zespół marnuje czas na ręczne przepisywanie",
      "Technologia hamuje skalowanie",
    ],
    process: [
      { step: "01", title: "Audyt procesów", description: "Mapujemy rzeczywiste procedury, nie te z dokumentacji." },
      { step: "02", title: "Projekt systemu", description: "Mockupy i specyfikacja przed kodowaniem." },
      { step: "03", title: "Development", description: "Budowa modułowa z regularnymi demo." },
      { step: "04", title: "Wdrożenie", description: "Migracja danych, szkolenie zespołu, wsparcie." },
    ],
    caseStudySlug: "audyt-i-wdrozenie-infrastruktury-it",
    caseStudyTitle: "Perfect Circle: transformacja firmy szkoleniowej",
    caseStudyMetrics: ["~12h oszczędności/tydzień", "−40% kosztów IT", "Zero dni przestoju"],
  },
  {
    slug: "automatyzacja-procesow",
    title: "Automatyzacja procesów",
    shortTitle: "Automatyzacja",
    headline: "Koniec z kopiuj-wklej. Niech procesy działają same.",
    description:
      "Identyfikujemy powtarzalne zadania i automatyzujemy je, żeby zespół robił to, za co mu naprawdę płacisz. Szybkie wdrożenie, mierzalny efekt.",
    forWhom: [
      "Zespół traci godziny dziennie na przepisywanie między systemami",
      "Powtarzające się czynności dziesiątki razy tygodniowo",
      "Błędy z ręcznego wprowadzania danych",
      "Potrzeba szybkiego efektu bez długotrwałych projektów",
      "Procesy, które nigdy nie były kwestionowane",
    ],
    process: [
      { step: "01", title: "Identyfikacja", description: "Mapujemy procesy i liczymy koszty." },
      { step: "02", title: "Priorytetyzacja", description: "Wybieramy quick wins z najwyższym ROI." },
      { step: "03", title: "Automatyzacja", description: "Budujemy na sprawdzonych narzędziach (n8n, Make, Zapier)." },
      { step: "04", title: "Monitoring", description: "Sprawdzamy, mierzymy i optymalizujemy." },
    ],
    caseStudySlug: "automatyzacja-pozyskiwania-leadow",
    caseStudyTitle: "Buddy's Events: od zera do działającego pipeline'u",
    caseStudyMetrics: ["6 kampanii cold mailingowych", "100% leadów automatycznie w CRM", "Zero ręcznej pracy"],
  },
  {
    slug: "sztuczna-inteligencja",
    title: "AI tam, gdzie ma sens",
    shortTitle: "AI",
    headline: "AI, które oszczędza czas. Nie generuje buzzwordy.",
    description:
      "Nie wdrażamy AI dla zasady. Szukamy miejsc, gdzie sztuczna inteligencja realnie oszczędza czas i pieniądze: analiza danych, obsługa klienta, generowanie treści.",
    forWhom: [
      "Słyszysz o AI wszędzie, ale nie wiesz od czego zacząć",
      "Próbowaliście ChatGPT bez konkretnych rezultatów",
      "Szukasz oszczędności, nie marketingowych haseł",
      "Zespół traci czas na zadania, które AI może wykonać 10× szybciej",
    ],
    process: [
      { step: "01", title: "Diagnoza potencjału", description: "Analizujemy gdzie AI da rzeczywistą wartość." },
      { step: "02", title: "Pilotaż", description: "Testujemy na jednym procesie z szybkim efektem." },
      { step: "03", title: "Wdrożenie", description: "Integrujemy z narzędziami zespołu." },
      { step: "04", title: "Szkolenie zespołu", description: "Praktyczne warsztaty na rzeczywistych zadaniach." },
    ],
    caseStudySlug: "szkolenie-ai-i-automatyzacja",
    caseStudyTitle: "Biegunsport: AI w turystyce",
    caseStudyMetrics: ["3× szybsze oferty", "Automatyczne odpowiedzi na FAQ", "100% zespołu przeszkolone"],
  },
  {
    slug: "integracje",
    title: "Integracje i rozbudowa",
    shortTitle: "Integracje",
    headline: "Twoje narzędzia nie gadają ze sobą? Naprawiamy to.",
    description:
      "CRM rozmawia z ERP, faktury lecą do księgowości, leady z formularza trafiają w pipeline. Automatycznie, bez kopiuj-wklej.",
    forWhom: [
      "Masz 3+ narzędzia, które nie są ze sobą połączone",
      "Przepisujesz dane ręcznie między systemami",
      "Informacje w CRM, ERP i Excelu się rozbiegają",
      "Zbieranie danych do raportów trwa za długo",
      "Zakupione rozwiązania są niedostatecznie wykorzystane",
    ],
    process: [
      { step: "01", title: "Audyt narzędzi", description: "Analiza stack'u technologicznego i identyfikacja nieefektywności." },
      { step: "02", title: "Plan integracji", description: "Projektujemy przepływ danych i harmonogram łączeń." },
      { step: "03", title: "Implementacja", description: "Budujemy integracje z wykorzystaniem API, webhooków i automatyzacji." },
      { step: "04", title: "Testy i monitoring", description: "Weryfikacja na danych rzeczywistych i konfiguracja alertów." },
    ],
    caseStudyTitle: "Firma dystrybucyjna: połączone systemy",
    caseStudyMetrics: ["−70% ręcznej pracy", "0 zduplikowanych zamówień", "Real-time stany magazynowe"],
  },
  {
    slug: "doradztwo",
    title: "Doradztwo",
    shortTitle: "Doradztwo",
    headline: "Nie wiesz od czego zacząć? Od tego jesteśmy.",
    description:
      "Robimy audyt, mapujemy procesy, analizujemy straty i przygotowujemy konkretny plan działania z priorytetami i kosztorysem.",
    forWhom: [
      "Nie wiesz, w którym kierunku powinny pójść zmiany",
      "Boisz się, że zainwestujesz w złe rozwiązanie",
      "Jesteś sceptyczny wobec obietnic dostawców",
      "Potrzebujesz niezależnej opinii",
      "Oczekujesz konkretnych liczb, nie prezentacji",
    ],
    process: [
      { step: "01", title: "Bezpłatna rozmowa", description: "10 minut, bez zobowiązań." },
      { step: "02", title: "Audyt", description: "Wywiady z zespołem, przegląd narzędzi, analiza procesów." },
      { step: "03", title: "Mapa drogowa", description: "Raport z priorytetami i efektami finansowymi." },
      { step: "04", title: "Plan wdrożenia", description: "Szczegółowa implementacja z harmonogramem." },
    ],
    caseStudySlug: "audyt-i-wdrozenie-infrastruktury-it",
    caseStudyTitle: "Perfect Circle: optymalizacja narzędzi IT",
    caseStudyMetrics: ["−40% oszczędności na IT", "Profesjonalna infrastruktura", "Zero dni przestoju"],
  },
  {
    slug: "szkolenia",
    title: "Szkolenia",
    shortTitle: "Szkolenia",
    headline: "Praktyczne szkolenie z AI. Nie kolejna prezentacja o przyszłości.",
    description:
      "Warsztaty z AI i automatyzacji dostosowane do Twojej branży. Praktyczne narzędzia do natychmiastowego wdrożenia, nie teoria.",
    forWhom: [
      "Zespół nie ma praktycznej wiedzy o AI w codziennej pracy",
      "Szukacie szkolenia dopasowanego do branży, nie ogólnego",
      "Chcecie wdrożyć narzędzia bezpośrednio po warsztacie",
      "Wolicie rozwinąć wewnętrzne kompetencje przed zatrudnieniem ekspertów",
    ],
    process: [
      { step: "01", title: "Diagnoza potrzeb", description: "Rozmawiamy z Tobą i zespołem. Sprawdzamy poziom wiedzy, narzędzia, procesy." },
      { step: "02", title: "Customizacja", description: "Tworzymy materiały, prompty i scenariusze dedykowane dla Twojej branży." },
      { step: "03", title: "Warsztat", description: "Intensywny, praktyczny dzień. Zero slajdów z teorią." },
      { step: "04", title: "Follow-up", description: "Sesja Q&A dwa tygodnie po warsztacie." },
    ],
    caseStudySlug: "szkolenie-ai-i-automatyzacja",
    caseStudyTitle: "Biegunsport: od szkolenia do samodzielności",
    caseStudyMetrics: ["3× szybsze oferty", "Auto odpowiedzi FAQ", "1 dzień do samodzielności"],
  },
];
