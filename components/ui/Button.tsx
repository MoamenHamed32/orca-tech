import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-heading shadow-[0_0_24px_rgb(47_111_255_/_0.28)] hover:bg-accent-soft hover:scale-[1.03]",
  secondary:
    "border border-border bg-transparent text-heading hover:border-accent hover:shadow-[0_0_20px_rgb(47_111_255_/_0.2)] hover:scale-[1.03]",
  ghost: "text-muted hover:text-heading",
};

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: Common & ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-[var(--ease-out-expo)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60",
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  variant = "primary",
  href,
  ...props
}: Common & { href: ComponentProps<typeof Link>["href"] } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className"
  >) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-[var(--ease-out-expo)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
