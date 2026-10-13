"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Link = { href: string; label: string };

// Phone/tablet navigation: a menu button that drops a panel with the section links and the language switcher.
export function MobileMenu({
  links,
  locale,
  labels,
}: {
  links: Link[];
  locale: Locale;
  labels: { menu: string; close: string; nav: string; language: string; quote: string };
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <div ref={root} className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? labels.close : labels.menu}
        onClick={() => setOpen((o) => !o)}
        className="grid h-11 w-11 place-items-center rounded-full bg-acucar text-cacau"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-t border-cacau/10 bg-po shadow-[0_18px_30px_-20px_rgba(75,46,34,0.4)]"
      >
        <nav aria-label={labels.nav} className="mx-auto max-w-6xl px-5 pt-2 pb-5 md:px-8">
          <ul>
            {links.map((l) => (
              <li key={l.href} className="border-b border-cacau/10">
                <a href={l.href} onClick={() => setOpen(false)} className="block py-4 font-display text-xl">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <LanguageSwitcher locale={locale} label={labels.language} />
            <a
              href="#orcamento"
              onClick={() => setOpen(false)}
              className="rounded-full bg-cacau px-6 py-3 font-medium text-acucar sm:hidden"
            >
              {labels.quote}
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
