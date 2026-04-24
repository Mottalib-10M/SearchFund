"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-1.5 text-apple-accent hover:underline"
    >
      <Printer className="h-3.5 w-3.5" />
      Print / Save as PDF
    </button>
  );
}
