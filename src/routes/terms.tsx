import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — FitAI" },
      { name: "description", content: "The terms governing your use of FitAI." },
      { property: "og:title", content: "Terms of Service — FitAI" },
      { property: "og:description", content: "The terms governing your use of FitAI." },
    ],
  }),
  component: TermsPage,
});

const SECTIONS = [
  { h: "Acceptance", p: "By using FitAI, you agree to these Terms. If you don't agree, please don't use the service." },
  { h: "Health disclaimer", p: "FitAI provides general fitness and nutrition information. It is not medical advice. Consult a physician before starting any new program." },
  { h: "Accounts", p: "You're responsible for the accuracy of your profile and for keeping your credentials safe." },
  { h: "Subscriptions", p: "Premium subscriptions renew automatically. Cancel anytime from Profile → Subscription. 14-day money-back guarantee." },
  { h: "Acceptable use", p: "No scraping, reverse engineering, or attempting to disrupt the service. Be kind in community areas." },
  { h: "Intellectual property", p: "You keep ownership of content you create. We grant you a personal, non-transferable license to use FitAI." },
  { h: "Termination", p: "We may suspend accounts that violate these terms. You may close your account anytime." },
  { h: "Contact", p: "Questions? Reach legal@fitai.app." },
];

function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" description="Last updated July 1, 2026" />
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
