import Link from "next/link"

import { NoteRow } from "@/components/note-row"
import { SiteFooter } from "@/components/site-footer"
import { Tags, Win } from "@/components/ui"
import { getNotes } from "@/lib/notes"

const folders = [
  { name: "dev", href: "/dev", text: "Editor, terminal, dotfiles", date: "2026-11-15" },
  { name: "cv", href: "/cv", text: "Experience, skills, PDF download", date: "2026-11-14" },
  { name: "cs2", href: "/cs2", text: "Crosshair, autoexec, practice cfg", date: "2026-11-15" },
  { name: "notes", href: "/notes", text: "Write-ups and how-tos", date: "2026-11-14" },
]

const changes: { file: string; href?: string; text: string }[] = [
  { file: "dev\\windows", href: "/dev", text: "PowerShell 7 + Starship, komorebi and whkd configs" },
  { file: "dev\\linux", href: "/dev", text: "Arch + yay, Hyprland, waybar, wofi and Neovim configs" },
  { file: "cs2\\", href: "/cs2", text: "New crosshair code, preview matches it in game" },
  { file: "cs2\\practice.cfg", href: "/cs2", text: "Real practice cfg: infinite ammo, nade trails, buy anywhere" },
  { file: "cv\\", href: "/cv", text: "CV page built from the LaTeX source" },
  { file: "site", text: "Rebuilt from scratch, old CV archived" },
]

const Folder = () => (
  <svg width="22" height="18" viewBox="0 0 22 18" aria-hidden="true">
    <path d="M1 3h7l2 2h11v12H1z" fill="var(--accent)" stroke="var(--fg)" strokeWidth="1" />
  </svg>
)

function Intro({ cmd }: { cmd: string }) {
  return (
    <div className="intro">
      <p className="crumb">
        <span style={{ color: "var(--accent)" }}>C:\JAKE&gt;</span> {cmd}
      </p>
      <h1 className="title">Hi, I’m Jake.</h1>
      <p className="lead">Configs, setups, things I use. Help yourself.</p>
    </div>
  )
}

export default async function Page() {
  const notes = (await getNotes()).slice(0, 3)
  return (
    <>
      <div className="d-only">
        <main className="wrap page">
          <div className="intro-row">
            <Intro cmd="dir /o:d" />
          </div>
          <Win title="C:\JAKE">
            <div className="cols colhead label">
              <span>name</span>
              <span>what’s in it</span>
              <span>modified</span>
            </div>
            {folders.map((f) => (
              <div key={f.name} className="row cols">
                <span className="file" style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <Folder />
                  <Link href={f.href} className="stretch">
                    {f.name}\
                  </Link>
                </span>
                <span>{f.text}</span>
                <span className="meta">{f.date}</span>
              </div>
            ))}
            <div className="win-foot">
              <span>{folders.length} dir(s)</span>
              <span>last change: {changes[0]?.file}</span>
            </div>
          </Win>
          <Win title="notes">
            {notes.map((n) => (
              <NoteRow key={n.slug} n={n} />
            ))}
            {notes.length === 0 && <div className="row item-text">No notes yet.</div>}
            <div className="win-foot">
              <span>latest {notes.length}</span>
              <Link href="/notes">all notes →</Link>
            </div>
          </Win>
          <Win title="changes.log">
            {changes.map((c) => (
              <div key={c.file} className="row log-row">
                {c.href ? (
                  <Link href={c.href} className="file" style={{ color: "var(--accent)" }}>
                    {c.file}
                  </Link>
                ) : (
                  <span className="file">{c.file}</span>
                )}
                <span>{c.text}</span>
              </div>
            ))}
          </Win>
        </main>
      </div>
      <div className="m-only m">
        <main className="m-page">
          <Intro cmd="dir" />
          <section>
            <div className="m-sec">
              <h2 className="h3">C:\JAKE</h2>
              <span className="meta">{folders.length} dir(s)</span>
            </div>
            <div className="m-tiles">
              {folders.map((f) => (
                <Link key={f.name} className="m-tile" href={f.href}>
                  <Folder />
                  <span className="file">{f.name}\</span>
                  <span className="item-text">{f.text}</span>
                </Link>
              ))}
            </div>
          </section>
          <section>
            <div className="m-sec">
              <h2 className="h3">latest notes</h2>
              <Link href="/notes">all →</Link>
            </div>
            <div className="m-rail">
              {notes.length === 0 && <span className="item-text">No notes yet.</span>}
              {notes.map((n) => (
                <article key={n.slug} className="m-card">
                  <span className="date">{n.date}</span>
                  <Link href={`/notes/${n.slug}`} className="stretch item-title">
                    {n.title}
                  </Link>
                  <span className="item-text clamp2">{n.summary}</span>
                  <Tags tags={n.tags} />
                </article>
              ))}
            </div>
          </section>
          <Win title="changes.log">
            {changes.map((c) => (
              <div key={c.file} className="row">
                <div className="file" style={{ color: "var(--accent)", fontSize: 14 }}>
                  {c.file}
                </div>
                <div className="item-text">{c.text}</div>
              </div>
            ))}
          </Win>
          <SiteFooter />
        </main>
      </div>
    </>
  )
}
