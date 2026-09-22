import { connection } from "next/server";

const DEFAULT_CMS_API_URL = "https://back.orcatechltd.com/api";

export type CmsResult<T> =
  | { ok: true; data: T }
  | { ok: false; status: number | "network" };

export type CmsPostResult = {
  status: number;
  body: {
    success?: boolean;
    message?: { en: string; ar: string };
    errors?: Record<string, string[]>;
  } | null;
};

export function getCmsApiUrl() {
  let base = (process.env.CMS_API_URL ?? DEFAULT_CMS_API_URL).trim().replace(/\/+$/, "");
  if (!base.endsWith("/api")) {
    base = `${base}/api`;
  }
  return base;
}

export function cmsUrl(path: string) {
  const pathname = path.startsWith("/") ? path : `/${path}`;
  return `${getCmsApiUrl()}${pathname}`;
}

export async function cmsGet<T>(path: string): Promise<CmsResult<T>> {
  await connection();
  try {
    const response = await fetch(cmsUrl(path), {
      cache: "no-store",
    });
    if (!response.ok) {
      return { ok: false, status: response.status };
    }
    const json: unknown = await response.json();
    if (
      typeof json !== "object" ||
      json === null ||
      !("success" in json) ||
      json.success !== true ||
      !("data" in json)
    ) {
      return { ok: false, status: response.status };
    }
    return { ok: true, data: (json as { data: T }).data };
  } catch {
    return { ok: false, status: "network" };
  }
}

export async function cmsPost(
  path: string,
  init: Omit<RequestInit, "method">,
): Promise<CmsPostResult> {
  const response = await fetch(cmsUrl(path), {
    ...init,
    method: "POST",
    cache: "no-store",
  });
  const body = (await response.json().catch(() => null)) as CmsPostResult["body"];
  return { status: response.status, body };
}
