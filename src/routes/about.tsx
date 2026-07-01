import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { TranslatedPageHeader } from "@/components/site/TranslatedPageHeader";
import { motion } from "framer-motion";
import { Rocket, Heart, ShieldCheck, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About FitAI — Our story and mission" },
      { name: "description", content: "Learn about FitAI's mission to make personalized fitness and nutrition accessible to everyone." },
      { property: "og:title", content: "About FitAI" },
      { property: "og:description", content: "Our mission: personalized fitness and nutrition, for everyone." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Heart, title: "Human-first AI", desc: "Technology should adapt to you, not the other way around." },
  { icon: ShieldCheck, title: "Radical privacy", desc: "Your health data is yours. Encrypted, never sold, always exportable." },
  { icon: Rocket, title: "Real results", desc: "We optimize for adherence and progress — not vanity metrics." },
  { icon: Users, title: "Inclusive by design", desc: "Every level, every body, every goal. No gatekeeping." },
];

function AboutPage() {
  return (
    <>
      <TranslatedPageHeader namespace="pages.about" />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our story
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                FitAI started in 2024 when a group of engineers, coaches, and nutritionists
                asked a simple question: what if AI could give everyone a personal coach —
                without the $200/month price tag?
              </p>
              <p>
                Today, over 250,000 people use FitAI to plan meals, generate workouts, and
                track progress in a way that finally feels sustainable.
              </p>
              <p>
                We're a small, remote team spread across four continents, united by a
                belief that health should be personal, playful, and empowering.
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <Link to="/register" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110">Join FitAI</Link>
              <Link to="/contact" className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary/50">Get in touch</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
