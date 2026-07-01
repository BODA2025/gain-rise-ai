import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import "../i18n";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useTranslation } from "react-i18next";

function NotFoundComponent() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for drifted off the training plan.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            {t("common.backToHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const { t } = useTranslation();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Take a breath and try again — we'll pick up where you left off.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            {t("common.tryAgain")}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-secondary"
          >
            {t("common.backToHome")}
          </a>
        </div>
      </div>
    </div>
  );
}

// Runs before hydration to apply persisted theme + language, preventing flash.
const PRE_HYDRATION_SCRIPT = `
(function(){try{
  var t = localStorage.getItem('fitai:theme') || 'dark';
  var resolved = t === 'system'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : t;
  var root = document.documentElement;
  root.classList.toggle('dark', resolved === 'dark');
  root.classList.toggle('light', resolved === 'light');
  root.style.colorScheme = resolved;
  var l = localStorage.getItem('fitai:lang');
  if (!l) { var b = (navigator.language||'en').slice(0,2).toLowerCase(); l = (b === 'ar' ? 'ar' : 'en'); }
  root.setAttribute('lang', l);
  root.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr');
}catch(e){}})();
`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FitAI — Your Personal AI Fitness & Nutrition Coach" },
      {
        name: "description",
        content:
          "FitAI is an AI-powered fitness and nutrition platform for personalized workouts, meal plans, recipes, and body insights — built for people who want real results.",
      },
      { name: "theme-color", content: "#0F172A" },
      { property: "og:title", content: "FitAI — Your Personal AI Fitness & Nutrition Coach" },
      {
        property: "og:description",
        content:
          "Personalized AI workouts, meal plans, macro tracking, and healthy recipes — all in one modern app.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FitAI — Your Personal AI Fitness & Nutrition Coach" },
      { name: "twitter:description", content: "Personalized AI workouts, meal plans, macro tracking, and healthy recipes." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/54b358b9-0b86-44c5-8aa1-78584f6e9d04/id-preview-6e99492d--b8090af4-dd2c-46eb-a72a-a42aa13bb45e.lovable.app-1782900049535.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/54b358b9-0b86-44c5-8aa1-78584f6e9d04/id-preview-6e99492d--b8090af4-dd2c-46eb-a72a-a42aa13bb45e.lovable.app-1782900049535.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800;900&family=Cairo:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [{ children: PRE_HYDRATION_SCRIPT }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" className="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <div className="relative min-h-screen">
            <SiteNav />
            <main>
              <Outlet />
            </main>
            <SiteFooter />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
