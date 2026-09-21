import { StatsRow } from "@/components/about/StatsRow";
import { Values } from "@/components/about/Values";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { routing } from "@/i18n/routing";
import { pick } from "@/lib/cms/pick";
import { getAboutStats } from "@/lib/cms/stats";
import { localeMetadata } from "@/lib/seo";
import { asLocale } from "@/lib/types";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  const t = await getTranslations({ locale: asLocale(locale), namespace: "about" });
  return localeMetadata({
    locale,
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/about",
    image: "/assets/team/about-cover.jpg",
  });
}

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(asLocale(locale));
  const t = await getTranslations("about");
  const stats = await getAboutStats();

  return (
    <>
      <PageHero
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        cover="/assets/team/about-cover.jpg"
        coverAlt="Orca Technologies office"
        coverPosition="object-[center_72%]"
      />
      <Section>
        <AnimatedSection className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold">{t("storyTitle")}</h2>
            <p className="mt-4 leading-8 text-muted">{t("storyBody")}</p>
          </div>
          <div className="space-y-8">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-xl font-semibold">{t("missionTitle")}</h3>
              <p className="mt-2 leading-7 text-muted">{t("missionBody")}</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-xl font-semibold">{t("visionTitle")}</h3>
              <p className="mt-2 leading-7 text-muted">{t("visionBody")}</p>
            </div>
          </div>
        </AnimatedSection>
      </Section>
      <Values />
      <StatsRow
        title={stats ? pick(locale, stats.title) : undefined}
        items={stats?.items}
      />
      <Section>
        <AnimatedSection className="glass rounded-[2rem] px-6 py-12 text-center">
          <h2 className="font-display text-3xl font-semibold">{t("ctaTitle")}</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/careers">{t("ctaCareers")}</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              {t("ctaContact")}
            </ButtonLink>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
