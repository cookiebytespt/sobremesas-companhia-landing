import type { Metadata } from "next";
import { getDictionary, homePath, localeInfo, locales, type Locale } from "@/i18n";
import { site } from "@/content/site";

// Full public URL including the base path, e.g. "https://cookiebytespt.github.io/sobremesas-companhia-landing".
// Set by the deploy workflow; without it the hreflang/canonical links are left out.
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, "");

export function pageMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  const url = (l: Locale) => `${siteUrl}${homePath(l)}`;
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: siteUrl
      ? {
          canonical: url(locale),
          languages: {
            ...Object.fromEntries(locales.map((l) => [localeInfo[l].htmlLang, url(l)])),
            "x-default": url("pt"),
          },
        }
      : undefined,
    openGraph: {
      title: site.name,
      description: t.meta.ogDescription,
      locale: localeInfo[locale].ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeInfo[l].ogLocale),
      type: "website",
      ...(siteUrl ? { url: url(locale) } : {}),
    },
  };
}
