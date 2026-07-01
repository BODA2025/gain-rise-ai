import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import i18n, { SUPPORTED_LANGUAGES, isRTL, type SupportedLanguage } from "@/i18n";

type LanguageContextValue = {
  language: SupportedLanguage;
  setLanguage: (l: SupportedLanguage) => void;
  dir: "ltr" | "rtl";
  supported: readonly SupportedLanguage[];
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "fitai:lang";

function applyDocument(lang: SupportedLanguage) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.setAttribute("lang", lang);
  root.setAttribute("dir", isRTL(lang) ? "rtl" : "ltr");
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>(
    () => (i18n.language as SupportedLanguage) || "en",
  );

  useEffect(() => {
    applyDocument(language);
  }, [language]);

  const setLanguage = useCallback((l: SupportedLanguage) => {
    void i18n.changeLanguage(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    setLanguageState(l);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      dir: isRTL(language) ? "rtl" : "ltr",
      supported: SUPPORTED_LANGUAGES,
    }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
