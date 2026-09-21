import { Mail, MapPin, Phone } from "lucide-react";
import { pick } from "@/lib/cms/pick";
import type { CmsSettings } from "@/lib/cms/types";
import { getLocale, getTranslations } from "next-intl/server";

export async function ContactInfo({ settings }: { settings: CmsSettings | null }) {
  const t = await getTranslations("contact");
  const locale = await getLocale();
  const infoEmail = settings?.emails.info ?? t("emailInfo");
  const salesEmail = settings?.emails.sales ?? t("emailSales");
  const phones = settings?.phones?.length ? settings.phones : [t("phoneValue")];
  const address = settings ? pick(locale, settings.address.formatted) : t("addressValue");

  return (
    <aside className="glass rounded-2xl p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold">{t("infoTitle")}</h2>
      <ul className="mt-6 space-y-5 text-sm">
        <li className="flex gap-3">
          <Mail className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
          <div>
            <p className="text-muted">{t("emailLabel")}</p>
            <a href={`mailto:${infoEmail}`} className="block text-heading hover:text-accent">
              {infoEmail}
            </a>
            <a href={`mailto:${salesEmail}`} className="mt-1 block text-heading hover:text-accent">
              {salesEmail}
            </a>
          </div>
        </li>
        <li className="flex gap-3">
          <Phone className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
          <div>
            <p className="text-muted">{t("phoneLabel")}</p>
            {phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="block text-heading hover:text-accent"
              >
                {phone}
              </a>
            ))}
          </div>
        </li>
        <li className="flex gap-3">
          <MapPin className="mt-0.5 h-4 w-4 text-accent" aria-hidden />
          <div>
            <p className="text-muted">{t("addressLabel")}</p>
            <p className="text-heading">{address}</p>
          </div>
        </li>
      </ul>
    </aside>
  );
}
