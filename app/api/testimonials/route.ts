import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";
import {
  createFeedbackSubmission,
  listFeedbackSubmissions,
  validateFeedbackForm,
} from "@/lib/testimonials";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }
  const submissions = await listFeedbackSubmissions();
  return NextResponse.json({ ok: true, submissions });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const { errors, values } = validateFeedbackForm(formData);

  if (errors.length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please fix the feedback form errors.", errors },
      { status: 400 }
    );
  }

  await createFeedbackSubmission(values);
  return NextResponse.json({
    ok: true,
    message: "Thank you. Your feedback has been submitted for approval.",
  });
}
