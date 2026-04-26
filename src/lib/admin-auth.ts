const COOKIE_NAME = "admin_token";
const SECRET = process.env.NEXTAUTH_SECRET ?? "dev-fallback-secret";

async function hmacSign(payload: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}

async function hmacVerify(payload: string, signature: string): Promise<boolean> {
  const expected = await hmacSign(payload);
  return expected === signature;
}

export async function signAdminToken(): Promise<string> {
  const payload = JSON.stringify({ role: "admin", iat: Date.now() });
  const sig = await hmacSign(payload);
  return btoa(payload) + "." + sig;
}

export async function verifyAdminToken(token: string): Promise<boolean> {
  try {
    const [encodedPayload, sig] = token.split(".");
    if (!encodedPayload || !sig) return false;
    const payload = atob(encodedPayload);
    const valid = await hmacVerify(payload, sig);
    if (!valid) return false;

    const data = JSON.parse(payload);
    // Token expires after 7 days
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    if (Date.now() - data.iat > sevenDays) return false;

    return data.role === "admin";
  } catch {
    return false;
  }
}

/**
 * Check admin auth from server components (uses next/headers cookies).
 * Do NOT import this function in proxy.ts - it uses server-only APIs.
 */
export async function isAdminAuthenticated(): Promise<boolean> {
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyAdminToken(token);
}

export { COOKIE_NAME };
