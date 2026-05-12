'use client';

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail } from "lucide-react";

type ContactSectionProps = {
  accentColor: string;
};

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  company: string;
  message: string;
};

type FieldErrors = {
  fullName?: string[];
  email?: string[];
  phone?: string[];
  company?: string[];
  message?: string[];
};

const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  company: "",
  message: "",
};

export const ContactSection = ({ accentColor }: ContactSectionProps) => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "ratelimit">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [rateLimitReset, setRateLimitReset] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const payload = await response.json().catch(() => null);

      if (response.status === 429) {
        setStatus("ratelimit");
        const resetTime = response.headers.get("X-RateLimit-Reset");
        if (resetTime) setRateLimitReset(new Date(resetTime).toLocaleTimeString("pl-PL"));
        setErrorMessage(payload?.message || "Za dużo requestów. Spróbuj ponownie później.");
        return;
      }

      if (!response.ok) {
        if (payload?.errors) {
          setFieldErrors(payload.errors);
          setErrorMessage("Proszę poprawić błędy w formularzu.");
        } else {
          setErrorMessage(payload?.message ?? "Nie udało się wysłać formularza.");
        }
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormState(initialState);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Wystąpił błąd podczas wysyłki formularza."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-20 pb-16 md:pt-40 md:pb-24 px-6 animate-fade-in" style={{ background: "#0a0a0a" }}>
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-16 border-b border-white/10 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-bold brand-font" style={{ color: accentColor }}>
              Kontakt
            </p>
            <h2 className="text-5xl md:text-6xl font-bold brand-font leading-[1.05]">
              Sprawdź, czy<br />możemy pomóc.
            </h2>
          </div>
          <p className="text-white/45 text-base leading-relaxed lg:pb-2">
            Bezpłatna konsultacja, 30 minut. Pytamy o procesy, narzędzia i wyzwania.
            Oceniamy, czy jest sens współpracy. Bez zobowiązań.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Form — 3/5 */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-0">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {/* Imię */}
              <div className="py-5 border-b border-white/10">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 brand-font">
                  Imię i Nazwisko *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formState.fullName}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  placeholder="Jan Kowalski"
                  className="w-full bg-transparent text-white placeholder-white/20 text-base focus:outline-none"
                />
                {fieldErrors.fullName && (
                  <p className="text-red-400 text-xs mt-2">{fieldErrors.fullName[0]}</p>
                )}
              </div>

              {/* Firma */}
              <div className="py-5 border-b border-white/10">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 brand-font">
                  Nazwa Firmy
                </label>
                <input
                  type="text"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  maxLength={100}
                  placeholder="Twoja Firma sp. z o.o."
                  className="w-full bg-transparent text-white placeholder-white/20 text-base focus:outline-none"
                />
                {fieldErrors.company && (
                  <p className="text-red-400 text-xs mt-2">{fieldErrors.company[0]}</p>
                )}
              </div>

              {/* Email */}
              <div className="py-5 border-b border-white/10">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 brand-font">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  maxLength={255}
                  placeholder="jan@firma.pl"
                  className="w-full bg-transparent text-white placeholder-white/20 text-base focus:outline-none"
                />
                {fieldErrors.email && (
                  <p className="text-red-400 text-xs mt-2">{fieldErrors.email[0]}</p>
                )}
              </div>

              {/* Telefon */}
              <div className="py-5 border-b border-white/10">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 brand-font">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  maxLength={20}
                  placeholder="+48 000 000 000"
                  className="w-full bg-transparent text-white placeholder-white/20 text-base focus:outline-none"
                />
                {fieldErrors.phone && (
                  <p className="text-red-400 text-xs mt-2">{fieldErrors.phone[0]}</p>
                )}
              </div>
            </div>

            {/* Wiadomość */}
            <div className="py-5 border-b border-white/10">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 brand-font">
                W czym możemy pomóc?
              </label>
              <textarea
                rows={4}
                name="message"
                value={formState.message}
                onChange={handleChange}
                maxLength={2000}
                placeholder="Opisz krótko sytuację w firmie — procesy, narzędzia, wyzwania..."
                className="w-full bg-transparent text-white placeholder-white/20 text-base focus:outline-none resize-none"
              />
              {fieldErrors.message && (
                <p className="text-red-400 text-xs mt-2">{fieldErrors.message[0]}</p>
              )}
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center gap-4 text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors brand-font disabled:opacity-60"
                style={{ backgroundColor: accentColor }}
              >
                {isSubmitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {status === "success" && (
                <p className="text-sm" style={{ color: accentColor }}>
                  ✓ Dziękujemy! Odezwiemy się w ciągu 24h.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">✗ {errorMessage}</p>
              )}
              {status === "ratelimit" && (
                <p className="text-yellow-400 text-sm">
                  ⚠ {errorMessage}
                  {rateLimitReset && <span className="block text-xs mt-1">Spróbuj po: {rateLimitReset}</span>}
                </p>
              )}
            </div>
          </form>

          {/* Kontakty — 2/5 */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-10">
            <div className="space-y-6">
              <a
                href="mailto:kontakt@pahub.pl"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 group-hover:border-white/40 transition-colors shrink-0"
                >
                  <Mail size={16} className="text-white/40 group-hover:text-white transition-colors" />
                </div>
                <span className="text-white/50 group-hover:text-white transition-colors text-sm">
                  kontakt@pahub.pl
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/poland-automation-hub/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 group-hover:border-white/40 transition-colors shrink-0">
                  <Linkedin size={16} className="text-white/40 group-hover:text-white transition-colors" />
                </div>
                <span className="text-white/50 group-hover:text-white transition-colors text-sm">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://www.facebook.com/polandautomationhub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 group-hover:border-cah-accent/40 transition-colors shrink-0">
                  <Facebook size={16} className="text-white/40 group-hover:text-cah-accent transition-colors" />
                </div>
                <span className="text-white/50 group-hover:text-cah-accent transition-colors text-sm">
                  Facebook
                </span>
              </a>
              <a
                href="https://www.instagram.com/poland.automation.hub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 group-hover:border-cah-accent/40 transition-colors shrink-0">
                  <Instagram size={16} className="text-white/40 group-hover:text-cah-accent transition-colors" />
                </div>
                <span className="text-white/50 group-hover:text-cah-accent transition-colors text-sm">
                  Instagram
                </span>
              </a>
            </div>

            <p className="text-white/20 text-xs leading-relaxed border-t border-white/5 pt-6">
              Odpowiadamy w ciągu 24h roboczych.<br />
              Bezpłatna konsultacja nie jest ofertą sprzedażową.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
