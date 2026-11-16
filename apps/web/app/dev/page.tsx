import { readFileSync } from "node:fs"
import path from "node:path"

import type { Metadata } from "next"

import { dev, OS_IDS } from "@/content/dev"

import { DevSetup, type PreviewedOs } from "./dev-setup"

export const metadata: Metadata = { title: "Dev setup" }

// Previews come from the same files the Download buttons serve, so they can't drift.
const read = (dir: string, file: string) =>
  readFileSync(path.join(process.cwd(), "public/dev", dir, file), "utf8")

export default function Page() {
  const withPreviews = Object.fromEntries(
    OS_IDS.map((id) => {
      const os = dev[id]
      return [id, { ...os, files: os.files.map((f) => ({ ...f, preview: read(os.dir, f.path ?? f.name) })) }]
    }),
  ) as Record<(typeof OS_IDS)[number], PreviewedOs>
  return <DevSetup dev={withPreviews} />
}
