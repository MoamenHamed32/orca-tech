"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const ids = ["q1", "q2", "q3", "q4"] as const;

export function FaqAccordion() {
  const t = useTranslations();
  const [open, setOpen] = useState<string | null>("q1");

  return (
    <div>
      <h2 className="font-display mb-6 text-2xl font-semibold">{t("contact.faqTitle")}</h2>
      <div className="space-y-3">
        {ids.map((id) => {
          const isOpen = open === id;
          return (
            <div key={id} className="glass rounded-2xl">
              <button
                type="button"
                className="flex w-full items-center justify-between px-5 py-4 text-start"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : id)}
              >
                <span className="font-medium text-heading">{t(`faq.${id}.q`)}</span>
                <span className="text-accent">{isOpen ? "–" : "+"}</span>
              </button>
              {isOpen ? (
                <p className="px-5 pb-4 text-sm leading-7 text-muted">{t(`faq.${id}.a`)}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
