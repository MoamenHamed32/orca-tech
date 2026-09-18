import { marketplaceProject } from "./caseStudyMarketplace";
import { schoolProject } from "./caseStudySchool";
import { dalelElgwaaProject } from "./projectDalelElgwaa";
import { halsahProject } from "./projectHalsah";
import { smartDriverProject } from "./projectSmartDriver";
import { smartStudentProject } from "./projectSmartStudent";
import { yeloCashProject } from "./projectYeloCash";
import { yeloGiftProject } from "./projectYeloGift";

export type {
  Localized,
  Project,
  ProjectCardItem,
  ProjectCategory,
  ProjectGalleryItem,
  ProjectLink,
  ProjectModule,
  ProjectSection,
} from "./projectTypes";

export { projectCategories } from "./projectTypes";

export const PROJECTS_COVER = "/assets/projects/projects-cover.png";

export const projects = [
  dalelElgwaaProject,
  yeloGiftProject,
  yeloCashProject,
  halsahProject,
  smartDriverProject,
  smartStudentProject,
  marketplaceProject,
  schoolProject,
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
