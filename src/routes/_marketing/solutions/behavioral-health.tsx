import { createFileRoute } from '@tanstack/react-router'
import { BehavioralHealth } from '@/features/marketing/solutions/behavioral-health'

export const Route = createFileRoute('/_marketing/solutions/behavioral-health')({
  component: BehavioralHealth,
})

