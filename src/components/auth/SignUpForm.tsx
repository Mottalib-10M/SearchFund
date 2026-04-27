"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Role = "searcher" | "investor" | "seller";

const roles: {
  key: Role;
  label: string;
  description: string;
  borderColor: string;
}[] = [
  {
    key: "searcher",
    label: "Searcher",
    description: "I'm looking to acquire and operate a business",
    borderColor: "border-apple-searcher",
  },
  {
    key: "investor",
    label: "Investor",
    description: "I invest in search fund entrepreneurs",
    borderColor: "border-apple-investor",
  },
  {
    key: "seller",
    label: "Seller",
    description: "I want to sell my business",
    borderColor: "border-apple-seller",
  },
];

function RoleIcon({ role, className }: { role: Role; className?: string }) {
  switch (role) {
    case "searcher":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
          />
        </svg>
      );
    case "investor":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          />
        </svg>
      );
    case "seller":
      return (
        <svg
          className={className}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>
      );
  }
}

export function SignUpForm() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [existingAccount, setExistingAccount] = useState(false);

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setStep(2);
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !selectedRole) return;
    setLoading(true);
    setError(null);
    setExistingAccount(false);

    try {
      // Check if account already exists
      const checkRes = await fetch("/api/auth/check-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.toLowerCase().trim() }),
      });
      const { exists } = await checkRes.json();

      // Fire magic link in background — don't block the UI
      signIn("email", {
        email,
        callbackUrl: exists ? "/dashboard" : `/auth/onboarding?role=${selectedRole}`,
        redirect: false,
      }).catch(() => {
        // Email send failed silently — user can retry from sign-in page
      });

      // Show result immediately
      if (exists) {
        setExistingAccount(true);
        setLoading(false);
      } else {
        router.push("/auth/verify-request");
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  if (step === 1) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold text-apple-black text-center">
          Get started
        </h1>
        <p className="text-apple-gray-500 text-center mt-2">
          Choose how you&apos;ll use the platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {roles.map((role) => (
            <button
              key={role.key}
              type="button"
              onClick={() => handleRoleSelect(role.key)}
              className={`border-2 border-transparent hover:${role.borderColor} rounded-xl p-4 md:p-6 cursor-pointer text-center transition-all group`}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-apple-gray-100 group-hover:bg-apple-accent/10 transition-colors mb-3 md:mb-4">
                <RoleIcon role={role.key} className="h-6 w-6 text-apple-gray-700 group-hover:text-apple-accent transition-colors" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-apple-black">
                {role.label}
              </h3>
              <p className="text-apple-gray-500 text-xs md:text-sm mt-1">
                {role.description}
              </p>
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-apple-gray-500 mt-8">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="text-apple-accent hover:underline font-medium"
          >
            Sign in
          </Link>
        </p>
      </div>
    );
  }

  // Existing account detected - show info message
  if (existingAccount) {
    return (
      <div className="w-full max-w-md mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-apple-accent/10 mb-6">
          <svg className="h-8 w-8 text-apple-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </div>

        <h1 className="text-3xl font-semibold text-apple-black">
          Account already exists
        </h1>
        <p className="text-apple-gray-500 mt-3 leading-relaxed">
          An account with <strong className="text-apple-black">{email}</strong>{" "}already exists.
          We&apos;ve sent you a sign-in link - check your inbox.
        </p>

        <div className="mt-8 p-4 bg-apple-gray-100 rounded-xl">
          <p className="text-sm text-apple-gray-700">
            Each email can only be linked to one account.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          <Link
            href="/auth/signin"
            className="block bg-apple-accent text-white rounded-full w-full py-3 text-sm font-medium hover:bg-apple-accent-hover transition-colors text-center"
          >
            Go to sign in
          </Link>
          <button
            type="button"
            onClick={() => {
              setExistingAccount(false);
              setEmail("");
              setStep(1);
            }}
            className="block w-full text-sm text-apple-gray-500 hover:text-apple-black transition-colors cursor-pointer"
          >
            Try a different email
          </button>
        </div>
      </div>
    );
  }

  // Step 2 - Email auth with selected role
  const roleLabel = roles.find((r) => r.key === selectedRole)?.label;

  return (
    <div className="w-full max-w-md mx-auto">
      <button
        type="button"
        onClick={() => {
          setStep(1);
          setError(null);
        }}
        className="flex items-center gap-1.5 text-apple-gray-500 text-sm hover:text-apple-black transition-colors mb-6 cursor-pointer"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        Back
      </button>

      <h1 className="text-3xl font-semibold text-apple-black text-center">
        Continue as {roleLabel}
      </h1>
      <p className="text-apple-gray-500 text-center mt-2">
        Create your account to get started
      </p>

      {/* Email magic link */}
      <form onSubmit={handleEmailSignIn} className="mt-8">
        <label
          htmlFor="signup-email"
          className="block text-sm font-medium text-apple-black mb-1.5"
        >
          Email address
        </label>
        <input
          id="signup-email"
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

      <p className="text-center text-sm text-apple-gray-500 mt-8">
        Already have an account?{" "}
        <Link
          href="/auth/signin"
          className="text-apple-accent hover:underline font-medium"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
