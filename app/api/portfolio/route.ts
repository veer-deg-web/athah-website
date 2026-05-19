import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Portfolio from "@/lib/models/Portfolio";
import { getAdminSession } from "@/lib/admin-auth";

export async function GET() {
  try {
    await dbConnect();
    const portfolios = await Portfolio.find({}).sort({ order: 1 });
    return NextResponse.json({ ok: true, data: portfolios });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "Failed to fetch portfolio data" }, { status: 500 });
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
    const portfolio = new Portfolio(body);
    await portfolio.save();

    return NextResponse.json({ ok: true, message: "Portfolio category added successfully", data: portfolio });
  } catch (error: any) {
    return NextResponse.json({ ok: false, message: error.message || "Failed to create portfolio data" }, { status: 500 });
  }
}
