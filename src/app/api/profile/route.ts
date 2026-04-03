import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthSession, unauthorized } from "@/lib/api-auth";

// GET /api/profile — fetch current user + role profile
export async function GET() {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  const user = await prisma.user.findUnique({
    where: { id: session.id },
    include: {
      searcherProfile: true,
      investorProfile: true,
      sellerProfile: true,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ user });
}

// PUT /api/profile — update user + role profile
export async function PUT(request: Request) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : undefined;
  const bio = typeof body.bio === "string" ? body.bio.trim() : undefined;
  const linkedinUrl = typeof body.linkedinUrl === "string" ? body.linkedinUrl.trim() : undefined;
  const country = typeof body.country === "string" ? body.country.trim() : undefined;
  const city = typeof body.city === "string" ? body.city.trim() : undefined;
  const languages = Array.isArray(body.languages) ? body.languages.filter((l): l is string => typeof l === "string") : undefined;

  try {
    await prisma.user.update({
      where: { id: session.id },
      data: {
        ...(name !== undefined && { name: name || null }),
        ...(bio !== undefined && { bio: bio || null }),
        ...(linkedinUrl !== undefined && { linkedinUrl: linkedinUrl || null }),
        ...(country !== undefined && { country: country || null }),
        ...(city !== undefined && { city: city || null }),
        ...(languages !== undefined && { languages }),
      },
    });

    // Update role-specific profile if provided
    const role = session.role;

    if (role === "SEARCHER" && body.searcherProfile) {
      const sp = body.searcherProfile as Record<string, unknown>;
      await prisma.searcherProfile.upsert({
        where: { userId: session.id },
        update: {
          ...(sp.mbaSchool !== undefined && { mbaSchool: (sp.mbaSchool as string) || null }),
          ...(sp.searchType !== undefined && { searchType: sp.searchType as "TRADITIONAL" | "SELF_FUNDED" | "ACCELERATOR" | "INDEPENDENT_SPONSOR" }),
          ...(sp.targetSectors !== undefined && { targetSectors: sp.targetSectors as string[] }),
          ...(sp.targetCountries !== undefined && { targetCountries: sp.targetCountries as string[] }),
          ...(sp.targetEbitdaMin !== undefined && { targetEbitdaMin: sp.targetEbitdaMin as number | null }),
          ...(sp.targetEbitdaMax !== undefined && { targetEbitdaMax: sp.targetEbitdaMax as number | null }),
          ...(sp.thesisDescription !== undefined && { thesisDescription: (sp.thesisDescription as string) || null }),
          ...(sp.headline !== undefined && { headline: (sp.headline as string) || null }),
        },
        create: {
          userId: session.id,
          searchType: (sp.searchType as "TRADITIONAL" | "SELF_FUNDED" | "ACCELERATOR" | "INDEPENDENT_SPONSOR") || "SELF_FUNDED",
          targetSectors: (sp.targetSectors as string[]) ?? [],
          targetCountries: (sp.targetCountries as string[]) ?? [],
        },
      });
    }

    if (role === "INVESTOR" && body.investorProfile) {
      const ip = body.investorProfile as Record<string, unknown>;
      await prisma.investorProfile.upsert({
        where: { userId: session.id },
        update: {
          ...(ip.investorType !== undefined && { investorType: ip.investorType as "EX_SEARCHER" | "FAMILY_OFFICE" | "INSTITUTIONAL" | "ANGEL" | "ACCELERATOR" }),
          ...(ip.firmName !== undefined && { firmName: (ip.firmName as string) || null }),
          ...(ip.firmWebsite !== undefined && { firmWebsite: (ip.firmWebsite as string) || null }),
          ...(ip.ticketSizeMin !== undefined && { ticketSizeMin: ip.ticketSizeMin as number | null }),
          ...(ip.ticketSizeMax !== undefined && { ticketSizeMax: ip.ticketSizeMax as number | null }),
          ...(ip.targetSectors !== undefined && { targetSectors: ip.targetSectors as string[] }),
          ...(ip.targetCountries !== undefined && { targetCountries: ip.targetCountries as string[] }),
          ...(ip.valueAdd !== undefined && { valueAdd: ip.valueAdd as string[] }),
          ...(ip.investmentThesis !== undefined && { investmentThesis: (ip.investmentThesis as string) || null }),
          ...(ip.headline !== undefined && { headline: (ip.headline as string) || null }),
        },
        create: {
          userId: session.id,
          investorType: (ip.investorType as "EX_SEARCHER" | "FAMILY_OFFICE" | "INSTITUTIONAL" | "ANGEL" | "ACCELERATOR") || "ANGEL",
          targetSectors: (ip.targetSectors as string[]) ?? [],
          targetCountries: (ip.targetCountries as string[]) ?? [],
        },
      });
    }

    if (role === "SELLER" && body.sellerProfile) {
      const sp = body.sellerProfile as Record<string, unknown>;
      await prisma.sellerProfile.upsert({
        where: { userId: session.id },
        update: {
          ...(sp.companyRole !== undefined && { companyRole: (sp.companyRole as string) || null }),
          ...(sp.headline !== undefined && { headline: (sp.headline as string) || null }),
        },
        create: {
          userId: session.id,
          companyRole: (sp.companyRole as string) || null,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Profile update error:", err);
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
}
