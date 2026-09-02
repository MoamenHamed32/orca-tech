export const serviceIds = [
  "ecommerce",
  "shopifyWordpress",
  "engineering",
  "seo",
  "ai",
  "cloud",
  "hosting",
  "data",
] as const;

export type ServiceId = (typeof serviceIds)[number];

export const serviceIcons: Record<ServiceId, string> = {
  ecommerce: "ShoppingBag",
  shopifyWordpress: "Store",
  engineering: "Layers",
  seo: "Search",
  ai: "Sparkles",
  cloud: "Cloud",
  hosting: "Server",
  data: "BarChart3",
};
