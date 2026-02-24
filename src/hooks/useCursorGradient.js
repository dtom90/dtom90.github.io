import { useEffect } from 'react'

/**
 * Updates --mouse-x and --mouse-y (0–1) on the ref's element for cursor-following gradient.
 */
export function useCursorGradient(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      el.style.setProperty('--mouse-x', String(x))
      el.style.setProperty('--mouse-y', String(y))
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [ref])
}
