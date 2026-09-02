import { ApplyForm } from "@/components/careers/ApplyForm";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { getJob } from "@/lib/content/jobs";
import { routing } from "@/i18n/routing";
import { localeMetadata } from "@/lib/seo";
import { asLocale } from "@/lib/types";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/careers/apply">) {
  const { locale } = await params;
  const t = await getTranslations({ locale: asLocale(locale), namespace: "careers" });
  return localeMetadata({
    locale,
    title: t("applyMetaTitle"),
    description: t("applyMetaDescription"),
    path: "/careers/apply",
  });
}

export default async function ApplyPage({
  params,
  searchParams,
}: PageProps<"/[locale]/careers/apply">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(asLocale(locale));
  const t = await getTranslations("careers");
  const query = await searchParams;
  const roleParam = Array.isArray(query.role) ? query.role[0] : query.role;
  const job = getJob(roleParam);

  return (
    <>
      <PageHero
        title={job ? t("applyHeroTitleRole", { role: job.title[locale === "ar" ? "ar" : "en"] }) : t("applyHeroTitle")}
        subtitle={t("applyHeroSubtitle")}
      />
      <Section>
        <div className="mx-auto max-w-2xl">
          <ApplyForm initialRole={job?.id} />
        </div>
      </Section>
    </>
  );
}
