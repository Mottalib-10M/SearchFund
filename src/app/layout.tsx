import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthSessionProvider from "@/components/providers/SessionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "SearchFundMarket — Acquisition Marketplace for Search Funds",
  description:
    "Connect with search fund entrepreneurs, investors, and business sellers across Europe.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <AuthSessionProvider>
          <Navbar />
          <main className="min-h-screen pt-14">{children}</main>
          <Footer />
        </AuthSessionProvider>
      </body>
    </html>
  );
}
