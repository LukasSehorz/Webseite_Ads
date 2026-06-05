
export default function HeroPortrait() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a1726]">
      {/* (1) base background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* (2) Lukas — left portrait. Sein Foto ist weiter weg aufgenommen, daher
          per overflow-Wrapper + scale hineingezoomt, damit nur der Oberkörper
          sichtbar ist (gleiche Bildgröße wie Hofe). */}
      <div
        className="absolute bottom-0 left-0 z-[5] h-[82%] w-[44%] overflow-hidden sm:h-[88%] sm:w-[40%] md:w-[38%]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, #000 58%, transparent 98%), linear-gradient(to top, #000 80%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskImage:
            "linear-gradient(to right, #000 58%, transparent 98%), linear-gradient(to top, #000 80%, transparent 100%)",
          maskComposite: "intersect",
        }}
      >
        <img
          src="/lukas.png"
          alt="Lukas"
          className="h-full w-full object-cover object-top"
          style={{ filter: "brightness(0.8)", transform: "scale(1.32) translateY(-4%)", transformOrigin: "top center" }}
        />
      </div>

      {/* (3) Hofe — right portrait, inner + top edges feathered into the background */}
      <img
        src="/hofe.png"
        alt="Hofe"
        className="absolute bottom-0 right-0 z-[5] h-[82%] w-[44%] object-cover object-top sm:h-[88%] sm:w-[40%] md:w-[38%]"
        style={{
          filter: "brightness(0.8)",
          WebkitMaskImage:
            "linear-gradient(to left, #000 58%, transparent 98%), linear-gradient(to top, #000 80%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskImage:
            "linear-gradient(to left, #000 58%, transparent 98%), linear-gradient(to top, #000 80%, transparent 100%)",
          maskComposite: "intersect",
        }}
      />

      {/* (4) gentle top darkener + soft corner vignette unifies portraits + background */}
      <div
        className="absolute inset-0 z-[6]"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,18,30,.55) 0%, rgba(8,18,30,.18) 18%, transparent 40%), radial-gradient(125% 115% at 50% 48%, transparent 60%, rgba(7,16,27,.5) 100%)",
        }}
      />
      {/* (5) bottom legibility for captions + clean seam fade into Section 2 (#0a1726) */}
      <div
        className="absolute inset-0 z-[6]"
        style={{ background: "linear-gradient(180deg, transparent 70%, rgba(10,23,38,.5) 86%, #0a1726 100%)" }}
      />
      {/* (6) film / pixel grain */}
      <div className="grain-overlay z-[7]" />

      {/* centered logo + CTA — stands between the two portraits */}
      <div className="absolute left-1/2 top-[52%] z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-9 text-white">
        <span className="text-[58px] font-normal tracking-tight">Flowstate AI</span>
        <a
          href="#kontakt"
          className="group inline-flex items-center gap-3 rounded-full bg-[#4686B7] px-8 py-4 text-[17px] font-semibold text-white shadow-[0_0_32px_rgba(70,134,183,.5)] transition-all duration-200 hover:bg-[#5a9acc] hover:shadow-[0_0_44px_rgba(70,134,183,.65)] active:scale-95"
        >
          Kostenlose Analyse sichern
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-0.5">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* bottom caption — centered */}
      <div className="absolute inset-x-0 bottom-[8%] z-10 mx-auto max-w-[640px] px-12">
        <p className="text-center text-[14px] leading-relaxed text-[#aebccf]">
          Plane, gestalte und skaliere deinen Online-Auftritt mit<br />
          datenbasierten Entscheidungen und langfristiger Vision.
        </p>
      </div>
    </section>
  );
}
