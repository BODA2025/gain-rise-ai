import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { TranslatedPageHeader } from "@/components/site/TranslatedPageHeader";
import { useMemo, useState } from "react";
import { Sparkles, Utensils } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/ai-meal-planner")({
  head: () => ({
    meta: [
      { title: "AI Meal Planner — FitAI" },
      { name: "description", content: "Generate a personalized weekly meal plan matched to your calories, macros, and preferences." },
      { property: "og:title", content: "AI Meal Planner — FitAI" },
      { property: "og:description", content: "Weekly meal plans matched to your macros and goals." },
    ],
  }),
  component: MealPlannerPage,
});

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MEALS = [
  { name: "Overnight oats & berries", kcal: 380, tag: "Breakfast" },
  { name: "Grilled chicken quinoa bowl", kcal: 560, tag: "Lunch" },
  { name: "Greek yogurt & almonds", kcal: 220, tag: "Snack" },
  { name: "Salmon, sweet potato, greens", kcal: 640, tag: "Dinner" },
];

function MealPlannerPage() {
  const [calories, setCalories] = useState(2200);
  const [goal, setGoal] = useState("recomp");
  const [diet, setDiet] = useState("balanced");
  const [generated, setGenerated] = useState(false);

  const macros = useMemo(() => {
    const p = Math.round((calories * 0.3) / 4);
    const c = Math.round((calories * 0.45) / 4);
    const f = Math.round((calories * 0.25) / 9);
    return { p, c, f };
  }, [calories]);

  return (
    <>
      <TranslatedPageHeader namespace="pages.aiMealPlanner" />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
          <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
            <label className="text-sm font-medium">Daily calories: <span className="text-primary">{calories} kcal</span></label>
            <input
              type="range"
              min={1400}
              max={3600}
              step={50}
              value={calories}
              onChange={(e) => setCalories(Number(e.target.value))}
              className="mt-3 w-full accent-[oklch(0.74_0.19_145)]"
            />
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              <Stat label="Protein" value={`${macros.p}g`} />
              <Stat label="Carbs" value={`${macros.c}g`} />
              <Stat label="Fat" value={`${macros.f}g`} />
            </div>

            <label className="mt-6 block text-sm font-medium">Goal</label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {["cut", "recomp", "bulk"].map((g) => (
                <button
                  key={g}
                  onClick={() => setGoal(g)}
                  className={`rounded-lg border px-2 py-1.5 text-xs font-semibold uppercase transition ${
                    goal === g ? "border-primary bg-primary/15 text-primary" : "border-border text-muted-foreground"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>

            <label className="mt-6 block text-sm font-medium">Diet</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {["balanced", "high-protein", "vegan", "keto", "mediterranean"].map((d) => (
                <button
                  key={d}
                  onClick={() => setDiet(d)}
                  className={`rounded-full border px-3 py-1 text-xs transition ${
                    diet === d ? "border-primary bg-primary/15 text-primary" : "border-border text-muted-foreground"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            <button
              onClick={() => setGenerated(true)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-110"
            >
              <Sparkles className="h-4 w-4" />
              Generate 7-day plan
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {DAYS.map((day, di) => (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: generated ? di * 0.04 : 0 }}
                className="rounded-2xl border border-border bg-card/60 p-4 backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-bold">{day}</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {calories} kcal
                  </span>
                </div>
                <ul className="mt-3 space-y-2">
                  {MEALS.map((m) => (
                    <li key={m.name} className="rounded-lg border border-border bg-background/40 p-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="text-[10px] font-semibold uppercase tracking-wider text-accent">{m.tag}</div>
                          <div className="mt-0.5 text-xs text-foreground">{m.name}</div>
                        </div>
                        <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium">
                          {m.kcal}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/50 p-2">
      <div className="font-display text-base font-bold text-gradient">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
