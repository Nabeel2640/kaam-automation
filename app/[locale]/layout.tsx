import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import {
  isLocale,
  localeDirection,
  localeHtmlLang,
  type Locale,
} from "@/lib/i18n/config";

import { getDictionary } from "@/lib/i18n/dictionary";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ur" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;
  const dictionary = await getDictionary(locale);

  return (
    <div
      lang={localeHtmlLang[locale]}
      dir={localeDirection[locale]}
      className={locale === "ur" ? "font-urdu" : "font-sans"}
    >
      <Header locale={locale} dictionary={dictionary} />

      {children}

      <Footer locale={locale} dictionary={dictionary} />
    </div>
  );
}