import { notFound } from "next/navigation";
import { HomePage } from "@/components/HomePage";
import { isLocale } from "@/i18n";

export default async function LocaleHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return <HomePage locale={lang} />;
}
