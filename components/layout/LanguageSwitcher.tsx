"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface/70 p-1 text-xs font-semibold",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {(["en", "ar"] as const).map((next) => (
        <button
          key={next}
          type="button"
          onClick={() => router.replace(pathname, { locale: next })}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors duration-300",
            locale === next
              ? "bg-accent text-heading"
              : "text-muted hover:text-heading",
          )}
          aria-pressed={locale === next}
        >
          {next}
        </button>
      ))}
    </div>
  );
}
