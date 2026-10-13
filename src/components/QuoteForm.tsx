"use client";

import { useState } from "react";
import { site, type OccasionId } from "@/content/site";
import type { Dictionary } from "@/i18n";
import { Icon } from "./Icon";

const field =
  "mt-2 block min-h-12 w-full min-w-0 appearance-none rounded-xl border border-cacau/20 bg-acucar px-4 py-3 text-[1rem] placeholder:text-cacau/40 focus:border-cacau focus:outline-none";
const label = "block text-[0.95rem] font-medium";

export function QuoteForm({
  t,
  occasions,
}: {
  t: Dictionary["quote"];
  occasions: { id: OccasionId; label: string }[];
}) {
  const f = t.fields;
  const m = t.message;
  const [sent, setSent] = useState<null | "whatsapp" | "email" | "none">(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const chosen = d.getAll("produtos").join(", ") || m.toBeDecided;
    const text = [
      m.greeting,
      `${m.occasion}: ${d.get("ocasiao")}`,
      `${m.date}: ${d.get("data")}`,
      `${m.guests}: ${d.get("convidados")}`,
      `${m.interest}: ${chosen}`,
      d.get("mensagem") ? `${m.details}: ${d.get("mensagem")}` : "",
      `${m.name}: ${d.get("nome")}`,
      `${m.contact}: ${d.get("contacto")}`,
    ]
      .filter(Boolean)
      .join("\n");

    if (site.whatsapp) {
      window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      setSent("whatsapp");
    } else if (site.email) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(t.emailSubject)}&body=${encodeURIComponent(text)}`;
      setSent("email");
    } else {
      // Contact not configured yet (see src/content/site.ts).
      console.info("[orcamento] contact channel not configured\n" + text);
      setSent("none");
    }
  }

  return (
    <section id="orcamento" className="scallop-top scroll-mt-6 bg-merengue">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-24">
        <div>
          <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">{t.title}</h2>
          <p className="mt-4 max-w-[38ch] text-lg leading-relaxed text-cacau-suave">
            {t.intro}
          </p>
          <a
            href={site.whatsapp ? `https://wa.me/${site.whatsapp}` : site.instagram}
            className="mt-8 inline-flex items-center gap-2 text-[0.95rem] underline underline-offset-4"
          >
            <Icon name="chat" className="h-5 w-5" />
            {site.whatsapp ? t.whatsappLink : t.instagramLink}
          </a>
        </div>

        {sent ? (
          <div role="status" className="rounded-3xl bg-acucar p-8 md:p-10">
            <h3 className="font-display text-3xl">{t.sent.title}</h3>
            <p className="mt-3 max-w-[48ch] leading-relaxed text-cacau-suave">
              {sent === "whatsapp" && t.sent.whatsapp}
              {sent === "email" && t.sent.email}
              {sent === "none" && t.sent.none}
            </p>
            <button
              type="button"
              onClick={() => setSent(null)}
              className="mt-6 text-[0.95rem] underline underline-offset-4"
            >
              {t.sent.again}
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="grid min-w-0 gap-5 rounded-3xl bg-acucar p-5 sm:p-6 md:grid-cols-2 md:gap-6 md:p-10">
            <label className={label}>
              {f.occasion}
              <select name="ocasiao" required className={`${field} select-chevron pr-10`} defaultValue="">
                <option value="" disabled>
                  {f.choose}
                </option>
                {occasions
                  .filter((o) => o.id !== "bolachas" && o.id !== "catering")
                  .map((o) => (
                    <option key={o.id}>{o.label}</option>
                  ))}
                <option>{f.otherEvent}</option>
              </select>
            </label>
            <label className={label}>
              {f.date}
              <input type="date" name="data" required className={field} />
            </label>
            <label className={label}>
              {f.guests}
              <input type="number" name="convidados" min={1} max={500} inputMode="numeric" placeholder={f.guestsPlaceholder} required className={field} />
            </label>
            <fieldset className="md:col-span-1">
              <legend className={label}>{f.lookingFor}</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {f.products.map((p) => (
                  <label
                    key={p}
                    className="cursor-pointer rounded-full border border-cacau/20 px-4 py-2 text-[0.95rem] has-[:checked]:border-cacau has-[:checked]:bg-cacau has-[:checked]:text-acucar has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2"
                  >
                    <input type="checkbox" name="produtos" value={p} className="sr-only" />
                    {p}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className={`${label} md:col-span-2`}>
              {f.details} <span className="font-normal text-cacau-suave">{f.optional}</span>
              <textarea
                name="mensagem"
                rows={3}
                placeholder={f.detailsPlaceholder}
                className={field}
              />
            </label>
            <label className={label}>
              {f.name}
              <input name="nome" autoComplete="name" required className={field} />
            </label>
            <label className={label}>
              {f.contact}
              <input name="contacto" autoComplete="email" autoCapitalize="none" spellCheck={false} required className={field} />
            </label>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full rounded-full bg-cacau px-7 py-4 font-medium text-acucar hover:bg-[#3a2219] md:w-auto"
              >
                {t.submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
