"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
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
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setStep(2);
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await signIn("email", { email, callbackUrl: "/auth/onboarding" });
    setEmailSent(true);
    setLoading(false);
  };

  if (step === 1) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold text-apple-black text-center">
          Join SearchFundMarket
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
              className={`border-2 border-transparent hover:${role.borderColor} rounded-xl p-6 cursor-pointer text-center transition-all group`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-apple-gray-100 group-hover:bg-apple-accent/10 transition-colors mb-4">
                <RoleIcon role={role.key} className="h-6 w-6 text-apple-gray-700 group-hover:text-apple-accent transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-apple-black">
                {role.label}
              </h3>
              <p className="text-apple-gray-500 text-sm mt-1">
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

  // Step 2 — Auth with selected role
  const roleLabel = roles.find((r) => r.key === selectedRole)?.label;

  return (
    <div className="w-full max-w-md mx-auto">
      <button
        type="button"
        onClick={() => {
          setStep(1);
          setEmailSent(false);
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

      {/* Social buttons */}
      <div className="mt-8 space-y-3">
        <button
          type="button"
          onClick={() =>
            signIn("google", { callbackUrl: "/auth/onboarding" })
          }
          className="flex items-center justify-center gap-3 w-full bg-apple-gray-100 rounded-lg py-3 text-sm font-medium text-apple-black hover:bg-apple-gray-300/50 transition-colors cursor-pointer"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>

        <button
          type="button"
          onClick={() =>
            signIn("linkedin", { callbackUrl: "/auth/onboarding" })
          }
          className="flex items-center justify-center gap-3 w-full bg-apple-gray-100 rounded-lg py-3 text-sm font-medium text-apple-black hover:bg-apple-gray-300/50 transition-colors cursor-pointer"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="#0A66C2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          Continue with LinkedIn
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mt-8">
        <hr className="flex-1 border-apple-gray-300" />
        <span className="text-apple-gray-500 text-sm">or</span>
        <hr className="flex-1 border-apple-gray-300" />
      </div>

      {/* Email magic link */}
      {emailSent ? (
        <div className="mt-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-apple-accent/10 mb-4">
            <svg
              className="h-6 w-6 text-apple-accent"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <p className="text-apple-black font-medium">Check your email</p>
          <p className="text-apple-gray-500 text-sm mt-1">
            We sent a magic link to{" "}
            <span className="text-apple-black">{email}</span>
          </p>
        </div>
      ) : (
        <form onSubmit={handleEmailSignIn} className="mt-6">
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
          <button
            type="submit"
            disabled={loading}
            className="bg-apple-accent text-white rounded-full w-full py-3 mt-3 text-sm font-medium hover:bg-apple-accent-hover transition-colors disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Sending..." : "Send magic link"}
          </button>
        </form>
      )}

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
