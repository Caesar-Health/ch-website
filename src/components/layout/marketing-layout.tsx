import { useEffect } from 'react'
import { Outlet, useLocation } from '@tanstack/react-router'
import { MarketingHeader } from './marketing-header'
import { MarketingFooter } from './marketing-footer'

export function MarketingLayout() {
  const location = useLocation()
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <MarketingFooter />
    </div>
  )
}

