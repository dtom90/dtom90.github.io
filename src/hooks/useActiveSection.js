import { useEffect, useRef } from 'react'
import { useActiveSectionStore } from '../store/activeSectionStore.js'

export function useActiveSection() {
  const scrollContainerRef = useRef(null)
  const setActiveSection = useActiveSectionStore((state) => state.setActiveSection)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const sections = ['about', 'experience', 'projects']
    const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean)

    if (sectionElements.length === 0) return

    const observerOptions = {
      root: scrollContainer,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sectionElements.forEach(section => observer.observe(section))

    return () => {
      sectionElements.forEach(section => observer.unobserve(section))
    }
  }, [setActiveSection])

  return scrollContainerRef
}

