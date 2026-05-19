import { NextResponse } from "next/server";
import { requireAdminSession } from "@/lib/admin-auth";
import { savePageContent } from "@/lib/content";

export async function POST(request: Request) {
  try {
    await requireAdminSession();
    
    const body = await request.json();
    const { slug, data } = body;
    
    if (!slug || !data) {
      return NextResponse.json({ error: "Missing slug or data" }, { status: 400 });
    }
    
    await savePageContent(slug, data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving content:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
