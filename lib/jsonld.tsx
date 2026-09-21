import { BRAND } from "@/lib/brand";
import { pick } from "@/lib/cms/pick";
import type { CmsSettings } from "@/lib/cms/types";
import { SITE_URL } from "@/lib/utils";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd(locale: string, settings?: CmsSettings | null) {
  const isAr = locale === "ar";
  const sameAs = settings
    ? [settings.social.linkedin, settings.social.facebook, settings.social.instagram].filter(
        (url): url is string => Boolean(url),
      )
    : [...BRAND.sameAs];
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: isAr ? "أوركا-تك" : (settings?.siteName ?? BRAND.name),
    alternateName: isAr ? (settings?.siteName ?? BRAND.name) : "أوركا-تك",
    legalName: settings?.legalName ?? BRAND.legalName,
    url: `${SITE_URL}/${locale}`,
    logo: `${SITE_URL}/icon-512.png`,
    image: `${SITE_URL}/og.png`,
    email: settings ? [settings.emails.info, settings.emails.sales] : [...BRAND.emails],
    telephone: settings?.phones[0] ?? BRAND.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings ? pick(locale, settings.address.street) : BRAND.streetAddress,
      addressLocality: settings ? pick(locale, settings.address.locality) : BRAND.locality,
      addressCountry: settings?.address.countryCode ?? BRAND.country,
    },
    sameAs,
    areaServed: ["AE", "SA", "EG", "worldwide"],
    knowsAbout: [
      "Software engineering",
      "E-commerce",
      "SEO",
      "Artificial intelligence",
      "Cloud infrastructure",
      "Mobile applications",
    ],
  };
}

export function websiteJsonLd(locale: string, settings?: CmsSettings | null) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: settings?.siteName ?? "Orca-Tech",
    url: `${SITE_URL}/${locale}`,
    inLanguage: locale === "ar" ? "ar" : "en",
    publisher: {
      "@type": "Organization",
      name: settings?.legalName ?? BRAND.legalName,
      url: SITE_URL,
    },
  };
}

export function articleJsonLd({
  locale,
  title,
  description,
  path,
  image,
  date,
  author,
}: {
  locale: string;
  title: string;
  description: string;
  path: string;
  image: string;
  date: string;
  author: string;
}) {
  const url = `${SITE_URL}/${locale}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished: date,
    author: { "@type": "Person", name: author },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png` },
    },
    mainEntityOfPage: url,
    inLanguage: locale === "ar" ? "ar" : "en",
  };
}

export function projectJsonLd({
  locale,
  title,
  description,
  path,
  image,
}: {
  locale: string;
  title: string;
  description: string;
  path: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    image,
    url: `${SITE_URL}/${locale}${path}`,
    inLanguage: locale === "ar" ? "ar" : "en",
    creator: { "@type": "Organization", name: BRAND.name },
  };
}
