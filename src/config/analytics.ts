/**
 * Google Analytics Configuration
 * 
 * Set the VITE_GA_MEASUREMENT_ID environment variable to enable Google Analytics.
 * Example: VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 */

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || ''

export const isGAEnabled = () => {
  return Boolean(GA_MEASUREMENT_ID && import.meta.env.PROD)
}
