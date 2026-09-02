import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/utils";
import type { Metadata } from "next";

const DEFAULT_OG = "/og.png";

function absoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function localeMetadata({
  locale,
  title,
  description,
  path = "",
  image,
  type = "website",
  publishedTime,
  authors,
  keywords,
}: {
  locale: string;
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  keywords?: string | string[];
}): Metadata {
  const normalized = path.startsWith("/") ? path : path ? `/${path}` : "";
  const url = `${SITE_URL}/${locale}${normalized}`;
  const ogImage = absoluteUrl(image ?? DEFAULT_OG);
  const languages: Record<string, string> = {
    ...Object.fromEntries(
      routing.locales.map((item) => [item, `${SITE_URL}/${item}${normalized}`]),
    ),
    "x-default": `${SITE_URL}/en${normalized}`,
  };

  return {
    title,
    description,
    applicationName: "Orca-Tech",
    authors: [{ name: "Orca Technology Group" }],
    creator: "Orca-Tech",
    publisher: "Orca Technology Group",
    category: "technology",
    keywords:
      keywords ??
      (locale === "ar"
        ? "أوركا-تك, دار برمجيات دبي, تطوير التجارة الإلكترونية, تحسين محركات البحث, React Native, Flutter, الذكاء الاصطناعي, البنية السحابية, Next.js, Shopify"
        : "Orca-Tech, software house Dubai, e-commerce development, SEO, React Native, Flutter, AI products, cloud infrastructure, Next.js, Shopify"),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/icon.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/manifest.webmanifest",
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      locale: locale === "ar" ? "ar_AE" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_AE"],
      url,
      siteName: "Orca-Tech",
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime,
            authors,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
