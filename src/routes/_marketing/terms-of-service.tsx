import { createFileRoute } from '@tanstack/react-router'
import { TermsOfService } from '@/features/marketing/legal/terms-of-service'

export const Route = createFileRoute('/_marketing/terms-of-service')({
  component: TermsOfService,
  onEnter: () => {
    window.scrollTo(0, 0)
  },
})

