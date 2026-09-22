import { getTranslations } from "next-intl/server";

const FALLBACK_LAT = 31.239621138513407;
const FALLBACK_LNG = 32.320161845413416;

export async function OfficeMap({
  lat,
  lng,
}: {
  lat?: number;
  lng?: number;
}) {
  const t = await getTranslations("contact");
  const mapLat = lat ?? FALLBACK_LAT;
  const mapLng = lng ?? FALLBACK_LNG;
  const mapSrc = `https://maps.google.com/maps?q=${mapLat},${mapLng}&hl=en&z=16&output=embed`;

  return (
    <figure className="overflow-hidden rounded-2xl border border-border">
      <iframe
        title={t("mapCaption")}
        src={mapSrc}
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
