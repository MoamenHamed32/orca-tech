import { marketplaceProject } from "./caseStudyMarketplace";
import { schoolProject } from "./caseStudySchool";

export type {
  Localized,
  Project,
  ProjectCardItem,
  ProjectModule,
  ProjectSection,
} from "./projectTypes";

export const PROJECTS_COVER = "/assets/projects/projects-cover.png";

export const projects = [marketplaceProject, schoolProject];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
