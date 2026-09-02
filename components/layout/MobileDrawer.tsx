"use client";

import { ButtonLink } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

const links = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/careers", key: "careers" },
  { href: "/articles", key: "articles" },
  { href: "/projects", key: "projects" },
] as const;

export function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const t = useTranslations("nav");
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {open ? (
        <motion.aside
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            aria-label={t("closeMenu")}
            onClick={onClose}
          />
          <motion.div
            className="absolute inset-y-0 end-0 flex w-[min(100%,20rem)] flex-col border-s border-border bg-elevated p-6 shadow-[-20px_0_60px_rgb(0_0_0_/_0.45)]"
            initial={reduce ? false : { x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { x: 40, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="mt-10 flex flex-col gap-2">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "block rounded-xl px-3 py-3 text-lg text-heading transition-colors hover:bg-surface hover:text-accent",
                    )}
                  >
                    {t(link.key)}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <LanguageSwitcher />
              <ButtonLink href="/contact" onClick={onClose}>
                {t("contact")}
              </ButtonLink>
            </div>
          </motion.div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
