import type { AppLocale } from "@/lib/utils";
import type { LocalizedString } from "@/lib/cms/types";

export function pick(locale: string, value: LocalizedString) {
  return locale === "ar" ? value.ar : value.en;
}

export function asAppLocale(locale: string): AppLocale {
  return locale === "ar" ? "ar" : "en";
}
