"use client"

import * as React from "react"

export const PALETTES = [
  ["green", "Green"],
  ["amber", "Amber CRT"],
  ["blue", "DOS blue"],
  ["red", "Signal red"],
  ["violet", "Violet"],
  ["ink", "Ink only"],
] as const

type Theme = {
  palette: string
  dark: boolean
  setPalette: (id: string) => void
  toggleDark: () => void
}

const ThemeContext = React.createContext<Theme | null>(null)

function save(name: string, value: string) {
  document.documentElement.setAttribute(`data-${name}`, value)
  document.cookie = `${name}=${value}; path=/; max-age=31536000; SameSite=Lax`
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [palette, setPaletteState] = React.useState("green")
  const [dark, setDark] = React.useState(false)

  // The inline head script already applied the cookies to <html>; sync state from there.
  React.useEffect(() => {
    const html = document.documentElement
    setPaletteState(html.dataset.palette ?? "green")
    setDark(html.dataset.theme === "dark")
  }, [])

  const value = React.useMemo<Theme>(
    () => ({
      palette,
      dark,
      setPalette: (id) => {
        save("palette", id)
        setPaletteState(id)
      },
      toggleDark: () => {
        save("theme", dark ? "light" : "dark")
        setDark(!dark)
      },
    }),
    [palette, dark]
  )

  return <ThemeContext value={value}>{children}</ThemeContext>
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider")
  return ctx
}
