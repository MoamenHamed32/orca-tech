import { ProjectIndex } from "@/components/projects/ProjectIndex";
import { PageHero } from "@/components/ui/PageHero";
import { PROJECTS_COVER, projects } from "@/lib/content/projects";
import { routing } from "@/i18n/routing";
import { localeMetadata } from "@/lib/seo";
import { asLocale } from "@/lib/types";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects">) {
  const { locale } = await params;
  const t = await getTranslations({ locale: asLocale(locale), namespace: "projects" });
  return localeMetadata({
    locale,
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/projects",
    image: PROJECTS_COVER,
  });
}

export default async function ProjectsPage({
  params,
}: PageProps<"/[locale]/projects">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(asLocale(locale));
  const t = await getTranslations("projects");

  return (
    <>
      <PageHero
        compact
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        cover={PROJECTS_COVER}
        coverAlt="Orca-Tech mark"
        coverPosition="object-right"
      />
      <ProjectIndex projects={projects} locale={asLocale(locale)} />
    </>
  );
}
