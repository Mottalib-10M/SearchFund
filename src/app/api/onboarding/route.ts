import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuthSession, unauthorized } from "@/lib/api-auth";
import { slugify } from "@/lib/utils";
import { z } from "zod";

const baseSchema = z.object({
  name: z.string().min(1).max(100),
  country: z.string().optional(),
  city: z.string().optional(),
  linkedinUrl: z.string().url().optional().or(z.literal("")),
  bio: z.string().max(2000).optional(),
  languages: z.array(z.string()).optional(),
  role: z.enum(["searcher", "investor", "seller"]),
});

const SEARCH_TYPES = ["TRADITIONAL", "SELF_FUNDED", "ACCELERATOR", "INDEPENDENT_SPONSOR"] as const;
const INVESTOR_TYPES = ["EX_SEARCHER", "FAMILY_OFFICE", "INSTITUTIONAL", "ANGEL", "ACCELERATOR"] as const;

const searcherSchema = z.object({
  mbaSchool: z.string().optional(),
  searchType: z.enum(SEARCH_TYPES).optional(),
  targetSectors: z.array(z.string()).optional(),
  targetCountries: z.array(z.string()).optional(),
  ebitdaMin: z.string().optional(),
  ebitdaMax: z.string().optional(),
  thesis: z.string().optional(),
});

const investorSchema = z.object({
  investorType: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.enum(INVESTOR_TYPES).optional()
  ),
  firmName: z.string().optional(),
  ticketMin: z.string().optional(),
  ticketMax: z.string().optional(),
  investorSectors: z.array(z.string()).optional(),
  investorCountries: z.array(z.string()).optional(),
  valueAdd: z.array(z.string()).optional(),
});

const sellerSchema = z.object({
  companyRole: z.string().optional(),
});

function parseNumber(val: string | undefined): number | null {
  if (!val) return null;
  const cleaned = val.replace(/[^0-9.]/g, "");
  const num = parseFloat(cleaned);
  if (isNaN(num)) return null;
  // Values stored in thousands (K) in the database — UI inputs are in K
  return Math.round(num);
}

export async function POST(request: Request) {
  const session = await getAuthSession();
  if (!session) return unauthorized();

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const baseResult = baseSchema.safeParse(body);
  if (!baseResult.success) {
    return NextResponse.json(
      { error: "Invalid data", details: baseResult.error.flatten() },
      { status: 400 }
    );
  }

  const { name, country, city, linkedinUrl, bio, languages, role } = baseResult.data;

  const roleEnum = role.toUpperCase() as "SEARCHER" | "INVESTOR" | "SELLER";

  // Generate a slug from the name
  let baseSlug = slugify(name);
  if (!baseSlug) baseSlug = "user";
  let slug = baseSlug;
  let counter = 0;

  try {
    // Use a transaction to update user + create profile atomically
    await prisma.$transaction(async (tx) => {
      // Update user
      await tx.user.update({
        where: { id: session.id },
        data: {
          name,
          country: country || null,
          city: city || null,
          linkedinUrl: linkedinUrl || null,
          bio: bio || null,
          languages: languages ?? [],
          role: roleEnum,
        },
      });

      // Create role-specific profile
      if (role === "searcher") {
        const sData = searcherSchema.parse(body);

        // Ensure unique slug for searcher
        while (await tx.searcherProfile.findUnique({ where: { slug } })) {
          counter++;
          slug = `${baseSlug}-${counter}`;
        }

        await tx.searcherProfile.upsert({
          where: { userId: session.id },
          update: {
            mbaSchool: sData.mbaSchool || null,
            searchType: sData.searchType ?? "SELF_FUNDED",
            targetSectors: sData.targetSectors ?? [],
            targetCountries: sData.targetCountries ?? [],
            targetEbitdaMin: parseNumber(sData.ebitdaMin),
            targetEbitdaMax: parseNumber(sData.ebitdaMax),
            thesisDescription: sData.thesis || null,
            slug,
          },
          create: {
            userId: session.id,
            mbaSchool: sData.mbaSchool || null,
            searchType: sData.searchType ?? "SELF_FUNDED",
            targetSectors: sData.targetSectors ?? [],
            targetCountries: sData.targetCountries ?? [],
            targetEbitdaMin: parseNumber(sData.ebitdaMin),
            targetEbitdaMax: parseNumber(sData.ebitdaMax),
            thesisDescription: sData.thesis || null,
            slug,
          },
        });
      } else if (role === "investor") {
        const iData = investorSchema.parse(body);

        while (await tx.investorProfile.findUnique({ where: { slug } })) {
          counter++;
          slug = `${baseSlug}-${counter}`;
        }

        await tx.investorProfile.upsert({
          where: { userId: session.id },
          update: {
            investorType: iData.investorType ?? "ANGEL",
            firmName: iData.firmName || null,
            ticketSizeMin: parseNumber(iData.ticketMin),
            ticketSizeMax: parseNumber(iData.ticketMax),
            targetSectors: iData.investorSectors ?? [],
            targetCountries: iData.investorCountries ?? [],
            valueAdd: iData.valueAdd ?? [],
            slug,
          },
          create: {
            userId: session.id,
            investorType: iData.investorType ?? "ANGEL",
            firmName: iData.firmName || null,
            ticketSizeMin: parseNumber(iData.ticketMin),
            ticketSizeMax: parseNumber(iData.ticketMax),
            targetSectors: iData.investorSectors ?? [],
            targetCountries: iData.investorCountries ?? [],
            valueAdd: iData.valueAdd ?? [],
            slug,
          },
        });
      } else if (role === "seller") {
        const sData = sellerSchema.parse(body);

        while (await tx.sellerProfile.findUnique({ where: { slug } })) {
          counter++;
          slug = `${baseSlug}-${counter}`;
        }

        await tx.sellerProfile.upsert({
          where: { userId: session.id },
          update: {
            companyRole: sData.companyRole || null,
            slug,
          },
          create: {
            userId: session.id,
            companyRole: sData.companyRole || null,
            slug,
          },
        });
      }
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Onboarding error:", err);
    return NextResponse.json(
      { error: "Failed to save profile" },
      { status: 500 }
    );
  }
}
