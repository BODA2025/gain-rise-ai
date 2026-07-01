import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { motion } from "framer-motion";
import { Brain, Utensils, ChefHat, LineChart, Dumbbell, HeartPulse, Timer, Salad, Trophy, ScanLine, Bell, Cloud } from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — FitAI" },
      { name: "description", content: "Explore every FitAI feature: AI workouts, meal plans, recipes, nutrition analysis, and progress tracking." },
      { property: "og:title", content: "FitAI features" },
      { property: "og:description", content: "AI workouts, meal plans, recipes, nutrition analysis, and more." },
    ],
  }),
  component: FeaturesPage,
});

const GROUPS = [
  {
    title: "Train",
    icon: Dumbbell,
    items: [
      { icon: Brain, title: "AI Workout Generator", desc: "Personalized plans in seconds." },
      { icon: Dumbbell, title: "Exercise Library", desc: "500+ moves with form cues." },
      { icon: Timer, title: "Guided Sessions", desc: "Timed sets, rest, and cues." },
    ],
  },
  {
    title: "Fuel",
    icon: Utensils,
    items: [
      { icon: Utensils, title: "AI Meal Planner", desc: "Weekly plans matched to macros." },
      { icon: ChefHat, title: "Recipe Creator", desc: "Turn ingredients into meals." },
      { icon: Salad, title: "Healthy Library", desc: "Curated recipes by goal." },
    ],
  },
  {
    title: "Track",
    icon: LineChart,
    items: [
      { icon: LineChart, title: "Insights Dashboard", desc: "Weight, streak, and PR trends." },
      { icon: ScanLine, title: "Food Scanner", desc: "Snap a meal, get macros." },
      { icon: HeartPulse, title: "Health Sync", desc: "Apple Health & Google Fit ready." },
    ],
  },
  {
    title: "Stay consistent",
    icon: Trophy,
    items: [
      { icon: Bell, title: "Smart Reminders", desc: "Nudges that adapt to your day." },
      { icon: Trophy, title: "Streaks & Goals", desc: "Small wins compound." },
      { icon: Cloud, title: "Cloud Sync", desc: "Access anywhere, any device." },
    ],
  },
];

function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title={<>A complete <span className="text-gradient">AI coaching stack</span></>}
        description="Everything you need to train, fuel, and track — thoughtfully designed and beautifully connected."
      />
      <Section>
        <div className="space-y-16">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  <g.icon className="h-5 w-5" />
                </span>
                <h2 className="font-display text-2xl font-extrabold tracking-tight">{g.title}</h2>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((it, i) => (
                  <motion.div
                    key={it.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group rounded-3xl border border-border bg-card/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-accent/40"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/30">
                      <it.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold">{it.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-center gap-3 rounded-3xl border border-border bg-card/50 p-10 text-center">
          <h3 className="font-display text-2xl font-extrabold">Ready to feel the difference?</h3>
          <p className="text-sm text-muted-foreground">Start your free FitAI plan today.</p>
          <Link to="/register" className="mt-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-110">
            Get started free
          </Link>
        </div>
      </Section>
    </>
  );
}
