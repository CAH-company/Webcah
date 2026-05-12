'use client';

import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import { X, Phone, User, ArrowRight, CheckCircle } from 'lucide-react';

const DELAY_MS = process.env.NODE_ENV === 'development' ? 2_000 : 15_000;
const STORAGE_KEY = 'cah_lead_dismissed';

export function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, phone }),
      });

      if (res.ok) {
        setStatus('success');
        localStorage.setItem(STORAGE_KEY, '1');
        setTimeout(dismiss, 3000);
      } else {
        const data = await res.json().catch(() => null);
        setErrorMsg(data?.message || 'Coś poszło nie tak. Spróbuj ponownie.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Błąd połączenia. Spróbuj ponownie.');
      setStatus('error');
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] animate-slide-up">
      <div className="bg-[#0d1a1a] border border-[#4ed5cd]/25 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-[#4ed5cd] to-[#2a9d97]" />

          <div className="relative p-8">
            <button
              onClick={dismiss}
              className="absolute top-5 right-5 text-white/30 hover:text-white transition-colors"
              aria-label="Zamknij"
            >
              <X size={18} />
            </button>

            {status === 'success' ? (
              <div className="text-center py-6">
                <CheckCircle size={48} className="text-[#4ed5cd] mx-auto mb-4" />
                <p className="text-white text-2xl font-bold brand-font mb-2">Dziękujemy!</p>
                <p className="text-white/50 text-sm">Odezwiemy się w ciągu 24h.</p>
              </div>
            ) : (
              <>
                <p className="text-[#4ed5cd] uppercase tracking-widest text-xs font-bold brand-font mb-4">
                  Bezpłatna konsultacja
                </p>
                <h2 className="text-2xl font-bold text-white brand-font leading-tight mb-3">
                  Sprawdź, co możemy<br />zautomatyzować u&nbsp;Ciebie
                </h2>
                <p className="text-white/45 text-sm mb-7 leading-relaxed">
                  Zostaw imię i telefon — oddzwonimy w&nbsp;ciągu 24h z&nbsp;bezpłatną analizą procesu.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-2 brand-font">
                      <User size={12} /> Imię i Nazwisko
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
                      required
                      minLength={2}
                      maxLength={100}
                      placeholder="Jan Kowalski"
                      className="w-full bg-black/40 border-b border-white/20 py-3 px-1 text-white placeholder-white/25 focus:border-[#4ed5cd] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 mb-2 brand-font">
                      <Phone size={12} /> Telefon
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                      required
                      placeholder="+48 000 000 000"
                      className="w-full bg-black/40 border-b border-white/20 py-3 px-1 text-white placeholder-white/25 focus:border-[#4ed5cd] focus:outline-none transition-colors"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-xs">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-[#4ed5cd] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 group brand-font disabled:opacity-60 rounded-lg mt-2"
                  >
                    {status === 'submitting' ? 'Wysyłanie...' : 'Chcę bezpłatną konsultację'}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <p className="text-center text-white/20 text-xs mt-5">
                  Bez spamu. Tylko jeden telefon od nas.
                </p>
              </>
            )}
          </div>
        </div>
    </div>
  );
}

