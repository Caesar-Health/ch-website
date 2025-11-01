import { createFileRoute } from '@tanstack/react-router'
import { CategoryPage } from '@/features/marketing/ai-agents/category'

export const Route = createFileRoute('/_marketing/ai-agents/patient-experience')({
  component: PatientExperienceAgentsPage,
})

function PatientExperienceAgentsPage() {
  return <CategoryPage category="patient-experience" />
}

