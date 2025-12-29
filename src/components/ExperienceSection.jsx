import MarkdownSection from './MarkdownSection.jsx'
import experienceContent from '../content/experience.md?raw'

function ExperienceSection() {
  return (
    <MarkdownSection
      id="experience"
      content={experienceContent}
    />
  )
}

export default ExperienceSection

