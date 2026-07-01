import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { TranslatedPageHeader } from "@/components/site/TranslatedPageHeader";
import { Clock, Flame } from "lucide-react";
import { motion } from "framer-motion";
import nutritionImage from "@/assets/nutrition.jpg";

export const Route = createFileRoute("/healthy-recipes")({
  head: () => ({
    meta: [
      { title: "Healthy Recipes — FitAI" },
      { name: "description", content: "Curated healthy recipes for every goal — high-protein, plant-based, low-carb, and more." },
      { property: "og:title", content: "Healthy Recipes — FitAI" },
      { property: "og:description", content: "Curated recipes for every goal." },
    ],
  }),
  component: HealthyRecipesPage,
});

const RECIPES = [
  { title: "Protein Overnight Oats", cat: "Breakfast", kcal: 420, time: "5m + overnight" },
  { title: "Salmon Poke Bowl", cat: "Lunch", kcal: 560, time: "20m" },
  { title: "Chickpea Buddha Bowl", cat: "Vegan", kcal: 480, time: "25m" },
  { title: "Steak Fajita Skillet", cat: "Dinner", kcal: 610, time: "25m" },
  { title: "Berry Greek Parfait", cat: "Snack", kcal: 230, time: "5m" },
  { title: "Thai Coconut Curry", cat: "Dinner", kcal: 540, time: "30m" },
  { title: "Egg White Veggie Wrap", cat: "Breakfast", kcal: 340, time: "10m" },
  { title: "Zucchini Turkey Meatballs", cat: "Lunch", kcal: 490, time: "30m" },
  { title: "Miso Roasted Tofu", cat: "Vegan", kcal: 380, time: "25m" },
];

function HealthyRecipesPage() {
  return (
    <>
      <TranslatedPageHeader namespace="pages.healthyRecipes" />}
        description="A curated library of chef-tested, macro-balanced recipes you'll actually make twice."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RECIPES.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur transition hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={nutritionImage}
                  alt={r.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase text-primary-foreground">
                  {r.cat}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{r.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1">
                    <Clock className="h-3.5 w-3.5" /> {r.time}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1">
                    <Flame className="h-3.5 w-3.5 text-primary" /> {r.kcal} kcal
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </>
  );
}
