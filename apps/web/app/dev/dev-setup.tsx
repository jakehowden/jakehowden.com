"use client"

import Link from "next/link"
import * as React from "react"

import { SiteFooter } from "@/components/site-footer"
import { CopyButton, FileRow, Sheet, Tags, Win } from "@/components/ui"
import { OS_IDS, tools, type DevFile, type DevOs, type OsId } from "@/content/dev"
import { asset } from "@/lib/asset"

export type PreviewedOs = Omit<DevOs, "files"> & { files: (DevFile & { preview: string })[] }

const fileUrl = (os: DevOs, f: DevFile) => asset(`/dev/${os.dir}/${f.path ?? f.name}`)
const zipUrl = (os: DevOs) => asset(`/dev/${os.zip}`)
// The download attribute only takes a basename.
const baseName = (f: DevFile) => (f.path ?? f.name).split("/").pop()

// Not <Tags>: extras can repeat ("[tool]", "[tool]"), and Tags keys by text.
const Extras = ({ os }: { os: DevOs }) => (
  <div className="tags">
    {os.extras.map((x, i) => (
      <span key={i} className="tag">
        {x}
      </span>
    ))}
  </div>
)

const flexCol =(gap: number): React.CSSProperties => ({ display: "flex", flexDirection: "column", gap })

