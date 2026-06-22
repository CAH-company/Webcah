'use client';

import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import { X, ArrowRight, CheckCircle, Clock } from 'lucide-react';

const DELAY_MS = process.env.NODE_ENV === 'development' ? 2_000 : 30_000;
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

  useEffect(() => {
    const handleOpen = () => setVisible(true);
    window.addEventListener('cah:open-popup', handleOpen);
    return () => window.removeEventListener('cah:open-popup', handleOpen);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
        onClick={dismiss}
      />

      <div className="relative w-full max-w-[480px] animate-scale-in">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[320px] h-[200px] bg-[#4ed5cd] rounded-full filter blur-[80px] opacity-20 pointer-events-none" />

        <div className="relative bg-[#0d1a1a] border border-[#4ed5cd]/20 rounded-2xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.85)]">
          <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#4ed5cd] to-transparent" />

          <div className="relative px-8 pt-8 pb-6 border-b border-white/[0.05]">
            <button
              onClick={dismiss}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-white/25 hover:text-white hover:bg-white/10 rounded-full transition-all"
              aria-label="Zamknij"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-full bg-[#4ed5cd]/15 flex items-center justify-center shrink-0">
                <Clock size={13} className="text-[#4ed5cd]" />
              </div>
              <span className="text-[#4ed5cd] uppercase tracking-[0.25em] text-[10px] font-bold brand-font">
                Bezpłatna konsultacja · 30 minut
              </span>
            </div>

            <h2 className="text-[1.6rem] font-bold brand-font text-white leading-[1.15] mb-3">
              30 minut, które mogą zmienić<br />
              <span className="text-[#4ed5cd]">Twój biznes.</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed">
              Mapujemy procesy, liczymy ile tracisz i mówimy wprost, co z tym zrobić. Konkretnie. Bez ściemy.
            </p>
          </div>

          <div className="px-8 py-7">
            {status === 'success' ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#4ed5cd]/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={30} className="text-[#4ed5cd]" />
                </div>
                <p className="text-white text-lg font-bold brand-font mb-1">Dziękujemy!</p>
                <p className="text-white/35 text-sm">Odezwiemy się w ciągu 24h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
                  required
                  minLength={2}
                  maxLength={100}
                  placeholder="Imię i nazwisko"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3.5 px-4 text-white text-sm placeholder-white/20 focus:border-[#4ed5cd]/50 focus:outline-none focus:bg-white/[0.06] transition-all"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                  required
                  placeholder="Numer telefonu"
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3.5 px-4 text-white text-sm placeholder-white/20 focus:border-[#4ed5cd]/50 focus:outline-none focus:bg-white/[0.06] transition-all"
                />

                {status === 'error' && (
                  <p className="text-red-400 text-xs pt-1">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full mt-2 py-4 bg-[#4ed5cd] text-black text-sm font-bold uppercase tracking-[0.15em] hover:bg-white transition-all flex items-center justify-center gap-2.5 group brand-font disabled:opacity-60 rounded-xl shadow-[0_0_35px_rgba(78,213,205,0.3)]"
                >
                  {status === 'submitting' ? 'Wysyłanie...' : 'Umów bezpłatną konsultację'}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-white/20 text-[11px] text-center pt-1">
                  Bez zobowiązań · odpiszemy w ciągu 24h
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
