import { defineRouting } from "next-intl/routing";

export const locales = ["uz", "ru", "en"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale: "uz",
  localePrefix: "always",
});

export const localeNames: Record<Locale, string> = {
  uz: "Oʻzbek",
  ru: "Русский",
  en: "English",
};
