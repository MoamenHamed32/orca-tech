import { ArticleBody } from "@/components/articles/ArticleBody";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { ArticleGallery } from "@/components/articles/ArticleGallery";
import { ArticleLinks } from "@/components/articles/ArticleLinks";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getArticleBySlug, getArticles } from "@/lib/cms/articles";
import {
  articles as fallbackArticles,
  getArticle as getStaticArticle,
  getRelatedArticles,
} from "@/lib/content/articles";
import { routing } from "@/i18n/routing";
import { JsonLd, articleJsonLd } from "@/lib/jsonld";
import { localeMetadata } from "@/lib/seo";
import { asLocale } from "@/lib/types";
import { SITE_URL, type AppLocale } from "@/lib/utils";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const items = (await getArticles()) ?? fallbackArticles;
  return items.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/articles/[slug]">) {
  const { locale, slug } = await params;
  const cms = await getArticleBySlug(slug);
  const article = cms === null ? getStaticArticle(slug) : cms?.article;
  if (!article) return {};
  const lang = asLocale(locale);
  return localeMetadata({
    locale,
    title: `${article.title[lang]} — Orca-Tech`,
    description: article.excerpt[lang],
    path: `/articles/${slug}`,
    image: article.cover,
    type: "article",
    publishedTime: article.date,
    authors: [article.author],
  });
}

export default async function ArticleDetailPage({
  params,
}: PageProps<"/[locale]/articles/[slug]">) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(asLocale(locale));
  const cms = await getArticleBySlug(slug);
  const article = cms === null ? getStaticArticle(slug) : cms?.article;
  if (!article) notFound();

  const lang = (locale === "ar" ? "ar" : "en") as AppLocale;
  const t = await getTranslations();
  const related =
    cms === null
      ? getRelatedArticles(slug)
      : (cms?.related ?? []);
  const slides =
    article.gallery.length > 0
      ? article.gallery
      : [{ src: article.cover, alt: article.title }];

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          locale: lang,
          title: article.title[lang],
          description: article.excerpt[lang],
          path: `/articles/${slug}`,
          image: article.cover.startsWith("http")
            ? article.cover
            : `${SITE_URL}${article.cover}`,
          date: article.date,
          author: article.author,
        })}
      />
      <section className="px-5 pb-10 pt-28 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <ButtonLink href="/articles" variant="ghost" className="px-0">
            ← {t("common.backToArticles")}
          </ButtonLink>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-accent-soft">
            {t(`articles.categories.${article.category}`)}
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {article.title[lang]}
          </h1>
          <p className="mt-4 text-sm text-muted">
            {article.author} · {article.date} · {article.readTime} min
          </p>
          <ArticleGallery images={slides} locale={lang} />
          {article.links.length > 0 ? (
            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-soft">
                {t("articles.resources")}
              </p>
              <ArticleLinks links={article.links} />
            </div>
          ) : null}
        </div>
      </section>
      <Section>
        <ArticleBody blocks={article.body} locale={lang} />
      </Section>
      {related.length > 0 ? (
        <Section>
          <h2 className="font-display mb-8 text-2xl font-semibold">
            {t("common.relatedArticles")}
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} locale={lang} />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
