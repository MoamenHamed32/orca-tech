import { Stagger, StaggerItem } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Compass, Eye, Rocket, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";

const icons = {
  precision: ShieldCheck,
  ownership: Compass,
  clarity: Eye,
  momentum: Rocket,
} as const;

export async function Values() {
  const t = await getTranslations("about");

  return (
    <Section>
      <SectionHeading title={t("valuesTitle")} />
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {(Object.keys(icons) as Array<keyof typeof icons>).map((id) => {
          const Icon = icons[id];
          return (
            <StaggerItem key={id}>
              <Card className="h-full">
                <Icon className="mb-4 h-6 w-6 text-accent" aria-hidden />
                <h3 className="font-display text-lg font-semibold">
                  {t(`values.${id}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {t(`values.${id}.description`)}
                </p>
              </Card>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
