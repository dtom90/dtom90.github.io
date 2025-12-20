function ProfileSection() {
  return (
    <div className="flex flex-col px-8">
      <h1 className="text-text-primary font-semibold m-0 text-heading-1">
        <a href="/" className="hover:text-text-secondary transition-colors no-underline">David Thomason</a>
      </h1>
      <h2 className="text-text-primary font-normal m-0 text-heading-2 mt-3">
        Software Engineer
      </h2>
      <p className="text-text-primary m-0 text-body mt-4 max-w-[320px]">
        I build accessible, pixel-perfect digital experiences for the web.
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
        </ul>
      </nav>
    </div>
  )
}

export default ProfileSection


