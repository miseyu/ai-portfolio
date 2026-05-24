import { NextResponse } from "next/server";
import { getProjectBySlug } from "../../data/index";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
): Promise<NextResponse> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (project === undefined) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
