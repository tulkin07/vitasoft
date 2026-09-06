import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
const root = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  turbopack: { root },
  images: {
    contentDispositionType: "inline",
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default withNextIntl(nextConfig);
