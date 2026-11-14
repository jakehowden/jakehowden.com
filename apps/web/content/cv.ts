export type Job = {
  role: string
  company: string
  place: string
  dates: string
  bullets: readonly string[]
}

export const headline = "Senior Software Engineer"

export const summary =
  "Cloud-native .NET engineer with 8+ years designing event-driven platforms on AWS and Azure. I have tackled a range of problems, worked with cross-functional teams, and engineered features that improve customer experience and revenue metrics. I have also led teams as a technical lead, mentored developers, and set engineering standards adopted company-wide."

export const links = {
  email: "jakehowden@gmail.com",
  github: "https://github.com/jakehowden",
  linkedin: "https://www.linkedin.com/in/jake-howden",
  pdf: "https://raw.githubusercontent.com/jakehowden/CV/main/resume_cv.pdf",
}

export const jobs: readonly Job[] = [
  {
    role: "Senior Software Engineer",
    company: "Confused.com (RVU)",
    place: "Cardiff",
    dates: "02/2026 – now",
    bullets: [
      "As technical lead of 3 engineers, owned the architecture of a new client-facing portal replacing manual account management: AKS behind Cloudflare and App Gateway WAF, with event-driven integration on Event Hubs.",
      "Averted a second portal build by making the case for folding a legacy internal portal into the new one, aligning four stakeholders one-to-one before the decision; then led the phased migration planning.",
      "Cut the time to stand up production services from 3 days to 22 minutes by leading the build of a multi-agent AI orchestrator.",
      "Established a company-wide standard for Architecture Decision Records, with a central site now used by 15+ teams.",
      "Consolidated divergent CI pipelines into shared GitHub Actions templates now used by 4 teams.",
      "Drove Claude Code adoption outside engineering, onboarding 18 staff in 3 sessions with a setup guide other guilds reused.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Just Eat Takeaway",
    place: "Bristol",
    dates: "09/2024 – 02/2026",
    bullets: [
      "Engineered and architected an event-driven platform generating €243 million in annual revenue.",
      "Migrated legacy services from EC2 to Kubernetes (EKS), reducing infrastructure spend by 30%.",
      "Standardised our messaging framework to eliminate duplicated code and reduce complexity across microservices.",
      "Integrated E2E test suites into CI/CD pipelines, strengthening release gates and improving service reliability.",
      "Championed multiple features which improved agent efficiency and customer satisfaction.",
      "Mentored senior developers transitioning to .NET, offering guidance in engineering and testing best practices.",
    ],
  },
  {
    role: "Software Consultant",
    company: "Ensono",
    place: "Remote",
    dates: "04/2022 – 07/2024",
    bullets: [
      "Successfully delivered a marketing system overhaul for Next PLC, migrating on-prem monoliths to cloud microservices in a £5 million contract.",
      "Designed and implemented CI/CD pipelines to deploy services to Azure Kubernetes Service.",
      "Co-led a £1.2 million initiative rebuilding admissions and finance communications for a London university with Azure Functions and Azure Service Bus.",
      "Applied TDD, automated regression suites, and infrastructure-as-code to sustain high deployment confidence.",
      "Facilitated stakeholder workshops and roadmap reviews that aligned engineering deliverables with business milestones.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Tytonical",
    place: "Remote",
    dates: "06/2020 – 04/2022",
    bullets: [
      "Owned end-to-end delivery of back-end web APIs and full-stack applications for fintech and media clients.",
      "Prioritised scalability and high availability when designing AWS ECS deployments, ensuring cost-efficient operations.",
      "Brokered partner integrations by defining APIs, SLAs, and support processes that kept joint launches on schedule.",
      "Mentored interns through structured workshops and pair-programming, progressing them to production-ready contributors.",
    ],
  },
  {
    role: "App Manager",
    company: "Newpark Solutions",
    place: "Bristol",
    dates: "01/2019 – 06/2020",
    bullets: [
      "Directed a full redesign of the parking payment app, coordinating product, design, and engineering across release cycles.",
      "Led customer support and QA teams, instituting feedback loops that tightened defect triage and response times.",
      "Maintained and extended backend web services to onboard new municipal clients and payment features.",
      "Raised the app store rating from 1.5–2 to 4+, improving brand perception and retention.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Newpark Solutions",
    place: "Bristol",
    dates: "06/2018 – 01/2019",
    bullets: [
      "Integrated a new payment service provider for in-app payments, improving checkout reliability and compliance.",
      "Built automated payment services that delivered a frictionless parking experience for customers.",
    ],
  },
]

export const skills: readonly { group: string; tags: readonly string[] }[] = [
  {
    group: "Programming",
    tags: ["C# .NET", ".NET Core", "ASP.NET Core", "CosmosDB", "DynamoDB", "PostgreSQL", "TDD", "xUnit", "Kafka", "SQS/SNS", "Service Bus", "Event Hubs"],
  },
  {
    group: "Architecture",
    tags: ["Cloud", "Microservices", "Event Driven", "Domain-Driven Design", "CQRS", "HTTP", "Messaging", "Architecture Decision Records"],
  },
  {
    group: "DevOps",
    tags: ["Terraform", "Helm Charts", "Serverless", "CI/CD", "GitHub Actions", "Azure DevOps", "Infrastructure as Code", "ArgoCD"],
  },
  {
    group: "Cloud",
    tags: ["AWS", "Azure", "Serverless", "Kubernetes (AKS, EKS)", "Docker", "AWS Lambda", "Azure Functions", "Cloudflare"],
  },
]

export const education = {
  school: "University of South Wales",
  degree: "BSc (Hons) Computer Games Development",
  grade: "First-Class Honours",
  dates: "09/2015 – 06/2018",
}
