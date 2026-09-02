import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Card({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300 ease-[var(--ease-out-expo)]",
        hover &&
          "hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/50 hover:shadow-[0_0_28px_rgb(47_111_255_/_0.16)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
