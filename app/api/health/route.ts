import { NextResponse } from "next/server";

// Always evaluate at request time so the check reflects live server state.
export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(
    { status: "ok", uptime: process.uptime() },
    { status: 200 }
  );
}
