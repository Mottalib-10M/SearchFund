"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import DocumentUploadSection from "@/components/profile/DocumentUploadSection";

interface Document {
  id: string;
  label: string;
  fileName: string;
  fileUrl: string;
  fileSize: number;
  visibility: "PRIVATE" | "CONNECTIONS" | "PUBLIC";
}

export default function DocumentsPage() {
  const { data: session } = useSession();
  const [documents, setDocuments] = useState<Document[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDocuments() {
      try {
        const res = await fetch("/api/documents");
        if (!res.ok) throw new Error("Failed to load documents");
        const data = await res.json();
        setDocuments(data.documents ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load documents");
      }
    }
    if (session?.user) fetchDocuments();
  }, [session]);

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-semibold text-apple-black">My Documents</h1>
      <p className="text-sm text-apple-gray-500 mt-1">
        Upload and manage your fundraising documents. Control visibility for each document individually.
      </p>

      {error && (
        <div className="mt-6 bg-red-50 text-red-600 rounded-lg p-3 text-sm">
          {error}
        </div>
      )}

      {documents === null && !error ? (
        <div className="mt-8 space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-20 rounded-xl bg-apple-gray-100 animate-pulse"
            />
          ))}
        </div>
      ) : documents ? (
        <div className="mt-6">
          <DocumentUploadSection initialDocuments={documents} />
        </div>
      ) : null}
    </div>
  );
}
