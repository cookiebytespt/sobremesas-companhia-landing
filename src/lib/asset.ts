// Prefixes files from /public with the base path, so plain <img> tags work when the
// site is served from a subpath (Next.js only adds basePath to its own assets and links).
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
