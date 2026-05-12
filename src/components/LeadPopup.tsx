'use client';

import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';

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
    <div className="fixed bottom-6 right-6 z-50 w-[280px] max-w-[calc(100vw-2rem)] animate-slide-up">
      <div className="bg-[#0d1a1a] border border-[#4ed5cd]/25 rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] overflow-hidden">
        <div className="h-0.5 w-full bg-gradient-to-r from-[#4ed5cd] to-[#2a9d97]" />
        <div className="relative p-5">
          <button
            onClick={dismiss}
            className="absolute top-4 right-4 text-white/25 hover:text-white transition-colors"
            aria-label="Zamknij"
          >
            <X size={14} />
          </button>

          {status === 'success' ? (
            <div className="text-center py-3">
              <CheckCircle size={32} className="text-[#4ed5cd] mx-auto mb-2" />
              <p className="text-white text-sm font-bold brand-font">Dziękujemy!</p>
              <p className="text-white/40 text-xs mt-1">Odezwiemy się w ciągu 24h.</p>
            </div>
          ) : (
            <>
              <p className="text-[#4ed5cd] uppercase tracking-widest text-[10px] font-bold brand-font mb-3 pr-4">
                Zostaw swój kontakt
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
                  required
                  minLength={2}
                  maxLength={100}
                  placeholder="Imię i nazwisko"
                  className="w-full bg-black/40 border-b border-white/15 py-2 px-1 text-white text-sm placeholder-white/25 focus:border-[#4ed5cd] focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                  required
                  placeholder="Telefon"
                  className="w-full bg-black/40 border-b border-white/15 py-2 px-1 text-white text-sm placeholder-white/25 focus:border-[#4ed5cd] focus:outline-none transition-colors"
                />
                {status === 'error' && (
                  <p className="text-red-400 text-xs">{errorMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-2.5 bg-[#4ed5cd] text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 group brand-font disabled:opacity-60 rounded-lg mt-1"
                >
                  {status === 'submitting' ? 'Wysyłanie...' : 'Umów konsultację'}
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

