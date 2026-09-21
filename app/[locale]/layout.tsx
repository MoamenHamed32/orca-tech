import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { routing } from "@/i18n/routing";
import { pick } from "@/lib/cms/pick";
import { getSettings } from "@/lib/cms/settings";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { localeMetadata } from "@/lib/seo";
import { asLocale } from "@/lib/types";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { IBM_Plex_Sans_Arabic, Inter, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import type { Viewport } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-arabic",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#0a0c10",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({ params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  const t = await getTranslations({ locale: asLocale(locale), namespace: "meta" });
  const settings = await getSettings();
  return localeMetadata({
    locale,
    title: settings ? pick(locale, settings.seo.defaultTitle) : t("defaultTitle"),
    description: settings
      ? pick(locale, settings.seo.defaultDescription)
      : t("defaultDescription"),
    keywords: settings ? pick(locale, settings.seo.keywords) : t("keywords"),
  });
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(asLocale(locale));
  const messages = await getMessages();
  const settings = await getSettings();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexArabic.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-heading">
        <JsonLd data={organizationJsonLd(locale, settings)} />
        <JsonLd data={websiteJsonLd(locale, settings)} />
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
