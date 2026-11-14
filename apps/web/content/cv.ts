// CV content is derived from the LaTeX source in github.com/jakehowden/CV, fetched at build time.
// shortcut: the site only picks up CV changes when it is rebuilt (push to main or re-run deploy.yml)

export type Job = { role: string; company: string; place: string; dates: string; bullets: string[] }
export type Cv = {
  headline: string
  summary: string
  links: { email: string; github: string; linkedin: string; pdf: string }
  jobs: Job[]
  skills: { group: string; tags: string[] }[]
  education: { school: string; degree: string; grade: string; dates: string }
}

const REPO = "https://raw.githubusercontent.com/jakehowden/CV/main/"

/** Drop `%` comments (but not `\%`). */
const stripComments = (tex: string) => tex.replace(/(?<!\\)%.*$/gm, "")

/** LaTeX markup to plain text. */
export const plain = (s: string) =>
  s
    .replace(/\$\\euro\$/g, "€")
    .replace(/\$\\pounds\$/g, "£")
    .replace(/\\([%#&$_])/g, "$1")
    .replace(/--/g, "–")
    .replace(/\\\\(\[[^\]]*\])?/g, " ")
    .replace(/\\[a-zA-Z]+(\{(awesome|darktext|graytext|text|lighttext)\})?/g, "")
    .replace(/[{}~]/g, " ")
    .replace(/\s+/g, " ")
    .trim()

function one(tex: string, cmd: string) {
  const m = tex.match(new RegExp(`\\\\${cmd}\\{([^}]*)\\}`))
  if (!m) throw new Error(`CV: \\${cmd}{} not found in resume_cv.tex`)
  return plain(m[1]!)
}

// Header fields only: \mobile and \address are deliberately not read (not shown on the site).
export function parseHeader(tex: string) {
  tex = stripComments(tex)
  const github = one(tex, "github")
  const linkedin = one(tex, "linkedin")
  return {
    headline: one(tex, "position"),
    summary: one(tex, "quote"),
    links: {
      email: one(tex, "email"),
      github: `https://github.com/${github}`,
      linkedin: `https://www.linkedin.com/in/${linkedin}`,
      pdf: `${REPO}resume_cv.pdf`,
    },
  }
}

export function parseExperience(tex: string): Job[] {
  tex = stripComments(tex)
  const re =
    /\\cventry\s*\{([^}]*)\}\s*\{([^}]*)\}\s*\{([^}]*)\}\s*\{([^}]*)\}\s*\{\s*\\begin\{cvitems\}([\s\S]*?)\\end\{cvitems\}/g
  return [...tex.matchAll(re)].map(([, role, company, place, dates, items]) => ({
    role: plain(role!),
    company: plain(company!),
    place: plain(place!).split(",")[0]!, // "Cardiff, United Kingdom" -> "Cardiff"
    dates: plain(dates!).replace(/\s*–\s*/, " – "),
    bullets: items!.split("\\item").slice(1).map(plain),
  }))
}

export function parseSkills(tex: string) {
  tex = stripComments(tex)
  const re = /\\cvskill\s*\{([^}]*)\}\s*\{\\begin\{tabular\}\{[^}]*\{\}[^}]*\{\}\}([\s\S]*?)\\end\{tabular\}/g
  return [...tex.matchAll(re)].map(([, group, body]) => ({
    group: plain(group!),
    // Split on commas and line breaks, but not commas inside "(AKS, EKS)".
    tags: body!
      .replace(/\\\\/g, ",")
      .split(/,(?![^()]*\))/)
      .map(plain)
      .filter(Boolean),
  }))
}

export function parseEducation(tex: string) {
  tex = stripComments(tex)
  const body = tex.match(/\\begin\{cvparagraph\}([\s\S]*?)\\end\{cvparagraph\}/)?.[1]
  if (!body) throw new Error("CV: no cvparagraph in education.tex")
  const [school, degree, grade, dates] = body.split(/\\\\\[\d+pt\]/).map(plain)
  return { school: school!, degree: degree!, grade: grade!, dates: dates!.replace(/\s*–\s*/, " – ") }
}

async function get(path: string) {
  const res = await fetch(REPO + path)
  if (!res.ok) throw new Error(`CV: fetching ${path} failed (${res.status})`)
  return res.text()
}

/** Fails the build rather than publishing an empty or partial CV. */
export async function getCv(): Promise<Cv> {
  const [main, experience, skills, education] = await Promise.all(
    ["resume_cv.tex", "cv-sections/experience.tex", "cv-sections/skills.tex", "cv-sections/education.tex"].map(get)
  )
  const cv = {
    ...parseHeader(main!),
    jobs: parseExperience(experience!),
    skills: parseSkills(skills!),
    education: parseEducation(education!),
  }
  if (!cv.jobs.length || !cv.skills.length || cv.jobs.some((j) => !j.bullets.length)) {
    throw new Error("CV: parsed no jobs/skills from the LaTeX; has the CV format changed?")
  }
  return cv
}
