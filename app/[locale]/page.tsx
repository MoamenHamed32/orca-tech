import { ContactCTA } from "@/components/home/ContactCTA";
import { Hero } from "@/components/home/Hero";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { LogoCarousel } from "@/components/home/LogoCarousel";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { routing } from "@/i18n/routing";
import { localeMetadata } from "@/lib/seo";
import { asLocale } from "@/lib/types";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const t = await getTranslations({ locale: asLocale(locale), namespace: "home" });
  return localeMetadata({
    locale,
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(asLocale(locale));

  return (
    <>
      <Hero />
      <ServicesGrid />
      <LogoCarousel />
      <IndustriesGrid />
      <ContactCTA />
    </>
  );
}
