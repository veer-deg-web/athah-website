import { NextResponse } from "next/server";
import { isValidAdminCredentials, setAdminSession } from "@/lib/admin-auth";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  if (!isValidAdminCredentials(email, password)) {
    return NextResponse.redirect(new URL("/admin/login?error=invalid", request.url));
  }

  await setAdminSession(email);
  return NextResponse.redirect(new URL("/admin", request.url));
}
