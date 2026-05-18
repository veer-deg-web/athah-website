import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";
import { getCareerApplicationById, getCareerResumeFile } from "@/lib/careers";

export async function GET(
  _request: Request,
  context: RouteContext<"/api/careers/applications/[id]/resume">
) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const application = await getCareerApplicationById(id);

  if (!application?.resumeStoredName || !application.resumeFileName) {
    return NextResponse.json({ ok: false, message: "Resume not found" }, { status: 404 });
  }

  const file = await getCareerResumeFile(application.resumeStoredName);

  return new NextResponse(file, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename="${application.resumeFileName}"`,
    },
  });
}
