import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUp, DollarSign, Clock, Target } from 'lucide-react'
import { type AgentCategory, agentCategories } from '@/data/ai-agents'

interface ImpactMetric {
  label: string
  value: string
  icon?: 'trending' | 'dollar' | 'clock' | 'target'
}

interface AgentImpactProps {
  title?: string
  description?: string
  metrics: ImpactMetric[]
  category?: AgentCategory
}

const iconMap = {
  trending: TrendingUp,
  dollar: DollarSign,
  clock: Clock,
  target: Target,
}

export function AgentImpact({
  title = 'Impact',
  description,
  metrics,
  category,
}: AgentImpactProps) {
  const categoryConfig = category ? agentCategories[category] : null
  const accentColor = categoryConfig?.color.primary || 'var(--primary)'

  return (
    <div className="bg-muted/50 py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">{title}</h2>
          {description && (
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              {description}
            </p>
          )}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon ? iconMap[metric.icon] : TrendingUp
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {metric.label}
                  </CardTitle>
                  <Icon className="h-4 w-4" style={{ color: accentColor }} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold" style={{ color: accentColor }}>{metric.value}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

