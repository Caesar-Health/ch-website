import { createFileRoute } from '@tanstack/react-router'
import { CategoryPage } from '@/features/marketing/ai-agents/category'

export const Route = createFileRoute('/_marketing/ai-agents/communication')({
  component: CommunicationAgentsPage,
})

function CommunicationAgentsPage() {
  return <CategoryPage category="communication" />
}
