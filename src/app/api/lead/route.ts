import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const leadSchema = z.object({
  fullName: z.string().min(2, 'Imię musi mieć min. 2 znaki').max(100),
  phone: z.string().regex(/^\+?[0-9\s-]{9,20}$/, 'Nieprawidłowy numer telefonu'),
});

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: 'Nieprawidłowe dane', errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('[Lead API] WEBHOOK_URL is not configured');
    return NextResponse.json({ message: 'Błąd konfiguracji serwera.' }, { status: 500 });
  }

  const webhookResponse = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'CAH-Webcah-Lead-Popup/1.0',
    },
    body: JSON.stringify({
      ...parsed.data,
      source: 'popup',
      metadata: {
        timestamp: new Date().toISOString(),
        userAgent: request.headers.get('user-agent') || 'unknown',
      },
    }),
  });

  if (!webhookResponse.ok) {
    return NextResponse.json({ message: 'Nie udało się wysłać zgłoszenia.' }, { status: 502 });
  }

  return NextResponse.json({ message: 'OK' });
}
