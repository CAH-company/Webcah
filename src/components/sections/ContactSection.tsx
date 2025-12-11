'use client';

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Globe,
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
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const webhookRoute = "/api/contact";

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch(webhookRoute, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(payload?.message ?? "Nie udało się wysłać formularza");
      }

      setStatus("success");
      setFormState(initialState);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Wystąpił błąd podczas wysyłki formularza",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-40 pb-24 px-6 bg-[#0a0a0a] min-h-screen flex items-center animate-fade-in">
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
            Opisz swój proces lub problem. Oddzwonimy w ciągu 24h z wstępną
            analizą i wyceną.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-xl group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#4ed5cd] group-hover:bg-[#4ed5cd] group-hover:text-black transition-all">
                <Mail size={20} />
              </div>
              hello@cah.pl
            </div>
            <div className="flex items-center gap-4 text-xl group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#4ed5cd] group-hover:bg-[#4ed5cd] group-hover:text-black transition-all">
                <Globe size={20} />
              </div>
              Kraków, Polska
            </div>
            <div className="flex items-center gap-4 text-xl group">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#4ed5cd] group-hover:bg-[#4ed5cd] group-hover:text-black transition-all">
                <Linkedin size={20} />
              </div>
              /cracow-automations-hub
            </div>
          </div>
        </div>

        <form
          className="bg-[#111] p-8 md:p-12 rounded-3xl border border-white/10 space-y-6 shadow-2xl"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-bold brand-font">
              Imię i Nazwisko
            </label>
            <input
              type="text"
              name="fullName"
              value={formState.fullName}
              onChange={handleChange}
              required
              className="w-full bg-black border-b border-white/20 p-4 text-white focus:border-[#4ed5cd] focus:outline-none transition-colors"
              placeholder="Jan Kowalski"
            />
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
                className="w-full bg-black border-b border-white/20 p-4 text-white focus:border-[#4ed5cd] focus:outline-none transition-colors"
                placeholder="+48 000 000 000"
              />
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
                className="w-full bg-black border-b border-white/20 p-4 text-white focus:border-[#4ed5cd] focus:outline-none transition-colors"
                placeholder="jan@firma.pl"
              />
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
              className="w-full bg-black border-b border-white/20 p-4 text-white focus:border-[#4ed5cd] focus:outline-none transition-colors"
              placeholder="Twoja Firma Sp. z o.o."
            />
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
              className="w-full bg-black border-b border-white/20 p-4 text-white focus:border-[#4ed5cd] focus:outline-none transition-colors resize-none"
              placeholder="Opisz krótko swój proces..."
            />
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
            <p className="text-[#4ed5cd] text-sm font-medium">
              Dziękujemy! Formularz został wysłany.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm font-medium">{errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};
