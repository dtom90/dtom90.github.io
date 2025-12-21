function ProfileSection() {
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
            <a href="/" className="hover:text-text-secondary transition-colors no-underline">David Thomason</a>
          </h1>
          <h2 className="text-text-primary font-normal m-0 text-heading-2 mt-3">
            Senior Software Engineer
          </h2>
        </div>
      </div>
      <p className="text-text-primary m-0 text-body mt-4">
        Full Stack Software Engineer with a passion for building high-quality and scalable applications.
      </p>
      <nav>
        <ul className="flex flex-col list-none p-0 m-0 mt-18">
          <li>
            <a href="#about" className="text-text-primary no-underline hover:text-text-secondary transition-colors block text-nav py-3">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="text-text-primary no-underline hover:text-text-secondary transition-colors block text-nav py-3">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-text-primary no-underline hover:text-text-secondary transition-colors block text-nav py-3">
              Projects
            </a>
          </li>
          <li>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-text-secondary no-underline hover:text-text-secondary transition-colors block text-nav py-3 flex items-center gap-2">
              Résumé
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default ProfileSection


