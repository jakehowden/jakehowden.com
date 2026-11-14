// Run: npm run test -w web. Fixtures mirror the shapes in github.com/jakehowden/CV.
import assert from "node:assert/strict"
import { test } from "node:test"

import { parseEducation, parseExperience, parseHeader, parseSkills } from "./cv.ts"

test("header: reads position, quote and links; never phone or address", () => {
  const h = parseHeader(String.raw`
\address{Cardiff, South Wales}
\mobile{07000000000}
\email{me@example.com}
\github{jakehowden}
\linkedin{jake-howden}
\position{Senior Software Engineer}
\quote{Engineer with 8+ years. 50\% fewer bugs.}`)
  assert.equal(h.headline, "Senior Software Engineer")
  assert.equal(h.summary, "Engineer with 8+ years. 50% fewer bugs.")
  assert.equal(h.links.github, "https://github.com/jakehowden")
  assert.equal(h.links.linkedin, "https://www.linkedin.com/in/jake-howden")
  assert.doesNotMatch(JSON.stringify(h), /07000000000|South Wales/)
})

test("experience: entries, comments, TeX symbols and dashes", () => {
  const [job] = parseExperience(String.raw`
% Senior - Example
\cventry%
  {Software Engineer} % Job title
  {Just Eat Takeaway} % Company
  {Bristol, United Kingdom} % Location
  {09/2024--02/2026} % Date
  {
    \begin{cvitems}
      \item Platform generating $\euro$243 million, cutting spend by 30\%.
      \item Raised rating from 1.5--2 to 4+ on a $\pounds$5 million contract.
    \end{cvitems}
  }`)
  assert.deepEqual(job, {
    role: "Software Engineer",
    company: "Just Eat Takeaway",
    place: "Bristol",
    dates: "09/2024 – 02/2026",
    bullets: [
      "Platform generating €243 million, cutting spend by 30%.",
      "Raised rating from 1.5–2 to 4+ on a £5 million contract.",
    ],
  })
})

test("skills: splits on commas and line breaks, keeps commas inside brackets", () => {
  const [cloud] = parseSkills(String.raw`
\cvskill%
  {Cloud} % Category
  {\begin{tabular}{@{}l@{}}
    AWS, C\# .NET, Kubernetes (AKS, EKS), Docker,\\
    Cloudflare
   \end{tabular}}`)
  assert.deepEqual(cloud, { group: "Cloud", tags: ["AWS", "C# .NET", "Kubernetes (AKS, EKS)", "Docker", "Cloudflare"] })
})

test("education: four lines, styling stripped", () => {
  const e = parseEducation(String.raw`
\begin{cvparagraph}
  {\textcolor{awesome}{\large\textbf{University of South Wales}}}\\[2pt]
  {\textcolor{darktext}{\normalsize BSc (Hons) Computer Games\\ Development}}\\[1pt]
  {\textcolor{graytext}{\itshape First-Class Honours}}\\[1pt]% chktex 6
  {\textcolor{graytext}{\small 09/2015--06/2018}}\\[4pt]
\end{cvparagraph}`)
  assert.deepEqual(e, {
    school: "University of South Wales",
    degree: "BSc (Hons) Computer Games Development",
    grade: "First-Class Honours",
    dates: "09/2015 – 06/2018",
  })
})
