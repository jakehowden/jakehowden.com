"use client"

import { useTheme } from "@/components/theme"

export function DarkToggle({ iconOnly = false }: { iconOnly?: boolean }) {
  const { dark, toggleDark } = useTheme()
  return (
    <button
      className={iconOnly ? "icon-btn" : "btn btn-sm theme-toggle"}
      aria-pressed={dark}
      aria-label="Dark mode"
      onClick={toggleDark}
    >
      {iconOnly ? (dark ? "☀" : "☾") : dark ? "☀ light" : "☾ dark"}
    </button>
  )
}
