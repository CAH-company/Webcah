'use client';

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

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
  fullName?:  string[];
  email?: string[];
  phone?: string[];
  company?: string[];
  message?: string[];
};

const initialState: FormState = {
  fullName: "",
  phone:  "",
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
  const webhookRoute = "/api/contact";

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event. target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    // Clear field error when user starts typing
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
      const response = await fetch(webhookRoute, {
        method: "POST",
        headers:  {
          "Content-Type":  "application/json",
        },
        body: JSON.stringify(formState),
      });

      const payload = await response.json().catch(() => null);
      
      if (response.status === 429) {
        // Rate limit exceeded
        setStatus("ratelimit");
        const resetTime = response.headers.get('X-RateLimit-Reset');
        if (resetTime) {
          setRateLimitReset(new Date(resetTime).toLocaleTimeString('pl-PL'));
        }
        setErrorMessage(payload?.message || "Za dużo requestów. Spróbuj ponownie później.");
        return;
      }

      if (! response.ok) {
        // Handle validation errors
        if (payload?.errors) {
          setFieldErrors(payload.errors);
          setErrorMessage("Proszę poprawić błędy w formularzu");
        } else {
          setErrorMessage(payload?.message ??  "Nie udało się wysłać formularza");
        }
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormState(initialState);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          :  "Wystąpił błąd podczas wysyłki formularza",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-40 pb-24 px-6 bg-cah-bg min-h-screen flex items-center animate-fade-in">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <p
            style={{ color: accentColor }}
            className="tracking-widest uppercase mb-4 font-bold brand-font"
          >
            Kontakt
          </p>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 brand-font">
            Zacznijmy
            <br />
            Współpracę
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-md">
            Opisz swój proces lub problem.  Oddzwonimy w ciągu 24h z wstępną
            analizą i wyceną. 
          </p>

          <div className="space-y-6">
            <a 
              href="mailto:hello@cah.pl"
              className="flex items-center gap-4 text-xl group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-cah-accent group-hover:bg-cah-accent group-hover:text-black transition-all">
                <Mail size={20} />
              </div>
              <span className="group-hover:text-cah-accent transition-colors">cracowautomationhub@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/company/cracow-automations-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-cah-accent group-hover:bg-cah-accent group-hover:text-black transition-all">
                <Linkedin size={20} />
              </div>
              <span className="group-hover:text-cah-accent transition-colors">/cracow-automations-hub</span>
            </a>
            <a 
              href="https://www.facebook.com/cracowautomationshub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-cah-accent group-hover:bg-cah-accent group-hover:text-black transition-all">
                <Facebook size={20} />
              </div>
              <span className="group-hover:text-cah-accent transition-colors">/cracowautomationshub</span>
            </a>
            <a 
              href="https://www.instagram.com/cracowautomationshub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-cah-accent group-hover:bg-cah-accent group-hover:text-black transition-all">
                <Instagram size={20} />
              </div>
              <span className="group-hover: text-cah-accent transition-colors">@cracowautomationshub</span>
            </a>
          </div>
        </div>

        <form
          className="bg-cah-bg-card p-8 md:p-12 rounded-3xl border border-white/10 space-y-6 shadow-2xl"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-bold brand-font">
              Imię i Nazwisko
            </label>
            <input
              type="text"
              name="fullName"
              value={formState. fullName}
              onChange={handleChange}
              required
              maxLength={100}
              className="w-full bg-black border-b border-white/20 p-4 text-white focus: border-[#4ed5cd] focus:outline-none transition-colors"
              placeholder="Jan Kowalski"
            />
            {fieldErrors.fullName && (
              <p className="text-red-400 text-xs mt-1">{fieldErrors. fullName[0]}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-bold flex items-center gap-2 brand-font">
                <Phone size={14} /> Telefon
              </label>
              <input
                type="tel"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                maxLength={20}
                className="w-full bg-black border-b border-white/20 p-4 text-white focus:border-[#4ed5cd] focus: outline-none transition-colors"
                placeholder="+48 000 000 000"
              />
              {fieldErrors.phone && (
                <p className="text-red-400 text-xs mt-1">{fieldErrors.phone[0]}</p>
              )}
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-bold flex items-center gap-2 brand-font">
                <Mail size={14} /> Email
              </label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                maxLength={255}
                className="w-full bg-black border-b border-white/20 p-4 text-white focus:border-[#4ed5cd] focus: outline-none transition-colors"
                placeholder="jan@firma.pl"
              />
              {fieldErrors.email && (
                <p className="text-red-400 text-xs mt-1">{fieldErrors.email[0]}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-bold flex items-center gap-2 brand-font">
              <Building2 size={14} /> Nazwa Firmy
            </label>
            <input
              type="text"
              name="company"
              value={formState.company}
              onChange={handleChange}
              maxLength={100}
              className="w-full bg-black border-b border-white/20 p-4 text-white focus:border-[#4ed5cd] focus:outline-none transition-colors"
              placeholder="Twoja Firma Sp. z o.o."
            />
            {fieldErrors.company && (
              <p className="text-red-400 text-xs mt-1">{fieldErrors.company[0]}</p>
            )}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-bold brand-font">
              W czym możemy pomóc? 
            </label>
            <textarea
              rows={4}
              name="message"
              value={formState.message}
              onChange={handleChange}
              maxLength={2000}
              className="w-full bg-black border-b border-white/20 p-4 text-white focus:border-[#4ed5cd] focus:outline-none transition-colors resize-none"
              placeholder="Opisz krótko swój proces..."
            />
            {fieldErrors.message && (
              <p className="text-red-400 text-xs mt-1">{fieldErrors.message[0]}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{ backgroundColor: accentColor }}
            className="w-full py-4 text-black font-bold uppercase tracking-widest hover:bg-white transition-colors mt-4 flex justify-center items-center gap-2 group brand-font disabled:opacity-70"
          >
            {isSubmitting ? "Wysyłanie..." : "Wyślij Zgłoszenie"}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          {status === "success" && (
            <p className="text-cah-accent text-sm font-medium">
              ✓ Dziękujemy! Formularz został wysłany.  Odezwiemy się w ciągu 24h!
            </p>
          )}
          {status === "ratelimit" && (
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded p-3 text-yellow-300 text-sm">
              <p className="font-medium">⚠️ {errorMessage}</p>
              {rateLimitReset && (
                <p className="text-xs mt-1">Spróbuj ponownie po: {rateLimitReset}</p>
              )}
            </div>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm font-medium">
              ✗ {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};