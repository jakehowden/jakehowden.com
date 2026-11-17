import { execFileSync } from "node:child_process"

/**
 * Date (YYYY-MM-DD) of the last commit touching `paths` (relative to apps/web), or of the commit
 * that first added them with `added`. Needs full history: deploy.yml checks out with fetch-depth 0.
 */
export function modified(paths: string[], { added = false } = {}) {
  const args = ["log", "-1", "--format=%cs", ...(added ? ["--diff-filter=A"] : []), "--", ...paths]
  const date = execFileSync("git", args, { encoding: "utf8" }).trim()
  // Fail the build rather than show an empty date: a typo'd path has no history.
  if (!date) throw new Error(`modified: no git history for ${paths.join(", ")}`)
  return date
}

/** Date of the CV commit being built (see content/cv.ts). */
export async function cvModified() {
  const headers: HeadersInit = process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}
  const res = await fetch(`https://api.github.com/repos/jakehowden/CV/commits/${process.env.CV_REF || "main"}`, { headers })
  if (!res.ok) throw new Error(`CV: fetching commit date failed (${res.status})`)
  const { commit } = (await res.json()) as { commit: { committer: { date: string } } }
  return commit.committer.date.slice(0, 10)
}

/** Source files behind each section, for its "modified"/"updated" date. */
export const sectionPaths = {
  dev: ["app/dev", "content/dev.ts", "public/dev"],
  cv: ["app/cv", "content/cv.ts"],
  cs2: ["app/cs2", "public/cs2"],
  notes: ["app/notes", "content/notes", "lib/notes.ts"],
}

export const latest =(...dates: string[]) => dates.sort().at(-1)!
