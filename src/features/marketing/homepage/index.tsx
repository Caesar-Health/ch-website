import { Link } from '@tanstack/react-router'
import {
  Phone,
  FileText,
  Calendar,
  CreditCard,
  BarChart3,
  Users,
  Bot,
  Zap,
  Shield,
  TrendingUp,
} from 'lucide-react'
import { SectionHero } from '../components/section-hero'
import { SectionWrapper } from '../components/section-wrapper'
import { FeatureCard } from '../components/feature-card'
import { ComparisonTable } from '../components/comparison-table'
import { CtaButton } from '../components/cta-button'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Homepage() {
  return (
    <div>
      {/* Hero Section */}
      <SectionHero
        headline="The First AI-Native Healthcare Platform Built for the Value-Based Care Era"
        subheadline="Stop duct-taping solutions together. Caesar Health unifies EMR, practice management, and revenue cycle into one intelligent platform—where AI agents automate intake, documentation, and coordination so you can focus on what matters: patient care."
        primaryCta={{ text: 'Request a Demo' }}
        secondaryCta={{ text: 'See How It Works' }}
      />

      {/* Hero Supporting Points */}
      <SectionWrapper className="bg-muted/50 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold">AI Agents, Not Add-Ons</h3>
            <p className="text-muted-foreground">
              Built from the ground up with AI at the core. Every phone call, fax,
              email, and message is processed by intelligent agents that convert
              unstructured data into actionable clinical information—automatically.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              One Platform, Complete Workflow
            </h3>
            <p className="text-muted-foreground">
              No more juggling Epic for clinical notes, Innovaccer for population
              health, and a separate RCM vendor for billing. Caesar Health is the
              unified operating system for modern healthcare delivery.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Value-Based Care Ready</h3>
            <p className="text-muted-foreground">
              While competitors retrofit AI onto legacy systems, we designed for the
              future: real-time payer collaboration, embedded quality tracking, and
              synchronized execution of value-based contracts.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Problem Section */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Healthcare IT Is Broken. You Shouldn't Need Five Systems to Deliver
            Care.
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg">
            What Most Practices Deal With
          </p>
        </div>

        <div className="mt-12 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>The Current Reality</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="text-muted-foreground space-y-2">
                <li>• EMR for clinical documentation (Epic, athenahealth, Cerner)</li>
                <li>• Separate practice management system</li>
                <li>• Third-party RCM vendor (3-8% of collections)</li>
                <li>
                  • Care coordination platform ($500K-$2M/year)
                </li>
                <li>
                  • AI scribe bolt-on ($99-$149/provider/month)
                </li>
                <li>
                  • Integration costs: $50K-$200K per connection
                </li>
                <li className="font-semibold text-foreground">
                  • Total annual cost: $1M-$3M+ for mid-sized practices
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>The Pain</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2">
                <li>• Data trapped in silos</li>
                <li>
                  • Manual data entry consuming 6+ hours per day per clinician
                </li>
                <li>• Delayed insights (batch uploads, not real-time)</li>
                <li>• Duplicate documentation across systems</li>
                <li>• Staff burnout from system-switching</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Solution Section */}
      <SectionWrapper className="bg-muted/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            One Platform. Infinite Intelligence.
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg">
            The Caesar Health Difference
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>1. AI-First Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2">
                <li>• Autonomous agents handle phone, fax, email, SMS intake</li>
                <li>• AI scribe converts conversations to structured clinical notes</li>
                <li>
                  • Natural language processing extracts ICD-10, CPT codes
                  automatically
                </li>
                <li>• No manual data entry required</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>2. Unified Clinical & Business Operations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2">
                <li>• Patient management and scheduling</li>
                <li>• Encounter documentation with AI assistance</li>
                <li>• Integrated billing and claims management</li>
                <li>• Revenue cycle automation (99% clean claim rate)</li>
                <li>• All in one database, one interface, one login</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>3. Built-In Population Health & VBC</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2">
                <li>• Real-time care gap identification during visits</li>
                <li>• Risk stratification and predictive analytics</li>
                <li>
                  • Quality measure tracking (HEDIS, MIPS, Star Ratings)
                </li>
                <li>• Payer collaboration tools for synchronized execution</li>
                <li>• No separate care coordination platform needed</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>4. Interoperability by Design</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2">
                <li>• FHIR-native architecture</li>
                <li>
                  • Seamless data exchange with hospitals, labs, pharmacies
                </li>
                <li>• HL7, SMART on FHIR, NCPDP compliant</li>
                <li>• API-first for easy integrations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Use Cases Section */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for Every Care Model, Specialty, and Scale
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Enhance Your Existing EMR</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Add AI superpowers to Epic, athenahealth, or Cerner. Our agents
                integrate seamlessly to automate intake and documentation.
              </p>
              <Link to="/solutions/emr-integration">
                <Button variant="link" className="p-0">
                  Learn More →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Mental Health & Behavioral Health</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Purpose-built workflows for therapy notes, treatment plans, and
                outcome tracking. HIPAA+ privacy for sensitive care.
              </p>
              <Link to="/solutions/behavioral-health">
                <Button variant="link" className="p-0">
                  Learn More →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Value-Based Care Organizations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The platform ACOs and MA plans need: unified payer-provider
                collaboration, real-time quality tracking, and care coordination.
              </p>
              <Link to="/solutions/value-based-care">
                <Button variant="link" className="p-0">
                  Learn More →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Dermatology & Image-Centric Specialties</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                AI-powered image analysis, cosmetic vs. medical billing split, and
                telemedicine-optimized workflows.
              </p>
              <Link to="/solutions/dermatology">
                <Button variant="link" className="p-0">
                  Learn More →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Private Equity Portfolio Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Deploy across your portfolio to standardize operations, reduce
                costs, and drive efficiency at scale.
              </p>
              <Link to="/solutions/private-equity">
                <Button variant="link" className="p-0">
                  Learn More →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Features Showcase */}
      <SectionWrapper className="bg-muted/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Every Feature You Need. Nothing You Don't.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Phone}
            title="Intelligent Intake"
            description="Phone, fax, email, SMS—all processed by AI agents. Patient information extracted and structured automatically."
          />
          <FeatureCard
            icon={FileText}
            title="AI Clinical Scribe"
            description="Ambient listening during encounters. Generates SOAP notes, suggests diagnoses, auto-codes visits."
          />
          <FeatureCard
            icon={Calendar}
            title="Smart Scheduling"
            description="AI-optimized appointment booking with automated reminders and no-show prediction."
          />
          <FeatureCard
            icon={CreditCard}
            title="Automated RCM"
            description="Claims generation, submission, denial management, and payment posting—all autonomous."
          />
          <FeatureCard
            icon={BarChart3}
            title="Population Health Dashboard"
            description="Real-time view of your patient panel: care gaps, risk scores, quality measures, and intervention opportunities."
          />
          <FeatureCard
            icon={Users}
            title="Payer Collaboration Portal"
            description="Share data securely with health plans. Track shared savings, quality bonuses, and contract performance."
          />
        </div>
      </SectionWrapper>

      {/* Social Proof */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Forward-Thinking Healthcare Organizations
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground italic">
                "Caesar Health eliminated 4 separate systems and saved us $800K
                annually."
              </p>
              <p className="text-muted-foreground mt-4 text-sm">
                — Dr. [Name], Chief Medical Officer, [ACO Name]
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground italic">
                "Our care managers finally have real-time data. Care gaps are closed
                3x faster."
              </p>
              <p className="text-muted-foreground mt-4 text-sm">
                — [Name], Director of Quality, [Health Plan]
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground italic">
                "The AI scribe alone saved our providers 2 hours per day. The
                integrated RCM was a game-changer."
              </p>
              <p className="text-muted-foreground mt-4 text-sm">
                — [Name], Practice Administrator, [Behavioral Health Group]
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Competitive Differentiation */}
      <SectionWrapper className="bg-muted/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Caesar Health vs. The Alternatives
          </h2>
        </div>

        <div className="mt-12">
          <ComparisonTable
            rows={[
              {
                feature: 'AI-First Architecture',
                caesarHealth: true,
                traditional: false,
                careCoordination: false,
              },
              {
                feature: 'Unified EMR + PM + RCM',
                caesarHealth: true,
                traditional: false,
                careCoordination: false,
              },
              {
                feature: 'Real-Time Population Health',
                caesarHealth: true,
                traditional: false,
                careCoordination: true,
              },
              {
                feature: 'Payer Collaboration',
                caesarHealth: true,
                traditional: false,
                careCoordination: '⚠️ Analytics only',
              },
              {
                feature: 'Total Cost',
                caesarHealth: '$',
                traditional: '$$$',
                careCoordination: '$$',
              },
              {
                feature: 'Implementation Time',
                caesarHealth: 'Weeks',
                traditional: '12-18 months',
                careCoordination: '3-6 months',
              },
            ]}
          />
        </div>
      </SectionWrapper>

      {/* Pricing Teaser */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Transparent Pricing. Predictable ROI.
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg">
            We believe healthcare technology should reduce costs, not add to them.
            Our pricing is designed to deliver immediate ROI through reduced
            staffing needs, faster reimbursement, and eliminated redundant systems.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">$500K-$2M/year</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Eliminate separate care coordination platform
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">$150K-$500K/year</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Reduce RCM costs from 6-8% to 3-5% of collections (for $5M practice)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">$200K-$400K/year</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Decrease administrative staff needs
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <CtaButton size="lg">Request Custom Pricing</CtaButton>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper className="bg-primary/5">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Build the Future of Healthcare Delivery?
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg">
            Join the organizations moving beyond fragmented systems to unified,
            AI-powered care.
          </p>
          <div className="mt-10">
            <CtaButton size="lg">Schedule a Demo</CtaButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

