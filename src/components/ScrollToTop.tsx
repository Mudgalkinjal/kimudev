import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const handleScrollOnRefresh = () => window.scrollTo(0, 0)
    window.addEventListener('load', handleScrollOnRefresh)

    return () => {
      window.removeEventListener('load', handleScrollOnRefresh)
    }
  }, [])

  return null
}

export default ScrollToTop
