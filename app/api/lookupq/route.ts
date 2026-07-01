import { NextRequest, NextResponse } from "next/server";
import { searchLookupUnsafe } from "@/lib/lookupq";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q") || "";
  return NextResponse.json({ q, results: searchLookupUnsafe(q) });
}
