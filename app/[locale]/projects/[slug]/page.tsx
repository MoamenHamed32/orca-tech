import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectSections } from "@/components/projects/ProjectSections";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getProject, projects } from "@/lib/content/projects";
import { routing } from "@/i18n/routing";
import { JsonLd, projectJsonLd } from "@/lib/jsonld";
import { localeMetadata } from "@/lib/seo";
import { asLocale } from "@/lib/types";
import { SITE_URL } from "@/lib/utils";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects/[slug]">) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const lang = asLocale(locale);
  return localeMetadata({
    locale,
    title: `${project.name[lang]} — Orca-Tech`,
    description: project.tagline[lang],
    path: `/projects/${slug}`,
    image: project.cover,
  });
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/[locale]/projects/[slug]">) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(asLocale(locale));
  const project = getProject(slug);
  if (!project) notFound();

  const lang = locale === "ar" ? "ar" : "en";
  const t = await getTranslations();
  const images = project.gallery.map((image) => ({
    src: image.src,
    alt: image.alt[lang],
  }));

  return (
    <>
      <JsonLd
        data={projectJsonLd({
          locale: lang,
          title: project.name[lang],
          description: project.tagline[lang],
          path: `/projects/${slug}`,
          image: `${SITE_URL}${project.cover}`,
        })}
      />
      <section className="px-5 pb-6 pt-28 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <ButtonLink href="/projects" variant="ghost" className="px-0">
            ← {t("common.backToProjects")}
          </ButtonLink>
          <p className="mt-6 text-xs uppercase tracking-wider text-accent-soft">
            {t(`industries.${project.industry}.name`)} · {t(`services.${project.service}.name`)}
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold sm:text-5xl">
            {project.name[lang]}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{project.tagline[lang]}</p>
          {project.tags.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag.en}
                  className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted"
                >
                  {tag[lang]}
                </span>
              ))}
            </div>
          ) : null}
          <h2 className="font-display mt-12 text-2xl font-semibold">{t("projects.gallery")}</h2>
          <ProjectGallery images={images} />
        </div>
      </section>
      <Section>
        <ProjectSections sections={project.sections} locale={lang} />
        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold">{t("projects.stack")}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border px-3 py-1 text-sm text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <h2 className="font-display text-3xl font-semibold">{project.cta[lang]}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">{t("projects.ctaTitle")}</p>
          <div className="mt-6">
            <ButtonLink href="/contact">{t("projects.ctaButton")}</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
