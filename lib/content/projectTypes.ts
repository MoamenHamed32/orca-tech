import type { IndustryId } from "./industries";
import type { ServiceId } from "./services";

export type Localized = { en: string; ar: string };

export type ProjectCategory =
  | "caseStudy"
  | "lms"
  | "ecommerce"
  | "fintech"
  | "realEstate"
  | "charity"
  | "logistics";

export const projectCategories: Array<"all" | ProjectCategory> = [
  "all",
  "lms",
  "ecommerce",
  "fintech",
  "realEstate",
  "charity",
  "logistics",
  "caseStudy",
];

export type ProjectCardItem = {
  title: Localized;
  body: Localized;
};

export type ProjectModule = {
  kicker: Localized;
  title: Localized;
  body: Localized;
  bullets: Localized[];
};

export type ProjectSection = {
  kicker: Localized;
  title: Localized;
  intro?: Localized;
  cards?: ProjectCardItem[];
  steps?: ProjectCardItem[];
  modules?: ProjectModule[];
  layers?: Localized[];
  notes?: ProjectCardItem[];
};

export type ProjectLink = {
  label: Localized;
  href: string;
};

export type ProjectGalleryItem = {
  src: string;
  alt: Localized;
  device?: "desktop" | "mobile";
};

export type Project = {
  slug: string;
  category: ProjectCategory;
  service: ServiceId;
  industry: IndustryId;
  stack: string[];
  tags: Localized[];
  cover: string;
  logo?: string;
  logoTone?: "light" | "dark";
  links?: ProjectLink[];
  gallery: ProjectGalleryItem[];
  name: Localized;
  tagline: Localized;
  cta: Localized;
  sections: ProjectSection[];
};
