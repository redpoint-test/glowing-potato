import { NextRequest, NextResponse } from "next/server";
import { searchCacheUnsafe } from "@/lib/cacheq";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q") || "";
  return NextResponse.json({ q, results: searchCacheUnsafe(q) });
}
