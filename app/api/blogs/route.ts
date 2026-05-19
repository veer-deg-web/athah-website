import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Blog from "@/lib/models/Blog";
import { getAdminSession } from "@/lib/admin-auth";

export async function GET() {
  try {
    await dbConnect();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ ok: true, data: blogs });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "Failed to fetch blogs" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();
    const blog = new Blog(body);
    await blog.save();

    return NextResponse.json({ ok: true, message: "Blog added successfully", data: blog });
  } catch (error: any) {
    return NextResponse.json({ ok: false, message: error.message || "Failed to create blog post" }, { status: 500 });
  }
}
