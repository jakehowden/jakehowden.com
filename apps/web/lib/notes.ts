import fs from "node:fs"
import path from "node:path"

import type { MDXContent } from "mdx/types"

export type Note = {
  slug: string
  /** File name without `.mdx`. */
  file: string
  title: string
  summary: string
  date: string
  tags: string[]
  minutes: number
}

const dir = path.join(process.cwd(), "content/notes")

export const loadNote = (file: string) =>
  import(`@/content/notes/${file}.mdx`) as Promise<{
    default: MDXContent
    meta: Omit<Note, "slug" | "file" | "minutes">
  }>

/** Newest first. Files are named `NN-slug.mdx`; a higher NN is newer (dates are placeholders for now). */
// shortcut: text sort, so NN must stay two digits; sort by real dates once notes have them
export async function getNotes(): Promise<Note[]> {
  const files = fs
    .readdirSync(dir)
    // `_template.mdx` stays unpublished; it also keeps the dynamic import below resolvable with no posts.
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map((f) => f.slice(0, -4))
    .sort()
    .reverse()
  return Promise.all(
    files.map(async (file) => {
      const { meta } = await loadNote(file)
      // Count body words only: skip the `export const meta = {…}` block.
      const body = fs.readFileSync(path.join(dir, `${file}.mdx`), "utf8").replace(/^export const meta[\s\S]*?\r?\n}\r?\n/, "")
      const words = body.split(/\s+/).filter(Boolean).length
      return {
        slug: file.replace(/^\d+-/, ""),
        file,
        ...meta,
        minutes: Math.max(1, Math.round(words / 200)),
      }
    })
  )
}

export async function getNote(slug: string) {
  return (await getNotes()).find((n) => n.slug === slug)
}
