import { site } from "@/content/site";
import { fmt, type Dictionary } from "@/i18n";
import { Icon } from "./Icon";
import { Wordmark } from "./Wordmark";

export function Footer({ t }: { t: Dictionary }) {
  return (
    <footer className="bg-cacau text-acucar">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <Wordmark onDark tagline={fmt(t.wordmark.tagline, { location: site.location })} />
        <div className="flex flex-wrap gap-6 text-[0.95rem]">
          <a href={site.instagram} className="inline-flex items-center gap-2 hover:underline underline-offset-4">
            <Icon name="instagram" className="h-5 w-5" /> Instagram
          </a>
          <a href={site.facebook} className="hover:underline underline-offset-4">Facebook</a>
          {site.whatsapp && (
            <a href={`https://wa.me/${site.whatsapp}`} className="inline-flex items-center gap-2 hover:underline underline-offset-4">
              <Icon name="chat" className="h-5 w-5" /> WhatsApp 961 906 158
            </a>
          )}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-8 text-sm text-acucar/60 md:px-8">
        © {new Date().getFullYear()} {site.name}. {t.footer.siteBy}{" "}
        <a href="https://cookiebytes.pt" className="underline underline-offset-4">CookieBytes</a>.
      </div>
    </footer>
  );
}
