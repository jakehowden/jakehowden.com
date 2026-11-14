"use client"

import * as React from "react"

/** `.win` panel. Children go straight under the bar: wrap in `.win-body` or use `.row`s as the board does. */
export function Win({
  title,
  ctl = <span aria-hidden="true">□ ×</span>,
  className,
  children,
}: {
  title: React.ReactNode
  ctl?: React.ReactNode
  className?: string
  children?: React.ReactNode
}) {
  return (
    <section className={className ? `win ${className}` : "win"}>
      <div className="win-bar">
        <h2>{title}</h2>
        <span className="ctl">{ctl}</span>
      </div>
      {children}
    </section>
  )
}

export function Tags({ tags }: { tags: readonly string[] }) {
  return (
    <div className="tags">
      {tags.map((t) => (
        <span key={t} className="tag">
          {t}
        </span>
      ))}
    </div>
  )
}

export function CopyButton({
  text,
  className = "btn btn-sm",
  children = "Copy",
}: {
  text: string
  className?: string
  children?: React.ReactNode
}) {
  const [copied, setCopied] = React.useState(false)
  React.useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 1500)
    return () => clearTimeout(t)
  }, [copied])
  return (
    <button
      className={className}
      onClick={() => navigator.clipboard.writeText(text).then(() => setCopied(true))}
    >
      {copied ? "Copied" : children}
    </button>
  )
}

/** Phone bottom sheet (`.m-sheet`) with a scrim; closes on scrim click and Escape. */
export function Sheet({
  open,
  onClose,
  title,
  label,
  children,
}: {
  open: boolean
  onClose: () => void
  title: React.ReactNode
  label?: string
  children?: React.ReactNode
}) {
  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])
  return (
    <>
      <div className="scrim" data-open={open} onClick={onClose}></div>
      <section className="win m-sheet" data-open={open} aria-label={label}>
        <div className="win-bar">
          <h2>{title}</h2>
        </div>
        {children}
      </section>
    </>
  )
}

/** `.row.file-row`: name + description, then the action buttons passed as children. */
export function FileRow({
  name,
  desc,
  children,
}: {
  name: React.ReactNode
  desc: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <div className="row file-row">
      <div className="file-info">
        <div className="file">{name}</div>
        <div className="item-text">{desc}</div>
      </div>
      {children}
    </div>
  )
}
