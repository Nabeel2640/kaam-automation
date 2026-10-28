import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/lib/i18n/config";

export const instant = false;

export default async function WhatWeAutomatePage({
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
      label: "What We Automate",
      title: "Turn Repetitive Business Work Into Simple Automated Processes",
      description:
        "We help businesses reduce manual work, organize information and improve day-to-day visibility without making things unnecessarily complicated.",
      sections: [
        {
          title: "Sales & Customer Follow-Up",
          text: "Automate lead capture, follow-ups, reminders, quotations and customer communication so fewer opportunities are missed.",
        },
        {
          title: "Inventory & Stock Updates",
          text: "Reduce manual stock tracking and create clearer visibility of inventory, movement and low-stock situations.",
        },
        {
          title: "Orders & Operations",
          text: "Organize incoming orders, approvals, task assignments and routine operational updates in one clear workflow.",
        },
        {
          title: "Reports & Owner Dashboards",
          text: "Turn business data into simple reports and dashboards so owners can see what is happening without chasing staff for updates.",
        },
        {
          title: "Excel, WhatsApp & Paper Workflows",
          text: "Improve processes that currently depend on spreadsheets, WhatsApp messages, paper records or repeated manual entry.",
        },
        {
          title: "Existing Software Integration",
          text: "If you already use ERP, accounting, POS or other software, we can explore ways to connect, automate or improve the workflow instead of replacing everything.",
        },
      ],
      closingTitle: "Business First. AI Second.",
      closingText:
        "We first understand the actual business process. Then we use automation, software and AI only where they genuinely make the work easier.",
    },
    ur: {
      label: "ہم کیا خودکار بناتے ہیں",
      title: "روزمرہ کے دہرائے جانے والے کام کو آسان خودکار نظام میں بدلیں",
      description:
        "ہم کاروباروں کو دستی کام کم کرنے، معلومات منظم کرنے اور روزمرہ کے کام پر بہتر نظر رکھنے میں مدد کرتے ہیں۔",
      sections: [
        {
          title: "سیلز اور کسٹمر فالو اَپ",
          text: "لیڈز، فالو اَپ، یاد دہانی، کوٹیشن اور کسٹمر رابطے کو بہتر اور خودکار بنایا جا سکتا ہے تاکہ مواقع ضائع نہ ہوں۔",
        },
        {
          title: "انوینٹری اور اسٹاک اپڈیٹس",
          text: "دستی اسٹاک چیکنگ کم کریں اور انوینٹری، اسٹاک موومنٹ اور کم اسٹاک کی صورتحال بہتر طریقے سے دیکھیں۔",
        },
        {
          title: "آرڈرز اور آپریشنز",
          text: "آنے والے آرڈرز، منظوری، کام کی تقسیم اور روزمرہ آپریشنز کو ایک واضح ورک فلو میں منظم کریں۔",
        },
        {
          title: "رپورٹس اور اونر ڈیش بورڈ",
          text: "کاروباری ڈیٹا کو آسان رپورٹس اور ڈیش بورڈ میں تبدیل کریں تاکہ مالک کو ہر اپڈیٹ کے لیے عملے کے پیچھے نہ جانا پڑے۔",
        },
        {
          title: "ایکسِل، واٹس ایپ اور کاغذی کام",
          text: "ایسے کام بہتر کریں جو ابھی ایکسِل، واٹس ایپ، کاغذی ریکارڈ یا بار بار دستی انٹری پر چل رہے ہیں۔",
        },
        {
          title: "موجودہ سافٹ ویئر کے ساتھ انٹیگریشن",
          text: "اگر آپ پہلے سے ERP، اکاؤنٹنگ، POS یا کوئی دوسرا سافٹ ویئر استعمال کرتے ہیں تو پورا نظام بدلنے کے بجائے اسے بہتر یا خودکار بنانے کے طریقے دیکھے جا سکتے ہیں۔",
        },
      ],
      closingTitle: "پہلے کاروبار، پھر AI",
      closingText:
        "ہم پہلے اصل کاروباری مسئلہ سمجھتے ہیں۔ اس کے بعد آٹومیشن، سافٹ ویئر اور AI صرف وہاں استعمال کرتے ہیں جہاں واقعی فائدہ ہو۔",
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
        <div className="grid gap-6 md:grid-cols-2">
          {content.sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-xl font-bold text-slate-950">
                {section.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {section.text}
              </p>
            </div>
          ))}
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