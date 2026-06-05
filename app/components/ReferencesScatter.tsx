"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Platzhalter-Array — hier später einfach src/name/tag anpassen.     */
/*  Bilder liegen in /public/Referenzen.                               */
/*  x = horizontaler Versatz (Schlangenlinie), rotate = Neigung.       */
/* ------------------------------------------------------------------ */
type Reference = {
  src: string;
  name: string;
  tag: string;
  url: string; // Ziel-Website beim Klick
  x: number; // horizontaler Versatz in px (Desktop-Skala)
  rotate: number; // statische "hingeworfen"-Rotation
};

const REFERENCES: Reference[] = [
  { src: "/Referenzen/Betthuepferl.png", name: "Betthüpferl", tag: "Boutique", url: "https://betthupferl-traunstein.de", x: -140, rotate: -8 },
  { src: "/Referenzen/K_M_Trockenbau.png", name: "K&M Trockenbau", tag: "Handwerk", url: "https://k-m-trockenbau.de", x: 70, rotate: 5 },
  { src: "/Referenzen/M_Fischer Bauunternehmen.png", name: "M. Fischer Bauunternehmen", tag: "Bauunternehmen", url: "https://mfischer-bauunternehmen.de", x: 160, rotate: 8 },
  { src: "/Referenzen/Physio Schediwy.png", name: "Physio Schediwy", tag: "Gesundheit", url: "https://www.physio-schediwy.de", x: 10, rotate: -4 },
  { src: "/Referenzen/Sascha Schmidt Malerei & Bautenschutz.png", name: "Sascha Schmidt Malerei", tag: "Handwerk", url: "https://schmidtsascha-bau.de", x: -130, rotate: -7 },
];

const CARD_STEP = 120; // vertikaler Versatz pro Karte (starke Überlappung)

export default function ReferencesScatter() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="referenzen"
      ref={sectionRef}
      className="relative w-full overflow-hidden pt-24 pb-10 md:pt-32 md:pb-16"
      style={{
        background:
          "radial-gradient(85% 50% at 50% 42%, rgba(43,91,149,.30), transparent 62%), radial-gradient(78% 55% at 50% 62%, rgba(45,85,135,.14), transparent 72%), linear-gradient(180deg,#060910 0%,#060910 18%,#0a1626 60%,#060910 100%)",
      }}
    >

      {/* Heading */}
      <div className="relative z-10 mx-auto mb-16 max-w-2xl px-6 text-center md:mb-20">
        <p className="text-[13px] uppercase tracking-[0.22em] text-white/40">
          Referenzen
        </p>
        <h2 className="mt-4 text-4xl font-medium tracking-tight text-white md:text-5xl">
          Websites, die für sich sprechen
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-white/45">
          Ausgewählte Hero-Sections aus echten Kundenprojekten — gestaltet,
          entwickelt und KI-suchoptimiert.
        </p>
      </div>

      {/* Karten-Fluss (responsive: Stapel wird auf Mobile herunterskaliert) */}
      <div className="relative z-10 mx-auto h-[400px] w-[420px] sm:h-[560px] sm:w-[588px] md:h-[800px] md:w-[840px]">
        <div className="absolute left-1/2 top-0 h-[800px] w-[840px] origin-top -translate-x-1/2 scale-[0.5] sm:scale-[0.7] md:scale-100">
          {REFERENCES.map((ref, i) => (
            <RefCard
              key={ref.name}
              data={ref}
              index={i}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      {/* Hinweis (nur mobil): Karten sind anklickbar */}
      <p className="relative z-10 mx-auto mt-4 flex max-w-sm items-center justify-center gap-2 px-6 text-center text-[13px] leading-relaxed text-white/55 sm:hidden">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="flex-none text-[#88C1ED]" aria-hidden>
          <path d="M9 11V6a1.5 1.5 0 0 1 3 0v5m0-1.5a1.5 1.5 0 0 1 3 0V11m0-1a1.5 1.5 0 0 1 3 0v4.5a5 5 0 0 1-5 5h-1.6a4 4 0 0 1-2.9-1.25l-3-3.2a1.5 1.5 0 0 1 2.2-2L9 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Tippe auf eine Referenz, um die komplette Website zu sehen.
      </p>

      {/* Film-/Pixel-Grain (Cohesion zum Hero) */}
      <div className="grain-overlay" style={{ opacity: 0.22 }} />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Einzelne Karte — eigener Parallax-Transform pro Karte.            */
/*  Vordere Karten (höherer index) bewegen sich minimal schneller.    */
/* ------------------------------------------------------------------ */
function RefCard({
  data,
  index,
  progress,
}: {
  data: Reference;
  index: number;
  progress: MotionValue<number>;
}) {
  // Scroll-getrieben (deterministisch, nie unsichtbar):
  // Einblenden + Aufsteigen beim Reinscrollen, danach Parallax nach oben.
  // Vordere Karten (höherer index) bewegen sich stärker = schneller.
  const startY = 150 + index * 30; // Startposition unterhalb
  const endY = -(120 + index * 40); // Parallax-Endposition oben
  const y = useTransform(progress, [0, 0.5, 1], [startY, 0, endY]);
  const opacity = useTransform(progress, [0, 0.16, 0.4], [0, 0.4, 1]);
  const scale = useTransform(progress, [0, 0.45], [0.9, 1]);

  // 3D: in den Raum kippen + leichte Konvergenz zur Mitte + Tiefe pro Ebene
  const depthZ = index * 52 - 110; // hintere Karten weiter weg, vordere näher
  const rotateY = -data.x / 22; // Karten neigen sich subtil zur Mitte (Fluss)

  return (
    // Ebene 1: Link + absolute Positionierung + Hover-Lift ("herausziehen")
    // zIndex bleibt = index → Karte springt NICHT vor andere, bleibt in ihrer Ebene.
    <motion.a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${data.name} – Website öffnen`}
      className="absolute block cursor-pointer"
      style={{
        left: `calc(50% + ${data.x}px)`,
        top: index * CARD_STEP,
        x: "-50%",
        zIndex: index,
      }}
      whileHover={{ y: -22 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
    >
      {/* Ebene 2: scroll-getriebene Animation + 3D-Tilt */}
      <motion.div
        style={{
          y,
          opacity,
          scale,
          rotateX: 13,
          rotateY,
          rotateZ: data.rotate,
          z: depthZ,
          transformPerspective: 1500,
        }}
        className="w-[520px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/60 ring-1 ring-white/5 transition-shadow duration-300 hover:shadow-[0_40px_80px_rgba(0,0,0,.7)] hover:ring-[#88C1ED]/40"
      >
        {/* Screenshot */}
        <div className="relative aspect-[16/9] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={data.src}
            alt={`${data.name} — Hero-Section`}
            className="h-full w-full object-cover object-top"
            draggable={false}
          />
          {/* sanfter Glas-/Tiefen-Verlauf */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/[0.06]" />
          {/* dezentes Namens-Label unten links */}
          <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#88C1ED]" />
            <span className="text-[12px] text-white/80">{data.name}</span>
          </div>
        </div>
      </motion.div>
    </motion.a>
  );
}
