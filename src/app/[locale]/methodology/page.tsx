import { setRequestLocale } from "next-intl/server";
import { staticPages } from "@/content/static-pages";
import type { Locale } from "@/i18n/routing";

export default async function MethodologyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="mx-auto max-w-2xl whitespace-pre-wrap px-4 py-10 leading-relaxed">
      {staticPages.methodology[locale]}
    </div>
  );
}
