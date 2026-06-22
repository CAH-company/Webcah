'use client';

import { useEffect, useState, useRef } from 'react';

const GRID = 5;
const CELLS = Array.from({ length: GRID * GRID }, (_, i) => i);

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1700;

    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, (elapsed / duration) * 100);
      setProgress(p);
      if (elapsed < duration) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    const fadeTimer = setTimeout(() => setFading(true), 1750);
    const hideTimer = setTimeout(() => setHidden(true), 2400);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center select-none"
      style={{
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      {/* Neural grid */}
      <div className="relative mb-10">
        <div
          className="grid gap-[22px]"
          style={{ gridTemplateColumns: `repeat(${GRID}, 1fr)` }}
        >
          {CELLS.map((i) => {
            const row = Math.floor(i / GRID);
            const col = i % GRID;
            const distFromCenter = Math.abs(row - 2) + Math.abs(col - 2);
            const delay = (distFromCenter * 120 + (i * 47) % 200);
            return (
              <div
                key={i}
                className="w-[5px] h-[5px] rounded-full"
                style={{
                  backgroundColor: '#4ed5cd',
                  animation: `neuralPulse 2s ease-in-out infinite`,
                  animationDelay: `${delay}ms`,
                }}
              />
            );
          })}
        </div>

        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="px-5 py-2 rounded-lg"
            style={{ background: '#050505', border: '1px solid rgba(78,213,205,0.2)' }}
          >
            <span
              className="font-bold brand-font text-xl tracking-[0.35em] text-white"
              style={{ animation: 'loadingReveal 0.6s ease-out 0.4s both' }}
            >
              PAH
            </span>
          </div>
        </div>
      </div>

      {/* Brand name */}
      <p
        className="text-[#4ed5cd] text-[10px] uppercase brand-font mb-10"
        style={{
          letterSpacing: '0.4em',
          animation: 'loadingReveal 0.8s ease-out 0.6s both',
        }}
      >
        Poland Automations Hub
      </p>

      {/* Progress bar */}
      <div className="w-40 h-[1px] bg-white/[0.07] overflow-hidden relative">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#4ed5cd]/60 to-[#4ed5cd]"
          style={{ width: `${progress}%`, transition: 'width 16ms linear' }}
        />
      </div>
    </div>
  );
}
