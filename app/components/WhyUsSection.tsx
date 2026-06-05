import { ArrowButton } from "./ui";
import { IconCheckCircle } from "./icons";

const POINTS = [
  "Persönliche Beratung – vor Ort oder digital",
  "Keine versteckten Kosten – transparentes Angebot",
  "Schnelle Umsetzung in 7–14 Tagen",
  "SEO-Grundlagen in jeder Website inklusive",
  "100% DSGVO-konform",
  "Langfristiger Support nach Projektabschluss",
];

export default function WhyUsSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{
        background:
          "radial-gradient(60% 50% at 80% 40%, rgba(45,85,135,.14), transparent 70%), linear-gradient(180deg,#060910 0%,#0a1626 50%,#060910 100%)",
      }}
    >
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Left: copy + checklist */}
        <div>
          <h2 className="text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl">
            Webdesign-Agentur –<br />Warum mit uns arbeiten?
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/50">
            Als unabhängige Webdesign-Agentur setzen wir auf direkten Kontakt statt
            Agentur-Overhead – feste Ansprechpartner, Ergebnisse die zählen.
          </p>

          <ul className="mt-10 space-y-5">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-4">
                <IconCheckCircle className="h-6 w-6 flex-none text-[#88C1ED]" />
                <span className="text-[16px] text-white/80">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <ArrowButton label="Kostenloses Erstgespräch" />
          </div>
        </div>

        {/* Right: workstation image */}
        <div className="relative">
          <div
            className="aspect-[3/4] w-full rounded-3xl border border-white/10 bg-cover bg-center shadow-[0_40px_100px_rgba(0,0,0,.55)] ring-1 ring-white/5"
            style={{ backgroundImage: "url('/atm-bg.png')" }}
          />
          {/* soft glow behind */}
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[#4686B7]/10 blur-3xl" />
        </div>
      </div>

      <div className="grain-overlay" style={{ opacity: 0.18 }} />
    </section>
  );
}
