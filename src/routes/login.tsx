import { createFileRoute, Link } from "@tanstack/react-router";
import { Dumbbell, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — FitAI" },
      { name: "description", content: "Log in to your FitAI account." },
      { property: "og:title", content: "Log in — FitAI" },
      { property: "og:description", content: "Access your FitAI dashboard." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [show, setShow] = useState(false);
  return (
    <div className="grid min-h-[100svh] pt-24 lg:grid-cols-2">
      <div className="hidden bg-gradient-to-br from-primary/30 via-background to-accent/20 p-12 lg:flex lg:flex-col lg:justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Dumbbell className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-extrabold">Fit<span className="text-gradient">AI</span></span>
        </Link>
        <div>
          <h2 className="font-display text-4xl font-extrabold">"The coach that actually shows up every day."</h2>
          <p className="mt-3 text-muted-foreground">— Priya R., New mom · Member since 2024</p>
        </div>
        <div className="text-xs text-muted-foreground">© FitAI</div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center p-6 sm:p-12"
      >
        <div className="w-full max-w-sm">
          <h1 className="font-display text-3xl font-extrabold">Welcome back</h1>
          <p className="mt-1 text-sm text-muted-foreground">Log in to keep your streak alive.</p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Field label="Email" icon={Mail}>
              <input type="email" placeholder="you@fitai.app" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
            </Field>
            <Field label="Password" icon={Lock} trailing={
              <button type="button" onClick={() => setShow((s) => !s)} className="text-muted-foreground">
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            }>
              <input type={show ? "text" : "password"} placeholder="••••••••" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
            </Field>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-muted-foreground">
                <input type="checkbox" className="accent-[oklch(0.74_0.19_145)]" /> Remember me
              </label>
              <a href="#" className="text-primary hover:underline">Forgot password?</a>
            </div>

            <button className="w-full rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:brightness-110">
              Log in
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
            New to FitAI? <Link to="/register" className="text-primary hover:underline">Create account</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function Field({ label, icon: Icon, trailing, children }: { label: string; icon: React.ComponentType<{ className?: string }>; trailing?: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2.5 focus-within:border-primary/60">
        <Icon className="h-4 w-4 text-muted-foreground" />
        {children}
        {trailing}
      </div>
    </label>
  );
}
