import { GlassPill, Spark } from "./ui";

const STARS = [
  { x: 14, y: 18 }, { x: 30, y: 40 }, { x: 22, y: 64 }, { x: 12, y: 80 },
  { x: 48, y: 12 }, { x: 60, y: 22 }, { x: 86, y: 16 }, { x: 90, y: 44 },
  { x: 80, y: 70 }, { x: 66, y: 82 }, { x: 40, y: 86 }, { x: 52, y: 70 },
  { x: 8, y: 46 }, { x: 94, y: 62 },
];

export default function Section3SecurePayments() {
  return (
    <section className="slide-frame">
      <div
        className="slide aspect-[1568/890]"
        style={{
          background:
            "radial-gradient(80% 70% at 50% 110%, rgba(40,80,130,.5), transparent 55%), linear-gradient(180deg,#05080e,#070d16 60%,#0a1626)",
        }}
      >
        {/* star field */}
        {STARS.map((s, i) => (
          <span
            key={i}
            className="absolute h-[3px] w-[3px] rounded-full bg-[#9cc2ef] animate-twinkle"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              animationDelay: `${(i % 5) * 0.6}s`,
              boxShadow: "0 0 6px 1px rgba(120,170,235,.7)",
            }}
          />
        ))}

        {/* connector frame */}
        <div className="absolute left-[25%] top-[28%] z-[2] h-[32%] w-[50%]">
          <span className="absolute left-0 top-0 h-px w-full bg-white/18" />
          <span className="absolute bottom-0 left-0 h-px w-full bg-white/18" />
          <span className="absolute left-0 top-0 h-full w-px bg-white/18" />
          <span className="absolute right-0 top-0 h-full w-px bg-white/18" />
          <Spark className="absolute -left-[11px] -top-[11px]" />
          <Spark className="absolute -right-[11px] -top-[11px]" />
          <Spark className="absolute -bottom-[11px] -right-[11px]" />
          <Spark className="absolute -bottom-[11px] -left-[11px]" />
        </div>

        {/* Heading */}
        <h2 className="absolute left-1/2 top-[42%] z-10 -translate-x-1/2 -translate-y-1/2 text-center font-medium leading-[1.12] tracking-tight"
            style={{ fontSize: "clamp(28px, 3.6vw, 50px)" }}>
          <span className="text-white">Schnelle</span> <span className="text-white/45">Websites, die</span><br />
          <span className="text-white/45">einfach</span> <span className="text-white">überzeugen.</span>
        </h2>

        {/* Subcopy */}
        <p className="absolute left-1/2 top-[68%] z-10 -translate-x-1/2 text-center text-[16px] leading-relaxed text-[#c6d4e6]">
          Entwickelt für blitzschnelle Ladezeiten<br />
          und maximale Sichtbarkeit.
        </p>

        {/* pills attached to the frame */}
        <div className="absolute right-[19%] top-[26%] z-20">
          <GlassPill>KI-suchoptimiert</GlassPill>
        </div>
        <div className="absolute left-[12%] top-[56%] z-20">
          <GlassPill>Top Performance</GlassPill>
        </div>
      </div>
    </section>
  );
}
