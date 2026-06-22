import { TrendingDown, Clock, TrendingUp } from "lucide-react";
import type { ComponentType } from "react";

export type CaseStudy = {
  slug: string;
  industry: string;
  metric: string;
  metricLabel: string;
  projectName: string;
  client: string;
  about: string;
  teaser: string;
  challenge: string;
  solution: string;
  results: string[];
  Icon: ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "audyt-i-wdrozenie-infrastruktury-it",
    industry: "Szkolenia i coaching",
    metric: "−40%",
    metricLabel: "kosztów narzędzi IT",
    projectName: "Audyt i wdrożenie infrastruktury IT",
    client: "Perfect Circle",
    about:
      "Perfect Circle to polska firma z branży szkoleniowej i coachingowej prowadzona przez Marka Wzorka. Działa na rynku profesjonalnego rozwoju kadr — organizuje szkolenia, warsztaty i programy rozwojowe dla firm. Firma dynamicznie rosła, ale jej infrastruktura technologiczna nie nadążała za rozwojem. Pracownicy używali prywatnych kont Gmail, dokumenty były porozrzucane, a CRM działał błędnie. PAH wszedł jako partner technologiczny, który posprzątał ten chaos — szybko, profesjonalnie i bez zatrzymywania pracy firmy.",
    teaser:
      "Od chaosu na prywatnych Gmailach do profesjonalnej infrastruktury IT — wdrożone w jeden weekend, bez dnia przestoju.",
    challenge:
      "Pracownicy korzystali z prywatnych kont Gmail zamiast firmowych, pliki były porozrzucane po prywatnych dyskach, a wdrożony Pipedrive nie działał poprawnie — brak synchronizacji z kalendarzem i automatycznych przypomnień powodował, że leady ginęły w lejku i follow-upy się nie odbywały.",
    solution:
      "Wdrożyliśmy Google Workspace z domeną firmową i ustrukturyzowaliśmy zasoby cyfrowe na Google Drive. Naprawiliśmy konfigurację Pipedrive — integracja z Kalendarzem Google, automatyczne przypomnienia i lejek sprzedażowy skrojony pod procesy firmy. Całą migrację przeprowadziliśmy w trybie Zero Downtime — w poniedziałek rano zespół logował się do gotowego, działającego środowiska.",
    results: [
      "−40% kosztów narzędzi IT po konsolidacji środowiska pracy",
      "~12 godzin tygodniowo zaoszczędzone na ręcznym zarządzaniu",
      "0 dni przestoju — migracja przeprowadzona w trybie Zero Downtime",
      "Profesjonalna infrastruktura IT gotowa na dalsze skalowanie i automatyzacje",
    ],
    Icon: TrendingDown,
  },
  {
    slug: "automatyzacja-pozyskiwania-leadow",
    industry: "Eventy korporacyjne",
    metric: "100%",
    metricLabel: "leadów przechwytywanych automatycznie",
    projectName: "Automatyzacja pozyskiwania leadów",
    client: "Buddy's Events",
    about:
      "Buddy's Events to firma organizująca eventy korporacyjne i aktywności integracyjne dla firm. Kiedy trafili do nas, handlowiec działał bez żadnego systemu — brak CRM, brak ustrukturyzowanego procesu sprzedaży, brak kanału do aktywnego pozyskiwania klientów. Naszą rolą było nie tylko zbudowanie narzędzi, ale najpierw doradzenie, co w ogóle należy wdrożyć i jak przebudować podejście do sprzedaży. W ramach współpracy zaprojektowaliśmy i zbudowaliśmy całą infrastrukturę sprzedażową od zera — łącznie z nową stroną internetową.",
    teaser:
      "Od zera do działającego systemu sprzedaży: nowa strona, cold mailing i w pełni zautomatyzowany CRM.",
    challenge:
      "Handlowiec Buddy's Events nie miał żadnych narzędzi sprzedażowych. Brak CRM, brak procesu follow-up, brak kanału aktywnego pozyskiwania klientów. Firma nie wiedziała, od czego zacząć — potrzebowała najpierw diagnozy i strategii, a dopiero potem wdrożenia.",
    solution:
      "Doradziliśmy dobór całego stacku narzędziowego i wdrożyliśmy go od podstaw. Zaprojektowaliśmy i zbudowaliśmy nową stronę internetową, uruchomiliśmy 6 kampanii cold mailingowych w Lemlist (targeting: brand managerowie, HR, zakupy, marketing — sektory beauty, finansowy i przemysłowy) oraz zbudowaliśmy w pełni automatyczny pipeline na n8n: odpowiedź leada → webhook → zapis w Airtable CRM → natychmiastowy alert na Slacku. Codziennie rano system wysyła handlowcowi listę kontaktów zaplanowanych na ten dzień.",
    results: [
      "Kompletna infrastruktura sprzedażowa zbudowana od zera — nowa strona, CRM, cold mailing",
      "6 aktywnych kampanii cold mailingowych uruchomionych i skonfigurowanych przez PAH",
      "100% odpowiedzi automatycznie zapisywanych w CRM — zero ręcznego przepisywania",
      "Codzienne poranne przypomnienia na Slack — handlowiec zawsze wie, z kim dziś dzwonić",
    ],
    Icon: Clock,
  },
  {
    slug: "szkolenie-ai-i-automatyzacja",
    industry: "Turystyka",
    metric: "3×",
    metricLabel: "szybsze tworzenie ofert",
    projectName: "Szkolenie z AI i automatyzacji",
    client: "Biegunsport",
    about:
      "Biegunsport to firma turystyczna specjalizująca się w aktywnych wycieczkach i programach outdoorowych. Kiedy trafili do PAH, pracownicy spędzali dziesiątki godzin tygodniowo na ręcznym tworzeniu ofert, obsłudze powtarzających się zapytań klientów i przygotowywaniu materiałów marketingowych. Celem współpracy było praktyczne przeszkolenie całego zespołu z użycia narzędzi AI i automatyzacji — tak, żeby realne zadania firmy zaczęły działać szybciej i sprawniej już od następnego dnia roboczego.",
    teaser:
      "Praktyczne szkolenie z AI i automatyzacji dopasowane do realiów turystyki — cały zespół gotowy do działania od pierwszego dnia.",
    challenge:
      "Tworzenie spersonalizowanych ofert wycieczek zajmowało pracownikom nawet kilka godzin dziennie. Odpowiedzi na powtarzające się pytania klientów, opisywanie tras i przygotowywanie postów do social mediów — wszystko odbywało się ręcznie, bez żadnego wsparcia AI. Firma wiedziała, że narzędzia istnieją, ale nie wiedziała, jak je realnie wdrożyć.",
    solution:
      "Przeprowadziliśmy intensywne szkolenie skrojone pod realia branży turystycznej — od praktycznego użycia modeli językowych (ChatGPT, Claude) do codziennych zadań, przez automatyzację powtarzalnych procesów w n8n, po budowanie własnych szablonów i biblioteki promptów dla ofert wycieczek. Każde ćwiczenie opierało się na realnych przykładach z działalności Biegunsport.",
    results: [
      "3× szybsze tworzenie spersonalizowanych ofert wycieczek dzięki AI",
      "Automatyczne odpowiedzi na najczęstsze pytania klientów — bez udziału pracownika",
      "Własna biblioteka promptów i szablonów dopasowanych do branży turystycznej",
      "Cały zespół samodzielnie pracujący z narzędziami AI po zakończeniu szkolenia",
    ],
    Icon: TrendingUp,
  },
];
