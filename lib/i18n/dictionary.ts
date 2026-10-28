import type { Locale } from "@/lib/i18n/config";
import type en from "@/messages/en.json";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/messages/en.json").then((module) => module.default),
  ur: () => import("@/messages/ur.json").then((module) => module.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
