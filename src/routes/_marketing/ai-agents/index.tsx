import { createFileRoute, Navigate } from '@tanstack/react-router'

export const Route = createFileRoute('/_marketing/ai-agents/')({
  component: () => <Navigate to="/" />,
})

