// AdSense requires an ads.txt file at the domain root listing authorized
// sellers of this site's inventory — its absence is flagged during
// AdSense's review/approval process and shows as an "ads.txt file issue"
// in the dashboard even after approval. Publisher ID must match the
// google-adsense-account meta tag in src/app/[locale]/layout.tsx exactly.
const PUBLISHER_ID = "pub-1804566337195012";

export function GET() {
  const body = `google.com, ${PUBLISHER_ID}, DIRECT, f08c47fec0942fa0\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
