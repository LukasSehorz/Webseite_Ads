"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Dummy-Rezensionen — später einfach Texte/Namen austauschen.        */
/* ------------------------------------------------------------------ */
type Review = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  rating: number;
};

const REVIEWS: Review[] = [
  {
    quote:
      "Unsere neue Website bringt deutlich mehr Anfragen — und sieht dabei richtig hochwertig aus. Genau das, was wir wollten.",
    name: "Sandra Keller",
    role: "Inhaberin · Boutique Betthüpferl",
    initials: "SK",
    rating: 5,
  },
  {
    quote:
      "Endlich eine Seite, die auch Bewerber überzeugt. Schnell, modern und von Anfang bis Ende top betreut.",
    name: "Markus Fischer",
    role: "Geschäftsführer · M. Fischer Bau",
    initials: "MF",
    rating: 5,
  },
  {
    quote:
      "Dank der KI-Suchoptimierung werden wir online deutlich häufiger gefunden. Die Investition hat sich gelohnt.",
    name: "Tobias Schediwy",
    role: "Praxisinhaber · Physiotherapie",
    initials: "TS",
    rating: 5,
  },
  {
    quote:
      "Von der Strategie bis zum Launch absolut professionell. Klare Empfehlung für jeden, der online wachsen will.",
    name: "K. & M.",
    role: "Geschäftsführung · K&M Trockenbau",
    initials: "KM",
    rating: 5,
  },
  {
    quote:
      "Pixelgenaues Design und ein Team, das wirklich mitdenkt. Unsere Kunden lieben die neue Seite.",
    name: "Sascha Schmidt",
    role: "Malermeister · Schmidt Malerei",
    initials: "SS",
    rating: 5,
  },
];

function Stars({ count = 5, className = "" }: { count?: number; className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-[#f5c451]" aria-hidden="true">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.9l-4.94 2.6.94-5.49-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(2);
  const total = REVIEWS.length;

  const next = () => setActive((a) => (a + 1) % total);
  const prev = () => setActive((a) => (a - 1 + total) % total);

  return (
    <section
      className="relative w-full overflow-hidden py-28 md:py-36"
      style={{
        background:
          "radial-gradient(70% 58% at 50% 52%, rgba(70,134,183,.16), transparent 70%), linear-gradient(180deg,#060910 0%,#0a1626 50%,#060910 100%)",
      }}
    >
      {/* Heading */}
      <div className="relative z-10 mx-auto mb-14 max-w-2xl px-6 text-center md:mb-20">
        <p className="text-[13px] uppercase tracking-[0.22em] text-white/40">Rezensionen</p>
        <h2 className="mt-4 text-4xl font-medium tracking-tight text-white md:text-5xl">
          Das sagen unsere Kunden
        </h2>
      </div>

      {/* Coverflow-Bühne */}
      <div
        className="relative z-10 mx-auto h-[300px] w-full max-w-[1100px] md:h-[340px]"
        style={{ perspective: 1500 }}
      >
        {REVIEWS.map((r, i) => {
          let offset = i - active;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;
          const abs = Math.abs(offset);
          const visible = abs <= 2;

          return (
            <motion.button
              key={r.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Rezension von ${r.name}`}
              className="absolute left-1/2 top-1/2 w-[340px] cursor-pointer text-left"
              style={{ marginLeft: -170, marginTop: -120, zIndex: 50 - abs }}
              animate={{
                x: offset * 230,
                rotateY: -offset * 34,
                scale: 1 - abs * 0.14,
                z: -abs * 160,
                opacity: visible ? 1 - abs * 0.32 : 0,
                pointerEvents: visible ? "auto" : "none",
              }}
              transition={{ type: "spring", stiffness: 220, damping: 30 }}
            >
              <div
                className={`flex h-[240px] flex-col justify-between rounded-3xl border p-7 backdrop-blur-md transition-colors ${
                  offset === 0
                    ? "border-[#88C1ED]/30 bg-white/[0.07] shadow-[0_30px_70px_rgba(0,0,0,.55)] ring-1 ring-[#88C1ED]/20"
                    : "border-white/10 bg-white/[0.04] shadow-2xl shadow-black/50"
                }`}
              >
                <div>
                  <Stars />
                  <p className="mt-4 text-[15px] leading-relaxed text-white/85">
                    “{r.quote}”
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4686B7] to-[#1d3a58] text-[13px] font-medium text-white">
                    {r.initials}
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[14px] font-medium text-white">{r.name}</span>
                    <span className="text-[12px] text-white/50">{r.role}</span>
                  </span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="relative z-20 mt-10 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Vorherige Rezension"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-colors hover:border-[#88C1ED]/40 hover:bg-white/10"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {REVIEWS.map((r, i) => (
            <button
              key={r.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Zu Rezension ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-6 bg-[#88C1ED]" : "w-1.5 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Nächste Rezension"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-colors hover:border-[#88C1ED]/40 hover:bg-white/10"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      {/* Gesamt-Rating */}
      <div className="relative z-10 mt-12 flex flex-col items-center gap-2">
        <Stars />
        <p className="text-[14px] text-white/55">
          <span className="font-medium text-white">4,9/5</span> — bewertet von 40+ Kunden
        </p>
      </div>

      {/* Grain */}
      <div className="grain-overlay" style={{ opacity: 0.22 }} />

      {/* Bottom fade into next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{ background: "linear-gradient(180deg, transparent, #060910)" }}
      />
    </section>
  );
}
