"use client";

import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function NewsletterForm() {
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
    <>
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
    </>
  );
}
