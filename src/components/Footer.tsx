import { site } from "@/content/site";
import { Icon } from "./Icon";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="bg-cacau text-acucar">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <Wordmark onDark />
        <div className="flex flex-wrap gap-6 text-[0.95rem]">
          <a href={site.instagram} className="inline-flex items-center gap-2 hover:underline underline-offset-4">
            <Icon name="instagram" className="h-5 w-5" /> Instagram
          </a>
          <a href={site.facebook} className="hover:underline underline-offset-4">Facebook</a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-8 text-sm text-acucar/60 md:px-8">
        © {new Date().getFullYear()} {site.name}. Site por{" "}
        <a href="https://cookiebytes.pt" className="underline underline-offset-4">CookieBytes</a>.
      </div>
    </footer>
  );
}
