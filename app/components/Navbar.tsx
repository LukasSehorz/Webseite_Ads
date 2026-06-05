"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Referenzen", href: "#referenzen" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(6,9,16,.82)"
          : "linear-gradient(180deg, rgba(6,9,16,.55) 0%, transparent 100%)",
        backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.06)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 text-white no-underline">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="7" fill="url(#logo-grad)" />
            <path d="M8 14.5L12.5 10L17 14.5L21 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 18L12.5 13.5L17 18" stroke="rgba(255,255,255,.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4686B7"/>
                <stop offset="1" stopColor="#1d3a58"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="text-[17px] font-semibold tracking-tight">Flowstate AI</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[14px] text-white/60 transition-colors duration-150 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#4686B7] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_0_20px_rgba(70,134,183,.3)] transition-all duration-200 hover:bg-[#5a9acc] hover:shadow-[0_0_28px_rgba(70,134,183,.45)] active:scale-95"
        >
          Erstgespräch
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menü öffnen"
        >
          {menuOpen ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="border-t border-white/[0.07] px-6 pb-6 pt-4 md:hidden"
          style={{ background: "rgba(6,9,16,.95)", backdropFilter: "blur(14px)" }}
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block text-[15px] text-white/70 transition-colors hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#kontakt"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#4686B7] py-3 text-[15px] font-semibold text-white"
            onClick={() => setMenuOpen(false)}
          >
            Erstgespräch vereinbaren
          </a>
        </div>
      )}
    </header>
  );
}
