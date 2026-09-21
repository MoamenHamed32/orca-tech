import { cache } from "react";
import { cmsGet } from "@/lib/cms/client";
import type { CmsAboutStats } from "@/lib/cms/types";

export const getAboutStats = cache(async () => {
  const result = await cmsGet<CmsAboutStats>("/about/stats");
  return result.ok ? result.data : null;
});
