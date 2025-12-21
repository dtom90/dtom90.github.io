import MarkdownSection from './MarkdownSection.jsx'
import projectsContent from '../content/projects.md?raw'

function ProjectsSection() {
  return (
    <MarkdownSection
      id="projects"
      title="Projects"
      content={projectsContent}
    />
  )
}

export default ProjectsSection

