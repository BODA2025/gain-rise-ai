import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type StatWidgetProps = {
  icon: LucideIcon;
  label: string;
  value: string | number;
  hint?: string;
  progress?: number; // 0..100
  className?: string;
};

export function StatWidget({ icon: Icon, label, value, hint, progress, className }: StatWidgetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "group rounded-3xl border border-border bg-card/60 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/40",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
          <Icon className="h-5 w-5" />
        </span>
        {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
      </div>
      <div className="mt-4 text-2xl font-extrabold text-foreground">{value}</div>
      <div className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
      {typeof progress === "number" && (
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-primary/15">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
            style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
          />
        </div>
      )}
    </motion.div>
  );
}
