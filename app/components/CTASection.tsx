export default function CTASection() {
  return (
    <section
      className="relative w-full overflow-hidden py-24 md:py-28"
      style={{
        background: "linear-gradient(180deg,#060910 0%,#0b1825 50%,#060910 100%)",
      }}
    >
      {/* Top separator line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Center glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-[600px] rounded-full bg-[#4686B7]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Bereit, digital zu wachsen?
        </h2>
        <p className="mt-5 text-[16px] text-white/50">
          Ob Website, Ads oder KI-Automatisierung – das Erstgespräch ist kostenlos und unverbindlich.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-[#4686B7] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_0_30px_rgba(70,134,183,.35)] transition-all duration-200 hover:bg-[#5a9acc] hover:shadow-[0_0_40px_rgba(70,134,183,.5)] active:scale-95"
          >
            Jetzt Erstgespräch buchen
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href="tel:+491723465896"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-[15px] font-medium text-white/80 backdrop-blur-sm transition-all duration-200 hover:border-white/25 hover:bg-white/[0.07] hover:text-white active:scale-95"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 3.5A1.5 1.5 0 013.5 2h.879a1 1 0 01.95.685l.826 2.479a1 1 0 01-.23 1.032L4.5 7.5c.974 1.628 2.372 3.026 4 4l1.304-1.425a1 1 0 011.032-.23l2.479.826A1 1 0 0114 11.621V12.5A1.5 1.5 0 0112.5 14C6.701 14 2 9.299 2 3.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            0172 3465896
          </a>
        </div>
      </div>

      <div className="grain-overlay" style={{ opacity: 0.15 }} />
    </section>
  );
}
