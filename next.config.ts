import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dexcode-lp",
  images: { unoptimized: true },
  reactCompiler: true,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
