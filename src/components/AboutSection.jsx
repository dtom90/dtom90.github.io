import MarkdownSection from './MarkdownSection.jsx'
import aboutContent from '../content/about.md?raw'

function AboutSection() {
  return (
    <div className="max-w-xl text-left" id="about">
      <div className="text-heading-2 font-semibold mb-8 text-text-primary">About</div>
      <MarkdownSection
        content={aboutContent}
      />
      <div className="h-20 flex-shrink-0"></div>
    </div>
  )
}

export default AboutSection

