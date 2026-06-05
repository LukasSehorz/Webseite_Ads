import { ArrowButton, Spark } from "./ui";

export default function Section2SmartFinance() {
  return (
    <section>
      <div
        className="slide aspect-[1568/865]"
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

        {/* subtle grid lines + sparkles */}
        <span className="absolute left-[66%] top-0 z-[2] h-[93%] w-px bg-white/10" />
        <span className="absolute left-0 top-[74%] z-[2] h-px w-full bg-white/10" />
        <Spark className="absolute left-[66%] top-[24%] z-[3] -translate-x-1/2 opacity-70" />
        <Spark className="absolute left-[66%] top-[74%] z-[3] -translate-x-1/2 -translate-y-1/2 opacity-70" />

        {/* Heading */}
        <h2 className="absolute left-[42%] top-[14%] z-10 font-semibold leading-[0.98] tracking-tight"
            style={{ fontSize: "clamp(40px, 6.4vw, 92px)" }}>
          <span className="text-white/45">Modernes</span> <span className="text-white">Webdesign</span><br />
          <span className="text-white/45">für mehr</span><br />
          <span className="text-white">Wachstum</span>
        </h2>

        {/* Subcopy */}
        <p className="absolute left-[48%] top-[64%] z-10 max-w-[300px] text-[15px] leading-relaxed text-[#dbe5f2]">
          Wir gestalten schnelle, KI-optimierte<br />
          Websites, die Kunden und Bewerber<br />
          überzeugen.
        </p>

        {/* View platform button */}
        <div className="absolute bottom-[14%] right-[7%] z-10">
          <ArrowButton label="Projekte ansehen" light />
        </div>

        {/* Performance glass card */}
        <div className="absolute left-[11%] top-[38%] z-10 w-[20%] min-w-[230px] -translate-y-1/2 rounded-[26px] border border-white/20 bg-white/10 p-6 backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,.35)]">
          <div className="flex items-center gap-3">
            <span className="h-7 w-7 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,.5)]" />
            <span className="text-[18px] text-white">Sichtbarkeit</span>
          </div>
          <svg viewBox="0 0 240 110" className="mt-5 w-full" fill="none">
            <path d="M4,86 C40,80 56,40 92,46 C128,52 150,18 176,34 C200,49 218,40 236,30"
              stroke="url(#perfLine)" strokeWidth={3} strokeLinecap="round" />
            <defs>
              <linearGradient id="perfLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#9fc36a" />
                <stop offset="100%" stopColor="#e6e36a" />
              </linearGradient>
            </defs>
          </svg>
          <div className="mt-4">
            <div className="text-[26px] font-medium text-white">+240%</div>
            <div className="text-[13px] text-white/60">in KI-Suchen</div>
          </div>
        </div>
      </div>
    </section>
  );
}
