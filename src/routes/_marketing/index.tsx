import { createFileRoute } from '@tanstack/react-router'
import { AIAgentsOverview } from '@/features/marketing/ai-agents/overview'

export const Route = createFileRoute('/_marketing/')({
  component: AIAgentsOverview,
})

