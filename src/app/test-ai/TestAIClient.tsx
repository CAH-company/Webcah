'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';

const ACCENT = '#4ed5cd';

const QUESTIONS = [
  {
    category: 'Struktura firmy',
    question: 'Ile osób liczy Twoja firma?',
    options: [
      { label: 'Do 10 osób', score: 1 },
      { label: '11–30 osób', score: 2 },
      { label: '31–50 osób', score: 3 },
      { label: '51+ osób', score: 2 },
    ],
  },
  {
    category: 'Narzędzia i CRM',
    question: 'Czy korzystacie z systemu CRM?',
    options: [
      { label: 'Tak, aktywnie używamy', score: 4 },
      { label: 'Mamy, ale mało kto z niego korzysta', score: 2 },
      { label: 'Nie, używamy Excela lub maile', score: 1 },
      { label: 'Nie wiem co to CRM', score: 0 },
    ],
  },
  {
    category: 'Zarządzanie zadaniami',
    question: 'Jak zarządzacie zadaniami i projektami w firmie?',
    options: [
      { label: 'Dedykowane narzędzie (Asana, Monday, Notion…)', score: 3 },
      { label: 'Arkusze Google / Excel', score: 2 },
      { label: 'Maile i komunikatory (WhatsApp, Slack)', score: 1 },
      { label: 'Brak systemu — każdy robi po swojemu', score: 0 },
    ],
  },
  {
    category: 'Koszty narzędzi',
    question: 'Ile płatnych narzędzi (SaaS) opłacacie miesięcznie?',
    options: [
      { label: '1–5 narzędzi', score: 1 },
      { label: '6–10 narzędzi', score: 2 },
      { label: '11–20 narzędzi', score: 3 },
      { label: 'Nie wiem dokładnie', score: 1 },
    ],
  },
  {
    category: 'Ręczna praca',
    question: 'Ile czasu tygodniowo zespół spędza na ręcznym kopiowaniu i przepisywaniu danych?',
    options: [
      { label: 'Prawie wcale', score: 4 },
      { label: '2–5 godzin', score: 3 },
      { label: '5–15 godzin', score: 1 },
      { label: 'Ponad 15 godzin', score: 0 },
    ],
  },
  {
    category: 'Dane i raportowanie',
    question: 'Jak właściciel lub CEO ma dostęp do kluczowych danych biznesowych?',
    options: [
      { label: 'Mam dashboard — dane zawsze pod ręką', score: 4 },
      { label: 'Pytam zespół gdy potrzebuję', score: 2 },
      { label: 'Zbieram dane raz w miesiącu', score: 1 },
      { label: 'Nie mam dobrego wglądu w dane', score: 0 },
    ],
  },
  {
    category: 'AI w firmie',
    question: 'Czy ktoś w firmie regularnie używa AI w codziennej pracy?',
    options: [
      { label: 'Tak, wiele osób regularnie', score: 4 },
      { label: 'Kilka osób eksperymentuje', score: 3 },
      { label: 'Sporadycznie — jeden-dwa przypadki', score: 1 },
      { label: 'Nikt nie używa AI', score: 0 },
    ],
  },
  {
    category: 'Adaptacja technologiczna',
    question: 'Jak firma reaguje na nowe narzędzia i technologie?',
    options: [
      { label: 'Aktywnie szukamy nowych rozwiązań', score: 4 },
      { label: 'Wdrażamy gdy widzimy konkretną korzyść', score: 3 },
      { label: 'Czekamy aż inni sprawdzą', score: 1 },
      { label: 'Zmiany technologiczne to u nas problem', score: 0 },
    ],
  },
  {
    category: 'Dane o klientach',
    question: 'Czy firma zbiera i analizuje dane o klientach i procesach?',
    options: [
      { label: 'Tak, regularnie i świadomie', score: 4 },
      { label: 'Zbieramy, ale rzadko analizujemy', score: 2 },
      { label: 'Tylko podstawowe dane', score: 1 },
      { label: 'Prawie wcale', score: 0 },
    ],
  },
];

const MAX_SCORE = QUESTIONS.reduce((sum, q) => sum + Math.max(...q.options.map((o) => o.score)), 0);

type Level = { label: string; sublabel: string; description: string; percent: number };

