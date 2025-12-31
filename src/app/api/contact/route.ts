import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Rate limiting:  5 requestów na 15 minut
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '15 m'),
  analytics: true,
});

// Walidacja danych
const contactSchema = z.object({
  fullName: z.string().min(2, 'Imię musi mieć min. 2 znaki').max(100),
  email: z.string().email('Nieprawidłowy email').max(255),
  phone: z.string().regex(/^\+?[0-9\s-]{9,20}$/, 'Nieprawidłowy numer').optional().or(z.literal('')),
  company: z.string().max(100).optional().or(z.literal('')),
  message: z.string().min(0, 'Wiadomość musi mieć min. 10 znaków').max(2000),
});

export async function POST(request: NextRequest) {
  try {
    // 1. Rate Limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 
               request.headers.get('x-real-ip') ?? 
               'unknown';
    const { success, limit, reset, remaining } = await ratelimit.limit(ip);
    
    if (!success) {
      return NextResponse.json(
        { message: 'Za dużo requestów. Spróbuj ponownie później.' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit. toString(),
            'X-RateLimit-Remaining': remaining. toString(),
            'X-RateLimit-Reset': new Date(reset).toISOString(),
          }
        }
      );
    }

    // 2. CSRF Protection
    const origin = request.headers.get('origin');
    const allowedOrigins = [
      process.env. NEXT_PUBLIC_SITE_URL,
      'https://www.cracovautomationhub.pl/',
      'https://cracovautomationhub.pl/',
      process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : null,
    ].filter(Boolean) as string[];

    if (origin && !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { message: 'Niedozwolone źródło zapytania' },
        { status: 403 }
      );
    }

    // 3.  Walidacja danych
    const body = await request.json().catch(() => null);
    const validation = contactSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { 
          message: 'Nieprawidłowe dane w formularzu',
          errors: validation. error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    // 4. Sprawdzenie czy webhook URL jest skonfigurowany
    const webhookUrl = process.env.WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.error('[Contact API] WEBHOOK_URL is not configured');
      return NextResponse.json(
        { message: 'Błąd konfiguracji serwera.  Skontaktuj się z administratorem.' },
        { status: 500 }
      );
    }

    // 5. Wysyłka na webhook
    const webhookPayload = {
      ... validation.data,
      metadata: {
        ip,
        timestamp: new Date().toISOString(),
        userAgent: request.headers.get('user-agent') || 'unknown',
      }
    };

    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'User-Agent': 'CAH-Webcah-Contact-Form/1.0',
      },
      body: JSON.stringify(webhookPayload),
    });

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text().catch(() => 'Brak szczegółów');
      console.error('[Contact API] Webhook error:', {
        status: webhookResponse.status,
        statusText: webhookResponse. statusText,
        body: errorText,
      });
      
      return NextResponse.json(
        { message: 'Nie udało się wysłać wiadomości.  Spróbuj ponownie później.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ 
      message: 'Zgłoszenie wysłane.  Odezwiemy się w ciągu 24h!' 
    });

  } catch (error) {
    console.error('[Contact API Error]', error);
    return NextResponse.json(
      { message: 'Wystąpił błąd serwera. Spróbuj ponownie.' },
      { status: 500 }
    );
  }
}