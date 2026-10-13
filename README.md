# Sobremesas & Companhia — landing page

Next.js 16 (App Router) + Tailwind CSS 4, exported as a static site. Node 24 LTS (`nvm use`).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out (any static host: Vercel, Netlify, GitHub Pages, S3…)
```

## Before publishing
- `src/content/site.ts`: WhatsApp is set (961 906 158); add `email` if they want a fallback
  (it opens WhatsApp with the message pre-filled; falls back to email).
- Photos: `public/images/instagram/` has 8 from the client's Instagram feed (640px). `public/images/galeria/` has 75 from
  the client's originals (`../images/`), exported at 1400px max with EXIF/GPS stripped and named `<categoria>-<descrição>.jpg`.
  Captions, categories and order are in `gallery` in `src/content/site.ts`. The gallery shows 12 at a time ("Ver mais criações").
  The hero photos are in `src/components/Hero.tsx`.
- Logo: the header uses a text wordmark until we get the original logo file (SVG preferred).

## Languages
Portuguese is the default at `/`; English, Spanish and French are static copies at `/en/`, `/es/` and `/fr/`,
with a PT · EN · ES · FR switcher in the header and hreflang links between them.
- Page text: `src/i18n/dictionaries/` — `pt.ts` is the reference; the others are typed against it, so a missing key fails the build.
- Gallery captions (also the photos' alt text): `title: { pt, en, es, fr }` on each item in `gallery` (`src/content/site.ts`).
- Routes: `src/app/(pt)/` (root `/`) and `src/app/[lang]/` (the other three), each with its own root layout so `<html lang>` is right.
- To add a language: add it to `locales` in `src/i18n/config.ts`, add a dictionary, and add the key to every gallery `title`.
- The quote form's WhatsApp/email message is written in the visitor's language.

## Design tokens (`src/app/globals.css`)
| Token | Hex | Use |
|---|---|---|
| acucar | #FFFDFB | page background |
| po | #D6E5F0 | powder blue: hero, badges |
| po-fundo | #7FA3BF | line icons, numbers |
| cacau | #4B2E22 | text, primary buttons |
| merengue | #F6DFE0 | blush: quote section |

Type: Young Serif (headings) + Figtree (body), self-hosted via Fontsource.
Signature element: scalloped "doily" edges and badges, taken from the Instagram highlights.

## Deploy (GitHub Pages)
`.github/workflows/deploy.yml` builds on push to `main`. The site is served from `/sobremesas-companhia-landing`,
so the workflow passes `NEXT_PUBLIC_BASE_PATH`, plus `NEXT_PUBLIC_SITE_URL` (the full public URL, used for the hreflang/canonical links); images in `public/` must be referenced through `asset()` (`src/lib/asset.ts`).
On a root domain (e.g. a custom domain later), leave `NEXT_PUBLIC_BASE_PATH` empty.
