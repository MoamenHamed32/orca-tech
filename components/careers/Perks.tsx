import { Stagger, StaggerItem } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Globe2, Laptop, Sparkles, Workflow } from "lucide-react";
import { getTranslations } from "next-intl/server";

const perks = [
  { id: "impact", icon: Globe2 },
  { id: "stack", icon: Workflow },
  { id: "growth", icon: Sparkles },
  { id: "remote", icon: Laptop },
] as const;

export async function Perks() {
  const t = await getTranslations("careers");

  return (
    <Section>
      <SectionHeading title={t("whyTitle")} />
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map(({ id, icon: Icon }) => (
          <StaggerItem key={id}>
            <Card className="h-full">
              <Icon className="mb-4 h-6 w-6 text-accent" aria-hidden />
              <h3 className="font-display text-lg font-semibold">{t(`perks.${id}.title`)}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{t(`perks.${id}.description`)}</p>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
