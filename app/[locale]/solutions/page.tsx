import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/lib/i18n/config";

export const instant = false;

export default async function SolutionsPage({
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
      label: "Solutions",
      title: "Practical Automation Solutions for Growing Businesses",
      description:
        "Our solutions are designed around real business problems: too much manual work, scattered information, slow follow-ups and limited visibility.",
      solutions: [
        {
          title: "Lead & Sales Automation",
          text: "Capture leads, organize inquiries, automate follow-ups and reduce missed sales opportunities.",
        },
        {
          title: "Order & Workflow Automation",
          text: "Create clearer processes for incoming orders, approvals, task assignments and routine operational work.",
        },
        {
          title: "Inventory & Stock Visibility",
          text: "Improve stock tracking, movement updates, low-stock alerts and reporting without relying only on manual checks.",
        },
        {
          title: "Reports & Dashboards",
          text: "Turn business data into simple dashboards and reports so owners can see important information faster.",
        },
        {
          title: "Existing Software Integration",
          text: "Connect with ERP, accounting, POS or other existing software where possible instead of replacing everything.",
        },
        {
          title: "AI-Assisted Business Work",
          text: "Use AI where it genuinely helps, such as summarizing information, assisting staff, identifying patterns or improving decision support.",
        },
      ],
      processTitle: "The Right Solution Depends on Your Business",
      processText:
        "We do not force every business into the same software. We first understand your workflow, then recommend the simplest useful solution.",
      closingTitle: "Not Sure Which Solution You Need?",
      closingText:
        "That is exactly what the Free Automation Audit is for. Tell us the problem, and we will help identify the right direction.",
    },
    ur: {
      label: "حل",
      title: "بڑھتے ہوئے کاروباروں کے لیے عملی آٹومیشن حل",
      description:
        "ہمارے حل حقیقی کاروباری مسائل کے مطابق بنائے جاتے ہیں: زیادہ دستی کام، بکھری معلومات، سست فالو اَپ اور کم واضح نگرانی۔",
      solutions: [
        {
          title: "لیڈ اور سیلز آٹومیشن",
          text: "لیڈز جمع کریں، انکوائریز منظم کریں، فالو اَپ خودکار بنائیں اور سیلز کے مواقع ضائع ہونے سے بچائیں۔",
        },
        {
          title: "آرڈر اور ورک فلو آٹومیشن",
          text: "آنے والے آرڈرز، منظوری، ٹاسک اسائنمنٹ اور روزمرہ آپریشنز کے لیے واضح ورک فلو بنائیں۔",
        },
        {
          title: "انوینٹری اور اسٹاک کی بہتر نگرانی",
          text: "اسٹاک ٹریکنگ، موومنٹ اپڈیٹس، کم اسٹاک الرٹس اور رپورٹنگ کو بہتر بنائیں۔",
        },
        {
          title: "رپورٹس اور ڈیش بورڈ",
          text: "کاروباری ڈیٹا کو آسان رپورٹس اور ڈیش بورڈ میں تبدیل کریں تاکہ مالک اہم معلومات جلد دیکھ سکے۔",
        },
        {
          title: "موجودہ سافٹ ویئر انٹیگریشن",
          text: "جہاں ممکن ہو ERP، اکاؤنٹنگ، POS یا دوسرے موجودہ سافٹ ویئر کے ساتھ انٹیگریشن کریں، پورا نظام بدلنے کی ضرورت نہیں۔",
        },
        {
          title: "AI کی مدد سے کاروباری کام",
          text: "AI صرف وہاں استعمال کریں جہاں حقیقی فائدہ ہو، جیسے معلومات کا خلاصہ، اسٹاف کی مدد، پیٹرن شناخت یا بہتر فیصلہ سازی۔",
        },
      ],
      processTitle: "صحیح حل آپ کے کاروبار پر منحصر ہے",
      processText:
        "ہم ہر کاروبار پر ایک ہی سافٹ ویئر نہیں تھوپتے۔ پہلے ورک فلو سمجھتے ہیں، پھر سب سے آسان اور فائدہ مند حل تجویز کرتے ہیں۔",
      closingTitle: "پتہ نہیں آپ کو کون سا حل چاہیے؟",
      closingText:
        "اسی لیے مفت آٹومیشن آڈٹ موجود ہے۔ ہمیں مسئلہ بتائیں، ہم صحیح سمت شناخت کرنے میں مدد کریں گے۔",
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
          {content.solutions.map((solution) => (
            <div
              key={solution.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="text-xl font-bold text-slate-950">
                {solution.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {solution.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-20">
          <h2 className="text-3xl font-bold text-slate-950">
            {content.processTitle}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {content.processText}
          </p>
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