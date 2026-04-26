import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import ConditionalFooter from "@/components/layout/ConditionalFooter";
import ScrollToTop from "@/components/layout/ScrollToTop";
import AuthSessionProvider from "@/components/providers/SessionProvider";
import GoogleAnalytics from "@/components/providers/GoogleAnalytics";
import CookieBanner from "@/components/consent/CookieBanner";
import { safeJsonLd, organizationSchema, webSiteSchema } from "@/lib/json-ld";
import SetHtmlLang from "@/components/providers/SetHtmlLang";

const locales = routing.locales;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.searchfundmarket.com"),
  title: {
    default: "SearchFundMarket - Search Fund Marketplace in Europe",
    template: "%s",
  },
  description:
    "The marketplace connecting search fund entrepreneurs, investors, and business sellers across Europe. Browse acquisitions, find investors, list your business.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "REPLACE_WITH_GSC_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "REPLACE_WITH_BING_VERIFICATION_CODE",
    },
  },
  openGraph: {
    type: "website",
    siteName: "SearchFundMarket",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <AuthSessionProvider>
        <SetHtmlLang locale={locale} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(webSiteSchema()) }}
        />
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen pt-14">{children}</main>
        <ConditionalFooter />
        <CookieBanner />
        <GoogleAnalytics />
      </AuthSessionProvider>
    </NextIntlClientProvider>
  );
}
