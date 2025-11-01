import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Get a Lucide icon component by its name string
 */
export function getIconComponent(iconName: string): LucideIcon {
  const Icon = (LucideIcons as any)[iconName] as LucideIcon
  
  if (!Icon) {
    // Fallback to a generic icon if the named icon doesn't exist
    return LucideIcons.Circle
  }
  
  return Icon
}

