import type { Metadata } from "next"

import { Cs2Page } from "./cs2-page"

export const metadata: Metadata = { title: "CS2 config" }

export default function Page() {
  return <Cs2Page />
}
