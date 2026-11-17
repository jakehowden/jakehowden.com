import { readdirSync, readFileSync } from "node:fs"
import path from "node:path"

import type { Metadata } from "next"

import { modified, sectionPaths } from "@/lib/modified"

import { Cs2Page } from "./cs2-page"

export const metadata: Metadata = { title: "CS2 config" }

// Previews come from the same files the Download buttons serve, so they can't drift.
const dir = path.join(process.cwd(), "public/cs2")
const previews = Object.fromEntries(
  readdirSync(dir)
    .filter((f) => f.endsWith(".cfg"))
    .map((f) => [f, readFileSync(path.join(dir, f), "utf8")]),
)

export default function Page() {
  return <Cs2Page updated={modified(sectionPaths.cs2)} previews={previews} />
}
