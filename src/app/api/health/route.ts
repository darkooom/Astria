import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ status: "ok", service: "astria", time: new Date().toISOString() });
}
