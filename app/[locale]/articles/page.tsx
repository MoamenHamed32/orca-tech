import { ArticleIndex } from "@/components/articles/ArticleIndex";
import { PageHero } from "@/components/ui/PageHero";
import { ARTICLES_COVER, articles } from "@/lib/content/articles";
import { routing } from "@/i18n/routing";
import { localeMetadata } from "@/lib/seo";
import { asLocale } from "@/lib/types";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/articles">) {
  const { locale } = await params;
  const t = await getTranslations({ locale: asLocale(locale), namespace: "articles" });
  return localeMetadata({
    locale,
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/articles",
    image: ARTICLES_COVER,
  });
}

export default async function ArticlesPage({
  params,
}: PageProps<"/[locale]/articles">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(asLocale(locale));
  const t = await getTranslations("articles");

  return (
    <>
      <PageHero
        compact
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        cover={ARTICLES_COVER}
        coverAlt="Writers and engineers collaborating on product notes"
        coverPosition="object-[center_40%]"
      />
      <ArticleIndex articles={articles} locale={asLocale(locale)} />
    </>
  );
}
