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
import { useTranslation } from "react-i18next";
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

const FEATURE_KEYS = [
  { icon: Brain, key: "workout", tint: "from-primary/30 to-primary/0" },
  { icon: Utensils, key: "meal", tint: "from-accent/30 to-accent/0" },
  { icon: ChefHat, key: "recipe", tint: "from-primary/30 to-accent/20" },
  { icon: LineChart, key: "nutrition", tint: "from-accent/30 to-primary/20" },
  { icon: Dumbbell, key: "library", tint: "from-primary/30 to-primary/0" },
  { icon: HeartPulse, key: "progress", tint: "from-accent/30 to-accent/0" },
] as const;

const STEP_KEYS = [
  { icon: ClipboardList, key: "profile" },
  { icon: Wand2, key: "plan" },
  { icon: Trophy, key: "progress" },
] as const;

const TESTIMONIAL_KEYS = ["sarah", "marcus", "priya", "diego"] as const;

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
  const { t } = useTranslation();
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
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
          {t("home.heroBadge")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {t("home.heroTitle1")} <span className="text-gradient">{t("home.heroTitleAI")}</span>
          <br className="hidden sm:block" /> {t("home.heroTitle2")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {t("home.heroDesc")}
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
            {t("common.getStarted")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
          </Link>
          <Link
            to="/ai-workout"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-accent/50 hover:text-accent"
          >
            <Play className="h-4 w-4" />
            {t("common.tryAiNow")}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex items-center gap-2 text-xs text-muted-foreground"
        >
          <div className="flex -space-x-2 rtl:space-x-reverse">
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
          <span>{t("home.heroSocial")}</span>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesGrid() {
  const { t } = useTranslation();
  return (
    <Section id="features">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">{t("home.featuresEyebrow")}</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          {t("home.featuresTitle1")} <span className="text-gradient">{t("home.featuresTitleAccent")}</span>
        </h2>
        <p className="mt-4 text-muted-foreground">{t("home.featuresDesc")}</p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURE_KEYS.map((f, i) => (
          <motion.div
            key={f.key}
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
              <h3 className="mt-5 font-display text-xl font-bold">{t(`home.features.${f.key}.title`)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(`home.features.${f.key}.desc`)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  const { t } = useTranslation();
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8 sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-hero-grid opacity-20" />
        <div className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">{t("home.howEyebrow")}</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              {t("home.howTitle1")} <span className="text-gradient">{t("home.howTitleAccent")}</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEP_KEYS.map((s, i) => (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-2xl border border-border bg-background/60 p-6"
              >
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground rtl:left-auto rtl:right-6">
                  {t("home.step")} {i + 1}
                </span>
                <div className="mt-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{t(`home.steps.${s.key}.title`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(`home.steps.${s.key}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Stats() {
  const { t } = useTranslation();
  const STATS = [
    { value: "250K+", label: t("home.statsActiveAthletes") },
    { value: "12M+", label: t("home.statsMealsPlanned") },
    { value: "4.9★", label: t("home.statsAvgRating") },
    { value: "98%", label: t("home.statsConsistent") },
  ];
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
  const { t } = useTranslation();
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">{t("home.testimonialsEyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t("home.testimonialsTitle1")} <span className="text-gradient">{t("home.testimonialsTitleAccent")}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t("home.testimonialsDesc")}</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{t("home.testimonialsRating")}</span>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {TESTIMONIAL_KEYS.map((k, i) => {
            const name = t(`home.testimonials.${k}.name`);
            return (
              <motion.figure
                key={k}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur"
              >
                <Quote className="h-6 w-6 text-primary/70" />
                <blockquote className="mt-3 text-sm text-foreground/90">
                  "{t(`home.testimonials.${k}.quote`)}"
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground">
                    {name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{name}</div>
                    <div className="text-xs text-muted-foreground">{t(`home.testimonials.${k}.role`)}</div>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function FAQ() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(0);
  const items = t("home.faq", { returnObjects: true }) as { q: string; a: string }[];
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">{t("home.faqEyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t("home.faqTitle1")} <span className="text-gradient">{t("home.faqTitleAccent")}</span>
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left rtl:text-right"
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
  const { t } = useTranslation();
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
            {t("home.ctaTitle1")} <span className="text-gradient">{t("home.ctaTitleAccent")}</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">{t("home.ctaDesc")}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition hover:brightness-110"
            >
              {t("common.createFreeAccount")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:border-accent/50"
            >
              {t("home.exploreFeatures")}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
