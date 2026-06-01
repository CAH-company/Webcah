'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number;
  radius: number;
  vx: number; vy: number;
  opacity: number;
  phase: number;
  phaseSpeed: number;
}

interface Blob {
  x: number; y: number;
  radius: number;
  vx: number; vy: number;
  phase: number;
  phaseSpeed: number;
}

const ACCENT = { r: 78, g: 213, b: 205 };
const PARTICLE_COUNT = 70;
const BLOB_COUNT = 7;
const CONNECTION_DIST = 130;

function rgb(a: number) {
  return `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${a})`;
}

export function AnimatedCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Small glowing particles
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.8,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.5 + 0.15,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: Math.random() * 0.015 + 0.005,
    }));

    // Large soft blobs (background depth)
    const blobs: Blob[] = Array.from({ length: BLOB_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 220 + 80,
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: Math.random() * 0.006 + 0.002,
    }));

    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw blobs
      blobs.forEach(b => {
        b.phase += b.phaseSpeed;
        const a = 0.04 + 0.02 * Math.sin(b.phase);
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        grad.addColorStop(0, rgb(a));
        grad.addColorStop(1, rgb(0));
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();

        b.x += b.vx; b.y += b.vy;
        if (b.x < -b.radius) b.x = canvas.width + b.radius;
        if (b.x > canvas.width + b.radius) b.x = -b.radius;
        if (b.y < -b.radius) b.y = canvas.height + b.radius;
        if (b.y > canvas.height + b.radius) b.y = -b.radius;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECTION_DIST) {
            const alpha = 0.08 * (1 - d / CONNECTION_DIST);
            ctx.strokeStyle = rgb(alpha);
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles with glow
      particles.forEach(p => {
        p.phase += p.phaseSpeed;
        const a = p.opacity * (0.65 + 0.35 * Math.sin(p.phase));

        // Soft glow halo
        const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 5);
        halo.addColorStop(0, rgb(a * 0.6));
        halo.addColorStop(1, rgb(0));
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 5, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = rgb(a);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
