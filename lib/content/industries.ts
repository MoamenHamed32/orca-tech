export const industryIds = [
  "retail",
  "fintech",
  "healthcare",
  "logistics",
  "telecom",
  "education",
  "realEstate",
  "hospitality",
] as const;

export type IndustryId = (typeof industryIds)[number];

export const industryIcons: Record<IndustryId, string> = {
  retail: "ShoppingCart",
  fintech: "Wallet",
  healthcare: "HeartPulse",
  logistics: "Truck",
  telecom: "Radio",
  education: "GraduationCap",
  realEstate: "Building2",
  hospitality: "Hotel",
};
