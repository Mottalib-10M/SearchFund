import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import ConditionalFooter from "@/components/layout/ConditionalFooter";
import ScrollToTop from "@/components/layout/ScrollToTop";
import AuthSessionProvider from "@/components/providers/SessionProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.searchfundmarket.com"),
  title: {
    default: "SearchFundMarket — Search Fund Marketplace in Europe",
    template: "%s",
  },
  description:
    "The marketplace connecting search fund entrepreneurs, investors, and business sellers across Europe. Browse acquisitions, find investors, list your business.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    siteName: "SearchFundMarket",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <AuthSessionProvider>
          <ScrollToTop />
          <Navbar />
          <main className="min-h-screen pt-14">{children}</main>
          <ConditionalFooter />
        </AuthSessionProvider>
      </body>
    </html>
  );
}
