type ProcessSectionProps = {
  accentColor: string;
};

const steps = [
  {
    number: "01",
    title: "Rozmowa",
    time: "10 minut",
    description: "Krótka rozmowa telefoniczna. Sprawdzamy, czy możemy pomóc i czy jest sens rozmawiać dalej.",
  },
  {
    number: "02",
    title: "Discovery call",
    time: "30 minut",
    description: "Poznajemy firmę, procesy, narzędzia i wyzwania. Pytamy dużo, słuchamy jeszcze więcej.",
  },
  {
    number: "03",
    title: "Warsztat",
    time: "3-5 godzin",
    description: "Mapujemy procesy, liczymy koszty, identyfikujemy quick wins i długoterminowe cele.",
  },
  {
    number: "04",
    title: "Koncepcja",
    time: "3-5 dni",
    description: "Przygotowujemy raport z rekomendacjami, priorytetami i kosztorysem. Konkretnie, bez lania wody.",
  },
  {
    number: "05",
    title: "Wdrożenie",
    time: "2-8 tygodni",
    description: "Budujemy, testujemy, szkolimy zespół i uruchamiamy. Potem monitorujemy i optymalizujemy.",
  },
];

export const ProcessSection = ({ accentColor }: ProcessSectionProps) => (
  <section className="pt-20 pb-16 md:pt-40 md:pb-24 px-6">
    <div className="container mx-auto max-w-5xl">
      <div className="mb-16 border-b border-white/10 pb-8">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-6 brand-font font-bold"
          style={{ color: accentColor }}
        >
          Proces
        </p>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 brand-font">
          Jak{" "}
          <span style={{ color: accentColor }}>pracujemy</span>
        </h2>
        <p className="text-xl text-white/60 max-w-2xl">
          5 kroków od rozmowy do działającego rozwiązania.
        </p>
      </div>

      <div className="space-y-0">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className="group relative flex gap-6 md:gap-10"
          >
            {/* Timeline line */}
            <div className="flex flex-col items-center">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold brand-font shrink-0 border transition-colors duration-300 group-hover:border-transparent"
                style={{
                  color: accentColor,
                  borderColor: `${accentColor}30`,
                  background: `${accentColor}08`,
                }}
              >
                <span className="group-hover:scale-110 transition-transform">{step.number}</span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="w-px flex-1 my-2"
                  style={{ background: `${accentColor}20` }}
                />
              )}
            </div>

            {/* Content */}
            <div className="pb-10 md:pb-14 pt-2 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                <h3 className="text-xl md:text-2xl font-bold brand-font text-white group-hover:text-cah-accent transition-colors">
                  {step.title}
                </h3>
                <span
                  className="text-xs font-bold uppercase tracking-widest brand-font px-3 py-1 rounded-full w-fit"
                  style={{
                    color: accentColor,
                    background: `${accentColor}12`,
                    border: `1px solid ${accentColor}25`,
                  }}
                >
                  {step.time}
                </span>
              </div>
              <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-lg">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
