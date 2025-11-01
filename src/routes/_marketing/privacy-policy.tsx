import { createFileRoute } from '@tanstack/react-router'
import { PrivacyPolicy } from '@/features/marketing/legal/privacy-policy'

export const Route = createFileRoute('/_marketing/privacy-policy')({
  component: PrivacyPolicy,
  onEnter: () => {
    window.scrollTo(0, 0)
  },
})

