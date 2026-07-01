import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { TranslatedPageHeader } from "@/components/site/TranslatedPageHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — FitAI" },
      { name: "description", content: "How FitAI collects, uses, and protects your data." },
      { property: "og:title", content: "Privacy Policy — FitAI" },
      { property: "og:description", content: "How FitAI protects your data." },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  { h: "Overview", p: "FitAI (\"we\", \"us\") builds AI-powered fitness and nutrition tools. This policy explains what we collect, why, and your rights." },
  { h: "What we collect", p: "Account info (name, email), profile details you provide (goals, height, weight, preferences), and app activity (workouts logged, meals generated)." },
  { h: "How we use it", p: "Only to personalize your experience, improve the product, and provide support. We never sell your data to advertisers." },
  { h: "Storage & security", p: "Data is encrypted in transit (TLS 1.3) and at rest (AES-256). Access is limited to authorized team members." },
  { h: "Your rights", p: "You can export or delete your data anytime from Profile → Data. Contact privacy@fitai.app for GDPR/CCPA requests." },
  { h: "Third parties", p: "We use trusted infrastructure providers (hosting, analytics, email). All are bound by data-processing agreements." },
  { h: "Cookies", p: "Only essential cookies by default. Analytics cookies require your consent." },
  { h: "Changes", p: "We'll notify you at least 30 days before material changes to this policy." },
];

function PrivacyPage() {
  return (
    <>
      <TranslatedPageHeader namespace="pages.privacy" />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-xl font-bold">{s.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
