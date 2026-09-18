import { getTranslations } from "next-intl/server";

const LAT = 31.239621138513407;
const LNG = 32.320161845413416;
const MAP_SRC = `https://maps.google.com/maps?q=${LAT},${LNG}&hl=en&z=16&output=embed`;

export async function OfficeMap() {
  const t = await getTranslations("contact");

  return (
    <figure className="overflow-hidden rounded-2xl border border-border">
      <iframe
        title={t("mapCaption")}
        src={MAP_SRC}
        className="h-64 w-full border-0 grayscale invert-[0.88] contrast-[0.95]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <figcaption className="bg-surface px-4 py-3 text-xs text-muted">
        {t("mapCaption")}
      </figcaption>
    </figure>
  );
}
