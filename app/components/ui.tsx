import type { ReactNode } from "react";

/* Lunetra logo mark (stylised asterisk) */
export function LunetraMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
        <line x1="20" y1="6" x2="20" y2="42" />
        <line x1="8" y1="30" x2="30" y2="14" />
        <line x1="20" y1="24" x2="38" y2="34" />
      </g>
      <circle cx="34" cy="40" r="2.3" fill="currentColor" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 text-white ${className}`}>
      <LunetraMark className="h-6 w-6" />
      <span className="text-[22px] font-normal tracking-tight">Flowstate AI</span>
    </span>
  );
}

/* Dark glass pill with leading dot */
export function GlassPill({
  children,
  light = false,
  className = "",
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <span className={`glass-pill ${light ? "glass-pill--light" : ""} ${className}`}>
      <span className="dot" />
      {children}
    </span>
  );
}

/* Pill button with white circle arrow (Start / View platform) */
export function ArrowButton({
  label,
  light = false,
  className = "",
  href,
}: {
  label: string;
  light?: boolean;
  className?: string;
  href?: string;
}) {
  const classes = `group inline-flex items-center gap-5 rounded-full py-2 pl-7 pr-2 text-[16px] text-white transition-colors ${
    light
      ? "border border-white/15 bg-white/10 backdrop-blur-md hover:bg-white/15"
      : "bg-[#13191f] hover:bg-[#1c252e]"
  } ${className}`;

  const inner = (
    <>
      {label}
      <span className="circle-arrow transition-transform group-hover:translate-x-0.5">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    );
  }

  return <button className={classes}>{inner}</button>;
}

/* 4-point sparkle marker */
export function Spark({ className = "" }: { className?: string }) {
  return <span className={`spark ${className}`} />;
}
