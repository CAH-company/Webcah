import { NextRequest, NextResponse } from "next/server";

const webhookUrl = process.env.WEBHOOK_URL ?? process.env.NEXT_PUBLIC_WEBHOOK_URL;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { message: "Nieprawidłowe dane w formularzu." },
      { status: 400 },
    );
  }

  if (!webhookUrl) {
    return NextResponse.json(
      { message: "Brak adresu webhooka. Ustaw zmienną WEBHOOK_URL." },
      { status: 500 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const details = await response.text().catch(() => "Brak szczegółów");
      return NextResponse.json(
        { message: "Nie udało się przekazać danych do webhooka.", details },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Zgłoszenie wysłane." });
  } catch {
    return NextResponse.json(
      { message: "Wystąpił błąd podczas łączenia z webhookiem." },
      { status: 502 },
    );
  }
}
