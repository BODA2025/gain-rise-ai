import { createFileRoute, Link } from "@tanstack/react-router";
import { Dumbbell, Mail, Lock, User } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create account — FitAI" },
      { name: "description", content: "Create your free FitAI account and start building better habits." },
      { property: "og:title", content: "Sign up — FitAI" },
      { property: "og:description", content: "Create your free FitAI account." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <div className="grid min-h-[100svh] pt-24 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="order-2 flex items-center justify-center p-6 sm:p-12 lg:order-1"
      >
        <div className="w-full max-w-sm">
          <h1 className="font-display text-3xl font-extrabold">Create your account</h1>
          <p className="mt-1 text-sm text-muted-foreground">Free forever. Upgrade anytime.</p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Field label="Full name" icon={User}>
              <input type="text" placeholder="Alex Kim" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
            </Field>
            <Field label="Email" icon={Mail}>
              <input type="email" placeholder="you@fitai.app" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
            </Field>
            <Field label="Password" icon={Lock}>
              <input type="password" placeholder="At least 8 characters" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
            </Field>

            <label className="flex items-start gap-2 text-xs text-muted-foreground">
              <input type="checkbox" className="mt-0.5 accent-[oklch(0.74_0.19_145)]" defaultChecked />
              I agree to the <Link to="/terms" className="text-primary hover:underline">Terms</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
            </label>

            <button className="w-full rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-110">
              Create account
            </button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs uppercase text-muted-foreground">or</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <button className="w-full rounded-full border border-border bg-card/60 py-2.5 text-sm font-semibold hover:border-primary/40">
            Continue with Google
          </button>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="text-primary hover:underline">Log in</Link>
          </p>
        </div>
      </motion.div>

      <div className="order-1 hidden bg-gradient-to-br from-accent/25 via-background to-primary/30 p-12 lg:order-2 lg:flex lg:flex-col lg:justify-between">
        <Link to="/" className="flex items-center gap-2 justify-end">
          <span className="font-display text-xl font-extrabold">Fit<span className="text-gradient">AI</span></span>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Dumbbell className="h-5 w-5" />
          </span>
        </Link>
        <div>
          <h2 className="font-display text-4xl font-extrabold">Meet your AI coach.</h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            Personalized workouts, adaptive meal plans, and insights that actually change what you do tomorrow.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {["AI workout & meal generator", "500+ exercises with form cues", "Beautiful, focused dashboard"].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-xs text-muted-foreground">© FitAI</div>
      </div>
    </div>
  );
}

function Field({ label, icon: Icon, children }: { label: string; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2.5 focus-within:border-primary/60">
        <Icon className="h-4 w-4 text-muted-foreground" />
        {children}
      </div>
    </label>
  );
}
