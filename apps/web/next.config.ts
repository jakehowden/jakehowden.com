import createMDX from "@next/mdx"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  // /cs2/index.html etc.: routes share names with public/ folders (cs2/, dev/) and notes/ has posts.
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

export default createMDX()(nextConfig)
