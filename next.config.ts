import type { NextConfig } from "next";

// Static export: `npm run build` produces ./out, deployable to any static host.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
