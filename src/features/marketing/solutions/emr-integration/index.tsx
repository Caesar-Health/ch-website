import { Phone, Mail, FileText, MessageSquare, Shield } from 'lucide-react'
import { SectionHero } from '../../components/section-hero'
import { SectionWrapper } from '../../components/section-wrapper'
import { CtaButton } from '../../components/cta-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function EmrIntegration() {
  return (
    <div>
      {/* Hero Section */}
      <SectionHero
        headline="Make Your EMR Smarter Without Ripping It Out"
        subheadline="Not ready to replace Epic or athenahealth? No problem. Caesar Health's AI agents integrate seamlessly with your existing EMR to automate intake, documentation, and administrative workflows—while you keep your current clinical system."
        primaryCta={{ text: 'See Integration Options' }}
        secondaryCta={{ text: 'Download Integration Guide' }}
      />

      {/* The Problem */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            You've Invested Millions in Your EMR. But It's Still Not Intelligent.
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Manual Intake Overload</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Staff spend hours transcribing phone calls, faxes, and patient
                messages into your EMR
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Documentation Burden</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Providers spend 6+ hours daily on EHR documentation, leading to
                burnout
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disconnected Add-Ons</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You've bought an AI scribe, a patient portal, and a care
                coordination tool—but they don't talk to each other
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Entry Duplication</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Same information entered multiple times across different systems
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limited AI Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your EMR vendor's "AI features" are basic and lag behind innovation
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* The Solution */}
      <SectionWrapper className="bg-muted/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Caesar Health AI Agents: The Intelligence Layer for Your EMR
          </h2>
        </div>

        <div className="mt-12 space-y-8">
          <div>
            <h3 className="mb-4 text-2xl font-semibold">
              Step 1: Seamless Integration
            </h3>
            <p className="text-muted-foreground text-lg">
              Our platform connects to your existing EMR via FHIR, HL7, or direct
              API integration. No disruption to current workflows.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold">
              Step 2: AI Agents Take Over Intake
            </h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Phone Agent</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Answers patient calls, schedules appointments, updates
                    information—writes directly to your EMR
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Fax Agent</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Processes incoming faxes (referrals, lab results, records),
                    extracts data, files in patient charts
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Email Agent</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Triages patient emails, routes urgent messages, auto-responds to
                    common questions
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>SMS Agent</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Handles appointment confirmations, reminders, and patient
                    inquiries via text
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold">
              Step 3: AI Scribe Enhances Documentation
            </h3>
            <p className="text-muted-foreground text-lg">
              Our ambient scribe listens to patient encounters and generates
              structured notes that flow directly into your EMR's note template—no
              copy-paste required.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold">
              Step 4: Intelligence Flows Both Ways
            </h3>
            <p className="text-muted-foreground text-lg">
              Caesar Health pulls patient context from your EMR to inform AI
              decisions, then writes structured data back. Your EMR remains the
              system of record.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Key Benefits */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Key Benefits
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-semibold">For Providers</h3>
            <ul className="text-muted-foreground space-y-3">
              <li>• Reclaim 2-3 hours per day from reduced documentation burden</li>
              <li>• Focus on patients, not screens during encounters</li>
              <li>• Reduce burnout with AI handling administrative tasks</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">For Staff</h3>
            <ul className="text-muted-foreground space-y-3">
              <li>• Eliminate manual data entry from phone calls, faxes, emails</li>
              <li>• Faster patient response times with 24/7 AI agents</li>
              <li>• Reduce staffing costs by 30-50% for front-office roles</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold">For Leadership</h3>
            <ul className="text-muted-foreground space-y-3">
              <li>• Protect your EMR investment while gaining cutting-edge AI</li>
              <li>• Faster ROI than full EMR replacement (months vs. years)</li>
              <li>• Modular approach: Start with one agent, expand as you see value</li>
              <li>
                • Vendor-agnostic: Works with Epic, athenahealth, Cerner,
                eClinicalWorks, and more
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Integration Options */}
      <SectionWrapper className="bg-muted/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Flexible Integration for Any EMR
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Option 1: Standalone AI Agents</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Deploy our intake agents (phone, fax, email, SMS) that write to
                your EMR via API. Keep your current clinical workflows.
              </p>
              <p className="text-sm font-semibold">Best for:</p>
              <p className="text-muted-foreground text-sm">
                Organizations happy with clinical documentation but drowning in
                intake volume.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Option 2: AI Scribe + Agents</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Add our ambient scribe to automate clinical documentation alongside
                intake automation.
              </p>
              <p className="text-sm font-semibold">Best for:</p>
              <p className="text-muted-foreground text-sm">
                Practices where provider burnout is the primary concern.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Option 3: Full Intelligence Layer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Deploy all AI agents plus our population health module for care
                coordination and VBC tracking.
              </p>
              <p className="text-sm font-semibold">Best for:</p>
              <p className="text-muted-foreground text-sm">
                ACOs and value-based care organizations that need both clinical
                efficiency and population management.
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Technical Details */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Enterprise-Grade Integration, Zero Disruption
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-semibold">Integration Methods</h3>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">FHIR API</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Modern, standards-based integration for real-time data exchange
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">HL7 v2 Messaging</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Legacy integration for older EMR systems
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Direct Database</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    For supported EMRs, direct read/write access (most secure and
                    performant)
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">SMART on FHIR</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Launch Caesar Health from within your EMR interface
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold">Security & Compliance</h3>
            <ul className="text-muted-foreground space-y-3">
              <li className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>HIPAA compliant with BAA</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>SOC 2 Type II certified</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>End-to-end encryption</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Audit logs for all AI actions</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Human-in-the-loop for critical decisions</span>
              </li>
            </ul>

            <h3 className="mb-6 mt-8 text-2xl font-semibold">
              Implementation Timeline
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold">Week 1-2</p>
                <p className="text-muted-foreground text-sm">
                  Technical integration and testing
                </p>
              </div>
              <div>
                <p className="font-semibold">Week 3</p>
                <p className="text-muted-foreground text-sm">
                  Staff training and pilot with 2-3 providers
                </p>
              </div>
              <div>
                <p className="font-semibold">Week 4</p>
                <p className="text-muted-foreground text-sm">
                  Full rollout across organization
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ROI Calculator */}
      <SectionWrapper className="bg-muted/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pay for What You Use. See ROI Immediately.
          </h2>
        </div>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Example: 10-provider primary care practice
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold">Current front-office staff cost:</p>
                <p className="text-muted-foreground">
                  4 FTEs × $40K = $160K/year
                </p>
              </div>
              <div>
                <p className="font-semibold">Caesar Health cost:</p>
                <p className="text-muted-foreground">
                  $500/month × 12 = $6K/year (phone + fax agents)
                </p>
              </div>
              <div>
                <p className="font-semibold">Staff reduction:</p>
                <p className="text-muted-foreground">
                  Eliminate 2 FTEs = $80K/year savings
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="text-2xl font-bold text-green-600">
                  Net savings: $74K/year
                </p>
                <p className="text-muted-foreground">Payback period: &lt; 1 month</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Enhance Your EMR Today. Replace It Tomorrow (If You Want).
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-3xl text-lg">
            Start with AI agents integrated into your current system. When you're
            ready for a full platform, we'll migrate you seamlessly.
          </p>
          <div className="mt-10">
            <CtaButton size="lg">Schedule Integration Consultation</CtaButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

