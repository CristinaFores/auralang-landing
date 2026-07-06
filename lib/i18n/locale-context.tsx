"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { CONTENT, type Dictionary, type Locale } from "./content";

type LocaleContextValue = {
  locale: Locale;
  t: Dictionary;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      t: CONTENT[locale],
      toggleLocale: () => setLocale((prev) => (prev === "es" ? "en" : "es")),
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
