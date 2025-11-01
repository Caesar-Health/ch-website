import { type AgentCategory, agentCategories } from '@/data/ai-agents'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface AgentCategoryBadgeProps {
  category: AgentCategory
  className?: string
  variant?: 'default' | 'outline'
}

/**
 * AgentCategoryBadge
 * Displays a category badge with the appropriate accent color
 */
export function AgentCategoryBadge({ 
  category, 
  className,
  variant = 'outline' 
}: AgentCategoryBadgeProps) {
  const config = agentCategories[category]
  
  return (
    <Badge 
      variant={variant}
      className={cn('capitalize border', className)}
      style={{
        backgroundColor: variant === 'default' ? config.color.light : 'transparent',
        color: config.color.primary,
        borderColor: config.color.primary,
      }}
    >
      {config.name}
    </Badge>
  )
}

