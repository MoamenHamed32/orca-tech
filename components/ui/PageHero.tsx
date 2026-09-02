import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function PageHero({
  title,
  subtitle,
  cover,
  coverAlt = "",
  coverPosition = "object-center",
  eyebrow,
  compact = false,
}: {
  title: string;
  subtitle: string;
  cover?: string;
  coverAlt?: string;
  coverPosition?: string;
  eyebrow?: string;
  compact?: boolean;
}) {
  const remoteCover = Boolean(cover?.startsWith("http"));

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-border px-5 sm:px-8 lg:px-10",
        cover
          ? compact
            ? "flex min-h-[66svh] items-end pb-12 pt-28"
            : "flex min-h-[78svh] items-end pb-16 pt-32"
          : compact
            ? "pb-12 pt-28"
            : "pb-16 pt-32",
      )}
    >
      {cover ? (
        <>
          {remoteCover ? (
            // External stock photos (e.g. Unsplash) — native img avoids a Next image-host restart.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={cover}
              alt={coverAlt}
              className={cn("absolute inset-0 size-full object-cover", coverPosition)}
            />
          ) : (
            <Image
              src={cover}
              alt={coverAlt}
              fill
              priority
              sizes="100vw"
              className={cn("object-cover", coverPosition)}
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background from-5% via-background/45 to-background/15" />
        </>
      ) : (
        <>
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
          <div className="bg-radial-glow pointer-events-none absolute inset-0" />
          <div className="noise-overlay" />
        </>
      )}
      <AnimatedSection className="relative z-10 mx-auto w-full max-w-6xl">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display max-w-3xl text-4xl font-semibold tracking-tight text-heading sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{subtitle}</p>
      </AnimatedSection>
    </section>
  );
}
