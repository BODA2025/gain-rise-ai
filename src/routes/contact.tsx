import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { TranslatedPageHeader } from "@/components/site/TranslatedPageHeader";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — FitAI" },
      { name: "description", content: "Get in touch with the FitAI team — questions, feedback, partnerships." },
      { property: "og:title", content: "Contact FitAI" },
      { property: "og:description", content: "Get in touch with the FitAI team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <TranslatedPageHeader namespace="pages.contact" />}
        description="Feedback, partnerships, or just want to say hi — we read every message."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hello@fitai.app" },
              { icon: MessageCircle, label: "Support", value: "support@fitai.app" },
              { icon: MapPin, label: "HQ", value: "Remote-first · Global" },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="font-medium">{c.value}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name"><input className="input" placeholder="Alex Kim" /></Field>
              <Field label="Email"><input type="email" className="input" placeholder="you@fitai.app" /></Field>
            </div>
            <Field label="Subject" className="mt-4"><input className="input" placeholder="How can we help?" /></Field>
            <Field label="Message" className="mt-4">
              <textarea rows={6} className="input resize-none" placeholder="Tell us more…" />
            </Field>
            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-110">
              <Send className="h-4 w-4" /> Send message
            </button>
          </form>
        </div>
      </Section>
      <style>{`.input{width:100%;border-radius:12px;border:1px solid var(--color-border);background:color-mix(in oklab, var(--background) 60%, transparent);padding:.65rem .85rem;font-size:.875rem;outline:none}.input:focus{border-color:color-mix(in oklab, var(--primary) 60%, transparent)}`}</style>
    </>
  );
}

function Field({ label, className = "", children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
