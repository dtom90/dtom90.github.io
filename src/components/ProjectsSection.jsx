import MarkdownSection from './MarkdownSection.jsx'
import projectsContent from '../content/projects.md?raw'

function ProjectsSection() {
  return (
    <MarkdownSection
      id="projects"
      content={projectsContent}
    />
  )
}

export default ProjectsSection

