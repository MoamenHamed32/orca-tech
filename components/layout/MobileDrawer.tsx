"use client";

import { ButtonLink } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.aside
          className="fixed inset-0 z-[100] flex flex-col bg-[#0a0c10] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          aria-modal="true"
          role="dialog"
          aria-label={t("openMenu")}
        >
          <div className="flex h-16 items-center justify-end px-5 sm:h-[4.25rem] sm:px-8">
            <button
              type="button"
              className="rounded-full border border-border p-2 text-heading"
              aria-label={t("closeMenu")}
              onClick={onClose}
            >
              <X size={18} />
            </button>
          </div>
          <motion.nav
            className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 pb-8 sm:px-8"
            initial={reduce ? false : { y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { y: 12, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "rounded-xl px-3 py-3 text-2xl font-semibold text-heading transition-colors hover:bg-surface hover:text-accent",
                )}
              >
                {t(link.key)}
              </Link>
            ))}
            <div className="mt-auto flex flex-col gap-4 pt-10">
              <LanguageSwitcher />
              <ButtonLink href="/contact" onClick={onClose} className="w-full">
                {t("contact")}
              </ButtonLink>
            </div>
          </motion.nav>
        </motion.aside>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
