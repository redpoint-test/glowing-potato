import { NextRequest, NextResponse } from "next/server";
import { searchStatsUnsafe } from "@/lib/statsq";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q") || "";
  return NextResponse.json({ q, results: searchStatsUnsafe(q) });
}
