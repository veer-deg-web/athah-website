import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email,
      division,
      eventType,
      budget,
      message,
      eventLocation,
      eventDate,
    } = body;

    // Validate required fields
    const errors: string[] = [];
    if (!name || typeof name !== "string" || !name.trim()) {
      errors.push("Full Name is required.");
    }
    if (!phone || typeof phone !== "string" || !phone.trim()) {
      errors.push("Phone / WhatsApp number is required.");
    }
    if (!email || typeof email !== "string" || !email.trim()) {
      errors.push("Email Address is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("Please provide a valid email address.");
    }
    if (!division || typeof division !== "string" || !division.trim()) {
      errors.push("Please select which division you are looking for.");
    }
    if (!message || typeof message !== "string" || !message.trim()) {
      errors.push("Please describe your vision or message.");
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { ok: false, message: "Validation failed.", errors },
        { status: 400 }
      );
    }

    // SMTP settings from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFromEmail = process.env.SMTP_FROM_EMAIL || `"Athah Portal" <${smtpUser}>`;
    const smtpToEmails = process.env.SMTP_TO_EMAILS;

    // Verify SMTP variables are defined
    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.error("SMTP environment variables are missing configuration:", {
        SMTP_HOST: !!smtpHost,
        SMTP_PORT: !!smtpPort,
        SMTP_USER: !!smtpUser,
        SMTP_PASS: !!smtpPass,
      });
      return NextResponse.json(
        {
          ok: false,
          message: "Mail configuration error. Please contact administrators.",
        },
        { status: 500 }
      );
    }

    const recipientEmails = smtpToEmails
      ? smtpToEmails.split(",").map((e) => e.trim()).filter(Boolean)
      : [smtpUser]; // Fallback to SMTP user if no recipients are set

    if (recipientEmails.length === 0) {
      return NextResponse.json(
        {
          ok: false,
          message: "No recipient emails configured.",
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: smtpPort === "465", // Use SSL/TLS for 465, STARTTLS for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Format brand-aligned HTML Email
    const htmlEmail = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Inquiry Received</title>
      <style>
        body {
          background-color: #0A0A0A;
          color: #FFF8E7;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        .wrapper {
          background-color: #0A0A0A;
          padding: 40px 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #141210;
          border: 1px solid #3A2918;
          border-radius: 12px;
          overflow: hidden;
        }
        .header {
          background-color: #050505;
          padding: 30px;
          border-bottom: 2px solid #D97706;
          text-align: center;
        }
        .header h1 {
          color: #D97706;
          font-family: Georgia, serif;
          margin: 0;
          font-size: 28px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .content {
          padding: 30px;
        }
        .section-title {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #D97706;
          margin-top: 20px;
          margin-bottom: 12px;
          border-bottom: 1px solid #3A2918;
          padding-bottom: 6px;
        }
        .grid {
          display: table;
          width: 100%;
          margin-bottom: 20px;
        }
        .row {
          display: table-row;
        }
        .label {
          display: table-cell;
          font-weight: 600;
          color: #B8B8B8;
          width: 35%;
          padding: 8px 0;
          font-size: 13px;
          border-bottom: 1px solid #252119;
          vertical-align: top;
        }
        .value {
          display: table-cell;
          color: #FFF8E7;
          padding: 8px 0;
          font-size: 13px;
          border-bottom: 1px solid #252119;
          vertical-align: top;
        }
        .message-box {
          background-color: #1A1714;
          border-left: 3px solid #D97706;
          padding: 15px;
          margin-top: 10px;
          border-radius: 4px;
          color: #FFF8E7;
          font-size: 13px;
          line-height: 1.6;
          white-space: pre-wrap;
        }
        .footer {
          background-color: #050505;
          padding: 20px;
          text-align: center;
          font-size: 11px;
          color: #8C6743;
          border-top: 1px solid #252119;
        }
        .footer a {
          color: #D97706;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <h1>ATHAH</h1>
            <p style="color: #B8B8B8; font-size: 12px; margin: 6px 0 0 0; letter-spacing: 0.15em; text-transform: uppercase;">Inquiry Notification</p>
          </div>
          <div class="content">
            <div class="section-title">Client Details</div>
            <div class="grid">
              <div class="row">
                <div class="label">Full Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="row">
                <div class="label">Email Address:</div>
                <div class="value"><a href="mailto:${email}" style="color: #D97706; text-decoration: none;">${email}</a></div>
              </div>
              <div class="row">
                <div class="label">Phone / WhatsApp:</div>
                <div class="value"><a href="tel:${phone}" style="color: #D97706; text-decoration: none;">${phone}</a></div>
              </div>
            </div>

            <div class="section-title">Project & Brief</div>
            <div class="grid">
              <div class="row">
                <div class="label">Athah Division:</div>
                <div class="value" style="text-transform: capitalize;">${division}</div>
              </div>
              <div class="row">
                <div class="label">Project Type:</div>
                <div class="value">${eventType || "Not specified"}</div>
              </div>
              <div class="row">
                <div class="label">Approx. Budget:</div>
                <div class="value">${budget || "Not specified"}</div>
              </div>
              <div class="row">
                <div class="label">Location:</div>
                <div class="value">${eventLocation || "Not specified"}</div>
              </div>
              <div class="row">
                <div class="label">Date:</div>
                <div class="value">${eventDate || "Not specified"}</div>
              </div>
            </div>

            <div class="section-title">Vision / Message</div>
            <div class="message-box">${message}</div>
          </div>
          <div class="footer">
            This inquiry was submitted via the <a href="https://athah.com">Athah Website Inquiry Portal</a>.
          </div>
        </div>
      </div>
    </body>
    </html>
    `;

    // Send emails
    const mailOptions = {
      from: smtpFromEmail,
      to: recipientEmails.join(", "),
      subject: `New Inquiry - Athah (${division.toUpperCase()}) - ${name}`,
      text: `
New Inquiry Received on Athah Website:
----------------------------------------
Client Name: ${name}
Email: ${email}
Phone: ${phone}

Division: ${division}
Event/Project Type: ${eventType || "Not specified"}
Budget: ${budget || "Not specified"}
Location: ${eventLocation || "Not specified"}
Date: ${eventDate || "Not specified"}

Message:
${message}
      `,
      html: htmlEmail,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      ok: true,
      message: "Your inquiry has been successfully sent. We'll be in touch soon!",
    });
  } catch (error: any) {
    console.error("Enquiry API endpoint error:", error);
    return NextResponse.json(
      {
        ok: false,
        message: "An internal server error occurred while sending your inquiry.",
      },
      { status: 500 }
    );
  }
}
