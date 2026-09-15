import { ImageResponse } from "next/og";
import { getPublishedComparisonBySlug } from "@/db/queries/comparisons";
import type { Locale } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: Locale; comparisonSlug: string }>;
}) {
  const { locale, comparisonSlug } = await params;
  const comparison = await getPublishedComparisonBySlug(comparisonSlug, locale);
  const title = comparison?.title ?? "Modi Ne Kiya Kya Hai?";
  const indiaPoint = comparison?.points.find((p) => p.isIndia);

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
            padding: "6px 18px",
            borderRadius: 999,
            backgroundColor: "#3987e5",
            color: "#0a0a0a",
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 24,
            alignSelf: "flex-start",
          }}
        >
          INDIA IN THE WORLD
        </div>
        <div>{title}</div>
        {indiaPoint && (
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginTop: 32 }}>
            <div style={{ fontSize: 72, color: "#3987e5" }}>{indiaPoint.value}</div>
            <div style={{ fontSize: 26, color: "#a3a3a3", fontWeight: 400 }}>
              {comparison?.metricLabel}
            </div>
          </div>
        )}
      </div>
    ),
    size,
  );
}
