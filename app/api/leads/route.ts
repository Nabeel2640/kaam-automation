import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

const leadSchema = z.object({
  full_name: z.string().trim().min(2).max(100),
  business_name: z.string().trim().min(2).max(150),
  phone: z.string().trim().min(7).max(30),
  email: z
    .string()
    .trim()
    .max(150)
    .refine(
      (value) => value === "" || z.string().email().safeParse(value).success,
      "Invalid email"
    ),
  city: z.string().trim().max(100),
  industry: z.string().trim().max(150),
  current_software: z.string().trim().max(50),
  biggest_problem: z.string().trim().min(5).max(3000),
});

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data." },
        { status: 400 }
      );
    }

    const {
      full_name,
      business_name,
      phone,
      email,
      city,
      industry,
      current_software,
      biggest_problem,
    } = parsed.data;

    const { error: databaseError } = await supabase.from("leads").insert({
      full_name,
      business_name,
      phone,
      email: email || null,
      city: city || null,
      industry: industry || null,
      current_software: current_software || null,
      biggest_problem,
    });

    if (databaseError) {
      console.error("Supabase error:", databaseError);

      return NextResponse.json(
        { error: "Unable to save lead." },
        { status: 500 }
      );
    }

    const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL;

    if (!notificationEmail) {
      console.error("LEAD_NOTIFICATION_EMAIL is missing.");

      return NextResponse.json(
        { error: "Lead saved, but notification email is not configured." },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        { error: "Lead saved, but Resend is not configured." },
        { status: 500 }
      );
    }

    const { data, error: resendError } = await resend.emails.send({
      from: "Kaam Automation <notifications@kaamautomation.com>",
      to: [notificationEmail],
      subject: `New Automation Audit Request - ${escapeHtml(
        business_name
      )}`,
      html: `
        <h2>New Free Automation Audit Request</h2>

        <p><strong>Name:</strong> ${escapeHtml(full_name)}</p>
        <p><strong>Business:</strong> ${escapeHtml(business_name)}</p>
        <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${
          email ? escapeHtml(email) : "Not provided"
        }</p>
        <p><strong>City:</strong> ${
          city ? escapeHtml(city) : "Not provided"
        }</p>
        <p><strong>Industry:</strong> ${
          industry ? escapeHtml(industry) : "Not provided"
        }</p>
        <p><strong>Current Software:</strong> ${
          current_software
            ? escapeHtml(current_software)
            : "Not provided"
        }</p>

        <h3>Biggest Problem / Time-Consuming Work</h3>
        <p>${escapeHtml(biggest_problem)}</p>
      `,
    });

    if (resendError) {
      console.error("Resend error:", resendError);

      return NextResponse.json(
        {
          error: "Lead saved, but notification email could not be sent.",
        },
        { status: 500 }
      );
    }

    console.log("Lead saved and email sent:", data);

    return NextResponse.json({
      success: true,
      emailId: data?.id,
    });
  } catch (error) {
    console.error("Lead API error:", error);

    return NextResponse.json(
      { error: "Unable to process lead request." },
      { status: 500 }
    );
  }
}