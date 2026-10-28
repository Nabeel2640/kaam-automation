import Link from "next/link";
import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/lib/i18n/config";

export const instant = false;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;
  const isUrdu = locale === "ur";

  const content = isUrdu
    ? {
        eyebrow: "پاکستانی کاروباروں کے لیے",
        headline: "اپنے کاروبار کے کام خودکار بنائیں۔",
        subheadline:
          "بار بار ہونے والے دستی کام کم کریں، وقت بچائیں اور اپنے کاروبار کو بہتر طریقے سے کنٹرول کریں۔",
        primaryCta: "مفت آٹومیشن جائزہ حاصل کریں",
        secondaryCta: "دیکھیں ہم کیا خودکار کر سکتے ہیں",
        noTechnical: "کسی تکنیکی معلومات کی ضرورت نہیں۔",

        problemsTitle: "کیا آپ کے کاروبار میں بھی ایسا ہوتا ہے؟",
        problems: [
          "روزانہ وہی رپورٹ دوبارہ بنانی پڑتی ہے",
          "آرڈرز WhatsApp، کال اور کاغذ پر بکھرے ہوتے ہیں",
          "مالک کو اصل اسٹاک جاننے کے لیے عملے سے پوچھنا پڑتا ہے",
          "کس کسٹمر کی کتنی رقم باقی ہے، واضح نہیں ہوتا",
          "چھوٹے approvals کے لیے بھی مالک کو فون کرنا پڑتا ہے",
          "ایک ہی ڈیٹا کئی جگہ دوبارہ درج کیا جاتا ہے",
        ],

        automateTitle: "ہم کیا خودکار کر سکتے ہیں؟",
        automate: [
          {
            title: "آرڈرز",
            before: "پہلے: WhatsApp، کالز اور کاغذ",
            after: "بعد میں: ایک منظم آرڈر سسٹم",
          },
          {
            title: "اسٹاک",
            before: "پہلے: دستی اسٹاک چیک",
            after: "بعد میں: لائیو اسٹاک اور الرٹس",
          },
          {
            title: "رپورٹس",
            before: "پہلے: روزانہ Excel رپورٹ",
            after: "بعد میں: خودکار ڈیش بورڈ",
          },
          {
            title: "ادائیگیاں",
            before: "پہلے: دستی follow-up",
            after: "بعد میں: outstanding tracking اور reminders",
          },
          {
            title: "Approvals",
            before: "پہلے: مالک کو فون",
            after: "بعد میں: موبائل سے approve یا reject",
          },
          {
            title: "کاروباری معلومات",
            before: "پہلے: Excel، WhatsApp اور کاغذ",
            after: "بعد میں: اہم معلومات ایک جگہ",
          },
        ],

        howTitle: "یہ کیسے کام کرتا ہے؟",
        steps: [
          "آپ ہمیں بتاتے ہیں کہ آپ کا کاروبار کیسے چلتا ہے",
          "ہم دستی اور بار بار ہونے والے کام شناخت کرتے ہیں",
          "ہم مناسب آٹومیشن تجویز کرتے ہیں",
          "پہلے ایک چھوٹے اور اہم کام سے آغاز کرتے ہیں",
          "نتائج دیکھتے ہیں",
          "جو کام کامیاب ہو اسے مزید بڑھاتے ہیں",
        ],

        industriesTitle: "کن کاروباروں کے لیے؟",
        industries: [
          "Distributors & Wholesalers",
          "Factories & Manufacturing",
          "Retail & Multi-Branch Stores",
          "Schools & Colleges",
          "Hospitals & Clinics",
          "Warehouses & Logistics",
        ],

        softwareTitle: "پہلے سے کوئی سافٹ ویئر استعمال کر رہے ہیں؟",
        softwareText:
          "ضروری نہیں کہ اسے تبدیل کیا جائے۔ جہاں ممکن ہو ہم موجودہ سسٹم کو dashboards، reports، alerts اور automation کے ساتھ بہتر بنا سکتے ہیں۔",

        manualTitle: "ابھی Excel، WhatsApp یا کاغذ پر کام کر رہے ہیں؟",
        manualText:
          "ہم دیکھ سکتے ہیں کہ آیا آپ کے کاروبار کے لیے ایک سادہ digital system مناسب ہے جس سے ٹیم اپنا روزمرہ کام آسانی سے درج کرے اور مالک اہم معلومات موبائل پر دیکھ سکے۔",

        finalTitle: "اپنا سب سے مشکل دستی کام ہمیں بتائیں۔",
        finalText:
          "ہم پہلے آپ کا موجودہ طریقہ سمجھیں گے، پھر بتائیں گے کہ حقیقت میں کیا خودکار کیا جا سکتا ہے۔",
        finalCta: "مفت آٹومیشن جائزہ",
      }
    : {
        eyebrow: "For Pakistani Businesses",
        headline: "Automate Your Business. Save Time. Stay in Control.",
        subheadline:
          "Reduce repetitive manual work, organize your operations and give owners a clearer view of what is happening in the business.",
        primaryCta: "Get a Free Automation Audit",
        secondaryCta: "See What We Can Automate",
        noTechnical: "No technical knowledge required.",

        problemsTitle: "Does this happen in your business?",
        problems: [
          "Your team prepares the same report every day",
          "Orders are scattered across WhatsApp, calls and paper",
          "The owner has to ask staff to know the real stock",
          "Customer outstanding payments are difficult to track",
          "Staff repeatedly calls the owner for approvals",
          "The same information is entered in multiple places",
        ],

        automateTitle: "What can we automate?",
        automate: [
          {
            title: "Orders",
            before: "Before: WhatsApp, calls and paper",
            after: "After: One organized order system",
          },
          {
            title: "Inventory",
            before: "Before: Manual stock checking",
            after: "After: Live stock records and alerts",
          },
          {
            title: "Reports",
            before: "Before: Daily Excel reports",
            after: "After: Automatic dashboard",
          },
          {
            title: "Payments",
            before: "Before: Manual follow-ups",
            after: "After: Outstanding tracking and reminders",
          },
          {
            title: "Approvals",
            before: "Before: Phone calls to the owner",
            after: "After: Approve or reject from mobile",
          },
          {
            title: "Business Information",
            before: "Before: Excel, WhatsApp and paper",
            after: "After: Important information in one place",
          },
        ],

        howTitle: "How does it work?",
        steps: [
          "Tell us how your business currently works",
          "We identify repetitive and manual work",
          "We recommend practical automation",
          "We start with one useful workflow",
          "We measure the result",
          "We expand what works",
        ],

        industriesTitle: "Who can we help?",
        industries: [
          "Distributors & Wholesalers",
          "Factories & Manufacturing",
          "Retail & Multi-Branch Stores",
          "Schools & Colleges",
          "Hospitals & Clinics",
          "Warehouses & Logistics",
        ],

        softwareTitle: "Already using software?",
        softwareText:
          "You may not need to replace it. Where possible, we can improve existing systems with dashboards, reports, alerts and automation.",

        manualTitle: "Still using Excel, WhatsApp or paper?",
        manualText:
          "We can evaluate whether a simple digital system can help your team record daily work while giving the owner better visibility from mobile.",

        finalTitle: "Tell us the most frustrating manual work in your business.",
        finalText:
          "We first understand how you work, then identify what can realistically be automated.",
        finalCta: "Get a Free Automation Audit",
      };

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-wider text-teal-600">
              {content.eyebrow}
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              {content.headline}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {content.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/free-automation-audit`}
                className="rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-800"
              >
                {content.primaryCta}
              </Link>

              <a
                href="#automation"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                {content.secondaryCta}
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-500">{content.noTechnical}</p>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">
          {content.problemsTitle}
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.problems.map((problem) => (
            <div
              key={problem}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 font-bold text-teal-700">
                !
              </div>
              <p className="font-medium leading-7 text-slate-700">{problem}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AUTOMATION */}
      <section id="automation" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">
            {content.automateTitle}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.automate.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-5 text-sm text-slate-500">{item.before}</p>
                <div className="my-3 text-teal-600">↓</div>
                <p className="font-semibold text-slate-900">{item.after}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">{content.howTitle}</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.steps.map((step, index) => (
            <div key={step} className="flex gap-4 rounded-2xl bg-slate-50 p-6">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 font-bold text-white">
                {index + 1}
              </div>
              <p className="pt-1 font-medium leading-7 text-slate-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOFTWARE / MANUAL */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-700 p-8">
            <h2 className="text-2xl font-bold">{content.softwareTitle}</h2>
            <p className="mt-4 leading-8 text-slate-300">
              {content.softwareText}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 p-8">
            <h2 className="text-2xl font-bold">{content.manualTitle}</h2>
            <p className="mt-4 leading-8 text-slate-300">
              {content.manualText}
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">
          {content.industriesTitle}
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.industries.map((industry) => (
            <div
              key={industry}
              className="rounded-xl border border-slate-200 px-5 py-5 font-semibold"
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-slate-200 bg-teal-50">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            {content.finalTitle}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            {content.finalText}
          </p>

          <Link
            href={`/${locale}/free-automation-audit`}
            className="mt-8 inline-flex rounded-xl bg-slate-900 px-7 py-4 font-semibold text-white hover:bg-slate-800"
          >
            {content.finalCta}
          </Link>
        </div>
      </section>
    </main>
  );
}