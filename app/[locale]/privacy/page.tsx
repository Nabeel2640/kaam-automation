import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/lib/i18n/config";

export const instant = false;

export default async function PrivacyPage({
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
      label: "Privacy Policy",
      title: "Privacy Policy",
      intro:
        "This Privacy Policy explains how Kaam Automation may collect, use and protect information submitted through this website.",
      sections: [
        {
          title: "Information We Collect",
          text: "When you submit the Free Automation Audit or contact us, we may collect information such as your name, business name, phone number, email address, city, industry and details about your business processes.",
        },
        {
          title: "How We Use Information",
          text: "We use submitted information to respond to inquiries, understand business needs, provide automation-related guidance and communicate about our services.",
        },
        {
          title: "Data Storage",
          text: "Website form submissions may be stored using trusted third-party services that help us operate the website and manage inquiries.",
        },
        {
          title: "Sharing of Information",
          text: "We do not sell personal information. Information may be processed by service providers that support website hosting, databases, email delivery or related business operations.",
        },
        {
          title: "Security",
          text: "We take reasonable steps to protect submitted information, but no internet-based system can guarantee absolute security.",
        },
        {
          title: "Your Choices",
          text: "You may contact us if you have questions about information you submitted or would like to request an update or deletion where applicable.",
        },
        {
          title: "Policy Updates",
          text: "This policy may be updated as the website and services develop. The latest version will be published on this page.",
        },
      ],
      note:
        "This website is currently intended primarily for business inquiries and lead generation.",
    },
    ur: {
      label: "پرائیویسی پالیسی",
      title: "پرائیویسی پالیسی",
      intro:
        "یہ پرائیویسی پالیسی بتاتی ہے کہ کام آٹومیشن اس ویب سائٹ کے ذریعے جمع ہونے والی معلومات کو کس طرح استعمال اور محفوظ کر سکتا ہے۔",
      sections: [
        {
          title: "ہم کون سی معلومات جمع کرتے ہیں",
          text: "جب آپ مفت آٹومیشن آڈٹ فارم جمع کرتے ہیں یا ہم سے رابطہ کرتے ہیں تو نام، کاروبار کا نام، فون نمبر، ای میل، شہر، صنعت اور کاروباری عمل سے متعلق معلومات جمع ہو سکتی ہیں۔",
        },
        {
          title: "معلومات کیسے استعمال ہوتی ہیں",
          text: "جمع کی گئی معلومات سوالات کا جواب دینے، کاروباری ضرورت سمجھنے، آٹومیشن سے متعلق رہنمائی دینے اور ہماری خدمات کے بارے میں رابطہ کرنے کے لیے استعمال ہو سکتی ہیں۔",
        },
        {
          title: "ڈیٹا کی محفوظ جگہ",
          text: "ویب سائٹ کے فارم کی معلومات قابلِ اعتماد تھرڈ پارٹی سروسز کے ذریعے محفوظ کی جا سکتی ہیں جو ویب سائٹ اور انکوائریز چلانے میں مدد کرتی ہیں۔",
        },
        {
          title: "معلومات کا اشتراک",
          text: "ہم ذاتی معلومات فروخت نہیں کرتے۔ ویب ہوسٹنگ، ڈیٹابیس، ای میل یا دوسرے کاروباری نظام فراہم کرنے والی سروسز معلومات پراسیس کر سکتی ہیں۔",
        },
        {
          title: "سیکیورٹی",
          text: "ہم معلومات کی حفاظت کے لیے مناسب اقدامات کرتے ہیں، لیکن انٹرنیٹ پر کسی بھی نظام کی مکمل سیکیورٹی کی ضمانت نہیں دی جا سکتی۔",
        },
        {
          title: "آپ کے اختیارات",
          text: "آپ اپنی جمع کردہ معلومات کے بارے میں سوال، تبدیلی یا جہاں قابلِ اطلاق ہو حذف کرنے کی درخواست کے لیے ہم سے رابطہ کر سکتے ہیں۔",
        },
        {
          title: "پالیسی میں تبدیلی",
          text: "ویب سائٹ اور خدمات کے بڑھنے کے ساتھ یہ پالیسی تبدیل ہو سکتی ہے۔ تازہ ترین ورژن اسی صفحے پر موجود ہوگا۔",
        },
      ],
      note:
        "یہ ویب سائٹ فی الحال بنیادی طور پر کاروباری انکوائریز اور لیڈ جنریشن کے لیے استعمال ہوتی ہے۔",
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

        <p className="mt-6 text-lg leading-8 text-slate-600">
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

        <div className="mt-14 rounded-2xl bg-slate-50 p-6 text-slate-600">
          {content.note}
        </div>
      </article>
    </main>
  );
}