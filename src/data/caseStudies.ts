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
    slug: "automatyczne-raporty-kampanii",
    industry: "Marketing",
    metric: "20h",
    metricLabel: "zaoszczędzone tygodniowo",
    projectName: "Automatyczne raporty kampanii AI",
    client: "PixelFlow Agency",
    about:
      "PixelFlow Agency to krakowska agencja performance marketingu obsługująca kilkunastu klientów z sektora e-commerce i B2B. Specjalizuje się w kampaniach Google Ads i Meta, dostarczając klientom regularne raporty efektywności i rekomendacje optymalizacyjne. Wraz ze wzrostem portfolio klientów, cotygodniowe raportowanie stało się największym wąskim gardłem agencji — pochłaniało zasoby, które powinny trafiać w pracę strategiczną.",
    teaser:
      "Koniec z ręcznym zbieraniem danych. Klienci dostają gotowe raporty PDF zanim zdążą zapytać.",
    challenge:
      "Agencja obsługująca kilkunastu klientów spędzała każdy poniedziałek na ręcznym zbieraniu danych z Google Ads, Meta i Analytics, składaniu raportów w Excelu i wysyłaniu ich mailem. Praca zajmowała 4–5h tygodniowo na każdego klienta.",
    solution:
      "Zbudowaliśmy w pełni automatyczny pipeline: n8n zbiera dane ze wszystkich platform reklamowych, AI analizuje wyniki i generuje narracyjne podsumowanie, a gotowe raporty PDF trafiają do klientów w każdy poniedziałek o 8:00 — bez żadnej interwencji.",
    results: [
      "20h zaoszczędzone tygodniowo przy obsłudze całego portfolio klientów",
      "Raporty wysyłane automatycznie o ustalonej godzinie",
      "AI generuje narracyjne wnioski i rekomendacje do każdego raportu",
      "Zero błędów wynikających z ręcznego przepisywania danych",
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
