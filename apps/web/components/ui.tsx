"use client"

import * as React from "react"

// Room left around an enlarged window, and the most it zooms.
const EDGE_X = 64
const EDGE_Y = 96
const MAX_ZOOM = 1.25
const MS = 240
const EASE = "cubic-bezier(.2,.8,.2,1)"

type Big = { w: number; h: number; zoom: number; maxH: number }

const still = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches

/** Transform that makes `from` (the window now) look like `to`. Zoom also scales translate lengths, hence the divide. */
const flip = (from: DOMRect, to: DOMRect, zoom: number) =>
  `translate(${(to.left - from.left) / zoom}px,${(to.top - from.top) / zoom}px) scale(${to.width / from.width},${to.height / from.height})`

/**
 * `.win` panel. Children go straight under the bar: wrap in `.win-body` or use `.row`s as the board does.
 * □ zooms it up in the centre of the screen at the same shape; ×, Esc or a click outside shrinks it back.
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
  const [big, setBig] = React.useState<Big | null>(null)
  const max = big !== null
  const ref = React.useRef<HTMLElement>(null)
  // Holds the window's place so the page doesn't jump while it's lifted out; also where it shrinks back to.
  const slot = React.useRef<HTMLDivElement>(null)
  const scrim = React.useRef<HTMLDivElement>(null)
  const from = React.useRef<DOMRect | null>(null)
  const closing = React.useRef(false)
  const btn = React.useRef<HTMLButtonElement>(null)
  // Drives the □ → × icon; flips back as soon as closing starts, not when the shrink ends.
  const [showX, setShowX] = React.useState(false)
  const titleId = React.useId()

  const open = () => {
    const r = ref.current!.getBoundingClientRect()
    const fitW = (window.innerWidth - EDGE_X) / r.width
    const fitH = (window.innerHeight - EDGE_Y) / r.height
    // Fit the whole window if that's a real enlargement; a tall one instead gets a modest zoom and scrolls.
    let zoom = Math.min(fitW, fitH, MAX_ZOOM)
    if (zoom < 1.05) zoom = Math.min(fitW, 1.05)
    zoom = Math.max(zoom, 1)
    from.current = r
    setShowX(true)
    setBig({ w: r.width, h: r.height, zoom, maxH: (window.innerHeight - EDGE_Y) / zoom })
  }

  const close = React.useCallback(() => {
    const el = ref.current
    if (!big || !el || closing.current) return
    setShowX(false)
    if (still() || !slot.current) return setBig(null)
    closing.current = true
    // Let clicks through to the page while the scrim fades out.
    if (scrim.current) scrim.current.style.pointerEvents = "none"
    const done = () => {
      closing.current = false
      setBig(null)
    }
    const to = slot.current.getBoundingClientRect()
    // The slot is only as tall as the window was, so shrink into that box.
    el.animate([{ transform: "none" }, { transform: flip(el.getBoundingClientRect(), to, big.zoom) }], {
      duration: MS,
      easing: EASE,
      fill: "forwards",
    }).onfinish = done
    scrim.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: MS, fill: "forwards" })
  }, [big])

  // Grow from where it sat on the page (FLIP: measure the end state, then animate from the start).
  React.useLayoutEffect(() => {
    const el = ref.current
    if (!big || !el || !from.current || still()) return
    el.animate([{ transform: flip(el.getBoundingClientRect(), from.current, big.zoom) }, { transform: "none" }], {
      duration: MS,
      easing: EASE,
    })
    scrim.current?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: MS })
    from.current = null
  }, [big])

  // Drop the finished shrink animation so its end transform doesn't stick to the restored window.
  React.useLayoutEffect(() => {
    if (!max) ref.current?.getAnimations().forEach((a) => a.cancel())
  }, [max])

  React.useEffect(() => {
    if (!max) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close()
    window.addEventListener("keydown", onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const back = btn
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = overflow
      back.current?.focus()
    }
  }, [max, close])

  return (
    <>
      {big && <div ref={slot} aria-hidden="true" style={{ height: big.h }} />}
      {big && <div ref={scrim} className="scrim win-scrim" onClick={close}></div>}
      <section
        ref={ref}
        className={["win", className, max && "win-max"].filter(Boolean).join(" ")}
        style={big ? { width: big.w, maxHeight: big.maxH, zoom: big.zoom } : undefined}
        role={max ? "dialog" : undefined}
        aria-modal={max || undefined}
        aria-labelledby={titleId}
      >
        <div className="win-bar">
          <h2 id={titleId}>{title}</h2>
          <span className="ctl">
            {/* One button: its icon cross-fades so the corner doesn't jump. */}
            <button
              ref={btn}
              className="win-toggle"
              data-x={showX}
              onClick={max ? close : open}
              aria-label={max ? "Close enlarged window" : "Enlarge window"}
            >
              <span aria-hidden="true">□</span>
              <span aria-hidden="true">×</span>
            </button>
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
