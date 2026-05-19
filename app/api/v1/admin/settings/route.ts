/**
 * app/api/v1/admin/settings/route.ts
 * Admin-only CRUD for key-value settings (e.g. notification email).
 */

import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import AdminSettings from "@/lib/models/AdminSettings";
import { getAdminSession } from "@/lib/admin-auth";
import { sanitizeEmail, sanitizeString } from "@/lib/sanitize";

async function auth() {
  const session = await getAdminSession();
  if (!session) return null;
  return session;
}

export async function GET() {
  if (!(await auth()))
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });

  await dbConnect();
  const settings = await AdminSettings.find({}).lean();
  const map = Object.fromEntries(settings.map((s) => [s.key, s.value]));
  return NextResponse.json({ ok: true, data: map });
}

export async function PATCH(request: Request) {
  if (!(await auth()))
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });

  let body: unknown;
  try { body = await request.json(); } catch {
    return NextResponse.json({ ok: false, message: "Invalid body" }, { status: 400 });
  }

  if (!body || typeof body !== "object")
    return NextResponse.json({ ok: false, message: "Invalid body" }, { status: 400 });

  const raw = body as Record<string, unknown>;
  const updates: Array<{ key: string; value: string }> = [];

  // Whitelist of allowed keys and their sanitizers
  const allowed: Record<string, (v: unknown) => string> = {
    admin_notify_email: sanitizeEmail,
    site_name: (v) => sanitizeString(v, 100),
  };

  for (const [key, sanitizer] of Object.entries(allowed)) {
    if (key in raw) {
      const value = sanitizer(raw[key]);
      if (value) updates.push({ key, value });
    }
  }

  if (updates.length === 0)
    return NextResponse.json({ ok: false, message: "No valid settings provided." }, { status: 400 });

  await dbConnect();
  await Promise.all(
    updates.map(({ key, value }) =>
      AdminSettings.findOneAndUpdate(
        { key },
        { value, updatedAt: new Date() },
        { upsert: true, new: true }
      )
    )
  );

  return NextResponse.json({ ok: true, message: "Settings updated." });
}
