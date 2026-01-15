function TechBadge({ tech }) {
  return (
    <span className="inline-block px-3 py-1 text-sm rounded-full bg-background-secondary text-text-teal">
      {tech}
    </span>
  )
}

function TechStack({ techStack }) {
  if (!techStack || techStack.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {techStack.map((tech, techIndex) => (
        <TechBadge key={techIndex} tech={tech} />
      ))}
    </div>
  )
}

export default TechStack
