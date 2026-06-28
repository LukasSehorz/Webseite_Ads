"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Web3Forms Access-Key                                               */
/*  In .env.local setzen: NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=dein-key    */
/*  Key holen: https://web3forms.com  (Mail: lukas.sehorz@flowstate-ai.net) */
/* ------------------------------------------------------------------ */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "d0501ce9-21ac-4dc8-a07d-fb15d95832e9";

const STEPS = ["Kontaktdaten", "Ihr Unternehmen & Ziele", "Projektdetails"];

const BRANCHEN = [
  "Handwerk",
  "Bau & Renovierung",
  "Gesundheit & Praxis",
  "Gastronomie & Hotellerie",
  "Einzelhandel",
  "Dienstleistung",
  "Beratung & Coaching",
  "Immobilien",
  "E-Commerce",
  "Sonstiges",
];

const MITARBEITER = [
  "Einzelunternehmen",
  "2–10 Mitarbeiter",
  "11–50 Mitarbeiter",
  "51–200 Mitarbeiter",
  "200+ Mitarbeiter",
];

const LEISTUNGEN = [
  "Webdesign & Entwicklung",
  "Performance Marketing (Meta/Google/LinkedIn Ads)",
  "KI-Prozessautomatisierung",
  "Noch unklar – Beratung gewünscht",
];

const HERAUSFORDERUNGEN = [
  "Zu wenig Anfragen / Leads",
  "Zu wenig Bewerber",
  "Website bringt keine Ergebnisse",
  "Kaum Sichtbarkeit bei Google",
  "Werbeanzeigen ohne Erfolg",
  "Zu viel manueller Aufwand",
  "Schlechte Conversion",
  "Noch keine Website",
];

const ZIELE = [
  "Mehr Anfragen / Leads",
  "Mehr Bewerber gewinnen",
  "Werbeanzeigen schalten (Meta/Google/LinkedIn)",
  "Prozesse mit KI automatisieren",
  "Bessere Google-Sichtbarkeit",
  "Höhere Conversion-Rate",
  "Komplett neue Website",
];

const START = [
  "So schnell wie möglich",
  "In 1–3 Monaten",
  "In 3–6 Monaten",
  "Noch unklar",
];

type FormData = {
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  unternehmen: string;
  branche: string;
  mitarbeiter: string;
  leistungen: string[];
  herausforderungen: string[];
  hauptziel: string;
  start: string;
  nachricht: string;
};

const EMPTY: FormData = {
  vorname: "",
  nachname: "",
  email: "",
  telefon: "",
  unternehmen: "",
  branche: "",
  mitarbeiter: "",
  leistungen: [],
  herausforderungen: [],
  hauptziel: "",
  start: "",
  nachricht: "",
};

/* ── kleine UI-Bausteine ─────────────────────────────────────────── */

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[14px] font-semibold text-white/85">
        {label} {required && <span className="text-[#88C1ED]">*</span>}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-[15px] text-white placeholder-white/30 outline-none transition-colors duration-200 focus:border-[#4686B7]/70 focus:ring-2 focus:ring-[#4686B7]/20";

const selectCls = inputCls + " appearance-none cursor-pointer";

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${selectCls} ${value ? "text-white" : "text-white/35"}`}
      >
        <option value="" disabled>
          Bitte wählen…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#0a121c] text-white">
            {o}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/40"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function CheckCard({ label, checked, onToggle }: { label: string; checked: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-[15px] transition-all duration-200 ${
        checked
          ? "border-[#4686B7]/60 bg-[#4686B7]/[0.12] text-white"
          : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20"
      }`}
    >
      <span
        className={`flex h-5 w-5 flex-none items-center justify-center rounded-[6px] border transition-colors duration-200 ${
          checked ? "border-[#4686B7] bg-[#4686B7]" : "border-white/25 bg-transparent"
        }`}
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {label}
    </button>
  );
}

/* ── Stepper ─────────────────────────────────────────────────────── */

