import type { LucideIcon } from "lucide-react";
import { Inbox } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { ReactNode } from "react";

export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  action,
}: {
  icon?: LucideIcon;
  title?: string;
  description?: string;
  action?: ReactNode;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-card/40 p-10 text-center backdrop-blur">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/30">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 font-display text-lg font-bold">{title ?? t("common.empty")}</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description ?? t("common.emptyDesc")}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
