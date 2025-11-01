import { createFileRoute } from '@tanstack/react-router'
import { FileText } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import { AgentHero, AgentCapabilities, AgentImpact, AgentTechnical } from '@/features/marketing/ai-agents/components'

function FaxAgentPage() {
  const category = 'communication' as const

  return (
    <AgentPageLayout>
      <AgentHero
        category={category}
        icon={<FileText className="h-16 w-16" />}
        headline="Fax Agent: Instant Fax Processing"
        subheadline="Processes incoming faxes (lab results, referrals, medical records, prior authorizations), extracts structured data, files in patient charts, and routes for provider review."
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'OCR + NLP - Reads handwritten and typed faxes with 99%+ accuracy',
          'Document Classification - Identifies document type (lab result, referral, prescription, etc.)',
          'Data Extraction - Pulls patient name, DOB, MRN, test results, diagnoses, medications',
          'Auto-Filing - Matches to patient chart, files in correct section',
          'Provider Alerts - Flags abnormal lab results or urgent referrals for immediate review',
          'Structured Data Entry - Writes discrete data to EHR (no manual transcription)',
          'Audit Trail - Complete logging of all processed documents',
          'Multi-Format Support - Processes PDF, TIFF, and image-based faxes',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'Annual Savings', value: '$60K-$120K', icon: 'dollar' },
          { label: 'Processing Time', value: 'Same-day', icon: 'clock' },
          { label: 'Misfiled Documents', value: 'Zero', icon: 'target' },
          { label: 'Accuracy', value: '99%+', icon: 'trending' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'Integration', value: 'Works with eFax and traditional fax servers' },
          { label: 'Data Standards', value: 'FHIR-compliant data extraction' },
          { label: 'Supported Formats', value: 'PDF, TIFF, JPEG, and other image formats' },
          { label: 'Processing Speed', value: 'Real-time processing with instant provider alerts' },
        ]}
      />
    </AgentPageLayout>
  )
}

export const Route = createFileRoute('/_marketing/ai-agents/fax')({
  component: FaxAgentPage,
})

