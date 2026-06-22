# Cracow Automations Hub - Next.js Application

Projekt CAH (Cracow Automations Hub) zbudowany na Next.js (App Router) i Tailwind CSS v4. Interfejs korzysta z ikon Lucide oraz lokalnie ładowanej czcionki (next/font/local).

## 🚀 Uruchomienie

```bash
npm install
npm run dev
# aplikacja będzie dostępna na http://localhost:3000
```

## 📦 Technologie

- **Next.js 16** (App Router) - Framework React z SSG/SSR
- **Tailwind CSS v4** - Utility-first CSS framework z custom colors
- **TypeScript** - Typy i bezpieczeństwo kodu
- **Lucide React** - Ikony
- **Zod** - Walidacja danych formularzy
- **Nodemailer** - Wysyłka emaili
- **Upstash Redis** - Rate limiting
- **DejaVu Sans** - Czcionka lokalna (w `src/app/fonts`)

## 🔧 Konfiguracja Zmiennych Środowiskowych

Skopiuj plik `.env.example` do `.env.local` i uzupełnij wymagane wartości:

```bash
cp .env.example .env.local
```

### Wymagane zmienne:

#### 1. Upstash Redis (Rate Limiting)

Rate limiting chroni formularz kontaktowy przed spamem (5 requestów na 15 minut).

**Setup:**
1. Załóż darmowe konto na [upstash.com](https://upstash.com/)
2. Utwórz nową bazę Redis
3. Skopiuj **REST URL** i **REST Token** z zakładki "Details"
4. Dodaj do `.env.local`:
```env
UPSTASH_REDIS_REST_URL=https://your-redis-url.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token_here
```

#### 2. SMTP (Wysyłka Emaili)

Formularz kontaktowy wysyła maile przez SMTP. Przykład konfiguracji dla Gmaila:

**Setup Gmail:**
1. Włącz 2FA w koncie Google
2. Wygeneruj App Password: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Dodaj do `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_16_character_app_password
SMTP_FROM=noreply@cah.pl
CONTACT_EMAIL=hello@cah.pl
```

**Inne dostawcy SMTP:**
- **SendGrid**: `smtp.sendgrid.net` (port 587)
- **Mailgun**: `smtp.mailgun.org` (port 587)
- **Amazon SES**: `email-smtp.region.amazonaws.com` (port 587)

#### 3. Opcjonalne Zmienne

```env
# Webhook backup (np. Slack, Discord, Zapier)
WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL

# URL produkcyjny (dla SEO i Open Graph)
NEXT_PUBLIC_SITE_URL=https://cah.pl
```

## 📄 Struktura Projektu

```
src/app/
├── page.tsx                 # Home (SSG)
├── uslugi/page.tsx         # Usługi (SSG)
├── o-nas/page.tsx          # O nas (SSG)
├── kontakt/page.tsx        # Kontakt (SSR z 'use client')
├── api/contact/route.ts    # Backend API z security
├── layout.tsx              # SEO metadata + JSON-LD
└── globals.css             # Tailwind + custom CSS variables

src/components/
├── Navigation.tsx           # Navigation z Link i usePathname
├── Footer.tsx              # Footer z Link
└── sections/               # Komponenty sekcji
    ├── HomeSection.tsx
    ├── ServicesSection.tsx
    ├── AboutSection.tsx
    └── ContactSection.tsx

public/
├── sitemap.xml             # SEO sitemap
├── robots.txt              # SEO robots
└── fonts/                  # Lokalne czcionki
```

## 🎨 SEO Improvements

### Metadata
- **Open Graph** - pełna integracja dla social media
- **Twitter Cards** - optymalizacja dla Twittera
- **JSON-LD** - structured data dla Google
- **Meta tags** - title, description, keywords

### Pliki SEO
- `public/sitemap.xml` - mapa strony dla crawlerów
- `public/robots.txt` - instrukcje dla botów

### Static Site Generation (SSG)
- `/` - Home (pre-rendered)
- `/uslugi` - Services (pre-rendered)
- `/o-nas` - About (pre-rendered)
- `/kontakt` - Contact (Server-Side Rendered dla formularza)

## 🔒 Bezpieczeństwo

### Backend API (`/api/contact`)

1. **Rate Limiting** - 5 requestów na 15 minut (Upstash Redis)
2. **CSRF Protection** - weryfikacja pochodzenia requestu
3. **Walidacja danych** - Zod schema validation
4. **Sanityzacja** - automatyczna przez Zod
5. **Error handling** - szczegółowe błędy dla użytkownika

### Formularz Kontaktowy

- Walidacja po stronie klienta i serwera
- Wyświetlanie szczegółowych błędów dla każdego pola
- Feedback dla rate limiting (429)
- `maxLength` na wszystkich inputach
- Disabled state podczas wysyłki

## 🏗️ Build i Deploy

### Build produkcyjny:
```bash
npm run build
npm start
```

### Deploy na Vercel:
```bash
# Vercel automatycznie wykrywa Next.js
vercel
```

**Pamiętaj:** Dodaj wszystkie zmienne środowiskowe w panelu Vercel → Settings → Environment Variables

## 📝 Rozwój

### Dodawanie nowej strony:
1. Utwórz folder w `src/app/nazwa-strony/`
2. Dodaj `page.tsx` z metadata
3. Użyj `export const metadata: Metadata = { ... }`
4. Dodaj link w `Navigation.tsx` i `Footer.tsx`
5. Zaktualizuj `public/sitemap.xml`

### Tailwind Custom Colors:
```tsx
// Zdefiniowane w globals.css:
bg-cah-accent     // #4ed5cd
bg-cah-bg         // #0a0a0a
bg-cah-bg-dark    // #050505
bg-cah-bg-card    // #111111

text-cah-accent
border-cah-accent
// ... itd.
```

## 📧 Kontakt

- **Email**: hello@cah.pl
- **LinkedIn**: /cracow-automations-hub
- **Lokalizacja**: Kraków, Polska



### Produkcja:
1. Dobre repo na serwer
2. Skonfiguruj plik .env
3. Zmień plik nginx na build odpowieni
4. Sprawdz czy webhook działa


## 📜 Licencja

© 2025 Cracow Automations Hub. All rights reserved.

