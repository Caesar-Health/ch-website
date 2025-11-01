/**
 * AI Agents Data
 * Comprehensive list of all Caesar Health AI agents with categories and metadata
 */

export type AgentCategory = 
  | 'communication' 
  | 'clinical' 
  | 'patient-experience' 
  | 'revenue-cycle' 
  | 'care-coordination'

export interface AgentCategoryConfig {
  id: AgentCategory
  name: string
  description: string
  color: {
    primary: string      // CSS var name
    light: string        // CSS var name
    dark: string         // CSS var name
  }
  icon: string          // Lucide icon name
  benefits?: string[]   // Category-specific benefits
  stats?: {
    label: string
    value: string
  }[]
}

export interface AIAgent {
  id: string
  title: string
  href: string
  description: string
  category: AgentCategory
  featured?: boolean
  icon?: string
  capabilities?: string[]
  impact?: string[]
}

/**
 * Agent Category Configurations
 * Maps each category to its visual styling and metadata
 */
export const agentCategories: Record<AgentCategory, AgentCategoryConfig> = {
  'communication': {
    id: 'communication',
    name: 'Communication',
    description: 'Never miss a call, fax, email, or text again',
    color: {
      primary: 'var(--agent-communication)',
      light: 'var(--agent-communication-light)',
      dark: 'var(--agent-communication-dark)',
    },
    icon: 'MessageSquare',
    benefits: [
      'Zero missed patient communications',
      'Eliminate 2-4 front-desk FTEs',
      '24/7 availability across all channels',
      'Reduce response time to under 5 minutes',
    ],
    stats: [
      { label: 'Annual Savings', value: '$180K-$360K' },
      { label: 'Response Time', value: '<5 minutes' },
      { label: 'Patient Satisfaction', value: '95%+' },
    ],
  },
  'clinical': {
    id: 'clinical',
    name: 'Clinical',
    description: 'From conversation to chart note in seconds',
    color: {
      primary: 'var(--agent-clinical)',
      light: 'var(--agent-clinical-light)',
      dark: 'var(--agent-clinical-dark)',
    },
    icon: 'Stethoscope',
    benefits: [
      'Save 2-3 hours per provider daily',
      'Eliminate documentation burden',
      '99% coding accuracy',
      'Generate revenue-maximizing notes',
    ],
    stats: [
      { label: 'Time Saved', value: '2-3 hrs/day' },
      { label: 'Additional Revenue', value: '$150K-$300K' },
      { label: 'Coding Accuracy', value: '99%' },
    ],
  },
  'patient-experience': {
    id: 'patient-experience',
    name: 'Patient Experience',
    description: 'Engage patients before, during, and after every visit',
    color: {
      primary: 'var(--agent-patient)',
      light: 'var(--agent-patient-light)',
      dark: 'var(--agent-patient-dark)',
    },
    icon: 'Users',
    benefits: [
      'Reduce no-shows by 40-60%',
      'Paperless check-in under 30 seconds',
      'Improve patient satisfaction scores',
      'Increase appointment utilization',
    ],
    stats: [
      { label: 'No-Show Reduction', value: '40-60%' },
      { label: 'Check-in Time', value: '30 seconds' },
      { label: 'Patient Satisfaction', value: '+35%' },
    ],
  },
  'revenue-cycle': {
    id: 'revenue-cycle',
    name: 'Revenue Cycle',
    description: 'From encounter to payment, fully automated',
    color: {
      primary: 'var(--agent-revenue)',
      light: 'var(--agent-revenue-light)',
      dark: 'var(--agent-revenue-dark)',
    },
    icon: 'DollarSign',
    benefits: [
      '99% clean claim rate',
      'Reduce days in A/R by 15-20',
      'Eliminate 50-75% of billing staff',
      'Recover 30-50% more denied claims',
    ],
    stats: [
      { label: 'Clean Claim Rate', value: '99%' },
      { label: 'Days in A/R', value: '-15-20' },
      { label: 'Staff Reduction', value: '50-75%' },
    ],
  },
  'care-coordination': {
    id: 'care-coordination',
    name: 'Care Coordination',
    description: 'Proactive, personalized care at population scale',
    color: {
      primary: 'var(--agent-coordination)',
      light: 'var(--agent-coordination-light)',
      dark: 'var(--agent-coordination-dark)',
    },
    icon: 'Target',
    benefits: [
      'Close care gaps 3x faster',
      'Improve HEDIS scores by 40%',
      'Reduce hospitalizations by 20-30%',
      'Increase quality bonus payments',
    ],
    stats: [
      { label: 'HEDIS Improvement', value: '+40%' },
      { label: 'Hospitalization Reduction', value: '20-30%' },
      { label: 'Quality Bonuses', value: '$50K-$200K' },
    ],
  },
}

