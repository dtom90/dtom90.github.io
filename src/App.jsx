import ProfileSection from './components/ProfileSection.jsx'
import MainSection from './components/MainSection.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 bg-background-primary">
      <div className="flex flex-row items-start justify-center gap-12 max-w-6xl w-full">
        <ProfileSection />
        <MainSection />
      </div>
    </div>
  )
}

export default App

