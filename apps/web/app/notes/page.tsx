import type { Metadata } from "next"
import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { Tags, Win } from "@/components/ui"
import { getNotes } from "@/lib/notes"

export const metadata: Metadata = { title: "Notes" }

function Intro() {
  return (
    <div className="intro">
      <p className="crumb">
        <Link href="/">C:\JAKE\</Link>NOTES
      </p>
      <h1 className="title">Notes</h1>
      <p className="lead">Write-ups of things I’ve set up, fixed or figured out.</p>
    </div>
  )
}

export default async function NotesPage() {
  const notes = await getNotes()
  const foot = (
    <div className="win-foot">
      <span>{notes.length} file(s)</span>
    </div>
  )
  return (
    <>
      <div className="d-only">
        <main className="wrap page">
          <div className="intro-row">
            <Intro />
          </div>
          <Win title="notes">
            {notes.map((n) => (
              <div key={n.slug} className="row note-row">
                <span className="date">{n.date}</span>
                <span>
                  <Link href={`/notes/${n.slug}`} className="stretch item-title" style={{ display: "block" }}>
                    {n.title}
                  </Link>
                  <span className="item-text">{n.summary}</span>
                </span>
                <Tags tags={n.tags} />
              </div>
            ))}
            {foot}
          </Win>
        </main>
      </div>
      <div className="m-only m">
        <main className="m-page">
          <Intro />
          <Win title="notes">
            {notes.map((n) => (
              <div
                key={n.slug}
                className="row m-note"
                style={{ position: "relative", display: "flex", flexDirection: "column", gap: 4 }}
              >
                <span className="meta">
                  <span className="date">{n.date}</span> · {n.tags.join(" · ")}
                </span>
                <Link href={`/notes/${n.slug}`} className="stretch item-title">
                  {n.title}
                </Link>
                <span className="item-text">{n.summary}</span>
              </div>
            ))}
            {foot}
          </Win>
          <SiteFooter />
        </main>
      </div>
    </>
  )
}
