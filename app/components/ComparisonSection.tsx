import { IconCheck, IconX } from "./icons";

const STANDARD = [
  "Schönes Design, aber keine Strategie",
  "SEO-Versprechen ohne Substanz",
  "Austauschbare Ergebnisse",
  "Lange Projektlaufzeiten",
  "Kein persönlicher Ansprechpartner",
];

const OURS = [
  "Erst Klarheit, dann Design",
  "Fokus auf Conversion, nicht Optik",
  "Persönliche Umsetzung – kein Durchlauf",
  "Entwurf in 48h, Launch in 2–3 Wochen",
  "Direkter Draht, keine Umwege",
];

export default function ComparisonSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{
        background:
          "radial-gradient(70% 50% at 50% 55%, rgba(45,85,135,.13), transparent 72%), linear-gradient(180deg,#060910 0%,#0a1626 50%,#060910 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <header className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <h2 className="text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl">
            <span className="text-white/45">Standard-Agenturen</span> vs. Mein Ansatz
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-white/50">
            Viele Agenturen liefern Websites, die gut aussehen – aber nicht funktionieren.
            Ich mache das anders.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Standard-Agenturen */}
          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.015] p-8 md:p-10">
            <h3 className="text-xl font-medium tracking-tight text-white/55">Standard-Agenturen</h3>
            <ul className="mt-7 space-y-5">
              {STANDARD.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/[0.06] text-white/35">
                    <IconX className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15.5px] text-white/45">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mein Ansatz (hervorgehoben) */}
          <div className="relative rounded-3xl border border-[#88C1ED]/25 bg-[#4686B7]/[0.06] p-8 shadow-[0_30px_70px_rgba(0,0,0,.4)] ring-1 ring-[#88C1ED]/10 md:p-10">
            <h3 className="text-xl font-medium tracking-tight text-white">Mein Ansatz</h3>
            <ul className="mt-7 space-y-5">
              {OURS.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#88C1ED]/15 text-[#88C1ED]">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15.5px] text-white/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grain-overlay" style={{ opacity: 0.18 }} />
    </section>
  );
}
