// Self-hosted fonts (no Google Fonts request, GDPR-friendly)
import "@fontsource/young-serif/400.css";
import "@fontsource-variable/figtree/index.css";
import "@/app/globals.css";
import { localeInfo, type Locale } from "@/i18n";

// The <html> shell shared by every language's root layout.
export function Document({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={localeInfo[locale].htmlLang}>
      <body>{children}</body>
    </html>
  );
}
