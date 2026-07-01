import { NextRequest, NextResponse } from "next/server";
import { searchQueueUnsafe } from "@/lib/queueq";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q") || "";
  return NextResponse.json({ q, results: searchQueueUnsafe(q) });
}
