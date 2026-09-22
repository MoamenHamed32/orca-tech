import { Stagger, StaggerItem } from "@/components/ui/AnimatedSection";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { pick } from "@/lib/cms/pick";
import type { CmsJob } from "@/lib/cms/types";
import { getLocale, getTranslations } from "next-intl/server";

export async function JobList({ jobs }: { jobs: CmsJob[] }) {
  const t = await getTranslations("careers");
  const locale = await getLocale();

  return (
    <Section id="open-positions">
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
            {t("openingsTitle")}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted">{t("openingsSubtitle")}</p>
        </div>
        <p className="text-sm font-semibold text-accent-soft">
          {t("rolesCount", { count: jobs.length })}
        </p>
      </div>

      {jobs.length === 0 ? (
        <Card hover={false} className="mx-auto max-w-xl text-center">
          <h3 className="font-display text-2xl">{t("emptyTitle")}</h3>
          <p className="mt-3 text-muted">{t("emptyBody")}</p>
          <div className="mt-6">
            <ButtonLink href="/careers/apply">{t("emptyCta")}</ButtonLink>
          </div>
        </Card>
      ) : (
        <Stagger className="overflow-hidden rounded-2xl border border-border">
          {jobs.map((job) => (
            <StaggerItem key={job.id}>
              <article className="flex flex-col gap-4 border-b border-border px-5 py-6 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="max-w-2xl">
                  <h3 className="font-display text-xl font-semibold">{pick(locale, job.title)}</h3>
                  <p className="mt-2 text-sm text-muted">
                    {pick(locale, job.location)} · {pick(locale, job.type)} ·{" "}
                    {pick(locale, job.department)}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">{pick(locale, job.summary)}</p>
                </div>
                <ButtonLink
                  href={`/careers/apply?role=${job.id}`}
                  variant="secondary"
                  className="shrink-0"
                >
                  {t("viewApply")}
                </ButtonLink>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </Section>
  );
}
