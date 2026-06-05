"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FAQS = [
  {
    q: "Was kostet eine professionelle Website?",
    a: "Der Preis richtet sich nach Umfang und Anforderungen. Einfache Unternehmenswebsites starten typischerweise ab 2.500 €, während komplexere Projekte mit erweiterten Funktionen entsprechend mehr kosten. Im kostenlosen Erstgespräch analysieren wir Ihre Anforderungen und erstellen ein transparentes, individuelles Angebot – ohne versteckte Kosten.",
  },
  {
    q: "Wie lange dauert die Erstellung einer Website?",
    a: "Die Entwicklungsdauer hängt vom Projektumfang ab. Eine klassische Unternehmenswebsite ist in 7–14 Tagen fertig. Größere Projekte mit Shop-Funktionen oder individuellen Features dauern 3–4 Wochen. Wir arbeiten mit klaren Meilensteinen und halten Sie während des gesamten Prozesses auf dem Laufenden.",
  },
  {
    q: "Arbeiten Sie deutschlandweit?",
    a: "Ja. Die Zusammenarbeit funktioniert deutschlandweit. Briefings, Abstimmungen und Freigaben laufen komplett digital ab. Auf Wunsch sind auch persönliche Treffen möglich.",
  },
  {
    q: "Ist KI-Suchoptimierung im Webdesign enthalten?",
    a: "Ja, grundlegende KI-Suchmaschinenoptimierung ist bei uns Standard. Jede Website erhält eine saubere technische Struktur, schnelle Ladezeiten, optimierte Meta-Daten und eine mobile Darstellung – alles Faktoren, die Google und KI-Suchmaschinen wie ChatGPT bewerten. Für erweiterte SEO-Strategien bieten wir separate Pakete an.",
  },
  {
    q: "Was unterscheidet Flowstate AI Solutions von anderen Agenturen?",
    a: "Bei uns erhalten Sie einen festen Ansprechpartner statt wechselnder Projektmanager, klare Prozesse ohne Agentur-Overhead und Websites, die nicht nur gut aussehen, sondern messbare Ergebnisse bringen. Wir fokussieren uns auf Conversion-Optimierung und KI-Suchoptimierung – Ihre Website soll Besucher zu Kunden machen.",
  },
  {
    q: "Bieten Sie Wartung und Pflege nach der Fertigstellung an?",
    a: "Ja, wir bieten optionale Wartungspakete an, die regelmäßige Updates, Sicherheits-Checks und kleinere Anpassungen umfassen. So bleibt Ihre Website technisch aktuell und sicher. Auf Wunsch übernehmen wir auch Content-Updates oder die Integration neuer Funktionen.",
  },
  {
    q: "Kann ich meine bestehende Website überarbeiten lassen?",
    a: "Absolut. Viele unserer Kunden kommen mit einer bestehenden Website, die überarbeitet oder komplett neu gestaltet werden soll. Im Erstgespräch analysieren wir Ihre aktuelle Seite, identifizieren Schwachstellen und zeigen Ihnen, wie wir gemeinsam mehr aus Ihrer Online-Präsenz herausholen.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="flex-none text-white/40"
    >
      <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
}

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{
        background:
          "radial-gradient(60% 40% at 50% 30%, rgba(45,85,135,.11), transparent 70%), linear-gradient(180deg,#060910 0%,#0a1626 50%,#060910 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <header className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Häufige Fragen
          </h2>
        </header>

        <div className="divide-y divide-white/[0.08]">
          {FAQS.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-white focus-visible:outline-none"
              >
                <span className={`text-[16px] font-semibold leading-snug transition-colors duration-200 ${open === i ? "text-white" : "text-white/80"}`}>
                  {faq.q}
                </span>
                <ChevronIcon open={open === i} />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="pb-6 text-[14.5px] leading-relaxed text-white/55">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <div className="grain-overlay" style={{ opacity: 0.18 }} />
    </section>
  );
}
