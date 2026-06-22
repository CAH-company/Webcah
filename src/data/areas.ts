export type Area = {
  slug: string;
  title: string;
  headline: string;
  subtitle: string;
  problems: { title: string; description: string }[];
  offerings: string[];
  caseStudyTitle?: string;
  caseStudyDescription?: string;
  caseStudyMetrics?: string[];
};

export const areas: Area[] = [
  {
    slug: "sprzedaz-i-marketing",
    title: "Automatyzacja w sprzedaży i marketingu",
    headline: "Automatyzacja w sprzedaży i marketingu",
    subtitle:
      "Więcej konwersji, mniej klikania, szybsza sprzedaż. Automatyzujemy pozyskiwanie klientów od pierwszego kontaktu do podpisanej umowy.",
    problems: [
      {
        title: "Leady giną w mailach",
        description: "Potencjalny klient pisze o ofertę, ale handlowiec nie odpowiada na czas. Lead przepada.",
      },
      {
        title: "CRM to cmentarz danych",
        description: "System zaniedbywany przez zespół, niepełne informacje, raporty którym nikt nie ufa.",
      },
      {
        title: "Follow-up na pamięć",
        description: "Brak systemu przypominającego o kontaktach. Małe szanse, że ktoś oddzwoni po tygodniu.",
      },
      {
        title: "Zero widoczności w pipeline",
        description: "Nie wiadomo ile masz leadów, na jakim są etapie i ile zamkniesz w tym miesiącu.",
      },
    ],
    offerings: [
      "Automatyczne integracje leadów z CRM",
      "Spersonalizowane kampanie mailowe z automatycznym follow-upem",
      "Zarządzanie pipeline'em z powiadomieniami",
      "Dashboardy analityczne sprzedaży",
      "Generowanie ofert na bazie danych z CRM",
      "Automatyczne raporty tygodniowe",
    ],
    caseStudyTitle: "Buddy's Events: od zera do działającego pipeline'u",
    caseStudyDescription:
      "Firma eventowa bez CRM i procesu sprzedaży. Zbudowaliśmy kompletną infrastrukturę: 6 kampanii cold mailingowych, automatyczny pipeline i alerty na Slacku.",
    caseStudyMetrics: ["6 kampanii", "100% leadów auto w CRM", "Zero ręcznej pracy"],
  },
  {
    slug: "obsluga-klienta",
    title: "Automatyzacja w obsłudze klienta",
    headline: "Automatyzacja w obsłudze klienta",
    subtitle:
      "Szybsze odpowiedzi, wyższe zadowolenie, oszczędność czasu. Automatyzujemy powtarzalne elementy obsługi, żeby zespół zajmował się trudnymi sprawami.",
    problems: [
      {
        title: "Klient czeka 2 dni na odpowiedź",
        description: "Maile giną w skrzynce, nikt nie wie kto odpowiada. Klient pisze ponownie albo odchodzi.",
      },
      {
        title: "Te same pytania 50 razy dziennie",
        description: "Jaki jest termin dostawy? Jak złożyć reklamację? Zespół odpowiada ręcznie na to samo w kółko.",
      },
      {
        title: "Brak historii kontaktu",
        description: "Klient dzwoni, nikt nie wie czego dotyczyła ostatnia rozmowa. Zaczyna od nowa. Frustracja po obu stronach.",
      },
      {
        title: "Tickety na karteczkach",
        description: "Zgłoszenia w mailach, na Slacku, ustnie. Nic nie jest śledzone, priorytety to loteria.",
      },
    ],
    offerings: [
      "Chatbot AI odpowiadający na najczęstsze pytania 24/7",
      "Automatyczne tworzenie i przydzielanie ticketów z maili i formularzy",
      "Baza wiedzy dla klientów: FAQ, instrukcje, statusy zamówień",
      "Panel klienta z historią kontaktu i statusem zgłoszeń",
      "Automatyczne ankiety satysfakcji po zamknięciu sprawy",
      "Alerty dla zespołu, gdy ticket czeka za długo",
    ],
    caseStudyTitle: "Firma usługowa: czas odpowiedzi z 2 dni do 4 godzin",
    caseStudyDescription:
      "Firma z 20-osobowym zespołem obsługi dostawała 200+ zapytań dziennie. 60% to powtarzalne pytania. Wdrożyliśmy chatbota AI i automatyczne ticketowanie. Czas pierwszej odpowiedzi spadł z 2 dni do 4 godzin.",
    caseStudyMetrics: ["−60% zapytań do zespołu", "4h czas odpowiedzi", "24/7 chatbot AI"],
  },
  {
    slug: "administracja",
    title: "Automatyzacja w administracji",
    headline: "Automatyzacja w administracji",
    subtitle:
      "Koniec z drukowaniem, skanowaniem i ręcznym przepisywaniem. Systemy, które same analizują, katalogują i generują dokumenty.",
    problems: [
      {
        title: "Faktury krążą po biurkach",
        description: "Papierowy obieg, trzy podpisy, tygodniowe opóźnienia w płatnościach.",
      },
      {
        title: "Umowy pisane od zera",
        description: "Kopiuj-wklej z poprzedniej umowy, literówki, brak wersjonowania.",
      },
      {
        title: "Dokumenty giną",
        description: "Każdy trzyma pliki w swoim folderze. Znalezienie jednego dokumentu to pół godziny.",
      },
      {
        title: "Ręczne wpisywanie danych",
        description: "Te same informacje wpisywane w trzech systemach. Trzykrotna szansa na błąd.",
      },
    ],
    offerings: [
      "OCR faktur z automatycznym wprowadzaniem danych",
      "Elektroniczny obieg dokumentów z akceptacjami online",
      "Automatyczne generowanie umów z danych w CRM",
      "Centralne repozytorium z wyszukiwarką i wersjonowaniem",
      "Automatyczne przypomnienia o terminach płatności",
      "Generowanie raportów finansowych",
    ],
    caseStudyTitle: "Firma produkcyjna: koniec z ręcznym przetwarzaniem faktur",
    caseStudyDescription:
      "Firma 35-osobowa przetwarzała ~200 faktur miesięcznie ręcznie. Wdrożyliśmy OCR i elektroniczny obieg dokumentów.",
    caseStudyMetrics: ["15h oszczędności/tydzień", "200+ faktur auto/miesiąc", "Zero ręcznego wpisywania"],
  },
  {
    slug: "rekrutacja-hr",
    title: "Automatyzacja w rekrutacji i HR",
    headline: "Automatyzacja w rekrutacji i HR",
    subtitle:
      "Odciąż HR od papierkowej roboty. Automatyczny onboarding, obieg dokumentów i zarządzanie urlopami, żeby ludzie od ludzi zajmowali się ludźmi.",
    problems: [
      {
        title: "Onboarding trwa tydzień",
        description: "Nowy pracownik czeka na dostępy, dokumenty, szkolenia. Pierwszy dzień to chaos zamiast dobrego wrażenia.",
      },
      {
        title: "Dokumenty kadrowe w segregatorach",
        description: "Umowy, aneksy, zaświadczenia, wszystko w papierze. Szukanie jednego dokumentu to pół godziny.",
      },
      {
        title: "Urlopy na karteczkach",
        description: "Wnioski urlopowe mailem, akceptacja ustnie, ewidencja w Excelu. Nikt nie ma aktualnego stanu.",
      },
      {
        title: "Screening CV ręcznie",
        description: "100 aplikacji, jedna osoba czyta wszystkie. Dobry kandydat ginie w stosie niepassujących CV.",
      },
    ],
    offerings: [
      "Automatyczny onboarding: dokumenty, dostępy, szkolenia jednym klikiem",
      "Elektroniczny obieg dokumentów kadrowych z podpisem cyfrowym",
      "System zarządzania urlopami z kalendarzem i auto-akceptacją",
      "AI screening CV: wstępna selekcja kandydatów pod Twoje kryteria",
      "Automatyczne przypomnienia o kończących się umowach i badaniach",
      "Offboarding checklist: nic nie umknie przy odejściu pracownika",
    ],
    caseStudyTitle: "Perfect Circle: uporządkowane dokumenty i procesy HR",
    caseStudyDescription:
      "Firma szkoleniowa z rosnącym zespołem, dokumenty na prywatnych dyskach, brak systemu. Wdrożyliśmy Google Workspace, uporządkowaliśmy obieg dokumentów i zautomatyzowaliśmy powiadomienia.",
    caseStudyMetrics: ["Profesjonalna infrastruktura", "Uporządkowany obieg", "HR odzyskał kontrolę"],
  },
  {
    slug: "dashboardy-dane",
    title: "Automatyzacja w dashboardach i danych",
    headline: "Automatyzacja w dashboardach i danych",
    subtitle:
      "Zbieramy dane z różnych systemów i prezentujemy w jednym miejscu. W zrozumiały sposób, w czasie rzeczywistym.",
    problems: [
      {
        title: "Raport w Excelu co piątek",
        description: "Ktoś spędza pół dnia zbierając dane z 5 systemów. W poniedziałek raport jest już nieaktualny.",
      },
      {
        title: "Każdy dział ma swoją wersję prawdy",
        description: "Sprzedaż mówi 100 klientów, marketing 120, finanse 87. Nikt nie wie, która liczba jest prawdziwa.",
      },
      {
        title: "Brak danych real-time",
        description: "Decyzje podejmujesz na podstawie danych sprzed tygodnia. Jak na autostradzie z zaśnieżoną szybą.",
      },
      {
        title: "Dane rozrzucone po narzędziach",
        description: "CRM, Google Analytics, Excel, system księgowy. Żeby zobaczyć pełny obraz, musisz otworzyć 5 aplikacji.",
      },
    ],
    offerings: [
      "Dashboardy live z danymi ze wszystkich systemów w jednym miejscu",
      "Automatyczne raporty generowane i wysyłane w wybranym rytmie",
      "Jedno źródło prawdy: konsolidacja danych z CRM, ERP, analytics",
      "Alerty przy istotnych zmianach (spadek sprzedaży, wzrost kosztów)",
      "Panele dopasowane do roli: inne widoki dla CEO, sprzedaży, operacji",
      "Prognozy i trendy oparte na historycznych danych",
    ],
    caseStudyTitle: "Firma dystrybucyjna: 65h mniej na raportach miesięcznie",
    caseStudyDescription:
      "40-osobowy zespół handlowy generował raporty sprzedażowe ręcznie. Zbudowaliśmy automatyczny pipeline danych i interaktywny dashboard BI.",
    caseStudyMetrics: ["65h oszczędności/miesiąc", "Real-time dane sprzedażowe", "1 źródło prawdy"],
  },
  {
    slug: "nietypowe-procesy",
    title: "Nietypowe procesy i AI",
    headline: "Nietypowe procesy? Dopasujemy się.",
    subtitle:
      "Każdy projekt traktujemy indywidualnie. Zaczynamy od analizy, projektujemy rozwiązanie pod Twój biznes, nie pod szablon.",
    problems: [
      {
        title: "Procesy zbyt specyficzne",
        description: "Gotowe narzędzia nie pasują, a custom development wydaje się za drogi i za długi.",
      },
      {
        title: "Niszowa branża",
        description: "Brak gotowych rozwiązań na rynku, bo nikt nie zrozumiał Twoich procesów na tyle, żeby je zbudować.",
      },
      {
        title: "Ręczna praca uważana za nieautomatyzowaną",
        description: "Zespół przyzwyczaił się, że 'tak się robi'. Nikt nie pytał, czy da się inaczej.",
      },
      {
        title: "Dane w nietypowych formatach",
        description: "PDFy, skany, maile, formularze papierowe. Dane, które nie trafiają do żadnego systemu.",
      },
    ],
    offerings: [
      "Dedykowane automatyzacje pod specyficzne procesy",
      "AI do przetwarzania dokumentów (OCR, NLP, klasyfikacja)",
      "Custom integracje nietypowych systemów",
      "Automatyzacja branżowa: rozwiązania szyte na miarę",
      "Prototypowanie i proof of concept",
      "Rozwiązania hybrydowe: człowiek + AI tam, gdzie potrzeba",
    ],
    caseStudyTitle: "Biegunsport: AI w turystyce, gdzie nikt tego nie robi",
    caseStudyDescription:
      "Firma turystyczna tworzyła oferty ręcznie godzinami. Wdrożyliśmy AI do generowania spersonalizowanych ofert i automatycznych odpowiedzi na FAQ.",
    caseStudyMetrics: ["3× szybciej", "Zero szablonowych odpowiedzi", "Każda oferta spersonalizowana"],
  },
];
