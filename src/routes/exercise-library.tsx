import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { TranslatedPageHeader } from "@/components/site/TranslatedPageHeader";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/exercise-library")({
  head: () => ({
    meta: [
      { title: "Exercise Library — FitAI" },
      { name: "description", content: "Browse a curated library of exercises with muscle targets, difficulty, and form cues." },
      { property: "og:title", content: "Exercise Library — FitAI" },
      { property: "og:description", content: "Explore exercises with cues and swaps." },
    ],
  }),
  component: ExerciseLibraryPage,
});

const EXERCISES = [
  { name: "Barbell Back Squat", muscle: "Legs", level: "Intermediate", equipment: "Barbell" },
  { name: "Deadlift", muscle: "Back", level: "Advanced", equipment: "Barbell" },
  { name: "Bench Press", muscle: "Chest", level: "Intermediate", equipment: "Barbell" },
  { name: "Pull-up", muscle: "Back", level: "Intermediate", equipment: "Bodyweight" },
  { name: "Push-up", muscle: "Chest", level: "Beginner", equipment: "Bodyweight" },
  { name: "Overhead Press", muscle: "Shoulders", level: "Intermediate", equipment: "Barbell" },
  { name: "Romanian Deadlift", muscle: "Legs", level: "Intermediate", equipment: "Barbell" },
  { name: "Dumbbell Row", muscle: "Back", level: "Beginner", equipment: "Dumbbell" },
  { name: "Bulgarian Split Squat", muscle: "Legs", level: "Intermediate", equipment: "Dumbbell" },
  { name: "Face Pull", muscle: "Shoulders", level: "Beginner", equipment: "Cable" },
  { name: "Plank", muscle: "Core", level: "Beginner", equipment: "Bodyweight" },
  { name: "Hanging Leg Raise", muscle: "Core", level: "Intermediate", equipment: "Bodyweight" },
  { name: "Kettlebell Swing", muscle: "Full body", level: "Intermediate", equipment: "Kettlebell" },
  { name: "Lunges", muscle: "Legs", level: "Beginner", equipment: "Bodyweight" },
  { name: "Bicep Curl", muscle: "Arms", level: "Beginner", equipment: "Dumbbell" },
  { name: "Tricep Dip", muscle: "Arms", level: "Intermediate", equipment: "Bodyweight" },
];

const MUSCLES = ["All", "Chest", "Back", "Legs", "Shoulders", "Arms", "Core", "Full body"] as const;

function ExerciseLibraryPage() {
  const [q, setQ] = useState("");
  const [muscle, setMuscle] = useState<(typeof MUSCLES)[number]>("All");

  const filtered = useMemo(() => {
    return EXERCISES.filter(
      (e) =>
        (muscle === "All" || e.muscle === muscle) &&
        e.name.toLowerCase().includes(q.toLowerCase()),
    );
  }, [q, muscle]);

  return (
    <>
      <TranslatedPageHeader namespace="pages.exerciseLibrary" />}
        description="Search by name or muscle group. Tap any exercise for form cues and smart swaps."
      />
      <Section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search exercises…"
              className="w-full rounded-full border border-border bg-card/60 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary/60"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {MUSCLES.map((m) => (
              <button
                key={m}
                onClick={() => setMuscle(m)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  muscle === m ? "border-primary bg-primary/15 text-primary" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((ex, i) => (
            <motion.div
              key={ex.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02 }}
              className="group rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-bold">{ex.name}</h3>
                <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase text-primary">
                  {ex.level}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Targets: {ex.muscle}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>Equipment: <b className="text-foreground">{ex.equipment}</b></span>
                <span className="text-primary opacity-0 transition group-hover:opacity-100">View →</span>
              </div>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-sm text-muted-foreground">No exercises found.</p>
          )}
        </div>
      </Section>
    </>
  );
}
