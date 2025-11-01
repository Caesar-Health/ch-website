import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { type AgentCategory, agentCategories } from '@/data/ai-agents'

interface AgentHeroProps {
  icon: ReactNode
  headline: string
  subheadline: string
  primaryCta?: string
  secondaryCta?: string
  category?: AgentCategory
}

export function AgentHero({
  icon,
  headline,
  subheadline,
  primaryCta = 'Request Demo',
  secondaryCta = 'See Agents in Action',
  category,
}: AgentHeroProps) {
  const categoryConfig = category ? agentCategories[category] : null
  const accentColor = categoryConfig?.color.primary || 'var(--primary)'

  return (
    <div className="bg-gradient-to-b from-muted/50 to-background py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center" style={{ color: accentColor }}>
            {icon}
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {headline}
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg sm:text-xl">
            {subheadline}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2">
              {primaryCta} <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              {secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

