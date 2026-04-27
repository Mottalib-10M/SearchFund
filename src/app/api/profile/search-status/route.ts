import { NextResponse } from "next/server";
import { getAuthSession } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import { SEARCH_STATUS_ORDER } from "@/lib/search-status-phase-map";

export async function PUT(request: Request) {
  const user = await getAuthSession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (user.role !== "SEARCHER") {
    return NextResponse.json({ error: "Only searchers can update search status" }, { status: 403 });
  }

  const body = await request.json();
  const { searchStatus } = body;

  if (!searchStatus || !SEARCH_STATUS_ORDER.includes(searchStatus)) {
    return NextResponse.json({ error: "Invalid search status" }, { status: 400 });
  }

  try {
    await prisma.searcherProfile.update({
      where: { userId: user.id },
      data: { searchStatus },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to update search status:", error);
    return NextResponse.json({ error: "Failed to update search status" }, { status: 500 });
  }
}