function getLevel(score: number): Level {
  const percent = Math.round((score / MAX_SCORE) * 100);
  if (percent >= 79) return {
    label: 'Cyfrowo dojrzały',
    sublabel: 'Poziom 4 / 4',
    description: 'Firma ma solidne podstawy technologiczne. Raport wskaże, jak wdrożyć AI strategicznie i wyprzedzić konkurencję.',
    percent,
  };
  if (percent >= 55) return {
    label: 'Na dobrej drodze',
    sublabel: 'Poziom 3 / 4',
    description: 'Masz fundament — kilka kluczowych kroków dzieli Cię od pełnej dojrzałości cyfrowej.',
    percent,
  };
  if (percent >= 27) return {
    label: 'Rozwijasz się cyfrowo',
    sublabel: 'Poziom 2 / 4',
    description: 'Dobry punkt startowy. Raport wskaże gdzie skupić uwagę, żeby przyspieszyć.',
    percent,
  };
  return {
    label: 'Cyfrowy Startup',
    sublabel: 'Poziom 1 / 4',
    description: 'Dużo miejsca na wzrost — i dużo do zyskania. Raport pokaże od czego zacząć.',
    percent,
  };
}

type Answer = { label: string; score: number };
type Phase = 'intro' | 'quiz' | 'gate' | 'done';

