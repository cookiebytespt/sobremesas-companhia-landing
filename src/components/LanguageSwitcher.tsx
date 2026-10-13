import Link from "next/link";
import { homePath, localeInfo, locales, type Locale } from "@/i18n";

// PT · EN · ES · FR links between the static copies of the page.
export function LanguageSwitcher({ locale, label, className = "" }: { locale: Locale; label: string; className?: string }) {
  return (
    <nav aria-label={label} className={className}>
      <ul className="flex items-center gap-1 text-[0.85rem]">
        {locales.map((l) => {
          const current = l === locale;
          return (
            <li key={l}>
              <Link
                href={homePath(l)}
                hrefLang={localeInfo[l].htmlLang}
                lang={localeInfo[l].htmlLang}
                aria-current={current ? "page" : undefined}
                title={localeInfo[l].name}
                className={`grid h-8 min-w-8 place-items-center rounded-full px-1.5 tracking-wide ${
                  current ? "bg-acucar font-semibold" : "text-cacau-suave hover:text-cacau hover:underline underline-offset-4"
                }`}
              >
                <span aria-hidden="true">{localeInfo[l].short}</span>
                <span className="sr-only">{localeInfo[l].name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
