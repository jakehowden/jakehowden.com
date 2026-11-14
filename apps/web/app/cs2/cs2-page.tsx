"use client"

import * as React from "react"
import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { CopyButton, FileRow, Sheet, Win } from "@/components/ui"
import { asset } from "@/lib/asset"

// shortcut: all-configs.zip is built by hand; rebuild it whenever a .cfg changes
const PREVIEW = `// [file contents]
bind "mouse4" "+voice"
alias "+jt" "+jump;-jump"
...`

const CS2 = {
  crosshair: [
    ["style", "[STYLE]"],
    ["size", "[SIZE]"],
    ["gap", "[GAP]"],
    ["thickness", "[THICKNESS]"],
    ["outline", "[OUTLINE]"],
    ["colour", "[COLOUR]"],
  ],
  shareCode: "[YOUR CROSSHAIR CODE]",
  launch: "-novid -fullscreen +exec autoexec",
  settings: [
    ["sens", "[SENS]"],
    ["dpi", "[DPI]"],
    ["res", "[RES]"],
    ["aspect", "[ASPECT RATIO]"],
  ],
  files: [
    { name: "autoexec.cfg", desc: "Binds, rates, HUD. Runs on launch", preview: PREVIEW },
    { name: "practice.cfg", desc: "Infinite ammo, nade trails, no freezetime", preview: PREVIEW },
  ],
  zip: { name: "all-configs.zip", desc: "Unzip into game/csgo/cfg" },
}

const href = (name: string) => asset(`/cs2/${name}`)

function Crosshair({ size, icon }: { size: number; icon: number }) {
  return (
    <div
      style={{
        flex: `0 0 ${size}px`,
        height: size,
        background: "#3b4048",
        display: "grid",
        placeItems: "center",
        border: "1.5px solid var(--fg)",
      }}
    >
      <svg width={icon} height={icon} viewBox="0 0 40 40" role="img" aria-label="Crosshair preview">
        <rect x="19" y="6" width="2" height="10" fill="#4dff88" />
        <rect x="19" y="24" width="2" height="10" fill="#4dff88" />
        <rect x="6" y="19" width="10" height="2" fill="#4dff88" />
        <rect x="24" y="19" width="10" height="2" fill="#4dff88" />
      </svg>
    </div>
  )
}

function KV({ items, className }: { items: string[][]; className?: string }) {
  return items.map(([k, v]) => (
    <div key={k} className={className}>
      <div className="label">{k}</div>
      <div className="value">{v}</div>
    </div>
  ))
}

const col = { display: "flex", flexDirection: "column", gap: 16 } as const
const field = { display: "flex", flexDirection: "column", gap: 6 } as const

export function Cs2Page() {
  const [sheet, setSheet] = React.useState<(typeof CS2.files)[number] | null>(null)
  const close = React.useCallback(() => setSheet(null), [])
  const [view, setView] = React.useState<string | null>(null)

  return (
    <>
      <main className="wrap page d-only">
        <div className="intro-row">
          <div className="intro">
            <p className="crumb">
              <Link href="/">C:\JAKE\</Link>CS2 · updated [DATE]
            </p>
            <h1 className="title">CS2 config</h1>
            <p className="lead">My crosshair, configs and settings. Grab whatever’s useful.</p>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 28,
            alignItems: "stretch",
          }}
        >
          <Win title="crosshair">
            <div className="win-body" style={col}>
              <div className="xhair">
                <Crosshair size={96} icon={44} />
                <div className="kv3">
                  <KV items={CS2.crosshair} />
                </div>
              </div>
              <div style={field}>
                <span className="label">share code</span>
                <div className="cmd">
                  <code>{CS2.shareCode}</code>
                  <CopyButton text={CS2.shareCode} />
                </div>
              </div>
            </div>
          </Win>
          <Win title="settings">
            <div className="win-body" style={col}>
              <div style={field}>
                <span className="label">launch options</span>
                <div className="cmd">
                  <code>{CS2.launch}</code>
                  <CopyButton text={CS2.launch} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "12px 16px" }}>
                <KV items={CS2.settings} />
              </div>
            </div>
          </Win>
        </div>
        <Win title="cfg files">
          {CS2.files.map((f) => (
            <React.Fragment key={f.name}>
              <FileRow name={f.name} desc={f.desc}>
                {/* Inline preview: Pages serves .cfg as a download, so a link can't show it. */}
                <button
                  className="btn btn-sm"
                  aria-expanded={view === f.name}
                  onClick={() => setView(view === f.name ? null : f.name)}
                >
                  View
                </button>
                <a className="btn btn-sm btn-primary" href={href(f.name)} download>
                  Download
                </a>
              </FileRow>
              {view === f.name && (
                <div className="code" style={{ margin: "0 20px 16px" }}>
                  <div className="code-head">
                    <span>{f.name}</span>
                    <CopyButton text={f.preview} />
                  </div>
                  <pre>{f.preview}</pre>
                </div>
              )}
            </React.Fragment>
          ))}
          <FileRow name={CS2.zip.name} desc={CS2.zip.desc}>
            <a className="btn btn-primary" href={href(CS2.zip.name)} download>
              Download all
            </a>
          </FileRow>
        </Win>
      </main>

      <div className="m-only m">
        <main className="m-page has-bar">
          <div className="intro">
            <p className="crumb">
              <Link href="/">C:\JAKE\</Link>CS2
            </p>
            <h1 className="title">CS2 config</h1>
            <p className="lead">Crosshair, settings and configs.</p>
          </div>
          <Win title="crosshair">
            <div className="win-body" style={col}>
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <Crosshair size={88} icon={40} />
                <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                  <span className="label">share code</span>
                  <code className="file" style={{ fontSize: 13 }}>
                    {CS2.shareCode}
                  </code>
                </div>
              </div>
              <div className="m-kv">
                <KV items={CS2.crosshair} />
              </div>
              <CopyButton text={CS2.shareCode} className="btn btn-primary btn-block">
                Copy crosshair code
              </CopyButton>
            </div>
          </Win>
          <section>
            <div className="m-sec">
              <h2 className="h3">settings</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span className="label">launch options</span>
              <div className="cmd">
                <code>{CS2.launch}</code>
                <CopyButton text={CS2.launch} />
              </div>
              <div className="m-stats">
                <KV items={CS2.settings} className="m-stat" />
              </div>
            </div>
          </section>
          <Win title="cfg files">
            {CS2.files.map((f) => (
              <FileRow key={f.name} name={f.name} desc={f.desc}>
                <button className="btn btn-sm" onClick={() => setSheet(f)}>
                  View
                </button>
                <a
                  className="btn btn-sm btn-primary"
                  href={href(f.name)}
                  download
                  aria-label={`Download ${f.name}`}
                >
                  ↓
                </a>
              </FileRow>
            ))}
          </Win>
          <SiteFooter />
        </main>
        <div className="m-bar">
          <span className="meta">
            {CS2.zip.name}
            <br />
            {CS2.files.length} files
          </span>
          <a className="btn btn-primary" href={href(CS2.zip.name)} download>
            Download all
          </a>
        </div>
        <Sheet open={!!sheet} onClose={close} title={sheet?.name} label="File preview">
          <pre>{sheet?.preview}</pre>
          <div className="m-sheet-acts">
            <button className="btn" onClick={close}>
              Close
            </button>
            <CopyButton text={sheet?.preview ?? ""} className="btn" />
            <a className="btn btn-primary" href={sheet ? href(sheet.name) : undefined} download>
              Download
            </a>
          </div>
        </Sheet>
      </div>
    </>
  )
}
