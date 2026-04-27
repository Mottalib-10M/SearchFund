import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "./auth";
import { prisma } from "./prisma";

export async function getAuthSession() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return null;

  const user = session.user as { id: string; name?: string | null; email?: string | null; image?: string | null; role?: string };

  // Block deactivated users
  const dbUser = await prisma.user.findUnique({
    where: { id: user.id },
    select: { isActive: true },
  });
  if (!dbUser || !dbUser.isActive) return null;

  return user;
}

export function unauthorized(message = "Authentication required") {
  return NextResponse.json({ error: message }, { status: 401 });
}
