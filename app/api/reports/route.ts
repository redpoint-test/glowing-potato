import { NextRequest, NextResponse } from "next/server";
import { searchReportsUnsafe } from "@/lib/reports";

export async function GET(request: NextRequest) {
  const term = request.nextUrl.searchParams.get("q") || "";

  return NextResponse.json({
    term,
    results: searchReportsUnsafe(term),
  });
}
