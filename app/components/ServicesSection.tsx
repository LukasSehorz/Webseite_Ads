import { ArrowButton } from "./ui";
import { IconBrush, IconTrending, IconTarget, IconWrench } from "./icons";
import type { ComponentType, SVGProps } from "react";

type Service = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  tags: string[];
};

const SERVICES: Service[] = [
  {
    Icon: IconBrush,
    title: "Webdesign & Entwicklung",
    text: "Individuelle Websites, die Ihre Zielgruppe ansprechen und zum Handeln bewegen.",
    tags: ["Responsiv", "Schnell", "Nutzerfreundlich"],
  },
  {
    Icon: IconTrending,
    title: "SEO-Optimierung",
    text: "Bessere Rankings bei Google durch technische und strategische Optimierung.",
    tags: ["Lokale SEO", "Technisch", "Content"],
  },
  {
    Icon: IconTarget,
    title: "Conversion-Optimierung",
    text: "Mehr Anfragen durch gezieltes Copywriting und psychologisch fundiertes Design.",
    tags: ["Copywriting", "CTAs", "A/B Tests"],
  },
  {
    Icon: IconWrench,
    title: "Wartung & Support",
    text: "Regelmäßige Updates, Sicherheits-Checks und schneller Support.",
    tags: ["Updates", "Sicherheit", "24/7 Support"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="leistungen"
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{
        background:
          "radial-gradient(70% 50% at 50% 30%, rgba(45,85,135,.14), transparent 70%), linear-gradient(180deg,#060910 0%,#0a1626 50%,#060910 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <header className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <p className="text-[13px] uppercase tracking-[0.22em] text-white/40">Leistungen</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl">
            Webdesign &amp; Online-Marketing<br className="hidden sm:block" /> aus einer Hand
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-white/50">
            Strategie, Design und Umsetzung – alles aus einer Hand.
          </p>
        </header>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map(({ Icon, title, text, tags }) => (
            <article
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.045]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#88C1ED] transition-colors duration-300 group-hover:border-[#88C1ED]/30 group-hover:text-[#aed3f5]">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-medium tracking-tight text-white">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/55">{text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#4686B7]/25 bg-[#4686B7]/10 px-3 py-1 text-[12px] font-medium text-[#9cc2ef]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <ArrowButton label="Alle Webdesign-Leistungen ansehen" light href="#leistungen-details" />
        </div>
      </div>

      <div className="grain-overlay" style={{ opacity: 0.18 }} />
    </section>
  );
}
