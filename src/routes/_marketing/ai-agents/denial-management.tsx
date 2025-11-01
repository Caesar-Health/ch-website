import { createFileRoute } from '@tanstack/react-router'
import { RefreshCw } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import { AgentHero, AgentCapabilities, AgentImpact, AgentTechnical } from '@/features/marketing/ai-agents/components'

function DenialManagementAgentPage() {
  const category = 'revenue-cycle' as const

  return (
    <AgentPageLayout>
      <AgentHero
        category={category}
        icon={<RefreshCw className="h-16 w-16" />}
        headline="Denial Management Agent: Recover Lost Revenue"
        subheadline="Identifies denied claims, determines root cause, corrects errors, resubmits claims, and appeals when appropriate—all automatically."
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'Denial Detection - Monitors 835 remittance advice for denials and underpayments',
          'Root Cause Analysis - Categorizes denials (coding error, missing info, medical necessity)',
          'Auto-Correction - Fixes simple errors (wrong modifier, missing diagnosis) and resubmits',
          'Appeal Generation - Creates appeal letters with clinical rationale for medical necessity',
          'Trend Analysis - Identifies patterns (e.g., Payer X always denies Code Y)',
          'Recovery Tracking - Monitors resubmissions and appeals to closure',
          'Performance Metrics - Dashboards showing denial rates and recovery rates',
          'Payer Pattern Learning - AI learns payer-specific denial patterns',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'Recovery Rate', value: '+30-50%', icon: 'dollar' },
          { label: 'Days in A/R', value: '-15-20 days', icon: 'clock' },
          { label: 'Write-Offs', value: '-20-30%', icon: 'trending' },
          { label: 'Cash Flow', value: 'Improved', icon: 'target' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'EDI Processing', value: '835 remittance advice parsing and analysis' },
          { label: 'Integration', value: 'Clearinghouse and payer portals' },
          { label: 'ML Models', value: 'Machine learning for denial prediction' },
          { label: 'Reporting', value: 'Real-time denial trend dashboards' },
        ]}
      />
    </AgentPageLayout>
  )
}

export const Route = createFileRoute('/_marketing/ai-agents/denial-management')({
  component: DenialManagementAgentPage,
})

