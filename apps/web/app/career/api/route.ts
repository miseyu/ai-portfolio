import { NextResponse } from "next/server";
import { getTimelineItems } from "../data/index";

export function GET(): NextResponse {
  const items = getTimelineItems();
  return NextResponse.json({ items });
}
