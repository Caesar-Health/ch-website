import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Stethoscope } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import { AgentHero, AgentCapabilities, AgentImpact, AgentTechnical } from '@/features/marketing/ai-agents/components'
import { updateMetaTags } from '@/lib/seo'

function ScribeAgentPage() {
  const category = 'clinical' as const

  // Update SEO meta tags for this page
  // NOTE: This is client-side only - search engines may not see it immediately
  // For optimal SEO, use Server-Side Rendering (Next.js/Astro)
  useEffect(() => {
    updateMetaTags({
      title: 'AI Medical Scribe - Automated Clinical Documentation | Caesar Health',
      description: 'AI-powered medical scribe that listens to patient encounters, generates SOAP notes in real-time, suggests ICD-10/CPT codes, and writes directly to your EHR. Save 2-3 hours/day on documentation.',
      canonical: 'https://caesarhealth.com/ai-agents/scribe',
      keywords: [
        'AI medical scribe',
        'clinical documentation',
        'SOAP notes automation',
        'ambient listening',
        'EHR integration',
        'medical transcription',
        'ICD-10 coding',
        'CPT coding',
        'physician burnout reduction',
      ],
      ogImage: 'https://caesarhealth.com/images/caesar-health-simplified.svg',
    })
  }, [])

  return (
    <AgentPageLayout>
      <AgentHero
        icon={<Stethoscope className="h-16 w-16" />}
        headline="AI Scribe: Clinical Documentation in Real-Time"
        subheadline="Listens to patient encounters (in-person or telehealth), generates complete SOAP notes, suggests diagnoses and billing codes, and writes directly to the EHR—all in real-time."
        category={category}
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'Ambient Listening - Captures natural conversation between provider and patient',
          'Real-Time Transcription - Live transcription with medical terminology accuracy',
          'SOAP Note Generation - Creates structured notes (Subjective, Objective, Assessment, Plan)',
          'ICD-10/CPT Coding - Suggests diagnosis and procedure codes based on conversation',
          'Order Entry - Auto-generates lab orders, prescriptions, referrals from provider statements',
          'Specialty Templates - Customized note structures for primary care, cardiology, derm, etc.',
          'Multi-Language Support - Understands patient conversations in 50+ languages',
          'Provider Review - Easy review and edit before finalization',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'Time Saved', value: '2-3 hrs/day', icon: 'clock' },
          { label: 'Additional Revenue', value: '$150K-$300K', icon: 'dollar' },
          { label: 'Coding Accuracy', value: '99%', icon: 'target' },
          { label: 'Burnout Reduction', value: 'Significant', icon: 'trending' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'EHR Integration', value: 'Works with Epic, athenahealth, Cerner, and 50+ EHRs' },
          { label: 'HIPAA Compliance', value: 'Fully compliant audio processing' },
          { label: 'Deployment', value: 'Ambient (no device needed) or device-based options' },
          { label: 'Accuracy', value: 'Medical terminology accuracy >95%' },
        ]}
      />
    </AgentPageLayout>
  )
}

export const Route = createFileRoute('/_marketing/ai-agents/scribe')({
  component: ScribeAgentPage,
})

