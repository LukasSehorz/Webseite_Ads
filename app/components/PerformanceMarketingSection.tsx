import {
  IconMegaphone,
  IconTarget,
  IconGlobe,
  IconTrending,
  IconUsers,
  IconBolt,
  IconCamera,
} from "./icons";
import type { ComponentType, SVGProps } from "react";

type Feature = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  color: string; // RGB-Basis für das Icon-Tile
};

const FEATURES: Feature[] = [
  { Icon: IconMegaphone, title: "Meta Ads", text: "Kampagnen auf Instagram & Facebook für Reichweite und Anfragen", color: "106,169,230" },
  { Icon: IconTarget, title: "Google Ads", text: "Sichtbar genau dann, wenn nach Ihnen gesucht wird", color: "240,179,87" },
  { Icon: IconGlobe, title: "LinkedIn Ads", text: "B2B-Zielgruppen und Fachkräfte präzise ansprechen", color: "111,207,151" },
  { Icon: IconTrending, title: "Leadgenerierung", text: "Planbar neue Kundenanfragen statt Zufallstreffer", color: "155,140,240" },
  { Icon: IconUsers, title: "Mitarbeitergewinnung", text: "Passende Bewerber über gezieltes Recruiting", color: "232,127,192" },
  { Icon: IconCamera, title: "Material-Aufnahme vor Ort", text: "Wir kommen persönlich vorbei und produzieren das Foto- und Videomaterial für Ihre Anzeigen direkt bei Ihnen", color: "244,132,155" },
  { Icon: IconBolt, title: "Reporting & Optimierung", text: "Laufende Auswertung und Optimierung anhand echter Zahlen", color: "232,211,106" },
];

export default function PerformanceMarketingSection() {
  return (
    <section
      id="performance-marketing"
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{
        background:
          "radial-gradient(70% 50% at 50% 25%, rgba(45,85,135,.14), transparent 70%), linear-gradient(180deg,#060910 0%,#0a1626 50%,#060910 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <header className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <p className="text-[13px] uppercase tracking-[0.22em] text-white/40">Säule 02 · Performance Marketing</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl">
            Was in unseren Kampagnen steckt
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-white/50">
            Planbare Lead- und Mitarbeitergewinnung über die großen Plattformen –
            datenbasiert gesteuert und 100% DSGVO-konform getrackt.
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
