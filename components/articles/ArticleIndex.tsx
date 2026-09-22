"use client";

import { ArticleCard } from "@/components/articles/ArticleCard";
import { Stagger, StaggerItem } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import type { ArticleCategory, ArticleListItem } from "@/lib/content/articles";
import { cn, type AppLocale } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

const categories: Array<"all" | ArticleCategory> = [
  "all",
  "tech",
  "ai",
  "design",
  "caseStudies",
];

export function ArticleIndex({
  articles,
  locale,
}: {
  articles: ArticleListItem[];
  locale: AppLocale;
}) {
  const t = useTranslations();
  const [category, setCategory] = useState<(typeof categories)[number]>("all");
  const [visible, setVisible] = useState(9);

  const filtered = useMemo(
    () =>
      category === "all"
        ? articles
        : articles.filter((article) => article.category === category),
    [articles, category],
  );

  return (
    <Section>
      <div
        className="mb-10 flex flex-wrap items-center justify-center gap-2"
        role="group"
        aria-label={t("articles.heroTitle")}
      >
        {categories.map((id) => {
          const active = category === id;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setCategory(id);
                setVisible(9);
              }}
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-full border px-4 text-sm leading-none transition-colors",
                active
                  ? "border-accent bg-accent text-heading"
                  : "border-border bg-transparent text-muted hover:border-accent hover:text-heading",
              )}
            >
              {t(`articles.categories.${id}`)}
            </button>
          );
        })}
      </div>
      <Stagger key={category} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.slice(0, visible).map((article) => (
          <StaggerItem key={article.slug}>
            <ArticleCard article={article} locale={locale} />
          </StaggerItem>
        ))}
      </Stagger>
      {visible < filtered.length ? (
        <div className="mt-10 text-center">
          <Button type="button" variant="secondary" onClick={() => setVisible((n) => n + 3)}>
            {t("common.loadMore")}
          </Button>
        </div>
      ) : null}
    </Section>
  );
}
