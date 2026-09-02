import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getTranslations } from "next-intl/server";

export async function ContactCTA() {
  const t = await getTranslations("home");

  return (
    <Section>
      <AnimatedSection>
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-elevated px-6 py-16 text-center sm:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(47_111_255_/_0.22),transparent_58%)]" />
          <div className="noise-overlay" />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-heading sm:text-5xl">
              {t("ctaTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              {t("ctaSubtitle")}
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact">{t("ctaButton")}</ButtonLink>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
