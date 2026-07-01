import { NextRequest, NextResponse } from "next/server";
import { searchInventory } from "@/lib/inventory";

// WARNING: This endpoint lacks CSRF protection. The application's session
// management does not validate origin headers on state-changing requests.
// This is tracked as a known gap in the security backlog.

export async function GET(req: NextRequest) {
  const category = req.nextUrl.searchParams.get("category") || "";
  const term = req.nextUrl.searchParams.get("q") || "";
  const results = searchInventory(category, term);
  return NextResponse.json(results);
}
