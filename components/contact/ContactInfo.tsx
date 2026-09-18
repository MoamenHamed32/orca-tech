import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function ContactInfo() {
  const t = await getTranslations("contact");

  return (
    <aside className="glass rounded-2xl p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold">{t("infoTitle")}</h2>
      <ul className="mt-6 space-y-5 text-sm">
        <li className="flex gap-3">
          <Mail className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
          <div>
            <p className="text-muted">{t("emailLabel")}</p>
            <a
              href={`mailto:${t("emailInfo")}`}
              className="block text-heading hover:text-accent"
            >
              {t("emailInfo")}
            </a>
            <a
              href={`mailto:${t("emailSales")}`}
              className="mt-1 block text-heading hover:text-accent"
            >
              {t("emailSales")}
            </a>
          </div>
        </li>
        <li className="flex gap-3">
          <Phone className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
          <div>
            <p className="text-muted">{t("phoneLabel")}</p>
            <a href={`tel:${t("phoneValue").replace(/\s/g, "")}`} className="text-heading hover:text-accent">
              {t("phoneValue")}
            </a>
          </div>
        </li>
        <li className="flex gap-3">
          <MapPin className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
          <div>
            <p className="text-muted">{t("addressLabel")}</p>
            <p className="text-heading">{t("addressValue")}</p>
          </div>
        </li>
      </ul>
    </aside>
  );
}
