import { Logo, ArrowButton } from "./ui";

export default function Section1Hero() {
  return (
    <section className="slide-frame">
      <div className="slide aspect-[1568/940] bg-[#05080e]">
        {/* ATM / device background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/atm-bg.png')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 80% at 50% 55%, transparent 30%, rgba(5,9,15,.55) 75%), linear-gradient(180deg, rgba(5,9,15,.45), rgba(5,9,15,.2) 40%, rgba(5,9,15,.7))",
          }}
        />

        {/* Top bar */}
        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-9 pt-8">
          <Logo />
          <span className="text-[15px] text-[#cdd9e8]">Digitalagentur</span>
        </header>

        {/* Big faded title */}
        <h2 className="pointer-events-none absolute left-1/2 top-[1%] z-20 -translate-x-1/2 whitespace-nowrap text-center font-semibold tracking-tight"
            style={{
              fontSize: "clamp(38px, 6.5vw, 105px)",
              background: "linear-gradient(180deg, rgba(95,150,220,.65), rgba(40,80,140,.12))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}>
          Webdesign
        </h2>

        {/* Info block – centered, CTA below */}
        <div className="absolute left-1/2 top-[62%] z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col items-start">
          <div className="flex items-center gap-4">
            <span className="h-7 w-px bg-white shadow-[0_0_8px_rgba(255,255,255,.6)]" />
            <span className="text-[34px] font-medium leading-none text-white">
              +150 <span className="text-[15px] font-normal text-[#b9c6d8]">Projekte</span>
            </span>
          </div>
          <div className="mt-7 flex items-center gap-4">
            <span className="h-3 w-3 rounded-full bg-white shadow-[0_0_12px_3px_rgba(150,190,235,.8)]" />
            <span className="text-[16px] text-white">KI-suchoptimiert</span>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <span className="h-3 w-3 rounded-full bg-white shadow-[0_0_12px_3px_rgba(150,190,235,.8)]" />
            <span className="text-[16px] text-white">SEO-Optimiert</span>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <span className="h-3 w-3 rounded-full bg-white shadow-[0_0_12px_3px_rgba(150,190,235,.8)]" />
            <span className="text-[16px] text-white">Benutzerfreundlich</span>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <span className="h-3 w-3 rounded-full bg-white shadow-[0_0_12px_3px_rgba(150,190,235,.8)]" />
            <span className="text-[16px] text-white">Modern &amp; hochwertig</span>
          </div>
          <div className="mt-8">
            <ArrowButton label="Projekt starten" />
          </div>
        </div>

        {/* Bottom-right portrait card (PLACEHOLDER) */}
        <div className="absolute bottom-0 right-9 z-10 h-[46%] w-[15%]">
          {/* folder tab */}
          <span className="absolute -top-3 left-1/2 h-3 w-16 -translate-x-1/2 rounded-t-md border border-b-0 border-white/15 bg-[#0c1622]" />
          <div className="relative h-full w-full overflow-hidden rounded-t-lg bg-cover bg-top"
            style={{ backgroundImage: "url('/portrait-profile.png')" }} />
        </div>
      </div>
    </section>
  );
}
