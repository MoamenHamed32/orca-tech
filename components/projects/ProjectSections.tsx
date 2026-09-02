import type { ProjectSection } from "@/lib/content/projectTypes";
import type { AppLocale } from "@/lib/utils";

export function ProjectSections({
  sections,
  locale,
}: {
  sections: ProjectSection[];
  locale: AppLocale;
}) {
  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <article key={`${section.kicker.en}-${section.title.en}`}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
            {section.kicker[locale]}
          </p>
          <h2 className="font-display mt-3 max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {section.title[locale]}
          </h2>
          {section.intro ? (
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{section.intro[locale]}</p>
          ) : null}

          {section.cards?.length ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.cards.map((card) => (
                <div key={card.title.en} className="rounded-2xl border border-border bg-elevated p-6">
                  <h3 className="font-display text-lg font-semibold">{card.title[locale]}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{card.body[locale]}</p>
                </div>
              ))}
            </div>
          ) : null}

          {section.notes?.length ? (
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {section.notes.map((note) => (
                <div key={note.title.en} className="glass rounded-2xl p-6">
                  <h3 className="font-display text-xl font-semibold">{note.title[locale]}</h3>
                  <p className="mt-2 leading-7 text-muted">{note.body[locale]}</p>
                </div>
              ))}
            </div>
          ) : null}

          {section.steps?.length ? (
            <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {section.steps.map((step, index) => (
                <li
                  key={step.title.en}
                  className="rounded-2xl border border-border px-5 py-4"
                >
                  <p className="text-xs font-semibold text-accent-soft">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-semibold">{step.title[locale]}</h3>
                  <p className="mt-1 text-sm text-muted">{step.body[locale]}</p>
                </li>
              ))}
            </ol>
          ) : null}

          {section.modules?.length ? (
            <div className="mt-8 space-y-6">
              {section.modules.map((module) => (
                <div key={module.title.en} className="rounded-2xl border border-border p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-soft">
                    {module.kicker[locale]}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-semibold">{module.title[locale]}</h3>
                  <p className="mt-3 max-w-3xl leading-7 text-muted">{module.body[locale]}</p>
                  <ul className="mt-4 list-disc space-y-2 ps-5 text-sm leading-7 text-muted">
                    {module.bullets.map((bullet) => (
                      <li key={bullet.en}>{bullet[locale]}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}

          {section.layers?.length ? (
            <div className="mt-8 flex flex-wrap gap-2">
              {section.layers.map((layer) => (
                <span
                  key={layer.en}
                  className="rounded-full border border-border px-3 py-1.5 text-sm text-muted"
                >
                  {layer[locale]}
                </span>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
