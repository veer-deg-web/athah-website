/**
 * lib/mailer.ts
 * Production-ready email delivery via Resend.
 * Admin notification email for all enquiry form submissions.
 * The admin recipient email is configurable via the ADMIN_NOTIFY_EMAIL env var,
 * which can be updated in the admin panel settings page.
 */

import { Resend } from "resend";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[mailer] RESEND_API_KEY is not set — emails will be skipped.");
    return null;
  }
  return new Resend(apiKey);
}

/** The email address that receives admin notifications — DB-overridable */
export async function getAdminNotifyEmail(): Promise<string> {
  try {
    const dbConnect = (await import("./mongodb")).default;
    const AdminSettings = (await import("./models/AdminSettings")).default;
    await dbConnect();
    const setting = await AdminSettings.findOne({ key: "admin_notify_email" }).lean();
    if (setting && setting.value) return setting.value;
  } catch {
    // DB unavailable — fall back to env
  }
  return (
    process.env.ADMIN_NOTIFY_EMAIL ||
    process.env.ATHAH_ADMIN_EMAIL ||
    "athaheventsddn@gmail.com"
  );
}

/** The verified sender domain/email configured in Resend */
function getSenderEmail(): string {
  return process.env.RESEND_FROM_EMAIL || "noreply@athah.in";
}

export type EnquiryEmailPayload = {
  name: string;
  phone: string;
  email: string;
  division: string;
  eventType?: string;
  budget?: string;
  message: string;
  eventLocation?: string;
  eventDate?: string;
};

function buildEnquiryHtml(data: EnquiryEmailPayload): string {
  const rows = (
    [
      ["Name", data.name],
      ["Phone", data.phone],
      ["Email", data.email],
      ["Division", data.division],
      data.eventType ? ["Event Type", data.eventType] : null,
      data.budget ? ["Budget", data.budget] : null,
      data.eventLocation ? ["Event Location", data.eventLocation] : null,
      data.eventDate ? ["Event Date", data.eventDate] : null,
    ] as (string[] | null)[]
  )
    .filter((r): r is string[] => r !== null)
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 16px;background:#1a1714;color:#b8b8b8;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;width:140px;vertical-align:top;">${label}</td>
        <td style="padding:10px 16px;background:#121010;color:#fff8e7;font-size:14px;vertical-align:top;">${value}</td>
      </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Inter',system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1a0800,#0f0700);border-bottom:2px solid #D97706;padding:28px 32px;">
            <p style="margin:0 0 4px;color:#D97706;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;">New Enquiry</p>
            <h1 style="margin:0;color:#fff8e7;font-size:22px;font-weight:700;">Athah — Inquiry Portal</h1>
          </td>
        </tr>

        <!-- Subtitle -->
        <tr>
          <td style="background:#111111;padding:16px 32px;border-bottom:1px solid #2a2218;">
            <p style="margin:0;color:#b8b8b8;font-size:13px;">
              A new enquiry was submitted via the website contact form. Please follow up within <strong style="color:#D97706;">24 hours</strong>.
            </p>
          </td>
        </tr>

        <!-- Details table -->
        <tr>
          <td style="padding:24px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #2a2218;">
              ${rows}
            </table>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding:0 32px 24px;">
            <p style="margin:0 0 8px;color:#b8b8b8;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;">Message</p>
            <div style="background:#121010;border:1px solid #2a2218;padding:16px;color:#fff8e7;font-size:14px;line-height:1.7;white-space:pre-wrap;">${data.message}</div>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:0 32px 32px;">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://athah.in"}/admin"
               style="display:inline-block;background:#D97706;color:#fff;padding:12px 28px;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;">
              View in Admin Dashboard →
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="border-top:1px solid #2a2218;padding:20px 32px;background:#050505;">
            <p style="margin:0;color:#555;font-size:11px;">
              This is an automated notification from Athah Website. Do not reply to this email.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/**
 * Send an enquiry notification to the configured admin email.
 * Fails silently if RESEND_API_KEY is not set (no error thrown to caller).
 */
export async function sendEnquiryNotification(
  data: EnquiryEmailPayload
): Promise<void> {
  const resend = getResend();
  if (!resend) return;

  const to = await getAdminNotifyEmail();
  const subject = `New Enquiry from ${data.name} — ${data.division}`;

  try {
    const { error } = await resend.emails.send({
      from: getSenderEmail(),
      to,
      subject,
      html: buildEnquiryHtml(data),
      replyTo: data.email,
    });

    if (error) {
      console.error("[mailer] Resend error:", error);
    } else {
      console.info(`[mailer] Enquiry notification sent to ${to}`);
    }
  } catch (err) {
    console.error("[mailer] Failed to send enquiry notification:", err);
  }
}
