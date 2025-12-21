import MarkdownSection from './MarkdownSection.jsx'
import experienceContent from '../content/experience.md?raw'

function ExperienceSection() {
  return (
    <MarkdownSection
      id="experience"
      title="Experience"
      content={experienceContent}
    />
  )
}

export default ExperienceSection

