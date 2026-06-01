import Image from "next/image";
import Link from "next/link";

export const Footer = () => (
  <footer className="bg-cah-bg-dark border-t border-white/10 text-white/60 text-sm">
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col md:items-start items-center">
        <Image
          src="/logo1.svg"
          alt="CAH Logo"
          width={80}
          height={32}
          className="h-8 w-auto mb-2"
        />
        <span>Poland Automations Hub</span>
      </div>
      <div className="flex gap-8">
        <a href="#home" className="hover:text-white transition-colors">Home</a>
        <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
      </div>
      <div className="opacity-40">© 2026 PAH.</div>
    </div>
    <div className="border-t border-white/5">
      <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
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
  </footer>
);
