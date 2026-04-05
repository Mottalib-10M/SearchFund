import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim() ?? "";

  if (q.length < 2) {
    return NextResponse.json({ listings: [] });
  }

  const listings = await prisma.listing.findMany({
    where: {
      status: "ACTIVE",
      OR: [
        { title: { contains: q, mode: "insensitive" } },
        { summary: { contains: q, mode: "insensitive" } },
        { sector: { contains: q, mode: "insensitive" } },
      ],
    },
    take: 4,
    orderBy: { publishedAt: "desc" },
    select: {
      title: true,
      slug: true,
      sector: true,
      country: true,
    },
  });

  return NextResponse.json({ listings });
}
