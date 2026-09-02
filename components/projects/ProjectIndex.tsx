"use client";

import { Stagger, StaggerItem } from "@/components/ui/AnimatedSection";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/lib/content/projects";
import type { AppLocale } from "@/lib/utils";

export function ProjectIndex({
  projects,
  locale,
}: {
  projects: Project[];
  locale: AppLocale;
}) {
  return (
    <Section>
      <Stagger className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} locale={locale} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
