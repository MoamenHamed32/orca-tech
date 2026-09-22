"use client";

import { ArticleLinks } from "@/components/articles/ArticleLinks";
import { Card } from "@/components/ui/Card";
import { Link } from "@/i18n/navigation";
import type { ArticleListItem } from "@/lib/content/articles";
import type { AppLocale } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function ArticleCard({
  article,
  locale,
}: {
  article: ArticleListItem;
  locale: AppLocale;
}) {
  const t = useTranslations();

  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      <Link href={`/articles/${article.slug}`} className="block">
        <img
          src={article.cover}
          alt={article.title[locale]}
          className="h-48 w-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-soft">
          {t(`articles.categories.${article.category}`)}
        </p>
        <h3 className="font-display mt-2 text-xl font-semibold">
          <Link href={`/articles/${article.slug}`}>{article.title[locale]}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{article.excerpt[locale]}</p>
        <p className="mt-4 text-xs text-muted">
          {article.author} · {article.date} · {article.readTime} min
        </p>
        <ArticleLinks links={article.links} className="mt-4" />
        <Link
          href={`/articles/${article.slug}`}
          className="mt-4 text-sm font-semibold text-accent hover:text-accent-soft"
        >
          {t("common.readMore")}
        </Link>
      </div>
    </Card>
  );
}
