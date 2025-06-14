import { z } from "zod";

export const compatibilityRequestSchema = z.object({
  userId: z.string(),
  partnerId: z.string(),
  birthDate: z.string(),
  partnerBirthDate: z.string(),
  gender: z.enum(["male", "female"]),
  partnerGender: z.enum(["male", "female"]),
  person1Date: z.string().optional(),
  person2Date: z.string().optional(),
  person1Time: z.string().optional(),
  person2Time: z.string().optional(),
  telegramUserId: z.string().optional(),
});

export type CompatibilityRequest = z.infer<typeof compatibilityRequestSchema>;

export type CompatibilityResults = {
  score: number;
  description: string;
  lucky_colors: string[];
  best_activities: string[];
  best_dates?: string[];
  overall_compatibility: number;
  zodiac_signs?: {
    person1?: string;
    person2?: string;
  };
  compatibility_message?: string;
  detailed_description?: string;
  best_dates_comment?: string;
  relationship_tips?: string;
}; 