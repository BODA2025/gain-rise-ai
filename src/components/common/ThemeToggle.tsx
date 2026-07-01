import { useTheme, type Theme } from "@/contexts/ThemeContext";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const OPTIONS: { value: Theme; icon: typeof Sun; labelKey: string }[] = [
  { value: "light", icon: Sun, labelKey: "common.themeLight" },
  { value: "dark", icon: Moon, labelKey: "common.themeDark" },
  { value: "system", icon: Monitor, labelKey: "common.themeSystem" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  return (
    <div
      role="radiogroup"
      aria-label={t("common.theme")}
      className="inline-flex items-center gap-0.5 rounded-full border border-border bg-card/60 p-0.5 backdrop-blur"
    >
      {OPTIONS.map((o) => {
        const active = theme === o.value;
        const Icon = o.icon;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={t(o.labelKey)}
            title={t(o.labelKey)}
            onClick={() => setTheme(o.value)}
            className={cn(
              "grid h-7 w-7 place-items-center rounded-full transition",
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <Icon className="h-3.5 w-3.5" />
          </button>
        );
      })}
    </div>
  );
}
