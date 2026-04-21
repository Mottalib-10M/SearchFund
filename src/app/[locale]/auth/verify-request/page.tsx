import Link from "next/link";

export default function VerifyRequestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Animated mail icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-apple-accent/10 mb-8 animate-[bounce_2s_ease-in-out_infinite]">
          <svg
            className="h-10 w-10 text-apple-accent"
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

        <h1 className="text-3xl font-semibold text-apple-black">
          Check your email
        </h1>
        <p className="text-apple-gray-500 mt-3 text-base leading-relaxed max-w-sm mx-auto">
          A sign-in link has been sent to your email address. Click the link to
          continue.
        </p>

        <div className="mt-8 bg-apple-gray-100 rounded-2xl p-5">
          <p className="text-sm text-apple-gray-700">
            The link expires in <span className="font-medium text-apple-black">24 hours</span> and
            can only be used once.
          </p>
        </div>

        <Link
          href="/auth/signin"
          className="inline-block mt-8 text-sm text-apple-accent hover:underline font-medium"
        >
          Back to sign in
        </Link>
      </div>
    </div>
  );
}
