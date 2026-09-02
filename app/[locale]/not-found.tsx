import { ButtonLink } from "@/components/ui/Button";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <section className="grid min-h-[70vh] place-items-center px-5 text-center">
      <div>
        <h1 className="font-display text-4xl font-semibold">{t("title")}</h1>
        <p className="mt-3 text-muted">{t("body")}</p>
        <div className="mt-8">
          <ButtonLink href="/">{t("cta")}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
