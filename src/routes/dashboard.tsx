import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { motion } from "framer-motion";
import { Flame, Dumbbell, Droplet, Moon, Trophy, TrendingUp, Utensils, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — FitAI" },
      { name: "description", content: "Your personal fitness dashboard: calories, workouts, streaks, and progress at a glance." },
      { property: "og:title", content: "FitAI Dashboard" },
      { property: "og:description", content: "Your personal fitness dashboard." },
    ],
  }),
  component: DashboardPage,
});

const STATS = [
  { icon: Flame, label: "Calories today", value: "1,840", sub: "of 2,200 goal", color: "text-primary" },
  { icon: Dumbbell, label: "Workouts this week", value: "4", sub: "of 5 planned", color: "text-accent" },
  { icon: Droplet, label: "Water", value: "2.1L", sub: "of 3L goal", color: "text-accent" },
  { icon: Moon, label: "Sleep last night", value: "7h 42m", sub: "quality: 88%", color: "text-primary" },
];

const CHART = [3, 5, 2, 6, 4, 7, 5];

function DashboardPage() {
  return (
    <div className="pt-24">
      <Section>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Wednesday, July 1</p>
            <h1 className="mt-1 font-display text-3xl font-extrabold sm:text-4xl">
              Good work, <span className="text-gradient">Alex</span> 👋
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">Here's your day at a glance.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
            <Trophy className="h-4 w-4" /> 23-day streak
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</span>
                <s.icon className={`h-4 w-4 ${s.color}`} />
              </div>
              <div className="mt-3 font-display text-3xl font-extrabold">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-bold">Weekly activity</h2>
              <span className="inline-flex items-center gap-1 text-xs text-primary">
                <TrendingUp className="h-3.5 w-3.5" /> +18% vs last week
              </span>
            </div>
            <div className="mt-8 flex h-48 items-end justify-between gap-3">
              {CHART.map((v, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${v * 12}%` }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="w-full rounded-t-lg bg-gradient-to-t from-primary/40 to-primary"
                  />
                  <span className="text-[10px] uppercase text-muted-foreground">
                    {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
            <h2 className="font-display text-lg font-bold">Today's plan</h2>
            <ul className="mt-4 space-y-3">
              {[
                { icon: Utensils, label: "Breakfast — Overnight oats", done: true },
                { icon: Dumbbell, label: "Upper-body workout · 45m", done: true },
                { icon: Utensils, label: "Lunch — Chicken quinoa bowl", done: false },
                { icon: Droplet, label: "Reach 3L water", done: false },
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-3 rounded-xl border border-border bg-background/40 p-3">
                  <t.icon className="h-4 w-4 text-primary" />
                  <span className={`flex-1 text-sm ${t.done ? "text-muted-foreground line-through" : ""}`}>
                    {t.label}
                  </span>
                  <CheckCircle2 className={`h-4 w-4 ${t.done ? "text-primary" : "text-muted-foreground/40"}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
