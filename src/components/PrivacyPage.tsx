import { getDictionary, localeInfo, type Locale } from "@/i18n";
import { getPrivacy } from "@/i18n/privacy";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function PrivacyPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = getPrivacy(locale);
  const updated = new Date(`${p.updated}T00:00:00Z`).toLocaleDateString(localeInfo[locale].htmlLang, {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  });

  return (
    <>
      <Header locale={locale} t={t} />
      <main className="bg-acucar">
        <article className="mx-auto max-w-2xl px-5 py-12 text-cacau md:px-8 md:py-16">
          <h1 className="font-display text-3xl tracking-tight md:text-4xl">{p.title}</h1>
          <p className="mt-2 text-sm text-cacau/50">{updated}</p>
          <p className="mt-6 text-lg leading-relaxed text-cacau/80">{p.intro}</p>
          {p.sections.map((s) => (
            <section key={s.title} className="mt-9">
              <h2 className="font-display text-xl md:text-2xl">{s.title}</h2>
              {s.paragraphs.map((para, i) => (
                <p key={i} className="mt-3 leading-relaxed text-cacau/90">{para}</p>
              ))}
              {s.bullets && (
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-cacau/90">
                  {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}
            </section>
          ))}
        </article>
      </main>
      <Footer t={t} locale={locale} />
    </>
  );
}
