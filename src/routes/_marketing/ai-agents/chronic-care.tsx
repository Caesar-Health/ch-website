import { createFileRoute } from '@tanstack/react-router'
import { Heart } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import { AgentHero, AgentCapabilities, AgentImpact, AgentTechnical } from '@/features/marketing/ai-agents/components'

function ChronicCareAgentPage() {
  const category = 'care-coordination' as const

  return (
    <AgentPageLayout>
      <AgentHero
        category={category}
        icon={<Heart className="h-16 w-16" />}
        headline="Chronic Care Management Agent: Continuous Patient Support"
        subheadline="Provides ongoing support for patients with chronic conditions (diabetes, hypertension, CHF, COPD)—monitoring symptoms, medication adherence, and lifestyle factors between visits."
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'Patient Monitoring - Regular check-ins via SMS or phone (symptom tracking, weight, BP, glucose)',
          'Medication Adherence - Reminds patients to take meds, refill prescriptions',
          'Lifestyle Coaching - Sends tips for diet, exercise, stress management',
          'Escalation Protocols - Alerts provider if patient reports worsening symptoms',
          'Care Plan Management - Tracks goals, interventions, and outcomes',
          'Billable CCM - Generates documentation for Medicare CCM billing (99490, 99439)',
          'Remote Patient Monitoring - Integrates with RPM devices',
          'Engagement Analytics - Tracks patient participation and outcomes',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'Hospitalizations', value: '-20-30%', icon: 'trending' },
          { label: 'Revenue (CCM)', value: '$40-$60 PMPM', icon: 'dollar' },
          { label: 'Patient Engagement', value: '+60%', icon: 'target' },
          { label: 'Quality Scores', value: 'Improved', icon: 'clock' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'RPM Integration', value: 'Connects with remote patient monitoring devices' },
          { label: 'Data Collection', value: 'FHIR-based structured data capture' },
          { label: 'Care Plans', value: 'Condition-specific care plan templates' },
          { label: 'Billing', value: 'Automated CCM billing code generation (99490, 99439)' },
        ]}
      />
    </AgentPageLayout>
  )
}

export const Route = createFileRoute('/_marketing/ai-agents/chronic-care')({
  component: ChronicCareAgentPage,
})

