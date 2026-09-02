import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email(),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  company: z.string().trim().max(80).optional().or(z.literal("")),
  service: z.string().min(1),
  message: z.string().trim().min(10).max(2000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
