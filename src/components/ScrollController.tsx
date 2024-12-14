import React, { useEffect, useRef } from 'react'

const ScrollController: React.FC = () => {
  const isScrolling = useRef(false) // A flag to prevent multiple scrolls

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (isScrolling.current) return // Prevent handling scroll if already scrolling

      const sections = document.querySelectorAll<HTMLElement>('.section')
      const currentScroll = window.scrollY
      const viewportHeight = window.innerHeight

      const currentSectionIndex = Array.from(sections).findIndex(
        (section) =>
          section.offsetTop <= currentScroll &&
          section.offsetTop + section.offsetHeight > currentScroll
      )

      if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        isScrolling.current = true
        sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' })
      } else if (event.deltaY < 0 && currentSectionIndex > 0) {
        isScrolling.current = true
        sections[currentSectionIndex - 1].scrollIntoView({ behavior: 'smooth' })
      }

      // Allow scrolling again after the animation completes
      setTimeout(() => {
        isScrolling.current = false
      }, 800) // Adjust duration to match animation time

      event.preventDefault()
    }

    window.addEventListener('wheel', handleScroll, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [])

  return null // No UI for the controller
}

export default ScrollController
