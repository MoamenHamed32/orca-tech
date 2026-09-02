"use client";

import { Link } from "@/i18n/navigation";
import type { Project } from "@/lib/content/projects";
import type { AppLocale } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: AppLocale;
}) {
  const t = useTranslations();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-border"
    >
      <Image
        src={project.cover}
        alt={project.name[locale]}
        width={1400}
        height={900}
        className="h-72 w-full object-cover object-top transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
      <div className="absolute inset-0 flex items-end p-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-accent-soft">
            {t(`industries.${project.industry}.name`)} · {t(`services.${project.service}.name`)}
          </p>
          <h3 className="font-display mt-1 text-2xl font-semibold">{project.name[locale]}</h3>
          <p className="mt-1 text-sm text-muted">{project.tagline[locale]}</p>
        </div>
      </div>
      <div className="absolute inset-0 grid place-items-center bg-background/0 opacity-0 transition-all duration-300 group-hover:bg-background/35 group-hover:opacity-100">
        <span className="rounded-full bg-accent px-5 py-2 text-sm font-semibold">
          {t("common.viewCaseStudy")}
        </span>
      </div>
    </Link>
  );
}
