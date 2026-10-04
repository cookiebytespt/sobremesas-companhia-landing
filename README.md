# Sobremesas & Companhia — landing page

Next.js 16 (App Router) + Tailwind CSS 4, exported as a static site.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out (any static host: Vercel, Netlify, GitHub Pages, S3…)
```

## Before publishing
- `src/content/site.ts`: WhatsApp is set (961 906 158); add `email` if they want a fallback
  (it opens WhatsApp with the message pre-filled; falls back to email).
- Photos: the 8 in `public/images/instagram/` come from the client's Instagram feed (640px, Instagram's web size). Ask the client for the originals for sharper images, then update `gallery` in `src/content/site.ts`.
  The hero photos are in `src/components/Hero.tsx`.
- Logo: the header uses a text wordmark until we get the original logo file (SVG preferred).

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
