"use client";

import { Section, SectionHeading } from "@/components/ui/Section";
import { partners } from "@/lib/content/partners";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function LogoCarousel() {
  const t = useTranslations("home");
  const logos = [...partners, ...partners];

  return (
    <Section className="overflow-hidden">
      <SectionHeading
        title={t("partnersTitle")}
        subtitle={t("partnersSubtitle")}
      />
      <div className="partners-marquee">
        <div className="partners-track">
          {logos.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="w-[11.5rem] shrink-0 px-3"
            >
              <div className="group glass flex h-24 flex-col items-center justify-center gap-1 rounded-2xl px-6 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_24px_rgb(47_111_255_/_0.18)]">
                <Image
                  src={`/assets/partners/${partner.id}.svg`}
                  alt={`${partner.name} logo`}
                  width={160}
                  height={48}
                  className={`${partner.id === "reactnative" ? "h-8" : "h-10"} w-auto max-w-[9.5rem] object-contain opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgb(47_111_255_/_0.45)]`}
                  unoptimized
                />
                {partner.id === "reactnative" ? (
                  <span className="text-[11px] font-semibold lowercase leading-none tracking-[0.16em] text-[#61DAFB]">
                    native
                  </span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
