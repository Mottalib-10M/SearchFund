"use client";

export function ExportCSVButton() {
  async function handleExport() {
    const { PROSPECTION_ACCELERATORS } = await import(
      "../_data/prospection-accelerators"
    );

    const escape = (v: string) =>
      `"${(v ?? "").replace(/"/g, '""')}"`;

    const header = [
      "Name",
      "Type",
      "Country",
      "City",
      "Founders",
      "Year Founded",
      "Searchers Backed",
      "Acquisitions",
      "Focus Region",
      "Focus Sectors",
      "Website",
      "Description",
      "Contact",
    ].join(",");

    const rows = PROSPECTION_ACCELERATORS.map((a) =>
      [
        escape(a.name),
        escape(a.type),
        escape(a.country),
        escape(a.city),
        escape(a.founders),
        a.yearFounded?.toString() ?? "",
        a.searchersBacked?.toString() ?? "",
        a.acquisitionsCompleted?.toString() ?? "",
        escape(a.focusRegion),
        escape(a.focusSectors),
        escape(a.website),
        escape(a.description),
        escape(a.contact),
      ].join(",")
    );

    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "search-fund-accelerators.csv";
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
