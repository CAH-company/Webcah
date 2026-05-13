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
    slug: "automatyzacja-cyklu-sprzedazowego",
    industry: "Sprzedaż B2B",
    metric: "−80%",
    metricLabel: "czasu na powtarzalne zadania",
    projectName: "Automatyzacja cyklu sprzedażowego",
    client: "Perfect Circle",
    about:
      "Perfect Circle to warszawska firma konsultingowa specjalizująca się w doradztwie strategicznym dla spółek z sektora MŚP. Obsługując rosnące portfolio klientów, firma szybko napotkała granicę skalowalności — każdy nowy kontrakt generował proporcjonalnie więcej pracy administracyjnej, a handlowcy coraz więcej czasu spędzali na uzupełnianiu CRM zamiast na rozmowach z klientami. Celem współpracy z PAH było odchudzenie operacji i uwolnienie zespołu sprzedażowego do pracy, która realnie przynosi przychód.",
    teaser:
      "Wdrożyliśmy kompletny system automatyzacji procesów sprzedażowych — od leada po fakturę, bez udziału handlowca.",
    challenge:
      "Firma traciła dziesiątki godzin tygodniowo na ręczne prowadzenie CRM, tworzenie ofert i wysyłkę follow-upów. Handlowcy spędzali więcej czasu na administracji niż na rozmowach z klientami.",
    solution:
      "Zbudowaliśmy zautomatyzowany ekosystem oparty na Pipedrive i n8n. AI uczestniczy w spotkaniach, automatycznie je podsumowuje i aktualizuje CRM. System sam generuje spersonalizowane oferty i uruchamia sekwencje follow-up, gdy lead nie odpowiada.",
    results: [
      "−80% czasu poświęcanego na administrację sprzedażową",
      "Automatyczne podsumowania spotkań trafiające bezpośrednio do CRM",
      "Sekwencje follow-up uruchamiane bez udziału handlowca",
      "Pełna szczelność lejka — żaden lead nie gubi się w systemie",
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
    slug: "integracja-sklepu-z-erp",
    industry: "E-commerce",
    metric: "3×",
    metricLabel: "szybsza obsługa zamówień",
    projectName: "Integracja sklepu z ERP i CRM",
    client: "NordShop",
    about:
      "NordShop to rozwijający się sklep e-commerce z siedzibą w Poznaniu, oferujący produkty dla domu z segmentu premium. Przy kilkuset zamówieniach dziennie i trzech niepołączonych ze sobą systemach — sklepem WooCommerce, magazynem i CRM — obsługa każdego zamówienia wymagała ręcznej interwencji pracownika. Rosnąca skala sprzedaży sprawiała, że manualne procesy zaczęły generować błędy i opóźnienia niemożliwe do zaakceptowania przez klientów końcowych.",
    teaser:
      "Każde zamówienie obsługiwane w sekundy — faktura, magazyn i klient powiadamiany w jednym przepływie.",
    challenge:
      "Sklep internetowy z kilkuset zamówieniami dziennie działał na trzech niepołączonych systemach. Pracownicy ręcznie przepisywali dane między platformami — błędy były nieuniknione, a czas realizacji zbyt długi.",
    solution:
      "Zintegrowaliśmy WooCommerce, system magazynowy i CRM przez n8n. Każde nowe zamówienie automatycznie uruchamia cały przepływ: weryfikację płatności, wystawienie faktury, aktualizację magazynu, powiadomienie kuriera i e-mail do klienta — w ciągu kilku sekund.",
    results: [
      "3× szybsza obsługa każdego zamówienia",
      "Automatyczne faktury i aktualizacje stanów magazynowych",
      "Zero ręcznego przepisywania danych między systemami",
      "Klient otrzymuje potwierdzenie wysyłki w ciągu minut od złożenia zamówienia",
    ],
    Icon: TrendingUp,
  },
];
