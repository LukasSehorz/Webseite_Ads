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
      id="ueber-uns"
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{
        background:
          "radial-gradient(60% 50% at 80% 40%, rgba(45,85,135,.14), transparent 70%), linear-gradient(180deg,#060910 0%,#0a1626 50%,#060910 100%)",
      }}
    >
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Left: copy + checklist */}
        <div>
          {/* Headline – auf Mobil mit Bild-Hintergrund (full-bleed) */}
          <div className="relative -mx-6 overflow-hidden px-6 py-14 sm:mx-0 sm:overflow-visible sm:py-0">
            {/* Bild-Hintergrund nur Mobil */}
            <div
              className="absolute inset-0 sm:hidden"
              style={{
                backgroundImage: "url('/atm-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Overlay für Lesbarkeit + weiche Kanten oben/unten, nur Mobil */}
            <div
              className="absolute inset-0 sm:hidden"
              style={{
                background:
                  "linear-gradient(180deg, #060910 0%, rgba(6,9,16,.32) 24%, rgba(6,9,16,.32) 68%, #060910 100%)",
              }}
            />
            {/* Transparenter Glas-Kasten um die Headline (nur Mobil) */}
            <div className="relative z-10 rounded-[28px] border border-white/15 bg-white/[0.07] px-6 py-8 shadow-[0_20px_50px_rgba(0,0,0,.35)] ring-1 ring-white/10 backdrop-blur-md sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:ring-0 sm:backdrop-blur-none">
              <h2 className="text-center text-[30px] font-medium leading-tight tracking-tight text-white sm:text-left sm:text-4xl md:text-5xl">
                Webdesign-Agentur –<br />Warum mit uns arbeiten?
              </h2>
            </div>
          </div>
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
            <ArrowButton label="Kostenloses Erstgespräch" href="#kontakt" />
          </div>
        </div>

        {/* Right: workstation image (auf Mobil ausgeblendet – liegt dort hinter der Headline) */}
        <div className="relative max-sm:hidden">
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
