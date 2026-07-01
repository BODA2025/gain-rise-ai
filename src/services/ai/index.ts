/**
 * AI service layer — future-facing typed interfaces for AI modules.
 *
 * These are intentionally not implemented yet. When AI backends are wired,
 * implement each function against Lovable AI Gateway or another provider
 * while keeping the exported signatures stable so UI code doesn't churn.
 */

import type { SupportedLanguage } from "@/i18n";

export type FitnessGoal = "lose_fat" | "build_muscle" | "maintain" | "recomp" | "endurance";
export type FitnessLevel = "beginner" | "intermediate" | "advanced";
export type Equipment = "none" | "dumbbells" | "barbell" | "full_gym" | "bands";
export type DietPreference =
  | "none"
  | "vegan"
  | "vegetarian"
  | "keto"
  | "mediterranean"
  | "halal"
  | "gluten_free";

export interface WorkoutRequest {
  goal: FitnessGoal;
  level: FitnessLevel;
  daysPerWeek: number;
  minutesPerSession: number;
  equipment: Equipment;
  language?: SupportedLanguage;
}

export interface MealPlanRequest {
  goal: FitnessGoal;
  calories: number;
  proteinGrams?: number;
  diet: DietPreference;
  daysPerWeek?: number;
  language?: SupportedLanguage;
}

export interface RecipeRequest {
  ingredients: string[];
  diet?: DietPreference;
  maxMinutes?: number;
  language?: SupportedLanguage;
}

export interface ChatCoachMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

const NOT_IMPLEMENTED = "AI module not implemented yet. Wire this to your provider.";

export const aiService = {
  async generateWorkout(_req: WorkoutRequest): Promise<never> {
    throw new Error(NOT_IMPLEMENTED);
  },
  async generateMealPlan(_req: MealPlanRequest): Promise<never> {
    throw new Error(NOT_IMPLEMENTED);
  },
  async generateRecipe(_req: RecipeRequest): Promise<never> {
    throw new Error(NOT_IMPLEMENTED);
  },
  async chatCoach(_messages: ChatCoachMessage[], _language?: SupportedLanguage): Promise<never> {
    throw new Error(NOT_IMPLEMENTED);
  },
  async scanFood(_image: Blob, _language?: SupportedLanguage): Promise<never> {
    throw new Error(NOT_IMPLEMENTED);
  },
};

export type AIService = typeof aiService;
