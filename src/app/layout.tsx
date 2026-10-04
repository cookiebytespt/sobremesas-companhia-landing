import type { Metadata } from "next";
// Self-hosted fonts (no Google Fonts request, GDPR-friendly)
import "@fontsource/young-serif/400.css";
import "@fontsource-variable/figtree/index.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sobremesas & Companhia: bolos, doces e catering em Santo Tirso",
  description:
    "Bolos decorados, bolachas, mesas de doces e catering de fabrico caseiro para casamentos, batizados, comunhões e aniversários no distrito do Porto e Minho.",
  openGraph: {
    title: "Sobremesas & Companhia",
    description: "Bolos, doces e catering de fabrico caseiro para os seus dias especiais.",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}
