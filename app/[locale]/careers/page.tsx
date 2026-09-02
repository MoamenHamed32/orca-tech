import { JobList } from "@/components/careers/JobList";
import { OpenApplication } from "@/components/careers/OpenApplication";
import { Perks } from "@/components/careers/Perks";
import { PageHero } from "@/components/ui/PageHero";
import { CAREERS_COVER } from "@/lib/content/jobs";
import { routing } from "@/i18n/routing";
import { localeMetadata } from "@/lib/seo";
import { asLocale } from "@/lib/types";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/careers">) {
  const { locale } = await params;
  const t = await getTranslations({ locale: asLocale(locale), namespace: "careers" });
  return localeMetadata({
    locale,
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/careers",
    image: CAREERS_COVER,
  });
}

export default async function CareersPage({
  params,
}: PageProps<"/[locale]/careers">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(asLocale(locale));
  const t = await getTranslations("careers");

  return (
    <>
      <PageHero
        compact
        eyebrow={t("hiringBadge")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        cover={CAREERS_COVER}
        coverAlt="Orca-Tech team collaborating"
        coverPosition="object-[center_35%]"
      />
      <Perks />
      <JobList />
      <OpenApplication />
    </>
  );
}
