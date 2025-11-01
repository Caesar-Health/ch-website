import { createFileRoute } from '@tanstack/react-router'
import { FileCheck } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import { AgentHero, AgentCapabilities, AgentImpact, AgentTechnical } from '@/features/marketing/ai-agents/components'

function PriorAuthorizationAgentPage() {
  const category = 'revenue-cycle' as const

  return (
    <AgentPageLayout>
      <AgentHero
        category={category}
        icon={<FileCheck className="h-16 w-16" />}
        headline="Prior Authorization Agent: Automated PA Workflow"
        subheadline="Handles the entire prior authorization process—checking requirements, submitting requests, tracking status, and appealing denials—without human intervention."
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'PA Requirement Detection - Identifies which services require prior auth by payer',
          'Auto-Form Completion - Populates PA forms with patient and clinical data',
          'Clinical Documentation - Attaches notes, lab results, imaging to support medical necessity',
          'Submission & Tracking - Submits electronically, monitors status, follows up on delays',
          'Appeal Management - Auto-generates appeals for denied PAs with clinical rationale',
          'Provider Notification - Alerts provider when PA is approved or additional info needed',
          'Payer Portal Integration - Works with major payer PA systems',
          'Audit Trail - Complete logging for compliance',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'Time Saved', value: '16 hrs/week', icon: 'clock' },
          { label: 'Approval Rate', value: '+25%', icon: 'trending' },
          { label: 'Staff Reduction', value: '80%', icon: 'dollar' },
          { label: 'Submission Speed', value: 'Same-day', icon: 'target' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'Integration', value: 'Payer PA portals and electronic PA systems' },
          { label: 'Clinical Support', value: 'Medical necessity criteria database' },
          { label: 'Workflow', value: 'Automated task management and escalation' },
          { label: 'Compliance', value: 'Complete audit trail for all submissions' },
        ]}
      />
    </AgentPageLayout>
  )
}

export const Route = createFileRoute('/_marketing/ai-agents/prior-authorization')({
  component: PriorAuthorizationAgentPage,
})

