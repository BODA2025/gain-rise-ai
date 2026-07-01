import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

export const SUPPORTED_LANGUAGES = ["en", "ar"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const RTL_LANGUAGES: SupportedLanguage[] = ["ar"];

export function isRTL(lng: string): boolean {
  return RTL_LANGUAGES.includes(lng as SupportedLanguage);
}

function detectInitialLanguage(): SupportedLanguage {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem("fitai:lang");
    if (stored && SUPPORTED_LANGUAGES.includes(stored as SupportedLanguage)) {
      return stored as SupportedLanguage;
    }
    const browser = window.navigator.language?.slice(0, 2).toLowerCase();
    if (browser && SUPPORTED_LANGUAGES.includes(browser as SupportedLanguage)) {
      return browser as SupportedLanguage;
    }
  } catch {
    /* ignore */
  }
  return "en";
}

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    lng: detectInitialLanguage(),
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    returnNull: false,
  });
}

export default i18n;
