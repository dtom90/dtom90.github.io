import ProfileSection from './components/ProfileSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import { useActiveSection } from './hooks/useActiveSection.js'

function App() {
  const scrollContainerRef = useActiveSection()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 bg-background-primary">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 max-w-6xl w-full h-screen max-h-screen py-8 overflow-y-auto md:overflow-hidden">
        <div className="flex-1 max-w-[50%] md:h-full md:overflow-y-auto flex flex-col justify-center">
          <ProfileSection />
        </div>
        <div ref={scrollContainerRef} className="flex flex-col md:overflow-y-auto flex-1 min-w-0 md:h-full">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <div className="h-20 flex-shrink-0"></div>
        </div>
      </div>
    </div>
  )
}

export default App

