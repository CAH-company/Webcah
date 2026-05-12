'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ACCENT = '#4ed5cd';

const NEXT_STEPS = [
  'Tak, chcę omówić kolejne kroki',
  'Możliwe w przyszłości',
  'Jeszcze nie wiem',
  'Nie w tej chwili',
];

function NpsButtons({ value, onChange }: { value: number | null; onChange: (v: number) => void }) {
  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {Array.from({ length: 11 }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onChange(i)}
            className="w-10 h-10 rounded-lg text-sm font-bold brand-font transition-all border"
            style={
              value === i
                ? { backgroundColor: ACCENT, borderColor: ACCENT, color: '#000' }
                : { borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)' }
            }
          >
            {i}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-white/25 text-xs">Zdecydowanie nie</span>
        <span className="text-white/25 text-xs">Zdecydowanie tak</span>
      </div>
    </div>
  );
}

function RatingButtons({ value, onChange }: { value: number | null; onChange: (v: number) => void }) {
  return (
    <div className="flex gap-3">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          className="w-12 h-12 rounded-xl text-base font-bold brand-font transition-all border"
          style={
            value !== null && value >= n
              ? { backgroundColor: ACCENT, borderColor: ACCENT, color: '#000' }
              : { borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.4)' }
          }
        >
          {n}
        </button>
      ))}
    </div>
  );
}

