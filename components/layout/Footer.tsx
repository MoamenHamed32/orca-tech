import { Logo } from "@/components/layout/Logo";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { Link } from "@/i18n/navigation";
import { pick } from "@/lib/cms/pick";
import { getSettings } from "@/lib/cms/settings";
import { serviceIds } from "@/lib/content/services";
import { getLocale, getTranslations } from "next-intl/server";

const siteLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/careers", key: "careers" },
  { href: "/articles", key: "articles" },
  { href: "/projects", key: "projects" },
  { href: "/contact", key: "contact" },
] as const;

const fallbackSocial = [
  { href: "https://www.linkedin.com/company/orca-techs/", icon: LinkedInIcon, label: "LinkedIn" },
  { href: "https://www.facebook.com/", icon: FacebookIcon, label: "Facebook" },
  { href: "https://www.instagram.com/", icon: InstagramIcon, label: "Instagram" },
];

export async function Footer() {
  const t = await getTranslations();
  const locale = await getLocale();
  const settings = await getSettings();
  const description = settings
    ? pick(locale, settings.description)
    : t("footer.description");
  const infoEmail = settings?.emails.info ?? t("contact.emailInfo");
  const salesEmail = settings?.emails.sales ?? t("contact.emailSales");
  const social = settings
    ? [
        { href: settings.social.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
        { href: settings.social.facebook, icon: FacebookIcon, label: "Facebook" },
        { href: settings.social.instagram, icon: InstagramIcon, label: "Instagram" },
      ].filter((item): item is { href: string; icon: typeof LinkedInIcon; label: string } =>
        Boolean(item.href),
      )
    : fallbackSocial;

  return (
    <footer className="border-t border-border bg-elevated">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" aria-label="Orca-Tech">
            <Logo />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">{description}</p>
          <div className="mt-4 space-y-1 text-sm">
            <a
              href={`mailto:${infoEmail}`}
              className="block text-muted transition-colors hover:text-heading"
            >
              {infoEmail}
            </a>
            <a
              href={`mailto:${salesEmail}`}
              className="block text-muted transition-colors hover:text-heading"
            >
              {salesEmail}
            </a>
          </div>
          {social.length > 0 ? (
            <>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                {t("footer.followUs")}
              </p>
              <div className="mt-3 flex gap-3">
                {social.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="rounded-full border border-border p-2 text-muted transition-all duration-300 hover:scale-105 hover:border-accent hover:text-heading hover:shadow-[0_0_18px_rgb(47_111_255_/_0.25)]"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div className="lg:col-span-2">
          <p className="text-sm font-semibold text-heading">{t("footer.website")}</p>
          <ul className="mt-4 space-y-2">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-heading"
                >
                  {t(`nav.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-sm font-semibold text-heading">{t("footer.services")}</p>
          <ul className="mt-4 space-y-2">
            {serviceIds.map((id) => (
              <li key={id}>
                <Link
                  href="/contact"
                  className="text-sm text-muted transition-colors hover:text-heading"
                >
                  {t(`services.${id}.name`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-sm font-semibold text-heading">{t("footer.newsletter")}</p>
          <p className="mt-2 text-sm text-muted">{t("footer.newsletterHint")}</p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center px-5 py-5 sm:px-8">
          <p className="text-xs text-muted">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
