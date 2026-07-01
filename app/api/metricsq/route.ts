import { NextRequest, NextResponse } from "next/server";
import { searchMetricsUnsafe } from "@/lib/metricsq";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q") || "";
  return NextResponse.json({ q, results: searchMetricsUnsafe(q) });
}
