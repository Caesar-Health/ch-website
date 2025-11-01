import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    // Redirect to marketing homepage
    throw redirect({ to: '/_marketing' })
  },
})

