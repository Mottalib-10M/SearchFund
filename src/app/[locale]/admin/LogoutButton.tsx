"use client";

import { useRouter } from "next/navigation";

export default function AdminLogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-apple-gray-500 hover:text-apple-error transition px-3 py-1.5 rounded-lg hover:bg-apple-error/5"
    >
      Logout
    </button>
  );
}
