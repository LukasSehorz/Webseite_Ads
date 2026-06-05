import { GlassPill } from "./ui";

const PILLS = [
  { label: "Briefing & Ziele", left: "23%", top: "56%" },
  { label: "Zielgruppen-Analyse", left: "15%", top: "65.5%" },
  { label: "UI/UX Design", left: "40%", top: "56%" },
  { label: "Prototyp & Feedback", left: "41%", top: "65.5%" },
  { label: "Copywriting", left: "46%", top: "75%" },
  { label: "Entwicklung", left: "63%", top: "56%" },
  { label: "KI-Suchoptimierung", left: "58%", top: "65.5%" },
  { label: "Launch & Betreuung", left: "63%", top: "75%" },
];

/* Großzügig gestrichelter Kreis als SVG (stroke-dasharray steuerbar) */
function DashedCircle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <circle
        cx="50"
        cy="50"
        r="49"
        stroke="rgba(255,255,255,.30)"
        strokeWidth="0.35"
        strokeDasharray="3 2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Section4Roadmap() {
  return (
    <section className="slide-frame relative">
      {/* fade the top frame area into the previous dark section (#060910) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-50"
        style={{
          height: "clamp(32px, 4.2vw, 68px)",
          background: "linear-gradient(180deg, #060910 0%, rgba(6,9,16,.55) 45%, transparent 100%)",
        }}
      />
      {/* fade the bottom frame area into the next dark section (#060910) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-50"
        style={{
          height: "clamp(40px, 5vw, 80px)",
          background: "linear-gradient(0deg, #060910 0%, rgba(6,9,16,.6) 50%, transparent 100%)",
        }}
      />
      <div
        className="slide aspect-[1568/845]"
        style={{
          background:
            "radial-gradient(90% 80% at 50% 124%, rgba(45,85,135,.26), transparent 55%), linear-gradient(180deg,#070a10 0%,#080d15 45%,#070b12 100%)",
        }}
      >
        {/* Title */}
        <h2 className="absolute left-1/2 top-[6%] z-10 -translate-x-1/2 whitespace-nowrap text-center font-medium tracking-tight"
            style={{
              fontSize: "clamp(30px, 4.5vw, 66px)",
              backgroundImage: "linear-gradient(180deg,#eef3fb,#8794a6)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}>
          Unser Webdesign-Prozess
        </h2>
        <p className="absolute left-1/2 top-[17%] z-10 -translate-x-1/2 text-center text-[16px] leading-relaxed text-[#8a99ad]">
          Ein klarer, strukturierter Ablauf — von der Strategie bis zur<br />
          fertigen, KI-optimierten Website.
        </p>

        {/* dashed circles (SVG, große Striche) */}
        <DashedCircle className="absolute left-[10%] top-[31%] z-[1] aspect-square w-[32%]" />
        <DashedCircle className="absolute left-[34%] top-[31%] z-[1] aspect-square w-[32%]" />
        <DashedCircle className="absolute left-[58%] top-[31%] z-[1] aspect-square w-[32%]" />

        {/* month labels */}
        <span className="absolute left-[26%] top-[41%] z-[3] -translate-x-1/2 text-[17px] text-white/85">Strategie</span>
        <span className="absolute left-[50%] top-[41%] z-[3] -translate-x-1/2 text-[17px] text-white/85">Design</span>
        <span className="absolute left-[74%] top-[41%] z-[3] -translate-x-1/2 text-[17px] text-white/85">Launch</span>

        {/* staircase pills */}
        {PILLS.map((p, i) => (
          <div key={i} className="absolute z-[4]" style={{ left: p.left, top: p.top }}>
            <GlassPill>{p.label}</GlassPill>
          </div>
        ))}
      </div>
    </section>
  );
}
