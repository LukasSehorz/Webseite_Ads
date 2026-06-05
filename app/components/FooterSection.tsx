import Link from "next/link";

const NAV_LINKS = [
  "Home",
  "Leistungen",
  "Webdesign",
  "SEO-Optimierung",
  "Portfolio",
  "Prozess",
  "Preise",
  "Über uns",
  "FAQ",
  "Kontakt",
];

const SERVICES = [
  "Webdesign für Handwerk",
  "Webdesign für Arztpraxen",
  "Webdesign für Gastronomie",
  "Webdesign für Coaches",
  "Webdesign für Kanzleien",
  "Webdesign für Agenturen",
];

function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function FooterSection() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg,#060910 0%,#050810 100%)" }}
    >
      {/* Top separator */}
      <div className="pointer-events-none h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_auto_auto_auto] md:gap-8 lg:gap-16">

          {/* Col 1: Brand */}
          <div className="max-w-xs">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-[20px] font-bold tracking-tight text-white">
                Flowstate <span className="text-[#88C1ED]">AI</span> Solutions
              </span>
            </div>
            <p className="text-[13.5px] leading-relaxed text-white/45">
              KI-optimiertes Webdesign für Unternehmen – suchmaschinenoptimiert, schnell und conversionstark.
              Euer Partner für mehr Sichtbarkeit und Anfragen.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] text-white/55">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" fill="currentColor" opacity=".4" />
                  <path d="M6 8l1.5 1.5L10.5 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                DSGVO-konform
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] text-white/55">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1l.5 1.5H11l-2 1.5.8 2.5L8 5.5 6.2 6.5 7 4 5 2.5h2.5L8 1z" fill="currentColor" opacity=".5" />
                </svg>
                Qualität aus Deutschland
              </span>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/45 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white/80"
                aria-label="LinkedIn"
              >
                <IconLinkedIn />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/45 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] hover:text-white/80"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-white/35">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[14px] text-white/55 transition-colors duration-150 hover:text-white/90"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-white/35">
              Branchen
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-[14px] text-white/55 transition-colors duration-150 hover:text-white/90"
                  >
                    {s}
                  </a>
                </li>
              ))}
              <li className="pt-2 text-[13px] leading-relaxed text-white/30">
                Wir betreuen Kunden<br />
                deutschlandweit – vor Ort<br />
                oder digital.
              </li>
            </ul>
          </div>

          {/* Col 4: Kontakt */}
          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-white/35">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[14px] text-white/55">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="flex-none text-white/30">
                  <path d="M2 4l6 4.5L14 4M2 3h12a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                Lukas.sehorz@flowstate-ai.net
              </li>
              <li className="flex items-center gap-3 text-[14px] text-white/55">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="flex-none text-white/30">
                  <path d="M2 3.5A1.5 1.5 0 013.5 2h.879a1 1 0 01.95.685l.826 2.479a1 1 0 01-.23 1.032L4.5 7.5c.974 1.628 2.372 3.026 4 4l1.304-1.425a1 1 0 011.032-.23l2.479.826A1 1 0 0114 11.621V12.5A1.5 1.5 0 0112.5 14C6.701 14 2 9.299 2 3.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                01723 465896
              </li>
              <li className="flex items-center gap-3 text-[14px] text-white/55">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="flex-none text-white/30">
                  <path d="M8 1.5a5 5 0 100 10A5 5 0 008 1.5zM0 6.5a8 8 0 1116 0 8 8 0 01-16 0z" stroke="currentColor" strokeWidth="1.1" />
                  <path d="M8 4v3l2 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                Mo – So: 8:00 – 21:00 Uhr
              </li>
              <li className="flex items-start gap-3 text-[14px] text-white/55">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-none text-white/30">
                  <path d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.75 4.5 8.5 4.5 8.5s4.5-4.75 4.5-8.5c0-2.485-2.015-4.5-4.5-4.5zM8 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                Deutschlandweit –<br />remote &amp; vor Ort
              </li>
            </ul>

            <a
              href="#kontakt"
              className="mt-7 inline-flex items-center gap-2 rounded-xl border border-[#4686B7]/40 bg-[#4686B7]/10 px-5 py-2.5 text-[13.5px] font-medium text-[#88C1ED] transition-all duration-200 hover:border-[#4686B7]/60 hover:bg-[#4686B7]/20 active:scale-95"
            >
              Projekt besprechen
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pointer-events-none h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <p className="text-[13px] text-white/25">
          © 2025 Flowstate AI Solutions. Alle Rechte vorbehalten.
        </p>
        <div className="flex gap-6">
          <Link href="/impressum" className="text-[13px] text-white/30 transition-colors hover:text-white/60">Impressum</Link>
          <Link href="/datenschutz" className="text-[13px] text-white/30 transition-colors hover:text-white/60">Datenschutz</Link>
        </div>
      </div>

      <div className="grain-overlay" style={{ opacity: 0.14 }} />
    </footer>
  );
}
