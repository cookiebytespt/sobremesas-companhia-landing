import type { NextConfig } from "next";

// Set when the site is served from a subpath (e.g. GitHub Pages project site: "/sobremesas-companhia-landing").
// Leave empty for a root domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Static export: `npm run build` produces ./out, deployable to any static host.
const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // /en/ → out/en/index.html, so every language works on plain static hosts (GitHub Pages included).
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
