import { createFileRoute } from '@tanstack/react-router'
import { DollarSign } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import { AgentHero, AgentCapabilities, AgentImpact, AgentTechnical } from '@/features/marketing/ai-agents/components'

function CodingBillingAgentPage() {
  const category = 'revenue-cycle' as const

  return (
    <AgentPageLayout>
      <AgentHero
        icon={<DollarSign className="h-16 w-16" />}
        headline="Coding & Billing Agent: Maximize Reimbursement"
        subheadline="Automatically assigns ICD-10 diagnosis codes, CPT procedure codes, and modifiers based on clinical documentation—then generates and submits claims to payers."
        category={category}
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'Auto-Coding - Analyzes SOAP notes, suggests appropriate codes',
          'Compliance Checking - Ensures medical necessity, correct modifiers, bundling rules',
          'Claim Generation - Creates 837 EDI transactions for electronic submission',
          'Scrubbing - Pre-submission validation to catch errors before payer rejection',
          'Batch Submission - Sends claims to clearinghouse or payer daily',
          'Charge Capture - Ensures all billable services are coded and billed',
          'Payer Rules Engine - Applies payer-specific coding requirements',
          'Real-Time Eligibility - Checks insurance eligibility before submission',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'Clean Claim Rate', value: '99%', icon: 'target' },
          { label: 'Staff Reduction', value: '50-75%', icon: 'trending' },
          { label: 'Submission Speed', value: 'Same-day', icon: 'clock' },
          { label: 'Revenue Increase', value: '+15%', icon: 'dollar' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'Code Libraries', value: 'CPT, ICD-10, HCPCS current codes' },
          { label: 'Integration', value: 'EHR clinical documentation and practice management' },
          { label: 'Standards', value: '837 EDI transaction creation' },
          { label: 'Rules Engine', value: 'Payer-specific coding requirements' },
        ]}
      />
    </AgentPageLayout>
  )
}

export const Route = createFileRoute('/_marketing/ai-agents/coding-billing')({
  component: CodingBillingAgentPage,
})

