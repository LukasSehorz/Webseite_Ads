import { IconCheckCircle } from "./icons";

const ITEMS = [
  "Webdesign",
  "SEO-optimiert",
  "Meta & Google Ads",
  "LinkedIn Ads",
  "Leadgenerierung",
  "Mitarbeitergewinnung",
  "KI-Automatisierung",
  "Voice Agents",
  "Corporate LLMs",
  "Persönlicher Ansprechpartner",
  "DSGVO-konform",
];

function Group({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-x-12 pr-12"
      aria-hidden={ariaHidden || undefined}
    >
      {ITEMS.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2.5 whitespace-nowrap text-[15px] text-white/45"
        >
          <IconCheckCircle className="h-[18px] w-[18px] flex-none text-[#4686B7]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function BuzzwordMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-3">
      <div className="marquee-mask">
        <div className="marquee-track">
          <Group />
          <Group ariaHidden />
        </div>
      </div>
    </div>
  );
}
