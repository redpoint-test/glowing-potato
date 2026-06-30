import { NextRequest, NextResponse } from "next/server";
import { runDnsLookupUnsafe } from "@/lib/training-tools";

export async function GET(request: NextRequest) {
  const host = request.nextUrl.searchParams.get("host") || "";

  return new NextResponse(runDnsLookupUnsafe(host), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
