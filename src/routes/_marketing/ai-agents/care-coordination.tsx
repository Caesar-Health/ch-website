import { createFileRoute } from '@tanstack/react-router'
import { CategoryPage } from '@/features/marketing/ai-agents/category'

export const Route = createFileRoute('/_marketing/ai-agents/care-coordination')({
  component: CareCoordinationAgentsPage,
})

function CareCoordinationAgentsPage() {
  return <CategoryPage category="care-coordination" />
}
