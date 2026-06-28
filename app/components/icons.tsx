import type { SVGProps } from "react";

/* Einheitliches Line-Icon-Set (24px, stroke, rounded) — keine Emojis. */
function base(props: SVGProps<SVGSVGElement>) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export const IconBrush = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M9.5 14.5 4 20" />
    <path d="M14 4.5c2 .5 3.5 2 4 4-1.2 3-4 5.5-7.5 6.5-1-1-1.5-2-1.5-3 1-3.5 3.5-6.3 5-7.5Z" />
    <path d="M11 13c-2 0-3.5 1.2-4 3 1.8.3 3.5-.5 4-3Z" />
  </svg>
);

export const IconTrending = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M3 17l6-6 4 4 7-7" />
    <path d="M17 7h4v4" />
  </svg>
);

export const IconTarget = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.6" fill="currentColor" />
  </svg>
);

export const IconWrench = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M15 6.5a4 4 0 0 1-5.2 5.2L5 16.5 7.5 19l4.8-4.8A4 4 0 0 0 17.5 9l-2 2-2.5-2.5 2-2.5a4 4 0 0 0 0 0Z" />
  </svg>
);

export const IconCheckCircle = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12 2.5 2.5 4.5-5" />
  </svg>
);

export const IconCheck = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="m5 12.5 4 4 10-10.5" />
  </svg>
);

export const IconX = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconHeart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 20s-7-4.3-7-9.3A3.7 3.7 0 0 1 12 8a3.7 3.7 0 0 1 7 2.7c0 5-7 9.3-7 9.3Z" />
  </svg>
);

export const IconEuro = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M16 7a6 6 0 1 0 0 10" />
    <path d="M4 10h7M4 14h7" />
  </svg>
);

export const IconSmartphone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="7" y="3" width="10" height="18" rx="2.5" />
    <path d="M11 18h2" />
  </svg>
);

export const IconBolt = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M13 3 5 13h5l-1 8 8-10h-5l1-8Z" />
  </svg>
);

export const IconShieldCheck = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
    <path d="m9 12 2 2 4-4.5" />
  </svg>
);

export const IconGlobe = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
  </svg>
);

export const IconArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

/* Performance Marketing / Ads — Megafon */
export const IconMegaphone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M3 11v2a1 1 0 0 0 1 1h2l9 4V6L6 10H4a1 1 0 0 0-1 1Z" />
    <path d="M6 14v3a1.5 1.5 0 0 0 3 0v-1.5" />
    <path d="M18.5 9a3.5 3.5 0 0 1 0 6" />
  </svg>
);

/* KI / Prozessautomatisierung — Chip mit Kern */
export const IconChip = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="7" y="7" width="10" height="10" rx="2.5" />
    <rect x="10.5" y="10.5" width="3" height="3" rx="0.6" />
    <path d="M9.5 4v2M14.5 4v2M9.5 18v2M14.5 18v2M4 9.5h2M4 14.5h2M18 9.5h2M18 14.5h2" />
  </svg>
);

/* Voice Agent — Mikrofon */
export const IconMic = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" />
  </svg>
);

/* Material-Aufnahme vor Ort — Kamera */
export const IconCamera = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
    <circle cx="12" cy="13" r="3.2" />
  </svg>
);

/* Mitarbeitergewinnung / Recruiting — Personen */
export const IconUsers = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17.5 19a5.5 5.5 0 0 0-3-4.9" />
  </svg>
);

/* Dokumente / Rechnungen */
export const IconDocument = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}>
    <path d="M6 3h7l5 5v13H6Z" />
    <path d="M13 3v5h5" />
    <path d="M9 13h6M9 16.5h6" />
  </svg>
);