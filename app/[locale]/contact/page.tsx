import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { FaqAccordion } from "@/components/contact/FaqAccordion";
import { OfficeMap } from "@/components/contact/OfficeMap";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { routing } from "@/i18n/routing";
import { localeMetadata } from "@/lib/seo";
import { asLocale } from "@/lib/types";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  const t = await getTranslations({ locale: asLocale(locale), namespace: "contact" });
  return localeMetadata({
    locale,
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: "/contact",
  });
}

export default async function ContactPage({
  params,
}: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(asLocale(locale));
  const t = await getTranslations("contact");

  return (
    <>
      <PageHero title={t("heroTitle")} subtitle={t("heroSubtitle")} />
      <Section>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="space-y-6 lg:col-span-2">
            <ContactInfo />
            <OfficeMap />
          </div>
        </div>
        <div className="mt-16">
          <FaqAccordion />
        </div>
      </Section>
    </>
  );
}
