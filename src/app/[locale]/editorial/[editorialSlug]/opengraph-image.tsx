import { ImageResponse } from "next/og";
import { getPublishedEditorialBySlug } from "@/db/queries/editorials";
import type { Locale } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TONE_COLORS: Record<string, string> = {
  positive: "#34d399",
  negative: "#f87171",
  neutral: "#38bdf8",
  mixed: "#fbbf24",
};

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: Locale; editorialSlug: string }>;
}) {
  const { locale, editorialSlug } = await params;
  const editorial = await getPublishedEditorialBySlug(editorialSlug, locale);
  const title = editorial?.headline ?? "Modi Ne Kiya Kya Hai?";
  const accent = TONE_COLORS[editorial?.tone ?? "neutral"];

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
          fontSize: 52,
          fontWeight: 700,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "6px 18px",
              borderRadius: 999,
              backgroundColor: accent,
              color: "#0a0a0a",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            OPINION
          </div>
          <div style={{ fontSize: 26, color: "#a3a3a3" }}>Modi Ne Kiya Kya Hai?</div>
        </div>
        <div>{title}</div>
      </div>
    ),
    size,
  );
}
