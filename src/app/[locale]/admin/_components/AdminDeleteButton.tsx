"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AdminConfirmDialog } from "./AdminConfirmDialog";

type ResourceType =
  | "user"
  | "listing"
  | "conversation"
  | "connection"
  | "inquiry"
  | "forum-post"
  | "forum-comment";

const API_PATHS: Record<ResourceType, string> = {
  user: "/api/admin/users",
  listing: "/api/admin/listings",
  conversation: "/api/admin/conversations",
  connection: "/api/admin/connections",
  inquiry: "/api/admin/inquiries",
  "forum-post": "/api/admin/forum/posts",
  "forum-comment": "/api/admin/forum/comments",
};

const LABELS: Record<ResourceType, string> = {
  user: "user",
  listing: "listing",
  conversation: "conversation",
  connection: "connection",
  inquiry: "inquiry",
  "forum-post": "post",
  "forum-comment": "comment",
};

interface AdminDeleteButtonProps {
  resourceId: string;
  resourceType: ResourceType;
  compact?: boolean;
}

export function AdminDeleteButton({
  resourceId,
  resourceType,
  compact = false,
}: AdminDeleteButtonProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleConfirm() {
    setLoading(true);
    try {
      const res = await fetch(`${API_PATHS[resourceType]}/${resourceId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setOpen(false);
        router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to delete");
      }
    } catch {
      alert("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`text-red-600 hover:text-red-800 transition font-medium ${compact ? "text-xs" : "text-sm"}`}
      >
        Delete
      </button>
      <AdminConfirmDialog
        open={open}
        title={`Delete ${LABELS[resourceType]}`}
        message={`Are you sure you want to permanently delete this ${LABELS[resourceType]}? This action cannot be undone.`}
        confirmLabel="Delete"
        variant="danger"
        loading={loading}
        onConfirm={handleConfirm}
        onCancel={() => setOpen(false)}
      />
    </>
  );
}
