"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { isCurrent } from "@/components/site-header"

const TABS = [
  ["/", "home", <path key="p" d="M10 2 1 10h3v8h5v-5h2v5h5v-8h3z" />],
  [
    "/dev",
    "dev",
    <>
      <path d="M2 4.5 3.5 3l7 7-7 7L2 15.5 7.5 10z" />
      <rect x="10" y="15" width="8" height="2" />
    </>,
  ],
  [
    "/cv",
    "cv",
    <>
      <path d="M4 1h9l4 4v14H4zm2 2v14h9V6h-3V3z" />
      <rect x="8" y="9" width="5" height="2" />
      <rect x="8" y="13" width="5" height="2" />
    </>,
  ],
  [
    "/cs2",
    "cs2",
    <>
      <rect x="9" y="1" width="2" height="6" />
      <rect x="9" y="13" width="2" height="6" />
      <rect x="1" y="9" width="6" height="2" />
      <rect x="13" y="9" width="6" height="2" />
    </>,
  ],
  [
    "/notes",
    "notes",
    <>
      <rect x="2" y="3" width="16" height="2" />
      <rect x="2" y="9" width="16" height="2" />
      <rect x="2" y="15" width="10" height="2" />
    </>,
  ],
] as const

export function TabBar() {
  const path = usePathname()
  return (
    <nav className="m-tabbar" aria-label="Main">
      {TABS.map(([href, label, icon]) => (
        <Link
          key={href}
          href={href}
          aria-current={isCurrent(path, href) ? "page" : undefined}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            {icon}
          </svg>
          {label}
        </Link>
      ))}
    </nav>
  )
}
