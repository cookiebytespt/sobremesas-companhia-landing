"use client";

import { useState } from "react";
import { site, type OccasionId } from "@/content/site";
import { fmt, type Dictionary } from "@/i18n";
import { Icon } from "./Icon";
import { Photo } from "./Photo";

const PAGE = 12;

type Occasion = { id: OccasionId; icon: string; label: string };
type Item = { title: string; occasion: OccasionId; src?: string; tall?: boolean };

export function Creations({
  t,
  occasions,
  items: gallery,
}: {
  t: Dictionary["creations"];
  occasions: Occasion[];
  items: Item[];
}) {
  const [active, setActive] = useState<OccasionId | null>(null);
  const [visible, setVisible] = useState(PAGE);
  const items = active ? gallery.filter((g) => g.occasion === active) : gallery;
  const shown = items.slice(0, visible);
  const select = (id: OccasionId | null) => {
    setActive(id);
    setVisible(PAGE);
  };
  const iconFor = (id: OccasionId) => occasions.find((o) => o.id === id)?.icon ?? "whisk";

  return (
    <section id="criacoes" className="mx-auto max-w-6xl scroll-mt-6 px-5 py-16 md:px-8 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">{t.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-cacau-suave">
            {t.intro}
          </p>
        </div>
        <a href={site.instagram} className="inline-flex items-center gap-2 text-[0.95rem] underline underline-offset-4">
          <Icon name="instagram" className="h-5 w-5" />
          {t.instagram}
        </a>
      </div>

      <div role="group" aria-label={t.filter} className="no-scrollbar fade-edge -mx-5 mt-10 flex snap-x scroll-px-5 gap-4 overflow-x-auto px-5 pb-3 md:mx-0 md:mt-12 md:justify-between md:gap-4 md:px-0">
        {occasions.map((o) => {
          const selected = active === o.id;
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={selected}
              onClick={() => select(selected ? null : o.id)}
              className="group flex shrink-0 snap-start flex-col items-center gap-2.5 rounded-lg"
            >
              <span
                className={`scallop-badge grid h-[72px] w-[72px] place-items-center transition-colors md:h-24 md:w-24 ${
                  selected ? "bg-cacau text-acucar" : "bg-po text-cacau group-hover:bg-[#c3d8e8]"
                }`}
              >
                <Icon name={o.icon} className="h-7 w-7 md:h-8 md:w-8" />
              </span>
              <span className={`text-[0.9rem] md:text-[0.95rem] ${selected ? "font-semibold" : ""}`}>{o.label}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {active
          ? fmt(t.showingOccasion, { count: items.length, occasion: occasions.find((o) => o.id === active)?.label ?? "" })
          : t.showingAll}
      </p>

      <div className="mt-8 columns-2 gap-3 md:mt-12 md:columns-3 lg:columns-4 md:gap-5">
        {shown.map((g, i) => (
          <figure key={g.title} className="mb-3 break-inside-avoid md:mb-5">
            <Photo
              src={g.src}
              alt={g.title}
              icon={iconFor(g.occasion)}
              tint={i % 3}
              className={`w-full rounded-xl md:rounded-2xl ${g.tall ? "aspect-[4/5]" : "aspect-square"}`}
            />
          </figure>
        ))}
      </div>

      {shown.length < items.length && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE)}
            className="rounded-full border border-cacau/30 px-7 py-3.5 font-medium hover:border-cacau"
          >
            {fmt(t.more, { count: items.length - shown.length })}
          </button>
        </div>
      )}

      {active && (
        <button
          type="button"
          onClick={() => select(null)}
          className="mt-4 text-[0.95rem] underline underline-offset-4"
        >
          {t.showAll}
        </button>
      )}
    </section>
  );
}
