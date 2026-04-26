"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { CheckCircle, Loader2, Send } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
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
      <div className="rounded-2xl border border-apple-gray-300/50 bg-white p-8 md:p-10">
        <div className="flex flex-col items-center text-center py-8">
          <div className="w-12 h-12 rounded-full bg-apple-seller/10 flex items-center justify-center">
            <CheckCircle size={24} className="text-apple-seller" />
          </div>
          <h2 className="text-lg font-semibold text-apple-black mt-4">
            Message sent
          </h2>
          <p className="text-sm text-apple-gray-700 mt-2 max-w-sm leading-relaxed">
            Thanks for reaching out. We&apos;ll get back to you within 24 to 48
            hours on business days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-apple-gray-300/50 bg-white p-8 md:p-10"
    >
      <h2 className="text-lg font-semibold text-apple-black">
        Send us a message
      </h2>
      <p className="text-sm text-apple-gray-700 mt-1 leading-relaxed">
        Fill out the form and we&apos;ll get back to you as soon as possible.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="text-sm font-medium text-apple-black block mb-1"
          >
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-2.5 text-sm rounded-lg border border-apple-gray-300 bg-white text-apple-black placeholder:text-apple-gray-500 focus:border-apple-accent focus:ring-1 focus:ring-apple-accent"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="text-sm font-medium text-apple-black block mb-1"
          >
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 text-sm rounded-lg border border-apple-gray-300 bg-white text-apple-black placeholder:text-apple-gray-500 focus:border-apple-accent focus:ring-1 focus:ring-apple-accent"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-apple-black block mb-1"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          required
          minLength={10}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us how we can help..."
          className="w-full px-4 py-2.5 text-sm rounded-lg border border-apple-gray-300 bg-white text-apple-black placeholder:text-apple-gray-500 focus:border-apple-accent focus:ring-1 focus:ring-apple-accent resize-y"
        />
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-apple-accent text-white text-sm font-medium px-6 py-2.5 hover:bg-apple-accent-hover transition-colors disabled:opacity-50"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={14} />
            Send message
          </>
        )}
      </button>
    </form>
  );
}
