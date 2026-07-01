import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles,
  Brain,
  Utensils,
  Dumbbell,
  LineChart,
  ChefHat,
  HeartPulse,
  ArrowRight,
  Play,
  Star,
  ClipboardList,
  Wand2,
  Trophy,
  Quote,
  Plus,
} from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-fitness.jpg";
import nutritionImage from "@/assets/nutrition.jpg";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FitAI — Your Personal AI Fitness & Nutrition Coach" },
      {
        name: "description",
        content:
          "Personalized AI workouts, meal plans, macro tracking, and healthy recipes. Reach your goals faster with FitAI.",
      },
    ],
  }),
  component: HomePage,
});

const FEATURES = [
  {
    icon: Brain,
    title: "AI Workout Generator",
    desc: "Instantly build training plans matched to your goals, equipment, and schedule.",
    tint: "from-primary/30 to-primary/0",
  },
  {
    icon: Utensils,
    title: "Smart Meal Planner",
    desc: "Weekly meal plans tuned to your calories, macros, and dietary preferences.",
    tint: "from-accent/30 to-accent/0",
  },
  {
    icon: ChefHat,
    title: "AI Recipe Creator",
    desc: "Turn any ingredients into a delicious, macro-balanced recipe in seconds.",
    tint: "from-primary/30 to-accent/20",
  },
  {
    icon: LineChart,
    title: "Nutrition Analysis",
    desc: "Break down any meal into calories, protein, carbs, fats, and micronutrients.",
    tint: "from-accent/30 to-primary/20",
  },
  {
    icon: Dumbbell,
    title: "Exercise Library",
    desc: "Hundreds of exercises with form cues, muscle targets, and swap suggestions.",
    tint: "from-primary/30 to-primary/0",
  },
  {
    icon: HeartPulse,
    title: "Progress & Insights",
    desc: "Track weight, workouts, and streaks with a beautiful, focused dashboard.",
    tint: "from-accent/30 to-accent/0",
  },
];

const STEPS = [
  {
    icon: ClipboardList,
    title: "Tell FitAI about you",
    desc: "Share your goals, current fitness level, dietary preferences, and available equipment.",
  },
  {
    icon: Wand2,
    title: "Get your AI plan",
    desc: "Instantly receive a personalized workout program and matching weekly meal plan.",
  },
  {
    icon: Trophy,
    title: "Train, eat, progress",
    desc: "Log workouts and meals, watch your streak grow, and let FitAI adapt as you level up.",
  },
];

const STATS = [
  { value: "250K+", label: "Active athletes" },
  { value: "12M+", label: "Meals planned" },
  { value: "4.9★", label: "Average rating" },
  { value: "98%", label: "Feel more consistent" },
];

const TESTIMONIALS = [
  {
    name: "Sarah K.",
    role: "Marathon runner",
    quote:
      "The AI meal planner nails my macros for long-run days. I've never had this much energy in training.",
  },
  {
    name: "Marcus D.",
    role: "Software engineer",
    quote:
      "I finally stuck to a workout plan for six months. FitAI actually adapts when life gets busy.",
  },
  {
    name: "Priya R.",
    role: "New mom",
    quote:
      "Fast recipes from whatever's in my fridge — it's like having a nutritionist in my pocket.",
  },
  {
    name: "Diego M.",
    role: "College athlete",
    quote:
      "Lost 8kg without giving up my favorite foods. The AI made it feel effortless, not restrictive.",
  },
];

const FAQS = [
  {
    q: "Is FitAI really personalized?",
    a: "Yes. Every workout, meal plan, and recipe is generated from your goals, level, dietary preferences, and available equipment — then adapted as you log progress.",
  },
  {
    q: "Do I need a gym?",
    a: "No. FitAI creates programs for gym, home, bodyweight, or hybrid setups. Just tell us what you have.",
  },
  {
    q: "Can I follow a specific diet?",
    a: "Absolutely. Vegan, vegetarian, keto, Mediterranean, halal, gluten-free, and more are supported out of the box.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes — you can generate workouts, plan meals, and use the BMI calculator for free. Premium unlocks unlimited AI and advanced tracking.",
  },
  {
    q: "Will my data stay private?",
    a: "Your data is encrypted in transit and at rest. We never sell it. Read our Privacy Policy for full details.",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Athletic woman training in a modern gym"
          width={1920}
          height={1280}
          className="h-full w-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="absolute inset-0 bg-hero-grid opacity-30" />
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-16 pb-24 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Powered by next-gen fitness AI
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Your Personal <span className="text-gradient">AI Fitness</span>
          <br className="hidden sm:block" /> & Nutrition Coach
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          AI-powered meal planning, custom workout generation, deep nutrition analysis,
          and recipes made from whatever you have in the fridge — one clean, focused app.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            to="/register"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition hover:brightness-110"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/ai-workout"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-accent/50 hover:text-accent"
          >
            <Play className="h-4 w-4" />
            Try AI Now
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex items-center gap-2 text-xs text-muted-foreground"
        >
          <div className="flex -space-x-2">
            {["from-primary to-accent", "from-accent to-primary", "from-primary to-primary/40"].map((g, i) => (
              <span
                key={i}
                className={`grid h-7 w-7 place-items-center rounded-full border-2 border-background bg-gradient-to-br ${g} text-[10px] font-bold text-primary-foreground`}
              >
                {["JS", "MR", "AL"][i]}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
            ))}
          </div>
          <span>Loved by 250,000+ athletes worldwide</span>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesGrid() {
  return (
    <Section id="features">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">Features</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          Everything you need, <span className="text-gradient">nothing you don't</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Six AI-powered tools designed to keep you consistent — whether you're chasing PRs, dropping
          body fat, or just trying to feel good.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-primary/40"
          >
            <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${f.tint} blur-2xl opacity-60`} />
            <div className="relative">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/30">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8 sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-hero-grid opacity-20" />
        <div className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">How it works</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              From zero to trained in <span className="text-gradient">three steps</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-2xl border border-border bg-background/60 p-6"
              >
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                  Step {i + 1}
                </span>
                <div className="mt-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Stats() {
  return (
    <Section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl border border-border bg-card/60 p-6 text-center backdrop-blur"
          >
            <div className="font-display text-4xl font-extrabold text-gradient">{s.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Testimonials</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Real people, <span className="text-gradient">real results</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            FitAI isn't just an app — it's the coach thousands wish they had years ago.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">4.9 average from 12,000+ reviews</span>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
            >
              <Quote className="h-6 w-6 text-primary/70" />
              <blockquote className="mt-3 text-sm text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-primary">
                    <Plus className="h-5 w-5" />
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 p-10 sm:p-16">
        <img
          src={nutritionImage}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/80 to-background/95" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            Ready to train <span className="text-gradient">smarter</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Join 250,000+ people using FitAI to build the body — and habits — they've always wanted.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition hover:brightness-110"
            >
              Create free account
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:border-accent/50"
            >
              Explore features
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
