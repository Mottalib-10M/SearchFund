import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/listings/new",
      destination: "/listings",
      permanent: true,
    },
    {
      source: "/listings/:slug",
      destination: "/listings",
      permanent: true,
    },
  ],
};

export default withNextIntl(nextConfig);
