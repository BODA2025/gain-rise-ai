import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/bmi-calculator")({
  head: () => ({
    meta: [
      { title: "BMI Calculator — FitAI" },
      { name: "description", content: "Calculate your Body Mass Index and get context on what it means for your health." },
      { property: "og:title", content: "BMI Calculator — FitAI" },
      { property: "og:description", content: "Free BMI calculator with clear, human insights." },
    ],
  }),
  component: BMIPage,
});

const CATS = [
  { label: "Underweight", from: 0, to: 18.5, color: "text-accent" },
  { label: "Normal", from: 18.5, to: 25, color: "text-primary" },
  { label: "Overweight", from: 25, to: 30, color: "text-yellow-400" },
  { label: "Obese", from: 30, to: 100, color: "text-destructive" },
];

function BMIPage() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [h, setH] = useState(175);
  const [w, setW] = useState(72);

  const bmi = useMemo(() => {
    if (unit === "metric") return +(w / ((h / 100) ** 2)).toFixed(1);
    return +((w * 703) / (h * h)).toFixed(1);
  }, [h, w, unit]);

  const cat = CATS.find((c) => bmi >= c.from && bmi < c.to) ?? CATS[0];
  const pct = Math.min(100, Math.max(0, ((bmi - 12) / (40 - 12)) * 100));

  return (
    <>
      <PageHeader
        eyebrow="BMI Calculator"
        title={<>Know your <span className="text-gradient">baseline</span></>}
        description="A quick, no-signup BMI calculator with useful context — not judgment."
      />
      <Section>
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
            <div className="flex gap-2">
              {(["metric", "imperial"] as const).map((u) => (
                <button
                  key={u}
                  onClick={() => setUnit(u)}
                  className={`flex-1 rounded-lg border px-3 py-2 text-xs font-semibold uppercase transition ${
                    unit === u ? "border-primary bg-primary/15 text-primary" : "border-border text-muted-foreground"
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
            <Field label={`Height (${unit === "metric" ? "cm" : "in"})`}>
              <input
                type="number" value={h}
                onChange={(e) => setH(Number(e.target.value))}
                className="w-full rounded-xl border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary/60"
              />
            </Field>
            <Field label={`Weight (${unit === "metric" ? "kg" : "lb"})`}>
              <input
                type="number" value={w}
                onChange={(e) => setW(Number(e.target.value))}
                className="w-full rounded-xl border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary/60"
              />
            </Field>
          </div>

          <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Your BMI</div>
            <motion.div
              key={bmi}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-1 font-display text-6xl font-extrabold text-gradient"
            >
              {isFinite(bmi) ? bmi : "—"}
            </motion.div>
            <div className={`mt-2 font-semibold ${cat.color}`}>{cat.label}</div>

            <div className="mt-6">
              <div className="relative h-3 overflow-hidden rounded-full bg-secondary">
                <div className="absolute inset-y-0 left-0 flex w-full">
                  <div className="h-full flex-1 bg-accent/60" />
                  <div className="h-full flex-1 bg-primary/70" />
                  <div className="h-full flex-1 bg-yellow-500/60" />
                  <div className="h-full flex-1 bg-destructive/70" />
                </div>
                <motion.div
                  animate={{ left: `${pct}%` }}
                  className="absolute top-1/2 h-5 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground shadow"
                />
              </div>
              <div className="mt-2 flex justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
                <span>Under</span><span>Normal</span><span>Over</span><span>Obese</span>
              </div>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              BMI is a rough screening tool — not a diagnosis. Body composition, activity, and
              lifestyle matter far more. FitAI helps you improve all three.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <label className="mb-1 block text-sm font-medium">{label}</label>
      {children}
    </div>
  );
}
