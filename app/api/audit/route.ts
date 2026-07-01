import { NextRequest, NextResponse } from "next/server";
import { searchAuditLogs } from "@/lib/audit-log";

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("user_id") || "";
  const query = req.nextUrl.searchParams.get("q") || "";
  const logs = searchAuditLogs(userId, query);
  return NextResponse.json(logs);
}
