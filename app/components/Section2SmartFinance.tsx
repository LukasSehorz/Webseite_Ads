import { IconCheck } from "./icons";
import BuzzwordMarquee from "./BuzzwordMarquee";

const BENEFITS = [
  "7–14 Tage bis zum Launch",
  "3× mehr Anfragen im Schnitt",
  "Optimiert auf Kunden- oder Mitarbeitergewinnung",
  "Individuell entwickelt – kein Baukasten",
  "Conversion-Texte & Inhalte inklusive",
  "Eigene KI-Bildwelt statt Stockfotos",
  "Langfristiger Support nach Projektabschluss",
];

export default function Section2SmartFinance() {
  return (
    <section>
      {/* ===================== DESKTOP (unverändert) ===================== */}
      <div
        className="slide hidden aspect-[1568/865] sm:block"
        style={{
          background: "radial-gradient(70% 84% at 60% 17%, #aebfd2 0%, #5f80a6 24%, #2f4f74 56%, #1b3a5c 86%)",
          borderRadius: 0,
          boxShadow: "none",
          maxWidth: "100%",
        }}
      >
        {/* fallback solid base behind the (placeholder) portrait */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg,#3a5d86,#24446b 60%,#16304d)" }}
        />

        {/* Full-bleed office background (no person) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/office-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(20,38,60,.2) 0%, transparent 30%, rgba(12,24,40,.5) 72%, rgba(14,28,46,.62) 100%), radial-gradient(55% 60% at 70% 4%, rgba(220,232,248,.28), transparent 55%)" }}
        />

        {/* Naht-Overlays */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg, #0a1726 0%, rgba(10,23,38,.55) 5%, transparent 13%), linear-gradient(0deg, #060910 0%, #060910 5%, rgba(6,9,16,.7) 12%, rgba(6,9,16,.25) 20%, transparent 30%)",
          }}
        />
        {/* Hard bottom cap — volldeckend über volle Breite */}
        <div className="absolute inset-x-0 bottom-0 z-[6]" style={{ height: "3%", background: "#060910" }} />

        {/* faint ring */}
        <span className="absolute left-[20%] top-[8%] z-[2] h-64 w-64 rounded-full border border-white/15" />

        {/* Headlines + CTAs */}
        <div className="absolute left-[42%] top-[21%] z-10 w-[620px] max-w-[48vw] text-center">
          {/* Haupt-Headline */}
          <h1 className="whitespace-nowrap font-semibold leading-[0.98] tracking-tight text-white"
              style={{ fontSize: "clamp(38px, 5.2vw, 76px)" }}>
            Webdesign-Agentur
          </h1>

          {/* Zweite Headline (kleiner) */}
          <h2 className="mt-8 font-medium leading-[1.25] tracking-tight"
              style={{ fontSize: "clamp(20px, 2.6vw, 38px)" }}>
            <span className="text-white/45">Modernes Webdesign für mehr</span><br />
            <span className="text-white/45">Sichtbarkeit, Anfragen &amp; Wachstum</span>
          </h2>

          {/* CTAs zentriert darunter */}
          <div className="mx-auto mt-14 flex w-[360px] flex-col gap-4">
            <a
              href="#kontakt"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#4686B7] px-9 py-5 text-[18px] font-semibold text-white shadow-[0_0_30px_rgba(70,134,183,.35)] transition-all duration-200 hover:bg-[#5a9acc] hover:shadow-[0_0_40px_rgba(70,134,183,.5)] active:scale-95"
            >
              Erstgespräch vereinbaren
              <svg width="19" height="19" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="tel:+491723465896"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] px-9 py-5 text-[18px] font-medium text-white/90 backdrop-blur-sm transition-all duration-200 hover:border-white/35 hover:bg-white/[0.1] hover:text-white active:scale-95"
            >
              <svg width="19" height="19" viewBox="0 0 16 16" fill="none">
                <path d="M2 3.5A1.5 1.5 0 013.5 2h.879a1 1 0 01.95.685l.826 2.479a1 1 0 01-.23 1.032L4.5 7.5c.974 1.628 2.372 3.026 4 4l1.304-1.425a1 1 0 011.032-.23l2.479.826A1 1 0 0114 11.621V12.5A1.5 1.5 0 0112.5 14C6.701 14 2 9.299 2 3.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Jetzt anrufen
            </a>
          </div>
        </div>

        {/* Stats / Benefits glass card */}
        <div className="absolute left-[8%] top-[49%] z-10 w-[24%] min-w-[300px] max-w-[360px] -translate-y-1/2 rounded-[26px] border border-white/15 bg-white/[0.08] p-7 shadow-[0_30px_70px_rgba(0,0,0,.4)] ring-1 ring-white/5 backdrop-blur-md">
          {/* Heading */}
          <div
            className="text-[44px] font-semibold leading-none tracking-tight"
            style={{
              backgroundImage: "linear-gradient(180deg,#ffffff,#aacdf0)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            +40
          </div>
          <p className="mt-2 text-[15px] font-medium text-white/70">umgesetzte Projekte</p>

          {/* divider */}
          <div className="my-4 h-px w-full bg-white/10" />

          {/* benefits */}
          <ul className="space-y-[26px]">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-[25px] w-[25px] flex-none items-center justify-center rounded-full bg-[#88C1ED]/15 text-[#88C1ED]">
                  <IconCheck className="h-4 w-4" />
                </span>
                <span className="text-[16.5px] leading-snug text-white/80">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Durchlaufendes Buzzword-Banner – liegt im Bild auf dem Schreibtisch */}
        <div className="absolute inset-x-0 bottom-[2.5%] z-10">
          <BuzzwordMarquee />
        </div>
      </div>

      {/* ===================== MOBILE (gestapelt) ===================== */}
      <div className="relative overflow-hidden bg-[#060910] sm:hidden">
        {/* Kopf-Band: dezenter blauer Glow hinter Headline + Subline (kein Foto) */}
        <div className="relative px-6 pb-11 pt-24">
          {/* Naht oben: weicher Übergang aus dem Hero (#0a1726) */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #0a1726 0%, rgba(10,23,38,.5) 9%, transparent 28%)",
            }}
          />
          {/* Dezenter blauer Radial-Glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(68% 52% at 50% 40%, rgba(70,134,183,.32), rgba(70,134,183,.10) 46%, transparent 72%)",
            }}
          />

          {/* Headline + Subline */}
          <div className="relative z-10">
            <h1 className="text-center text-[32px] font-semibold leading-[1.08] tracking-tight text-white">
              Webdesign-Agentur
            </h1>
            <h2 className="mx-auto mt-4 max-w-[320px] text-center text-[17px] font-medium leading-[1.4] tracking-tight text-white/45">
              Modernes Webdesign für mehr Sichtbarkeit, Anfragen &amp; Wachstum
            </h2>
          </div>
        </div>

        {/* Inhalt auf solidem Hintergrund */}
        <div className="relative z-10 px-6">
          {/* Stats / Benefits glass card – heller Frosted-Glass-Look wie Desktop */}
          <div
            className="rounded-[24px] border border-white/20 p-6 shadow-[0_24px_60px_rgba(0,0,0,.5),0_0_55px_rgba(70,134,183,.22)] ring-1 ring-white/10 backdrop-blur-md"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,.17), rgba(255,255,255,.07))" }}
          >
            <div
              className="text-[40px] font-semibold leading-none tracking-tight"
              style={{
                backgroundImage: "linear-gradient(180deg,#ffffff,#aacdf0)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              +40
            </div>
            <p className="mt-2 text-[15px] font-medium text-white/70">umgesetzte Projekte</p>

            <div className="my-4 h-px w-full bg-white/10" />

            <ul className="space-y-4">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-[25px] w-[25px] flex-none items-center justify-center rounded-full bg-[#88C1ED]/15 text-[#88C1ED]">
                    <IconCheck className="h-4 w-4" />
                  </span>
                  <span className="text-[16px] leading-snug text-white/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTAs */}
          <div className="mt-7 flex flex-col gap-3">
            <a
              href="#kontakt"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#4686B7] px-8 py-4 text-[16px] font-semibold text-white shadow-[0_0_30px_rgba(70,134,183,.35)] transition-all duration-200 hover:bg-[#5a9acc] active:scale-95"
            >
              Erstgespräch vereinbaren
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="tel:+491723465896"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] px-8 py-4 text-[16px] font-medium text-white/90 backdrop-blur-sm transition-all duration-200 hover:border-white/35 hover:bg-white/[0.1] hover:text-white active:scale-95"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M2 3.5A1.5 1.5 0 013.5 2h.879a1 1 0 01.95.685l.826 2.479a1 1 0 01-.23 1.032L4.5 7.5c.974 1.628 2.372 3.026 4 4l1.304-1.425a1 1 0 011.032-.23l2.479.826A1 1 0 0114 11.621V12.5A1.5 1.5 0 0112.5 14C6.701 14 2 9.299 2 3.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Jetzt anrufen
            </a>
          </div>
        </div>

        {/* Durchlaufende Zeile */}
        <div className="relative z-10 mt-10 pb-7">
          <BuzzwordMarquee />
        </div>
      </div>
    </section>
  );
}
