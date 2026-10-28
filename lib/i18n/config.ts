export const locales = ["en", "ur"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeCookieName = "kaam_locale";

export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ur: "rtl",
};

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  ur: "ur",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