export function AnkietaClient() {
  const [nps, setNps] = useState<number | null>(null);
  const [communication, setCommunication] = useState<number | null>(null);
  const [expectations, setExpectations] = useState<number | null>(null);
  const [valueForMoney, setValueForMoney] = useState<number | null>(null);
  const [whatWentWell, setWhatWentWell] = useState('');
  const [improvements, setImprovements] = useState('');
  const [nextSteps, setNextSteps] = useState('');
  const [firma, setFirma] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const canSubmit = nps !== null && communication !== null && expectations !== null && valueForMoney !== null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/ankieta', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nps, communication, expectations, valueForMoney, whatWentWell, improvements, nextSteps, firma }),
      });
      if (res.ok) setDone(true);
      else setError('Coś poszło nie tak. Spróbuj ponownie.');
    } catch {
      setError('Błąd połączenia. Spróbuj ponownie.');
    } finally {
      setSubmitting(false);
    }
  };

  if (done) return (
    <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 py-24 text-center">
      <CheckCircle size={56} className="mb-8" style={{ color: ACCENT }} />
      <p className="text-xs uppercase tracking-[0.3em] font-bold brand-font mb-4" style={{ color: ACCENT }}>
        DZIĘKUJEMY
      </p>
      <h2 className="text-3xl md:text-5xl font-bold brand-font mb-6">
        Opinia zapisana.
      </h2>
      <p className="text-white/40 text-base mb-12 max-w-xs leading-relaxed">
        Twoja opinia pomaga nam świadczyć lepsze usługi. Doceniamy każdą odpowiedź.
      </p>
      <Link
        href="/"
        className="text-sm font-bold brand-font uppercase tracking-widest hover:text-white transition-colors"
        style={{ color: ACCENT }}
      >
        ← Wróć na stronę PAH
      </Link>
    </main>
  );

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-16 md:py-24">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.3em] font-bold brand-font mb-4" style={{ color: ACCENT }}>
            POLAND AUTOMATION HUB
          </p>
          <h1 className="text-4xl md:text-5xl font-bold brand-font leading-[1.05] mb-4">
            Ankieta satysfakcji
          </h1>
          <p className="text-white/40 text-base leading-relaxed">
            Zajmie to ok. 2 minuty. Twoja opinia bezpośrednio wpływa na jakość naszych usług.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-0">

          {/* Firma (opcjonalne) */}
          <div className="py-6 border-b border-white/10">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 brand-font">
              Nazwa Firmy <span className="text-white/20">(opcjonalne)</span>
            </label>
            <input
              type="text"
              value={firma}
              onChange={e => setFirma(e.target.value)}
              maxLength={100}
              placeholder="Twoja Firma sp. z o.o."
              className="w-full bg-transparent text-white placeholder-white/20 text-base focus:outline-none"
            />
          </div>

          {/* NPS */}
          <div className="py-8 border-b border-white/10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-1 brand-font">Pytanie 1 / 4 *</p>
            <p className="text-lg font-bold brand-font mb-6 leading-snug">
              Jak bardzo polecił(a)byś Poland Automation Hub znajomym lub partnerom biznesowym?
            </p>
            <NpsButtons value={nps} onChange={setNps} />
          </div>

          {/* Komunikacja */}
          <div className="py-8 border-b border-white/10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-1 brand-font">Pytanie 2 / 4 *</p>
            <p className="text-lg font-bold brand-font mb-6 leading-snug">
              Jak oceniasz jakość komunikacji z naszym zespołem?
            </p>
            <RatingButtons value={communication} onChange={setCommunication} />
            <div className="flex justify-between mt-2">
              <span className="text-white/25 text-xs">Słaba</span>
              <span className="text-white/25 text-xs">Doskonała</span>
            </div>
          </div>

          {/* Oczekiwania */}
          <div className="py-8 border-b border-white/10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-1 brand-font">Pytanie 3 / 4 *</p>
            <p className="text-lg font-bold brand-font mb-6 leading-snug">
              Czy wyniki i raport spełniły Twoje oczekiwania?
            </p>
            <RatingButtons value={expectations} onChange={setExpectations} />
            <div className="flex justify-between mt-2">
              <span className="text-white/25 text-xs">Poniżej oczekiwań</span>
              <span className="text-white/25 text-xs">Przekroczyły oczekiwania</span>
            </div>
          </div>

          {/* Cena/jakość */}
          <div className="py-8 border-b border-white/10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-1 brand-font">Pytanie 4 / 4 *</p>
            <p className="text-lg font-bold brand-font mb-6 leading-snug">
              Jak oceniasz stosunek jakości do ceny?
            </p>
            <RatingButtons value={valueForMoney} onChange={setValueForMoney} />
            <div className="flex justify-between mt-2">
              <span className="text-white/25 text-xs">Niezadowalający</span>
              <span className="text-white/25 text-xs">Bardzo dobry</span>
            </div>
          </div>

          {/* Co poszło dobrze */}
          <div className="py-6 border-b border-white/10">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 brand-font">
              Co zrobiliśmy szczególnie dobrze? <span className="text-white/20">(opcjonalne)</span>
            </label>
            <textarea
              rows={3}
              value={whatWentWell}
              onChange={e => setWhatWentWell(e.target.value)}
              maxLength={2000}
              placeholder="Opisz co Cię pozytywnie zaskoczyło..."
              className="w-full bg-transparent text-white placeholder-white/20 text-base focus:outline-none resize-none"
            />
          </div>

          {/* Co poprawić */}
          <div className="py-6 border-b border-white/10">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 brand-font">
              Co moglibyśmy zrobić lepiej? <span className="text-white/20">(opcjonalne)</span>
            </label>
            <textarea
              rows={3}
              value={improvements}
              onChange={e => setImprovements(e.target.value)}
              maxLength={2000}
              placeholder="Konstruktywna krytyka jest dla nas cenna..."
              className="w-full bg-transparent text-white placeholder-white/20 text-base focus:outline-none resize-none"
            />
          </div>

          {/* Dalsze kroki */}
          <div className="py-6 border-b border-white/10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4 brand-font">
              Czy planujesz kontynuować współpracę z PAH? <span className="text-white/20">(opcjonalne)</span>
            </p>
            <div className="space-y-2">
              {NEXT_STEPS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setNextSteps(option)}
                  className="w-full text-left px-5 py-3 rounded-xl border text-sm transition-all"
                  style={
                    nextSteps === option
                      ? { borderColor: ACCENT, color: ACCENT, backgroundColor: 'rgba(78,213,205,0.06)' }
                      : { borderColor: 'rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.50)' }
                  }
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="pt-8">
            {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
            {!canSubmit && (
              <p className="text-white/25 text-xs mb-4">* Uzupełnij pytania 1–4 żeby wysłać ankietę.</p>
            )}
            <button
              type="submit"
              disabled={submitting || !canSubmit}
              className="group flex items-center gap-4 text-black px-8 py-4 text-sm font-bold uppercase tracking-widest brand-font hover:bg-white transition-colors disabled:opacity-40"
              style={{ backgroundColor: ACCENT }}
            >
              {submitting ? 'Wysyłanie...' : 'Wyślij opinię'}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </form>
      </div>
    </main>
  );
}
