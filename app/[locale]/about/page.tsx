import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/lib/i18n/config";

export const instant = false;

export default async function AboutPage({
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
      label: "About Kaam Automation",
      title: "Business Automation Built for Pakistani Businesses",
      description:
        "Kaam Automation helps businesses reduce repetitive manual work, improve visibility and build simpler digital workflows using automation, software and AI.",
      missionTitle: "Our Mission",
      missionText:
        "Our goal is to make practical automation easier to understand and easier to use for businesses in Pakistan. We focus on real operational problems rather than complicated technology jargon.",
      approachTitle: "Our Approach",
      approachText:
        "We start with the business process first. We understand what is slowing the team down, where information is scattered and where owners lack visibility. Then we recommend the simplest useful solution.",
      principles: [
        {
          title: "Business First",
          text: "We focus on the actual business problem before choosing any technology.",
        },
        {
          title: "Simple, Practical Solutions",
          text: "Automation should make work easier, not create another complicated system for the team.",
        },
        {
          title: "Use What Already Works",
          text: "If your current software can be improved or connected, we explore that before replacing everything.",
        },
        {
          title: "AI Where It Helps",
          text: "AI is used only where it adds real value to the workflow, reporting or decision support.",
        },
      ],
      closingTitle: "Business First. AI Second.",
      closingText:
        "The goal is not to add technology for the sake of technology. The goal is to save time, reduce unnecessary manual work and help businesses stay in control.",
    },
    ur: {
      label: "کام آٹومیشن کے بارے میں",
      title: "پاکستانی کاروباروں کے لیے بزنس آٹومیشن",
      description:
        "کام آٹومیشن کاروباروں کو بار بار ہونے والا دستی کام کم کرنے، بہتر نگرانی حاصل کرنے اور آسان ڈیجیٹل ورک فلو بنانے میں مدد کرتا ہے۔",
      missionTitle: "ہمارا مقصد",
      missionText:
        "ہمارا مقصد پاکستان کے کاروباروں کے لیے عملی آٹومیشن کو سمجھنا اور استعمال کرنا آسان بنانا ہے۔ ہم پیچیدہ ٹیکنالوجی کے بجائے حقیقی کاروباری مسائل پر توجہ دیتے ہیں۔",
      approachTitle: "ہمارا طریقہ",
      approachText:
        "ہم پہلے کاروباری عمل سمجھتے ہیں۔ دیکھتے ہیں ٹیم کا وقت کہاں ضائع ہو رہا ہے، معلومات کہاں بکھری ہوئی ہیں اور مالک کو کہاں واضح نگرانی نہیں مل رہی۔ پھر سب سے آسان اور فائدہ مند حل تجویز کیا جاتا ہے۔",
      principles: [
        {
          title: "پہلے کاروبار",
          text: "کسی بھی ٹیکنالوجی کے انتخاب سے پہلے اصل کاروباری مسئلے پر توجہ دی جاتی ہے۔",
        },
        {
          title: "سادہ اور عملی حل",
          text: "آٹومیشن کام کو آسان بنائے، ٹیم کے لیے ایک اور پیچیدہ نظام نہ بنے۔",
        },
        {
          title: "موجودہ نظام کا بہتر استعمال",
          text: "اگر موجودہ سافٹ ویئر کو بہتر یا مربوط کیا جا سکتا ہو تو پہلے وہ راستہ دیکھا جاتا ہے۔",
        },
        {
          title: "AI صرف جہاں فائدہ ہو",
          text: "AI صرف وہاں استعمال کیا جاتا ہے جہاں ورک فلو، رپورٹنگ یا فیصلہ سازی میں حقیقی فائدہ ہو۔",
        },
      ],
      closingTitle: "پہلے کاروبار، پھر AI",
      closingText:
        "مقصد صرف ٹیکنالوجی شامل کرنا نہیں۔ مقصد وقت بچانا، غیر ضروری دستی کام کم کرنا اور کاروبار پر بہتر کنٹرول حاصل کرنا ہے۔",
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

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            {content.missionTitle}
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            {content.missionText}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-950">
            {content.approachTitle}
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            {content.approachText}
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {content.principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <h2 className="text-xl font-bold text-slate-950">
                  {principle.title}
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  {principle.text}
                </p>
              </div>
            ))}
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