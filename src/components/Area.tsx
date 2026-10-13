import { serviceArea, site } from "@/content/site";
import { fmt, type Dictionary } from "@/i18n";
import { Icon } from "./Icon";

export function Area({ t }: { t: Dictionary["area"] }) {
  return (
    <section id="onde" className="mx-auto max-w-6xl scroll-mt-6 px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">{t.title}</h2>
          <p className="mt-4 max-w-[44ch] text-lg leading-relaxed text-cacau-suave">
            {fmt(t.body, { location: site.location })}
          </p>
        </div>
        <ul className="flex flex-wrap gap-3">
          {serviceArea.map((place, i) => (
            <li
              key={place}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-[1.05rem] ${
                i === 0 ? "bg-cacau text-acucar" : "bg-po"
              }`}
            >
              <Icon name="pin" className="h-5 w-5" />
              {place}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
