import { NextRequest, NextResponse } from "next/server";
import { searchAuditUnsafe } from "@/lib/auditq";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q") || "";
  return NextResponse.json({ q, results: searchAuditUnsafe(q) });
}
