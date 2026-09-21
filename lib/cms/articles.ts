import { cache } from "react";
import { cmsGet } from "@/lib/cms/client";
import type { Article, ArticleListItem } from "@/lib/content/articles";
import type { CmsArticleDetail, CmsArticleListItem } from "@/lib/cms/types";

function toListItem(item: CmsArticleListItem): ArticleListItem {
  return {
    slug: item.slug,
    category: item.category,
    date: item.date,
    readTime: item.readTime,
    author: item.author,
    cover: item.cover,
    title: item.title,
    excerpt: item.excerpt,
    links: item.links ?? [],
  };
}

function toArticle(item: CmsArticleDetail): Article {
  return {
    ...toListItem(item),
    body: item.body ?? [],
    gallery: item.gallery ?? [],
  };
}

export const getArticles = cache(async () => {
  const result = await cmsGet<{ items: CmsArticleListItem[] }>(
    "/articles?page=1&limit=50",
  );
  return result.ok ? result.data.items.map(toListItem) : null;
});

export const getArticleBySlug = cache(async (slug: string) => {
  const result = await cmsGet<CmsArticleDetail>(
    `/articles/${encodeURIComponent(slug)}`,
  );
  if (result.ok) {
    return {
      article: toArticle(result.data),
      related: (result.data.related ?? []).map(toListItem),
    };
  }
  if (result.status === 404) return undefined;
  return null;
});
