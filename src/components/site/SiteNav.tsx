import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Dumbbell, Menu, X, Sparkles, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { ThemeToggle } from "@/components/common/ThemeToggle";

const NAV_ITEMS = [
  { to: "/", key: "nav.home" },
  { to: "/features", key: "nav.features" },
  { to: "/ai-workout", key: "nav.aiWorkout" },
  { to: "/ai-meal-planner", key: "nav.mealPlanner" },
  { to: "/ai-recipes", key: "nav.recipes" },
  { to: "/exercise-library", key: "nav.exercises" },
  { to: "/dashboard", key: "nav.dashboard" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex shrink-0 items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30">
            <Dumbbell className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">
            Fit<span className="text-gradient">AI</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {NAV_ITEMS.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-secondary/80"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative">{t(l.key)}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <label className="relative hidden xl:flex">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground rtl:left-auto rtl:right-3" />
            <input
              type="search"
              placeholder={t("common.searchPlaceholder")}
              aria-label={t("common.search")}
              className="w-52 rounded-full border border-border bg-card/60 py-1.5 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary/40 rtl:pl-3 rtl:pr-9"
            />
          </label>
          <ThemeToggle />
          <LanguageSwitcher compact />
          <Link
            to="/login"
            className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            {t("common.login")}
          </Link>
          <Link
            to="/register"
            className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:brightness-110"
          >
            <Sparkles className="h-4 w-4" />
            {t("common.getStarted")}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-card/50 text-foreground lg:hidden"
          aria-label={open ? t("common.closeMenu") : t("common.openMenu")}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass border-t border-border lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              <label className="relative mb-2">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground rtl:left-auto rtl:right-3" />
                <input
                  type="search"
                  placeholder={t("common.searchPlaceholder")}
                  aria-label={t("common.search")}
                  className="w-full rounded-full border border-border bg-card/60 py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary/40 rtl:pl-3 rtl:pr-9"
                />
              </label>
              {NAV_ITEMS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition",
                    pathname === l.to
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                  )}
                >
                  {t(l.key)}
                </Link>
              ))}
              <div className="mt-3 flex items-center justify-between gap-2 border-t border-border pt-3">
                <ThemeToggle />
                <LanguageSwitcher compact />
              </div>
              <div className="mt-2 flex gap-2">
                <Link
                  to="/login"
                  className="flex-1 rounded-lg border border-border px-3 py-2 text-center text-sm font-medium"
                >
                  {t("common.login")}
                </Link>
                <Link
                  to="/register"
                  className="flex-1 rounded-lg bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground"
                >
                  {t("common.getStarted")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
