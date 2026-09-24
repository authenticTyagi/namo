import { ImageResponse } from "next/og";
import { getPublicSiteStats } from "@/db/queries/site-stats";
import type { Locale } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Self-contained (not next-intl's getTranslations) since this route runs
// outside the normal request-render tree that setRequestLocale relies on
// — same reasoning as the entry/editorial/comparison OG images, which
// hardcode the site name rather than translating it.
const SITE_NAME: Record<Locale, string> = {
  hi: "मोदी ने किया क्या है?",
  en: "Modi Ne Kiya Kya Hai?",
  bn: "Modi Ne Kiya Kya Hai?",
  te: "Modi Ne Kiya Kya Hai?",
  mr: "Modi Ne Kiya Kya Hai?",
};

const TAGLINE: Record<Locale, string> = {
  hi: "प्रधानमंत्री मोदी के नेतृत्व में हुए काम का एक सोर्स्ड, सुगठित रिकॉर्ड",
  en: "A sourced, structured record of work done under PM Modi's leadership",
  bn: "প্রধানমন্ত্রী মোদীর নেতৃত্বে করা কাজের একটি সূত্র-উল্লেখিত, সুবিন্যস্ত বিবরণ",
  te: "ప్రధానమంత్రి మోదీ నాయకత్వంలో జరిగిన పనుల యొక్క ఆధారాలతో కూడిన, వ్యవస్థీకృత రికార్డు",
  mr: "पंतप्रधान मोदींच्या नेतृत्वाखाली झालेल्या कामाचा स्रोत-निर्देशित, सुव्यवस्थित तपशील",
};

export default async function OgImage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const stats = await getPublicSiteStats();

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
        }}
      >
        <div style={{ fontSize: 60, fontWeight: 700 }}>{SITE_NAME[locale]}</div>
        <div style={{ fontSize: 28, color: "#a3a3a3", marginTop: 20, maxWidth: 900 }}>
          {TAGLINE[locale]}
        </div>
        {stats.entryCount > 0 && (
          <div style={{ display: "flex", gap: 48, marginTop: 48 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 44, fontWeight: 700, color: "#8ab4f8" }}>
                {stats.entryCount}
              </div>
              <div style={{ fontSize: 20, color: "#a3a3a3" }}>Entries</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 44, fontWeight: 700, color: "#8ab4f8" }}>
                {stats.categoryCount}
              </div>
              <div style={{ fontSize: 20, color: "#a3a3a3" }}>Categories</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 44, fontWeight: 700, color: "#8ab4f8" }}>
                {stats.sourceCount}
              </div>
              <div style={{ fontSize: 20, color: "#a3a3a3" }}>Sources cited</div>
            </div>
          </div>
        )}
      </div>
    ),
    size,
  );
}
