import { createFileRoute } from '@tanstack/react-router'
import { FileSignature } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import { AgentHero, AgentCapabilities, AgentImpact, AgentTechnical } from '@/features/marketing/ai-agents/components'

function ClinicalDocumentationAgentPage() {
  const category = 'clinical' as const

  return (
    <AgentPageLayout>
      <AgentHero
        category={category}
        icon={<FileSignature className="h-16 w-16" />}
        headline="Clinical Documentation Agent: Structure Your Data"
        subheadline="Converts unstructured clinical data (free-text notes, voice recordings, scanned documents) into structured, coded, billable entries in the EHR."
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'Legacy Note Conversion - Transforms old free-text notes into structured data',
          'Voice Note Processing - Converts provider voice memos into chart entries',
          'Scanned Document Extraction - Pulls data from scanned hospital discharge summaries',
          'Problem List Management - Auto-updates active problem list based on encounters',
          'Medication Reconciliation - Identifies discrepancies between patient-reported and chart meds',
          'NLP-Powered Extraction - Advanced natural language processing for data extraction',
          'FHIR Resource Creation - Generates standards-compliant structured data',
          'Code Mapping - Maps to SNOMED CT, ICD-10, and RxNorm terminologies',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'Data Entry Reduction', value: '80%', icon: 'trending' },
          { label: 'Coding Accuracy', value: '99%', icon: 'target' },
          { label: 'Historical Data', value: 'Unlocked', icon: 'dollar' },
          { label: 'Quality Improvement', value: 'Significant', icon: 'clock' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'Standards', value: 'SNOMED CT, ICD-10, RxNorm mapping' },
          { label: 'Integration', value: 'Document management systems and EHRs' },
          { label: 'Data Format', value: 'FHIR-compliant structured data output' },
          { label: 'Processing', value: 'Real-time NLP-powered data extraction' },
        ]}
      />
    </AgentPageLayout>
  )
}

export const Route = createFileRoute('/_marketing/ai-agents/clinical-documentation')({
  component: ClinicalDocumentationAgentPage,
})

