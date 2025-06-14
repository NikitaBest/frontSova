import { z } from "zod";

export const compatibilityRequestSchema = z.object({
  userId: z.string(),
  partnerId: z.string(),
  birthDate: z.string(),
  partnerBirthDate: z.string(),
  gender: z.enum(["male", "female"]),
  partnerGender: z.enum(["male", "female"]),
});

export type CompatibilityRequest = z.infer<typeof compatibilityRequestSchema>; 