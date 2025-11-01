import { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { type AgentCategory, agentCategories } from '@/data/ai-agents'

interface AgentCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
  stats?: { label: string; value: string }[]
  category?: AgentCategory
}

export function AgentCard({ icon, title, description, href, stats, category }: AgentCardProps) {
  const categoryConfig = category ? agentCategories[category] : null
  const accentColor = categoryConfig?.color.primary || 'var(--primary)'
  const lightColor = categoryConfig?.color.light || 'var(--primary)/10'

  return (
    <Card className="hover:shadow-lg transition-shadow border-l-4" style={{ borderLeftColor: accentColor }}>
      <CardHeader>
        <div 
          className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
          style={{ 
            backgroundColor: lightColor,
            color: accentColor 
          }}
        >
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {stats && stats.length > 0 && (
          <div className="mb-4 space-y-2">
            {stats.map((stat, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{stat.label}</span>
                <span className="font-semibold">{stat.value}</span>
              </div>
            ))}
          </div>
        )}
        <Button asChild variant="ghost" className="w-full gap-2">
          <Link to={href}>
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

