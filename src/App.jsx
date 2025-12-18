import ProfileSection from './ProfileSection.jsx'
import MainSection from './MainSection.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
      <div className="flex flex-row items-start justify-center gap-12">
        <ProfileSection />
        <MainSection />
      </div>
    </div>
  )
}

export default App