export function DevSetup({ dev }: { dev: Record<OsId, PreviewedOs> }) {
  const [osId, setOsId] = React.useState<OsId>("mac")
  const [view, setView] = React.useState(0)
  const [sheet, setSheet] = React.useState<number | null>(null)
  const closeSheet = React.useCallback(() => setSheet(null), [])
  const os = dev[osId]
  const pick = (id: OsId) => {
    setOsId(id)
    setView(0)
    setSheet(null)
  }
  const shown = os.files[view]!
  const sheetFile = sheet === null ? null : os.files[sheet]!
  const label = (i: number) => (i === 0 ? os.previewName : os.files[i]!.name)

  return (
    <>
      <div className="d-only">
        <main className="wrap page">
          <div className="intro-row">
            <div className="intro">
              <p className="crumb">
                <Link href="/">C:\JAKE\</Link>DEV · updated 2026-11-15
              </p>
              <h1 className="title">Dev setup</h1>
              <p className="lead">
                Mac for work, Windows and Linux at home. One set of dotfiles, set up per machine. Pick your OS.
              </p>
            </div>
            <a href="https://github.com/jakehowden/dotfiles" className="btn">
              dotfiles on GitHub →
            </a>
          </div>
          <div>
            <div role="tablist" aria-label="Operating system" style={{ display: "flex", flexWrap: "wrap" }}>
              {OS_IDS.map((id) => (
                <button key={id} role="tab" aria-selected={osId === id} className="tab" onClick={() => pick(id)}>
                  {dev[id].label}
                  <span className="tab-tag">{dev[id].tag}</span>
                </button>
              ))}
            </div>
            <div role="tabpanel" className="win">
              <div className="split" style={{ borderBottom: "1.5px solid var(--fg)" }}>
                <section aria-label="Terminal" className="win-body" style={flexCol(16)}>
                  <h2 className="h3">terminal</h2>
                  <div
                    aria-hidden="true"
                    style={{
                      background: "var(--code-bg)",
                      color: "var(--code-fg)",
                      border: "1.5px solid var(--fg)",
                      fontFamily: "var(--mono)",
                      fontSize: 13,
                      lineHeight: 1.7,
                    }}
                  >
                    <div style={{ background: "#2a2a2a", padding: "4px 10px", display: "flex", gap: 6, alignItems: "center" }}>
                      {[0, 1, 2].map((i) => (
                        <span key={i} style={{ width: 9, height: 9, background: "var(--muted)" }}></span>
                      ))}
                      <span style={{ marginLeft: 8, color: "var(--code-muted)", fontSize: 12 }}>{os.term}</span>
                    </div>
                    <div style={{ padding: "12px 14px" }}>
                      <div>
                        <span style={{ color: "var(--accent-on-dark)" }}>{os.host}</span> ~/dotfiles{" "}
                        <span style={{ color: "var(--code-muted)" }}>main</span>
                      </div>
                      <div>
                        <span style={{ color: "var(--accent-on-dark)" }}>❯</span> {os.demo}
                      </div>
                      <div style={{ color: "var(--code-muted)" }}>{os.demoOut}</div>
                      <div>
                        <span style={{ color: "var(--accent-on-dark)" }}>❯</span>{" "}
                        <span
                          style={{
                            display: "inline-block",
                            width: 8,
                            height: 15,
                            background: "var(--code-fg)",
                            verticalAlign: "text-bottom",
                          }}
                        ></span>
                      </div>
                    </div>
                  </div>
                  <dl
                    style={{
                      margin: 0,
                      display: "grid",
                      gridTemplateColumns: "minmax(0,1fr) minmax(0,2fr)",
                      gap: "8px 16px",
                      alignItems: "baseline",
                    }}
                  >
                    {os.facts.map((r) => (
                      <React.Fragment key={r.k}>
                        <dt className="label">{r.k}</dt>
                        <dd className="value" style={{ margin: 0 }}>
                          {r.v}
                        </dd>
                      </React.Fragment>
                    ))}
                  </dl>
                </section>
                <section aria-label="Fresh install" className="win-body" style={flexCol(16)}>
                  <h2 className="h3">fresh install</h2>
                  <ol style={{ listStyle: "none", margin: 0, padding: 0, ...flexCol(16) }}>
                    {os.steps.map((s) => (
                      <li key={s.n} style={{ display: "flex", gap: 14 }}>
                        <span className="step-n">{s.n}</span>
                        <div style={{ flex: 1, minWidth: 0, ...flexCol(6) }}>
                          <span>{s.what}</span>
                          <div className="cmd">
                            <code>{s.cmd}</code>
                            <CopyButton text={s.cmd} />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              </div>
              <section aria-label="Dotfiles" className="split" style={{ borderBottom: "1.5px solid var(--fg)" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h2 className="h3" style={{ padding: "20px 20px 12px" }}>
                    dotfiles
                  </h2>
                  <div style={{ borderTop: "1px solid var(--line)" }}>
                    {os.files.map((f, i) => (
                      <FileRow key={f.name} name={f.name} desc={f.desc}>
                        <button className="btn btn-sm" aria-pressed={view === i} onClick={() => setView(i)}>
                          View
                        </button>
                        <a className="btn btn-sm btn-primary" href={fileUrl(os, f)} download={baseName(f)}>
                          Download
                        </a>
                      </FileRow>
                    ))}
                  </div>
                  <div style={{ padding: "16px 20px", borderTop: "1px solid var(--line)", marginTop: "auto" }}>
                    <a className="btn btn-primary" href={zipUrl(os)} download>
                      Download all ({os.zip})
                    </a>
                  </div>
                </div>
                <div className="win-body" style={flexCol(12)}>
                  <h2 className="h3">preview</h2>
                  <div className="code" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <div className="code-head">
                      <span>{label(view)}</span>
                      <CopyButton text={shown.preview} />
                    </div>
                    <pre style={{ flex: 1 }}>{shown.preview}</pre>
                  </div>
                </div>
              </section>
              <section
                aria-label="OS-only tools"
                className="win-body"
                style={{ display: "flex", flexWrap: "wrap", gap: "10px 16px", alignItems: "center" }}
              >
                <h2 className="h3">{os.only}</h2>
                <Extras os={os} />
              </section>
            </div>
          </div>
          <Win title="tools · every os">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
              {tools.map((t) => (
                <div key={t.label} className="win-body tool-col">
                  <span className="label">{t.label}</span>
                  <Tags tags={t.tags} />
                </div>
              ))}
            </div>
          </Win>
        </main>
      </div>

      <div className="m-only m">
        <main className="m-page">
          <div className="intro">
            <p className="crumb">
              <Link href="/">C:\JAKE\</Link>DEV
            </p>
            <h1 className="title">Dev setup</h1>
            <p className="lead">Mac for work, Windows and Linux at home. Pick your OS.</p>
          </div>
          <a
            href="https://github.com/jakehowden/dotfiles"
            className="m-sec"
            style={{ margin: "-16px 0 0", fontFamily: "var(--mono)", fontSize: 13, color: "var(--accent)", textDecoration: "none" }}
          >
            dotfiles on GitHub →
          </a>
          <div className="m-seg" role="tablist" aria-label="Operating system">
            {OS_IDS.map((id) => (
              <button key={id} role="tab" aria-selected={osId === id} onClick={() => pick(id)}>
                {dev[id].label}
              </button>
            ))}
          </div>
          <details className="win m-acc" open>
            <summary className="win-bar">
              <h2>terminal</h2>
              <span className="ctl">
                <span className="meta">{os.term}</span>
                <span className="chev" aria-hidden="true">
                  ▾
                </span>
              </span>
            </summary>
            <div className="win-body" style={flexCol(14)}>
              <div
                aria-hidden="true"
                style={{
                  background: "var(--code-bg)",
                  color: "var(--code-fg)",
                  border: "1.5px solid var(--fg)",
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  lineHeight: 1.7,
                  padding: "10px 12px",
                }}
              >
                <div>
                  <span style={{ color: "var(--accent-on-dark)" }}>{os.host}</span> ~/dotfiles
                </div>
                <div>
                  <span style={{ color: "var(--accent-on-dark)" }}>❯</span> {os.demo}
                </div>
                <div style={{ color: "var(--code-muted)" }}>{os.demoOut}</div>
              </div>
              <dl className="m-kv" style={{ margin: 0 }}>
                {os.facts.map((r) => (
                  <div key={r.k}>
                    <dt className="label">{r.k}</dt>
                    <dd className="value" style={{ margin: 0 }}>
                      {r.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </details>
          <details className="win m-acc" open>
            <summary className="win-bar">
              <h2>fresh install</h2>
              <span className="ctl">
                <span className="meta">{os.steps.length} steps</span>
                <span className="chev" aria-hidden="true">
                  ▾
                </span>
              </span>
            </summary>
            <div className="win-body">
              <ol className="m-steps">
                {os.steps.map((s) => (
                  <li key={s.n}>
                    <span className="step-n">{s.n}</span>
                    <div className="m-step">
                      <span>{s.what}</span>
                      <div className="cmd">
                        <code>{s.cmd}</code>
                        <CopyButton text={s.cmd} />
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </details>
          <details className="win m-acc" open>
            <summary className="win-bar">
              <h2>dotfiles</h2>
              <span className="ctl">
                <span className="meta">tap View to preview</span>
                <span className="chev" aria-hidden="true">
                  ▾
                </span>
              </span>
            </summary>
            {os.files.map((f, i) => (
              <FileRow key={f.name} name={f.name} desc={f.desc}>
                <button className="btn btn-sm" onClick={() => setSheet(i)}>
                  View
                </button>
                <a
                  className="btn btn-sm btn-primary"
                  href={fileUrl(os, f)}
                  download={baseName(f)}
                  aria-label={`Download ${f.name}`}
                >
                  ↓
                </a>
              </FileRow>
            ))}
            <div className="win-body" style={{ borderTop: "1px solid var(--line)" }}>
              <a className="btn btn-primary btn-block" href={zipUrl(os)} download>
                Download all ({os.zip})
              </a>
            </div>
          </details>
          <details className="win m-acc">
            <summary className="win-bar">
              <h2>tools</h2>
              <span className="ctl">
                <span className="chev" aria-hidden="true">
                  ▾
                </span>
              </span>
            </summary>
            <div className="win-body" style={flexCol(14)}>
              <div style={flexCol(6)}>
                <span className="label">{os.only}</span>
                <Extras os={os} />
              </div>
              {tools.map((t) => (
                <div key={t.label} style={flexCol(6)}>
                  <span className="label">{t.label}</span>
                  <Tags tags={t.tags} />
                </div>
              ))}
            </div>
          </details>
          <SiteFooter />
        </main>
        <Sheet
          open={sheetFile !== null}
          onClose={closeSheet}
          title={sheet === null ? "" : label(sheet)}
          label="File preview"
        >
          {sheetFile && (
            <>
              <pre>{sheetFile.preview}</pre>
              <div className="m-sheet-acts">
                <button className="btn" onClick={closeSheet}>
                  Close
                </button>
                <CopyButton text={sheetFile.preview} className="btn" />
                <a className="btn btn-primary" href={fileUrl(os, sheetFile)} download={baseName(sheetFile)}>
                  Download
                </a>
              </div>
            </>
          )}
        </Sheet>
      </div>
    </>
  )
}
