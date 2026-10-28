import Link from "next/link";
import { notFound } from "next/navigation";

import { isLocale, type Locale } from "@/lib/i18n/config";

export const instant = false;

export default async function DistributorAutomationArticle({
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
      title: "Business Automation for Distributors in Pakistan",
      intro:
        "Distributors and wholesalers often manage orders, stock, customer follow-ups and reporting across WhatsApp, Excel, paper records and different software. Automation can help connect these activities and reduce repeated manual work.",
      sections: [
        {
          title: "Order Processing",
          text: "Orders may arrive through calls, WhatsApp, sales staff or email. A more organized workflow can capture order details consistently, reduce repeated data entry and make order status easier to track.",
        },
        {
          title: "Stock Visibility",
          text: "When stock information is updated manually, owners and sales teams may not always have a clear picture of what is available. Automation can improve stock updates, low-stock alerts and inventory visibility.",
        },
        {
          title: "Sales Team Follow-Up",
          text: "Customer reminders, quotations and follow-ups can easily be missed when they depend only on individual staff members. Automated reminders and lead tracking can make follow-up more consistent.",
        },
        {
          title: "Daily and Weekly Reporting",
          text: "Many owners spend time collecting sales, stock and outstanding information from different staff members. Automated reports or dashboards can bring important information together in one place.",
        },
        {
          title: "Customer and Payment Reminders",
          text: "Routine reminders for customers, outstanding payments or order updates can be organized and partially automated so staff do not have to repeat the same communication manually.",
        },
        {
          title: "Existing ERP or Accounting Software",
          text: "If the business already uses ERP, accounting or inventory software, automation does not always mean replacing it. Existing systems may be connected to reporting, alerts, dashboards or other workflows.",
        },
      ],
      takeawayTitle: "Where to Start",
      takeaway:
        "Start with the process that wastes the most time, creates the most confusion or causes the most repeated manual work. That is usually the best place to explore automation first.",
      cta: "Request a Free Automation Audit",
    },
    ur: {
      label: "رہنمائی",
      title: "پاکستان میں ڈسٹری بیوٹرز کے لیے بزنس آٹومیشن",
      intro:
        "ڈسٹری بیوٹرز اور ہول سیلرز اکثر آرڈرز، اسٹاک، کسٹمر فالو اَپ اور رپورٹنگ کو واٹس ایپ، ایکسِل، کاغذی ریکارڈ اور مختلف سافٹ ویئر کے ذریعے سنبھالتے ہیں۔ آٹومیشن ان کاموں کو بہتر طریقے سے جوڑنے اور بار بار ہونے والا دستی کام کم کرنے میں مدد کر سکتی ہے۔",
      sections: [
        {
          title: "آرڈر پراسیسنگ",
          text: "آرڈرز فون، واٹس ایپ، سیلز اسٹاف یا ای میل سے آ سکتے ہیں۔ ایک منظم ورک فلو آرڈر کی معلومات کو بہتر طریقے سے محفوظ کر سکتا ہے، بار بار ڈیٹا انٹری کم کر سکتا ہے اور آرڈر کی صورتحال واضح بنا سکتا ہے۔",
        },
        {
          title: "اسٹاک کی بہتر نگرانی",
          text: "اگر اسٹاک معلومات دستی طور پر اپڈیٹ ہو تو مالک اور سیلز ٹیم کو ہمیشہ واضح صورتحال نہیں ملتی۔ آٹومیشن اسٹاک اپڈیٹس، کم اسٹاک الرٹس اور انوینٹری کی نگرانی بہتر بنا سکتی ہے۔",
        },
        {
          title: "سیلز ٹیم فالو اَپ",
          text: "اگر کسٹمر یاد دہانی، کوٹیشن اور فالو اَپ صرف انفرادی اسٹاف پر منحصر ہو تو مواقع ضائع ہو سکتے ہیں۔ خودکار یاد دہانی اور لیڈ ٹریکنگ فالو اَپ کو زیادہ منظم بنا سکتی ہے۔",
        },
        {
          title: "روزانہ اور ہفتہ وار رپورٹنگ",
          text: "بہت سے مالکان کو سیلز، اسٹاک اور بقایا معلومات مختلف اسٹاف سے جمع کرنی پڑتی ہیں۔ خودکار رپورٹس یا ڈیش بورڈ اہم معلومات ایک جگہ لا سکتے ہیں۔",
        },
        {
          title: "کسٹمر اور ادائیگی یاد دہانی",
          text: "کسٹمر، بقایا ادائیگی یا آرڈر اپڈیٹس کی معمول کی یاد دہانی کو منظم اور جزوی طور پر خودکار بنایا جا سکتا ہے تاکہ اسٹاف کو ایک ہی کام بار بار نہ کرنا پڑے۔",
        },
        {
          title: "موجودہ ERP یا اکاؤنٹنگ سافٹ ویئر",
          text: "اگر کاروبار پہلے سے ERP، اکاؤنٹنگ یا انوینٹری سافٹ ویئر استعمال کرتا ہے تو آٹومیشن کا مطلب ہمیشہ اسے بدلنا نہیں ہوتا۔ موجودہ سسٹم کو رپورٹس، الرٹس، ڈیش بورڈ یا دوسرے ورک فلو کے ساتھ جوڑا جا سکتا ہے۔",
        },
      ],
      takeawayTitle: "کہاں سے آغاز کریں",
      takeaway:
        "اس کام سے آغاز کریں جو سب سے زیادہ وقت ضائع کرتا ہے، سب سے زیادہ الجھن پیدا کرتا ہے یا بار بار دستی طور پر کرنا پڑتا ہے۔ عموماً آٹومیشن کے لیے یہی بہترین پہلا مقام ہوتا ہے۔",
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