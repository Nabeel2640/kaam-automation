import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const {
      full_name,
      business_name,
      phone,
      email,
      city,
      industry,
      current_software,
      biggest_problem,
    } = body;

    if (!full_name || !business_name || !phone || !biggest_problem) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL;

    if (!notificationEmail) {
      console.error("LEAD_NOTIFICATION_EMAIL is missing.");

      return NextResponse.json(
        { error: "Notification email is not configured." },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        { error: "Resend API key is not configured." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
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

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Resend could not send the email.",
          details: error.message,
        },
        { status: 500 }
      );
    }

    console.log("Resend email sent:", data);

    return NextResponse.json({
      success: true,
      emailId: data?.id,
    });
  } catch (error) {
    console.error("Lead email route error:", error);

    return NextResponse.json(
      { error: "Unable to send notification email." },
      { status: 500 }
    );
  }
}