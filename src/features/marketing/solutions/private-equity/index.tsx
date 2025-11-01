import {
  TrendingUp,
  Zap,
  DollarSign,
  BarChart3,
  Target,
} from 'lucide-react'
import { SectionHero } from '../../components/section-hero'
import { SectionWrapper } from '../../components/section-wrapper'
import { CtaButton } from '../../components/cta-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function PrivateEquity() {
  return (
    <div>
      {/* Hero Section */}
      <SectionHero
        headline="One Platform. Entire Portfolio. Maximum Efficiency."
        subheadline="You've acquired 5, 10, or 20 healthcare practices—each running different EMRs, billing systems, and workflows. Caesar Health unifies your portfolio with AI-powered standardization, delivering operational efficiency and enterprise visibility at scale."
        primaryCta={{ text: 'Schedule Portfolio Assessment' }}
        secondaryCta={{ text: 'Download PE Playbook' }}
      />

      {/* The Problem */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Your Portfolio is Fragmented. Your Returns Are Suffering.
          </h2>
        </div>

        <div className="mt-12">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Post-Acquisition Reality</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Practice A: Epic (hospital-owned legacy)
              </p>
              <p className="text-muted-foreground">
                • Practice B: athenahealth (independent group)
              </p>
              <p className="text-muted-foreground">
                • Practice C: eClinicalWorks (small practice)
              </p>
              <p className="text-muted-foreground">
                • Practice D: Paper charts (yes, still)
              </p>
              <p className="text-muted-foreground">
                • Practice E: NextGen (different specialty)
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>The Operational Nightmare</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  • No enterprise visibility: Can't aggregate data across portfolio
                </p>
                <p className="text-muted-foreground">
                  • Inconsistent workflows: Each practice operates differently
                </p>
                <p className="text-muted-foreground">
                  • Redundant costs: Paying for 5 different EMRs, 5 RCM vendors, 5
                  care coordination platforms
                </p>
                <p className="text-muted-foreground">
                  • Integration hell: $500K-$2M to connect systems for basic
                  reporting
                </p>
                <p className="text-muted-foreground">
                  • Limited scalability: Can't deploy best practices across portfolio
                </p>
                <p className="text-muted-foreground">
                  • Exit challenges: Buyers discount for operational complexity
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Approaches Don't Work</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">"Rip and Replace"</p>
                  <p className="text-muted-foreground text-sm">
                    • Cost: $2M-$10M+ for portfolio-wide implementation
                  </p>
                  <p className="text-muted-foreground text-sm">
                    • Timeline: 18-24 months
                  </p>
                  <p className="text-muted-foreground text-sm">
                    • Risk: Provider exodus, revenue disruption
                  </p>
                </div>
                <div>
                  <p className="font-semibold">"Leave As-Is"</p>
                  <p className="text-muted-foreground text-sm">
                    • Minimal visibility (manual reporting)
                  </p>
                  <p className="text-muted-foreground text-sm">
                    • Limited efficiency gains
                  </p>
                  <p className="text-muted-foreground text-sm">
                    • Exit value discounted for complexity
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* The Solution */}
      <SectionWrapper className="bg-muted/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The Caesar Health Portfolio Strategy: Standardize Without Disruption
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Model 1: AI Agent Overlay (Fast, Low-Risk)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Deploy Caesar Health's AI agents on top of existing EMRs to
                standardize intake, documentation, and workflows—without replacing
                clinical systems.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Timeline:</strong> 3-6 months across portfolio
                </p>
                <p>
                  <strong>Cost:</strong> $300-$500/provider/month
                </p>
                <p>
                  <strong>Disruption:</strong> Minimal (providers keep familiar EMR)
                </p>
                <p>
                  <strong>Value Creation:</strong> Immediate efficiency gains,
                  enterprise data visibility
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <CardTitle>Model 2: Full Platform Migration (Maximum Value)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Migrate practices to Caesar Health's unified EMR + PM + RCM platform
                over 12-24 months.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Timeline:</strong> Phased rollout (1-2 practices per
                  quarter)
                </p>
                <p>
                  <strong>Cost:</strong> $500-$1,000/provider/month (replaces EMR +
                  RCM + care coordination)
                </p>
                <p>
                  <strong>Disruption:</strong> Managed through phased approach
                </p>
                <p>
                  <strong>Value Creation:</strong> Complete standardization, maximum
                  efficiency, highest exit multiple
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Value Creation Levers */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How Caesar Health Drives Portfolio Returns
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>1. Operational Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold">Front-Office Automation</p>
                  <p className="text-muted-foreground">
                    Reduce staff by 30-50% = $100K-$200K/practice annually
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Clinical Documentation</p>
                  <p className="text-muted-foreground">
                    See 2-4 more patients/day = $150K-$300K/provider annually
                  </p>
                </div>
                <div>
                  <p className="font-semibold">RCM Optimization</p>
                  <p className="text-muted-foreground">
                    Reduce costs from 7-9% to 3-5% = $200K-$500K/practice annually
                  </p>
                </div>
                <p className="border-t pt-4 font-bold text-green-600">
                  Total EBITDA Impact: 15-25% margin improvement
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>2. Enterprise Visibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                • Unified Analytics Dashboard: Real-time view of all practices
              </p>
              <p className="text-muted-foreground">
                • Benchmarking: Compare practices on key metrics
              </p>
              <p className="text-muted-foreground">
                • Identify top/bottom performers
              </p>
              <p className="text-muted-foreground">
                • Deploy best practices across portfolio
              </p>
              <p className="text-muted-foreground">
                • Data-driven compensation and incentives
              </p>
              <p className="text-muted-foreground">
                • Predictive analytics for revenue, patient volume, staffing
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>3. Revenue Growth</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                • Capacity Optimization: 10-15% increase in patient volume
              </p>
              <p className="text-muted-foreground">
                • Service Line Expansion: Deploy successful services from Practice A
                to B, C, D
              </p>
              <p className="text-muted-foreground">
                • Value-Based Care Contracts: $50-$200 PMPM in shared savings
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>4. Scalability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                • Faster Integration: New acquisitions onboard in weeks, not months
              </p>
              <p className="text-muted-foreground">
                • Standard playbook for technology migration
              </p>
              <p className="text-muted-foreground">
                • Immediate data integration for due diligence
              </p>
              <p className="text-muted-foreground">
                • Lower integration costs per acquisition
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary md:col-span-2 lg:col-span-2">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>5. Exit Value (Higher Multiple)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 text-sm md:grid-cols-2">
                <div className="space-y-2">
                  <p className="font-semibold">Operational Excellence Story</p>
                  <p className="text-muted-foreground">
                    "We've standardized operations across 20 practices on one
                    AI-powered platform"
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">Clean Data Room</p>
                  <p className="text-muted-foreground">
                    Unified data for due diligence, no buyer discount for technology
                    fragmentation
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">Strategic Buyer Appeal</p>
                  <p className="text-muted-foreground">
                    Platform can be retained or easily integrated
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-green-600">Multiple Expansion</p>
                  <p className="text-muted-foreground">1-2 turns of EBITDA</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Case Study */}
      <SectionWrapper className="bg-muted/50">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              How [PE Firm] Increased Portfolio EBITDA by 22% in 18 Months
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Portfolio: 12 primary care practices, 85 providers, 150,000 patients
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-semibold">Challenge</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• 4 different EMRs across portfolio</li>
                  <li>• Inconsistent workflows and quality</li>
                  <li>• High overhead (55% of revenue)</li>
                  <li>• Limited visibility for management team</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold">Solution</h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Deployed Caesar Health AI agents to all practices in 6 months</li>
                  <li>• Migrated 6 practices to full platform in 12 months</li>
                  <li>• Standardized workflows and reporting</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 border-t pt-6">
              <h4 className="mb-3 font-semibold">Results</h4>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <p className="text-2xl font-bold text-green-600">18% → 22%</p>
                  <p className="text-muted-foreground text-sm">EBITDA margin (4-point improvement)</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">+$180K</p>
                  <p className="text-muted-foreground text-sm">
                    Revenue per provider annually
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">-35%</p>
                  <p className="text-muted-foreground text-sm">
                    Front-office staff reduction
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">8% → 4%</p>
                  <p className="text-muted-foreground text-sm">RCM costs of collections</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">12x → 14x</p>
                  <p className="text-muted-foreground text-sm">
                    Exit multiple EBITDA (operational excellence premium)
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">$25M+</p>
                  <p className="text-muted-foreground text-sm">
                    Total value creation on $100M exit
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </SectionWrapper>

      {/* ROI Example */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Flexible Pricing for Portfolio Scale
          </h2>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                ROI Example: 10-Practice Portfolio (60 Providers)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 font-semibold">Current State Costs:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• EMR costs: $1.2M/year</li>
                    <li>• RCM vendor fees (7% of $30M): $2.1M/year</li>
                    <li>• Front-office staff: $2.4M/year</li>
                    <li className="font-semibold text-foreground">
                      • Total: $5.7M/year
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 font-semibold">Caesar Health Costs:</h4>
                  <p className="text-muted-foreground mb-4">
                    $700/provider/month × 60 × 12 = $504K/year
                  </p>
                  <h4 className="mb-3 font-semibold">Efficiency Gains:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Eliminate separate RCM: $1.2M savings</li>
                    <li>• Reduce front-office 40%: $1M savings</li>
                    <li className="font-semibold text-green-600">
                      • Total savings: $2.2M/year
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 border-t pt-6">
                <p className="mb-2 text-2xl font-bold text-green-600">
                  Net Value: $1.7M annual savings
                </p>
                <p className="mb-4 text-muted-foreground">
                  Plus Revenue Growth: 10% capacity increase = $3M additional revenue
                  × 20% EBITDA = $600K
                </p>
                <p className="text-3xl font-bold text-primary">
                  Total Annual Value: $2.3M
                </p>
                <p className="text-muted-foreground mt-2">
                  EBITDA Impact: 7.7% margin improvement
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper className="bg-primary/5">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Transform Your Portfolio. Maximize Your Returns.
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg">
            Join the private equity firms using Caesar Health to drive operational
            excellence, accelerate growth, and command premium exit multiples.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton size="lg">Schedule Portfolio Assessment</CtaButton>
            <CtaButton size="lg" variant="outline">
              Download: The PE Playbook for Healthcare IT Consolidation
            </CtaButton>
            <CtaButton size="lg" variant="outline">
              Talk to a Healthcare PE Specialist
            </CtaButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

