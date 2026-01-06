import { useActiveSectionStore } from '../store/activeSectionStore.js'

function ProfileSection() {
  const activeSection = useActiveSectionStore((state) => state.activeSection)

  return (
    <div className="flex flex-col">
      <div className="flex items-start gap-4">
        <img 
          src="/images/profile.png" 
          alt="David Thomason" 
          className="w-20 h-20 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex flex-col">
          <h1 className="text-text-primary font-semibold m-0 text-heading-1">
            <a href="/" className="transition-colors no-underline">David Thomason</a>
          </h1>
          <h2 className="text-text-primary font-normal m-0 text-heading-2 mt-3">
            Senior Software Engineer
          </h2>
        </div>
      </div>
      <p className="m-0 text-body mt-4">
        Full Stack Software Engineer with a passion for building high-quality and scalable applications.
      </p>
      <nav>
        <ul className="flex flex-col list-none p-0 m-0 mt-18">
          <li>
            <div className="flex items-center gap-3">
              <div className={`h-px transition-all ${activeSection === 'about' ? 'w-16 bg-text-primary' : 'w-8 bg-text-secondary'}`}></div>
              <a href="#about" className={`no-underline transition-colors block text-nav py-3 hover:text-text-link ${activeSection === 'about' ? 'text-text-primary' : 'text-text-secondary'}`}>
                About
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-3">
              <div className={`h-px transition-all ${activeSection === 'experience' ? 'w-16 bg-text-primary' : 'w-8 bg-text-secondary'}`}></div>
              <a href="#experience" className={`no-underline transition-colors block text-nav py-3 hover:text-text-link ${activeSection === 'experience' ? 'text-text-primary' : 'text-text-secondary'}`}>
                Experience
              </a>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-3">
              <div className={`h-px transition-all ${activeSection === 'projects' ? 'w-16 bg-text-primary' : 'w-8 bg-text-secondary'}`}></div>
              <a href="#projects" className={`no-underline transition-colors block text-nav py-3 hover:text-text-link ${activeSection === 'projects' ? 'text-text-primary' : 'text-text-secondary'}`}>
                Projects
              </a>
            </div>
          </li>
        </ul>
      </nav>
      <a href="/DavidThomasonRésumé-2026-01-06.pdf" target="_blank" rel="noopener noreferrer" className="no-underline transition-colors block text-nav py-3 flex items-center gap-2 mt-18">
        Résumé
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
      <div className="flex items-center gap-4 mt-6">
        <a 
          href="https://www.linkedin.com/in/david-thomason-7b347237/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a 
          href="https://github.com/dtom90" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default ProfileSection


