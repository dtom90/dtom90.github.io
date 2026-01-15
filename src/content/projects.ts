export interface Project {
  name: string
  url: string
  githubUrl?: string
  appStoreUrl?: string
  description: string
  techStack: string[]
}

export const projects: Project[] = [
  {
    name: "Startracker",
    url: "https://startracker.app/",
    githubUrl: "https://github.com/ProspektStudio/Startracker",
    description: "Interactive 3D satellite tracker with AI insights using LLM and Retrieval Augmented Generation.",
    techStack: [
      "React",
      "Next.js",
      "three.js",
      "IndexedDB",
      "Python",
      "FastAPI",
      "Langchain",
      "Gemini",
      "Docker",
      "GitHub Actions"
    ]
  },
  {
    name: "HeroChat",
    url: "https://herochat.app/",
    githubUrl: "https://github.com/dtom90/HeroChat",
    description: "Chat with Historical Figures via AI text or voice (Speech-to-text, LLM, Text-to-Speech).",
    techStack: [
      "React Native",
      "TypeScript",
      "Node.js",
      "WebSockets",
      "Server-Sent Events",
      "Gemini",
      "Docker",
      "Google Cloud"
    ]
  },
  {
    name: "Meritable",
    url: "https://meritable.app/habits",
    appStoreUrl: "https://apps.apple.com/us/app/meritable/id6752503806",
    githubUrl: "https://github.com/dtom90/Meritable",
    description: "Habit tracking web & mobile app for tracking habit completion & count consistency",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind",
      "Tailwind",
      "TanStack",
      "Dexie",
      "AsyncStorage",
      "Supabase"
    ]
  },
  {
    name: "Pomodash",
    url: "https://home.pomodash.app/",
    githubUrl: "https://github.com/dtom90/Pomodash",
    description: "Task management web & desktop app with pomodoro timer and activity tracking/visualization.",
    techStack: [
      "Vue.js",
      "Vuex",
      "Bootstrap",
      "Electron",
      "Jest",
      "Cypress",
      "Docker",
      "CircleCI"
    ]
  }
]
