"use client";

import { ButtonLink } from "@/components/ui/Button";
import { HeroFx } from "@/components/home/HeroFx";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const Hero3D = dynamic(
  () => import("@/components/home/Hero3D").then((mod) => mod.Hero3D),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse rounded-full bg-accent/10" />
    ),
  },
);

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const t = useTranslations("home");
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="bg-radial-glow pointer-events-none absolute inset-0" />
      <div className="noise-overlay" />
      <HeroFx reduce={reduce} />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-2 lg:pt-20">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft"
          >
            Orca-Tech
          </motion.p>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-heading sm:text-5xl lg:text-6xl"
          >
            {t("heroHeadline")}{" "}
            <span className="bg-linear-to-r from-accent to-accent-soft bg-clip-text text-transparent">
              {t("heroAccent")}
            </span>
          </motion.h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-6 max-w-xl text-lg leading-8 text-muted"
          >
            {t("heroSubheadline")}
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <ButtonLink href="/contact">{t("ctaPrimary")}</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              {t("ctaSecondary")}
            </ButtonLink>
          </motion.div>
        </div>

        <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(47_111_255/0.22)_0%,rgb(91_140_255/0.08)_45%,transparent_70%)] blur-2xl"
          />
          <Hero3D />
        </div>
      </div>
    </section>
  );
}
