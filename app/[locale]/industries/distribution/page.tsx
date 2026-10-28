import Link from "next/link";
import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/lib/i18n/config";

export const instant = false;

export default async function DistributionIndustryPage({
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
      label: "Distribution Industry",
      title: "Automation for Distributors & Wholesalers",
      description:
        "Distribution businesses often manage orders, stock, sales teams, customer follow-ups and reporting across multiple tools. Automation can help bring these processes together and reduce repeated manual work.",
      challengesTitle: "Common Challenges",
      challenges: [
        {
          title: "Orders Coming From Different Channels",
          text: "Orders may come through WhatsApp, phone calls, sales staff, email or paper, making tracking and coordination difficult.",
        },
        {
          title: "Stock Visibility Problems",
          text: "Sales teams and owners may not always have a clear, up-to-date picture of available stock.",
        },
        {
          title: "Manual Follow-Ups",
          text: "Customer follow-ups, quotations and payment reminders may depend too much on individual staff members.",
        },
        {
          title: "Slow Reporting",
          text: "Owners may have to collect daily or weekly information manually from different departments before they can see what is happening.",
        },
      ],
      automationTitle: "What Can Be Automated",
      automation: [
        {
          title: "Order Management",
          text: "Capture and organize orders in a consistent workflow with clearer status tracking.",
        },
        {
          title: "Inventory Alerts",
          text: "Create stock updates, low-stock alerts and better inventory visibility.",
        },
        {
          title: "Sales Follow-Up",
          text: "Automate reminders and organize leads, quotations and customer follow-ups.",
        },
        {
          title: "Owner Dashboards",
          text: "Bring sales, stock, orders and other important information into simple reports or dashboards.",
        },
        {
          title: "Payment Reminders",
          text: "Organize routine customer payment reminders and outstanding follow-ups.",
        },
        {
          title: "Existing Software Integration",
          text: "Connect with ERP, accounting or inventory systems where possible instead of replacing everything.",
        },
      ],
      exampleTitle: "A Simple Example",
      exampleText:
        "A distributor may receive an order on WhatsApp, enter it into Excel, inform the warehouse manually and later update the owner through a separate report. A better workflow can connect these steps so the same information does not need to be entered again and again.",
      closingTitle: "Start With the Biggest Time-Wasting Process",
      closingText:
        "You do not need to automate everything at once. Start with the process that creates the most delays, repeated work or confusion.",
      cta: "Request a Free Automation Audit",
    },
    ur: {
      label: "ڈسٹری بیوشن انڈسٹری",
      title: "ڈسٹری بیوٹرز اور ہول سیلرز کے لیے آٹومیشن",
      description:
        "ڈسٹری بیوشن کاروبار اکثر آرڈرز، اسٹاک، سیلز ٹیم، کسٹمر فالو اَپ اور رپورٹنگ کو مختلف ٹولز کے ذریعے سنبھالتے ہیں۔ آٹومیشن ان کاموں کو بہتر طریقے سے جوڑنے اور بار بار ہونے والا دستی کام کم کرنے میں مدد کر سکتی ہے۔",
      challengesTitle: "عام مسائل",
      challenges: [
        {
          title: "مختلف ذرائع سے آنے والے آرڈرز",
          text: "آرڈرز واٹس ایپ، فون کال، سیلز اسٹاف، ای میل یا کاغذ کے ذریعے آ سکتے ہیں، جس سے ٹریکنگ اور کوآرڈینیشن مشکل ہو جاتی ہے۔",
        },
        {
          title: "اسٹاک کی واضح معلومات نہ ہونا",
          text: "سیلز ٹیم اور مالک کو ہمیشہ دستیاب اسٹاک کی تازہ اور واضح صورتحال نہیں ملتی۔",
        },
        {
          title: "دستی فالو اَپ",
          text: "کسٹمر فالو اَپ، کوٹیشن اور ادائیگی یاد دہانی اکثر انفرادی اسٹاف پر زیادہ منحصر ہوتی ہے۔",
        },
        {
          title: "سست رپورٹنگ",
          text: "مالک کو روزانہ یا ہفتہ وار صورتحال سمجھنے کے لیے مختلف شعبوں سے معلومات دستی طور پر جمع کرنا پڑتی ہیں۔",
        },
      ],
      automationTitle: "کون سے کام خودکار بنائے جا سکتے ہیں",
      automation: [
        {
          title: "آرڈر مینجمنٹ",
          text: "آرڈرز کو ایک منظم ورک فلو میں جمع کریں اور ان کی صورتحال آسانی سے ٹریک کریں۔",
        },
        {
          title: "انوینٹری الرٹس",
          text: "اسٹاک اپڈیٹس، کم اسٹاک الرٹس اور بہتر انوینٹری نگرانی حاصل کریں۔",
        },
        {
          title: "سیلز فالو اَپ",
          text: "لیڈز، کوٹیشن اور کسٹمر فالو اَپ کے لیے یاد دہانی اور منظم نظام بنائیں۔",
        },
        {
          title: "اونر ڈیش بورڈ",
          text: "سیلز، اسٹاک، آرڈرز اور اہم کاروباری معلومات کو آسان رپورٹس یا ڈیش بورڈ میں دیکھیں۔",
        },
        {
          title: "ادائیگی یاد دہانی",
          text: "کسٹمر بقایا اور ادائیگی فالو اَپ کو زیادہ منظم بنائیں۔",
        },
        {
          title: "موجودہ سافٹ ویئر انٹیگریشن",
          text: "جہاں ممکن ہو ERP، اکاؤنٹنگ یا انوینٹری سسٹم کے ساتھ انٹیگریشن کریں، پورا نظام بدلنے کی ضرورت نہیں۔",
        },
      ],
      exampleTitle: "ایک آسان مثال",
      exampleText:
        "ایک ڈسٹری بیوٹر واٹس ایپ پر آرڈر لیتا ہے، پھر ایکسِل میں درج کرتا ہے، گودام کو الگ سے بتاتا ہے اور بعد میں مالک کو علیحدہ رپورٹ دیتا ہے۔ بہتر ورک فلو ان مراحل کو آپس میں جوڑ سکتا ہے تاکہ ایک ہی معلومات بار بار درج نہ کرنی پڑے۔",
      closingTitle: "سب سے زیادہ وقت لینے والے کام سے آغاز کریں",
      closingText:
        "ضروری نہیں کہ سب کچھ ایک ساتھ خودکار کیا جائے۔ پہلے اس عمل سے آغاز کریں جو سب سے زیادہ تاخیر، بار بار کام یا الجھن پیدا کرتا ہے۔",
      cta: "مفت آٹومیشن آڈٹ حاصل کریں",
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
        <h2 className="text-3xl font-bold text-slate-950">
          {content.challengesTitle}
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {content.challenges.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="text-3xl font-bold text-slate-950">
            {content.automationTitle}
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.automation.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <h3 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <div className="rounded-3xl bg-slate-950 p-8 md:p-10">
          <h2 className="text-3xl font-bold text-white">
            {content.exampleTitle}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            {content.exampleText}
          </p>
        </div>
      </section>

      <section className="bg-teal-50">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
            {content.closingTitle}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {content.closingText}
          </p>

          <Link
            href={`/${locale}/free-automation-audit`}
            className="mt-8 inline-flex rounded-xl bg-teal-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-teal-400"
          >
            {content.cta}
          </Link>
        </div>
      </section>
    </main>
  );
}