import { gallery, occasions } from "@/content/site";
import { getDictionary, type Locale } from "@/i18n";
import { Area } from "./Area";
import { Creations } from "./Creations";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { QuoteForm } from "./QuoteForm";
import { Steps } from "./Steps";

export function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  // Resolve labels and captions here so the client components only receive this language.
  const occasionList = occasions.map((o) => ({ ...o, label: t.occasions[o.id] }));
  const items = gallery.map((g) => ({ ...g, title: g.title[locale] }));

  return (
    <>
      <Header locale={locale} t={t} />
      <main>
        <Hero t={t.hero} />
        <Creations t={t.creations} occasions={occasionList} items={items} />
        <Steps t={t.steps} />
        <Area t={t.area} />
        <QuoteForm t={t.quote} occasions={occasionList} />
      </main>
      <Footer t={t} />
    </>
  );
}
