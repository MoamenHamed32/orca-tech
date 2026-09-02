import { getTranslations } from "next-intl/server";

export async function OfficeMap() {
  const t = await getTranslations("contact");

  return (
    <figure className="overflow-hidden rounded-2xl border border-border">
      <div
        className="relative h-64 w-full bg-[radial-gradient(circle_at_30%_40%,#2f6fff33,transparent_35%),linear-gradient(135deg,#111318,#1a1d24)]"
        role="img"
        aria-label={t("mapCaption")}
      >
        <div className="absolute start-[42%] top-[48%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_24px_#2F6FFF]" />
        <div className="absolute start-[42%] top-[48%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40" />
      </div>
      <figcaption className="bg-surface px-4 py-3 text-xs text-muted">
        {t("mapCaption")}
      </figcaption>
    </figure>
  );
}
