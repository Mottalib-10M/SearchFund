"use client";

import { Download } from "lucide-react";

export function ExportCSVButton() {
  async function handleExport() {
    const { PROSPECTION_INVESTORS } = await import(
      "../_data/prospection-investors"
    );
    const headers = [
      "Name",
      "Type",
      "Country",
      "City",
      "Website",
      "Check Size / AUM",
      "Description",
      "Contact",
    ];
    const rows = PROSPECTION_INVESTORS.map((inv) =>
      [
        inv.name,
        inv.type,
        inv.country,
        inv.city,
        inv.website,
        inv.checkSize,
        inv.description,
        inv.contact,
      ].map((v) => `"${v.replace(/"/g, '""')}"`)
    );
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "search-fund-investors.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <button
      type="button"
      onClick={handleExport}
      className="flex items-center gap-2 px-4 py-2 bg-apple-black text-white text-sm rounded-lg hover:bg-apple-gray-900 transition cursor-pointer"
    >
      <Download size={16} />
      Export CSV
    </button>
  );
}
