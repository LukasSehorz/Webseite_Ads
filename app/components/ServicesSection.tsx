import { ArrowButton } from "./ui";
import { IconBrush, IconMegaphone, IconChip } from "./icons";
import type { ComponentType, SVGProps } from "react";

type Service = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  title: string;
  text: string;
  tags: string[];
};

const SERVICES: Service[] = [
  {
    Icon: IconBrush,
    label: "Säule 01",
    title: "Webdesign & Entwicklung",
    text: "Individuelle Websites, die Ihre Zielgruppe ansprechen, gut ranken und zum Handeln bewegen.",
    tags: ["Webdesign", "SEO", "Conversion", "Wartung & Support"],
  },
  {
    Icon: IconMegaphone,
    label: "Säule 02",
    title: "Performance Marketing",
    text: "Planbare Lead- und Mitarbeitergewinnung über zielgenaue Kampagnen auf den großen Plattformen.",
    tags: ["Meta Ads", "Google Ads", "LinkedIn Ads", "Leadgenerierung", "Mitarbeitergewinnung"],
  },
  {
    Icon: IconChip,
    label: "Säule 03",
    title: "KI-Prozessautomatisierung",
    text: "Wir automatisieren wiederkehrende Abläufe und bauen KI in Ihre Prozesse – effizient und sicher.",
    tags: ["Voice Agents", "Angebots- & Rechnungsautomatisierung", "Buchhaltung", "Corporate LLMs", "Social Media"],
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
            Sichtbarkeit, Leads &amp; Effizienz<br className="hidden sm:block" /> aus einer Hand
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-white/50">
            Drei Säulen, die ineinandergreifen – von der Website über planbare Anfragen
            bis zur KI-gestützten Abwicklung. Alles DSGVO-konform.
          </p>
        </header>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ Icon, label, title, text, tags }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.045]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#88C1ED] transition-colors duration-300 group-hover:border-[#88C1ED]/30 group-hover:text-[#aed3f5]">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/30">{label}</span>
              </div>
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
          <ArrowButton label="Kostenloses Erstgespräch sichern" light href="#kontakt" />
        </div>
      </div>

      <div className="grain-overlay" style={{ opacity: 0.18 }} />
    </section>
  );
}