export function TestAIClient() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const totalScore = Object.values(answers).reduce((sum, a) => sum + a.score, 0);
  const level = getLevel(totalScore);

  const selectAnswer = (idx: number, answer: Answer) => {
    setSelectedIdx(idx);
    setTimeout(() => {
      setAnswers((prev) => ({ ...prev, [step]: answer }));
      setSelectedIdx(null);
      if (step < QUESTIONS.length - 1) {
        setStep((s) => s + 1);
      } else {
        setPhase('gate');
      }
    }, 280);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/test-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, email, company,
          answers: QUESTIONS.map((q, i) => ({
            question: q.question,
            category: q.category,
            answer: answers[i]?.label ?? '',
            score: answers[i]?.score ?? 0,
          })),
          totalScore,
          maxScore: MAX_SCORE,
          level: level.label,
        }),
      });
      if (res.ok) setPhase('done');
      else setError('Coś poszło nie tak. Spróbuj ponownie.');
    } catch {
      setError('Błąd połączenia. Spróbuj ponownie.');
    } finally {
      setSubmitting(false);
    }
  };

  // ── Intro ──────────────────────────────────────────────────────────────────
  if (phase === 'intro') return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-xl w-full text-center">
        <p className="text-xs uppercase tracking-[0.3em] font-bold brand-font mb-6" style={{ color: ACCENT }}>
          POLAND AUTOMATION HUB
        </p>
        <h1 className="text-4xl md:text-6xl font-bold brand-font leading-[1.05] mb-6">
          Test Gotowości<br />Twojej Firmy na AI
        </h1>
        <p className="text-white/45 text-lg leading-relaxed mb-4 max-w-sm mx-auto">
          9 pytań · ok. 3 minuty
        </p>
        <p className="text-white/30 text-sm leading-relaxed mb-12 max-w-sm mx-auto">
          Na końcu możesz zostawić email i otrzymać personalizowany raport z rekomendacjami dla Twojej firmy.
        </p>
        <button
          onClick={() => setPhase('quiz')}
          className="group inline-flex items-center gap-4 px-8 py-4 text-black font-bold uppercase tracking-widest text-sm brand-font hover:bg-white transition-colors"
          style={{ backgroundColor: ACCENT }}
        >
          Rozpocznij test
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </main>
  );

  // ── Quiz ───────────────────────────────────────────────────────────────────
  if (phase === 'quiz') {
    const q = QUESTIONS[step];
    const progressPct = (step / QUESTIONS.length) * 100;
    return (
      <main className="min-h-screen bg-[#0a0a0a] flex flex-col px-6 py-12 md:py-20">
        {/* Progress */}
        <div className="max-w-2xl w-full mx-auto mb-12">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => (step > 0 ? setStep((s) => s - 1) : setPhase('intro'))}
              className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft size={14} /> Wróć
            </button>
            <span className="text-white/30 text-xs brand-font uppercase tracking-widest">
              {step + 1} / {QUESTIONS.length}
            </span>
          </div>
          <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%`, backgroundColor: ACCENT }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="max-w-2xl w-full mx-auto flex-1">
          <p className="text-xs uppercase tracking-[0.25em] font-bold brand-font mb-5" style={{ color: ACCENT }}>
            {q.category}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold brand-font leading-snug mb-10">
            {q.question}
          </h2>
          <div className="space-y-3">
            {q.options.map((opt, idx) => {
              const isActive = selectedIdx === idx;
              const isPrev = answers[step]?.label === opt.label && selectedIdx === null;
              return (
                <button
                  key={opt.label}
                  onClick={() => selectAnswer(idx, { label: opt.label, score: opt.score })}
                  className="w-full text-left px-6 py-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group"
                  style={
                    isActive
                      ? { backgroundColor: ACCENT, borderColor: ACCENT, color: '#000' }
                      : isPrev
                      ? { borderColor: 'rgba(255,255,255,0.30)', backgroundColor: 'rgba(255,255,255,0.04)', color: '#fff' }
                      : { borderColor: 'rgba(255,255,255,0.08)', backgroundColor: 'rgba(255,255,255,0.01)', color: 'rgba(255,255,255,0.65)' }
                  }
                >
                  <span className="text-sm md:text-base font-medium leading-snug">{opt.label}</span>
                  <ChevronRight
                    size={16}
                    className={`shrink-0 ml-4 transition-transform group-hover:translate-x-1 ${isActive ? 'text-black' : 'text-white/15'}`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </main>
    );
  }

  // ── Gate ───────────────────────────────────────────────────────────────────
  if (phase === 'gate') return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-lg w-full">
        <p className="text-xs uppercase tracking-[0.25em] font-bold brand-font mb-6 text-center" style={{ color: ACCENT }}>
          TWOJE WYNIKI SĄ GOTOWE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold brand-font leading-tight mb-1 text-center">
          {level.label}
        </h2>
        <p className="text-white/35 text-sm text-center mb-8">{level.sublabel}</p>

        {/* Score bar */}
        <div className="mb-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{ width: `${level.percent}%`, backgroundColor: ACCENT }}
          />
        </div>
        <p className="text-white/30 text-xs text-right mb-10">{level.percent}% gotowości na AI</p>

        <p className="text-white/50 text-sm leading-relaxed mb-10 text-center">
          {level.description}
        </p>

        <div className="border border-white/10 rounded-2xl p-6 mb-8 text-center">
          <p className="text-white/70 text-sm leading-relaxed">
            Zostaw imię i email — prześlemy Ci bezpłatny raport z konkretnymi rekomendacjami dla Twojej firmy.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-0">
          {[
            { key: 'name', label: 'Imię i Nazwisko *', type: 'text', value: name, setter: setName, placeholder: 'Jan Kowalski', required: true },
            { key: 'email', label: 'Email *', type: 'email', value: email, setter: setEmail, placeholder: 'jan@firma.pl', required: true },
            { key: 'company', label: 'Nazwa Firmy', type: 'text', value: company, setter: setCompany, placeholder: 'Twoja Firma sp. z o.o.', required: false },
          ].map((f) => (
            <div key={f.key} className="py-4 border-b border-white/10">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 brand-font">
                {f.label}
              </label>
              <input
                type={f.type}
                value={f.value}
                onChange={(e) => f.setter(e.target.value)}
                required={f.required}
                placeholder={f.placeholder}
                className="w-full bg-transparent text-white placeholder-white/20 text-base focus:outline-none"
              />
            </div>
          ))}

          {error && <p className="text-red-400 text-sm pt-4">{error}</p>}

          <div className="pt-8">
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 text-black font-bold uppercase tracking-widest text-sm brand-font hover:bg-white transition-colors flex items-center justify-center gap-3 group disabled:opacity-60"
              style={{ backgroundColor: ACCENT }}
            >
              {submitting ? 'Wysyłanie...' : 'Wyślij mi raport'}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <p className="text-white/20 text-xs text-center mt-4">
            Bez spamu. Tylko jeden raport od nas.
          </p>
        </form>
      </div>
    </main>
  );

  // ── Done ───────────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 py-24 text-center">
      <CheckCircle size={56} className="mb-8" style={{ color: ACCENT }} />
      <p className="text-xs uppercase tracking-[0.3em] font-bold brand-font mb-4" style={{ color: ACCENT }}>
        RAPORT W DRODZE
      </p>
      <h2 className="text-3xl md:text-5xl font-bold brand-font mb-4">
        Sprawdź skrzynkę.
      </h2>
      <p className="text-white/40 text-base mb-4 max-w-xs leading-relaxed">
        Personalizowany raport dotrze w ciągu kilku minut.
      </p>
      <p className="text-white/25 text-sm mb-12">
        Nie widzisz? Sprawdź folder spam.
      </p>
      <Link
        href="/"
        className="text-sm font-bold brand-font uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors"
        style={{ color: ACCENT }}
      >
        <ArrowLeft size={14} /> Wróć na stronę PAH
      </Link>
    </main>
  );
}
