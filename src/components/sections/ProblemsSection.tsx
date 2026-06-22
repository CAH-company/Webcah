import { Database, TrendingUp, ClipboardList, AlertTriangle, Lock, Users } from "lucide-react";

type ProblemsSectionProps = {
  accentColor: string;
};

const problems = [
  {
    Icon: Database,
    title: "Dane w Excelach",
    description: "Raporty tworzone ręcznie, dane w 5 arkuszach, brak jednego źródła prawdy.",
  },
  {
    Icon: TrendingUp,
    title: "Koszty rosną",
    description: "Płacisz za narzędzia, które się dublują. Nikt nie wie, ile naprawdę kosztuje IT.",
  },
  {
    Icon: ClipboardList,
    title: "Procesy na karteczkach",
    description: "Zadania przekazywane ustnie, maile zamiast systemu, onboarding trwa tydzień.",
  },
  {
    Icon: AlertTriangle,
    title: "Ryzyko błędów",
    description: "Ręczne przepisywanie = pomyłki. Jedna literówka w zamówieniu kosztuje tysiące.",
  },
  {
    Icon: Lock,
    title: "Technologia hamuje",
    description: "Systemy, które miały pomagać, generują więcej pracy niż oszczędzają.",
  },
  {
    Icon: Users,
    title: "Brak rąk do pracy",
    description: "Zespół tonie w powtarzalnych zadaniach zamiast robić to, co ważne.",
  },
];

export const ProblemsSection = ({ accentColor }: ProblemsSectionProps) => (
  <section className="pt-20 pb-16 md:pt-32 md:pb-24 px-6">
    <div className="container mx-auto">
      <div className="mb-16 border-b border-white/10 pb-8">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-6 brand-font font-bold"
          style={{ color: accentColor }}
        >
          Wyzwania
        </p>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 brand-font">
          Rozpoznajesz te{" "}
          <span style={{ color: accentColor }}>problemy</span>?
        </h2>
        <p className="text-xl text-white/60 max-w-2xl">
          Większość firm zmaga się z tymi samymi wyzwaniami. Wiemy, bo widzimy je u każdego klienta.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {problems.map((problem) => (
          <div
            key={problem.title}
            className="bg-cah-bg-card border border-white/[0.07] rounded-2xl p-7 hover-card card-shimmer group"
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
              style={{ background: `${accentColor}12`, border: `1px solid ${accentColor}20` }}
            >
              <problem.Icon size={20} style={{ color: accentColor }} />
            </div>
            <h3 className="text-lg font-bold brand-font text-white mb-2 group-hover:text-cah-accent transition-colors">
              {problem.title}
            </h3>
            <p className="text-white/45 text-sm leading-relaxed">
              {problem.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
