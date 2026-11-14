"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { ColourPicker } from "@/components/colour-picker"
import { DarkToggle } from "@/components/dark-toggle"

export function isCurrent(path: string, href: string) {
  return href === "/" ? path === "/" : path === href || path.startsWith(href + "/")
}

const NAV = ["dev", "cv", "cs2", "notes"]

export function SiteHeader() {
  const path = usePathname()
  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="logo" href="/">
          jakehowden.com<span aria-hidden="true"></span>
        </Link>
        <div className="head-right">
          <nav className="nav" aria-label="Main">
            {NAV.map((n) => (
              <Link
                key={n}
                href={`/${n}`}
                aria-current={isCurrent(path, `/${n}`) ? "page" : undefined}
              >
                {n}
              </Link>
            ))}
          </nav>
          <ColourPicker />
          <DarkToggle />
        </div>
      </div>
    </header>
  )
}
