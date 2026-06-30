import { NextResponse } from "next/server";

const APP_VERSION = "1.0.0";

export function GET() {
  return NextResponse.json({
    status: "ok",
    app: "vtm-next",
    version: APP_VERSION,
    uptime: Math.round(process.uptime()),
  });
}
