import type { IndustryId } from "./industries";
import type { ServiceId } from "./services";

export type Localized = { en: string; ar: string };

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

export type Project = {
  slug: string;
  service: ServiceId;
  industry: IndustryId;
  stack: string[];
  tags: Localized[];
  cover: string;
  gallery: Array<{ src: string; alt: Localized }>;
  name: Localized;
  tagline: Localized;
  cta: Localized;
  sections: ProjectSection[];
};
