"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError(null);

    try {
      const res = await signIn("email", {
        email,
        callbackUrl: "/dashboard",
        redirect: false,
      });

      if (res?.error) {
        setError("Unable to send the magic link. Please try again.");
        setLoading(false);
        return;
      }

      router.push("/auth/verify-request");
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-3xl font-semibold text-apple-black text-center">
        Sign in
      </h1>
      <p className="text-apple-gray-500 text-center mt-2">
        Welcome back to SearchFundMarket
      </p>

      {/* Email magic link */}
      <form onSubmit={handleEmailSignIn} className="mt-8">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-apple-black mb-1.5"
        >
          Email address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="bg-apple-gray-100 rounded-lg px-4 py-3 w-full text-apple-black placeholder:text-apple-gray-500 text-sm focus:ring-2 focus:ring-apple-accent/30 transition-shadow"
        />

        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-apple-accent text-white rounded-full w-full py-3 mt-3 text-sm font-medium hover:bg-apple-accent-hover transition-colors disabled:opacity-50 cursor-pointer"
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </span>
          ) : (
            "Send magic link"
          )}
        </button>
      </form>

      <p className="text-center text-xs text-apple-gray-500 mt-4">
        We&apos;ll send you a secure link to sign in - no password needed.
      </p>

      {/* Bottom link */}
      <p className="text-center text-sm text-apple-gray-500 mt-8">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/signup"
          className="text-apple-accent hover:underline font-medium"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
