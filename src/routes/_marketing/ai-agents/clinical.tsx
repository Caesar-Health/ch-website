import { createFileRoute } from '@tanstack/react-router'
import { CategoryPage } from '@/features/marketing/ai-agents/category'

export const Route = createFileRoute('/_marketing/ai-agents/clinical')({
  component: ClinicalAgentsPage,
})

function ClinicalAgentsPage() {
  return <CategoryPage category="clinical" />
}
