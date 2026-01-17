import { projects } from '../content/projects'
import TechStack from './TechStack'
import { GitHubIcon, AppStoreIcon } from './icons'

function ProjectsSection() {
  return (
    <div className="max-w-xl text-left" id="projects">
      <div className="h-20 flex-shrink-0"></div>
      <div className="text-heading-2 font-semibold mb-8 text-text-primary">Projects</div>
      <div className="text-body text-text-secondary [&>p:not(:last-child)]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3 [&_ul>li]:mb-1 [&_ul>li>p]:mb-0 [&_ul_ul]:list-circle [&_ul_ul]:ml-4 [&_ul_ul_ul]:list-square">
        {projects.map((project, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-xl font-semibold mb-3 mt-6 first:mt-0">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </a>
            </h3>
            <p className="mb-3">
              {project.description}
            </p>
            <div className="mb-3 flex items-center gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:underline flex items-center gap-2"
                >
                  <GitHubIcon className="w-4 h-4" />
                  GitHub
                </a>
              )}
              {project.appStoreUrl && (
                <a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:underline flex items-center gap-2"
                >
                  <AppStoreIcon className="w-4 h-4" />
                  App Store
                </a>
              )}
            </div>
            <TechStack techStack={project.techStack} />
          </div>
        ))}
      </div>
      <div className="h-20 flex-shrink-0"></div>
    </div>
  )
}

export default ProjectsSection

