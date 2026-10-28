import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/lib/i18n/config";

export const instant = false;

export default async function ContactPage({
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
      label: "Contact",
      title: "Let’s Talk About Your Business",
      description:
        "If you are not sure where to start, tell us what is slowing your business down. We will help identify where automation may be useful.",
      emailTitle: "Email",
      emailText:
        "You can contact us by email for general questions, partnerships or business inquiries.",
      whatsappTitle: "WhatsApp",
      whatsappText:
        "For quick questions and business discussions, WhatsApp can be the easiest way to reach us.",
      auditTitle: "Free Automation Audit",
      auditText:
        "If you already know which process is taking too much time, submit the Free Automation Audit form and share the details with us.",
      closingTitle: "Start With the Problem, Not the Technology",
      closingText:
        "You do not need to know which software, automation tool or AI solution you need. Just explain the business problem.",
    },
    ur: {
      label: "رابطہ",
      title: "اپنے کاروبار کے بارے میں ہم سے بات کریں",
      description:
        "اگر آپ کو سمجھ نہیں آ رہا کہاں سے آغاز کریں، ہمیں بتائیں آپ کے کاروبار میں کون سا کام وقت ضائع کر رہا ہے۔ ہم دیکھیں گے آٹومیشن کہاں فائدہ دے سکتی ہے۔",
      emailTitle: "ای میل",
      emailText:
        "عام سوالات، پارٹنرشپ یا کاروباری رابطے کے لیے آپ ہمیں ای میل کر سکتے ہیں۔",
      whatsappTitle: "واٹس ایپ",
      whatsappText:
        "فوری سوال یا کاروباری گفتگو کے لیے واٹس ایپ آسان طریقہ ہو سکتا ہے۔",
      auditTitle: "مفت آٹومیشن آڈٹ",
      auditText:
        "اگر آپ جانتے ہیں کون سا کام زیادہ وقت لے رہا ہے تو مفت آٹومیشن آڈٹ فارم کے ذریعے تفصیلات بھیجیں۔",
      closingTitle: "ٹیکنالوجی سے نہیں، مسئلے سے آغاز کریں",
      closingText:
        "آپ کو یہ جاننے کی ضرورت نہیں کہ کون سا سافٹ ویئر، آٹومیشن ٹول یا AI حل چاہیے۔ بس کاروباری مسئلہ بتائیں۔",
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
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              {content.emailTitle}
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              {content.emailText}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              {content.whatsappTitle}
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              {content.whatsappText}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">
              {content.auditTitle}
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              {content.auditText}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {content.closingTitle}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {content.closingText}
          </p>
        </div>
      </section>
    </main>
  );
}