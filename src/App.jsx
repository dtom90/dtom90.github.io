import { useRef } from 'react'
import ProfileSection from './components/ProfileSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import { useActiveSection } from './hooks/useActiveSection.js'
import { useCursorGradient } from './hooks/useCursorGradient.js'

function App() {
  const scrollContainerRef = useActiveSection()
  const gradientRef = useRef(null)
  useCursorGradient(gradientRef)

  return (
    <div
      ref={gradientRef}
      className="cursor-gradient-bg min-h-screen flex flex-col items-center justify-center"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 w-full max-w-full md:w-screen h-screen max-h-screen px-8 md:px-0 overflow-y-auto md:overflow-hidden scroll-smooth">
        <div className="flex-1 min-w-0 md:max-w-[50%] md:h-full md:overflow-y-auto flex flex-col md:pl-8">
          <div className="max-w-xl md:ml-auto pt-20">
            <ProfileSection />
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex flex-col md:overflow-y-auto flex-[0_0_50%] min-w-0 md:h-full md:pr-8 scroll-smooth"
        >
          <div className="max-w-xl">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <div className="h-20 flex-shrink-0"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

