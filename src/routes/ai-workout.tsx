import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Dumbbell, Timer, Repeat } from "lucide-react";

export const Route = createFileRoute("/ai-workout")({
  head: () => ({
    meta: [
      { title: "AI Workout Generator — FitAI" },
      { name: "description", content: "Generate personalized workouts based on your goals, equipment, and time." },
      { property: "og:title", content: "AI Workout Generator — FitAI" },
      { property: "og:description", content: "Personalized workouts in seconds." },
    ],
  }),
  component: WorkoutGenPage,
});

const PLAN = {
  title: "Upper-body strength — 45 min",
  focus: "Chest, back, shoulders",
  blocks: [
    { name: "Dynamic warm-up", sets: "1", reps: "5 min", type: "Warm-up" },
    { name: "Bench press", sets: "4", reps: "6-8", type: "Compound" },
    { name: "Pull-ups (assisted OK)", sets: "4", reps: "6-10", type: "Compound" },
    { name: "Dumbbell shoulder press", sets: "3", reps: "8-10", type: "Compound" },
    { name: "Cable row", sets: "3", reps: "10-12", type: "Accessory" },
    { name: "Face pulls", sets: "3", reps: "12-15", type: "Accessory" },
    { name: "Plank + dead bug superset", sets: "3", reps: "45s / 8", type: "Core" },
  ],
};

function WorkoutGenPage() {
  const [goal, setGoal] = useState("strength");
  const [equipment, setEquipment] = useState("gym");
  const [minutes, setMinutes] = useState(45);
  const [level, setLevel] = useState("intermediate");
  const [ready, setReady] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="AI Workout Generator"
        title={<>A perfect session, <span className="text-gradient">every time</span></>}
        description="Tell FitAI your goal and gear. Get a smart, progressive plan tailored to today."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
          <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
            <Field label="Primary goal">
              <div className="grid grid-cols-2 gap-2">
                {["strength", "hypertrophy", "fat-loss", "endurance"].map((g) => (
                  <Chip key={g} active={goal === g} onClick={() => setGoal(g)}>{g}</Chip>
                ))}
              </div>
            </Field>
            <Field label="Equipment">
              <div className="grid grid-cols-3 gap-2">
                {["gym", "home", "none"].map((e) => (
                  <Chip key={e} active={equipment === e} onClick={() => setEquipment(e)}>{e}</Chip>
                ))}
              </div>
            </Field>
            <Field label="Level">
              <div className="grid grid-cols-3 gap-2">
                {["beginner", "intermediate", "advanced"].map((l) => (
                  <Chip key={l} active={level === l} onClick={() => setLevel(l)}>{l}</Chip>
                ))}
              </div>
            </Field>
            <Field label={`Time available: ${minutes} min`}>
              <input
                type="range" min={15} max={90} step={5}
                value={minutes} onChange={(e) => setMinutes(Number(e.target.value))}
                className="w-full accent-[oklch(0.74_0.19_145)]"
              />
            </Field>
            <button
              onClick={() => setReady(true)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-110"
            >
              <Sparkles className="h-4 w-4" />
              Generate workout
            </button>
          </div>

          <motion.div
            key={ready ? "ready" : "idle"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-extrabold">{PLAN.title}</h2>
                <p className="text-sm text-muted-foreground">Focus: {PLAN.focus}</p>
              </div>
              <div className="hidden gap-2 sm:flex">
                <Badge icon={Timer}>{minutes}m</Badge>
                <Badge icon={Dumbbell}>{equipment}</Badge>
                <Badge icon={Repeat}>{level}</Badge>
              </div>
            </div>
            <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border">
              {PLAN.blocks.map((b, i) => (
                <motion.div
                  key={b.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 bg-background/40 p-4"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/15 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate font-medium">{b.name}</div>
                    <div className="text-xs text-muted-foreground">{b.type}</div>
                  </div>
                  <span className="hidden text-xs text-muted-foreground sm:inline">Sets: <b className="text-foreground">{b.sets}</b></span>
                  <span className="text-xs text-muted-foreground">Reps: <b className="text-foreground">{b.reps}</b></span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <label className="mb-2 block text-sm font-medium">{label}</label>
      {children}
    </div>
  );
}
function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border px-2 py-1.5 text-xs font-semibold capitalize transition ${
        active ? "border-primary bg-primary/15 text-primary" : "border-border text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
function Badge({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs capitalize">
      <Icon className="h-3.5 w-3.5 text-primary" />
      {children}
    </span>
  );
}
