import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Content from "@/lib/models/Content";
import { getAdminSession } from "@/lib/admin-auth";
import path from "path";
import crypto from "crypto";
import { writeFile, mkdir } from "fs/promises";

export async function POST(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ ok: false, message: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ ok: false, message: "No file provided" }, { status: 400 });
    }

    await dbConnect();

    const id = crypto.randomUUID();
    const extension = path.extname(file.name) || ".bin";
    const storedName = `${id}${extension}`;
    const storageRoot = path.join(process.cwd(), "storage", "content");
    
    await mkdir(storageRoot, { recursive: true });
    
    const bytes = Buffer.from(await file.arrayBuffer());
    await writeFile(path.join(storageRoot, storedName), bytes);

    const fileUrl = `/api/content/${storedName}`;

    const content = new Content({
      filename: file.name,
      storedName,
      url: fileUrl,
      mimeType: file.type,
      size: file.size,
    });

    await content.save();

    return NextResponse.json({ ok: true, message: "Content uploaded successfully", data: content });
  } catch (error: any) {
    return NextResponse.json({ ok: false, message: error.message || "Failed to upload content" }, { status: 500 });
  }
}
