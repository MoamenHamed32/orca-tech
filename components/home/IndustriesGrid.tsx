import { Stagger, StaggerItem } from "@/components/ui/AnimatedSection";
import { NamedIcon } from "@/components/ui/Icon";
import { Section, SectionHeading } from "@/components/ui/Section";
import { industryIcons, industryIds } from "@/lib/content/industries";
import { getTranslations } from "next-intl/server";

export async function IndustriesGrid() {
  const t = await getTranslations();

  return (
    <Section>
      <SectionHeading
        title={t("home.industriesTitle")}
        subtitle={t("home.industriesSubtitle")}
      />
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industryIds.map((id) => (
          <StaggerItem key={id} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_28px_rgb(47_111_255_/_0.16)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgb(47_111_255_/_0.18),transparent_55%)] opacity-70" />
              <div className="relative flex flex-1 flex-col">
                <NamedIcon
                  name={industryIcons[id]}
                  className="mb-5 h-8 w-8 text-accent-soft"
                />
                <h3 className="font-display text-lg font-semibold text-heading">
                  {t(`industries.${id}.name`)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                  {t(`industries.${id}.description`)}
                </p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
