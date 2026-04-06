import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { verifyAdminToken } from "@/lib/admin-auth";

const protectedPaths = ["/dashboard", "/listings/new"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Admin route protection (separate from NextAuth)
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const adminToken = request.cookies.get("admin_token")?.value;
    if (!adminToken || !(await verifyAdminToken(adminToken))) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    return NextResponse.next();
  }

  const isProtected = protectedPaths.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  if (!isProtected) return NextResponse.next();

  const token = await getToken({ req: request });

  if (!token) {
    const signInUrl = new URL("/auth/signin", request.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  // Redirect to onboarding if profile is incomplete (name not set)
  if (!token.name && pathname !== "/auth/onboarding") {
    const onboardingUrl = new URL("/auth/onboarding", request.url);
    return NextResponse.redirect(onboardingUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/listings/new", "/admin/:path*"],
};
