import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsentBanner } from "@/components/ConsentBanner";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/lib/constants";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_DESCRIPTION =
  "A sourced, structured record of work done under PM Modi's leadership.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Modi Ne Kiya Kya Hai?",
    template: "%s | Modi Ne Kiya Kya Hai?",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    siteName: "Modi Ne Kiya Kya Hai?",
    type: "website",
    url: SITE_URL,
    title: "Modi Ne Kiya Kya Hai?",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Modi Ne Kiya Kya Hai?",
    description: SITE_DESCRIPTION,
  },
  other: {
    "google-adsense-account": "ca-pub-1804566337195012",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for this locale.
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ConsentBanner />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
