import { createFileRoute } from '@tanstack/react-router'
import { Link as LinkIcon } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import { AgentHero, AgentCapabilities, AgentImpact, AgentTechnical } from '@/features/marketing/ai-agents/components'

function ReferralManagementAgentPage() {
  const category = 'care-coordination' as const

  return (
    <AgentPageLayout>
      <AgentHero
        category={category}
        icon={<LinkIcon className="h-16 w-16" />}
        headline="Referral Management Agent: Complete Loop Closure"
        subheadline="Manages the entire referral process—finding specialists, scheduling appointments, tracking referral completion, and ensuring results are communicated back to referring provider."
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'Specialist Matching - Finds in-network specialists based on patient insurance and location',
          'Appointment Scheduling - Books specialist appointment on patient\'s behalf',
          'Referral Tracking - Monitors whether patient attended specialist visit',
          'Results Retrieval - Requests specialist notes and test results',
          'Provider Notification - Alerts referring provider when results are received',
          'Loop Closure - Ensures continuity of care between primary and specialty care',
          'Network Optimization - Keeps referrals in-network to reduce leakage',
          'Patient Communication - Keeps patients informed throughout the process',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'Referral Leakage', value: '-70%', icon: 'dollar' },
          { label: 'Completion Rate', value: '+50%', icon: 'target' },
          { label: 'Patient Satisfaction', value: '+55%', icon: 'trending' },
          { label: 'Loop Closure', value: '95%+', icon: 'clock' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'Integration', value: 'Provider directories and health information exchanges' },
          { label: 'Submission', value: 'Fax and electronic referral systems' },
          { label: 'Tracking', value: 'Real-time referral status dashboard' },
          { label: 'Workflows', value: 'Automated follow-up and escalation' },
        ]}
      />
    </AgentPageLayout>
  )
}

export const Route = createFileRoute('/_marketing/ai-agents/referral-management')({
  component: ReferralManagementAgentPage,
})

