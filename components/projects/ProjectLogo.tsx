import { cn } from "@/lib/utils";
import Image from "next/image";

export function ProjectLogo({
  src,
  name,
  tone = "light",
  size = "card",
}: {
  src: string;
  name: string;
  tone?: "light" | "dark";
  size?: "card" | "detail";
}) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl border shadow-sm",
        size === "card"
          ? "h-12 max-w-[13.5rem] px-2.5 py-1.5 sm:h-14"
          : "h-16 max-w-[18rem] px-3 py-2 sm:h-20",
        dark
          ? "border-white/12 bg-[#0b0d12]"
          : "border-black/8 bg-white",
      )}
    >
      <Image
        src={src}
        alt={`${name} logo`}
        width={640}
        height={200}
        unoptimized
        className="h-full w-auto max-w-full object-contain"
      />
    </div>
  );
}
