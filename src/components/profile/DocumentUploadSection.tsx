"use client";

import { useState, useRef, useCallback } from "react";
import { Upload, FileText, Eye, Trash2, X, Lock, Users, Globe, Info } from "lucide-react";

interface Document {
  id: string;
  label: string;
  fileName: string;
  fileUrl: string;
  fileSize: number;
  visibility: "PRIVATE" | "CONNECTIONS" | "PUBLIC";
}

const DOCUMENT_SLOTS = [
  { label: "PPM", description: "Private Placement Memorandum" },
  { label: "Executive Summary", description: "Short version (2-3 pages)" },
  { label: "Financial Model", description: "Search budget (18-24 months)" },
  { label: "Operating Agreement", description: "LLC / SAS operating agreement" },
  { label: "Subscription Agreements", description: "Investment contracts" },
  { label: "Pitch Deck", description: "Presentation slides" },
];

const VISIBILITY_OPTIONS = [
  { value: "PRIVATE" as const, label: "Private", icon: Lock, description: "Only you" },
  { value: "CONNECTIONS" as const, label: "Investors", icon: Users, description: "Investor connections" },
  { value: "PUBLIC" as const, label: "Public", icon: Globe, description: "Everyone" },
];

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

interface DocumentUploadSectionProps {
  initialDocuments: Document[];
}

export default function DocumentUploadSection({ initialDocuments }: DocumentUploadSectionProps) {
  const [documents, setDocuments] = useState<Document[]>(initialDocuments);
  const [uploading, setUploading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [previewDoc, setPreviewDoc] = useState<{ id: string; label: string; fileName: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pendingLabelRef = useRef<string | null>(null);

  const getDoc = useCallback(
    (label: string) => documents.find((d) => d.label === label) ?? null,
    [documents]
  );

  const handleUpload = async (file: File, label: string, visibility: string) => {
    setUploading(label);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("label", label);
    formData.append("visibility", visibility);

    try {
      const res = await fetch("/api/documents", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");

      setDocuments((prev) => {
        const filtered = prev.filter((d) => d.label !== label);
        return [...filtered, data.document];
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(null);
    }
  };

  const handleDelete = async (docId: string, label: string) => {
    setError(null);
    try {
      const res = await fetch(`/api/documents?id=${docId}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Delete failed");
      }
      setDocuments((prev) => prev.filter((d) => d.label !== label));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    }
  };

  const handleVisibilityChange = async (docId: string, visibility: string) => {
    setError(null);
    try {
      const res = await fetch(`/api/documents/${docId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visibility }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Update failed");

      setDocuments((prev) =>
        prev.map((d) => (d.id === docId ? data.document : d))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Update failed");
    }
  };

  const triggerFileInput = (label: string) => {
    pendingLabelRef.current = label;
    fileInputRef.current?.click();
  };

  const onFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const label = pendingLabelRef.current;
    if (file && label) {
      const existing = getDoc(label);
      handleUpload(file, label, existing?.visibility ?? "PRIVATE");
    }
    e.target.value = "";
    pendingLabelRef.current = null;
  };

  return (
    <div className="space-y-6 pt-4 border-t border-apple-gray-100">
      <h3 className="text-base font-medium text-apple-black">Documents</h3>

      <div className="flex items-start gap-2.5 rounded-lg bg-blue-50 p-3">
        <Info className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
        <p className="text-sm text-blue-700">
          Upload key documents for your investors. Control who can see each document
          with the visibility selector: Private (only you), Investors (your accepted investor
          connections only), or Public (everyone).
        </p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 rounded-lg p-3 text-sm">
          {error}
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,.docx,.pptx,.xlsx"
        className="hidden"
        onChange={onFileSelected}
      />

      <div className="space-y-3">
        {DOCUMENT_SLOTS.map((slot) => {
          const doc = getDoc(slot.label);
          const isUploading = uploading === slot.label;

          return (
            <div
              key={slot.label}
              className="rounded-xl border border-apple-gray-200 p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-apple-black">
                    {slot.label}
                  </p>
                  <p className="text-xs text-apple-gray-500 mt-0.5 hidden sm:block">
                    {slot.description}
                  </p>

                  {doc && (
                    <div className="flex items-center gap-2 mt-2">
                      <FileText className="h-4 w-4 text-apple-gray-500 shrink-0" />
                      <span className="text-sm text-apple-gray-700 truncate">
                        {doc.fileName}
                      </span>
                      <span className="text-xs text-apple-gray-500 shrink-0 hidden sm:inline">
                        ({formatFileSize(doc.fileSize)})
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  {doc && (
                    <>
                      <select
                        value={doc.visibility}
                        onChange={(e) =>
                          handleVisibilityChange(doc.id, e.target.value)
                        }
                        className="text-xs bg-apple-gray-100 rounded-lg px-1.5 sm:px-2 py-1.5 border-none text-apple-gray-700 focus:ring-2 focus:ring-apple-accent"
                      >
                        {VISIBILITY_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => setPreviewDoc({ id: doc.id, label: doc.label, fileName: doc.fileName })}
                        className="p-1.5 rounded-lg text-apple-gray-500 hover:text-apple-accent hover:bg-apple-gray-100 transition-colors"
                        title="View document"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(doc.id, doc.label)}
                        className="p-1.5 rounded-lg text-apple-gray-500 hover:text-red-500 hover:bg-red-50 transition-colors"
                        title="Delete document"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </>
                  )}

                  <button
                    onClick={() => triggerFileInput(slot.label)}
                    disabled={isUploading}
                    className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-full bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200 transition-colors disabled:opacity-50"
                  >
                    <Upload className="h-3.5 w-3.5" />
                    {isUploading ? "..." : doc ? "Replace" : "Upload"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Document preview modal */}
      {previewDoc && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setPreviewDoc(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-apple-gray-200">
              <div>
                <h3 className="text-sm font-semibold text-apple-black">{previewDoc.label}</h3>
                <p className="text-xs text-apple-gray-500">{previewDoc.fileName}</p>
              </div>
              <button
                onClick={() => setPreviewDoc(null)}
                className="p-1.5 rounded-lg text-apple-gray-500 hover:text-apple-black hover:bg-apple-gray-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {/* iframe */}
            <div className="flex-1 bg-apple-gray-100">
              <iframe
                src={`/api/documents/${previewDoc.id}`}
                className="w-full h-full border-none"
                title={previewDoc.label}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
