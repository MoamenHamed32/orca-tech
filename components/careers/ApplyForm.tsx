"use client";

import { Button } from "@/components/ui/Button";
import {
  GENERAL_APPLICATION_ID,
  getJob,
  jobs,
} from "@/lib/content/jobs";
import { applyFormSchema, type ApplyFormValues } from "@/lib/validations/apply";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function ApplyForm({ initialRole }: { initialRole?: string }) {
  const t = useTranslations("careers");
  const locale = useLocale();
  const lang = locale === "ar" ? "ar" : "en";
  const selected = getJob(initialRole)?.id ?? "";
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormValues>({
    resolver: zodResolver(applyFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: selected || GENERAL_APPLICATION_ID,
      linkedin: "",
      portfolio: "",
      message: "",
    },
  });

  async function onSubmit() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus("success");
      reset({
        name: "",
        email: "",
        phone: "",
        role: selected || GENERAL_APPLICATION_ID,
        linkedin: "",
        portfolio: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass space-y-4 rounded-2xl p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold">{t("applyFormTitle")}</h2>
      <p className="text-sm leading-6 text-muted">{t("applyFormLead")}</p>
      <Field label={t("applyName")} error={errors.name ? t("errors.name") : undefined}>
        <input {...register("name")} className={inputClass} autoComplete="name" />
      </Field>
      <Field label={t("applyEmail")} error={errors.email ? t("errors.email") : undefined}>
        <input type="email" {...register("email")} className={inputClass} autoComplete="email" />
      </Field>
      <Field label={`${t("applyPhone")} (${t("optional")})`}>
        <input {...register("phone")} className={inputClass} autoComplete="tel" />
      </Field>
      <Field label={t("applyRole")} error={errors.role ? t("errors.role") : undefined}>
        <select {...register("role")} className={inputClass}>
          <option value={GENERAL_APPLICATION_ID}>{t("generalOption")}</option>
          {jobs.map((job) => (
            <option key={job.id} value={job.id}>
              {job.title[lang]}
            </option>
          ))}
        </select>
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label={`${t("applyLinkedin")} (${t("optional")})`}
          error={errors.linkedin ? t("errors.url") : undefined}
        >
          <input
            {...register("linkedin")}
            className={inputClass}
            placeholder="https://linkedin.com/in/…"
          />
        </Field>
        <Field
          label={`${t("applyPortfolio")} (${t("optional")})`}
          error={errors.portfolio ? t("errors.url") : undefined}
        >
          <input
            {...register("portfolio")}
            className={inputClass}
            placeholder="https://"
          />
        </Field>
      </div>
      <Field label={`${t("applyCv")} (${t("optional")})`}>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className={`${inputClass} file:me-3 file:rounded-full file:border-0 file:bg-accent/20 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-heading`}
        />
      </Field>
      <Field
        label={t("applyMessage")}
        error={errors.message ? t("errors.message") : undefined}
      >
        <textarea {...register("message")} rows={5} className={inputClass} />
      </Field>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? t("applySending") : t("applySubmit")}
      </Button>
      <AnimatePresence>
        {status !== "idle" ? (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={status === "success" ? "text-sm text-accent-soft" : "text-sm text-red-400"}
          >
            <strong>{t(`${status}Title`)}</strong> {t(`${status}Body`)}
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
