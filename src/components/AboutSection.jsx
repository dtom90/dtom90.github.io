import MarkdownSection from './MarkdownSection.jsx'
import aboutContent from '../content/about.md?raw'

function AboutSection() {
  return (
    <MarkdownSection
      id="about"
      title="About"
      titleColor="text-text-primary"
      content={aboutContent}
    />
  )
}

export default AboutSection

