import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "./ui";
import FooterSection from "./FooterSection";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col bg-[#060910]">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#060910]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/" aria-label="Zur Startseite">
            <Logo />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] text-white/50 transition-colors duration-200 hover:text-white"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Zurück
          </Link>
        </div>
      </header>

      {/* Content */}
      <article
        className="relative mx-auto w-full max-w-3xl flex-1 px-6 py-20 md:py-28"
        style={{
          background:
            "radial-gradient(60% 35% at 50% 0%, rgba(45,85,135,.1), transparent 70%)",
        }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-[14px] text-white/40">Stand: {updated}</p>

        <div className="legal-prose mt-12 space-y-8">{children}</div>
      </article>

      <FooterSection />
    </main>
  );
}
