"use client";

import { Printer, FileDown } from "lucide-react";

export default function TemplateActions({ title }: { title: string }) {
  function handleDownloadWord() {
    // Get the rendered template content
    const contentEl = document.getElementById("template-content");
    if (!contentEl) return;

    const html = `
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40">
<head><meta charset="utf-8"><title>${title}</title>
<style>body{font-family:Calibri,sans-serif;font-size:11pt;line-height:1.6;color:#333}h1{font-size:22pt;margin-bottom:12pt}h2{font-size:16pt;margin-top:18pt;margin-bottom:8pt}h3{font-size:13pt;margin-top:14pt;margin-bottom:6pt}ul,ol{margin-left:18pt}li{margin-bottom:4pt}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ccc;padding:6pt 8pt;text-align:left}</style>
</head>
<body>
<h1>${title}</h1>
${contentEl.innerHTML}
</body></html>`;

    const blob = new Blob(["\ufeff", html], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-")}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-xl border border-apple-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-apple-black shadow-sm transition-colors hover:bg-apple-gray-50"
      >
        <Printer className="h-4 w-4" />
        Print / Save as PDF
      </button>
      <button
        onClick={handleDownloadWord}
        className="inline-flex items-center gap-2 rounded-xl bg-apple-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-80"
      >
        <FileDown className="h-4 w-4" />
        Download as Word
      </button>
    </div>
  );
}
