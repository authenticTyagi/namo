import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeInit } from "@/components/layout/ThemeInit";
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
      <head>
        {/* Google's official consent-management platform for AdSense
            (Funding Choices) — required by Google's own policy for
            publishers with EEA/UK/Swiss traffic, not something a custom
            banner can substitute for. Auto-detects a visitor's region and
            shows Google's own GDPR/UK consent dialog only where legally
            required; the adsbygoogle tag below reads its consent signal
            automatically, no extra wiring needed on our side. Per Google's
            setup instructions this script must load before the ad tag.
            INERT until "Privacy & messaging → GDPR message" is turned on
            in the AdSense dashboard (a manual step, not code) — safe to
            ship ahead of that. */}
        <script async src="https://fundingchoicesmessages.google.com/i/pub-1804566337195012?ers=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function signalGooglefcPresent(){if(!window.frames['googlefcPresent']){if(document.body){var iframe=document.createElement('iframe');iframe.style='width:0;height:0;border:none;z-index:-1000;left:-1000px;top:-1000px;';iframe.style.display='none';iframe.name='googlefcPresent';document.body.appendChild(iframe);}else{setTimeout(signalGooglefcPresent,0);}}}signalGooglefcPresent();})();`,
          }}
        />
        {/* AdSense loader — must be a literal <script> in <head> on every
            public page (Google's site-verification crawler looks for it).
            Lives in this shared layout so every existing and future
            entry/editorial/comparison/category page gets it automatically.
            Deliberately NOT in /admin's separate root layout. */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1804566337195012"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeInit />
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
