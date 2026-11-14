import type { Metadata } from "next"
import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { Tags, Win } from "@/components/ui"
import { type Cv, getCv } from "@/content/cv"

export const metadata: Metadata = { title: "CV" }

const Intro = ({ headline, summary }: Pick<Cv, "headline" | "summary">) => (
  <>
    <p className="crumb">
      <Link href="/">C:\JAKE\</Link>CV
    </p>
    <h1 className="title">{headline}</h1>
    <p className="lead">{summary}</p>
  </>
)

const Skills = ({ gap, skills }: { gap: number; skills: Cv["skills"] }) => (
  <Win title="skills">
    <div className="win-body" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {skills.map((s) => (
        <div key={s.group} style={{ display: "flex", flexDirection: "column", gap }}>
          <span className="label">{s.group}</span>
          <Tags tags={s.tags} />
        </div>
      ))}
    </div>
  </Win>
)

const Education = ({ education }: Pick<Cv, "education">) => (
  <Win title="education">
    <div className="win-body" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <h3 className="item-title">{education.school}</h3>
      <div>{education.degree}</div>
      <div className="item-text">{education.grade}</div>
      <div className="date">{education.dates}</div>
    </div>
  </Win>
)

export default async function CvPage() {
  const { headline, summary, links, jobs, skills, education } = await getCv()
  return (
    <>
      <div className="d-only">
        <main className="wrap page">
          <div className="intro-row">
            <div className="intro">
              <Intro headline={headline} summary={summary} />
            </div>
          </div>
          <div className="cv-grid">
            <aside className="cv-aside">
              <Win title="contact">
                <div
                  className="win-body"
                  style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--mono)", fontSize: 14 }}
                >
                  <a href={`mailto:${links.email}`}>{links.email}</a>
                  <a href={links.github}>{links.github.replace("https://", "")}</a>
                  <a href={links.linkedin}>{links.linkedin.replace("https://www.linkedin.com/in/", "linkedin/")}</a>
                  <a
                    className="btn btn-primary"
                    href={links.pdf}
                    download
                    style={{ marginTop: 12, alignSelf: "flex-start", fontFamily: "Inter,system-ui,sans-serif" }}
                  >
                    Download PDF
                  </a>
                </div>
              </Win>
              <Skills gap={6} skills={skills} />
              <Education education={education} />
            </aside>
            <Win title="experience.log">
              {jobs.map((j) => (
                <article key={j.dates} className="row">
                  <div className="date" style={{ marginBottom: 4 }}>
                    {j.dates} <span className="meta">· {j.place}</span>
                  </div>
                  <h3 className="item-title">
                    {j.role} <span style={{ fontWeight: 400, color: "var(--muted)" }}>· {j.company}</span>
                  </h3>
                  <ul
                    style={{ margin: "8px 0 0", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 4, fontSize: 15 }}
                  >
                    {j.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </Win>
          </div>
        </main>
      </div>
      <div className="m-only m">
        <main className="m-page">
          <div className="intro">
            <Intro headline={headline} summary={summary} />
          </div>
          <div className="m-actgrid">
            <a className="btn btn-block" href={`mailto:${links.email}`}>
              Email
            </a>
            <a className="btn btn-block btn-primary" href={links.pdf} download>
              PDF ↓
            </a>
            <a className="btn btn-block" href={links.github}>
              GitHub
            </a>
            <a className="btn btn-block" href={links.linkedin}>
              LinkedIn
            </a>
          </div>
          <Win title="experience.log">
            {jobs.map((j, i) => (
              <details key={j.dates} className="row m-job" open={i === 0}>
                <summary>
                  <span className="date">
                    {j.dates} · {j.place}
                  </span>
                  <span className="item-title">{j.role}</span>
                  <span className="item-text">{j.company}</span>
                  <span className="chev" aria-hidden="true">
                    ▾
                  </span>
                </summary>
                <ul>
                  {j.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </details>
            ))}
          </Win>
          <Skills gap={8} skills={skills} />
          <Education education={education} />
          <SiteFooter />
        </main>
      </div>
    </>
  )
}
