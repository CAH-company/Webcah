import Link from "next/link";
import Image from "next/image";

export const Footer = () => (
  <footer className="bg-cah-bg-dark py-12 px-6 border-t border-white/10 text-white/60 text-sm">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col md:items-start items-center">
        <div className="h-8 w-20   flex items-center justify-center  text-[8px] text-white/50 tracking-widest mb-2">
        <Image 
          src="/logo1.svg" 
          alt="CAH Logo" 
          width={80} 
          height={32} 
          className="h-8 w-auto mb-2"
        />
        </div>
        <span>Cracow Automations Hub</span>
      </div>
      <div className="flex gap-8">
        <Link
          href="/"
          className="hover:text-white transition-colors"
        >
          Home
        </Link>
        <Link
          href="/kontakt"
          className="hover:text-white transition-colors"
        >
          Kontakt
        </Link>
      </div>
      <div className="opacity-40">© 2025 CAH.</div>
    </div>
  </footer>
);
