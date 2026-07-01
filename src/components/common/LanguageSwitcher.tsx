import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

const LABELS: Record<string, string> = { en: "EN", ar: "AR" };

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage, supported } = useLanguage();
  const { t } = useTranslation();
  return (
    <label className="relative inline-flex items-center gap-1.5">
      <span className="sr-only">{t("common.language")}</span>
      <Languages className="pointer-events-none absolute left-2 h-3.5 w-3.5 text-muted-foreground" aria-hidden />
      <select
        aria-label={t("common.language")}
        value={language}
        onChange={(e) => setLanguage(e.target.value as typeof supported[number])}
        className="appearance-none rounded-full border border-border bg-card/60 py-1.5 pl-7 pr-3 text-xs font-semibold text-foreground backdrop-blur transition hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        {supported.map((l) => (
          <option key={l} value={l} className="bg-background text-foreground">
            {compact ? LABELS[l] ?? l.toUpperCase() : l.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
}
