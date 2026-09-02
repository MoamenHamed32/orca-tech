import { ButtonLink } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Section } from "@/components/ui/Section";
import { getTranslations } from "next-intl/server";

export async function OpenApplication() {
  const t = await getTranslations("careers");

  return (
    <Section className="pt-4 lg:pt-8">
      <AnimatedSection className="glass rounded-[2rem] px-6 py-12 text-center sm:px-10">
        <h2 className="font-display text-3xl font-semibold">{t("openApplyTitle")}</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">{t("openApplyBody")}</p>
        <div className="mt-6">
          <ButtonLink href="/careers/apply">{t("openApplyCta")}</ButtonLink>
        </div>
      </AnimatedSection>
    </Section>
  );
}
