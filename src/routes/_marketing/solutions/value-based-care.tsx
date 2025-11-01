import { createFileRoute } from '@tanstack/react-router'
import { ValueBasedCare } from '@/features/marketing/solutions/value-based-care'

export const Route = createFileRoute('/_marketing/solutions/value-based-care')({
  component: ValueBasedCare,
})

