import { NextResponse } from "next/server";
import {
  createCareerApplication,
  listCareerApplications,
  validateCareerApplicationForm,
} from "@/lib/careers";
import { getAdminSession } from "@/lib/admin-auth";

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const applications = await listCareerApplications();
  return NextResponse.json({ ok: true, applications });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const { errors, values } = validateCareerApplicationForm(formData);

  if (errors.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please fix the highlighted submission issues.",
        errors,
      },
      { status: 400 }
    );
  }

  await createCareerApplication(values);

  return NextResponse.json({
    ok: true,
    message: "Application received. Our team will review it and get back to you soon.",
  });
}
