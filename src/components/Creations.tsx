"use client";

import { useState } from "react";
import { gallery, occasions, site, type OccasionId } from "@/content/site";
import { Icon } from "./Icon";
import { Photo } from "./Photo";

export function Creations() {
  const [active, setActive] = useState<OccasionId | null>(null);
  const items = active ? gallery.filter((g) => g.occasion === active) : gallery;
  const iconFor = (id: OccasionId) => occasions.find((o) => o.id === id)?.icon ?? "whisk";

  return (
    <section id="criacoes" className="mx-auto max-w-6xl scroll-mt-6 px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">O que fazemos</h2>
          <p className="mt-4 text-lg leading-relaxed text-cacau-suave">
            Cada bolo é pensado para a pessoa e para a festa. Escolha uma ocasião para ver trabalhos anteriores.
          </p>
        </div>
        <a href={site.instagram} className="inline-flex items-center gap-2 text-[0.95rem] underline underline-offset-4">
          <Icon name="instagram" className="h-5 w-5" />
          Mais no Instagram
        </a>
      </div>

      <div role="group" aria-label="Filtrar por ocasião" className="mt-12 flex gap-5 overflow-x-auto pb-3 md:justify-between md:gap-4">
        {occasions.map((o) => {
          const selected = active === o.id;
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(selected ? null : o.id)}
              className="group flex shrink-0 flex-col items-center gap-3 rounded-lg"
            >
              <span
                className={`scallop-badge grid h-[84px] w-[84px] place-items-center transition-colors md:h-24 md:w-24 ${
                  selected ? "bg-cacau text-acucar" : "bg-po text-cacau group-hover:bg-[#c3d8e8]"
                }`}
              >
                <Icon name={o.icon} className="h-8 w-8" />
              </span>
              <span className={`text-[0.95rem] ${selected ? "font-semibold" : ""}`}>{o.label}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {active ? `A mostrar ${items.length} trabalhos de ${occasions.find((o) => o.id === active)?.label}` : "A mostrar todos os trabalhos"}
      </p>

      <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 md:gap-5">
        {items.map((g, i) => (
          <figure key={g.title} className="mb-4 break-inside-avoid md:mb-5">
            <Photo
              src={g.src}
              alt={g.title}
              icon={iconFor(g.occasion)}
              tint={i % 3}
              className={`w-full rounded-2xl ${g.tall ? "aspect-[4/5]" : "aspect-square"}`}
            />
          </figure>
        ))}
      </div>

      {active && (
        <button
          type="button"
          onClick={() => setActive(null)}
          className="mt-4 text-[0.95rem] underline underline-offset-4"
        >
          Mostrar todas as ocasiões
        </button>
      )}
    </section>
  );
}
