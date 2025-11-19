/**
 * Google Analytics Utility
 * 
 * Provides functions for tracking page views and custom events.
 * Only tracks in production when GA_MEASUREMENT_ID is configured.
 */

import { GA_MEASUREMENT_ID, isGAEnabled } from '@/config/analytics'

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
    dataLayer?: unknown[]
  }
}

/**
 * Initialize Google Analytics
 * Dynamically loads the GA script and initializes tracking
 */
export const initGA = () => {
  if (!isGAEnabled()) {
    return
  }

  // Load the Google Analytics script dynamically
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments)
  }

  // Set initial timestamp
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  })
}

/**
 * Track a page view
 */
export const trackPageView = (path: string, title?: string) => {
  if (!isGAEnabled() || !window.gtag) {
    return
  }

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title || document.title,
  })
}

/**
 * Track a custom event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (!isGAEnabled() || !window.gtag) {
    return
  }

  window.gtag('event', eventName, eventParams)
}

/**
 * Common event tracking helpers
 */
export const analytics = {
  /**
   * Track button clicks
   */
  trackClick: (buttonName: string, location?: string) => {
    trackEvent('click', {
      event_category: 'button',
      event_label: buttonName,
      location,
    })
  },

  /**
   * Track form submissions
   */
  trackFormSubmit: (formName: string, success: boolean) => {
    trackEvent('form_submit', {
      event_category: 'form',
      event_label: formName,
      success,
    })
  },

  /**
   * Track downloads
   */
  trackDownload: (fileName: string, fileType?: string) => {
    trackEvent('file_download', {
      event_category: 'download',
      event_label: fileName,
      file_type: fileType,
    })
  },

  /**
   * Track external link clicks
   */
  trackExternalLink: (url: string) => {
    trackEvent('external_link_click', {
      event_category: 'outbound',
      event_label: url,
    })
  },

  /**
   * Track search queries
   */
  trackSearch: (searchTerm: string, resultsCount?: number) => {
    trackEvent('search', {
      event_category: 'search',
      event_label: searchTerm,
      results_count: resultsCount,
    })
  },
}
