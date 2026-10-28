import Link from "next/link";
import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/lib/i18n/config";

export const instant = false;

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;

  const content = {
    en: {
      label: "Resources",
      title: "Simple Guides About Business Automation",
      description:
        "Practical, easy-to-understand resources for Pakistani business owners who want to understand automation without technical jargon.",
      articles: [
        {
          title: "What Is Business Automation?",
          description:
            "A simple explanation of business automation, what it means and where it can help.",
          href: `/${locale}/resources/what-is-business-automation`,
        },
        {
          title: "Business Automation for Distributors in Pakistan",
          description:
            "Learn where distributors and wholesalers can reduce manual work and improve visibility.",
          href: `/${locale}/resources/business-automation-for-distributors-pakistan`,
        },
        {
          title: "Do You Need to Replace Existing Software to Use AI?",
          description:
            "Understand when existing software can be improved or connected instead of replaced.",
          href: `/${locale}/resources/replace-existing-software-for-ai`,
        },
      ],
    },
    ur: {
      label: "وسائل",
      title: "بزنس آٹومیشن کے بارے میں آسان رہنمائی",
      description:
        "پاکستانی کاروباری مالکان کے لیے آسان اور عملی معلومات تاکہ آٹومیشن کو تکنیکی پیچیدگی کے بغیر سمجھا جا سکے۔",
      articles: [
        {
          title: "بزنس آٹومیشن کیا ہے؟",
          description:
            "بزنس آٹومیشن کیا ہوتی ہے، کیسے کام کرتی ہے اور کہاں فائدہ دے سکتی ہے۔",
          href: `/${locale}/resources/what-is-business-automation`,
        },
        {
          title: "پاکستان میں ڈسٹری بیوٹرز کے لیے بزنس آٹومیشن",
          description:
            "جانیں ڈسٹری بیوٹرز اور ہول سیلرز کہاں دستی کام کم کر سکتے ہیں اور نگرانی بہتر بنا سکتے ہیں۔",
          href: `/${locale}/resources/business-automation-for-distributors-pakistan`,
        },
        {
          title: "کیا AI استعمال کرنے کے لیے موجودہ سافٹ ویئر بدلنا ضروری ہے؟",
          description:
            "سمجھیں کب موجودہ سافٹ ویئر کو بہتر یا مربوط کیا جا سکتا ہے بجائے اسے مکمل طور پر بدلنے کے۔",
          href: `/${locale}/resources/replace-existing-software-for-ai`,
        },
      ],
    },
  }[locale];

  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-teal-600">
            {content.label}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            {content.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {content.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {content.articles.map((article) => (
            <Link
              key={article.title}
              href={article.href}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-slate-950">
                {article.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}