import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { SiteFooter } from "@/components/site-footer"
import { Tags, Win } from "@/components/ui"
import { getNote, getNotes, loadNote } from "@/lib/notes"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export async function generateStaticParams() {
  return (await getNotes()).map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const note = await getNote((await params).slug)
  return { title: note?.title }
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params
  const notes = await getNotes()
  const i = notes.findIndex((n) => n.slug === slug)
  if (i < 0) notFound()
  const note = notes[i]!
  const prev = notes[i + 1]
  const { default: Post } = await loadNote(note.file)
  const meta = (style?: React.CSSProperties) => (
    <div className="meta post-meta" style={style}>
      {note.date} · {note.minutes} min read
      <Tags tags={note.tags} />
    </div>
  )

  return (
    <>
      <div className="d-only">
        <main className="wrap page">
          <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 40 }}>
            <div className="intro-row">
              <div className="intro">
                <p className="crumb">
                  <Link href="/">C:\JAKE\</Link>
                  <Link href="/notes">NOTES\</Link>
                  {slug}.md
                </p>
                <h1 className="title">{note.title}</h1>
              </div>
            </div>
            {meta({ marginTop: -28 })}
            <Win title={`${slug}.md`}>
              <article className="prose post-body">
                <Post />
              </article>
            </Win>
            <nav
              aria-label="More notes"
              style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between" }}
            >
              {prev && (
                <Link className="btn" href={`/notes/${prev.slug}`}>
                  ← {prev.title}
                </Link>
              )}
              <Link className="btn" href="/notes">
                All notes
              </Link>
            </nav>
          </div>
        </main>
      </div>
      <div className="m-only m">
        <main className="m-page">
          <Link className="m-back" href="/notes">
            ← notes
          </Link>
          <div className="intro">
            <h1 className="title post-title">{note.title}</h1>
            {meta()}
          </div>
          <article className="prose" style={{ borderTop: "1.5px solid var(--fg)", paddingTop: 20 }}>
            <Post />
          </article>
          <nav aria-label="More notes" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {prev && (
              <Link className="m-card" style={{ flex: "none" }} href={`/notes/${prev.slug}`}>
                <span className="label">previous</span>
                <span className="item-title">{prev.title}</span>
              </Link>
            )}
            <Link className="m-card" style={{ flex: "none" }} href="/notes">
              <span className="label">back to</span>
              <span className="item-title">All notes</span>
            </Link>
          </nav>
          <SiteFooter />
        </main>
      </div>
    </>
  )
}
