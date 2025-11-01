import {
  TrendingUp,
  Users,
  Activity,
  Target,
  Building2,
  Heart,
} from 'lucide-react'
import { SectionHero } from '../../components/section-hero'
import { SectionWrapper } from '../../components/section-wrapper'
import { CtaButton } from '../../components/cta-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ValueBasedCare() {
  return (
    <div>
      {/* Hero Section */}
      <SectionHero
        headline="Stop Just Aligning. Start Executing."
        subheadline="Your payers and providers agree on value-based care goals. But fragmented data, disconnected systems, and manual workflows are killing your results. Caesar Health is the first platform built for synchronized payer-provider execution."
        primaryCta={{ text: 'See the VBC Platform' }}
        secondaryCta={{ text: 'Download VBC Playbook' }}
      />

      {/* The Problem */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            You're Aligned on Goals. But Execution is Broken.
          </h2>
        </div>

        <div className="mt-12">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">The Alignment Paradox</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                • <strong>100% of providers</strong> and <strong>97% of payers</strong>{' '}
                say their VBC goals are aligned
              </p>
              <p className="text-muted-foreground">
                • But they're operating <strong>in parallel, not in concert</strong>
              </p>
              <p className="text-muted-foreground">
                • Result: Technology investments fail to deliver ROI, and VBC scaling
                stalls
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Fragmented Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  • Only 33% rate data integration as "excellent"
                </p>
                <p className="text-muted-foreground">
                  • Only 46-53% confident in patient data accuracy
                </p>
                <p className="text-muted-foreground">
                  • Data flows in batches (daily/weekly), not real-time
                </p>
                <p className="text-muted-foreground">
                  • Multiple EMRs across provider network = data silos
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Disconnected Systems</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  • Providers use Epic, athenahealth, Cerner
                </p>
                <p className="text-muted-foreground">
                  • Separate care coordination platform (Innovaccer, Arcadia)
                </p>
                <p className="text-muted-foreground">
                  • Payers have their own analytics tools
                </p>
                <p className="text-muted-foreground">
                  • Integration costs: $50K-$200K per connection
                </p>
                <p className="text-muted-foreground">
                  • Annual platform costs: $500K-$2M+ for care coordination alone
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Trust Deficit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  • 100% of organizations use AI
                </p>
                <p className="text-muted-foreground">
                  • But only 40% are fully committed to AI adoption
                </p>
                <p className="text-muted-foreground">
                  • Concerns: Hallucinations, transparency, governance
                </p>
                <p className="text-muted-foreground">
                  • Only 30-32% offer extensive AI training
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Manual Care Coordination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">
                  • Care managers work in 2-3 different systems
                </p>
                <p className="text-muted-foreground">
                  • Care gaps identified days after encounters (batch data)
                </p>
                <p className="text-muted-foreground">
                  • No real-time feedback loop to providers
                </p>
                <p className="text-muted-foreground">
                  • Duplicate documentation across platforms
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* The Solution */}
      <SectionWrapper className="bg-muted/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The Operating System for Value-Based Care
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg">
            The Caesar Health VBC Architecture
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Layer 1: Clinical Operations (Provider-Facing)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • AI-first EMR with automated documentation
              </p>
              <p className="text-muted-foreground">
                • Real-time care gap alerts during patient encounters
              </p>
              <p className="text-muted-foreground">
                • Quality measure tracking embedded in workflows
              </p>
              <p className="text-muted-foreground">
                • Risk stratification visible to providers at point of care
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Layer 2: Population Health Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Unified patient registry across all providers in network
              </p>
              <p className="text-muted-foreground">
                • Predictive analytics for hospitalization risk, care gaps
              </p>
              <p className="text-muted-foreground">
                • Care team coordination with shared worklists
              </p>
              <p className="text-muted-foreground">
                • Automated patient outreach (calls, texts, emails)
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary border-2">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>
                Layer 3: Payer Collaboration (The Breakthrough)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">
                • Real-time data sharing with health plans (not retrospective claims)
              </p>
              <p className="text-muted-foreground">
                • Shared quality dashboards showing HEDIS, Star Ratings, MIPS
                performance
              </p>
              <p className="text-muted-foreground">
                • Collaborative care management: Payer and provider care managers
                see same data
              </p>
              <p className="text-muted-foreground">
                • Transparent financial tracking: Shared savings, quality bonuses,
                contract performance
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Key Capabilities */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Key Capabilities
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>1. Real-Time Care Gap Closure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Patient schedules appointment → AI pre-visit planning identifies
                care gaps → During encounter, provider sees alerts → Orders placed
                in-system → Quality dashboard updates in real-time
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Impact:</p>
                <p className="text-muted-foreground text-sm">
                  • 3x faster care gap closure vs. batch-based systems
                </p>
                <p className="text-muted-foreground text-sm">
                  • 40% improvement in HEDIS scores in first year
                </p>
                <p className="text-muted-foreground text-sm">
                  • 80% reduction in manual chart review
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Predictive Risk Stratification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                AI analyzes clinical data, claims, SDoH → Identifies high-risk
                patients → Auto-assigns to care manager → Suggests evidence-based
                interventions
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Impact:</p>
                <p className="text-muted-foreground text-sm">
                  • 25% reduction in preventable hospitalizations
                </p>
                <p className="text-muted-foreground text-sm">
                  • $500-$1,000 PMPM savings for high-risk populations
                </p>
                <p className="text-muted-foreground text-sm">
                  • Earlier interventions before patients decompensate
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Unified Care Team Workflows</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Care managers, providers, specialists, social workers share one
                platform → Collaborative care plans → Secure messaging and handoffs
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Impact:</p>
                <p className="text-muted-foreground text-sm">
                  • Eliminate duplicate documentation across systems
                </p>
                <p className="text-muted-foreground text-sm">
                  • 50% faster care team communication
                </p>
                <p className="text-muted-foreground text-sm">
                  • Improved patient experience with coordinated outreach
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Payer-Provider Transparency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Health plan gets secure, real-time access to quality metrics →
                Shared dashboard → Automated reporting → Financial reconciliation
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Impact:</p>
                <p className="text-muted-foreground text-sm">
                  • Eliminate trust issues with transparent, auditable data
                </p>
                <p className="text-muted-foreground text-sm">
                  • Faster payment of quality bonuses
                </p>
                <p className="text-muted-foreground text-sm">
                  • Stronger payer relationships through collaboration
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Use Cases by Organization Type */}
      <SectionWrapper className="bg-muted/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Use Cases by Organization Type
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>For ACOs (Accountable Care Organizations)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <strong>Challenge:</strong> Managing care across independent
                practices with different EMRs
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Caesar Health Solution:</strong> Deploy across all network
                providers or integrate with existing EMRs → Unified patient registry
                → Real-time quality reporting to CMS
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Results:</p>
                <p className="text-muted-foreground text-sm">
                  • $2-5M additional shared savings in year one (10K-patient ACO)
                </p>
                <p className="text-muted-foreground text-sm">
                  • Eliminate $500K-$1M in care coordination platform costs
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>For Medicare Advantage Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <strong>Challenge:</strong> Improving Star Ratings while managing
                medical costs
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Caesar Health Solution:</strong> Provider-facing tools that
                make quality improvement easy → Real-time Star Ratings dashboard →
                Automated HEDIS gap closure campaigns
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Results:</p>
                <p className="text-muted-foreground text-sm">
                  • 0.5-1.0 Star Rating improvement in 2 years
                </p>
                <p className="text-muted-foreground text-sm">
                  • $50-$100 PMPM revenue increase from higher ratings
                </p>
                <p className="text-muted-foreground text-sm">
                  • 10-15% reduction in medical costs
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>For Health Systems with VBC Contracts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <strong>Challenge:</strong> Transitioning employed providers from
                fee-for-service to value-based mindset
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Caesar Health Solution:</strong> EMR that embeds VBC
                workflows → Provider scorecards → Financial incentives tied to
                platform metrics
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Results:</p>
                <p className="text-muted-foreground text-sm">
                  • Faster provider adoption of VBC behaviors
                </p>
                <p className="text-muted-foreground text-sm">
                  • Improved quality metrics without provider burnout
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>For Medicaid Managed Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <strong>Challenge:</strong> Managing complex, high-need populations
                with social determinants of health
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Caesar Health Solution:</strong> Integrated SDoH screening →
                Care coordination for behavioral health + medical comorbidities →
                Real-time alerts for ER visits
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold">Results:</p>
                <p className="text-muted-foreground text-sm">
                  • 20-30% reduction in ER utilization
                </p>
                <p className="text-muted-foreground text-sm">
                  • Better management of super-utilizers
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pricing That Aligns with Your Success
          </h2>
        </div>

        <div className="mt-12">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Per Member Per Month (PMPM)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  <strong>Payer-Sponsored:</strong> $2-5 PMPM
                </p>
                <p className="text-muted-foreground mb-2 text-sm">
                  (payer pays, providers get free access)
                </p>
                <p className="text-muted-foreground mt-4">
                  <strong>Provider-Sponsored:</strong> $1-3 PMPM
                </p>
                <p className="text-muted-foreground text-sm">
                  (ACO pays based on attributed lives)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Per Provider</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  <strong>$500-$1,000</strong>/provider/month
                </p>
                <p className="text-muted-foreground text-sm">
                  Includes full EMR + population health
                </p>
                <p className="text-muted-foreground mt-4 text-sm">
                  Best for smaller ACOs or medical groups
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Shared Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  % of incremental shared savings or quality bonuses
                </p>
                <p className="text-muted-foreground mt-4 text-sm">
                  <strong>Fully aligned incentives</strong> (we win when you win)
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-2xl">
                ROI Example: 50,000-Life Medicare ACO
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold">Current State Costs:</p>
                <p className="text-muted-foreground">
                  • Care coordination platform: $1.5M/year
                </p>
                <p className="text-muted-foreground">
                  • EMR costs across network: $2M/year
                </p>
                <p className="text-muted-foreground">• RCM vendor fees: $1M/year</p>
                <p className="text-muted-foreground font-semibold">
                  • Total: $4.5M/year
                </p>
              </div>
              <div>
                <p className="font-semibold">Caesar Health Cost:</p>
                <p className="text-muted-foreground">
                  $3 PMPM × 50,000 lives × 12 months = $1.8M/year
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="text-2xl font-bold text-green-600">
                  Net Savings: $2.7M/year
                </p>
                <p className="mt-2 font-semibold">Plus Performance Gains:</p>
                <p className="text-muted-foreground">
                  • Additional shared savings: $2-5M/year
                </p>
                <p className="text-muted-foreground">
                  • Quality bonus improvements: $500K-$1M/year
                </p>
                <p className="mt-4 text-2xl font-bold text-primary">
                  Total Value: $5-8M/year
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
            Ready to Lead the Value-Based Care Revolution?
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg">
            Join the ACOs, health plans, and health systems that are moving beyond
            fragmented systems to unified, AI-powered collaboration.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton size="lg">Schedule VBC Platform Demo</CtaButton>
            <CtaButton size="lg" variant="outline">
              Download: The Complete Guide to VBC Technology Selection
            </CtaButton>
            <CtaButton size="lg" variant="outline">
              Talk to a VBC Specialist
            </CtaButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

