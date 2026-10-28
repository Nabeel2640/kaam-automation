import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/lib/i18n/config";

export const instant = false;

export default async function TermsPage({
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
      label: "Terms",
      title: "Terms of Use",
      intro:
        "These Terms of Use explain the basic conditions for using the Kaam Automation website and submitting business inquiries through it.",
      sections: [
        {
          title: "Website Purpose",
          text: "This website provides general information about business automation, software, AI-related services and ways to contact Kaam Automation.",
        },
        {
          title: "No Guaranteed Results",
          text: "Examples, ideas and potential benefits described on this website are for general information. Actual results depend on the business, workflow, available data, systems and implementation.",
        },
        {
          title: "Free Automation Audit",
          text: "Submitting the Free Automation Audit form does not create a contract or guarantee that a specific solution, project or service will be provided.",
        },
        {
          title: "Business Information",
          text: "You are responsible for providing accurate information when submitting forms or contacting us. Please do not submit confidential information that is not necessary for the initial inquiry.",
        },
        {
          title: "Third-Party Services",
          text: "This website may use third-party services for hosting, databases, email delivery, analytics or other technical functions. Their own terms and policies may also apply.",
        },
        {
          title: "Intellectual Property",
          text: "Website content, branding and original materials may not be copied, reproduced or presented as your own without permission.",
        },
        {
          title: "Changes to These Terms",
          text: "These terms may be updated as the website, business and services develop. The latest version will be published on this page.",
        },
      ],
      note:
        "For any questions about these terms, please contact Kaam Automation.",
    },
    ur: {
      label: "شرائط",
      title: "استعمال کی شرائط",
      intro:
        "یہ شرائط کام آٹومیشن ویب سائٹ کے استعمال اور اس کے ذریعے کاروباری انکوائری جمع کرنے کی بنیادی شرائط بیان کرتی ہیں۔",
      sections: [
        {
          title: "ویب سائٹ کا مقصد",
          text: "یہ ویب سائٹ بزنس آٹومیشن، سافٹ ویئر، AI سے متعلق خدمات اور کام آٹومیشن سے رابطے کے طریقوں کے بارے میں عمومی معلومات فراہم کرتی ہے۔",
        },
        {
          title: "نتائج کی ضمانت نہیں",
          text: "ویب سائٹ پر موجود مثالیں، خیالات اور ممکنہ فوائد عمومی معلومات کے لیے ہیں۔ اصل نتائج کاروبار، ورک فلو، دستیاب ڈیٹا، نظام اور عمل درآمد پر منحصر ہوتے ہیں۔",
        },
        {
          title: "مفت آٹومیشن آڈٹ",
          text: "مفت آٹومیشن آڈٹ فارم جمع کروانے سے کوئی معاہدہ نہیں بنتا اور نہ ہی کسی مخصوص حل، پروجیکٹ یا سروس کی ضمانت دی جاتی ہے۔",
        },
        {
          title: "کاروباری معلومات",
          text: "فارم جمع کرواتے یا رابطہ کرتے وقت درست معلومات فراہم کرنا آپ کی ذمہ داری ہے۔ ابتدائی انکوائری میں غیر ضروری خفیہ معلومات جمع نہ کریں۔",
        },
        {
          title: "تھرڈ پارٹی سروسز",
          text: "یہ ویب سائٹ ہوسٹنگ، ڈیٹابیس، ای میل ڈیلیوری، اینالیٹکس یا دوسرے تکنیکی کاموں کے لیے تھرڈ پارٹی سروسز استعمال کر سکتی ہے۔ ان کی اپنی شرائط اور پالیسیاں بھی لاگو ہو سکتی ہیں۔",
        },
        {
          title: "دانشورانہ ملکیت",
          text: "ویب سائٹ کا مواد، برانڈنگ اور اصل مواد اجازت کے بغیر نقل، دوبارہ شائع یا اپنے نام سے پیش نہیں کیا جا سکتا۔",
        },
        {
          title: "شرائط میں تبدیلی",
          text: "ویب سائٹ، کاروبار اور خدمات کے بڑھنے کے ساتھ یہ شرائط تبدیل ہو سکتی ہیں۔ تازہ ترین ورژن اسی صفحے پر شائع ہوگا۔",
        },
      ],
      note:
        "ان شرائط کے بارے میں کسی سوال کے لیے کام آٹومیشن سے رابطہ کریں۔",
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