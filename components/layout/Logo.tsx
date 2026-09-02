import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/assets/logo.svg"
        alt=""
        width={40}
        height={44}
        className="h-9 w-auto sm:h-10"
        priority
        unoptimized
      />
      <span className="font-display text-base font-semibold tracking-[0.12em] text-heading sm:text-lg">
        ORCA-TECH
      </span>
    </span>
  );
}
