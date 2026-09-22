export type LocalizedString = {
  en: string;
  ar: string;
};

export type CmsSettings = {
  siteName: string;
  legalName: string;
  description: LocalizedString;
  seo: {
    defaultTitle: LocalizedString;
    defaultDescription: LocalizedString;
    keywords: LocalizedString;
  };
  emails: {
    info: string;
    sales: string;
  };
  phones: string[];
  address: {
    street: LocalizedString;
    locality: LocalizedString;
    countryCode: string;
    formatted: LocalizedString;
  };
  map: {
    lat: number;
    lng: number;
  };
  social: {
    facebook: string | null;
    instagram: string | null;
    linkedin: string | null;
  };
};

export type CmsStatItem = {
  id: string;
  value: number;
  suffix: string;
  label: LocalizedString;
};

export type CmsAboutStats = {
  title: LocalizedString;
  items: CmsStatItem[];
};

export type CmsJob = {
  id: string;
  title: LocalizedString;
  department: LocalizedString;
  location: LocalizedString;
  type: LocalizedString;
  summary: LocalizedString;
};

export type CmsJobDetail = CmsJob & {
  description: LocalizedString;
  responsibilities: LocalizedString[];
  requirements: LocalizedString[];
};

export type CmsArticleCategory = "tech" | "ai" | "design" | "caseStudies";

export type CmsArticleLink = {
  kind: "linkedin" | "github" | "website";
  href: string;
  label: string;
};

export type CmsArticleListItem = {
  slug: string;
  category: CmsArticleCategory;
  date: string;
  readTime: number;
  author: string;
  cover: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  links: CmsArticleLink[];
};

export type CmsArticleBlock = {
  type: "p" | "h2";
  en: string;
  ar: string;
};

export type CmsArticleImage = {
  src: string;
  alt: LocalizedString;
};

export type CmsArticleDetail = CmsArticleListItem & {
  gallery: CmsArticleImage[];
  body: CmsArticleBlock[];
  related: CmsArticleListItem[];
};
