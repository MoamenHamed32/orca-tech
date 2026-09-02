"use client";

import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { Link } from "@/i18n/navigation";
import { serviceIds } from "@/lib/content/services";
import { useTranslations } from "next-intl";
import { useState } from "react";

const siteLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/careers", key: "careers" },
  { href: "/articles", key: "articles" },
  { href: "/projects", key: "projects" },
  { href: "/contact", key: "contact" },
] as const;

export function Footer() {
  const t = useTranslations();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "ok" | "err">("idle");

  function subscribe(event: React.FormEvent) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState("err");
      return;
    }
    setState("ok");
    setEmail("");
  }

  return (
    <footer className="border-t border-border bg-elevated">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" aria-label="Orca-Tech">
            <Logo />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            {t("footer.description")}
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            {t("footer.followUs")}
          </p>
          <div className="mt-3 flex gap-3">
            {[
              { href: "https://www.linkedin.com/", icon: LinkedInIcon, label: "LinkedIn" },
              { href: "https://www.facebook.com/", icon: FacebookIcon, label: "Facebook" },
              { href: "https://www.instagram.com/", icon: InstagramIcon, label: "Instagram" },
            ].map(({ href, icon: Icon, label }) => (
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
          <form onSubmit={subscribe} className="mt-4 flex w-full flex-col gap-2">
            <label className="sr-only" htmlFor="newsletter-email">
              {t("footer.newsletterPlaceholder")}
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setState("idle");
              }}
              placeholder={t("footer.newsletterPlaceholder")}
              className="w-full min-w-0 rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-heading outline-none placeholder:text-muted focus:border-accent"
            />
            <Button type="submit" className="w-fit shrink-0 self-start px-5">
              {t("footer.subscribe")}
            </Button>
          </form>
          {state === "ok" ? (
            <p className="mt-2 text-xs text-accent-soft">{t("footer.subscribed")}</p>
          ) : null}
          {state === "err" ? (
            <p className="mt-2 text-xs text-red-400">{t("footer.newsletterError")}</p>
          ) : null}
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
