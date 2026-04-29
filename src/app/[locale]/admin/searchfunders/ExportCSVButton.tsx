"use client";

export function ExportCSVButton() {
  async function handleExport() {
    const { PROSPECTION_SEARCHFUNDERS } = await import(
      "../_data/prospection-searchfunders"
    );

    const escape = (v: string) =>
      `"${(v ?? "").replace(/"/g, '""')}"`;

    const header = [
      "Name",
      "Status",
      "Country",
      "City",
      "MBA",
      "Previous Role",
      "Company Acquired",
      "Sector",
      "Accelerator",
      "Website",
      "Description",
      "Contact",
    ].join(",");

    const rows = PROSPECTION_SEARCHFUNDERS.map((s) =>
      [
        escape(s.name),
        escape(s.status),
        escape(s.country),
        escape(s.city),
        escape(s.mba),
        escape(s.previousRole),
        escape(s.companyAcquired),
        escape(s.sector),
        escape(s.accelerator),
        escape(s.website),
        escape(s.description),
        escape(s.contact),
      ].join(",")
    );

    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "search-fund-entrepreneurs.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <button
      type="button"
      onClick={handleExport}
      className="px-4 py-2 text-sm rounded-lg bg-apple-gray-100 text-apple-gray-700 hover:bg-apple-gray-200 transition"
    >
      Export CSV
    </button>
  );
}
