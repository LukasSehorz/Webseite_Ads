import {
  IconMic,
  IconDocument,
  IconEuro,
  IconCheckCircle,
  IconChip,
  IconSmartphone,
} from "./icons";
import type { ComponentType, SVGProps } from "react";

type Feature = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  color: string; // RGB-Basis für das Icon-Tile
};

const FEATURES: Feature[] = [
  { Icon: IconMic, title: "Voice Agents", text: "KI nimmt Anrufe an, qualifiziert und vereinbart Termine", color: "106,169,230" },
  { Icon: IconDocument, title: "Angebotsautomatisierung", text: "Angebote automatisch erstellt, kalkuliert und versendet", color: "111,207,151" },
  { Icon: IconEuro, title: "Rechnungsautomatisierung", text: "Rechnungen ohne manuellen Aufwand – pünktlich und korrekt", color: "240,179,87" },
  { Icon: IconCheckCircle, title: "KI-Buchhaltung", text: "Belege und Buchungen automatisiert vorbereitet", color: "232,211,106" },
  { Icon: IconChip, title: "Corporate LLMs", text: "Firmeneigene KI-Assistenten auf Basis Ihrer Daten", color: "155,140,240" },
  { Icon: IconSmartphone, title: "Social Media", text: "Content-Erstellung und Planung mit KI-Unterstützung", color: "232,127,192" },
];

export default function AiAutomationSection() {
  return (
    <section
      id="ki-automatisierung"
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{
        background:
          "radial-gradient(70% 50% at 50% 75%, rgba(45,85,135,.14), transparent 70%), linear-gradient(180deg,#060910 0%,#0a1626 50%,#060910 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <header className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <p className="text-[13px] uppercase tracking-[0.22em] text-white/40">Säule 03 · KI-Prozessautomatisierung</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl">
            Was wir mit KI automatisieren
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-white/50">
            Wiederkehrende Abläufe laufen von allein – das spart Zeit, senkt Kosten
            und bleibt dabei vollständig DSGVO-konform.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {FEATURES.map(({ Icon, title, text, color }) => (
            <article
              key={title}
              className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.04]"
            >
              <span
                className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border"
                style={{
                  color: `rgb(${color})`,
                  backgroundColor: `rgba(${color},0.12)`,
                  borderColor: `rgba(${color},0.22)`,
                }}
              >
                <Icon className="h-5.5 w-5.5" style={{ width: 22, height: 22 }} />
              </span>
              <div className="pt-0.5">
                <h3 className="text-[17px] font-medium tracking-tight text-white">{title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-white/50">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="grain-overlay" style={{ opacity: 0.18 }} />
    </section>
  );
}
