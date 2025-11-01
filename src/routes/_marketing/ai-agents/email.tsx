import { createFileRoute } from '@tanstack/react-router'
import { Mail } from 'lucide-react'
import { AgentPageLayout } from '@/features/marketing/ai-agents/agent-page-layout'
import { AgentHero, AgentCapabilities, AgentImpact, AgentTechnical } from '@/features/marketing/ai-agents/components'

function EmailAgentPage() {
  const category = 'communication' as const

  return (
    <AgentPageLayout>
      <AgentHero
        category={category}
        icon={<Mail className="h-16 w-16" />}
        headline="Email Agent: Intelligent Email Triage"
        subheadline="Triages patient emails, auto-responds to common questions, routes complex inquiries to appropriate staff, and documents all communications in the patient chart."
      />

      <AgentCapabilities
        category={category}
        capabilities={[
          'Intelligent Triage - Categorizes emails (appointment request, medical question, billing inquiry, etc.)',
          'Auto-Response - Answers FAQs (office hours, directions, insurance accepted, etc.)',
          'Sentiment Analysis - Detects frustrated or urgent patients, prioritizes response',
          'Provider Routing - Sends clinical questions to provider, billing to billing team, etc.',
          'Chart Documentation - Logs all email communications in patient record',
          'Secure Messaging - HIPAA-compliant email encryption',
          'Customizable Templates - Tailor responses to your practice needs',
          'Multi-Channel Support - Integrates with practice email systems',
        ]}
      />

      <AgentImpact
        category={category}
        metrics={[
          { label: 'Workload Reduction', value: '50%', icon: 'trending' },
          { label: 'Response Time', value: '<5 minutes', icon: 'clock' },
          { label: 'Patient Satisfaction', value: '+40%', icon: 'target' },
          { label: 'Audit Trail', value: 'Complete', icon: 'dollar' },
        ]}
      />

      <AgentTechnical
        details={[
          { label: 'Email Systems', value: 'Integrates with Gmail, Outlook, and other platforms' },
          { label: 'NLP Processing', value: 'Advanced intent detection and categorization' },
          { label: 'Security', value: 'HIPAA-compliant with end-to-end encryption' },
          { label: 'Escalation Rules', value: 'Customizable workflows for complex cases' },
        ]}
      />
    </AgentPageLayout>
  )
}

export const Route = createFileRoute('/_marketing/ai-agents/email')({
  component: EmailAgentPage,
})
