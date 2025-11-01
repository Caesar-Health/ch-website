import { createFileRoute } from '@tanstack/react-router'
import { BookOpen } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import { AgentHero, AgentCapabilities, AgentImpact, AgentTechnical } from '@/features/marketing/ai-agents/components'

function PatientEducationAgentPage() {
  const category = 'patient-experience' as const

  return (
    <AgentPageLayout>
      <AgentHero
        category={category}
        icon={<BookOpen className="h-16 w-16" />}
        headline="Patient Education Agent: Personalized Health Content"
        subheadline="Delivers personalized health education materials based on diagnoses, procedures, and medications—automatically sent via patient portal, email, or SMS."
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'Diagnosis-Based Education - Auto-sends diabetes management guide after A1C diagnosis',
          'Medication Instructions - Provides drug info, side effects, interactions',
          'Pre-Procedure Prep - Sends colonoscopy prep instructions, pre-op guidelines',
          'Post-Visit Summaries - Generates plain-language visit summary with next steps',
          'Health Literacy Adaptation - Adjusts reading level to patient comprehension',
          'Multi-Language Content - Education materials in 50+ languages',
          'Engagement Tracking - Monitors if patients opened and read materials',
          'Customizable Library - Tailor content to your practice specialties',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'Treatment Adherence', value: '+30%', icon: 'trending' },
          { label: 'Call-backs Reduction', value: '40%', icon: 'clock' },
          { label: 'Patient Outcomes', value: 'Improved', icon: 'target' },
          { label: 'Meaningful Use', value: 'Compliant', icon: 'dollar' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'Delivery', value: 'Patient portal, email, and SMS' },
          { label: 'Content Library', value: 'Customizable, evidence-based materials' },
          { label: 'Languages', value: '50+ language support' },
          { label: 'Analytics', value: 'Patient engagement tracking' },
        ]}
      />
    </AgentPageLayout>
  )
}

export const Route = createFileRoute('/_marketing/ai-agents/patient-education')({
  component: PatientEducationAgentPage,
})

