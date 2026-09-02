import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative px-5 py-20 sm:px-8 lg:px-10 lg:py-28", className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "start";
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-start",
      )}
    >
      <h2 className="font-display text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-7 text-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
