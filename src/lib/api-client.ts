/**
 * API Client Configuration
 * Centralized axios instance with authentication and error handling
 */

import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { toast } from 'sonner'

// Get API base URL from environment variable with fallback
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

/**
 * Create configured axios instance
 */
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 second timeout
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * Request interceptor - Add authentication token
 */
apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // Get Clerk token if available
    try {
      // Check if Clerk is loaded and user is authenticated
      if (typeof window !== 'undefined' && window.Clerk) {
        const session = await window.Clerk.session
        if (session) {
          const token = await session.getToken()
          if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`
          }
        }
      }
    } catch (error) {
      // Silent fail - request will proceed without auth token
      console.warn('Failed to attach auth token:', error)
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * Response interceptor - Handle errors globally
 */
apiClient.interceptors.response.use(
  (response) => {
    // Return successful responses as-is
    return response
  },
  (error: AxiosError) => {
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      const status = error.response.status
      const data = error.response.data as any

      switch (status) {
        case 400:
          // Bad Request - show validation errors
          toast.error(data?.detail || 'Invalid request')
          break

        case 401:
          // Unauthorized - handled by React Query in main.tsx
          // Don't show toast here to avoid duplicate messages
          break

        case 403:
          // Forbidden
          toast.error('Access denied')
          break

        case 404:
          // Not Found
          toast.error(data?.detail || 'Resource not found')
          break

        case 422:
          // Validation Error (FastAPI)
          const validationMsg = data?.detail?.[0]?.msg || 'Validation error'
          toast.error(validationMsg)
          break

        case 500:
          // Internal Server Error - handled by React Query in main.tsx
          // Don't show toast here to avoid duplicate messages
          break

        default:
          toast.error(data?.detail || 'An error occurred')
      }
    } else if (error.request) {
      // Request made but no response received
      toast.error('Network error - please check your connection')
    } else {
      // Something else happened
      toast.error('An unexpected error occurred')
    }

    return Promise.reject(error)
  }
)

/**
 * Type declarations for Clerk on window object
 */
declare global {
  interface Window {
    Clerk?: {
      session: Promise<{
        getToken: () => Promise<string>
      } | null>
    }
  }
}

export { apiClient, API_BASE_URL }

