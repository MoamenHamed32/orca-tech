import { Stagger, StaggerItem } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { NamedIcon } from "@/components/ui/Icon";
import { Section, SectionHeading } from "@/components/ui/Section";
import { serviceIcons, serviceIds } from "@/lib/content/services";
import { getTranslations } from "next-intl/server";

export async function ServicesGrid() {
  const t = await getTranslations();

  return (
    <Section id="services">
      <SectionHeading
        title={t("home.servicesTitle")}
        subtitle={t("home.servicesSubtitle")}
      />
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {serviceIds.map((id) => (
          <StaggerItem key={id}>
            <Card className="h-full">
              <div className="mb-4 inline-flex rounded-xl border border-border bg-background/60 p-2.5 text-accent">
                <NamedIcon name={serviceIcons[id]} className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-heading">
                {t(`services.${id}.name`)}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-muted">
                {t.raw(`services.${id}.bullets`).map((bullet: string) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
