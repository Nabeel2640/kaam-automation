"use client";

import { useState } from "react";

import { supabase } from "@/lib/supabase/client";
import type { Locale } from "@/lib/i18n/config";

export function AuditForm({ locale }: { locale: Locale }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const content = {
    en: {
      name: "Full Name",
      business: "Business Name",
      phone: "Phone / WhatsApp",
      email: "Email",
      city: "City",
      industry: "Industry",
      software: "Do you currently use any business software?",
      problem: "What work takes the most time in your business?",
      submit: "Request Free Automation Audit",
      submitting: "Submitting...",
      success:
        "Thank you! Your request has been received. We will contact you soon.",
      error: "Something went wrong. Please try again.",
    },
    ur: {
      name: "پورا نام",
      business: "کاروبار کا نام",
      phone: "فون / واٹس ایپ",
      email: "ای میل",
      city: "شہر",
      industry: "کاروبار کی قسم",
      software: "کیا آپ اس وقت کوئی بزنس سافٹ ویئر استعمال کرتے ہیں؟",
      problem: "آپ کے کاروبار میں کون سا کام سب سے زیادہ وقت لیتا ہے؟",
      submit: "مفت آٹومیشن آڈٹ حاصل کریں",
      submitting: "جمع ہو رہا ہے...",
      success:
        "شکریہ! آپ کی درخواست موصول ہوگئی ہے۔ ہم جلد آپ سے رابطہ کریں گے۔",
      error: "کچھ غلط ہوگیا۔ براہ کرم دوبارہ کوشش کریں۔",
    },
  }[locale];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;

    setLoading(true);
    setMessage("");

    const form = new FormData(formElement);

    const lead = {
      full_name: String(form.get("full_name") || ""),
      business_name: String(form.get("business_name") || ""),
      phone: String(form.get("phone") || ""),
      email: String(form.get("email") || ""),
      city: String(form.get("city") || ""),
      industry: String(form.get("industry") || ""),
      current_software: String(form.get("current_software") || ""),
      biggest_problem: String(form.get("biggest_problem") || ""),
    };

    const { error } = await supabase.from("leads").insert({
      full_name: lead.full_name,
      business_name: lead.business_name,
      phone: lead.phone,
      email: lead.email || null,
      city: lead.city || null,
      industry: lead.industry || null,
      current_software: lead.current_software || null,
      biggest_problem: lead.biggest_problem,
    });

    if (error) {
      console.error("Supabase error:", error);
      setMessage(content.error);
      setLoading(false);
      return;
    }

    try {
      const emailResponse = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lead),
      });

      if (!emailResponse.ok) {
        console.error("Email notification could not be sent.");
      }
    } catch (emailError) {
      console.error("Email notification error:", emailError);
    }

    formElement.reset();
    setMessage(content.success);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
      <label className="flex flex-col gap-2">
        <span className="font-semibold text-slate-800">{content.name}</span>
        <input
          name="full_name"
          type="text"
          required
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-semibold text-slate-800">
          {content.business}
        </span>
        <input
          name="business_name"
          type="text"
          required
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-semibold text-slate-800">{content.phone}</span>
        <input
          name="phone"
          type="tel"
          required
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-semibold text-slate-800">{content.email}</span>
        <input
          name="email"
          type="email"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-semibold text-slate-800">{content.city}</span>
        <input
          name="city"
          type="text"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-semibold text-slate-800">{content.industry}</span>
        <input
          name="industry"
          type="text"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
        />
      </label>

      <label className="flex flex-col gap-2 md:col-span-2">
        <span className="font-semibold text-slate-800">
          {content.software}
        </span>

        <select
          name="current_software"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
        >
          <option value="">—</option>
          <option value="yes">Yes / ہاں</option>
          <option value="no">No / نہیں</option>
          <option value="partly">Partly / کچھ حد تک</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 md:col-span-2">
        <span className="font-semibold text-slate-800">
          {content.problem}
        </span>

        <textarea
          name="biggest_problem"
          rows={5}
          required
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
        />
      </label>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-teal-500 px-6 py-4 font-bold text-slate-950 transition hover:bg-teal-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? content.submitting : content.submit}
        </button>

        {message && (
          <p className="mt-4 text-center font-medium text-slate-700">
            {message}
          </p>
        )}
      </div>
    </form>
  );
}