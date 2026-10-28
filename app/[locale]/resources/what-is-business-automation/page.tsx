import Link from "next/link";
import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/lib/i18n/config";

export const instant = false;

export default async function WhatIsBusinessAutomationArticle({
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
      title: "What Is Business Automation?",
      intro:
        "Business automation means using software and digital tools to reduce repetitive manual work, improve accuracy and make everyday business processes easier to manage.",
      sections: [
        {
          title: "A Simple Example",
          text: "Imagine your staff receives customer orders on WhatsApp, writes them in Excel, informs the warehouse manually and then prepares a daily report for the owner. Automation can connect some of these steps so information moves automatically instead of being entered again and again.",
        },
        {
          title: "What Can Be Automated?",
          text: "Common examples include lead follow-ups, order processing, reminders, stock updates, reports, approvals, customer notifications, task assignments and routine data entry.",
        },
        {
          title: "Does Automation Mean Replacing Staff?",
          text: "Not necessarily. The main goal is usually to reduce repetitive work so staff can spend more time on useful tasks that require judgment, customer service or business knowledge.",
        },
        {
          title: "Do You Need Expensive Software?",
          text: "No. The right solution depends on the business. Sometimes an existing system can be improved. In other cases, a simple workflow, integration or small custom tool may be enough.",
        },
        {
          title: "Where Does AI Fit In?",
          text: "AI can be useful after the basic workflow and data are organized. It may help summarize information, identify patterns, assist staff or support better decisions. AI works best when it is solving a real business problem.",
        },
      ],
      takeawayTitle: "The Main Idea",
      takeaway:
        "Business automation is not about using complicated technology. It is about making work simpler, faster and easier to control.",
      cta: "Request a Free Automation Audit",
    },
    ur: {
      label: "رہنمائی",
      title: "بزنس آٹومیشن کیا ہے؟",
      intro:
        "بزنس آٹومیشن کا مطلب سافٹ ویئر اور ڈیجیٹل ٹولز کے ذریعے بار بار ہونے والا دستی کام کم کرنا، غلطیاں کم کرنا اور روزمرہ کے کاروباری عمل کو آسان بنانا ہے۔",
      sections: [
        {
          title: "ایک آسان مثال",
          text: "فرض کریں آپ کا اسٹاف واٹس ایپ پر آرڈر لیتا ہے، پھر ایکسِل میں لکھتا ہے، گودام کو الگ سے بتاتا ہے اور آخر میں مالک کے لیے رپورٹ تیار کرتا ہے۔ آٹومیشن ان مراحل کو آپس میں جوڑ سکتی ہے تاکہ ایک ہی معلومات بار بار درج نہ کرنی پڑے۔",
        },
        {
          title: "کون سے کام خودکار بنائے جا سکتے ہیں؟",
          text: "عام مثالوں میں لیڈ فالو اَپ، آرڈر پراسیسنگ، یاد دہانی، اسٹاک اپڈیٹس، رپورٹس، منظوری، کسٹمر نوٹیفکیشن، ٹاسک اسائنمنٹ اور روزمرہ ڈیٹا انٹری شامل ہیں۔",
        },
        {
          title: "کیا آٹومیشن کا مطلب اسٹاف کو تبدیل کرنا ہے؟",
          text: "ضروری نہیں۔ اصل مقصد عموماً بار بار ہونے والا کام کم کرنا ہوتا ہے تاکہ اسٹاف ایسے کاموں پر زیادہ وقت دے سکے جن میں فیصلہ سازی، کسٹمر سروس یا کاروباری سمجھ کی ضرورت ہو۔",
        },
        {
          title: "کیا مہنگا سافٹ ویئر ضروری ہے؟",
          text: "نہیں۔ صحیح حل کاروبار کی ضرورت پر منحصر ہوتا ہے۔ کبھی موجودہ سسٹم کو بہتر کیا جا سکتا ہے، اور کبھی ایک آسان ورک فلو، انٹیگریشن یا چھوٹا کسٹم ٹول کافی ہوتا ہے۔",
        },
        {
          title: "AI کہاں استعمال ہوتا ہے؟",
          text: "AI اس وقت زیادہ فائدہ دیتا ہے جب بنیادی ورک فلو اور ڈیٹا منظم ہوں۔ یہ معلومات کا خلاصہ، پیٹرن شناخت، اسٹاف کی مدد یا بہتر فیصلہ سازی میں استعمال ہو سکتا ہے۔",
        },
      ],
      takeawayTitle: "اصل بات",
      takeaway:
        "بزنس آٹومیشن کا مقصد پیچیدہ ٹیکنالوجی استعمال کرنا نہیں۔ مقصد کام کو آسان، تیز اور بہتر کنٹرول کے قابل بنانا ہے۔",
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