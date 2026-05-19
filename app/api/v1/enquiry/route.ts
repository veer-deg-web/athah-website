/**
 * app/api/v1/enquiry/route.ts
 * Versioned, rate-limited, sanitized enquiry endpoint.
 * Stores to MongoDB and sends admin email notification via Resend.
 */

import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Enquiry from "@/lib/models/Enquiry";
import { sanitizeString, sanitizeEmail, sanitizePhone } from "@/lib/sanitize";
import { rateLimit, getClientIp } from "@/lib/rate-limit";
import { sendEnquiryNotification } from "@/lib/mailer";

// Rate limit: 5 enquiry submissions per IP per 10 minutes
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_SECS = 10 * 60;

function validationErrors(body: Record<string, string>) {
  const errors: string[] = [];

  if (!body.name || body.name.length < 2)
    errors.push("Full name is required (at least 2 characters).");
  if (!body.email)
    errors.push("A valid email address is required.");
  if (!body.phone || body.phone.length < 7)
    errors.push("A valid phone number is required.");
  if (!body.division)
    errors.push("Please select a service division.");
  if (!body.message || body.message.length < 20)
    errors.push("Please describe your vision (at least 20 characters).");

  return errors;
}

export async function POST(request: Request) {
  // ── 1. Rate limit ──────────────────────────────────────────────────────────
  const ip = getClientIp(request);
  const { allowed, remaining, resetAt } = rateLimit(
    `enquiry:${ip}`,
    RATE_LIMIT_MAX,
    RATE_LIMIT_WINDOW_SECS
  );

  if (!allowed) {
    return NextResponse.json(
      {
        ok: false,
        message: "Too many enquiries from your connection. Please wait a few minutes and try again.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((resetAt - Date.now()) / 1000)),
          "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
          "X-RateLimit-Remaining": "0",
        },
      }
    );
  }

  // ── 2. Parse & sanitize ────────────────────────────────────────────────────
  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  if (!rawBody || typeof rawBody !== "object") {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const raw = rawBody as Record<string, unknown>;

  const sanitized = {
    name:          sanitizeString(raw.name, 200),
    phone:         sanitizePhone(raw.phone),
    email:         sanitizeEmail(raw.email),
    division:      sanitizeString(raw.division, 100),
    eventType:     sanitizeString(raw.eventType, 100),
    budget:        sanitizeString(raw.budget, 50),
    message:       sanitizeString(raw.message, 3000),
    eventLocation: sanitizeString(raw.eventLocation, 300),
    eventDate:     sanitizeString(raw.eventDate, 50),
  };

  // ── 3. Validate ────────────────────────────────────────────────────────────
  const errors = validationErrors(sanitized);
  if (errors.length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please fix the following issues.", errors },
      { status: 422 }
    );
  }

  // ── 4. Persist to MongoDB ──────────────────────────────────────────────────
  try {
    await dbConnect();
    await Enquiry.create(sanitized);
  } catch (err) {
    console.error("[enquiry] DB error:", err);
    return NextResponse.json(
      { ok: false, message: "We could not save your enquiry. Please try again shortly." },
      { status: 500 }
    );
  }

  // ── 5. Send admin notification (non-blocking) ──────────────────────────────
  sendEnquiryNotification(sanitized).catch((err) =>
    console.error("[enquiry] Email notification failed:", err)
  );

  return NextResponse.json(
    {
      ok: true,
      message: "Your enquiry has been received. Our team will respond within 24 hours.",
    },
    {
      status: 201,
      headers: {
        "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
        "X-RateLimit-Remaining": String(remaining),
      },
    }
  );
}

// Admin: list all enquiries
export async function GET(request: Request) {
  const { getAdminSession } = await import("@/lib/admin-auth");
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();
    const enquiries = await Enquiry.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ ok: true, data: enquiries });
  } catch (err) {
    console.error("[enquiry] GET error:", err);
    return NextResponse.json(
      { ok: false, message: "Failed to fetch enquiries." },
      { status: 500 }
    );
  }
}
