import { z } from "zod";

export const compatibilityRequestSchema = z.object({
  person1Date: z.string().min(1, "Введите дату рождения"),
  person2Date: z.string().min(1, "Введите дату рождения"),
  person1Time: z.string().optional(),
  person2Time: z.string().optional(),
  telegramUserId: z.string().optional(),
});

export type CompatibilityRequest = z.infer<typeof compatibilityRequestSchema>;

export type CompatibilityResults = {
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
  zodiac_compatibility: number;
  elemental_compatibility: number;
  numerological_compatibility: number;
  emotional_compatibility: number;
  intellectual_compatibility: number;
}; 