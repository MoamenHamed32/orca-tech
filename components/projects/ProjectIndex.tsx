"use client";

import { Stagger, StaggerItem } from "@/components/ui/AnimatedSection";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import {
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/lib/content/projects";
import { cn, type AppLocale } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

export function ProjectIndex({
  projects,
  locale,
}: {
  projects: Project[];
  locale: AppLocale;
}) {
  const t = useTranslations();
  const [category, setCategory] = useState<"all" | ProjectCategory>("all");

  const filtered = useMemo(() => {
    const list =
      category === "all"
        ? projects
        : projects.filter((project) => project.category === category);

    if (category !== "all") return list;

    return [...list].sort((a, b) => {
      if (a.category === "caseStudy" && b.category !== "caseStudy") return 1;
      if (a.category !== "caseStudy" && b.category === "caseStudy") return -1;
      return 0;
    });
  }, [projects, category]);

  return (
    <Section>
      <div
        className="mb-10 flex flex-wrap items-center justify-center gap-2"
        role="group"
        aria-label={t("projects.heroTitle")}
      >
        {projectCategories.map((id) => {
          const active = category === id;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={active}
              onClick={() => setCategory(id)}
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-full border px-4 text-sm leading-none transition-colors",
                active
                  ? "border-accent bg-accent text-heading"
                  : "border-border bg-transparent text-muted hover:border-accent hover:text-heading",
              )}
            >
              {t(`projects.categories.${id}`)}
            </button>
          );
        })}
      </div>
      <Stagger key={category} className="grid gap-6 lg:grid-cols-2">
        {filtered.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} locale={locale} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
