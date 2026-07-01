import { NextRequest, NextResponse } from "next/server";
import { searchKnownUnsafe } from "@/lib/__fixtures__/knownq";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q") || "";
  return NextResponse.json({ q, results: searchKnownUnsafe(q) });
}
