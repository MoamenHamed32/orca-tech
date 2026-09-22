import { getArticles } from "@/lib/cms/articles";
import { articles as fallbackArticles } from "@/lib/content/articles";
import { projects } from "@/lib/content/projects";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/utils";
import type { MetadataRoute } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const staticPaths: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.9, changeFrequency: "weekly" },
  { path: "/articles", priority: 0.8, changeFrequency: "weekly" },
  { path: "/careers", priority: 0.6, changeFrequency: "weekly" },
  { path: "/careers/apply", priority: 0.4, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articleList = (await getArticles()) ?? fallbackArticles;
  const extra = [
    ...articleList.map((article) => ({
      path: `/articles/${article.slug}`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),
    ...projects.map((project) => ({
      path: `/projects/${project.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ];

  return [...staticPaths, ...extra].flatMap(({ path, priority, changeFrequency }) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: {
          ...Object.fromEntries(
            routing.locales.map((item) => [item, `${SITE_URL}/${item}${path}`]),
          ),
          "x-default": `${SITE_URL}/en${path}`,
        },
      },
    })),
  );
}
