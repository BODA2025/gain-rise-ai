import { Link } from "@tanstack/react-router";
import { Dumbbell, Github, Instagram, Twitter, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";

const COLS = [
  {
    titleKey: "footer.product",
    links: [
      { to: "/features", key: "footer.features" },
      { to: "/ai-workout", key: "footer.aiWorkout" },
      { to: "/ai-meal-planner", key: "footer.aiMealPlanner" },
      { to: "/ai-recipes", key: "footer.aiRecipes" },
      { to: "/bmi-calculator", key: "footer.bmi" },
    ],
  },
  {
    titleKey: "footer.explore",
    links: [
      { to: "/exercise-library", key: "footer.exerciseLibrary" },
      { to: "/healthy-recipes", key: "footer.healthyRecipes" },
      { to: "/dashboard", key: "footer.dashboard" },
      { to: "/profile", key: "footer.profile" },
    ],
  },
  {
    titleKey: "footer.company",
    links: [
      { to: "/about", key: "footer.about" },
      { to: "/contact", key: "footer.contact" },
      { to: "/faq", key: "footer.faq" },
    ],
  },
  {
    titleKey: "footer.legal",
    links: [
      { to: "/privacy", key: "footer.privacy" },
      { to: "/terms", key: "footer.terms" },
    ],
  },
] as const;

export function SiteFooter() {
  const { t } = useTranslation();
  return (
    <footer className="relative mt-24 border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <Dumbbell className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight">
                Fit<span className="text-gradient">AI</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">{t("footer.tagline")}</p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Instagram, Youtube, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground transition hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.titleKey}>
              <h4 className="font-display text-sm font-semibold text-foreground">{t(col.titleKey)}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition hover:text-foreground"
                    >
                      {t(l.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FitAI. {t("footer.rights")}
          </p>
          <p className="text-xs text-muted-foreground">{t("footer.crafted")}</p>
        </div>
      </div>
    </footer>
  );
}
