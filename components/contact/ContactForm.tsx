"use client";

import { Button } from "@/components/ui/Button";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";
import { serviceIds } from "@/lib/content/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function ContactForm() {
  const t = useTranslations();
  const locale = useLocale();
  const lang = locale === "ar" ? "ar" : "en";
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [apiMessage, setApiMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");
    setApiMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone?.trim() ? values.phone.trim() : null,
          company: values.company?.trim() ? values.company.trim() : null,
          service: values.service,
          message: values.message,
        }),
      });
      const json = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: { en: string; ar: string };
        errors?: Record<string, string[]>;
      } | null;

      if (!response.ok || json?.success !== true) {
        if (json?.errors) {
          for (const [field, messages] of Object.entries(json.errors)) {
            if (!messages?.length) continue;
            if (field in values) {
              setError(field as keyof ContactFormValues, {
                type: "server",
                message: messages[0],
              });
            }
          }
        }
        setStatus("error");
        return;
      }

      setApiMessage(json.message?.[lang] ?? "");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass space-y-4 rounded-2xl p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold">{t("contact.formTitle")}</h2>
      <Field
        label={t("contact.name")}
        error={
          errors.name
            ? errors.name.type === "server"
              ? errors.name.message
              : t("contact.errors.name")
            : undefined
        }
      >
        <input {...register("name")} className={inputClass} />
      </Field>
      <Field
        label={t("contact.email")}
        error={
          errors.email
            ? errors.email.type === "server"
              ? errors.email.message
              : t("contact.errors.email")
            : undefined
        }
      >
        <input type="email" {...register("email")} className={inputClass} />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={`${t("contact.phone")} (${t("contact.phoneOptional")})`}>
          <input {...register("phone")} className={inputClass} />
        </Field>
        <Field label={`${t("contact.company")} (${t("contact.phoneOptional")})`}>
          <input {...register("company")} className={inputClass} />
        </Field>
      </div>
      <Field
        label={t("contact.service")}
        error={
          errors.service
            ? errors.service.type === "server"
              ? errors.service.message
              : t("contact.errors.service")
            : undefined
        }
      >
        <select {...register("service")} className={inputClass}>
          <option value="">{t("contact.servicePlaceholder")}</option>
          {serviceIds.map((id) => (
            <option key={id} value={id}>
              {t(`services.${id}.name`)}
            </option>
          ))}
        </select>
      </Field>
      <Field
        label={t("contact.message")}
        error={
          errors.message
            ? errors.message.type === "server"
              ? errors.message.message
              : t("contact.errors.message")
            : undefined
        }
      >
        <textarea {...register("message")} rows={5} className={inputClass} />
      </Field>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? t("contact.sending") : t("contact.submit")}
      </Button>
      <AnimatePresence>
        {status !== "idle" ? (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={status === "success" ? "text-sm text-accent-soft" : "text-sm text-red-400"}
          >
            {status === "success" ? (
              apiMessage || (
                <>
                  <strong>{t("contact.successTitle")}</strong> {t("contact.successBody")}
                </>
              )
            ) : (
              <>
                <strong>{t("contact.errorTitle")}</strong> {t("contact.errorBody")}
              </>
            )}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-heading outline-none focus:border-accent";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-heading">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-red-400">{error}</span> : null}
    </label>
  );
}
