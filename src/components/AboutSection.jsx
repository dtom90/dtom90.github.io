import MarkdownSection from './MarkdownSection.jsx'
import aboutContent from '../content/about.md?raw'

function AboutSection() {
  return (
    <MarkdownSection
      id="about"
      content={aboutContent}
    />
  )
}

export default AboutSection

