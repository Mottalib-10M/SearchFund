"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("searcher");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-6 flex items-center gap-3 text-apple-seller">
        <CheckCircle size={20} />
        <p className="text-sm font-medium">You&apos;re on the list! We&apos;ll be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="waitlist-email" className="text-sm font-medium text-apple-black block mb-1">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-2.5 text-sm rounded-lg border border-apple-gray-300 bg-white text-apple-black placeholder:text-apple-gray-500 focus:border-apple-accent focus:ring-1 focus:ring-apple-accent"
        />
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-apple-black mb-2">I am a...</legend>
        <div className="flex flex-wrap gap-3">
          {[
            { value: "searcher", label: "Searcher" },
            { value: "investor", label: "Investor" },
            { value: "seller", label: "Seller or intermediary" },
          ].map((opt) => (
            <label
              key={opt.value}
              className={`flex items-center gap-2 text-sm rounded-lg border px-4 py-2.5 cursor-pointer transition-colors ${
                role === opt.value
                  ? "border-apple-accent bg-apple-accent/5 text-apple-accent"
                  : "border-apple-gray-300 text-apple-gray-700 hover:bg-apple-gray-100"
              }`}
            >
              <input
                type="radio"
                name="role"
                value={opt.value}
                checked={role === opt.value}
                onChange={(e) => setRole(e.target.value)}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-apple-accent text-white text-sm font-medium px-6 py-2.5 hover:bg-apple-accent-hover transition-colors disabled:opacity-50"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            Joining...
          </>
        ) : (
          "Join the waitlist"
        )}
      </button>

      <p className="text-xs text-apple-gray-500">
        We&apos;ll only use your email to notify you about the marketplace launch. No spam.
      </p>
    </form>
  );
}
