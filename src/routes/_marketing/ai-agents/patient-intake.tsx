import { createFileRoute } from '@tanstack/react-router'
import { ClipboardList } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import { AgentHero, AgentCapabilities, AgentImpact, AgentTechnical } from '@/features/marketing/ai-agents/components'

function PatientIntakeAgentPage() {
  const category = 'patient-experience' as const

  return (
    <AgentPageLayout>
      <AgentHero
        category={category}
        icon={<ClipboardList className="h-16 w-16" />}
        headline="Patient Intake Agent: Paperless Registration"
        subheadline="Collects patient demographics, insurance information, medical history, and consent forms before visits—via text, email, or patient portal—eliminating clipboard forms."
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'Digital Forms - Sends intake forms via SMS or email link',
          'Smart Questionnaires - Adaptive questions based on chief complaint',
          'Insurance Verification - Captures insurance card photos, verifies eligibility',
          'Medical History - Collects medications, allergies, past surgeries, family history',
          'Consent Management - Digital signature for HIPAA, treatment consent, financial policies',
          'Pre-Visit Planning - Flags care gaps, overdue preventive care for provider',
          'Multi-Language Support - Forms available in 50+ languages',
          'Mobile-Responsive - Works seamlessly on any device',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'Check-in Time', value: '30 seconds', icon: 'clock' },
          { label: 'Paper Cost Savings', value: '$10K-$20K', icon: 'dollar' },
          { label: 'Data Accuracy', value: '100%', icon: 'target' },
          { label: 'Patient Satisfaction', value: '+45%', icon: 'trending' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'Deployment', value: 'SMS, email, and patient portal delivery' },
          { label: 'Integration', value: 'EHR patient registration systems' },
          { label: 'Compliance', value: 'HIPAA-compliant data collection' },
          { label: 'Accessibility', value: 'Mobile-responsive with multi-language support' },
        ]}
      />
    </AgentPageLayout>
  )
}

export const Route = createFileRoute('/_marketing/ai-agents/patient-intake')({
  component: PatientIntakeAgentPage,
})

