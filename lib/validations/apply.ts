import { GENERAL_APPLICATION_ID } from "@/lib/content/jobs";
import { z } from "zod";

const MAX_CV_BYTES = 5 * 1024 * 1024;

function isAllowedCv(file: File) {
  const name = file.name.toLowerCase();
  return name.endsWith(".pdf") || name.endsWith(".doc") || name.endsWith(".docx");
}

export function createApplyFormSchema(openRoleIds: string[]) {
  return z.object({
    name: z.string().trim().min(2).max(80),
    email: z.string().trim().email(),
    phone: z.string().trim().max(30).optional().or(z.literal("")),
    role: z
      .string()
      .min(1)
      .refine((value) => value === GENERAL_APPLICATION_ID || openRoleIds.includes(value)),
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
    cv: z
      .custom<FileList | undefined>()
      .optional()
      .refine((files) => {
        const file = files?.[0];
        return !file || file.size <= MAX_CV_BYTES;
      })
      .refine((files) => {
        const file = files?.[0];
        return !file || isAllowedCv(file);
      }),
  });
}

export type ApplyFormValues = z.infer<ReturnType<typeof createApplyFormSchema>>;
