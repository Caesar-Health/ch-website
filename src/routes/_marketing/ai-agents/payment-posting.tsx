import { createFileRoute } from '@tanstack/react-router'
import { CreditCard } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import { AgentHero, AgentCapabilities, AgentImpact, AgentTechnical } from '@/features/marketing/ai-agents/components'

function PaymentPostingAgentPage() {
  const category = 'revenue-cycle' as const

  return (
    <AgentPageLayout>
      <AgentHero
        category={category}
        icon={<CreditCard className="h-16 w-16" />}
        headline="Payment Posting Agent: Automated Reconciliation"
        subheadline="Automatically posts payments from insurance companies and patients to the correct patient accounts—reconciling EOBs, identifying underpayments, and flagging discrepancies."
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'EDI 835 Auto-Posting - Reads electronic remittance advice, posts payments automatically',
          'Patient Payment Posting - Processes credit card, check, and cash payments',
          'Adjustment Posting - Applies contractual adjustments, write-offs per payer contracts',
          'Underpayment Detection - Flags payments below contracted rates',
          'Reconciliation - Matches payments to claims, identifies missing payments',
          'Aging Report Updates - Real-time A/R aging updates',
          'Bank Reconciliation - Matches posted payments to bank deposits',
          'Audit Trail - Complete logging of all posted transactions',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'Annual Savings', value: '$60K-$120K', icon: 'dollar' },
          { label: 'Posting Speed', value: 'Same-day', icon: 'clock' },
          { label: 'Accuracy', value: '99.9%', icon: 'target' },
          { label: 'Manual Errors', value: 'Zero', icon: 'trending' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'EDI Standards', value: '835 remittance advice parsing' },
          { label: 'Integration', value: 'Practice management system and bank accounts' },
          { label: 'Reconciliation', value: 'Automated bank account matching' },
          { label: 'Audit', value: 'Complete transaction logging and reporting' },
        ]}
      />
    </AgentPageLayout>
  )
}

export const Route = createFileRoute('/_marketing/ai-agents/payment-posting')({
  component: PaymentPostingAgentPage,
})

