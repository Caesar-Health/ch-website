import { createFileRoute } from '@tanstack/react-router'
import { Phone } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import { AgentHero, AgentCapabilities, AgentImpact, AgentTechnical } from '@/features/marketing/ai-agents/components'

function PhoneAgentPage() {
  const category = 'communication' as const

  return (
    <AgentPageLayout>
      <AgentHero
        icon={<Phone className="h-16 w-16" />}
        headline="Phone Agent: Never Miss a Call Again"
        subheadline="Answers incoming calls, schedules appointments, handles prescription refills, triages urgent requests, and routes calls appropriately—all with natural, conversational AI."
        category={category}
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'Natural Language Understanding - Understands patient intent, accents, and medical terminology',
          'Appointment Scheduling - Checks provider availability, books appointments, sends confirmations',
          'Prescription Refills - Captures medication name, pharmacy, and urgency; routes to provider',
          'Insurance Verification - Asks for insurance info, verifies eligibility in real-time',
          'Urgent Triage - Identifies emergency situations, escalates to on-call provider immediately',
          'Multi-Language Support - Fluent in 50+ languages',
          'After-Hours Coverage - 24/7 availability, no voicemail',
          'Call Recording & Transcription - Real-time transcription and logging of all conversations',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'Annual Savings', value: '$120K-$180K', icon: 'dollar' },
          { label: 'Missed Calls', value: 'Zero', icon: 'target' },
          { label: 'Handle Time', value: '30 seconds', icon: 'clock' },
          { label: 'Patient Satisfaction', value: '100%', icon: 'trending' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'HIPAA Compliance', value: 'Fully compliant voice AI with encryption' },
          { label: 'EHR Integration', value: 'Integrates with all major EHR scheduling systems' },
          { label: 'Voice Quality', value: 'Natural, human-like conversation with medical terminology' },
          { label: 'Escalation', value: 'Intelligent escalation protocols for complex requests' },
        ]}
      />
    </AgentPageLayout>
  )
}

export const Route = createFileRoute('/_marketing/ai-agents/phone')({
  component: PhoneAgentPage,
})

