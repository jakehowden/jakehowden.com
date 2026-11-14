import Link from "next/link"

import { Tags } from "@/components/ui"
import type { Note } from "@/lib/notes"

/** Desktop `.note-row`, used by the home page and the notes index. */
export function NoteRow({ n }: { n: Note }) {
  return (
    <div className="row note-row">
      <span className="date">{n.date}</span>
      <span>
        <Link href={`/notes/${n.slug}`} className="stretch item-title" style={{ display: "block" }}>
          {n.title}
        </Link>
        <span className="item-text">{n.summary}</span>
      </span>
      <Tags tags={n.tags} />
    </div>
  )
}
