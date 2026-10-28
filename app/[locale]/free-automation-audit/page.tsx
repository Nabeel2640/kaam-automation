import { notFound } from "next/navigation";

import { AuditForm } from "@/components/forms/AuditForm";
import { isLocale, type Locale } from "@/lib/i18n/config";

export const instant = false;

export default async function FreeAutomationAuditPage({
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
      label: "Free Automation Audit",
      title: "Tell Us What Is Slowing Your Business Down",
      description:
        "Share a few details about your business and the work that takes too much time. We will use this information to understand where automation may help.",
      note: "No technical knowledge is required.",
    },
    ur: {
      label: "مفت آٹومیشن آڈٹ",
      title:
        "ہمیں بتائیں آپ کے کاروبار میں سب سے زیادہ وقت کہاں ضائع ہوتا ہے",
      description:
        "اپنے کاروبار اور وقت لینے والے کام کے بارے میں چند تفصیلات بتائیں۔ ہم سمجھیں گے کہ آٹومیشن کہاں مدد کر سکتی ہے۔",
      note: "کسی تکنیکی معلومات کی ضرورت نہیں۔",
    },
  }[locale];

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-teal-600">
            {content.label}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            {content.title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {content.description}
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          <AuditForm locale={locale} />

          <p className="mt-4 text-center text-sm text-slate-500">
            {content.note}
          </p>
        </div>
      </section>
    </main>
  );
}