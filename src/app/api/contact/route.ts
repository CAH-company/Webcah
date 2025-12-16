import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import nodemailer from 'nodemailer';

// Rate limiting: 5 requests per 15 minutes
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '15 m'),
  analytics: true,
});

// Data validation schema
const contactSchema = z.object({
  fullName: z.string().min(2, 'Imię musi mieć min. 2 znaki').max(100),
  email: z.string().email('Nieprawidłowy email').max(255),
  phone: z.string().regex(/^\+?[0-9\s-]{9,20}$/, 'Nieprawidłowy numer').optional().or(z.literal('')),
  company: z.string().max(100).optional().or(z.literal('')),
  message: z.string().min(10, 'Wiadomość musi mieć min. 10 znaków').max(2000),
});

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
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
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': remaining.toString(),
            'X-RateLimit-Reset': new Date(reset).toISOString(),
          }
        }
      );
    }

    // 2. CSRF Protection
    const origin = request.headers.get('origin');
    const allowedOrigins = [
      process.env.NEXT_PUBLIC_SITE_URL,
      'https://cah.pl',
      'https://www.cah.pl',
      process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : null,
    ].filter(Boolean) as string[];

    if (origin && !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        { message: 'Niedozwolone źródło zapytania' },
        { status: 403 }
      );
    }

    // 3. Data validation
    const body = await request.json().catch(() => null);
    const validation = contactSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { 
          message: 'Nieprawidłowe dane w formularzu',
          errors: validation.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    const { fullName, email, phone, company, message } = validation.data;

    // 4. Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@cah.pl',
      to: process.env.CONTACT_EMAIL || 'hello@cah.pl',
      subject: `Nowe zapytanie kontaktowe od ${fullName}`,
      html: `
        <h2>Nowe zapytanie z formularza kontaktowego</h2>
        <p><strong>Imię i nazwisko:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Nie podano'}</p>
        <p><strong>Firma:</strong> ${company || 'Nie podano'}</p>
        <hr>
        <p><strong>Wiadomość:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Wysłano z IP: ${ip} | ${new Date().toISOString()}</small></p>
      `,
      text: `
        Nowe zapytanie kontaktowe
        
        Imię: ${fullName}
        Email: ${email}
        Telefon: ${phone || 'Nie podano'}
        Firma: ${company || 'Nie podano'}
        
        Wiadomość:
        ${message}
        
        IP: ${ip} | ${new Date().toISOString()}
      `,
    });

    // 5. Optional: Save to database or webhook backup
    if (process.env.WEBHOOK_URL) {
      await fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...validation.data, ip, timestamp: new Date().toISOString() }),
      }).catch(err => console.error('Webhook error:', err));
    }

    return NextResponse.json({ 
      message: 'Zgłoszenie wysłane. Odezwiemy się w ciągu 24h!' 
    });

  } catch (error) {
    console.error('[Contact API Error]', error);
    return NextResponse.json(
      { message: 'Wystąpił błąd serwera. Spróbuj ponownie.' },
      { status: 500 }
    );
  }
}
