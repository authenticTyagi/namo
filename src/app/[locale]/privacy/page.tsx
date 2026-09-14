import { setRequestLocale } from "next-intl/server";
import { staticPages } from "@/content/static-pages";
import { resolveStaticPageContent, type Locale } from "@/lib/localized";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="mx-auto max-w-2xl whitespace-pre-wrap px-4 py-10 leading-relaxed">
      {resolveStaticPageContent(locale, staticPages.privacy)}
    </div>
  );
}
