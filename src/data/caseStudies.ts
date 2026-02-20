export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  description: string;
  services: string[];
  results: string[];
  bgColor: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "automatyzacja-procesow-sprzedazowych",
    title: "Automatyzacja Procesów Sprzedażowych",
    client: "Firma z branży B2B SaaS",
    industry: "Technologia / SaaS",
    summary:
      "Wdrożenie kompleksowej automatyzacji lejka sprzedażowego — od generowania leadów po follow-up — z wykorzystaniem n8n, Lemlist i CRM.",
    description:
      "Klient borykał się z ręcznym zarządzaniem procesem sprzedaży, co skutkowało utratą leadów i niską konwersją. Zaprojektowaliśmy i wdrożyliśmy zautomatyzowany ekosystem, który integruje generowanie leadów z LinkedIn Sales Navigator, automatyczny cold mailing przez Lemlist, scoring leadów w CRM (Pipedrive) oraz inteligentne sekwencje follow-up oparte na AI. Całość połączono za pomocą n8n, tworząc spójny przepływ danych bez manualnej interwencji.",
    services: [
      "Architektura procesów biznesowych",
      "Integracja CRM (Pipedrive)",
      "Automatyzacja cold mailingu (Lemlist)",
      "Wdrożenie n8n",
      "AI-driven lead scoring",
    ],
    results: [
      "3x wzrost liczby obsługiwanych leadów miesięcznie",
      "60% redukcja czasu poświęcanego na manualne zadania sprzedażowe",
      "45% wzrost konwersji z cold mailingu",
      "Pełna automatyzacja follow-up — 0 utraconych leadów",
    ],
    bgColor: "#4ed5cd",
  },
  {
    slug: "cyfrowa-transformacja-operacji",
    title: "Cyfrowa Transformacja Operacji Wewnętrznych",
    client: "Średnia firma produkcyjna",
    industry: "Produkcja / Manufacturing",
    summary:
      "Kompleksowa digitalizacja obiegu dokumentów, raportowania i komunikacji wewnętrznej z wykorzystaniem Google Workspace, Airtable i Make.",
    description:
      "Firma produkcyjna z 80+ pracownikami działała w oparciu o rozproszone arkusze Excel, e-maile i papierowe formularze. Przeprowadziliśmy audyt technologiczny, a następnie wdrożyliśmy centralny ekosystem IT oparty na Google Workspace i Airtable. Zautomatyzowaliśmy obieg dokumentów, raportowanie produkcji oraz komunikację między działami za pomocą Make (Integromat). Dodatkowo wdrożyliśmy dashboardy analityczne pozwalające zarządowi monitorować KPI w czasie rzeczywistym.",
    services: [
      "Audyt technologiczny",
      "Wdrożenie Google Workspace",
      "Konfiguracja Airtable",
      "Automatyzacje Make (Integromat)",
      "Dashboardy analityczne",
      "Szkolenia pracowników",
    ],
    results: [
      "80% redukcja czasu obiegu dokumentów",
      "Eliminacja papierowych formularzy w 3 miesiące",
      "Real-time dostęp do KPI dla zarządu",
      "30% wzrost efektywności komunikacji między działami",
    ],
    bgColor: "#a78bfa",
  },
];
