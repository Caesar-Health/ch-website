/**
 * Navigation Provider
 * Context for managing navigation stack and outline state
 */

import React, { createContext, useContext, useState, useCallback } from 'react'
import type { NavigationLevel, NavigationStack, OutlineItem, ContentView } from '@/types/navigation'

interface NavigationContextValue {
  // Navigation stack
  stack: NavigationStack
  currentLevel: NavigationLevel | null
  push: (level: NavigationLevel) => void
  pop: () => void
  jumpTo: (index: number) => void
  clear: () => void
  clearStack: () => void
  
  // Outline state
  outline: OutlineItem[]
  setOutline: (outline: OutlineItem[]) => void
  selectedOutlineId: string | null
  selectOutlineItem: (id: string) => void
  
  // Collapsed sections state
  collapsedSections: Set<string>
  toggleSection: (id: string) => void
  collapseAll: () => void
  expandAll: () => void
  
  // Content view
  contentView: ContentView | null
  setContentView: (view: ContentView) => void
}

const NavigationContext = createContext<NavigationContextValue | undefined>(undefined)

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  // Navigation stack state
  const [stack, setStack] = useState<NavigationStack>([])
  
  // Outline state
  const [outline, setOutline] = useState<OutlineItem[]>([])
  const [selectedOutlineId, setSelectedOutlineId] = useState<string | null>(null)
  
  // Collapsed sections state
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set())
  
  // Content view state
  const [contentView, setContentView] = useState<ContentView | null>(null)
  
  // Current level (top of stack)
  const currentLevel = stack.length > 0 ? stack[stack.length - 1] : null
  
  // Push new level onto stack
  const push = useCallback((level: NavigationLevel) => {
    setStack(prev => [...prev, level])
  }, [])
  
  // Pop level from stack
  const pop = useCallback(() => {
    setStack(prev => prev.slice(0, -1))
  }, [])
  
  // Jump to specific level in stack
  const jumpTo = useCallback((index: number) => {
    setStack(prev => prev.slice(0, index + 1))
  }, [])
  
  // Clear entire stack and outline
  const clear = useCallback(() => {
    setStack([])
    setOutline([])
    setSelectedOutlineId(null)
    setContentView(null)
  }, [])
  
  // Clear only the navigation stack (keep outline intact)
  const clearStack = useCallback(() => {
    setStack([])
  }, [])
  
  // Select outline item
  const selectOutlineItem = useCallback((id: string) => {
    setSelectedOutlineId(id)
  }, [])
  
  // Toggle section collapsed state
  const toggleSection = useCallback((id: string) => {
    setCollapsedSections(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }, [])
  
  // Collapse all sections
  const collapseAll = useCallback(() => {
    setCollapsedSections(new Set())
  }, [])
  
  // Expand all sections
  const expandAll = useCallback(() => {
    setCollapsedSections(new Set())
  }, [])
  
  const value: NavigationContextValue = {
    stack,
    currentLevel,
    push,
    pop,
    jumpTo,
    clear,
    clearStack,
    outline,
    setOutline,
    selectedOutlineId,
    selectOutlineItem,
    collapsedSections,
    toggleSection,
    collapseAll,
    expandAll,
    contentView,
    setContentView,
  }
  
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider')
  }
  return context
}

