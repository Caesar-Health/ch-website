import { createFileRoute } from '@tanstack/react-router'
import { CategoryPage } from '@/features/marketing/ai-agents/category'

export const Route = createFileRoute('/_marketing/ai-agents/revenue-cycle')({
  component: RevenueCycleAgentsPage,
})

function RevenueCycleAgentsPage() {
  return <CategoryPage category="revenue-cycle" />
}

