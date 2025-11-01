import { createFileRoute } from '@tanstack/react-router'
import { Calendar } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import { AgentHero, AgentCapabilities, AgentImpact, AgentTechnical } from '@/features/marketing/ai-agents/components'

function AppointmentCoordinationAgentPage() {
  const category = 'patient-experience' as const

  return (
    <AgentPageLayout>
      <AgentHero
        category={category}
        icon={<Calendar className="h-16 w-16" />}
        headline="Appointment Coordination Agent: Optimized Scheduling"
        subheadline="Manages the entire appointment lifecycle—scheduling, reminders, rescheduling, waitlist management, and no-show follow-up—across all channels."
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'Online Scheduling - Patients book via website, portal, or SMS',
          'AI-Optimized Scheduling - Fills gaps, reduces downtime, balances provider load',
          'Automated Reminders - Multi-channel (SMS, email, phone) at 48hr, 24hr, 2hr',
          'Waitlist Management - Auto-fills cancellations from waitlist',
          'No-Show Prediction - Identifies high-risk patients, sends extra reminders',
          'Post-No-Show Outreach - Automatically reschedules missed appointments',
          'Real-Time Availability - Live provider schedule checking',
          'Analytics Dashboard - Track no-show trends and scheduling efficiency',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'No-Show Reduction', value: '40-60%', icon: 'trending' },
          { label: 'Utilization Increase', value: '15-20%', icon: 'target' },
          { label: 'Self-Service', value: '70%+', icon: 'clock' },
          { label: 'Patient Access', value: 'Improved', icon: 'dollar' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'Integration', value: 'EHR scheduling systems' },
          { label: 'Channels', value: 'SMS, email, phone, web' },
          { label: 'Templates', value: 'Customizable reminder templates' },
          { label: 'Analytics', value: 'Real-time no-show prediction and reporting' },
        ]}
      />
    </AgentPageLayout>
  )
}

export const Route = createFileRoute('/_marketing/ai-agents/appointment-coordination')({
  component: AppointmentCoordinationAgentPage,
})

