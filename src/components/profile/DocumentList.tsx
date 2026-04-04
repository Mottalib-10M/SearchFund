import { FileText, Download, Lock, Users, Globe } from "lucide-react";

interface Document {
  id: string;
  label: string;
  fileName: string;
  fileSize: number;
  visibility: "PRIVATE" | "CONNECTIONS" | "PUBLIC";
}

interface DocumentListProps {
  documents: Document[];
  connectionStatus: "PENDING" | "ACCEPTED" | "DECLINED" | null;
  isOwner: boolean;
  viewerRole: string | null;
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const VISIBILITY_ICON = {
  PRIVATE: Lock,
  CONNECTIONS: Users,
  PUBLIC: Globe,
} as const;

export default function DocumentList({
  documents,
  connectionStatus,
  isOwner,
  viewerRole,
}: DocumentListProps) {
  // Filter documents based on viewer's access
  const visibleDocs = documents.filter((doc) => {
    if (isOwner) return true;
    if (doc.visibility === "PUBLIC") return true;
    // CONNECTIONS = only accepted investor connections
    if (
      doc.visibility === "CONNECTIONS" &&
      connectionStatus === "ACCEPTED" &&
      viewerRole === "INVESTOR"
    )
      return true;
    return false;
  });

  if (visibleDocs.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-apple-black">Documents</h2>
      <div className="mt-4 space-y-2">
        {visibleDocs.map((doc) => {
          const VisIcon = VISIBILITY_ICON[doc.visibility];
          return (
            <a
              key={doc.id}
              href={`/api/documents/${doc.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-xl border border-apple-gray-200 p-4 hover:bg-apple-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <FileText className="h-5 w-5 text-apple-gray-500 shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-apple-black">
                    {doc.label}
                  </p>
                  <p className="text-xs text-apple-gray-500 truncate">
                    {doc.fileName} &middot; {formatFileSize(doc.fileSize)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {isOwner && (
                  <VisIcon className="h-3.5 w-3.5 text-apple-gray-400" />
                )}
                <Download className="h-4 w-4 text-apple-gray-400 group-hover:text-apple-accent transition-colors" />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
