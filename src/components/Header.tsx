import Link from "next/link";
import { site } from "@/content/site";
import { fmt, homePath, type Dictionary, type Locale } from "@/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Wordmark } from "./Wordmark";

export function Header({ locale, t }: { locale: Locale; t: Dictionary }) {
  const links = [
    { href: "#criacoes", label: t.header.links.criacoes },
    { href: "#como-funciona", label: t.header.links.comoFunciona },
    { href: "#onde", label: t.header.links.onde },
  ];

  return (
    <header className="relative z-10 bg-po">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:gap-6 md:px-8">
        <Link href={homePath(locale)} aria-label={t.header.home} className="min-w-0">
          <Wordmark tagline={fmt(t.wordmark.tagline, { location: site.location })} />
        </Link>
        <div className="flex items-center gap-3 md:gap-6">
          <nav aria-label={t.header.nav} className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-[0.95rem] hover:underline underline-offset-4">
                {l.label}
              </a>
            ))}
          </nav>
          <LanguageSwitcher locale={locale} label={t.header.language} className="hidden sm:block" />
          <a
            href="#orcamento"
            className="hidden rounded-full bg-cacau px-5 py-2.5 text-[0.95rem] font-medium whitespace-nowrap text-acucar hover:bg-[#3a2219] md:inline-block"
          >
            {t.header.quote}
          </a>
          <a
            href="#orcamento"
            className="rounded-full bg-cacau px-4 py-2 text-sm font-medium whitespace-nowrap text-acucar md:hidden"
          >
            {t.header.quoteShort}
          </a>
        </div>
      </div>
      {/* On small phones the switcher gets its own row so the wordmark keeps its room. */}
      <LanguageSwitcher locale={locale} label={t.header.language} className="-mt-3 flex justify-end px-4 pb-2 sm:hidden" />
    </header>
  );
}
