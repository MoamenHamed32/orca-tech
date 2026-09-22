"use client";

import { Button } from "@/components/ui/Button";
import { pick } from "@/lib/cms/pick";
import type { CmsJob } from "@/lib/cms/types";
import { GENERAL_APPLICATION_ID } from "@/lib/content/jobs";
import { createApplyFormSchema, type ApplyFormValues } from "@/lib/validations/apply";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

export function ApplyForm({
  initialRole,
  jobs,
}: {
  initialRole?: string;
  jobs: CmsJob[];
}) {
  const t = useTranslations("careers");
  const locale = useLocale();
  const lang = locale === "ar" ? "ar" : "en";
  const selected = jobs.some((job) => job.id === initialRole)
    ? initialRole
    : "";
  const schema = useMemo(
    () => createApplyFormSchema(jobs.map((job) => job.id)),
    [jobs],
  );
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [apiMessage, setApiMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormValues>({
    resolver: zodResolver(schema),
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

  async function onSubmit(values: ApplyFormValues) {
    setStatus("idle");
    setApiMessage("");
    const payload = {
      name: values.name,
      email: values.email,
      phone: values.phone?.trim() ? values.phone.trim() : null,
      role: values.role,
      linkedin: values.linkedin?.trim() ? values.linkedin.trim() : null,
      portfolio: values.portfolio?.trim() ? values.portfolio.trim() : null,
      message: values.message,
    };
    const cvFile = values.cv?.[0];

    try {
      let response: Response;
      if (cvFile) {
        const form = new FormData();
        form.append("name", payload.name);
        form.append("email", payload.email);
        if (payload.phone) form.append("phone", payload.phone);
        form.append("role", payload.role);
        if (payload.linkedin) form.append("linkedin", payload.linkedin);
        if (payload.portfolio) form.append("portfolio", payload.portfolio);
        form.append("message", payload.message);
        form.append("cv", cvFile);
        response = await fetch("/api/careers/apply", { method: "POST", body: form });
      } else {
        response = await fetch("/api/careers/apply", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
      }

      const json = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: { en: string; ar: string };
        errors?: Record<string, string[]>;
      } | null;

      if (!response.ok || json?.success !== true) {
        if (json?.errors) {
          for (const [field, messages] of Object.entries(json.errors)) {
            if (!messages?.length) continue;
            if (field in payload || field === "cv") {
              setError(field as keyof ApplyFormValues, {
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
      reset({
        name: "",
        email: "",
        phone: "",
        role: selected || GENERAL_APPLICATION_ID,
        linkedin: "",
        portfolio: "",
        message: "",
        cv: undefined,
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass space-y-4 rounded-2xl p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold">{t("applyFormTitle")}</h2>
      <p className="text-sm leading-6 text-muted">{t("applyFormLead")}</p>
      <Field
        label={t("applyName")}
        error={
          errors.name
            ? errors.name.type === "server"
              ? errors.name.message
              : t("errors.name")
            : undefined
        }
      >
        <input {...register("name")} className={inputClass} autoComplete="name" />
      </Field>
      <Field
        label={t("applyEmail")}
        error={
          errors.email
            ? errors.email.type === "server"
              ? errors.email.message
              : t("errors.email")
            : undefined
        }
      >
        <input type="email" {...register("email")} className={inputClass} autoComplete="email" />
      </Field>
      <Field label={`${t("applyPhone")} (${t("optional")})`}>
        <input {...register("phone")} className={inputClass} autoComplete="tel" />
      </Field>
      <Field
        label={t("applyRole")}
        error={
          errors.role
            ? errors.role.type === "server"
              ? errors.role.message
              : t("errors.role")
            : undefined
        }
      >
        <select {...register("role")} className={inputClass}>
          <option value={GENERAL_APPLICATION_ID}>{t("generalOption")}</option>
          {jobs.map((job) => (
            <option key={job.id} value={job.id}>
              {pick(locale, job.title)}
            </option>
          ))}
        </select>
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label={`${t("applyLinkedin")} (${t("optional")})`}
          error={
            errors.linkedin
              ? errors.linkedin.type === "server"
                ? errors.linkedin.message
                : t("errors.url")
              : undefined
          }
        >
          <input
            {...register("linkedin")}
            className={inputClass}
            placeholder="https://linkedin.com/in/…"
          />
        </Field>
        <Field
          label={`${t("applyPortfolio")} (${t("optional")})`}
          error={
            errors.portfolio
              ? errors.portfolio.type === "server"
                ? errors.portfolio.message
                : t("errors.url")
              : undefined
          }
        >
          <input
            {...register("portfolio")}
            className={inputClass}
            placeholder="https://"
          />
        </Field>
      </div>
      <Field
        label={`${t("applyCv")} (${t("optional")})`}
        error={
          errors.cv
            ? errors.cv.type === "server"
              ? errors.cv.message
              : t("errors.cv")
            : undefined
        }
      >
        <input
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className={`${inputClass} file:me-3 file:rounded-full file:border-0 file:bg-accent/20 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-heading`}
          {...register("cv")}
        />
      </Field>
      <Field
        label={t("applyMessage")}
        error={
          errors.message
            ? errors.message.type === "server"
              ? errors.message.message
              : t("errors.message")
            : undefined
        }
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
            {status === "success" ? (
              apiMessage || (
                <>
                  <strong>{t("successTitle")}</strong> {t("successBody")}
                </>
              )
            ) : (
              <>
                <strong>{t("errorTitle")}</strong> {t("errorBody")}
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