function Stepper({ current }: { current: number }) {
  const pct = (current / (STEPS.length - 1)) * 100;
  return (
    <div className="mb-9">
      <div className="mb-4 flex items-center justify-between">
        {STEPS.map((label, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <div key={label} className="flex items-center gap-2.5">
              <span
                className={`flex h-8 w-8 flex-none items-center justify-center rounded-full text-[14px] font-semibold transition-all duration-300 ${
                  done || active
                    ? "bg-[#4686B7] text-white shadow-[0_0_16px_rgba(70,134,183,.5)]"
                    : "bg-white/[0.06] text-white/40"
                }`}
              >
                {done ? (
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M3 8l3 3 6-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  i + 1
                )}
              </span>
              <span className={`hidden text-[14px] font-medium sm:block ${active || done ? "text-white" : "text-white/40"}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#4686B7] to-[#88C1ED]"
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

/* ── Hauptkomponente ─────────────────────────────────────────────── */

const primaryBtn =
  "flex flex-[1.4] items-center justify-center gap-2 rounded-xl bg-[#4686B7] py-4 text-[15px] font-bold text-white shadow-[0_0_30px_rgba(70,134,183,.35)] transition-all duration-200 hover:bg-[#5a9acc] hover:shadow-[0_0_40px_rgba(70,134,183,.5)] active:scale-[0.98]";

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(EMPTY);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setError("");
  };

  const toggleChallenge = (label: string) => {
    setData((d) => ({
      ...d,
      herausforderungen: d.herausforderungen.includes(label)
        ? d.herausforderungen.filter((x) => x !== label)
        : [...d.herausforderungen, label],
    }));
    setError("");
  };

  const toggleLeistung = (label: string) => {
    setData((d) => ({
      ...d,
      leistungen: d.leistungen.includes(label)
        ? d.leistungen.filter((x) => x !== label)
        : [...d.leistungen, label],
    }));
    setError("");
  };

  const validateStep = (): boolean => {
    if (step === 0) {
      if (!data.vorname.trim() || !data.nachname.trim() || !data.email.trim()) {
        setError("Bitte füllen Sie Vorname, Nachname und E-Mail aus.");
        return false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        setError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
        return false;
      }
    }
    if (step === 1) {
      if (!data.branche) {
        setError("Bitte wählen Sie Ihre Branche.");
        return false;
      }
      if (data.leistungen.length === 0) {
        setError("Bitte wählen Sie mindestens eine Leistung aus.");
        return false;
      }
      if (data.herausforderungen.length === 0) {
        setError("Bitte wählen Sie mindestens eine Option aus.");
        return false;
      }
      if (!data.hauptziel) {
        setError("Bitte wählen Sie Ihr Hauptziel.");
        return false;
      }
    }
    return true;
  };

  const next = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const back = () => {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
  };

  const submit = async () => {
    if (!ACCESS_KEY) {
      setError("Formular ist noch nicht konfiguriert (Access-Key fehlt).");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "Neue Potenzial-Analyse Anfrage – Flowstate AI",
          from_name: "Flowstate AI Website",
          replyto: data.email,
          Name: `${data.vorname} ${data.nachname}`,
          "E-Mail": data.email,
          Telefon: data.telefon || "—",
          Unternehmen: data.unternehmen || "—",
          Branche: data.branche,
          Mitarbeiteranzahl: data.mitarbeiter || "—",
          "Interesse an": data.leistungen.join(", "),
          Herausforderungen: data.herausforderungen.join(", "),
          Hauptziel: data.hauptziel,
          "Geplanter Start": data.start || "—",
          Nachricht: data.nachricht || "—",
        }),
      });
      const json = await res.json();
      if (json.success) {
        setSuccess(true);
      } else {
        // echte API-Meldung anzeigen (z.B. ungültiger Access-Key) statt generischer Text
        setError(
          json.message
            ? `Senden fehlgeschlagen: ${json.message}`
            : "Es gab ein Problem beim Senden. Bitte versuchen Sie es erneut."
        );
      }
    } catch {
      setError("Verbindungsfehler. Bitte versuchen Sie es erneut.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="kontakt"
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{
        background:
          "radial-gradient(60% 45% at 50% 18%, rgba(70,134,183,.12), transparent 70%), linear-gradient(180deg,#060910 0%,#0a1626 50%,#060910 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Jetzt Erstgespräch vereinbaren
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[16px] text-white/50">
            Erzählen Sie uns von Ihrem Projekt – das Gespräch ist kostenlos und unverbindlich.
          </p>
        </motion.header>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-md shadow-[0_30px_80px_rgba(0,0,0,.45)] md:p-10"
        >
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-white md:text-[28px]">
              Kostenlose Potenzial-Analyse anfragen
            </h3>
            <p className="mt-2 text-[15px] text-white/45">
              In nur 3 kurzen Schritten – dauert ca. 2 Minuten.
            </p>
          </div>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-12 text-center"
            >
              <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#4686B7] shadow-[0_0_30px_rgba(70,134,183,.5)]">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M8 15.5l5 5 9-11" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h4 className="text-2xl font-bold text-white">Vielen Dank!</h4>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/55">
                Ihre Anfrage ist eingegangen. Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
              </p>
            </motion.div>
          ) : (
            <>
              <Stepper current={step} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  {/* ── Schritt 1 ── */}
                  {step === 0 && (
                    <div className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Vorname" required>
                          <input className={inputCls} placeholder="Max" value={data.vorname} onChange={(e) => set("vorname", e.target.value)} />
                        </Field>
                        <Field label="Nachname" required>
                          <input className={inputCls} placeholder="Mustermann" value={data.nachname} onChange={(e) => set("nachname", e.target.value)} />
                        </Field>
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="E-Mail" required>
                          <input type="email" className={inputCls} placeholder="max@firma.de" value={data.email} onChange={(e) => set("email", e.target.value)} />
                        </Field>
                        <Field label="Telefon">
                          <input type="tel" className={inputCls} placeholder="0178 1234567" value={data.telefon} onChange={(e) => set("telefon", e.target.value)} />
                        </Field>
                      </div>
                      <Field label="Unternehmen">
                        <input className={inputCls} placeholder="Ihre Firma GmbH" value={data.unternehmen} onChange={(e) => set("unternehmen", e.target.value)} />
                      </Field>
                    </div>
                  )}

                  {/* ── Schritt 2 ── */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Branche" required>
                          <Select value={data.branche} onChange={(v) => set("branche", v)} options={BRANCHEN} />
                        </Field>
                        <Field label="Mitarbeiteranzahl">
                          <Select value={data.mitarbeiter} onChange={(v) => set("mitarbeiter", v)} options={MITARBEITER} />
                        </Field>
                      </div>

                      <div>
                        <span className="mb-3 block text-[14px] font-semibold text-white/85">
                          Welche Leistung interessiert Sie? <span className="text-[#88C1ED]">*</span>{" "}
                          <span className="font-normal text-white/40">(Mehrfachauswahl)</span>
                        </span>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {LEISTUNGEN.map((label) => (
                            <CheckCard
                              key={label}
                              label={label}
                              checked={data.leistungen.includes(label)}
                              onToggle={() => toggleLeistung(label)}
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="mb-3 block text-[14px] font-semibold text-white/85">
                          Was trifft auf Sie zu? <span className="text-[#88C1ED]">*</span>{" "}
                          <span className="font-normal text-white/40">(Mehrfachauswahl)</span>
                        </span>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {HERAUSFORDERUNGEN.map((label) => (
                            <CheckCard
                              key={label}
                              label={label}
                              checked={data.herausforderungen.includes(label)}
                              onToggle={() => toggleChallenge(label)}
                            />
                          ))}
                        </div>
                      </div>

                      <Field label="Hauptziel" required>
                        <Select value={data.hauptziel} onChange={(v) => set("hauptziel", v)} options={ZIELE} />
                      </Field>
                    </div>
                  )}

                  {/* ── Schritt 3 ── */}
                  {step === 2 && (
                    <div className="space-y-5">
                      <Field label="Geplanter Start">
                        <Select value={data.start} onChange={(v) => set("start", v)} options={START} />
                      </Field>
                      <Field label="Gibt es noch etwas Wichtiges, das wir vorab wissen sollten?">
                        <textarea
                          rows={4}
                          className={inputCls + " resize-none"}
                          placeholder="Optional: Weitere Details zu Ihrem Projekt…"
                          value={data.nachricht}
                          onChange={(e) => set("nachricht", e.target.value)}
                        />
                      </Field>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Fehler */}
              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 text-[14px] text-[#f0a04f]"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="mt-8 flex items-center gap-4">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={back}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] py-4 text-[15px] font-semibold text-white/80 backdrop-blur-sm transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Zurück
                  </button>
                )}

                {step < STEPS.length - 1 ? (
                  <button type="button" onClick={next} className={primaryBtn}>
                    Weiter
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ) : (
                  <button type="button" onClick={submit} disabled={submitting} className={primaryBtn + " disabled:opacity-60"}>
                    {submitting ? (
                      "Wird gesendet…"
                    ) : (
                      <>
                        Kostenlose Analyse anfordern
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M14 2L7 9M14 2l-4.5 12-2.5-5L2 6l12-4z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                )}
              </div>

              {step === STEPS.length - 1 && (
                <p className="mt-6 text-center text-[13px] text-white/35">
                  Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
                </p>
              )}
            </>
          )}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="grain-overlay" style={{ opacity: 0.15 }} />
    </section>
  );
}
