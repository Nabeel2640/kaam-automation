import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/lib/i18n/config";

export const instant = false;

export default async function HowItWorksPage({
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
      label: "How It Works",
      title: "Simple Process. Practical Automation.",
      description:
        "We start with your actual business problem, understand how work is currently done and then identify where automation can make the biggest difference.",
      steps: [
        {
          number: "01",
          title: "Tell Us the Problem",
          text: "You explain which work takes too much time, creates confusion or depends heavily on manual follow-up.",
        },
        {
          number: "02",
          title: "We Understand the Workflow",
          text: "We look at how the process currently works, who is involved, what tools are being used and where delays happen.",
        },
        {
          number: "03",
          title: "We Identify Automation Opportunities",
          text: "We find the parts that can be simplified, connected or automated without adding unnecessary complexity.",
        },
        {
          number: "04",
          title: "We Build the Right Solution",
          text: "The solution may use automation, dashboards, integrations, software or AI depending on what the business actually needs.",
        },
        {
          number: "05",
          title: "We Test and Improve",
          text: "The workflow is tested in real use and adjusted so it fits the business instead of forcing the business to fit the technology.",
        },
      ],
      existingTitle: "Already Using Software?",
      existingText:
        "That is not a problem. We can explore ways to connect with your existing ERP, accounting, POS or other tools instead of replacing everything.",
      manualTitle: "Still Using Excel, WhatsApp or Paper?",
      manualText:
        "That is also fine. Many businesses start there. We can first organize the workflow and then automate the most useful parts step by step.",
      closingTitle: "Start With a Free Automation Audit",
      closingText:
        "Tell us what is taking too much time in your business. We will help identify where automation may be useful.",
    },
    ur: {
      label: "یہ کیسے کام کرتا ہے",
      title: "سادہ طریقہ۔ عملی آٹومیشن۔",
      description:
        "ہم آپ کے اصل کاروباری مسئلے سے آغاز کرتے ہیں، موجودہ طریقہ کار سمجھتے ہیں اور پھر دیکھتے ہیں کہ آٹومیشن کہاں سب سے زیادہ فائدہ دے سکتی ہے۔",
      steps: [
        {
          number: "01",
          title: "ہمیں مسئلہ بتائیں",
          text: "آپ ہمیں بتائیں کون سا کام زیادہ وقت لیتا ہے، الجھن پیدا کرتا ہے یا بہت زیادہ دستی فالو اَپ پر چلتا ہے۔",
        },
        {
          number: "02",
          title: "ہم موجودہ ورک فلو سمجھتے ہیں",
          text: "ہم دیکھتے ہیں کام ابھی کیسے ہوتا ہے، کون لوگ شامل ہیں، کون سے ٹولز استعمال ہوتے ہیں اور تاخیر کہاں ہوتی ہے۔",
        },
        {
          number: "03",
          title: "آٹومیشن کے مواقع تلاش کرتے ہیں",
          text: "ہم ایسے حصے تلاش کرتے ہیں جنہیں آسان، مربوط یا خودکار بنایا جا سکتا ہے بغیر غیر ضروری پیچیدگی کے۔",
        },
        {
          number: "04",
          title: "مناسب حل تیار کرتے ہیں",
          text: "ضرورت کے مطابق آٹومیشن، ڈیش بورڈ، انٹیگریشن، سافٹ ویئر یا AI استعمال کیا جا سکتا ہے۔",
        },
        {
          number: "05",
          title: "ٹیسٹ اور بہتری",
          text: "حل کو اصل کام میں ٹیسٹ کیا جاتا ہے اور بہتر کیا جاتا ہے تاکہ ٹیکنالوجی کاروبار کے مطابق ہو۔",
        },
      ],
      existingTitle: "پہلے سے سافٹ ویئر استعمال کر رہے ہیں؟",
      existingText:
        "یہ مسئلہ نہیں ہے۔ ہم آپ کے موجودہ ERP، اکاؤنٹنگ، POS یا دوسرے ٹولز کے ساتھ انٹیگریشن کے طریقے دیکھ سکتے ہیں۔",
      manualTitle: "ابھی بھی ایکسِل، واٹس ایپ یا کاغذ استعمال کرتے ہیں؟",
      manualText:
        "یہ بھی ٹھیک ہے۔ بہت سے کاروبار اسی طرح شروع کرتے ہیں۔ پہلے ورک فلو منظم کیا جا سکتا ہے اور پھر اہم حصوں کو مرحلہ وار خودکار بنایا جا سکتا ہے۔",
      closingTitle: "مفت آٹومیشن آڈٹ سے آغاز کریں",
      closingText:
        "ہمیں بتائیں آپ کے کاروبار میں کون سا کام زیادہ وقت لیتا ہے۔ ہم دیکھیں گے کہ آٹومیشن کہاں فائدہ دے سکتی ہے۔",
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

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="space-y-6">
          {content.steps.map((step) => (
            <div
              key={step.number}
              className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:grid-cols-[90px_1fr]"
            >
              <div className="text-3xl font-bold text-teal-500">
                {step.number}
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-950">
                  {step.title}
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2 md:py-20">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              {content.existingTitle}
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              {content.existingText}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-bold text-slate-950">
              {content.manualTitle}
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              {content.manualText}
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