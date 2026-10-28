import Link from "next/link";
import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/lib/i18n/config";

export const instant = false;

export default async function ReplaceExistingSoftwareForAIArticle({
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
      label: "Guide",
      title: "Do You Need to Replace Existing Software to Use AI?",
      intro:
        "Not always. Many businesses can add automation, reporting and AI capabilities around the software they already use instead of replacing the entire system.",
      sections: [
        {
          title: "Start With What You Already Have",
          text: "If your business already uses ERP, accounting, POS, CRM or inventory software, the first step is to understand what that system already does well and where the gaps are.",
        },
        {
          title: "Integration Can Be Better Than Replacement",
          text: "In many cases, existing software can be connected with dashboards, alerts, reports, workflows or other tools. This can be faster and less disruptive than replacing the whole system.",
        },
        {
          title: "When Replacement May Be Necessary",
          text: "Replacement may make sense if the current software is too limited, outdated, difficult to integrate, unreliable or no longer supports the business properly.",
        },
        {
          title: "Where AI Can Help",
          text: "AI can sometimes sit on top of existing systems to summarize information, assist staff, identify patterns, improve search or support decision-making.",
        },
        {
          title: "Good Data Comes First",
          text: "AI works better when business data is organized and reliable. If information is incomplete, scattered or inconsistent, improving the workflow and data quality should come first.",
        },
        {
          title: "Avoid Technology for the Sake of Technology",
          text: "The goal should not be to add AI because it is popular. The goal should be to solve a real business problem in the simplest useful way.",
        },
      ],
      takeawayTitle: "The Practical Approach",
      takeaway:
        "Keep the systems that already work, improve the weak parts and add automation or AI only where it creates clear business value.",
      cta: "Request a Free Automation Audit",
    },
    ur: {
      label: "رہنمائی",
      title: "کیا AI استعمال کرنے کے لیے موجودہ سافٹ ویئر بدلنا ضروری ہے؟",
      intro:
        "ضروری نہیں۔ بہت سے کاروبار اپنے موجودہ سافٹ ویئر کو مکمل طور پر تبدیل کیے بغیر اس کے ساتھ آٹومیشن، رپورٹنگ اور AI کی سہولیات شامل کر سکتے ہیں۔",
      sections: [
        {
          title: "جو پہلے سے موجود ہے، وہیں سے آغاز کریں",
          text: "اگر آپ کا کاروبار پہلے سے ERP، اکاؤنٹنگ، POS، CRM یا انوینٹری سافٹ ویئر استعمال کرتا ہے تو پہلے یہ دیکھیں کہ موجودہ سسٹم کیا اچھا کر رہا ہے اور کہاں کمی موجود ہے۔",
        },
        {
          title: "انٹیگریشن اکثر تبدیلی سے بہتر ہو سکتی ہے",
          text: "بہت سے معاملات میں موجودہ سافٹ ویئر کو ڈیش بورڈ، الرٹس، رپورٹس، ورک فلو یا دوسرے ٹولز کے ساتھ جوڑا جا سکتا ہے۔ یہ پورا سسٹم بدلنے سے زیادہ آسان ہو سکتا ہے۔",
        },
        {
          title: "کب سافٹ ویئر بدلنا ضروری ہو سکتا ہے؟",
          text: "اگر موجودہ سافٹ ویئر بہت محدود، پرانا، انٹیگریشن کے قابل نہ ہو، غیر قابلِ اعتماد ہو یا کاروبار کی ضروریات پوری نہ کر رہا ہو تو تبدیلی مناسب ہو سکتی ہے۔",
        },
        {
          title: "AI کہاں مدد کر سکتا ہے؟",
          text: "AI موجودہ سسٹم کے اوپر معلومات کا خلاصہ، اسٹاف کی مدد، پیٹرن شناخت، بہتر سرچ یا فیصلہ سازی میں معاونت کے لیے استعمال ہو سکتا ہے۔",
        },
        {
          title: "اچھا ڈیٹا پہلے ضروری ہے",
          text: "AI بہتر کام کرتا ہے جب کاروباری ڈیٹا منظم اور قابلِ اعتماد ہو۔ اگر معلومات بکھری ہوئی یا غیر مکمل ہوں تو پہلے ورک فلو اور ڈیٹا کو بہتر کرنا ضروری ہے۔",
        },
        {
          title: "صرف فیشن کے لیے ٹیکنالوجی نہ اپنائیں",
          text: "مقصد صرف اس لیے AI شامل کرنا نہیں ہونا چاہیے کہ یہ مقبول ہے۔ مقصد حقیقی کاروباری مسئلے کو آسان اور فائدہ مند طریقے سے حل کرنا ہونا چاہیے۔",
        },
      ],
      takeawayTitle: "عملی طریقہ",
      takeaway:
        "جو سسٹم پہلے سے اچھا کام کر رہے ہیں انہیں برقرار رکھیں، کمزور حصوں کو بہتر کریں اور آٹومیشن یا AI صرف وہاں شامل کریں جہاں واضح کاروباری فائدہ ہو۔",
      cta: "مفت آٹومیشن آڈٹ حاصل کریں",
    },
  }[locale];

  return (
    <main className="bg-white">
      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-wider text-teal-600">
          {content.label}
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
          {content.title}
        </h1>

        <p className="mt-6 text-xl leading-9 text-slate-600">
          {content.intro}
        </p>

        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold text-slate-950">
                {section.title}
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                {section.text}
              </p>
            </section>
          ))}
        </div>

        <section className="mt-14 rounded-2xl bg-slate-950 p-8">
          <h2 className="text-2xl font-bold text-white">
            {content.takeawayTitle}
          </h2>

          <p className="mt-4 leading-8 text-slate-300">
            {content.takeaway}
          </p>
        </section>

        <div className="mt-12">
          <Link
            href={`/${locale}/free-automation-audit`}
            className="inline-flex rounded-xl bg-teal-500 px-6 py-3 font-bold text-slate-950 transition hover:bg-teal-400"
          >
            {content.cta}
          </Link>
        </div>
      </article>
    </main>
  );
}