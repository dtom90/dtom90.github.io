import { useActiveSectionStore } from '../store/activeSectionStore.js'
import { GitHubIcon, LinkedInIcon, ExternalLinkIcon } from './icons'

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
        <ExternalLinkIcon className="w-4 h-4" />
      </a>
      <div className="flex items-center gap-4 mt-6">
        <a 
          href="https://www.linkedin.com/in/david-thomason-7b347237/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition-colors"
          aria-label="LinkedIn"
        >
          <LinkedInIcon className="w-6 h-6" />
        </a>
        <a 
          href="https://github.com/dtom90" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition-colors"
          aria-label="GitHub"
        >
          <GitHubIcon className="w-6 h-6" />
        </a>
      </div>
    </div>
  )
}

export default ProfileSection


