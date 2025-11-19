/**
 * Google Analytics Page View Tracker
 * 
 * Tracks page views when routes change in TanStack Router
 */

import { useEffect } from 'react'
import { useRouterState } from '@tanstack/react-router'
import { trackPageView } from '@/lib/analytics'

export const GATracker = () => {
  const router = useRouterState()

  useEffect(() => {
    const location = router.location
    if (location) {
      trackPageView(location.pathname + location.search, document.title)
    }
  }, [router.location?.pathname, router.location?.search])

  return null
}
