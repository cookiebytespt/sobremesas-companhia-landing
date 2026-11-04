// Cloudflare Web Analytics — same setup as cookiebytes.pt: cookieless, no personal data, no consent banner needed.
// The site token comes from the build env (GitHub repo secret/variable CF_ANALYTICS_TOKEN → NEXT_PUBLIC_CF_ANALYTICS_TOKEN).
// Without it (local dev, forks) nothing is rendered, so only the production site is counted.
const token = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN

export function Analytics() {
  if (!token) return null
  return (
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token })}
    />
  )
}
