import { experience } from '../content/experience'
import TechStack from './TechStack'

function ExperienceSection() {
  return (
    <div className="max-w-xl text-left" id="experience">
      <div className="h-20 flex-shrink-0"></div>
      <div className="text-heading-2 font-semibold mb-8 text-text-primary">Professional Experience</div>
      <div className="text-body text-text-secondary [&>p:not(:last-child)]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3 [&_ul>li]:mb-1 [&_ul>li>p]:mb-0 [&_ul_ul]:list-circle [&_ul_ul]:ml-4 [&_ul_ul_ul]:list-square">
        {experience.map((entry, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-xl font-semibold mb-3 mt-6 first:mt-0">
              <a
                href={entry.company.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {entry.company.name}
              </a>
            </h3>
            <p className="mb-3">
              {entry.title} | <em>{entry.period}</em>
            </p>
            <ul className="list-disc pl-6 mb-3">
              {entry.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="mb-1">
                  <p className="mb-0">{achievement}</p>
                </li>
              ))}
            </ul>
            <TechStack techStack={entry.techStack} />
          </div>
        ))}
      </div>
      <div className="h-20 flex-shrink-0"></div>
    </div>
  )
}

export default ExperienceSection

