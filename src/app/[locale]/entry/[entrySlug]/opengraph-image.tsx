import { ImageResponse } from "next/og";
import { getPublishedEntryBySlug } from "@/db/queries/entries";
import type { Locale } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: Locale; entrySlug: string }>;
}) {
  const { locale, entrySlug } = await params;
  const entry = await getPublishedEntryBySlug(entrySlug);
  const title = entry ? (locale === "hi" ? entry.titleHi : entry.titleEn) : "Modi Ne Kiya Kya Hai";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          color: "#ededed",
          fontSize: 56,
          fontWeight: 700,
        }}
      >
        <div style={{ fontSize: 28, color: "#a3a3a3", marginBottom: 24 }}>
          Modi Ne Kiya Kya Hai
        </div>
        <div>{title}</div>
      </div>
    ),
    size,
  );
}
