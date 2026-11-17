"use client"

import * as React from "react"

/**
 * `.win` panel. Children go straight under the bar: wrap in `.win-body` or use `.row`s as the board does.
 * □ enlarges it to the centre of the screen; ❐, ×, Esc or a click outside shrinks it back.
 * Same DOM node either way, so state inside (open previews, copied buttons) survives.
 */
export function Win({
  title,
  className,
  children,
}: {
  title: React.ReactNode
  className?: string
  children?: React.ReactNode
}) {
  const [max, setMax] = React.useState(false)
  // Holds the window's place so the page doesn't jump while it's lifted out.
  const [height, setHeight] = React.useState(0)
  const ref = React.useRef<HTMLElement>(null)
  const maxBtn = React.useRef<HTMLButtonElement>(null)
  const restoreBtn = React.useRef<HTMLButtonElement>(null)
  const titleId = React.useId()

  const open = () => {
    setHeight(ref.current?.offsetHeight ?? 0)
    setMax(true)
  }
  const close = React.useCallback(() => setMax(false), [])

  React.useEffect(() => {
    if (!max) return
    restoreBtn.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close()
    window.addEventListener("keydown", onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const back = maxBtn
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = overflow
      back.current?.focus()
    }
  }, [max, close])

  return (
    <>
      {max && <div aria-hidden="true" style={{ height }} />}
      {max && <div className="scrim win-scrim" onClick={close}></div>}
      <section
        ref={ref}
        className={["win", className, max && "win-max"].filter(Boolean).join(" ")}
        role={max ? "dialog" : undefined}
        aria-modal={max || undefined}
        aria-labelledby={titleId}
      >
        <div className="win-bar">
          <h2 id={titleId}>{title}</h2>
          <span className="ctl">
            {max ? (
              <>
                <button ref={restoreBtn} onClick={close} aria-label="Restore window">
                  ❐
                </button>
                <button onClick={close} aria-label="Close enlarged window">
                  ×
                </button>
              </>
            ) : (
              <button ref={maxBtn} onClick={open} aria-label="Enlarge window">
                □
              </button>
            )}
          </span>
        </div>
        {children}
      </section>
    </>
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
      {/* Both labels share one grid cell so the button keeps the wider width and nothing shifts. */}
      <span style={{ display: "inline-grid" }}>
        <span style={{ gridArea: "1/1", visibility: copied ? "hidden" : undefined }}>{children}</span>
        <span style={{ gridArea: "1/1", visibility: copied ? undefined : "hidden" }}>Copied</span>
      </span>
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
