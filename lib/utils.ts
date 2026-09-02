export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.orca-tech.com";

export const LOCALES = ["en", "ar"] as const;
export type AppLocale = (typeof LOCALES)[number];
