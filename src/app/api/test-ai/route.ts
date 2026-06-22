import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const answerSchema = z.object({
  question: z.string(),
  category: z.string(),
  answer: z.string(),
  score: z.number().int().min(0),
});

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().max(100).optional().default(''),
  answers: z.array(answerSchema).min(1).max(20),
  totalScore: z.number().int().min(0),
  maxScore: z.number().int().min(1),
  level: z.string().max(100),
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

  const webhookUrl = process.env.AI_TEST_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn('[Test AI API] AI_TEST_WEBHOOK_URL not configured — skipping forward');
    return NextResponse.json({ message: 'OK' });
  }

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'User-Agent': 'PAH-TestAI/1.0' },
    body: JSON.stringify({
      ...parsed.data,
      source: 'test-gotowosci-ai',
      timestamp: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ message: 'Nie udało się wysłać wyników.' }, { status: 502 });
  }

  return NextResponse.json({ message: 'OK' });
}
