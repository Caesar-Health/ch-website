import { createFileRoute } from '@tanstack/react-router'
import { MessageSquare } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import { AgentHero, AgentCapabilities, AgentImpact, AgentTechnical } from '@/features/marketing/ai-agents/components'

function SMSAgentPage() {
  const category = 'communication' as const

  return (
    <AgentPageLayout>
      <AgentHero
        category={category}
        icon={<MessageSquare className="h-16 w-16" />}
        headline="SMS Agent: Two-Way Patient Messaging"
        subheadline="Handles two-way text messaging with patients for appointment reminders, confirmations, rescheduling, and general inquiries—all automated and conversational."
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'Automated Reminders - Sends appointment reminders 48 hours and 2 hours before visit',
          'Confirmation & Rescheduling - Patients can confirm or request new time via text',
          'No-Show Reduction - Predictive outreach to high-risk no-show patients',
          'Prescription Notifications - Alerts when prescriptions are ready for pickup',
          'Test Results - Notifies patients when results are available in portal',
          'Two-Way Conversations - Answers patient questions via SMS',
          'Multi-Language Support - Communicates in 50+ languages',
          'Opt-in/Opt-out Management - Automated consent and preference handling',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'No-Show Reduction', value: '40-60%', icon: 'trending' },
          { label: 'Confirmation Rate', value: '90%+', icon: 'target' },
          { label: 'Annual Savings', value: '$50K-$150K', icon: 'dollar' },
          { label: 'Phone Volume', value: '-30%', icon: 'clock' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'Compliance', value: 'HIPAA-compliant SMS platform' },
          { label: 'Integration', value: 'EHR scheduling and lab systems' },
          { label: 'Templates', value: 'Fully customizable message templates' },
          { label: 'Consent Management', value: 'Automated opt-in/opt-out tracking' },
        ]}
      />
    </AgentPageLayout>
  )
}

export const Route = createFileRoute('/_marketing/ai-agents/sms')({
  component: SMSAgentPage,
})

