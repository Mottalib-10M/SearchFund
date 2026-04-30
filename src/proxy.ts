import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { verifyAdminToken } from "@/lib/admin-auth";

const locales = ["en", "fr", "es", "it", "pt"];
const defaultLocale = "en";
const skipPrefixes = ["/api/", "/_next/", "/favicon", "/site.webmanifest"];


function hasLocalePrefix(pathname: string): boolean {
  return locales.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );
}

function extractLocale(pathname: string): string {
  return pathname.split("/")[1];
}

function stripLocale(pathname: string, locale: string): string {
  return pathname.replace(`/${locale}`, "") || "/";
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Skip API routes, static files, assets
  if (
    skipPrefixes.some((p) => pathname.startsWith(p)) ||
    /\.(.+)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // 2. If no locale prefix, redirect to English
  if (!hasLocalePrefix(pathname)) {
    const url = new URL(`/${defaultLocale}${pathname}`, request.url);
    url.search = request.nextUrl.search;
    return NextResponse.redirect(url);
  }

  // 2b. If non-English locale prefix, redirect to English equivalent
  const reqLocale = extractLocale(pathname);
  if (reqLocale !== defaultLocale && locales.includes(reqLocale)) {
    const pathWithoutLocale = stripLocale(pathname, reqLocale);
    const url = new URL(`/${defaultLocale}${pathWithoutLocale}`, request.url);
    url.search = request.nextUrl.search;
    return NextResponse.redirect(url, 301);
  }

  // 3. Extract locale and path without locale
  const locale = extractLocale(pathname);
  const pathWithoutLocale = stripLocale(pathname, locale);

  // 4. Admin route protection (separate from NextAuth)
  if (
    pathWithoutLocale.startsWith("/admin") &&
    pathWithoutLocale !== "/admin/login"
  ) {
    const adminToken = request.cookies.get("admin_token")?.value;
    if (!adminToken || !(await verifyAdminToken(adminToken))) {
      return NextResponse.redirect(
        new URL(`/${locale}/admin/login`, request.url)
      );
    }
    return NextResponse.next();
  }

  // 5. Dashboard protection
  if (
    pathWithoutLocale === "/dashboard" ||
    pathWithoutLocale.startsWith("/dashboard/")
  ) {
    const token = await getToken({ req: request });

    if (!token) {
      const signInUrl = new URL(`/${locale}/auth/signin`, request.url);
      signInUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(signInUrl);
    }

    // Redirect to onboarding if profile is incomplete (name not set)
    if (!token.name && pathWithoutLocale !== "/auth/onboarding") {
      return NextResponse.redirect(
        new URL(`/${locale}/auth/onboarding`, request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\..*).*)",
  ],
};
