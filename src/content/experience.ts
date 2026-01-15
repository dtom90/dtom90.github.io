export interface Company {
  name: string
  url: string
}

export interface ExperienceEntry {
  company: Company
  title: string
  period: string
  techStack: string[]
  achievements: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: {
      name: "Invisible Technologies",
      url: "https://invisibletech.ai/"
    },
    title: "Senior Software Engineer",
    period: "2025 – Present",
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "FastAPI",
      "Python",
      "Kubernetes",
      "Helm",
      "GCP",
      "Databricks"
    ],
    achievements: [
      "Created a dashboard compiler and reverse-engineered a data warehouse visualization tool with interactive filters, widgets, and charts.",
      "Built new ontology page for helping customers understand their data model."
    ]
  },
  {
    company: {
      name: "SpaceX",
      url: "https://www.spacex.com"
    },
    title: "Software Engineer",
    period: "2022 – 2024",
    techStack: [
      "Angular",
      "TypeScript",
      ".NET",
      "Python",
      "PostgreSQL",
      "Kubernetes",
      "Helm",
      "Kafka",
      "Azure",
      "Terraform"
    ],
    achievements: [
      "Graph Database Application for Design & Manufacturing Data",
      "Gantt Chart Scheduling System for Test & Launch Operations",
      "Led design & development of a property management system",
      "Site Information & Map Mobile App",
      "Improved system used for tracking risk tickets across rocket hardware",
      "Maintained and updated supply chain management system"
    ]
  },
  {
    company: {
      name: "Nylas",
      url: "https://www.nylas.com"
    },
    title: "Software Engineer",
    period: "2021 – 2022",
    techStack: [
      "Python",
      "MySQL",
      "AWS",
      "GoLang",
      "Kubernetes",
      "Google Cloud",
      "Redis",
      "Temporal",
      "Pub/Sub"
    ],
    achievements: [
      "Led integration of legacy & new systems for email and calendar APIs."
    ]
  },
  {
    company: {
      name: "IBM",
      url: "https://www.ibm.com"
    },
    title: "Software Engineer",
    period: "2013 – 2021",
    techStack: [
      "Node.js",
      "PostgreSQL",
      "Jest",
      "Kubernetes",
      "Python",
      "Pandas",
      "SciKit Learn",
      "R Shiny",
      "D3"
    ],
    achievements: [
      "Developed APIs for new \"Actions\" chatbot framework.",
      "Redesigned E2E Testing Framework and refactored system dependency status framework."
    ]
  }
]
