import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { TranslatedPageHeader } from "@/components/site/TranslatedPageHeader";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Clock, Flame, ChefHat } from "lucide-react";

export const Route = createFileRoute("/ai-recipes")({
  head: () => ({
    meta: [
      { title: "AI Recipes — FitAI" },
      { name: "description", content: "Generate delicious, macro-balanced recipes from any ingredients using FitAI's AI recipe creator." },
      { property: "og:title", content: "AI Recipes — FitAI" },
      { property: "og:description", content: "Turn any ingredients into healthy, macro-balanced meals." },
    ],
  }),
  component: AIRecipesPage,
});

const SAMPLE = {
  title: "Herbed Chicken & Quinoa Power Bowl",
  time: "25 min",
  calories: 520,
  macros: { protein: 42, carbs: 48, fat: 16 },
  ingredients: [
    "150g chicken breast",
    "80g quinoa",
    "1 cup spinach",
    "1/2 avocado",
    "1 tbsp olive oil",
    "Lemon, garlic, thyme",
  ],
  steps: [
    "Rinse and cook quinoa in vegetable broth for 12 minutes.",
    "Season chicken with garlic, thyme, salt; sear 4 minutes per side.",
    "Wilt spinach in the pan with a splash of lemon juice.",
    "Assemble bowl: quinoa base, sliced chicken, spinach, avocado.",
    "Drizzle with olive oil and finish with cracked pepper.",
  ],
};

function AIRecipesPage() {
  const [ingredients, setIngredients] = useState("chicken, quinoa, spinach, avocado, lemon");
  const [diet, setDiet] = useState("balanced");
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState<typeof SAMPLE | null>(null);

  const generate = () => {
    setLoading(true);
    setTimeout(() => {
      setRecipe(SAMPLE);
      setLoading(false);
    }, 900);
  };

  return (
    <>
      <TranslatedPageHeader namespace="pages.aiRecipes" />}
        description="Enter your ingredients. FitAI writes a recipe that tastes great and hits your macros."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
            <label className="text-sm font-medium">Ingredients you have</label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows={5}
              className="mt-2 w-full rounded-xl border border-border bg-background/60 p-3 text-sm outline-none focus:border-primary/60"
              placeholder="e.g. chicken, spinach, lemon, olive oil"
            />
            <label className="mt-4 block text-sm font-medium">Dietary preference</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {["balanced", "high-protein", "vegan", "keto", "mediterranean"].map((d) => (
                <button
                  key={d}
                  onClick={() => setDiet(d)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    diet === d
                      ? "border-primary bg-primary/15 text-primary"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
            <button
              onClick={generate}
              disabled={loading}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-110 disabled:opacity-60"
            >
              <Sparkles className="h-4 w-4" />
              {loading ? "Cooking up a recipe…" : "Generate recipe"}
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Demo mode — sign up to save recipes and swap ingredients smartly.
            </p>
          </div>

          <motion.div
            key={recipe ? "recipe" : "empty"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur"
          >
            {!recipe ? (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
                <ChefHat className="h-12 w-12 text-muted-foreground/40" />
                <p className="mt-4 text-sm text-muted-foreground">
                  Your recipe will appear here.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-extrabold">{recipe.title}</h2>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1">
                    <Clock className="h-3.5 w-3.5" /> {recipe.time}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1">
                    <Flame className="h-3.5 w-3.5 text-primary" /> {recipe.calories} kcal
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {(["protein", "carbs", "fat"] as const).map((m) => (
                    <div key={m} className="rounded-xl border border-border bg-background/50 p-3 text-center">
                      <div className="font-display text-lg font-bold text-gradient">
                        {recipe.macros[m]}g
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <h3 className="text-sm font-semibold">Ingredients</h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {recipe.ingredients.map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5">
                  <h3 className="text-sm font-semibold">Instructions</h3>
                  <ol className="mt-2 space-y-2 text-sm text-muted-foreground">
                    {recipe.steps.map((s, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                          {i + 1}
                        </span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </Section>
    </>
  );
}
