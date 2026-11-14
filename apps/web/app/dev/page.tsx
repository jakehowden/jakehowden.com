import type { Metadata } from "next"

import { DevSetup } from "./dev-setup"

export const metadata: Metadata = { title: "Dev setup — jakehowden.com" }

export default function Page() {
  return <DevSetup />
}
