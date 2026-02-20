import Image from "next/image";

type LogoItem = {
  src: string;
  alt: string;
};

const toolLogos: LogoItem[] = [
  { src: "/logos/tools/n8n.svg", alt: "n8n" },
  { src: "/logos/tools/lemlist.svg", alt: "Lemlist" },
  { src: "/logos/tools/google-workspace.svg", alt: "Google Workspace" },
  { src: "/logos/tools/airtable.svg", alt: "Airtable" },
  { src: "/logos/tools/make.svg", alt: "Make" },
  { src: "/logos/tools/chatgpt.svg", alt: "ChatGPT" },
  { src: "/logos/tools/gemini.svg", alt: "Gemini" },
  { src: "/logos/tools/notion.svg", alt: "Notion" },
  { src: "/logos/tools/sales-navigator.svg", alt: "Sales Navigator" },
  { src: "/logos/tools/meta-ads.svg", alt: "Meta Ads" },
];

const partnerLogos: LogoItem[] = [
  { src: "/logos/partners/partner1.svg", alt: "Partner 1" },
  { src: "/logos/partners/partner2.svg", alt: "Partner 2" },
];

function LogoStrip({ logos, direction = "left" }: { logos: LogoItem[]; direction?: "left" | "right" }) {
  const doubled = [...logos, ...logos];
  const animationClass = direction === "left" ? "animate-[marquee-logos_30s_linear_infinite]" : "animate-[marquee-logos-reverse_30s_linear_infinite]";

  return (
    <div className="overflow-hidden whitespace-nowrap py-6">
      <div className={`inline-flex gap-16 items-center ${animationClass}`}>
        {doubled.map((logo, i) => (
          <div key={`${logo.src}-${i}`} className="flex-shrink-0 opacity-40 hover:opacity-80 transition-opacity duration-300">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export const LogoCarousels = () => (
  <section className="py-16 px-6 bg-cah-bg border-t border-white/5">
    <div className="container mx-auto">
      <div className="mb-12">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-white/30 mb-8 brand-font">
          Firmy, które nam zaufały
        </p>
        <div className="flex justify-center items-center gap-16 py-6">
          {partnerLogos.map((logo) => (
            <div key={logo.src} className="opacity-40 hover:opacity-80 transition-opacity duration-300">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 pt-12">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-white/30 mb-8 brand-font">
          Narzędzia, z których korzystamy
        </p>
        <LogoStrip logos={toolLogos} direction="right" />
      </div>
    </div>
  </section>
);
