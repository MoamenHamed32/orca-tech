import { cache } from "react";
import { cmsGet } from "@/lib/cms/client";
import type { CmsSettings } from "@/lib/cms/types";

export const getSettings = cache(async () => {
  const result = await cmsGet<CmsSettings>("/settings");
  return result.ok ? result.data : null;
});
