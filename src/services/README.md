# Services

Domain services that wrap external systems (AI providers, storage, analytics).
Components should not talk to providers directly — go through a service.

- `ai/` — AI module interfaces (`aiService.generateWorkout`, `generateMealPlan`,
  `generateRecipe`, `chatCoach`, `scanFood`). Not implemented; wire to your
  provider (Lovable AI Gateway recommended) when ready.
