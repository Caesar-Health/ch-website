import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { type AgentCategory, agentCategories } from '@/data/ai-agents'

interface AgentCapabilitiesProps {
  title?: string
  capabilities: string[]
  category?: AgentCategory
}

export function AgentCapabilities({
  title = 'Key Capabilities',
  capabilities,
  category,
}: AgentCapabilitiesProps) {
  const categoryConfig = category ? agentCategories[category] : null
  const accentColor = categoryConfig?.color.primary || 'var(--primary)'

  return (
    <div className="bg-background py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-4 md:grid-cols-2">
              {capabilities.map((capability, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0" style={{ color: accentColor }} />
                  <span className="text-muted-foreground">{capability}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

