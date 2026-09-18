import { BRAND } from "@/lib/brand";
import { SITE_URL } from "@/lib/utils";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd(locale: string) {
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: isAr ? "أوركا-تك" : BRAND.name,
    alternateName: isAr ? BRAND.name : "أوركا-تك",
    legalName: BRAND.legalName,
    url: `${SITE_URL}/${locale}`,
    logo: `${SITE_URL}/icon-512.png`,
    image: `${SITE_URL}/og.png`,
    email: [...BRAND.emails],
    telephone: BRAND.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.streetAddress,
      addressLocality: BRAND.locality,
      addressCountry: BRAND.country,
    },
    sameAs: BRAND.sameAs,
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

export function websiteJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Orca-Tech",
    url: `${SITE_URL}/${locale}`,
    inLanguage: locale === "ar" ? "ar" : "en",
    publisher: {
      "@type": "Organization",
      name: BRAND.legalName,
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
