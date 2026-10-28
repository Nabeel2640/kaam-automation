import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/lib/i18n/config";

export const instant = false;

export default async function IndustriesPage({
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
      label: "Industries",
      title: "Automation for Businesses Across Pakistan",
      description:
        "Different industries have different workflows, but many face the same problems: repeated manual work, scattered information and limited visibility for owners.",
      industries: [
        {
          title: "Distributors & Wholesalers",
          text: "Improve order processing, stock updates, customer follow-ups, sales reporting and daily operational visibility.",
        },
        {
          title: "Factories & Manufacturers",
          text: "Organize production updates, approvals, inventory movement, reporting and routine operational workflows.",
        },
        {
          title: "Retail & Multi-Branch Stores",
          text: "Connect branch information, monitor stock and sales, automate reports and reduce repeated manual updates.",
        },
        {
          title: "Schools & Colleges",
          text: "Improve admissions, fee reminders, attendance workflows, staff coordination and routine communication.",
        },
        {
          title: "Clinics, Hospitals & Pharmacies",
          text: "Organize appointments, reminders, records, stock updates and administrative workflows more efficiently.",
        },
        {
          title: "Restaurants & Food Businesses",
          text: "Improve order tracking, inventory visibility, staff coordination, reporting and routine management tasks.",
        },
        {
          title: "Logistics & Delivery Businesses",
          text: "Organize delivery updates, assignments, customer communication, status tracking and operational reporting.",
        },
        {
          title: "Service Businesses",
          text: "Automate lead follow-ups, quotations, task management, customer updates and recurring administrative work.",
        },
      ],
      closingTitle: "Not Sure If Your Business Can Be Automated?",
      closingText:
        "You do not need to know the technical solution. Tell us what takes too much time or causes confusion, and we will help identify where automation may help.",
    },
    ur: {
      label: "صنعتیں",
      title: "پاکستان کے مختلف کاروباروں کے لیے آٹومیشن",
      description:
        "ہر صنعت کے کام کا طریقہ مختلف ہوتا ہے، لیکن بہت سے کاروبار ایک جیسے مسائل کا سامنا کرتے ہیں: بار بار دستی کام، بکھری ہوئی معلومات اور مالک کے لیے کم واضح نگرانی۔",
      industries: [
        {
          title: "ڈسٹری بیوٹرز اور ہول سیلرز",
          text: "آرڈر پراسیسنگ، اسٹاک اپڈیٹس، کسٹمر فالو اَپ، سیلز رپورٹنگ اور روزمرہ آپریشنز کو بہتر بنائیں۔",
        },
        {
          title: "فیکٹریاں اور مینوفیکچررز",
          text: "پروڈکشن اپڈیٹس، منظوری، انوینٹری موومنٹ، رپورٹنگ اور روزمرہ ورک فلو کو منظم کریں۔",
        },
        {
          title: "ریٹیل اور ملٹی برانچ اسٹورز",
          text: "برانچ ڈیٹا، اسٹاک، سیلز اور رپورٹس کو بہتر طریقے سے جوڑیں اور دستی اپڈیٹس کم کریں۔",
        },
        {
          title: "اسکول اور کالجز",
          text: "داخلہ، فیس یاد دہانی، حاضری، اسٹاف کوآرڈینیشن اور روزمرہ رابطے کو بہتر بنائیں۔",
        },
        {
          title: "کلینکس، ہسپتال اور فارمیسیاں",
          text: "اپائنٹمنٹس، یاد دہانی، ریکارڈ، اسٹاک اپڈیٹس اور انتظامی کام کو زیادہ منظم بنائیں۔",
        },
        {
          title: "ریسٹورنٹس اور فوڈ بزنس",
          text: "آرڈرز، انوینٹری، اسٹاف کوآرڈینیشن، رپورٹنگ اور روزمرہ مینجمنٹ کو بہتر بنائیں۔",
        },
        {
          title: "لاجسٹکس اور ڈیلیوری بزنس",
          text: "ڈیلیوری اپڈیٹس، اسائنمنٹس، کسٹمر رابطے، اسٹیٹس ٹریکنگ اور رپورٹنگ کو منظم کریں۔",
        },
        {
          title: "سروس بزنس",
          text: "لیڈ فالو اَپ، کوٹیشن، ٹاسک مینجمنٹ، کسٹمر اپڈیٹس اور بار بار ہونے والے انتظامی کام خودکار بنائیں۔",
        },
      ],
      closingTitle: "پتہ نہیں آپ کے کاروبار میں کیا خودکار ہو سکتا ہے؟",
      closingText:
        "آپ کو تکنیکی حل جاننے کی ضرورت نہیں۔ بس ہمیں بتائیں کون سا کام زیادہ وقت لیتا ہے یا الجھن پیدا کرتا ہے، ہم دیکھیں گے کہاں آٹومیشن مدد کر سکتی ہے۔",
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-xl font-bold text-slate-950">
                {industry.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {industry.text}
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