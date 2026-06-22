import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, Instagram, Mail } from "lucide-react";

export const Footer = () => (
  <footer className="bg-cah-bg-dark border-t border-white/10 text-white/60 text-sm">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        <div>
          <Image
            src="/Pah 2.svg"
            alt="PAH Logo"
            width={96}
            height={40}
            className="h-8 w-auto mb-4"
          />
          <p className="text-white/35 text-sm leading-relaxed mb-6">
            Automatyzacja i AI dla firm. Cała Polska.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/company/poland-automation-hub/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-cah-accent hover:text-cah-accent transition-colors"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="https://www.facebook.com/polandautomationhub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-cah-accent hover:text-cah-accent transition-colors"
            >
              <Facebook size={14} />
            </a>
            <a
              href="https://www.instagram.com/poland.automation.hub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-cah-accent hover:text-cah-accent transition-colors"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-white text-xs uppercase tracking-widest font-bold brand-font mb-5">Usługi</p>
          <div className="space-y-3">
            <Link href="/uslugi/aplikacje-systemy" className="block hover:text-white transition-colors">Aplikacje i systemy</Link>
            <Link href="/uslugi/automatyzacja-procesow" className="block hover:text-white transition-colors">Automatyzacja procesów</Link>
            <Link href="/uslugi/sztuczna-inteligencja" className="block hover:text-white transition-colors">AI tam, gdzie ma sens</Link>
            <Link href="/uslugi/integracje" className="block hover:text-white transition-colors">Integracje i rozbudowa</Link>
            <Link href="/uslugi/doradztwo" className="block hover:text-white transition-colors">Doradztwo</Link>
            <Link href="/uslugi/szkolenia" className="block hover:text-white transition-colors">Szkolenia</Link>
          </div>
        </div>

        <div>
          <p className="text-white text-xs uppercase tracking-widest font-bold brand-font mb-5">Obszary</p>
          <div className="space-y-3">
            <Link href="/obszary/sprzedaz-i-marketing" className="block hover:text-white transition-colors">Sprzedaż i marketing</Link>
            <Link href="/obszary/obsluga-klienta" className="block hover:text-white transition-colors">Obsługa klienta</Link>
            <Link href="/obszary/administracja" className="block hover:text-white transition-colors">Administracja</Link>
            <Link href="/obszary/rekrutacja-hr" className="block hover:text-white transition-colors">Rekrutacja i HR</Link>
            <Link href="/obszary/dashboardy-dane" className="block hover:text-white transition-colors">Dashboardy i dane</Link>
            <Link href="/obszary/nietypowe-procesy" className="block hover:text-white transition-colors">Nietypowe procesy</Link>
          </div>
        </div>

        <div>
          <p className="text-white text-xs uppercase tracking-widest font-bold brand-font mb-5">Firma</p>
          <div className="space-y-3">
            <a href="/#o-nas" className="block hover:text-white transition-colors">O nas</a>
            <a href="/#realizacje" className="block hover:text-white transition-colors">Realizacje</a>
            <a href="mailto:kontakt@pahub.pl" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} />
              kontakt@pahub.pl
            </a>
          </div>
        </div>

      </div>
    </div>

    <div className="border-t border-white/5">
      <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="opacity-40">© 2026 Poland Automations Hub</div>
        <div className="flex gap-6">
          <Link href="/polityka-prywatnosci" className="text-white/30 hover:text-white/60 text-xs transition-colors">
            Polityka Prywatności
          </Link>
          <Link href="/regulamin" className="text-white/30 hover:text-white/60 text-xs transition-colors">
            Regulamin
          </Link>
          <Link href="/polityka-cookies" className="text-white/30 hover:text-white/60 text-xs transition-colors">
            Polityka Cookies
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
