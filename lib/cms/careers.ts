import { cache } from "react";
import { cmsGet } from "@/lib/cms/client";
import type { CmsJob, CmsJobDetail } from "@/lib/cms/types";

export const getCareers = cache(async () => {
  const result = await cmsGet<{ items: CmsJob[] }>("/careers");
  return result.ok ? result.data.items : null;
});

export const getCareer = cache(async (id: string) => {
  const result = await cmsGet<CmsJobDetail>(`/careers/${encodeURIComponent(id)}`);
  if (result.ok) return result.data;
  if (result.status === 404) return undefined;
  return null;
});
