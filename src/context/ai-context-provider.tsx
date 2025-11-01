import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

export interface AIContext {
  page: string
  entityType?: 'call' | 'email' | 'fax' | 'patient' | 'document' | 'task' | 'encounter'
  entityId?: string
  patient?: {
    id: string
    name: string
    mrn: string
  }
  recentActions?: string[]
}

export interface Message {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
}

interface AIContextValue {
  // Context
  context: AIContext
  setContext: (context: AIContext) => void
  updateContext: (partial: Partial<AIContext>) => void
  
  // Conversation
  messages: Message[]
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void
  clearMessages: () => void
  
  // UI State
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
  
  // Loading state
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const AIContextContext = createContext<AIContextValue | undefined>(undefined)

export function AIContextProvider({ children }: { children: ReactNode }) {
  // Context state
  const [context, setContextState] = useState<AIContext>({
    page: window.location.pathname,
  })

  // Conversation state
  const [messages, setMessages] = useState<Message[]>([])
  
  // UI state
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Context methods
  const setContext = useCallback((newContext: AIContext) => {
    setContextState(newContext)
  }, [])

  const updateContext = useCallback((partial: Partial<AIContext>) => {
    setContextState((prev) => ({ ...prev, ...partial }))
  }, [])

  // Message methods
  const addMessage = useCallback((message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }, [])

  const clearMessages = useCallback(() => {
    setMessages([])
  }, [])

  // UI methods
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  const value: AIContextValue = {
    context,
    setContext,
    updateContext,
    messages,
    addMessage,
    clearMessages,
    isOpen,
    open,
    close,
    toggle,
    isLoading,
    setIsLoading,
  }

  return (
    <AIContextContext.Provider value={value}>
      {children}
    </AIContextContext.Provider>
  )
}

export function useAIContext() {
  const context = useContext(AIContextContext)
  if (context === undefined) {
    throw new Error('useAIContext must be used within an AIContextProvider')
  }
  return context
}

/**
 * Hook to update AI context when component mounts or data changes
 */
export function useUpdateAIContext(contextData: Partial<AIContext>) {
  const { updateContext } = useAIContext()

  // Update context when data changes
  React.useEffect(() => {
    updateContext(contextData)
  }, [JSON.stringify(contextData), updateContext])
}

// Import React for useEffect
import React from 'react'

