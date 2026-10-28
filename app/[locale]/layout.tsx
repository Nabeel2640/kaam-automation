import type { Metadata } from "next";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const locale: Locale = rawLocale;

  const metadata = {
    en: {
      title: "Business Automation & AI for Pakistan",
      description:
        "Kaam Automation helps Pakistani businesses automate repetitive work, save time and improve operational visibility using practical automation, software and AI.",
    },
    ur: {
      title: "پاکستانی کاروباروں کے لیے بزنس آٹومیشن اور AI",
      description:
        "کام آٹومیشن پاکستانی کاروباروں کو بار بار ہونے والا کام خودکار بنانے، وقت بچانے اور کاروبار پر بہتر کنٹرول حاصل کرنے میں مدد کرتا ہے۔",
    },
  }[locale];

  return {
    title: metadata.title,
    description: metadata.description,

    openGraph: {
      title: metadata.title,
      description: metadata.description,
      siteName: "Kaam Automation",
      type: "website",
      locale: locale === "ur" ? "ur_PK" : "en_PK",
    },

    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
  };
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