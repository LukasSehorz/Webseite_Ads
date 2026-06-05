import { LunetraMark } from "./ui";

export default function HeroPortrait() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a1726]">
      {/* (1) base radial gradient — soft, even, MUTED steel blue, low contrast, navy edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(100% 95% at 50% 50%, #4a7ea8 0%, #3f6f97 24%, #2f567c 44%, #1d3a58 64%, #112638 82%, #0a1726 100%)",
        }}
      />
      {/* (2) full-bleed portrait silhouette */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-portrait.png')" }}
      />
      {/* (3) gentle top darkener + soft corner vignette (navy, low contrast) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,18,30,.72) 0%, rgba(8,18,30,.32) 18%, transparent 40%), radial-gradient(125% 115% at 50% 48%, transparent 58%, rgba(7,16,27,.55) 100%)",
        }}
      />
      {/* (4) bottom legibility for captions + clean seam fade into Section 2 (#0a1726) */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, transparent 70%, rgba(10,23,38,.5) 86%, #0a1726 100%)" }}
      />
      {/* (5) film / pixel grain */}
      <div className="grain-overlay" />

      {/* centered logo */}
      <div className="absolute left-1/2 top-[54%] z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-6 text-white">
        <LunetraMark className="h-[66px] w-[66px]" />
        <span className="text-[58px] font-normal tracking-tight">Flowstate AI</span>
      </div>

      {/* bottom captions */}
      <div className="absolute inset-x-0 bottom-[8%] z-10 mx-auto grid max-w-[1400px] grid-cols-3 gap-8 px-12">
        <p className="text-[14px] leading-relaxed text-[#aebccf]">
          Verstehe deine Nutzer mit<br />
          klaren, einfachen Insights.
        </p>
        <p className="text-center text-[14px] leading-relaxed text-[#aebccf]">
          Plane, gestalte und skaliere deinen Online-Auftritt mit<br />
          datenbasierten Entscheidungen und langfristiger Vision.
        </p>
        <p className="text-right text-[14px] leading-relaxed text-[#aebccf]">
          Baue einen starken und<br />
          nachhaltigen Markenauftritt.
        </p>
      </div>
    </section>
  );
}
