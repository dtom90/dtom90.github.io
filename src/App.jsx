import ProfileSection from './components/ProfileSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 bg-background-primary">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 max-w-6xl w-full">
        <ProfileSection />
        <div className="flex flex-col gap-12">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
        </div>
      </div>
    </div>
  )
}

export default App

