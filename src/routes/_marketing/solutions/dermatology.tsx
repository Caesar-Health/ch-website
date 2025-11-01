import { createFileRoute } from '@tanstack/react-router'
import { Dermatology } from '@/features/marketing/solutions/dermatology'

export const Route = createFileRoute('/_marketing/solutions/dermatology')({
  component: Dermatology,
})

