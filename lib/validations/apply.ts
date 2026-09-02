import { GENERAL_APPLICATION_ID, jobs } from "@/lib/content/jobs";
import { z } from "zod";

function isOpenRole(value: string) {
  return value === GENERAL_APPLICATION_ID || jobs.some((job) => job.id === value);
}

export const applyFormSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email(),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  role: z.string().min(1).refine(isOpenRole),
  linkedin: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine((value) => !value || /^https?:\/\//.test(value)),
  portfolio: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine((value) => !value || /^https?:\/\//.test(value)),
  message: z.string().trim().min(10).max(2000),
});

export type ApplyFormValues = z.infer<typeof applyFormSchema>;
