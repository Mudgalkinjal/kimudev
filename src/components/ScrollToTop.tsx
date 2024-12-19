import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Disable browser's default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    // Handle page refresh
    const handleScrollOnRefresh = () => window.scrollTo(0, 0)
    window.addEventListener('load', handleScrollOnRefresh)

    return () => {
      window.removeEventListener('load', handleScrollOnRefresh)
    }
  }, [])

  return null
}

export default ScrollToTop
