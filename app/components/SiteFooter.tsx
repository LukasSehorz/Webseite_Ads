"use client";

import { Logo, ArrowButton } from "./ui";

const NAV = [
  {
    label: "Leistungen",
    links: ["Webdesign", "SEO-Optimierung", "KI-Integration", "Branding & CI"],
  },
  {
    label: "Unternehmen",
    links: ["Über uns", "Referenzen", "Testimonials", "Unser Prozess"],
  },
  {
    label: "Kontakt",
    links: ["Anfrage stellen", "Instagram", "LinkedIn", "hello@flowstate-ai.de"],
  },
];

export default function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #05080e 0%, #060c16 55%, #08111f 100%)",
      }}
    >
      {/* Bottom blue glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
          width: "90%",
          height: "420px",
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(70,120,190,.2) 0%, rgba(40,80,140,.08) 45%, transparent 70%)",
        }}
      />

      {/* Watermark */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center"
        style={{ height: "55%" }}
        aria-hidden="true"
      >
        <span
          style={{
            fontSize: "clamp(72px, 16vw, 260px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 0.82,
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.045)",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          Flowstate
        </span>
      </div>

      {/* Grain */}
      <div className="grain-overlay" style={{ opacity: 0.14 }} />

      {/* ─── Content ─── */}
      <div className="relative z-10 mx-auto max-w-[1320px] px-9">

        {/* ── Hero row ── */}
        <div className="flex flex-col gap-10 border-b border-white/[0.07] pb-16 pt-24 md:flex-row md:items-start md:justify-between">

          {/* Left: logo + tagline */}
          <div className="max-w-[420px]">
            <Logo className="mb-8" />
            <h2
              style={{
                fontSize: "clamp(28px, 3.6vw, 52px)",
                fontWeight: 500,
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
                background: "linear-gradient(170deg, #eef3fb 30%, #4d7aaa)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Bereit für deine<br />neue Website?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/45">
              Von der Idee bis zum Launch — wir begleiten<br />
              dein Projekt von A bis Z.
            </p>
          </div>

          {/* Right: glass CTA card */}
          <div
            className="flex-shrink-0 self-start rounded-[28px] border border-white/[0.09] p-8"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,.055), rgba(255,255,255,.02))",
              backdropFilter: "blur(18px)",
              boxShadow:
                "0 32px 64px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.07)",
              minWidth: "280px",
            }}
          >
            <div className="mb-2 flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background: "#5fc86a",
                  boxShadow: "0 0 8px 2px rgba(95,200,106,.5)",
                }}
              />
              <span className="text-[13px] text-white/40 tracking-wide">Verfügbar für neue Projekte</span>
            </div>
            <p className="mt-5 mb-7 text-[15px] leading-relaxed text-white/55 max-w-[220px]">
              Kostenlose Erstberatung — wir melden uns innerhalb von 24h.
            </p>
            <ArrowButton label="Projekt starten" />
          </div>
        </div>

        {/* ── Nav grid ── */}
        <div className="grid grid-cols-3 gap-8 border-b border-white/[0.07] py-14">
          {NAV.map(({ label, links }) => (
            <div key={label}>
              <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-white/28">
                {label}
              </p>
              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group flex items-center gap-2 text-[15px] text-white/50 transition-colors duration-200 hover:text-white/90"
                    >
                      <span
                        className="h-px w-0 bg-[#5a90cc] transition-all duration-300 group-hover:w-3"
                      />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-start justify-between gap-4 py-8 text-[13px] text-white/28 sm:flex-row sm:items-center">
          <span>© 2026 Flowstate AI — Alle Rechte vorbehalten</span>
          <div className="flex gap-6">
            {["Impressum", "Datenschutz", "AGB"].map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors duration-200 hover:text-white/60"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
