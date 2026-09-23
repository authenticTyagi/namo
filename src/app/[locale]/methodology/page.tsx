import { getTranslations, setRequestLocale } from "next-intl/server";
import { staticPages } from "@/content/static-pages";
import { resolveStaticPageContent, isExtraLocale, type Locale } from "@/lib/localized";
import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

// hi/en-only by design (see resolveStaticPageContent) — bn/te/mr always
// canonicalize to the English page rather than self-canonicalizing
// duplicate English text under a distinct URL.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("footer");
  const canonicalLocale = isExtraLocale(locale) ? "en" : locale;
  return { title: t("methodologyLink"), alternates: { canonical: `${SITE_URL}/${canonicalLocale}/methodology` } };
}

export default async function MethodologyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="mx-auto max-w-2xl whitespace-pre-wrap px-4 py-10 leading-relaxed">
      {resolveStaticPageContent(locale, staticPages.methodology)}
    </div>
  );
}
