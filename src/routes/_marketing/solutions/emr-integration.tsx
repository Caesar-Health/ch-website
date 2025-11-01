import { createFileRoute } from '@tanstack/react-router'
import { EmrIntegration } from '@/features/marketing/solutions/emr-integration'

export const Route = createFileRoute('/_marketing/solutions/emr-integration')({
  component: EmrIntegration,
})

