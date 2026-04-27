"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AdminConfirmDialog } from "./AdminConfirmDialog";

interface AdminDeactivateButtonProps {
  userId: string;
  isActive: boolean;
  compact?: boolean;
}

export function AdminDeactivateButton({
  userId,
  isActive,
  compact = false,
}: AdminDeactivateButtonProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleConfirm() {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !isActive }),
      });
      if (res.ok) {
        setOpen(false);
        router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || "Failed to update user");
      }
    } catch {
      alert("Network error");
    } finally {
      setLoading(false);
    }
  }

  const action = isActive ? "Deactivate" : "Reactivate";
  const variant = isActive ? "warning" : "warning";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`font-medium transition ${compact ? "text-xs" : "text-sm"} ${
          isActive
            ? "text-orange-600 hover:text-orange-800"
            : "text-green-600 hover:text-green-800"
        }`}
      >
        {action}
      </button>
      <AdminConfirmDialog
        open={open}
        title={`${action} user`}
        message={
          isActive
            ? "This will prevent the user from accessing their account. They can be reactivated later."
            : "This will restore the user's access to their account."
        }
        confirmLabel={action}
        variant={variant}
        loading={loading}
        onConfirm={handleConfirm}
        onCancel={() => setOpen(false)}
      />
    </>
  );
}
