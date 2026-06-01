import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  firma: z.string().min(2).max(100),
  nps: z.number().int().min(0).max(10),
  communication: z.number().int().min(1).max(5),
  valueForMoney: z.number().int().min(1).max(5),
  mostValuable: z.string().max(2000).optional().default(''),
  whatWentWell: z.string().max(2000).optional().default(''),
  improvements: z.string().max(2000).optional().default(''),
  nextSteps: z.string().max(200).optional().default(''),
});

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: 'Nieprawidłowe dane', errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.SURVEY_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('[Ankieta API] SURVEY_WEBHOOK_URL not configured');
    return NextResponse.json({ message: 'Błąd konfiguracji serwera.' }, { status: 500 });
  }

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'User-Agent': 'PAH-Ankieta/1.0' },
    body: JSON.stringify({
      ...parsed.data,
      source: 'ankieta-satysfakcji',
      timestamp: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ message: 'Nie udało się wysłać odpowiedzi.' }, { status: 502 });
  }

  return NextResponse.json({ message: 'OK' });
}