/**
 * All AI Agents
 */
export const aiAgents: AIAgent[] = [
  // Overview
  {
    id: 'overview',
    title: 'AI Agents Overview',
    href: '/ai-agents',
    description: 'Meet your 24/7 AI workforce',
    category: 'communication',
    featured: true,
    icon: 'Bot',
  },
  
  // Communication Agents
  {
    id: 'phone',
    title: 'Phone Agent',
    href: '/ai-agents/phone',
    description: 'Never miss a call again',
    category: 'communication',
    icon: 'Phone',
    capabilities: [
      'Natural language understanding',
      'Appointment scheduling',
      'Prescription refills',
      'Multi-language support',
    ],
    impact: [
      'Eliminate 2-3 front-desk FTEs',
      'Zero missed calls',
      '30-second average handle time',
    ],
  },
  {
    id: 'fax',
    title: 'Fax Agent',
    href: '/ai-agents/fax',
    description: 'Instant fax processing',
    category: 'communication',
    icon: 'FileText',
    capabilities: [
      'OCR + NLP',
      'Document classification',
      'Auto-filing',
      'Provider alerts',
    ],
    impact: [
      'Eliminate 1-2 FTEs',
      'Same-day processing',
      'Zero misfiled documents',
    ],
  },
  {
    id: 'email',
    title: 'Email Agent',
    href: '/ai-agents/email',
    description: 'Intelligent email triage',
    category: 'communication',
    icon: 'Mail',
    capabilities: [
      'Intelligent triage',
      'Auto-response',
      'Sentiment analysis',
      'Secure messaging',
    ],
    impact: [
      '50% reduction in email workload',
      '<5 minute response time',
      'Complete audit trail',
    ],
  },
  {
    id: 'sms',
    title: 'SMS Agent',
    href: '/ai-agents/sms',
    description: 'Two-way patient messaging',
    category: 'communication',
    icon: 'MessageSquare',
    capabilities: [
      'Automated reminders',
      'Confirmation & rescheduling',
      'No-show reduction',
      'Two-way conversations',
    ],
    impact: [
      '40-60% reduction in no-shows',
      '90%+ confirmation rate',
      'Reduced phone volume',
    ],
  },

  // Clinical Agents
  {
    id: 'scribe',
    title: 'AI Scribe',
    href: '/ai-agents/scribe',
    description: 'Real-time clinical documentation',
    category: 'clinical',
    icon: 'Stethoscope',
    capabilities: [
      'Ambient listening',
      'Real-time transcription',
      'SOAP note generation',
      'ICD-10/CPT coding',
    ],
    impact: [
      '2-3 hours saved per provider daily',
      '$150K-$300K additional revenue',
      '99% coding accuracy',
    ],
  },
  {
    id: 'clinical-documentation',
    title: 'Clinical Documentation',
    href: '/ai-agents/clinical-documentation',
    description: 'Structure your data',
    category: 'clinical',
    icon: 'ClipboardList',
    capabilities: [
      'Legacy note conversion',
      'Voice note processing',
      'Problem list management',
      'Medication reconciliation',
    ],
    impact: [
      'Unlock historical data',
      'Improve coding accuracy',
      'Reduce manual entry by 80%',
    ],
  },

  // Patient Experience Agents
  {
    id: 'patient-intake',
    title: 'Patient Intake',
    href: '/ai-agents/patient-intake',
    description: 'Digital registration and paperless intake',
    category: 'patient-experience',
    icon: 'ClipboardCheck',
    capabilities: [
      'Digital forms',
      'Smart questionnaires',
      'Insurance verification',
      'Consent management',
    ],
    impact: [
      'Eliminate paper forms',
      'Reduce check-in time to 30 seconds',
      'Improve data accuracy',
    ],
  },
  {
    id: 'patient-education',
    title: 'Patient Education',
    href: '/ai-agents/patient-education',
    description: 'Personalized health education materials',
    category: 'patient-experience',
    icon: 'BookOpen',
    capabilities: [
      'Diagnosis-based education',
      'Medication instructions',
      'Pre-procedure prep',
      'Health literacy adaptation',
    ],
    impact: [
      'Improved adherence',
      'Reduced call-backs',
      'Better outcomes',
    ],
  },
  {
    id: 'appointment-coordination',
    title: 'Appointment Coordination',
    href: '/ai-agents/appointment-coordination',
    description: 'Automated scheduling and no-show reduction',
    category: 'patient-experience',
    icon: 'Calendar',
    capabilities: [
      'Online scheduling',
      'AI-optimized scheduling',
      'Automated reminders',
      'Waitlist management',
    ],
    impact: [
      '40-60% reduction in no-shows',
      '15-20% increase in utilization',
      'Improved patient access',
    ],
  },

  // Revenue Cycle Agents
  {
    id: 'coding-billing',
    title: 'Coding & Billing',
    href: '/ai-agents/coding-billing',
    description: 'Maximize reimbursement',
    category: 'revenue-cycle',
    icon: 'DollarSign',
    capabilities: [
      'Auto-coding',
      'Compliance checking',
      'Claim generation',
      'Charge capture',
    ],
    impact: [
      '99% clean claim rate',
      'Faster payment',
      'Reduce coding staff by 50-75%',
    ],
  },
  {
    id: 'prior-authorization',
    title: 'Prior Authorization',
    href: '/ai-agents/prior-authorization',
    description: 'Automated PA workflow',
    category: 'revenue-cycle',
    icon: 'FileCheck',
    capabilities: [
      'PA requirement detection',
      'Auto-form completion',
      'Submission & tracking',
      'Appeal management',
    ],
    impact: [
      'Save 16 hours per week per provider',
      'Faster approvals',
      'Higher approval rate',
    ],
  },
  {
    id: 'denial-management',
    title: 'Denial Management',
    href: '/ai-agents/denial-management',
    description: 'Identifies and resolves denied claims',
    category: 'revenue-cycle',
    icon: 'RefreshCw',
    capabilities: [
      'Denial detection',
      'Root cause analysis',
      'Auto-correction',
      'Appeal generation',
    ],
    impact: [
      'Recover 30-50% more denied claims',
      'Reduce days in A/R by 15-20',
      'Reduce write-offs by 20-30%',
    ],
  },
  {
    id: 'payment-posting',
    title: 'Payment Posting',
    href: '/ai-agents/payment-posting',
    description: 'Automated payment reconciliation',
    category: 'revenue-cycle',
    icon: 'CreditCard',
    capabilities: [
      'EDI 835 auto-posting',
      'Patient payment posting',
      'Underpayment detection',
      'Reconciliation',
    ],
    impact: [
      'Eliminate 1-2 billing FTEs',
      'Same-day posting',
      '99.9% accuracy',
    ],
  },

  // Care Coordination Agents
  {
    id: 'care-gap',
    title: 'Care Gap Agent',
    href: '/ai-agents/care-gap',
    description: 'Identifies and closes quality measure gaps',
    category: 'care-coordination',
    icon: 'Target',
    capabilities: [
      'Quality measure tracking',
      'Gap identification',
      'Risk stratification',
      'Automated outreach',
    ],
    impact: [
      '3x faster care gap closure',
      '40% improvement in HEDIS scores',
      'Increased quality bonus payments',
    ],
  },
  {
    id: 'referral-management',
    title: 'Referral Management',
    href: '/ai-agents/referral-management',
    description: 'Complete referral loop closure',
    category: 'care-coordination',
    icon: 'Link',
    capabilities: [
      'Specialist matching',
      'Appointment scheduling',
      'Referral tracking',
      'Results retrieval',
    ],
    impact: [
      'Reduce referral leakage',
      'Improve care coordination',
      'Higher patient satisfaction',
    ],
  },
  {
    id: 'chronic-care',
    title: 'Chronic Care Management',
    href: '/ai-agents/chronic-care',
    description: 'Ongoing support for chronic conditions',
    category: 'care-coordination',
    icon: 'Heart',
    capabilities: [
      'Patient monitoring',
      'Medication adherence',
      'Lifestyle coaching',
      'Care plan management',
    ],
    impact: [
      '20-30% reduction in hospitalizations',
      '$40-$60 PMPM revenue',
      'Better quality scores',
    ],
  },
]

/**
 * Helper function to get category config for an agent
 */
export function getAgentCategory(agent: AIAgent): AgentCategoryConfig {
  return agentCategories[agent.category]
}

/**
 * Helper function to get all agents in a category
 */
export function getAgentsByCategory(category: AgentCategory): AIAgent[] {
  return aiAgents.filter(agent => agent.category === category && !agent.featured)
}

/**
 * Helper function to get category color
 */
export function getCategoryColor(category: AgentCategory, variant: 'primary' | 'light' | 'dark' = 'primary'): string {
  return agentCategories[category].color[variant]
}

