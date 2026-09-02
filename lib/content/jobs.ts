export type Job = {
  id: string;
  title: { en: string; ar: string };
  department: { en: string; ar: string };
  location: { en: string; ar: string };
  type: { en: string; ar: string };
  summary: { en: string; ar: string };
};

export const jobs: Job[] = [
  {
    id: "senior-frontend",
    title: { en: "Senior Frontend Engineer", ar: "مهندس واجهات أول" },
    department: { en: "Engineering", ar: "الهندسة" },
    location: { en: "Remote / Dubai", ar: "عن بُعد / دبي" },
    type: { en: "Full-time", ar: "دوام كامل" },
    summary: {
      en: "Lead Next.js and design-system work across client products — performance, accessibility, and production polish.",
      ar: "قد عمل Next.js وأنظمة التصميم عبر منتجات العملاء — أداء وإتاحة ولمسة إنتاج.",
    },
  },
  {
    id: "senior-mobile",
    title: { en: "Senior Mobile Engineer", ar: "مهندس تطبيقات أول" },
    department: { en: "Engineering", ar: "الهندسة" },
    location: { en: "Hybrid / Cairo", ar: "هجين / القاهرة" },
    type: { en: "Full-time", ar: "دوام كامل" },
    summary: {
      en: "Ship React Native and native modules for commerce and platform apps used across MENA.",
      ar: "أطلق تطبيقات React Native ووحدات أصلية لمنتجات التجارة والمنصات في المنطقة.",
    },
  },
  {
    id: "product-designer",
    title: { en: "Product Designer", ar: "مصمم منتجات" },
    department: { en: "Design", ar: "التصميم" },
    location: { en: "Hybrid / Dubai", ar: "هجين / دبي" },
    type: { en: "Full-time", ar: "دوام كامل" },
    summary: {
      en: "Design end-to-end product journeys for commerce, SaaS, and internal tools — from research to shipped UI.",
      ar: "صمّم رحلات منتج كاملة للتجارة والبرمجيات كخدمة والأدوات الداخلية — من البحث إلى الواجهة.",
    },
  },
  {
    id: "product-manager",
    title: { en: "Product Manager", ar: "مدير منتج" },
    department: { en: "Product", ar: "المنتج" },
    location: { en: "Remote / Cairo", ar: "عن بُعد / القاهرة" },
    type: { en: "Full-time", ar: "دوام كامل" },
    summary: {
      en: "Own discovery, scope, and delivery with engineering — clear outcomes, tight feedback loops, no fog.",
      ar: "املِك الاكتشاف والنطاق والتسليم مع الهندسة — نتائج واضحة وحلقات تغذية راجعة بلا ضباب.",
    },
  },
];

export const GENERAL_APPLICATION_ID = "general";

export const CAREERS_COVER =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80";

export function getJob(id: string | undefined) {
  if (!id) return undefined;
  return jobs.find((job) => job.id === id);
}
