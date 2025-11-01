import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Check } from 'lucide-react'
import { agentCategories, getAgentsByCategory, aiAgents } from '@/data/ai-agents'
import { getIconComponent } from '@/lib/get-icon'

// Helper to get agent category color
function getAgentColor(agentTitle: string): string {
  // Match agent title to agent in data
  const agent = aiAgents.find(a => a.title === agentTitle || agentTitle.includes(a.title))
  if (!agent) return 'var(--primary)'
  return agentCategories[agent.category].color.primary
}

export function AIAgentsOverview() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-muted/50 to-background py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Your 24/7 Healthcare Workforce.
              <span className="gold-gradient-text block">No Breaks. No Burnout. No Errors.</span>
            </h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg sm:text-xl">
              Caesar Health's AI agents don't just assist—they execute. From answering phones to processing claims, our autonomous agents handle the administrative burden so your team can focus on patient care.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="gap-2">
                Request Agent Demo <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                See Agents in Action
              </Button>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground">Specialized Agents</div>
              <div className="text-sm text-muted-foreground">Purpose-built for every workflow</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">99.8%</div>
              <div className="text-muted-foreground">Accuracy</div>
              <div className="text-sm text-muted-foreground">Exceeds human performance</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">24/7/365</div>
              <div className="text-muted-foreground">Availability</div>
              <div className="text-sm text-muted-foreground">Never sleeps, never calls in sick</div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="bg-background py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Your Staff is Drowning in Administrative Work
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              The reality of healthcare administration
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4 text-lg font-semibold">Front Office Overwhelm</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• 200+ phone calls per day</li>
                  <li>• 50+ faxes requiring manual processing</li>
                  <li>• 100+ patient emails and messages</li>
                  <li>• Constant scheduling chaos</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4 text-lg font-semibold">Clinical Documentation Burden</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• 6+ hours daily on EHR documentation</li>
                  <li>• 2 hours of admin per 1 hour of patient care</li>
                  <li>• 50% of physician time on screens</li>
                  <li>• Major cause of provider burnout</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4 text-lg font-semibold">Revenue Cycle Chaos</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Manual claims creation and submission</li>
                  <li>• 16 hours/week on prior authorizations</li>
                  <li>• Denial management backlog</li>
                  <li>• $250K+ lost revenue per provider</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Agent Categories */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Explore AI Agents by Category
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Choose a category to see the specialized agents that automate your workflows
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.values(agentCategories).map((category) => {
              const Icon = getIconComponent(category.icon)
              const agentCount = getAgentsByCategory(category.id).length
              
              return (
                <Link
                  key={category.id}
                  to={`/ai-agents/${category.id}`}
                  className="group"
                >
                  <Card className="h-full transition-all hover:shadow-lg border-l-4" style={{ borderLeftColor: category.color.primary }}>
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <div 
                          className="flex h-14 w-14 items-center justify-center rounded-xl"
                          style={{ backgroundColor: `${category.color.primary}20` }}
                        >
                          <Icon className="h-7 w-7" style={{ color: category.color.primary }} />
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                      </div>

                      <h3 className="mb-2 text-xl font-semibold">
                        {category.name}
                      </h3>

                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {category.description}
                      </p>

                      <div className="flex items-center gap-2 text-sm font-medium" style={{ color: category.color.primary }}>
                        <span>{agentCount} AI Agents</span>
                      </div>

                      {category.stats && category.stats.length > 0 && (
                        <div className="mt-4 pt-4 border-t space-y-2">
                          {category.stats.slice(0, 2).map((stat, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{stat.label}</span>
                              <span className="font-semibold" style={{ color: category.color.primary }}>{stat.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* How Agents Work Together */}
      <div className="bg-background py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              The Power of the Agent Ecosystem
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Individual agents are powerful. But when they work together, they create a seamless, autonomous healthcare operation.
            </p>
          </div>

          <Card className="mx-auto max-w-4xl">
            <CardContent className="p-8">
              <h3 className="mb-6 text-xl font-semibold">Example: New Patient Visit Workflow</h3>
              <div className="space-y-4">
                {[
                  { step: 1, agent: 'Phone Agent', action: 'Patient calls, agent verifies insurance and books appointment' },
                  { step: 2, agent: 'Patient Intake', action: 'Sends digital forms 48 hours before visit' },
                  { step: 3, agent: 'SMS Agent', action: 'Sends reminders at 48hr, 24hr, and 2hr before visit' },
                  { step: 4, agent: 'Appointment Coordination', action: '30-second check-in with pre-populated information' },
                  { step: 5, agent: 'AI Scribe', action: 'Generates SOAP note and suggests billing codes in real-time' },
                  { step: 6, agent: 'Clinical Documentation', action: 'Auto-generates lab orders and e-prescribes medications' },
                  { step: 7, agent: 'Coding & Billing', action: 'Reviews note, assigns codes, generates and submits claim' },
                  { step: 8, agent: 'Patient Education', action: 'Sends diagnosis-specific materials to patient portal' },
                  { step: 9, agent: 'Care Gap Agent', action: 'Schedules follow-up appointment for lab review' },
                  { step: 10, agent: 'Payment Posting', action: 'Insurance payment auto-posted to patient account' },
                ].map(({ step, agent, action }) => {
                  const agentColor = getAgentColor(agent)
                  return (
                    <div key={step} className="flex gap-4">
                      <div 
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                        style={{ backgroundColor: agentColor }}
                      >
                        {step}
                      </div>
                      <div>
                        <div className="font-medium">{agent}</div>
                        <div className="text-muted-foreground text-sm">{action}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="mt-8 rounded-lg bg-primary/10 p-4 text-center">
                <p className="font-semibold text-primary">
                  Result: Completely autonomous workflow from first call to final payment—zero manual data entry.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Agent Intelligence */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Built on the Most Advanced Healthcare AI
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4 text-lg font-semibold">Continuous Learning</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground text-sm">
                      Pre-trained on millions of clinical encounters and billing transactions
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground text-sm">
                      Machine learning models updated weekly with new data
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground text-sm">
                      Practice-specific customization and workflow adaptation
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4 text-lg font-semibold">Security & Compliance</h3>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground text-sm">
                      HIPAA compliant with end-to-end encryption
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground text-sm">
                      SOC 2 Type II certified with annual third-party audits
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground text-sm">
                      Explainable AI with transparent logic for all decisions
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="gold-gradient py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Deploy Your AI Workforce?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              See how Caesar Health agents can transform your practice in a live demo.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                Schedule Agent Demo <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-white bg-white/10 text-white hover:bg-white hover:text-[#8B6914]">
                Download Complete Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

