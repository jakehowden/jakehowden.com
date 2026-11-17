// Run: npm run test -w web. Needs the repo's git history.
import assert from "node:assert/strict"
import { test } from "node:test"

import { latest, modified } from "./modified.ts"

test("modified returns a YYYY-MM-DD commit date", () => {
  assert.match(modified(["app/layout.tsx"]), /^\d{4}-\d{2}-\d{2}$/)
})

test("added date is no later than last-modified date", () => {
  assert.ok(modified(["app/layout.tsx"], { added: true }) <= modified(["app/layout.tsx"]))
})

test("a path with no history fails loudly", () => {
  assert.throws(() => modified(["no/such/path"]), /no git history/)
})

test("latest picks the newest date", () => {
  assert.equal(latest("2026-11-14", "2026-11-16", "2026-11-15"), "2026-11-16")
})
