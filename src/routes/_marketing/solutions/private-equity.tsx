import { createFileRoute } from '@tanstack/react-router'
import { PrivateEquity } from '@/features/marketing/solutions/private-equity'

export const Route = createFileRoute('/_marketing/solutions/private-equity')({
  component: PrivateEquity,
})

