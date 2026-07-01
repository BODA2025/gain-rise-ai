import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";
import { Camera, Target, Ruler, Weight } from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — FitAI" },
      { name: "description", content: "Manage your FitAI profile, goals, and preferences." },
      { property: "og:title", content: "Profile — FitAI" },
      { property: "og:description", content: "Manage your FitAI profile." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <>
      <PageHeader
        eyebrow="Profile"
        title={<>Your <span className="text-gradient">FitAI profile</span></>}
        description="Fine-tune the details that shape every workout, meal, and insight."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="rounded-3xl border border-border bg-card/60 p-6 text-center backdrop-blur">
            <div className="relative mx-auto grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-3xl font-extrabold text-primary-foreground">
              AK
              <button aria-label="Change photo" className="absolute bottom-0 right-0 grid h-9 w-9 place-items-center rounded-full border border-border bg-card">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <h2 className="mt-4 font-display text-xl font-extrabold">Alex Kim</h2>
            <p className="text-sm text-muted-foreground">alex@fitai.app</p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              <Mini label="Goal" value="Recomp" />
              <Mini label="Level" value="Int." />
              <Mini label="Streak" value="23d" />
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur">
            <h3 className="font-display text-lg font-bold">Personal details</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Input label="Full name" value="Alex Kim" icon={null} />
              <Input label="Email" value="alex@fitai.app" icon={null} />
              <Input label="Age" value="29" icon={null} />
              <Input label="Sex" value="Male" icon={null} />
              <Input label="Height (cm)" value="178" icon={Ruler} />
              <Input label="Weight (kg)" value="74" icon={Weight} />
            </div>
            <h3 className="mt-8 font-display text-lg font-bold">Goals & preferences</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Input label="Primary goal" value="Body recomposition" icon={Target} />
              <Input label="Weekly workouts" value="5" icon={null} />
              <Input label="Diet" value="High-protein Mediterranean" icon={null} />
              <Input label="Allergies" value="Peanuts" icon={null} />
            </div>
            <div className="mt-8 flex gap-3">
              <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110">Save changes</button>
              <button className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-primary/50">Cancel</button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/50 p-2">
      <div className="font-display text-base font-bold text-gradient">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function Input({ label, value, icon: Icon }: { label: string; value: string; icon: React.ComponentType<{ className?: string }> | null }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />}
        <input
          defaultValue={value}
          className={`w-full rounded-xl border border-border bg-background/60 py-2.5 pr-3 text-sm outline-none focus:border-primary/60 ${Icon ? "pl-10" : "pl-3"}`}
        />
      </div>
    </div>
  );
}
