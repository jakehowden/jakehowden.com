import Link from "next/link"

import { ColourPicker } from "@/components/colour-picker"
import { DarkToggle } from "@/components/dark-toggle"

export function PhoneTop() {
  return (
    <header className="m-top">
      <Link className="logo" href="/">
        jakehowden.com<span aria-hidden="true"></span>
      </Link>
      <div className="m-acts">
        <ColourPicker />
        <DarkToggle iconOnly />
      </div>
    </header>
  )
}
