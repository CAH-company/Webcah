Projekt CAH (Cracow Automations Hub) zbudowany na Next.js (App Router) i Tailwind CSS. Interfejs korzysta z ikon Lucide oraz lokalnie ładowanej czcionki (next/font/local). Formularz kontaktowy wysyła dane na skonfigurowany webhook.

## Uruchomienie

```bash
npm install
npm run dev
# aplikacja będzie dostępna na http://localhost:3000
```

## Konfiguracja webhooka

Formularz kontaktowy przekazuje dane pod adres zdefiniowany w zmiennej środowiskowej:

- `WEBHOOK_URL` (preferowane) lub `NEXT_PUBLIC_WEBHOOK_URL`

Jeśli zmienna nie jest ustawiona, API zwróci błąd informujący o braku konfiguracji.

## Technologie

- Next.js 16 (App Router)
- Tailwind CSS
- Ikony: `lucide-react`
- Czcionka lokalna: DejaVu Sans (w `public/fonts`)
