import {
  IconHeart,
  IconEuro,
  IconTrending,
  IconSmartphone,
  IconBolt,
  IconShieldCheck,
  IconGlobe,
} from "./icons";
import type { ComponentType, SVGProps } from "react";

type Feature = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  color: string; // RGB-Basis für das Icon-Tile
};

const FEATURES: Feature[] = [
  { Icon: IconHeart, title: "Persönliche Betreuung", text: "Direkter Draht zu uns – kein Callcenter", color: "244,132,155" },
  { Icon: IconEuro, title: "Fairer Festpreis", text: "Keine versteckten Kosten oder Nachzahlungen", color: "111,207,151" },
  { Icon: IconTrending, title: "SEO-Optimierung", text: "Besser bei Google gefunden werden", color: "240,179,87" },
  { Icon: IconSmartphone, title: "Mobile-First", text: "Perfekt auf Handy, Tablet & Desktop", color: "106,169,230" },
  { Icon: IconBolt, title: "Blitzschnell", text: "Ladezeiten unter 2 Sekunden", color: "232,211,106" },
  { Icon: IconShieldCheck, title: "SSL-Zertifikat", text: "Sichere HTTPS-Verschlüsselung", color: "155,140,240" },
  { Icon: IconGlobe, title: "Hosting & Domain", text: "Wir richten alles für Sie ein", color: "232,127,192" },
];

export default function IncludedSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{
        background:
          "radial-gradient(70% 50% at 50% 25%, rgba(45,85,135,.14), transparent 70%), linear-gradient(180deg,#060910 0%,#0a1626 50%,#060910 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <header className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <h2 className="text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl">
            Alles inklusive
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-white/50">
            Bei uns erhalten Sie ein Komplettpaket – von Design über Technik bis zur Betreuung.
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
