import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";
import { updateFeedbackStatus } from "@/lib/testimonials";

export async function POST(
  request: Request,
  context: RouteContext<"/api/admin/testimonials/[id]">
) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const status = String(formData.get("status") || "");
  if (!["approved", "rejected", "pending"].includes(status)) {
    return NextResponse.json({ ok: false, message: "Invalid status" }, { status: 400 });
  }

  const { id } = await context.params;
  const updated = await updateFeedbackStatus(id, status as "approved" | "rejected" | "pending");
  if (!updated) {
    return NextResponse.json({ ok: false, message: "Feedback not found" }, { status: 404 });
  }

  return NextResponse.redirect(new URL("/admin", request.url));
}
