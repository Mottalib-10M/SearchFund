"use client";

import { usePathname } from "@/i18n/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) return null;

  return <Footer />;
}
