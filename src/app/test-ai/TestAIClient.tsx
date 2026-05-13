'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';

const ACCENT = '#4ed5cd';

const QUESTIONS = [
  {
    category: 'Obszar A: Świadomość i strategia',
    question: 'Czy w Waszej firmie ktoś odpowiada za wdrażanie nowych technologii lub AI?',
    options: [
      { label: 'Nie, nikt się tym nie zajmuje', score: 0 },
      { label: 'Zajmuje się tym właściciel/zarząd doraźnie', score: 1 },
      { label: 'Mamy osobę, która tym koordynuje obok innych zadań', score: 2 },
      { label: 'Mamy dedykowaną osobę lub zespół', score: 3 },
    ],
  },
  {
    category: 'Obszar A: Świadomość i strategia',
    question: 'Jak często rozmawiacie w firmie o tym, jak AI mogłoby wpłynąć na Wasz biznes?',
    options: [
      { label: 'Wcale lub bardzo rzadko', score: 0 },
      { label: 'Czasem, przy okazji', score: 1 },
      { label: 'Regularnie, ale bez konkretów', score: 2 },
      { label: 'Mamy konkretne plany lub strategię', score: 3 },
    ],
  },
  {
    category: 'Obszar A: Świadomość i strategia',
    question: 'Czy znacie 3 największe zagrożenia dla Waszej branży związane z AI w ciągu 2 lat?',
    options: [
      { label: 'Nie zastanawialiśmy się nad tym', score: 0 },
      { label: 'Mamy ogólne przeczucia', score: 1 },
      { label: 'Tak, ale nie mamy planu reakcji', score: 2 },
      { label: 'Tak, i przygotowujemy odpowiedź', score: 3 },
    ],
  },
  {
    category: 'Obszar B: Dane i procesy',
    question: 'Jak wyglądają Wasze procesy operacyjne (sprzedaż, obsługa klienta, księgowość)?',
    options: [
      { label: 'Głównie ręcznie, Excel i papier', score: 0 },
      { label: 'Mamy kilka narzędzi, ale działają osobno', score: 1 },
      { label: 'Większość procesów jest w systemach, częściowo zintegrowanych', score: 2 },
      { label: 'Procesy są zdigitalizowane i zintegrowane', score: 3 },
    ],
  },
  {
    category: 'Obszar B: Dane i procesy',
    question: 'Czy macie zebrane dane o klientach, sprzedaży, produktach w jednym miejscu?',
    options: [
      { label: 'Dane są rozproszone, trudno je zebrać', score: 0 },
      { label: 'Są w kilku systemach, ale da się to zrobić', score: 1 },
      { label: 'Mamy CRM/ERP gdzie większość danych jest spójna', score: 2 },
      { label: 'Mamy uporządkowaną bazę gotową do analiz', score: 3 },
    ],
  },
  {
    category: 'Obszar B: Dane i procesy',
    question: 'Czy ktoś w firmie używa już narzędzi AI (ChatGPT, Copilot, automatyzacje) w codziennej pracy?',
    options: [
      { label: 'Nie, nikt', score: 0 },
      { label: 'Pojedyncze osoby, prywatnie', score: 1 },
      { label: 'Kilka osób, ale bez systemu', score: 2 },
      { label: 'Tak, świadomie i z politykami firmy', score: 3 },
    ],
  },
  {
    category: 'Obszar C: Gotowość do zmiany',
    question: 'Jaki budżet rocznie przeznaczacie na narzędzia cyfrowe i technologię?',
    options: [
      { label: 'Mniej niż 5 tys. zł lub nie wiemy', score: 0 },
      { label: '5–20 tys. zł', score: 1 },
      { label: '20–100 tys. zł', score: 2 },
      { label: 'Powyżej 100 tys. zł', score: 3 },
    ],
  },
  {
    category: 'Obszar C: Gotowość do zmiany',
    question: 'Jak Wasz zespół reaguje na nowe narzędzia i zmiany w procesach?',
    options: [
      { label: 'Z dużym oporem, ciężko cokolwiek wdrożyć', score: 0 },
      { label: 'Część się opiera, część akceptuje', score: 1 },
      { label: 'Większość jest otwarta przy dobrym wdrożeniu', score: 2 },
      { label: 'Zespół sam zgłasza pomysły na usprawnienia', score: 3 },
    ],
  },
  {
    category: 'Obszar C: Gotowość do zmiany',
    question: 'Co najbardziej powstrzymuje Was przed wdrożeniem AI?',
    options: [
      { label: 'Nie wiemy od czego zacząć', score: 0 },
      { label: 'Brak czasu i zasobów', score: 1 },
      { label: 'Niepewność co do ROI i zwrotu', score: 2 },
      { label: 'Nic — szukamy konkretnych rozwiązań', score: 3 },
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
          name, email,
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
      <main className="min-h-screen bg-[#0a0a0a] flex flex-col px-6 pt-28 pb-12 md:pt-32 md:pb-20">
        {/* Progress */}
        <div className="max-w-2xl w-full mx-auto mb-12">
          <div className="flex items-center justify-between mb-3">
            {step > 0 ? (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-sm"
              >
                <ArrowLeft size={14} /> Wróć
              </button>
            ) : (
              <div />
            )}
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
        <button
          onClick={() => setPhase('quiz')}
          className="flex items-center gap-2 text-white/30 hover:text-white transition-colors text-sm mb-10"
        >
          <ArrowLeft size={14} /> Wróć do testu
        </button>
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
            { key: 'name', label: 'Imię *', type: 'text', value: name, setter: setName, placeholder: 'Jan', required: true },
            { key: 'email', label: 'Email *', type: 'email', value: email, setter: setEmail, placeholder: 'jan@firma.pl', required: true },
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
