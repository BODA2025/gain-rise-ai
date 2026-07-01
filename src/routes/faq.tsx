import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { TranslatedPageHeader } from "@/components/site/TranslatedPageHeader";
import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — FitAI" },
      { name: "description", content: "Answers to common questions about FitAI, plans, privacy, and features." },
      { property: "og:title", content: "FitAI FAQ" },
      { property: "og:description", content: "Answers to common FitAI questions." },
    ],
  }),
  component: FAQPage,
});

const FAQS = [
  { q: "Is FitAI free?", a: "Yes. Core AI generation and tracking are free. Premium unlocks unlimited AI, wearable sync, and advanced analytics." },
  { q: "How does the AI personalize plans?", a: "It combines your profile (goals, level, preferences) with logged progress to adapt every plan over time." },
  { q: "Can I follow a specific diet?", a: "Vegan, vegetarian, keto, Mediterranean, halal, gluten-free, and more are supported." },
  { q: "Do I need a gym?", a: "No. We generate gym, home, bodyweight, or hybrid plans." },
  { q: "Which wearables sync?", a: "Apple Health and Google Fit today. Garmin, Whoop, and Oura are on the roadmap." },
  { q: "How do I cancel Premium?", a: "One tap in Profile → Subscription. No emails, no phone calls." },
  { q: "Is my data private?", a: "Encrypted in transit and at rest. We never sell data. You can export or delete anytime." },
  { q: "Do you offer refunds?", a: "Yes — 14-day money-back on Premium, no questions asked." },
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <TranslatedPageHeader namespace="pages.faq" />}
        description="Everything you might want to know before diving in."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
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
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
