"use client"

import * as React from "react"

import { PALETTES, useTheme } from "@/components/theme"

export function ColourPicker() {
  const { palette, setPalette } = useTheme()
  const [open, setOpen] = React.useState(false)
  const name = (PALETTES.find(([id]) => id === palette) ?? PALETTES[0])[1]

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <div className="picker">
      <button
        className="pick-btn"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Colour: ${name}`}
        title="Colour"
        onClick={() => setOpen(!open)}
      >
        <span className="pick-dot"></span>
        <span className="pick-caret" aria-hidden="true">
          ▾
        </span>
      </button>
      <div className="scrim" data-open={open} onClick={() => setOpen(false)}></div>
      <div className="menu" role="menu" aria-label="Colour" data-open={open}>
        <div className="menu-head label">colour</div>
        {PALETTES.map(([id, label]) => (
          <button
            key={id}
            role="menuitemradio"
            className="menu-item"
            aria-checked={palette === id}
            onClick={() => {
              setPalette(id)
              setOpen(false)
            }}
          >
            <span className="sw" data-p={id}></span>
            <span className="menu-name">{label}</span>
            <span className="menu-check" aria-hidden="true">
              ✓
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
