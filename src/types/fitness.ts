export type Macros = { calories: number; protein: number; carbs: number; fat: number };

export type Exercise = {
  id: string;
  name: string;
  primaryMuscle: string;
  equipment: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  cues?: string[];
};

export type WorkoutBlock = {
  exerciseId: string;
  sets: number;
  reps: string;
  restSeconds: number;
};

export type WorkoutSession = {
  id: string;
  name: string;
  blocks: WorkoutBlock[];
  estimatedMinutes: number;
};

export type Recipe = {
  id: string;
  title: string;
  minutes: number;
  servings: number;
  macros: Macros;
  ingredients: string[];
  steps: string[];
};

export type ProgressEntry = {
  date: string; // ISO
  weightKg?: number;
  waterMl?: number;
  workoutMinutes?: number;
  caloriesIn?: number;
};
